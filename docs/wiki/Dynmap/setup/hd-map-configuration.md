# 高清地图设置

自 v0.20 发布以来，HDMap 提供了一种全新、灵活的地图模式，让用户有机会用（可能）更复杂的方式自定义地图显示样式。HDMaps 的部分结构与定义细节，是为了尽可能降低配置复杂程度——但最重要的是需要了解 HDMap 定义背后的基础“操作理论”，这样才能知道你到底想怎样配置地图（以及避免走弯路浪费时间）。

## 快速开始：启用默认 HD 模板

Dynmap 包含了 3 套模板，每种都为不同类型的世界（主世界、下界、末地）提供了地图定义。只需编辑 configuration.txt，并修改 deftemlatesuffix（在此文件开头处），即可使用这些定义预设。目前这个设置定义的值如下：

* `deftemplatesuffix: ""`：让 Dynmap 使用“经典”的默认模板——低分辨率且渲染快捷，但也是美观度最低的。这个模式使用的模板文件位于 `templates/` 下的 `normal.txt`、`nether.txt` 及 `the_end.txt`。默认被 0.23 及更早版本使用。
* `deftemplatesuffix: vlowres`：选择“very-low-res”质量的 HD 地图。这种地图类似老版本的“经典”样式（显示地表的地图，东南向等距图，还可以浏览洞穴模式），但以 HD 渲染器渲染。另外，默认情况下也会使用标准的 Minecraft 纹理包贴图，让地图更加精确。这个模式使用的模板文件位于 `templates/` 下的 `normal-vlowres.txt`、`nether-vlowres.txt` 及 `the_end-vlowres.txt`。默认被 0.24 之后的版本使用。
* `deftemplatesuffix: lowres`：选择“low-res”质量的 HD 地图。这种地图类似老版本的“经典”样式（显示地表的地图，东南向等距图，还可以浏览洞穴模式），但以 HD 渲染器渲染，分辨率相较前者高出二到三倍。另外，默认情况下也会使用标准的 Minecraft 纹理包贴图，让地图更加精确。这些地图的渲染时长也比经典地图高出四到六倍，图块的大小则会增加四倍。这个模式使用的模板文件位于 `templates/` 下的 `normal-lowres.txt`、`nether-lowres.txt` 及 `the_end-lowres.txt`。
* `deftemplatesuffix: hires`：选择“high-res”质量的 HD 地图。这种地图与上述的“lowres”设置类似，但地表地图（等距地图）分辨率更高（比“lowres”设置高四倍，比“经典”设置高八倍），且视角会从较低的位置渲染（水平 30°，垂直 60°）。实际渲染效果非常美观，但载入速度也极慢（比“lowres”设置慢 16 倍，比“经典”设置慢 64 倍），且大小也会增加（比“lowres”设置大 16 倍，比“经典”设置大 64 倍）。这个模式使用的模板文件位于 `templates/` 下的 `normal-hires.txt`、`nether-hires.txt` 及 `the_end-hires.txt`。

选择模板之后，就可以通过编辑模板文件进一步自定义地图。如下部分会讲到完全控制地图定义的相关内容。

## 基础：如何 HDMap 加入模板或世界

定义 HDMap，进一步说，与现存地图类型类似。在有其他地图的情况下，HDMap 的定义在地图下提供：模板部分（来自 `configuration.txt` 或 `templates/` 文件夹），或者 `worlds:` 下的世界定义（来自 `configuration.txt` 或 `worlds.txt` 文件）。如下为 HDMap 定义的完整示例：

``` YAML
maps:
  - class: org.dynmap.hdmap.HDMap
    name: myhdmap
    title: "My HD Map"
    prefix: hdm1
    perspective: iso_S_90_lowres
    shader: stdtexture
    lighting: default
```

定义 HDMap 需要三个基础参数：

