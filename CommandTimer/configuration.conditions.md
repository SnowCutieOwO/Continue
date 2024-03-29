# 条件
**声明：此为本插件最复杂的部分。在尝试条件模块前请先阅读本文档的剩余部分**

条件模块可在固定时间和间隔的基础上再增加一些额外的逻辑。

条件可分为以下几种类型：
* `SIMPLE`（单条件）：最简单的一类条件。返回值需要为 true（例如，玩家是 OP）
* `NOT`（非）：与上述相同，但判断值相反（例如，玩家不是 OP）
* `AND`（和）：一组条件，其中的每个条件都需要为 true 才可继续执行当前的定时任务
* `OR`（或）：一组条件，需要其中至少一个条件为 true 才可继续执行当前的定时任务。即便你设置了 50 个条件，只要满足其中一个，那么定时任务便会照常执行

在使用 `AND` 和 `OR` 时可以组合使用更多条件。组合没有深度限制，这表示你可以将一堆不同判断形式的条件嵌套在一起。在将嵌套条件写入配置之前建议预先画出或记录条件的具体判断过程，否则在之后出现问题时排查将会变得非常困难。

## 可用条件
条件可通过拓展启用。这意味着插件默认没有任何条件，在不安装拓展模块的情况下是无用的。

## 条件的值
某个条件可能需要额外配置才可正确运作。这些需要设置的内容可在游戏菜单界面中浏览。

