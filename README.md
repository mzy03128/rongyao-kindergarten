# 绒耀幼稚园角色聊天 MVP

这是一个用于验证 iOS 角色扮演聊天产品的网页 MVP。用户可以选择王者荣耀角色，在“绒耀幼稚园”的清新可爱世界观里聊天。

当前体验保留王者角色与形象，同时把场景包装成幼稚园日常：入园名册、彩虹操场、午睡花园、秘密积木屋、亲密度、角色记忆和故事发展。

## 启动

```powershell
npm start
```

打开：

```text
http://localhost:4173
```

API Key 保存在本地 `.env`，不会发送到浏览器端。拿到新 Key 后，只需要替换 `.env` 里的 `DIFY_API_KEY` 并重启服务。

## Dify 输入

当前工作流输入：

- `query`：用户消息与上下文
- `role`：角色名称

当前角色选项：

妲己、小乔、武则天、西施、虞姬、李白、铠、孙权、曜、老夫子、朵莉亚、瑶、蔡文姬、梦奇、桑启。

## 本地结构

- `server.js`：本地静态服务和 Dify API 代理
- `public/index.html`：页面结构
- `public/style.css`：绒耀幼稚园风格样式
- `public/app.js`：角色选择、聊天状态和前端交互
- `public/assets/posters`：王者角色海报素材
- `DESIGN.md`：早期视觉设计规范
