# 📔 插件功能

::: warning
配置文件会随更新而发生变化，这些改动都是迎合用户且必要的改动。若你发现差异，可以加入我们的 Discord 聊天群组。
:::

欢迎来到配置释义章节。在这里，你可以找到正确设置插件的帮助内容。

## 1) 调试模式

* 路径：“settings.debug”
* 值：true/false（默认为 false）
* **用法**：将会启用 `/fs debug` 子命令，会将所有群组信息（包括安装的插件、相关配置及子服）上传至 Pastebin 在线剪贴板服务。它也会让插件在控制台输出许多调试信息并激活手动 ping 命令。
* **请在开发者指导使用该功能。**

## 2) TAB 补全

* 路径：“settings.command_tab_complete”
* 值：true/false（默认为 true）
* **用法**：这会为拥有管理员权限的玩家启用 `/fs <tab>` 命令。默认对普通玩家禁用。

## 3) Ping 模式

* 路径：“settings.ping_mode”
* 值：“DEFAULT”、“SOCKET”（默认为“DEFAULT”）
* **用法**：选择插件使用的 Ping 模式。默认情况下使用 BungeeCord 的 Ping 方法，使得与 FallbackServer 的使用体验更加完整且稳定。但是，如果你在正确配置插件之后仍然碰到了“无大厅可用”的问题，作为备选方法，你可以切换至“SOCKET”模式。

## 4) Ping 延迟

* 路径：“setting.ping_delay”
* 值：2 - 无穷大（默认为 8，不可小于 2，不建议设置为大于 30 的值）
* **用法**：指定每个大厅 Ping 之间的延迟，这会被 FallbackServer 用于检查大厅状态，确保玩家可以被正确转移。

## 5) 更新检查

* 路径：“settings.updater”
* 值：true/false（默认为 true）
* **用法**：指定插件是否在群组启动时检查更新，以及是否在更新可用时提醒游戏内的玩家。

## 6) 返回（插件核心）

* 路径：“settings.fallback”
* 值：大型列表
* **用法**：参照“[安装教程](overview.first-startup-guide.md)”