* 一个 `class:` 设置：决定了地图的类型，对于 HDMaps，则为 `org.dynmap.hdmap.HDMap`。
* 一个 `name:` 设置：地图的不重复名称（不能与指定世界中的其他地图重复）。用于鉴别地图，通过 `defaultmap` 设置或 `URL` 参数选择地图时也会用到。
* 一个 `prefix:` 设置：若不填，则跟随 `name` 项的设置。用在文件与文件夹名称中，因此也需要与世界中其他地图的前缀区分开来，不能重复。

接下来，还需要有三个基础属性分别解答地图渲染的这三个问题：

* 我们能在地图里看到什么？
* 我们能看到什么样的颜色？
* 我们看到的颜色如何渲染光照？

在 HDMaps 的环境下，这些问题就由接下来的设置解决：

* `perspective:` 设置提供了我们展示地图所用的较低。角度控制着投射类型（目前只有等距地图），看向地图的视角（两角朝北，另一角则垂直），以及它的大小（每个方块边长的像素数量）。
* `shader:` 设置则提供了我们为地图填色的着色器定义——角度固定后看到的颜色。这包括部分纹理包中的光照，使用了旧版颜色结构图的光照（就像 FlatMap 与 KzedMap 定义中的样式），有群系颜色的着色器，或者涵盖了洞穴渲染的着色器。
* `lighting:` 选项提供了根据条件变化的地图颜色光照定义。包括渲染着色器、夜景以及日景。

## 预设角度

为了简化这些配资，Dynmap 提供了一些预设角度、着色器及光照。这些定义可以按需修改，或者用作用户新建定义的参考。

`perspectives.txt` 下有许多预设角度。预定义设置的名称严格遵循如下格式，便于引用：

`投射位置_方向_角度_比例`

其中：

* `projection` 为视角位置：当前只支持 `iso`（等宽）。
* `angle` 为水平视角的角度：所有方向都支持 `30`（即 30°）与 `60`（即 60°），而 `90`（90°，垂直俯视）则适用于 `N`（朝南），`W`（朝东），`S`（朝北），`E`（朝西）方向。

预设角度完整列表[见此](../advanced-configuration/advanced-map-configuration/full-list-of-predefined-perspectives.md)。

## 预设着色器

预设着色器设置（`shaders.txt` 下）包含如下内容：

* `default`：默认着色器，决定使用默认 Minecraft 纹理包时渲染的地图颜色

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDShader
    name: default
    texturepack: standard 
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_res&mapname=surfacesvh2&zoom=4&x=200&y=64&z=-135#)

* `defaultscheme`：使用“默认”颜色（在 `colorschemes/default.txt` 中）渲染地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: defaultscheme
    colorscheme: default
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_res&mapname=surfacesvh2&zoom=4&x=200&y=64&z=-135#)

* `ovocean`：使用“ovocean”颜色（在 `colorschemes/ovocean.txt` 中）渲染地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: ovocean
    colorscheme: ovocean
```

:::

* `flames`：使用“flames”颜色（在 `colorschemes/flames.txt` 中）渲染地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: flames
    colorscheme: flames
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatfl&zoom=0&x=247&y=64&z=-105)

* `sk89q`：使用“sk89q”颜色（在 `colorschemes/sk89q.txt` 中）渲染地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: sk89q
    colorscheme: sk89q
```

:::

* `amidst`：[^1]

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: amidst
    biomecolored: biome
    colorscheme: amidst
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatam&zoom=0&x=247&y=64&z=-105)

* `biome`：渲染地图使用的群系类型

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: biome
    biomecolored: biome
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatbio&zoom=0&x=247&y=64&z=-105)

* `temperature`：渲染地图使用的群系温度数据

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: temperature
    biomecolored: temperature
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flattemp&zoom=0&x=247&y=64&z=-105)

* `rainfall`：渲染地图使用的群系降雨/湿度数据

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: temperature
    biomecolored: temperature
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_res&mapname=surfacesvh2&zoom=4&x=200&y=64&z=-135#)

