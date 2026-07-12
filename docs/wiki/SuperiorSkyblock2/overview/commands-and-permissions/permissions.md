# 权限

::: info

如果你正在寻找与命令对应的权限，请前往[玩家命令](player-commands.md)与[管理员命令](admin-commands.md)章节查看。

:::

|权限节点|描述|
|---|---|
|`superior.chat.color`|允许在岛屿聊天内使用颜色。|
|`superior.island.*`|允许使用所有玩家命令。|
|`superior.island.fly`|允许使用岛屿飞行功能。此权限也会在玩家加入服务器或切换世界时检查——没有此权限的玩家会自动关闭飞行状态。|
|`superior.island.members`|允许通过 `/island panel members` 命令打开成员列表菜单。|
|`superior.island.visitors`|允许通过 `/island panel visitors` 命令打开访客列表菜单。|
|`superior.island.stacker.<方块类型>`|允许在岛屿上堆叠指定类型的方块。|
|`superior.island.stacker.*`|允许在岛屿上堆叠任意类型的方块。|
|`superior.island.toggle.border`|允许使用 `/island toggle border` 命令。|
|`superior.island.toggle.blocks`|允许使用 `/island toggle blocks` 命令。|
|`superior.admin.*`|允许使用所有管理员命令。|
|`superior.admin.bypass`|保持绕过状态开启——没有权限的玩家会自动关闭。|
|`superior.admin.bypass.*`|使得绕过状态在任何情况下都开启，无视岛屿所有权限（挖掘、破坏、交互等）。|
|`superior.admin.bypass.<岛屿权限>`|允许绕过指定岛屿特权。|
|`superior.admin.bypass.cooldowns`|允许绕过命令冷却。|
|`superior.admin.bypass.warmup`|允许绕过传送预热，无需等待即可传送。|
|`superior.admin.ban.bypass`|允许无视岛屿封禁。|