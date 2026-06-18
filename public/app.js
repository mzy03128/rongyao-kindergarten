const characters = [
  { id: "daji", name: "妲己", title: "魅力之狐", className: "甜甜小班", subtitle: "会撒娇，也会认真哄你", mark: "妲", image: "/assets/posters/daji.jpg", description: "妲己在绒耀幼稚园里像一颗会发光的草莓糖，擅长用甜甜的话接住你的坏心情。", note: "适合聊想被哄、撒娇、焦虑和需要一点甜的时候。", opening: "主人来啦，妲己已经把小板凳搬好啦。今天想先让妲己听你说哪件事呀？" },
  { id: "xiaoqiao", name: "小乔", title: "恋之微风", className: "彩虹风车班", subtitle: "轻快明亮，把烦恼吹散", mark: "乔", image: "/assets/posters/xiaoqiao.jpg", description: "小乔像操场边的小风铃，轻轻一响，就把紧绷的心情吹松一点。", note: "适合聊低落、紧张、需要鼓励的时候。", opening: "你来啦！小乔今天带了彩虹风车，我们把不开心一点点吹走好不好？" },
  { id: "wuzetian", name: "武则天", title: "女帝", className: "星光园长班", subtitle: "清醒强大，帮你稳住局面", mark: "武", image: "/assets/posters/wuzetian.jpg", description: "武则天是绒耀幼稚园里气场最稳的园长，会把混乱的事排成清楚的顺序。", note: "适合聊压力、选择、规划和需要被点醒的时刻。", opening: "坐下吧。把困扰你的事讲清楚，本园长陪你把局面看明白。" },
  { id: "xishi", name: "西施", title: "幻纱之灵", className: "水晶午睡班", subtitle: "温柔细腻，很会听你说", mark: "施", image: "/assets/posters/xishi.jpg", description: "西施像午睡花园里一池很安静的水，会慢慢听你说，不催促，也不评判。", note: "适合聊委屈、关系、小心事和说不出口的情绪。", opening: "先坐到我旁边吧。你可以慢慢说，西施会一直听着。" },
  { id: "yuji", name: "虞姬", title: "森之风灵", className: "森林舞蹈班", subtitle: "优雅坚定，给你勇气", mark: "虞", image: "/assets/posters/yuji.jpg", description: "虞姬会用温柔但坚定的方式陪你，把害怕变成可以迈出去的一小步。", note: "适合聊自信、告别、勇气和重新开始。", opening: "别急着否定自己。告诉虞姬，今天是哪一阵风让你不安？" },
  { id: "libai", name: "李白", title: "青莲剑仙", className: "月光诗歌班", subtitle: "洒脱浪漫，把话说轻", mark: "白", image: "/assets/posters/libai.jpg", description: "李白在绒耀幼稚园里像偷偷溜进月光里的诗，会陪你把烦恼说得轻一点。", note: "适合聊迷茫、自由、失眠和想逃离压力的时候。", opening: "来，坐到月光这边。今日心中有风，有梦，还是有事？" },
  { id: "kai", name: "铠", title: "破灭刃锋", className: "积木守护班", subtitle: "沉稳可靠，很有保护感", mark: "铠", image: "/assets/posters/kai.jpg", description: "铠是安静可靠的守护同学，不说空话，会陪你把问题拆小，再一步步解决。", note: "适合聊压力、害怕、安全感和行动建议。", opening: "说吧。我在这里。先把最重的那一块放下来。" },
  { id: "sunquan", name: "孙权", title: "吴地君主", className: "航海地图班", subtitle: "稳重会安排，帮你决定下一步", mark: "权", image: "/assets/posters/sunquan.jpg", description: "孙权像认真整理课表的班长，擅长把复杂事情排成队，让你知道下一步怎么走。", note: "适合聊计划、任务、选择困难和长期目标。", opening: "今日议题是什么？我们先把事情分成三块，再决定第一步。" },
  { id: "yao_star", name: "曜", title: "星辰之子", className: "太阳操场班", subtitle: "活泼自信，很能带动气氛", mark: "曜", image: "/assets/posters/yao-star.jpg", description: "曜像操场上最亮的小太阳，会把你的状态点亮一点，哪怕只是先笑一下。", note: "适合聊没动力、自我怀疑、需要热闹一点的时候。", opening: "主角登场！欸，你今天怎么看起来有点没电？来，先和本天才说说！" },
  { id: "laofuzi", name: "老夫子", title: "万古长明", className: "小黑板班", subtitle: "讲道理，也有点可爱严肃", mark: "夫", image: "/assets/posters/laofuzi.jpg", description: "老夫子是幼稚园里认真又幽默的小老师，会把问题讲成你听得懂的道理。", note: "适合聊学习、习惯、自律和拖延。", opening: "咳咳，小朋友，今日是哪道题难住你了？说来听听。" },
  { id: "dolia", name: "朵莉亚", title: "人鱼之歌", className: "贝壳音乐班", subtitle: "轻盈治愈，像海风一样", mark: "朵", image: "/assets/posters/dolia.jpg", description: "朵莉亚像贝壳里传来的歌声，会把沉下去的心情唱轻一点。", note: "适合聊疲惫、失眠、放松和需要被轻轻陪着的时候。", opening: "我听见你靠近的脚步啦。今天想听一小段海风，还是先说说心事？" },
  { id: "yao_deer", name: "瑶", title: "鹿灵守心", className: "鹿角午睡班", subtitle: "黏人真诚，陪伴感很强", mark: "瑶", image: "/assets/posters/yao-deer.jpg", description: "瑶会贴近你的情绪陪在旁边，不让你一个人待在坏心情里。", note: "适合聊孤独、想被陪、需要安全感的时候。", opening: "我可以坐你旁边吗？你今天的表情像一朵皱起来的小花。" },
  { id: "caiwenji", name: "蔡文姬", title: "天籁弦音", className: "摇篮曲班", subtitle: "软萌治愈，很会哄人", mark: "蔡", image: "/assets/posters/caiwenji.jpg", description: "蔡文姬会用很小很暖的声音陪你，把委屈一点点哄睡。", note: "适合聊难过、想哭、需要被安慰的时候。", opening: "不要怕哦，蔡文姬带了小曲子。你想先哭一会儿，还是先抱抱自己？" },
  { id: "mengqi", name: "梦奇", title: "入梦之灵", className: "软糖梦境班", subtitle: "呆萌可爱，适合放空", mark: "梦", image: "/assets/posters/mengqi.jpg", description: "梦奇像一团会呼吸的软糖云朵，陪你把脑袋里的杂音慢慢放小。", note: "适合聊睡前、压力、脑子停不下来的时候。", opening: "呼噜呼噜。梦奇在这里。你的烦恼是什么味道的软糖呀？" },
  { id: "sangqi", name: "桑启", title: "萤火之旅", className: "萤火故事班", subtitle: "温暖耐心，带一点希望", mark: "桑", image: "/assets/posters/sangqi.jpg", description: "桑启像一盏小小的萤火，会陪你在不确定里找到一点光。", note: "适合聊未来、迷路、慢慢恢复信心。", opening: "我带了一点光来。你不用一下子说完，我们可以从最小的一句话开始。" },
];

