# 限制地标传送点

HuskHomes 支持通过权限限制地标传送点。这意味着玩家需要对应的 `huskhomes.command.warp.<名称>` 权限节点，才可使用对应的地标传送点，否则会收到权限不足的提示。

若要启用权限限制地标传送点，你需要将配置文本下 `general` 的 `permission_restrict_warps` 项设置为 true。不要忘记给予玩家相应的权限节点（`huskhomes.command.warp.<名称>`）。