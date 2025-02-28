# 数据导入

::: warning
导入数据后会覆盖 HuskHomes 的已有数据，请在开始导入之前备份数据库中的数据。
:::

HuskHomes 支持从下列插件/模组中导入数据，可使用 `/huskhomes import` 命令进行数据迁移。

|插件名称|支持导入数据内容|核心类型|链接|
|---|---|---|---|
|[EssentialsX](https://william278.net/docs/huskhomes/importing-data#essentialsx)|家传送点、地标传送点、玩家数据|Spigot、Paper|https://essentialsx.net/|

## EssentialsX

HuskHomes 支持导入来自 EssentialsX(`v2.19.7`+)

需要注意的是导入的数据会覆盖已存在的重复数据（例如，名称相同的家传送点会被导入的 Essentials 数据覆盖）。
下文为导入数据的操作步骤：

1. 在服务器上[安装最新版本的 HuskHomes](setup.setup.md)。
2. 确保你安装的 EssentialsX 使用的版本为 v2.19.7+ 且存在用户数据。若有必要可重启服务器。
3. 输入命令 `/huskhomes import list` 可确认 EssentialsX 是否能导入。
4. 输入命令 `/huskhomes import start EssentialsX` 来开始数据迁移。进度和导入的数据量将会在聊天栏和/或控制台一并显示。
5. 在导入完毕后，可通过输入命令 `/huskhomes:warplist` 和 `/huskhomes:homelist <玩家名称>` 验证数据是否正确迁移。

在完成导入后应当重启服务器。
