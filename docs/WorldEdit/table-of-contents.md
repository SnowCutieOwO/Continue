# WorldEdit 文档

WorldEdit 是一个在 Minecraft 游戏内使用的快捷地图编辑器。通过一系列的命令与“笔刷”的组合，你可以将你的世界塑造成你想要的形状，或只是简单地执行多样化的地形修整操作。


* 快速创建、替换或删除大面积的方块；
* 不再需要在繁杂的任务例如修正水流上浪费时间！
* 快速创建基本的图形，例如球体、圆柱等；
* 复制指定区域，并随意粘贴，或是将它们保存为 .schematic 文件，抑或是将它们导入至游戏；
* 做些炫酷的事情，例如输入数学表达式来生成地形；
* 使用“笔刷工具”来雕刻出山峦、河流等壮观的地形；
* 使用指南针或 /jumpto 命令来快速传送到某一点；
* [开源](https://www.github.com/EngineHub/WorldEdit)，也是持续时间最久的 Minecraft 模组（插件）之一（始于 Minecraft Alpha！）

## 文档

* [前言](index.md)
* [更新日志](changelogs.md)
* [目录](table-of-contents.md)
* [安装](installtion.md)
* [快速开始](quick-start.md)
* [配置文件](configuration.md)
* [权限](permissions.md)
* [命令](commands.md)
* [用法](usage.main.md)
  * [通用](usage.general.main.md)
    * [历史](usage.general.history.md)
    * [会话](usage.general.sessions.md)
    * [图案](usage.general.patterns.md)
    * [蒙版](usage.general.masks.md)
  * [导航](usage.navigation.md)
  * [区域](usage.regions.main.md)
    * [选区](usage.regions.selection.md)
    * [区域操作](usage.regions.region-operations.md)
  * [剪贴板](usage.clipboard.md)
  * [生成](usage.generation.md)
  * [绑定工具](usage.tools.md)
  * [笔刷](usage.brushes.md)
  * [实用工具](usage.utilities.md)[^1]
  * [快照](usage.snapshots.md)
  * [其他](usage.other.main.md)
    * [表达式](usage.other.expression-syntax.md)
    * [快速脚本](usage.other.craftscripts.md)[^2]
* [开发者 API](developer-api.main.md)
  * [API 概念](developer-api.api-concepts.main.md)
    * [操作方](developer-api.api-concepts.actors.md)
    * [本地会话](developer-api.api-concepts.local-sessions.md)
    * [方块](developer-api.api-concepts.blocks.md)
    * [图案与蒙版](developer-api.api-concepts.patterns-and-masks.md)
    * [区段](developer-api.api-concepts.extents.md)
    * [区域](developer-api.api-concepts.regions.md)
    * [注册项](developer-api.api-concepts.registries.md)
    * [会话编辑](developer-api.api-concepts.edit-sessions.md)
    * [适配器](developer-api.api-concepts.adapters.md)
  * [API 示例](developer-api.api-examples.main.md)
    * [剪贴板示例](developer-api.api-examples.clipboard-examples.md)
    * [结构示例](developer-api.api-examples.schematic-examples.md)
    * [LocalSession 示例](developer-api.api-examples.localsession-examples.md)
  * [内部 API](developer-api.internal-apis.md)
* [常见问题](common-questions.md)
* [获取帮助](getting-help.md)
* [源码](source-code.md)


## 相关链接

* [WorldEdit 主页](https://www.enginehub.org/worldedit)
* [适用于 Bukkit/NeoForge/Fabric 的模组下载](https://modrinth.com/plugin/worldedit/versions)
* [适用于 Sponge 的插件下载](https://ore.spongepowered.org/EngineHub/WorldEdit)
* [实验性构建](https://builds.enginehub.org/job/worldedit?branch=master)
* [Discord 聊天群组](https://discord.gg/enginehub/)

## 另见

* LocusAzzuro, 2016.3.10,《CraftScript 脚本 - 编出你想要的 WE 功能！》, https://www.mcbbs.net/forum.php?mod=viewthread&tid=565465

[^1]: 译者注：考虑到后面的 Utilities 与这里的 Tools 均有“工具”之意，将二者按功能上分别译作“绑定工具”与“实用工具”，前者的工具例如超级镐子，是绑定在物品上进行使用的，故取“绑定”一词；后者的工具例如快速灭火，替换附近方块，不需要用到选区或繁杂的步骤，适用于临时措施，故取“实用”一词。

[^2]: 译者注：原文不适合表达“快速任务”之意，此取意译（据其功能得出）。



