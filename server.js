const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const publicDir = path.join(root, "public");

function loadEnv() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=\s]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
  }
}

loadEnv();

const apiBase = (process.env.DIFY_API_BASE || "https://api.dify.ai/v1").replace(/\/$/, "");
const apiKey = process.env.DIFY_API_KEY || "";
const port = Number(process.env.PORT || 4173);

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

async function dify(pathname, options = {}) {
  if (!apiKey) throw new Error("尚未配置 DIFY_API_KEY");

  const response = await fetch(`${apiBase}${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { message: text || `Dify 返回 HTTP ${response.status}` };
  }

  if (!response.ok) {
    const error = new Error(data.message || `Dify 返回 HTTP ${response.status}`);
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
}

function extractAnswer(result) {
  if (result?.answer) return result.answer;
  if (result?.data?.outputs?.text) return result.data.outputs.text;
  if (result?.data?.outputs?.answer) return result.data.outputs.answer;
  if (result?.data?.text) return result.data.text;
  if (result?.text) return result.text;

  const outputs = result?.data?.outputs || result?.outputs;
  if (outputs && typeof outputs === "object") {
    const firstText = Object.values(outputs).find((value) => typeof value === "string" && value.trim());
    if (firstText) return firstText;
  }

  return "角色暂时没有返回文字。";
}

function shouldFallbackToCompletion(error) {
  const code = error.details?.code;
  return [404, 405].includes(error.status) || code === "not_found" || code === "method_not_allowed";
}

function buildContextMessage({ message, role, mood, memories, world, storyEvent }) {
  const context = [`【当前角色】请始终以「${role}」的身份回应用户。`];

  if (world?.title || world?.intro || world?.rule) {
    const places = Array.isArray(world.places) && world.places.length
      ? `\n地点设定：\n${world.places.slice(0, 6).map((place) => `- ${String(place).slice(0, 100)}`).join("\n")}`
      : "";
    context.push(
      `【世界观】${world.title || "绒耀幼稚园"}\n${world.intro || ""}\n${world.rule || ""}${places}`.trim(),
    );
  }

  if (storyEvent?.title || storyEvent?.context) {
    context.push(
      `【故事事件】${storyEvent.title || "未命名事件"}\n地点：${storyEvent.place || "绒耀幼稚园"}\n${storyEvent.context || ""}`.trim(),
    );
  }

  if (mood?.label || mood?.prompt) {
    context.push(`【今日心情】${mood.label || "未命名心情"}：${mood.prompt || "请参考这个心情回应用户。"}`);
  }

  if (Array.isArray(memories) && memories.length) {
    context.push(`【角色记忆】\n${memories.slice(0, 5).map((item) => `- ${String(item).slice(0, 80)}`).join("\n")}`);
  }

  if (!context.length) return message;

  return `${context.join("\n\n")}\n\n【用户现在说】${message}`;
}

async function handleApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/health") {
    return sendJson(res, 200, {
      ok: true,
      service: "rongyao-kindergarten",
    });
  }

  if (req.method === "GET" && url.pathname === "/api/status") {
    try {
      const parameters = await dify("/parameters");
      return sendJson(res, 200, { connected: true, parameters });
    } catch (error) {
      return sendJson(res, 200, {
        connected: false,
        message: error.message,
        status: error.status || 500,
      });
    }
  }

  if (req.method === "POST" && url.pathname === "/api/message") {
    const attempts = [];

    try {
      const body = await readBody(req);
      const role = String(body.role || body.character || "妲己");
      const message = String(body.message || "").trim();
      const user = String(body.user || "rongyao-kindergarten-web-user");
      const query = buildContextMessage({
        message,
        role,
        mood: body.mood,
        memories: body.memories,
        world: body.world,
        storyEvent: body.storyEvent,
      });

      if (!message) return sendJson(res, 400, { message: "请输入想和角色说的话。" });

      let result;
      try {
        attempts.push({ endpoint: "/workflows/run" });
        result = await dify("/workflows/run", {
          method: "POST",
          body: JSON.stringify({
            inputs: { query, role },
            response_mode: "blocking",
            user,
          }),
        });
        attempts[attempts.length - 1].ok = true;
      } catch (workflowError) {
        attempts[attempts.length - 1].ok = false;
        attempts[attempts.length - 1].status = workflowError.status || 500;
        attempts[attempts.length - 1].code = workflowError.details?.code || null;
        attempts[attempts.length - 1].message = workflowError.message;

        if (!shouldFallbackToCompletion(workflowError)) throw workflowError;

        attempts.push({ endpoint: "/completion-messages" });
        result = await dify("/completion-messages", {
          method: "POST",
          body: JSON.stringify({
            inputs: { query, role, character: role },
            response_mode: "blocking",
            user,
          }),
        });
        attempts[attempts.length - 1].ok = true;
      }

      return sendJson(res, 200, {
        answer: extractAnswer(result),
        raw: result,
        attempts,
      });
    } catch (error) {
      return sendJson(res, error.status || 500, {
        message: error.message,
        details: error.details || null,
        attempts,
      });
    }
  }

  return sendJson(res, 404, { message: "接口不存在。" });
}

function serveStatic(req, res, url) {
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(publicDir, safePath);

  if (!filePath.startsWith(publicDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    return res.end("Not found");
  }

  const ext = path.extname(filePath);
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".webmanifest": "application/manifest+json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  };

  res.writeHead(200, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  fs.createReadStream(filePath).pipe(res);
}

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) return handleApi(req, res, url);
    return serveStatic(req, res, url);
  })
  .listen(port, () => {
    console.log(`Kindergarten roleplay MVP running at http://localhost:${port}`);
  });