* `no_transparency`：使用“default”颜色（在 `colorschemes/default.txt` 中）渲染地图，且跳过所有透明度处理步骤（水面、植被、树叶都会显示为不透明）

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.DefaultHDShader
    name: no_transparency
    colorscheme: default
    transparency: false
```

:::

* `cave`：渲染“洞穴”景观——显示地下的实心方块与空气的边界，轮廓从绿色随深度变化为蓝色。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.CaveHDShader
    name: cave
```

:::

* `lit-cave`：与洞穴着色器类似，但只渲染光照等级大于零的位置。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.CaveHDShader
    name: lit-cave
    onlyiflit: true
```

:::

* `cave-noplants`：与洞穴着色器类似，但跳过植物的渲染（疑似损坏）

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.CaveHDShader
    name: cave-noplants
    hiddenids:
    - 6
    - 17
    - 18
    - 31
    - 32
    - 37
    - 38
    - 39
    - 40
    - 50
    - 55
    - 78
    - 81
    - 83
    - 86
    - 99
    - 100
    - 103
    - 104
    - 105
    - 111
    - 115
```

:::

* `stdtexture`：使用标准的 Minecraft 纹理包（位于 `texturepack/standard`）渲染地图的颜色

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDShader
    name: stdtexture
    texturepack: standard
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatov&zoom=0&x=247&y=64&z=-105#)

* `stdtexture-nobiome`：使用标准的 Minecraft 纹理包（位于 `texturepack/standard`）渲染地图的颜色，但禁用随群系变化的植被颜色

::: detail 默认配置

[^1]

:::

