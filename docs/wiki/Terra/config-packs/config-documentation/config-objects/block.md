# 方块（Block）

决定方块 ID。可以使用的方块类型取决于你使用的服务端版本和/或安装的模组。Terra 所有基础的方块 ID 与 Minecraft 方块 ID 相同，例如 `minecraft:grass_block`。

方块 ID 后接逗号分隔的方括号列表，可用于指定方块状态。例如：`minecraft:note_block[instrument=harp, note=9]`

## 用途

有 8 个参数用到：

* ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](map.md)<[方块](block.md)，[方块](block.md)>

* Pattern 中的 MATCH：

  <badge type="info" text="block" /> [方块](block.md)

* SCATTERED_ORE 中的 base：

  <badge type="info" text="replace" /> [集合](set.md)<[方块](block.md)>

* ORE 中的 base：

  <badge type="info" text="replace" /> [集合](set.md)<[方块](block.md)>

* SCATTERED_ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](map.md)<[方块](block.md)，[方块](block.md)>

* Pattern 中的 MATCH_SET：

  <badge type="info" text="blocks" /> [集合](set.md)<[方块](block.md)>

* SCATTERED_ORE 中的 base：

  <badge type="info" text="material" /> [方块](block.md)

* ORE 中的 base：

  <badge type="info" text="material" /> [方块](block.md)