# 简单方块定义

A simple block is a solid cubic block filling the whole cube where a block is placed. This is the most common kind of block, and is best used whenever possible (for both simplicity of implementation, and for performance). As the solid cubic block is the default model for a block, these blocks do not need corresponding definitions in the Model Definition Files. The block texture definition is defined via the 'block:' directive.

简单方块即为一般的完整方块。大部分方块属于简单方块，且建议尽可能使用它（使得实现简化及性能最佳目的）。完整方块为默认模型，无需在[模型定义文件](model-definition-files.md)中额外设置。方块纹理定义通过 `block` 属性完成。

简单方块有六面，且拥有如下设置：

* `top`、`face1` 或 `patch4`（方块顶面）
* `bottom`、`face0` 或 `patch1`（方块底面）
* `north`、`face4` 或 `patch0`（X 轴负向位置——目前为西面；在 GA 前曾为北面）
* `south`、`face5` 或 `patch3`（X 轴正向位置——目前为东面；在 GA 前曾为南面）
* `west`、`face3` 或 `patch5`（Z 轴正向位置——目前为南面；在 GA 前曾为西面）
* `east`、`face2` 或 `patch2`（Z 轴负向位置——目前为北面；在 GA 前曾为东面）

每面纹理由对应属性提供的纹理引用设置，且需要指定方块 ID 属性，即 `id`：

``` txt
block:id=<方块 ID>,<side>=<序号+函数>:<纹理 ID>,<side>=<序号+函数>:<纹理 ID>,...
```

普通多面组合还有便捷写法，允许同一纹理应用至方块的多个面：

* `allfaces`（全六面使用同一纹理）
* `allsides`（全四侧面使用同一纹理）
* `topbottom`（顶底面使用同一纹理）

因为旧版兼容性问题，普通的实心方块还需要指定 `stdrot=true` 设置。这会修正顶底面的旋转——否则这些纹理会与游戏实机表现额外旋转 90 度。

若若要同一纹理映射应用到所有元数据值，请指定 `data=*` 属性（尽管这是 `data` 参数的默认设置）。若只指定某个元数据状态使用特定的纹理映射，那么必须设置一或多个 `data=<数字>` 属性。

若一或多个方块 ID 用到了同一组纹理映射，可以在同一个 `block` 设置下添加额外的 `id` 属性。

这里还有几个可以指定的其他属性：

* `txtid` - 如上所述，允许在 `block` 定义中，为没有 `:` 跟随后缀的定义指定默认的纹理 ID。
* `transparency` - 影响方块光照的计算方式。若为 `opaque`（默认值），则方块表面光照基于邻近方块处理。若为 `transparent`，方块表面光照基于自身光照等级处理。若为 `semitransparent`，方块光照则为二者的特殊结合（适用于不完整方块——如台阶和楼梯）。若为 `leaves`，则取决于树叶处理的方式（与 `transparent` 大致相同，部分 Spout 版本上的 Dynmap 略有区别）。
* `colorMult` - 影响所有使用了 `multiplier-tinting` 选项（17000，21000）的纹理，包含六位十六进制值：RRGGBB，RR 为红通道值（00-FF），GG 为绿通道值，BB 则为蓝通道值。
* `customColorMult` - 影响所有使用了 `multiplier-tinting` 选项（17000，21000）的纹理，包含染色类的完整类名。目前定义值包含如下：
  * `org.dynmap.hdmap.colormult.TFBandedWoodColorMultiplier` - 暮色森林条纹木特殊着色功能
  * `org.dynmap.hdmap.colormult.TFMagicLeafColorMultiplier` - 暮色森林魔力树树叶特殊着色功能
  * `org.dynmap.hdmap.colormult.TFSpecialLeafColorMultiplier` - 暮色森林特殊树叶着色功能
* `layer<M>` 或 `layer<M>-<N>` 允许纹理“堆叠”——若某侧纹理透明，则下一层纹理会叠加在透明一侧。`layer<M>` 或 `layer<M>-<N>` 属性的值为下一层背后的纹理对应 `patch<序号>` 或 `patch<M>` 到 `patch<N>` 之间所有补丁的定义。对于标准方块，标准侧面使用的是 patch0 至 5，因此任意额外层纹理都从 patch6 起算。
* `patch<M>` 或 `patch<M>-<N>` - 这些属性允许定义除默认六面纹理（patch0 至 patch5，或上述等价于其他关键词的属性）外的引用。对于标准方块，这些只用于定义多层纹理。设置的值为纹理引用，应用至第 M 补丁，或所有 M 与 N 之间的对应补丁。