[演示链接](https://github.com/webbukkit/dynmap/wiki/HD-Map-Configuration)

* `stdtexture-cave`：与上述洞穴模式类似，但强制 Dynmap 用 Minecraft 的默认纹理包渲染

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDCaveShader
    name: stdtexture-cave
    texturepack: standard
    max-sky-light: 0
    min-emitted-light: 1
```

:::

* `stdtexture-underwater`：也许只渲染水下的东西（疑似损坏）

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDUnderwaterShader
    name: stdtexture-underwater
    texturepack: standard
```

:::

* `stdtexture-underwater-keep-land`：见上。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDUnderwaterShader
    name: stdtexture-underwater-keep-land
    texturepack: standard
    hide-land: false
```

:::

* `stdtexture-nobiome`：新建一个使用标准纹理但不渲染群系颜色的地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDShader
    name: stdtexture-nobiome
    texturepack: standard
    biomeshaded: false
```

:::

* `stdtexture-mcr-grid`：新建一个显示区块文件对应边界的地图

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TexturePackHDShader
    name: stdtexture-mcr-grid
    texturepack: standard
    grid-scale: 512
```

:::

* `topo`：新建一个基于高度的彩色地形图，以 128 格高度为准

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TopoHDShader
    name: topo
    color127: '#FFFFFF'
    color111: '#8B4513'
    color95: '#D2B48C'
    color79: '#FFFF00'
    color63: '#008000'
    color47: '#228B22'
    color31: '#104010'
    color15: '#6B8E23'
    color0: '#696969'
    linecolor: '#000000'
    watercolor: '#0000FF'
    wateralpha: 1.0
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatto&zoom=0&x=247&y=64&z=-105)

* `topo256`：新建一个基于高度的彩色地形图，以 256 格高度为准

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TopoHDShader
    name: topo256
    color255: '#FFFFFF'
    color222: '#8B4513'
    color190: '#D2B48C'
    color158: '#FFFF00'
    color126: '#008000'
    color94: '#228B22'
    color62: '#104010'
    color30: '#6B8E23'
    color0: '#696969'
    linecolor: '#000000'
    watercolor: '#0000FF'
    wateralpha: 1.0
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatto256&zoom=0&x=247&y=64&z=-105)

* `topo-noplants`：新建一个基于高度的彩色地形图，以 128 格高度为准，隐藏所有植被

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TopoHDShader
    name: topo-noplants
    color127: '#FFFFFF'
    color111: '#8B4513'
    color95: '#D2B48C'
    color79: '#FFFF00'
    color63: '#008000'
    color47: '#228B22'
    color31: '#104010'
    color15: '#6B8E23'
    color0: '#696969'
    linecolor: '#000000'
    watercolor: '#0000FF'
    wateralpha: 1.0
    hiddenids:
    - 6
    - 17
    - 18
    - 31
    - 32
    - 37
    - 38
    - 39
    - 40
    - 50
    - 55
    - 78
    - 81
    - 83
    - 86
    - 99
    - 100
    - 103
    - 104
    - 105
    - 111
    - 115
```

:::

* `topo256-noplants`：新建一个基于高度的彩色地形图，以 256 格高度为准，隐藏所有植被

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TopoHDShader
    name: topo256-noplants
    color255: '#FFFFFF'
    color222: '#8B4513'
    color190: '#D2B48C'
    color158: '#FFFF00'
    color126: '#008000'
    color94: '#228B22'
    color62: '#104010'
    color30: '#6B8E23'
    color0: '#696969'
    linecolor: '#000000'
    watercolor: '#0000FF'
    wateralpha: 1.0
    hiddenids:
    - 6
    - 17
    - 18
    - 31
    - 32
    - 37
    - 38
    - 39
    - 40
    - 50
    - 55
    - 78
    - 81
    - 83
    - 86
    - 99
    - 100
    - 103
    - 104
    - 105
    - 111
    - 115
```

:::

* `TerraNetworkOrgTopo`：[^1]

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.TopoHDShader
    name: TerraNetworkOrgTopo
    color127: '#4F2101'
    color120: '#8B4513'
    color108: '#D2B48C'
    color96: '#C99653'
    color84: '#CB9C0B'
    color72: '#B1B62E'
    color60: '#0F8D0F'
    color48: '#14703B'
    color36: '#106343'
    color24: '#0E5347'
    color12: '#939393'
    color0: '#696969'
    linecolor: '#000000'
    watercolor: '#1F1FEA'
    wateralpha: 1.0
```

:::

* `inhabited`：新建玩家活动热力图。颜色按活动程度由低到高从蓝变红。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.InhabitedHDShader
    name: inhabited
    color10: '#0000FF'
    color30: '#00FFFF'
    color100: '#008000'
    color300: '#FFFF00'
    color1000: '#FF8000'
    color3000: '#FF0000'
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatin&zoom=0&x=247&y=64&z=-105)

* `chunkversion`：调试用着色器。按颜色显示 MC 区块的生成时间。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.ChunkVersionHDShader
    name: chunkversion
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatcv&zoom=0&x=257&y=64&z=-125)

* `chunkstatus`：调试用着色器。按颜色显示 MC 区块的生成状态。

::: detail 默认配置

``` YAML
-   class: org.dynmap.hdmap.ChunkStatusHDShader
    name: chunkstatus
```

:::

