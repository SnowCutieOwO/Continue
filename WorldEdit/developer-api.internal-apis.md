# 内部 API

WorldEdit 某些代码不是公开 API 的一部分，且有可能在未来不提前通知而产生较大的改动。使用这一部分代码需要自行承担风险，且不会得到任何支持。

对内部 API 的精确定义是，根据标准的 Java 访问规则所不能正常获取的任何内容，除此之外还包括下列内容：
* 除 `*Adapter` 外的所有平台集成；
* 任何在下列包之内的内容：
  * `com.sk89q.worldedit.command`
  * `com.sk89q.worldedit.internal`
* 及其他被标注为“内部”的任何内容。