characters.forEach((character) => {
  character.avatar = character.image;
  character.portrait = character.image;
});

const requestedCharacter = decodeURIComponent(location.hash.replace(/^#/, ""));
const initialCharacter =
  characters.find((character) => character.id === requestedCharacter || character.name === requestedCharacter) ||
  characters[0];

if (location.hash && requestedCharacter !== initialCharacter.id) {
  history.replaceState(null, "", `#${encodeURIComponent(initialCharacter.id)}`);
}

const affinityStorageKey = "kindergarten-affinity-v1";
const moodStorageKey = "kindergarten-mood-v1";
const memoryStorageKey = "kindergarten-memory-v1";
const affinityLevels = [
  { points: 0, name: "初次入园", hint: "刚刚认识，TA 正在记住你的声音。" },
  { points: 30, name: "同桌熟人", hint: "你们已经有一点默契啦。" },
  { points: 80, name: "课间好友", hint: "TA 开始更懂你的表达方式。" },
  { points: 150, name: "秘密基地伙伴", hint: "你们有了只属于这段关系的小角落。" },
  { points: 260, name: "放学专属搭子", hint: "TA 已经是最懂你的那位陪伴同学。" },
];
const moods = [
  { id: "anxious", label: "有点焦虑", prompt: "用户现在有点焦虑，请先安抚，再慢慢陪 TA 拆开问题。" },
  { id: "comfort", label: "想被哄哄", prompt: "用户想被温柔哄一哄，请多给情绪承接和亲近感。" },
  { id: "rant", label: "想吐槽", prompt: "用户想吐槽，请先站在 TA 这边听完，再轻轻回应。" },
  { id: "tired", label: "没动力", prompt: "用户现在没动力，请用轻松、低压力的方式陪 TA 找回一点点行动感。" },
  { id: "cute", label: "想撒娇", prompt: "用户想撒娇，请用更宠溺、更角色扮演的方式回应。" },
  { id: "advice", label: "需要建议", prompt: "用户需要建议，请先共情，再给清晰可执行的小步骤。" },
];
const worldLore = {
  title: "绒耀幼稚园，今天也在等你入园。",
  intro: "这里把王者角色变成会陪你上课、午睡、放学聊天的幼稚园同学。TA 们保留原来的性格和形象，但说话更轻、更可爱、更会接住情绪。",
  rule: "这里不是战场，而是一座专门收留情绪的小幼稚园。请用当前角色的身份，以温柔、亲近、带一点幼稚园日常感的方式回应用户。",
  places: [
    "彩虹操场：适合发呆、吐槽、把压力晒软一点。",
    "午睡花园：适合被安慰、说晚安、慢慢放松下来。",
    "秘密积木屋：适合讲不敢说出口的小心事。",
    "小黑板角落：适合拆计划、做决定、找下一步。",
  ],
};
const storyEvents = [
  {
    id: "rainy-school",
    title: "雨天放学",
    tag: "被接住",
    place: "彩虹操场",
    prompt: "今天放学突然下雨了，我站在操场边有点不知道该往哪里去。你会怎么来接我？",
    context: "用户进入「雨天放学」事件。场景是绒耀幼稚园的彩虹操场，用户在雨声里有点无助，需要角色主动出现、接住情绪，并保持当前王者角色身份。",
  },
  {
    id: "nap-talk",
    title: "午睡睡不着",
    tag: "轻声陪",
    place: "午睡花园",
    prompt: "午睡时间大家都睡了，但我翻来翻去睡不着。你可以在旁边陪我说一会儿话吗？",
    context: "用户进入「午睡睡不着」事件。场景是午睡花园，回复应轻声、低刺激、慢慢安抚，不要催促用户立刻变好。",
  },
  {
    id: "playground-daze",
    title: "操场边发呆",
    tag: "被发现",
    place: "彩虹操场",
    prompt: "我一个人在操场边发呆，感觉今天有点空空的。你发现我以后，会对我说什么？",
    context: "用户进入「操场边发呆」事件。场景是彩虹操场，角色需要先自然靠近，再温柔询问，不要像问卷一样追问。",
  },
  {
    id: "secret-blocks",
    title: "秘密积木屋",
    tag: "悄悄说",
    place: "秘密积木屋",
    prompt: "我想把一个不太敢说出口的小心事藏进秘密积木屋里。你能陪我一起守着它吗？",
    context: "用户进入「秘密积木屋」事件。角色要强调安全、保密、接纳，让用户可以慢慢说。",
  },
  {
    id: "blackboard-plan",
    title: "小黑板任务",
    tag: "拆小步",
    place: "小黑板角落",
    prompt: "我有一件事情拖了很久，不知道怎么开始。你能把它拆成小黑板上的几个简单步骤吗？",
    context: "用户进入「小黑板任务」事件。场景是小黑板角落，角色要把问题拆成很小、低压力、可以马上做的一步。",
  },
];

const state = {
  character: initialCharacter,
  messages: {},
  affinities: loadAffinities(),
  moods: loadMoods(),
  memories: loadMemories(),
  sending: false,
};

const els = {
  characterList: document.querySelector("#characterList"),
  messageList: document.querySelector("#messageList"),
  messageForm: document.querySelector("#messageForm"),
  messageInput: document.querySelector("#messageInput"),
  storyToggle: document.querySelector("#storyToggle"),
  storyPopover: document.querySelector("#storyPopover"),
  eventList: document.querySelector("#eventList"),
  moodList: document.querySelector("#moodList"),
  moodSummary: document.querySelector("#moodSummary"),
  sendButton: document.querySelector("#sendButton"),
  clearButton: document.querySelector("#clearButton"),
  clearMemoryButton: document.querySelector("#clearMemoryButton"),
  headerAvatar: document.querySelector("#headerAvatar"),
  headerName: document.querySelector("#headerName"),
  portraitImage: document.querySelector("#portraitImage"),
  portraitTag: document.querySelector("#portraitTag"),
  portraitName: document.querySelector("#portraitName"),
  className: document.querySelector("#className"),
  affinityLevel: document.querySelector("#affinityLevel"),
  affinityPoints: document.querySelector("#affinityPoints"),
  affinityNext: document.querySelector("#affinityNext"),
  affinityBar: document.querySelector("#affinityBar"),
  affinityHint: document.querySelector("#affinityHint"),
  memoryList: document.querySelector("#memoryList"),
  memoryEmpty: document.querySelector("#memoryEmpty"),
  characterDescription: document.querySelector("#characterDescription"),
  storyNote: document.querySelector("#storyNote"),
  connectionDot: document.querySelector("#connectionDot"),
  connectionTitle: document.querySelector("#connectionTitle"),
  connectionDetail: document.querySelector("#connectionDetail"),
  toast: document.querySelector("#toast"),
};

function messagesForCurrent() {
  if (!state.messages[state.character.id]) {
    state.messages[state.character.id] = [{ role: "assistant", text: state.character.opening }];
  }
  return state.messages[state.character.id];
}

function loadAffinities() {
  try {
    return JSON.parse(localStorage.getItem(affinityStorageKey)) || {};
  } catch {
    return {};
  }
}

function loadMoods() {
  try {
    return JSON.parse(localStorage.getItem(moodStorageKey)) || {};
  } catch {
    return {};
  }
}

function loadMemories() {
  try {
    return JSON.parse(localStorage.getItem(memoryStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveAffinities() {
  localStorage.setItem(affinityStorageKey, JSON.stringify(state.affinities));
}

function saveMoods() {
  localStorage.setItem(moodStorageKey, JSON.stringify(state.moods));
}

function saveMemories() {
  localStorage.setItem(memoryStorageKey, JSON.stringify(state.memories));
}

function affinityFor(characterId) {
  return Number(state.affinities[characterId] || 0);
}

function moodFor(characterId) {
  return moods.find((mood) => mood.id === state.moods[characterId]) || null;
}

function memoriesFor(characterId) {
  return state.memories[characterId] || [];
}

function memoryTextFrom(message) {
  return message
    .replace(/\s+/g, " ")
    .replace(/[~～。！？!?,，、]+$/g, "")
    .trim()
    .slice(0, 42);
}

function rememberMessage(character, message) {
  const text = memoryTextFrom(message);
  if (text.length < 8) return;

  const existing = memoriesFor(character.id).filter((item) => item.text !== text);
  state.memories[character.id] = [{ text, time: Date.now() }, ...existing].slice(0, 5);
  saveMemories();
  if (state.character.id === character.id) renderMemory();
}

function affinityInfo(points) {
  const current = [...affinityLevels].reverse().find((level) => points >= level.points) || affinityLevels[0];
  const currentIndex = affinityLevels.findIndex((level) => level.name === current.name);
  const next = affinityLevels[currentIndex + 1] || null;
  const start = current.points;
  const end = next?.points || current.points + 100;
  const progress = next ? Math.min(100, Math.round(((points - start) / (end - start)) * 100)) : 100;

  return { current, next, progress };
}

function growAffinity(character, amount) {
  const before = affinityFor(character.id);
  const beforeInfo = affinityInfo(before);
  const after = before + amount;
  const afterInfo = affinityInfo(after);

  state.affinities[character.id] = after;
  saveAffinities();

  if (state.character.id === character.id) {
    renderCharacter();
  } else {
    renderCharacters();
  }

  if (beforeInfo.current.name !== afterInfo.current.name) {
    showToast(`${character.name}和你的关系升级为「${afterInfo.current.name}」啦。`);
  } else {
    showToast(`${character.name}的亲密度 +${amount}`);
  }
}

function renderCharacters() {
  els.characterList.innerHTML = characters
    .map((character, index) => {
      const relation = affinityInfo(affinityFor(character.id)).current.name;
      return `
        <button class="character-card ${character.id === state.character.id ? "active" : ""}" data-character="${character.id}" style="--card-index:${index}" type="button">
          <img src="${character.avatar}" alt="" />
          <span>
            <strong>${character.name}</strong>
            <small>${character.subtitle}</small>
            <em>${relation}</em>
          </span>
          <i></i>
        </button>`;
    })
    .join("");
}

function renderMoods() {
  const selectedMood = moodFor(state.character.id);
  els.moodSummary.textContent = selectedMood
    ? `今天先按「${selectedMood.label}」来陪你。`
    : "先选一个心情，TA 会更懂怎么陪你。";
  els.moodList.innerHTML = moods
    .map(
      (mood) => `
        <button class="mood-chip ${selectedMood?.id === mood.id ? "active" : ""}" data-mood="${mood.id}" type="button">
          ${mood.label}
        </button>`,
    )
    .join("");
}

function renderEvents() {
  els.eventList.innerHTML = storyEvents
    .map(
      (event) => `
        <button class="event-card" data-event="${event.id}" style="--event-index:${storyEvents.indexOf(event)}" type="button">
          <span>${event.tag}</span>
          <strong>${event.title}</strong>
          <small>${event.place} · ${state.character.name}陪你进入</small>
        </button>`,
    )
    .join("");
}

function renderMemory() {
  const memories = memoriesFor(state.character.id);
  els.memoryList.innerHTML = memories
    .map((memory) => `<span>${escapeHtml(memory.text)}</span>`)
    .join("");
  els.memoryEmpty.hidden = memories.length > 0;
  els.clearMemoryButton.disabled = memories.length === 0;
}

function renderCharacter() {
  const character = state.character;
  els.headerAvatar.src = character.avatar;
  els.headerAvatar.alt = `${character.name} 头像`;
  els.headerName.textContent = character.name;
  els.portraitImage.src = character.portrait;
  els.portraitImage.alt = `${character.name} 角色海报`;
  els.portraitImage.style.objectPosition = character.portraitPosition || "50% center";
  els.portraitTag.textContent = character.title;
  els.portraitName.textContent = character.name;
  els.className.textContent = character.className;
  const points = affinityFor(character.id);
  const relation = affinityInfo(points);
  els.affinityLevel.textContent = relation.current.name;
  els.affinityPoints.textContent = `${points} 心心`;
  els.affinityNext.textContent = relation.next ? `距离「${relation.next.name}」还差 ${relation.next.points - points}` : "已经是最高阶段";
  els.affinityBar.style.width = `${relation.progress}%`;
  els.affinityHint.textContent = relation.current.hint;
  els.characterDescription.textContent = character.description;
  els.storyNote.textContent = character.note;
  renderCharacters();
  renderEvents();
  renderMoods();
  renderMemory();
  renderMessages();
}

function renderMessages() {
  els.messageList.innerHTML = messagesForCurrent()
    .map(
      (message) => `
        <div class="message-row ${message.role === "user" ? "user" : ""} ${message.storyEvent ? "story-message" : ""}">
          ${message.role === "assistant" ? `<img class="message-avatar" src="${state.character.avatar}" alt="" />` : ""}
          <div>
            <div class="message-bubble ${message.storyEvent ? "story-bubble" : ""}">${renderMessageContent(message)}</div>
            <div class="message-meta">${message.role === "assistant" ? state.character.name : "你"} · ${message.storyEvent ? "进入故事事件" : state.character.className}</div>
          </div>
        </div>`,
    )
    .join("");
  els.messageList.scrollTop = els.messageList.scrollHeight;
}

function renderMessageContent(message) {
  if (!message.storyEvent) return escapeHtml(message.text);

  const storyEvent = message.storyEvent;
  return `
    <span class="story-kicker">${escapeHtml(storyEvent.tag || "故事发展")}</span>
    <strong>${escapeHtml(storyEvent.title || "新的故事")}</strong>
    <small>${escapeHtml(storyEvent.place || "绒耀幼稚园")}</small>
    <p>${escapeHtml(message.text)}</p>`;
}

function addTyping() {
  const row = document.createElement("div");
  row.className = "message-row";
  row.id = "typingRow";
  row.innerHTML = `<img class="message-avatar" src="${state.character.avatar}" alt="" /><div class="message-bubble"><span class="typing"><i></i><i></i><i></i></span></div>`;
  els.messageList.appendChild(row);
  els.messageList.scrollTop = els.messageList.scrollHeight;
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 3600);
}

function setSending(sending) {
  state.sending = sending;
  els.sendButton.disabled = sending;
  els.messageInput.disabled = sending;
}

async function sendMessage(text, options = {}) {
  const characterAtSend = state.character;
  messagesForCurrent().push({ role: "user", text, storyEvent: options.storyEvent || null });
  renderMessages();
  addTyping();
  setSending(true);

  try {
    const selectedMood = moodFor(characterAtSend.id);
    const response = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: characterAtSend.name,
        message: text,
        mood: selectedMood,
        memories: memoriesFor(characterAtSend.id).map((memory) => memory.text),
        world: worldLore,
        storyEvent: options.storyEvent || null,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "请求失败");
    state.messages[characterAtSend.id].push({ role: "assistant", text: data.answer });
    rememberMessage(characterAtSend, text);
    growAffinity(characterAtSend, Math.min(22, (options.storyEvent ? 12 : 8) + Math.ceil(text.length / 20)));
  } catch (error) {
    state.messages[characterAtSend.id].push({
      role: "assistant",
      text: `绒耀幼稚园的电话暂时没接通：${error.message}。请检查 Dify API Key 或工作流配置后再试。`,
    });
    showToast(`Dify 请求失败：${error.message}`);
  } finally {
    document.querySelector("#typingRow")?.remove();
    setSending(false);
    if (state.character.id === characterAtSend.id) renderMessages();
    els.messageInput.focus();
  }
}

async function checkConnection() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    els.connectionDot.className = `status-dot ${data.connected ? "connected" : "error"}`;
    els.connectionTitle.textContent = data.connected ? "Dify 已连接" : "Dify 待连接";
    els.connectionDetail.textContent = data.connected ? "角色聊天工作流可用" : data.message || "请检查 API Key";
  } catch {
    els.connectionDot.className = "status-dot error";
    els.connectionTitle.textContent = "本地服务未连接";
    els.connectionDetail.textContent = "请重新启动网页服务";
  }
}

els.characterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-character]");
  if (!button || state.sending) return;
  state.character = characters.find((character) => character.id === button.dataset.character);
  history.replaceState(null, "", `#${encodeURIComponent(state.character.id)}`);
  renderCharacter();
});