[演示链接](https://dynmap-setup.jurgenmk.nl/?worldname=world_flat_shaders&mapname=flatcs&zoom=0&x=257&y=64&z=-125)

## 预设光照

预设光照配置位于 `lightings.txt`，包含如下内容：

* `default`：默认，无处理，无着色器，完整白天光照
* `shadows`：使用完整白天光照，同时处理阴影及光源
* `night`：使用完整夜间光照，同时处理阴影及光源
* `brightnight`：使用更亮的夜间光照（让夜间地形更清晰），同时处理阴影及光源
* `nightandday`：渲染两种图块，一种白天（对应的着色器设置），一种夜间（同样对应夜间着色器设置），随对应世界的时间自动切换样式。
* `brightnightandday`：与 `nightandday` 相同，但夜间地图使用 `brightnight` 的设置。

角度的选择会影响渲染地图的最终大小及质量。进一步讲，比例会受其影响：每个地图上的方块都会占据更多像素，所需的图块数量也会随比例变大而变多。`lowres` 质量的地图图块数量会比 `KzedMap` 多四倍（因为两个方向上都是两倍分辨率，因此 $2 \times 2 \equals 4$）。`medres` 分辨率比 `lowres` 还高两倍，因此相较其为 4 倍（与 Kzed 比则为 16 倍），`hires` 又比 `medres` 高两倍，也就是 `KzedMap` 的 64 倍！`hires` 质量的地图虽然看起来非常精细，但是需要预先准备完整渲染，因为它非常耗时（视地图规模而定，从一小时到一天不等）。降低视角角度（30°）可以减少渲染的图块数量（但降低视角则意味着渲染更多的区块——因为视野相较垂直俯视看得更远）。其他设置——着色器与光照对存储空间几乎没有影响，对渲染时长的影响也微乎其微。

### 自定义视角、着色器及光照

设置自定义视角、着色器及光照，请参照下列链接：

* [设置自定义视角](../advanced-configuration/advanced-map-configuration/defining-custom-perspectives.md)
* [设置自定义着色器](../advanced-configuration/advanced-map-configuration/defining-custom-shaders.md)
* [设置自定义光照](../advanced-configuration/advanced-map-configuration/defining-custom-lightings.md)

设置自定义角度、着色器或光照后，地图就可以通过名称引用配置。

## 额外 HDMap 设置

HDMaps 支持一系列额外的可选项，允许更进一步改变地图外观及行为。这些设置包括：

* `title`：决定了网页地图界面展示的标签。
* `icon`：决定了网页界面展示的图标 URI。未设置则为 `images/block_name.png`
* `backrground`：这个设置决定了地图背景的颜色。颜色值与 CSS 使用的类似：`#rrggbb`。未设置则为纯黑（`#000000`）
* `backgroundday`：这个设置决定了白天地图背景的颜色——设置后，白天地图的背景色会覆盖上述设置。颜色值与 CSS 使用的类似：`#rrggbb`。仅对 `nightandday` 类型的地图生效。
* `mapzoomin`：决定了地图在超过“默认”分辨率时可调整的缩放大小。需要注意的是，缩放只会改变地图显示大小，不会显示更多信息（每级缩放放大两倍，以此类推）。默认值为 2（即允许二倍和四倍放大）。
* `image-format`：这个设置决定了生成地图图块的格式。默认为 `png`，最大化显示质量且为无损压缩，但会导致存储及带宽用量增加。JPG 为有损压缩，可以减小文件体积。对于较高分辨率的地图，JPG 的文件体积相较 PNG 更小，在保证清晰度的前提下节约了至少一半的空间。调低清晰度仍然可以保持图片质量，且进一步降低存储占用（六至十倍）。支持填入的值有：
  * `png`：无损（较大）PNG 格式（默认）

  * `jpg`：高质量 JPG（85% 清晰度）- 与 `jpg-q85` 相同

  * `jpg-q75`：中高质量 JPG（75% 清晰度）

  * `jpg-q80`：中高质量 JPG（80% 清晰度）

  * `jpg-q85`：高质量 JPG（85% 清晰度）

  * `jpg-q90`：高质量 JPG（90% 清晰度）

  * `jpg-q95`：较高质量 JPG（95% 清晰度）

  * `jpg-q100`：较高质量 JPG（100% 清晰度）

::: info 注意

因为 JPEG 不支持透明度，图块的背景色会直接代替透明部分（直接透过地图显示背景颜色的那部分像素）。若修改了 `backgroundday` 或 `backgroundnight` 的颜色，那么整张地图都需要重新渲染。另外，若白天与夜间的颜色不同，需要启用昼夜交替光照功能（如 `nightandday` 或 `brightnightandday` 光照方案）生成两组图块（每组对应白天与晚上不同颜色的背景）。

:::

[^1]: 原文此处为空，下同。