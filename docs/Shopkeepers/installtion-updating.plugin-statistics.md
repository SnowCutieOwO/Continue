# 插件统计数据

![img](https://bstats.org/signatures/bukkit/Shopkeepers.svg)

本插件使用了 [bStats](https://bstats.org/plugin/bukkit/Shopkeepers/) 来收集**匿名**数据，这可以帮助我们知道哪些服务器正在使用插件，哪些 Minecraft 版本更多地使用本插件，以及本插件的哪些功能使用得比较多。

这里是目前会收集的信息列表：

* 一般信息：使用本插件的服务器数量、这些服务器上的玩家数量、是否为正版模式、Minecraft 版本、插件版本、服务器硬件核心数量、服务器架构、操作系统、所处国家以及 Java 版本。
* Shopkeepers 的有关信息：其他联动插件的使用情况（Citizens、Towny、WorldGuard、Gringotts，以及其他基于 Vault 的经济插件）、商店数量、是否允许玩家创建商店、配置文本是否启用某个功能（如 WorldGuard / Towny 联动、NPC 商店、立即保存、彩色名称、箱子保护、定期清理不活跃商店、税收比例、严格物品判断、购买记录及禁用原版村民功能等设置），以及包含村民商店的世界数量。

所有收集的信息都可以在这里公开浏览：https://bstats.org/plugin/bukkit/Shopkeepers/

你可以通过编辑 `plugins/bStats/config.yml` 禁用插件收集数据，或者在插件设置中将 `enable-metrics` 调整为 `false` 来禁用本插件收集数据。