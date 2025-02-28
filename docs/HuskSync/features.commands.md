# 命令列表
本章节包含了 HuskSync 的所有命令及其所有的权限节点。你也可以为每个命令使用通配符，例如 `husksync.command.<命令名称>.*` 来获取匹配的所有子权限。

|命令|描述|权限|
|---|---|---|
|/husksync|浏览或管理插件系统相关内容|husksync.command.husksync|
|/husksync about|浏览插件信息|husksync.command.husksync.about|
|/husksync status|浏览插件系统信息|husksync.command.husksync.status|
|/husksync reload|重载插件配置|husksync.command.husksync.reload|
|/husksync migrate|从其他插件或旧版本迁移数据|*(仅控制台)*|
|/husksync update|检查插件更新|husksync.command.husksync.update|
|/userdata|浏览并管理插件快照|husksync.command.userdata|
|/userdata list|浏览玩家数据快照列表|husksync.command.userdata.list|
|/userdata view|浏览玩家数据快照|husksync.command.userdata.view|
|/userdata restore|恢复指定玩家至备份快照|husksync.command.userdata.restore|
|/userdata delete|删除玩家快照|husksync.command.userdata.delete|
|/userdata pin|将指定玩家的快照星标或解除星标|husksync.command.userdata.pin|
|/userdata dump|输出指定玩家快照数据|husksync.command.userdata.dump|
|/inventory|浏览玩家背包/快照背包内容<br>编辑当前玩家背包|husksync.command.inventory<br>husksync.command.inventory.edit|
|/enderchest|浏览玩家末影箱/快照末影箱内容<br>编辑当前玩家末影箱|husksync.command.enderchest<br>husksync.command.enderchest.edit|