# 设置自定义阴影

自定义阴影可通过修改 `shaders.txt` 的标准阴影设置或在 `custom-shaders.txt` 文件中新增/更新内容实现（推荐后者）。

目前有三种基础着色器，都可以用来设置自定义着色器：

* `org.dynmap.hdmap.DefaultHDShader` - 支持 FlatMap 和 KzedMap 颜色模型，包含对颜色结构及多种群系着色的支持。
* `org.dynmap.hdmap.CaveHDShader` - 支持洞穴颜色结构。
* `org.dynmap.hdmap.TexturePackHDShader` - 允许使用 Minecraft 纹理包，包括 Minecraft 使用的默认资源包。
* `org.dynmap.hdmap.TopoHDShader` - 根据渲染区块的高度渲染彩色地形图。
* `org.dynmap.hdmap.ChunkStatusHDShader` - 用于排查问题的着色器，可以显示地图的区块“状态”——见“[区块状态颜色表](chunk-status.md#区块状态颜色)”了解详情。
* `org.dynmap.hdmap.ChunkVersionHDShader` - 用于排查问题的着色器，可以显示地图的区块“数据版本”，基于区块生成时的 Minecraft 版本与当前编码进行比较（旧版本生成的区块一般不会自动更新，除非服务器更新后有玩家到访过这些区块）——见“[区块版本颜色表](chunk-status.md#区块版本颜色)”了解详情。

## 设置自定义 DefaultHDShader 着色器

`DefaultHDShader` 类有多个设置：

``` YAML
shaders:
  - class: org.dynmap.hdmap.DefaultHDShader
    name: myshadername
    colorscheme: ovocean
```

与其他定义一样，必须填入 `name` 设置，且不可重复。若 `custom-shaders.txt` 中的自定义着色器与默认着色器重复，那么后者会覆盖前者。

这些额外设置均为可选项，且有默认值：

* `colorscheme`：决定数据着色时使用的颜色结构。对应 `colorschemes/` 文件夹下的文件，包含 `default`、`ovocean`、`flames` 及 `sk89q`。这些文件决定了正常方块着色的颜色数据及生物群系的着色选项。默认值为 `default`。
* `biomecolored`：决定着色时使用的是哪些群系数据。可填入值为 `none`（默认，基于方块类型着色），`biome`（基于方块所处群系着色），`temperature`（基于方块所处群系原始温度数据着色）以及 `rainfall`（基于方块所处群系降雨/湿度数据着色）。
* `transparency`：决定了是否使用或忽略透明度数据。可填入值为 `true`（默认，正常处理透明度数据）与 `false`（所有方块都视作不透明）。

## 设置自定义 CaveHDShader 着色器

CaveHDShader 目前除名称外没有自定义选项，因此自行设置尚无实际作用。Dynmap 的未来版本可能会为洞穴着色器新增设置项。

## 设置自定义 TexturePackHDShader 着色器

TexturePackHDShader 类是最有可能被修改的着色器，它可以发挥 Minecraft 纹理包的最大潜力。TexturePackHDShader 类支持标准的纹理包功能，以及其他通过 MCPatcher 客户端补丁实现的自定义功能，包括高分辨率纹理，自定义水与岩浆及自定义群系的植被着色器。

示例纹理包着色器配置如下：

``` YAML
shaders:
  - class: org.dynmap.hdmap.TexturePackHDShader
    name: mytexturepackshader
    texturepack: my-favorite-texturepack-v2.1.zip
    biomeshaded: true
    better-grass: false
    grid-scale: 0
```

TexturePackHDShader 的完整设置如下：

* `name`：着色器名称，不可重复。

* `texturepack`：纹理包所在路径（若为 zip 文件），或指向文件夹的路径（必须包含最小纹理包文件 - `terrain.png`、`misc/grasscolor.png`、`misc/foliagecolor.png` 及 `misc/water.png`）。文件或文件夹必须放入 `plugins/Dynmap` 的 `texturepacks` 文件夹下。
* `biomeshaded`：决定植被是否基于原始群系数据（温度、降雨量）着色。若为 `true`（默认值），则启用群系着色。否则，所有植被都始终根据对应 `misc/grasscolor` 或 `misc/foilagecolor.png` 的平均值着色。
* `better-grass`：决定是否像 BetterGrass 模组那样处理草方块与覆雪草方块的侧面。若未设置，则跟随 `configuration.txt` 中的 `better-grass` 设置值（默认为 `false`）。
* `grid-scale`：若设置任意大于零的值，则在地图上以设置值为间隔显示网格（设置为 16 则与区块边界重合）。因为这个设置会改变方块颜色，因此网格会根据地图轮廓改变。

示例地形图着色器配置如下：

``` YAML
shaders:
  - class: org.dynmap.hdmap.TopoHDShader
    name: topo
    color127: "#FFFFFF"
    color111: "#8B4513"
    color95: "#D2B48C"
    color79: "#FFFF00"
    color63: "#008000"
    color47: "#228B22"
    color31: "#104010"
    color15: "#6B8E23"
    color0: "#696969"
    linecolor: "#000000"
    watercolor: "#0000FF"
    hiddenids: [ 0 ]
```

TopoHDShader 的完整设置如下：

* `name`：着色器名称，不可重复。
* `linecolor`：用于绘制普通海拔（Y 轴）区域边界线的颜色，格式为 #RRGGBB。留空则不显示。
* `watercolor`：用于绘制任意水体的颜色，格式为 #RRGGBB。设置后会覆盖基于海拔（Y 轴）显示方块颜色的设置。留空则与其他方块使用相同渲染方式。
* `color<数字>`：`<数字>` 可替换为 `0` 到 `255` 的整数，对应不同的 Y 轴坐标。每个填入的值都可以设置指定 Y 轴高度的方块颜色。默认情况下，`color0` 为 `#000000`（纯黑），而 `color255` 则为 `#FFFFFF`（纯白）。任意未提供的值则会在已设置的值中取邻近值。
* `hiddennames`：可选参数，决定地形图渲染时隐藏的方块。默认只有空气，即 `[ air ]`。需按列表格式填入。如 `[ air, oak_plank, cobblestone, diamond_ore ]`。