# WorldGuard 文档[^1]

WorldGuard 有一大堆为服主、地图制作者、普通的生存服务器和其中的大部分玩家所设计的功能。
这些功能包括但不限于：

* 在世界中创建特定区域，以允许玩家在这些区域中建造；
* 在服务器上设置额外的游戏规则（禁止破坏方块、受到摔落伤害等）；
* 为你的世界中的区域设置指定的游戏规则（恢复饱食度、恢复生命值、禁用 PVP、TNT、控制实体的攻击行为）；
* 禁用特定的物品或方块，以阻止玩家使用它们；
* 备份有关服务器的有关信息和统计数据（输入命令 /wg report -p 使用该功能）；
* 查询服务器的 CPU 使用率等信息（输入命令 /wg report -p 使用该功能）；
* 添加了一些非常有用的命令，例如立即“停止火焰传播的”命令（译者注：即 /stopfire 命令）；
* 与其他插件或模组有或多或少的兼容性（例如其他的 Bukkit 插件和 FTB 系列模组）；
* 阻止任意形式的漏洞利用（树木生长顶掉方块、TNT 大炮、活塞机械等）；
* 当然也允许某一特定操作（例如允许使用门和拉杆）；
* 开源，且是年纪最大的 Minecraft 拓展项目（甚至比 Bukkit 还老！）；
* 按需启用插件的功能！**所有功能默认都是关闭的**。你可以先安装 WorldGuard，再稍后配置它。

## 目录

* [安装](installation.md)
* [配置](configuration.main.md)
  * [域名秘钥](configuration.host-keys.md)
* [权限列表](permissions.md)
  * [建筑权限](permissions.build-permissions.md)
* [命令列表](commands.md)
* [黑名单](blacklist.md)
* [区域](regions.main.md)
  * [快速开始](regions.quick-start.md)
  * [区域魔杖](regions.region-wand.md)
  * [区域标志](regions.region-flags.md)
  * [优先级与继承](regions.priority-and-inheritance.md)
  * [全局区域](regions.global-region.md)
  * [区域命令](regions.region-commands.md)
  * [区域认领](regions.claiming.md)
  * [存储方式](regions.storage-drivers.md)
  * [保护什么？](regions.whats-protected.md)
  * [常见场景](regions.common-scenarios.md)
* [箱子保护](chest-protection.md)
* [WorldGuard API](worldguard-api.main.md)
  * [作为依赖](worldguard-api.as-a-dependency.md)
  * [区域开发相关](worldguard-api.working-with-regions.main.md)
    * [区域管理模块](worldguard-api.working-with-regions.managers.md)
    * [区域对象](worldguard-api.working-with-regions.regions.md)
    * [自定义标志与选区处理模块](worldguard-api.working-with-regions.custom-flags-and-session-handlers.md)
    * [区域查询](worldguard-api.working-with-regions.querying-protection.md)
    * [标志计算](worldguard-api.working-with-regions.flag-calculation.md)
    * [保护查询](worldguard-api.working-with-regions.querying-protection.md)
    * [区域事件](worldguard-api.working-with-regions.region-events.md)
  * [引自 Bukkit 的对象](worldguard-api.from-bukkit-objects.md)
  * [内部 API](worldguard-api.internal-apis.md)
* [高级话题](advanced-topics.main.md)
  * [事件记录](advanced-topics.evet-logging.md)
* [常见问题](common-questions.md)
* [获取帮助](getting-help.md)
* [插件源码](source-code.md)

## 相关链接

* [WorldGuard 插件主页](https://www.enginehub.org/worldguard)
* [下载适用于 Bukkit 的 WorldGuard 插件](https://dev.bukkit.org/bukkit-plugins/worldguard/files/)
* [实验性构建](https://builds.enginehub.org/job/worldguard?branch=master)
* [Discord 聊天群组](https://discord.gg/enginehub/)

[^1]: 原维基在本章节包含了另外一个章节，“索引与表格”，该子章节中包含的两个页面为空白和搜索页，后者已被维基自带的搜索功能代替，因此该翻译版本将其省略。