# 使用自定义方块渲染器

部分方块的渲染逻辑更加复杂，超出了简单的方块 ID 与元数据绑定的范围。这包括会受到相邻方块影响的方块（红石线、栅栏、墙壁、玻璃板以及楼梯），以及那些依赖于 TileEntity 数据或其他信息（头颅、[铁路工艺](https://www.mcmod.cn/class/6.html)的方块、[Immibis 的小方块](https://www.mcmod.cn/class/129.html)）

若要让某个模型使用自定义方块渲染器，需要设置 `customblock` 参数。它的基础属性如下：

* `id` - 使用此模型的方块 ID。需要指定至少一个 `id` 属性，但数量不限——允许同一模型用在多个方块。见“[方块 ID 数字](texture-definition-files.md#方块-id-数字)”了解如何指定方块 ID 数字的详情。
* `data` - 对模型应用的方块增加匹配数据值的要求。默认值 `data=*` 表示匹配所有对应 `id` 属性下带有任何数据值的方块。否则，只匹配一或多个 `data=数字` 元数据的方块。
* `scale` - 自定义方块渲染器的完整类名。必填项。

`customblock` 设置可能会随使用的渲染器而包含额外属性。

自定义方块渲染器总是会生成补丁定义序列（对于纹理应用位置的指示）。对应补丁的序号由自定义方块渲染器决定。[纹理定义文件](texture-definition-files.md)提供的纹理引用需要在对应 `block` 部分配置中指定 `patch<数字>` 属性。

## 现有的自定义方块渲染器

Dynmap 默认提供了如下自定义方块渲染器，在合适的时候可以用在新的自定义方块上。

* Class org.dynmap.hdmap.renderer.BoxRenderer - 立方体模型渲染器
* Class org.dynmap.hdmap.renderer.CTMVertTextureRenderer
* Class org.dynmap.hdmap.renderer.FenceWallBlockRenderer - 栅栏与墙壁使用的渲染器
* Class org.dynmap.hdmap.renderer.FrameRenderer
* Class org.dynmap.hdmap.renderer.ImmibisMicroRenderer
* Class org.dynmap.hdmap.renderer.PaneRenderer - 玻璃板与铁栅栏使用的渲染器
* Class org.dynmap.hdmap.renderer.RailCraftSlabBlockRenderer
* Class org.dynmap.hdmap.renderer.RailCraftTrackRenderer
* Class org.dynmap.hdmap.renderer.RedstoneWireRenderer - 红石导线使用的渲染器
* Class org.dynmap.hdmap.renderer.RotatedBoxRenderer
* Class org.dynmap.hdmap.renderer.RotatedPatchRenderer
* Class org.dynmap.hdmap.renderer.RPMicroRenderer
* Class org.dynmap.hdmap.renderer.RPRotatedBoxRenderer
* Class org.dynmap.hdmap.renderer.RPSupportFrameRenderer
* Class org.dynmap.hdmap.renderer.SkullRenderer - the renderer used for vanilla skulls/heads
* Class org.dynmap.hdmap.renderer.StairBlockRenderer - the renderer used for standard stairs blocks
* Class org.dynmap.hdmap.renderer.TFCLooseRockRenderer
* Class org.dynmap.hdmap.renderer.TFCSupportRenderer
* Class org.dynmap.hdmap.renderer.TFCWoodRenderer
* Class org.dynmap.hdmap.renderer.ThaumFurnaceRenderer
