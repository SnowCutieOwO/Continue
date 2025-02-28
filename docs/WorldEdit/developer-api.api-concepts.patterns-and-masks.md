# 图案与蒙版

图案与蒙版在它们对应的章节中已有介绍。唯一的区别是它们必须通过对应的类进行构建，而不是从带有一定格式的字符串中读取。

单方块图案可通过 `BlockStateHolder` 表示，例如 `BlockState` 和 `BaseBlock`。其他图案种类可顾名思义，例如 `TypeApplyingPattern` 或 `RandomStatePattern`。你可以使用你的 IDE（编辑器软件）找到 `Pattern` 的子类。

蒙版略有不同。完全匹配和模糊判定的方块*状态*都是通过 `BlockMask` 完成的，但你也可以只对方块*种类*（`BlockTypeMask`）或*属性*（`BlockStateMask`）进行蒙版操作。`Masks` 类下还有许多使用蒙版。与上文相似，非常推荐你用你的 IDE（编辑器软件）查找 `Masks` 的子类。