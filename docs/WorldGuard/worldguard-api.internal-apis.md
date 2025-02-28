# 内部 API

一些 WorldGuard 的功能不会被考虑为公开 API，且可能在没有预警的情况下在将来弃用。这部分的代码使用不会被考虑为正确，且不会受到任何形式的支持。

内部 API 的精确定义是，任何 Java 规范中不能获取的任意内容，包括下面几种方法：

* 平台集成中的任意内容（例如，`worldguard-bukkit`，与 `-core` 对应）和除 `WorldGuardPlugin` 中 `wrapPlayer` 外的方法；
* 下列包中的任意内容：
  * `com.sk89q.worldguard.internal`
  * `com.sk89q.worldguard.commands`
  * `com.sk89q.worldguard.util`
* 任意被标记为“内部”的内容（[Javadoc](https://enginehub.org/documentation) 中标注）