els.moodList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mood]");
  if (!button || state.sending) return;
  const mood = moods.find((item) => item.id === button.dataset.mood);
  const currentMood = moodFor(state.character.id);

  if (currentMood?.id === mood.id) {
    delete state.moods[state.character.id];
    showToast("今天先不设定心情啦。");
  } else {
    state.moods[state.character.id] = mood.id;
    showToast(`已切换为「${mood.label}」陪伴模式。`);
  }

  saveMoods();
  renderMoods();
});

els.storyToggle.addEventListener("click", () => {
  if (state.sending) return;
  const willOpen = els.storyPopover.hidden;
  els.storyPopover.hidden = !willOpen;
  els.storyToggle.classList.toggle("active", willOpen);
});

els.eventList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event]");
  if (!button || state.sending) return;
  const storyEvent = storyEvents.find((item) => item.id === button.dataset.event);
  if (!storyEvent) return;

  els.storyPopover.hidden = true;
  els.storyToggle.classList.remove("active");
  showToast(`已进入「${storyEvent.title}」事件。`);
  sendMessage(storyEvent.prompt, { storyEvent });
});

document.addEventListener("click", (event) => {
  if (els.storyPopover.hidden) return;
  if (event.target.closest(".story-trigger-wrap")) return;
  els.storyPopover.hidden = true;
  els.storyToggle.classList.remove("active");
});

els.messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.messageInput.value.trim();
  if (!text || state.sending) return;
  els.messageInput.value = "";
  els.messageInput.style.height = "auto";
  sendMessage(text);
});

els.messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    els.messageForm.requestSubmit();
  }
});

els.messageInput.addEventListener("input", () => {
  els.messageInput.style.height = "auto";
  els.messageInput.style.height = `${Math.min(els.messageInput.scrollHeight, 138)}px`;
});

els.clearButton.addEventListener("click", () => {
  state.messages[state.character.id] = [{ role: "assistant", text: state.character.opening }];
  renderMessages();
  showToast("这段对话已经重新开始啦。");
});

els.clearMemoryButton.addEventListener("click", () => {
  state.memories[state.character.id] = [];
  saveMemories();
  renderMemory();
  showToast(`${state.character.name}的小本本已经清空。`);
});

renderCharacter();
checkConnection();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
