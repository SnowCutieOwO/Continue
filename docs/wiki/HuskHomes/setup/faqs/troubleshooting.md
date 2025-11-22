# ⚙️ 问题排查

本页会集中介绍一些杂项的问题排查内容。

## Velocity 上的玩家不能被正确传送

**Velocity：** 请确保你没有在 Velocity 的配置中禁用 BungeeCord 插件通信频道。
BungeeCord 插件通信频道最初由 BungeeCord 建立，允许后端子服插件之间使用 Minecraft 的插件通信协议，来让插件能够在群组中发挥作用，如切换玩家所在服务器。Velocity 的实现沿用了它的标准，如果将此功能关闭则不会使用该标准。

在你的 velocity.toml 文件中，确保 [`bungee-plugin-message-channel`](https://docs.papermc.io/velocity/configuration) 设置为 `true`。