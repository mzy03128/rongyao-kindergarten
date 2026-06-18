# 绒耀幼稚园 PWA 发布说明

这个项目现在可以按「iOS PWA 桌面 App」方式发布：不用 App Store，不需要 Mac，用户用 Safari 打开固定 HTTPS 地址后，可以添加到主屏幕。

## 现在已经完成

- PWA 应用清单：`public/manifest.webmanifest`
- iOS 桌面模式：`apple-mobile-web-app-*` 标签
- 桌面图标：`public/assets/icons/`
- Service Worker：`public/sw.js`
- 离线兜底页：`public/offline.html`

## 部署到固定 HTTPS 地址

推荐先部署这个 Node 服务本身，而不是只部署静态网页，因为 `/api/message` 需要通过服务端安全读取 `DIFY_API_KEY`。

Render 配置可以这样填：

- Service Type: Web Service
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/api/health`
- Environment Variables:
  - `DIFY_API_KEY`: 你的 Dify API Key
  - `DIFY_API_BASE`: 默认可不填，除非你使用自建 Dify

项目根目录已经准备好 `render.yaml`。如果用 Render Blueprint 创建服务，它会自动读取这份配置，并在首次部署时要求你填写 `DIFY_API_KEY`。

部署完成后，Render 会给一个固定的 HTTPS 地址。以后用户只需要访问这个地址安装，不能继续用 `trycloudflare.com` 的临时链接。

## iPhone 安装方式

1. 用 Safari 打开固定 HTTPS 地址。
2. 点底部分享按钮。
3. 选择「添加到主屏幕」。
4. 桌面会出现「绒耀幼稚园」图标。

Apple 官方说明：<https://support.apple.com/guide/iphone/bookmark-a-website-iph42ab2f3a7/ios>

## 注意

- PWA 不是 App Store 应用，但桌面入口、独立窗口体验都很接近 App。
- Dify 聊天必须联网；离线时只能打开缓存页面，不能真正聊天。
- 如果面向公开用户发布，王者角色和图片存在版权/IP 风险，正式商业发布前建议换成自有原创角色或拿到授权。

Render 官方 Node 部署说明：<https://render.com/docs/deploy-node-express-app>
