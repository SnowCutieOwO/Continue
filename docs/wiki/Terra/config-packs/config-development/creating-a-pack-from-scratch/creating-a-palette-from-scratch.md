# 从零创建调色板

本教程将会讲述地形包有关创建调色板的步骤。

如果你还没有准备好，请在开始阅读前浏览“[配置开发介绍](../config-development-introduction.md)”章节。

如果你遇到问题或需要示例，你可以在 [Github 仓库](https://github.com/PolyhedralDev/TerraPackFromScratch/)中找到本教程的参考用配置包。

## 创建新调色板

`步骤`

### 1. 创建调色板配置

调色板决定了每层地形的方块构成。

通过你[选择的编辑器](../config-development-introduction.md#选择编辑器)打开包验证文件。

将 `config-palette` 作为依赖引入，版本为 `1.+`。

这个附属允许你创建调色板配置文件。

``` YAML title="pack.yml" {8}
id: YOUR_PACK_ID
version: 0.2.0

addons:
  language-yaml: "1.+"
  chunk-generator-noise-3d: "1.+"
  ...
  config-palette: "1.+"
```

[创建](../config-files.md#创建配置文件)一个名为 `grass_palette.yml` 的空配置。

通过 `type` [参数](../the-config-system.md#参数)设置[配置类型](../the-config-system.md#配置类型)，并按如下示例配置 `id`：

``` YAML title="grass_palette.yml"
id: GRASS_PALETTE
type: PALETTE
```

### 2. 添加调色板层

调色板由多个[调色板层](../../config-documentation/config-objects/palettelayer.md)组成，而每个调色板层都包含对应的[方块](../../config-documentation/config-objects/block.md)。

每[层调色板](../../config-documentation/config-objects/palettelayer.md)也包括了方块在 Y 轴之间的分布层数。

将如下配置中的高亮部分加入你的调色板配置，为 `grass_palette.yml` 创建调色板层。

``` YAML title="grass_palette.yml" {4-15}
id: GRASS_PALETTE
type: PALETTE

layers:
   # 顶层调色板
   - materials: minecraft:grass_block
     layers: 1
   # 第二层调色板, 厚度为 2 格
   - materials: minecraft:dirt
     layers: 2
   # 第三层调色板, 也构成剩下调色板的部分
   - materials: minecraft:stone
     layers: 1 #
```

::: tip

通过[噪声采样器](../../config-documentation/config-objects/noisesampler.md)，调色板层可以从[方块](../../config-documentation/config-objects/block.md)的[权重列表](../../config-documentation/config-objects/weightedlist.md)中选择，以此影响地形生成中的方块选择。

``` YAML title="grass_snow_mix.yml"
layers:
  - materials:
      - minecraft:grass_block: 3
      - minecraft:coarse_dirt: 1
      - minecraft:snow_block: 5
    layers: 1
    sampler:
      type: DOMAIN_WARP
      amplitude: 1
      warp:
        type: GAUSSIAN
      sampler:
        type: OPEN_SIMPLEX_2
        frequency: 0.02
  - materials:
      - minecraft:coarse_dirt: 1
      - minecraft:dirt: 2
    layers: 1
    sampler:
      type: WHITE_NOISE
      salt: 9231
  - materials: minecraft:stone
    layers: 1
```

权重列表的相关讲述可以在[这里](../noise/how-noise-distributes-things.md)了解。

<!--

  注意：该章节尚未翻译完成，请在翻译完成后将对应引用的章节名称添加至此。

  章节名称：Distributing Lists

-->

:::

### 3. 将调色板应用于生物群系

你现在就可以将调色板加入 `FIRST_BIOME` 中。

``` YAML title="first_biome.yml" {12}
id: FIRST_BIOME
type: BIOME

vanilla: minecraft:plains

terrain:
  sampler:
    type: LINEAR_HEIGHTMAP
    base: 64

palette:
  - GRASS_PALETTE: 319
```

### 4. 载入地形包

到了这一步，你的包就可以正常生成带有草方块、泥土和石头的调色板了！你可以通过开发客户端/服务器载入你刚刚编写的包。你可以通过 `/packs` 命令确认插件是否显示了（验证文件中指定的）包 ID，或者在服务器/客户端启动时从日志中确认。

如果你的包出于某种原因没有载入，控制台中会出现其无法载入的报错，请仔细解读并尝试自行排除问题所在，并重新尝试之前的步骤。

如果你还是没有办法载入地形包，随时欢迎带着相关报错[联系我们](../../../contact-and-support.md)。

## 总结

在你的包成功载入之后，你就可以使用你的调色板和地形包生成世界了！

本章节的参考配置可以在 Github 的[这个地方](https://github.com/PolyhedralDev/TerraPackFromScratch/tree/master/2-adding-palette)找到。

![](_images/flat-terrain.png)