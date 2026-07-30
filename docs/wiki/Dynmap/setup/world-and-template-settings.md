# 世界与模板设置

这里有一些设置可以控制服务器上世界的地图与接口定义。大部分也可在模板中设置，毕竟模板就是一种为世界准备的默认值列表。

逻辑上将，任意定义的世界都会有默认值，取自模板中与环境相关的设置（如 `normal`、`nether`、`skylands` 等）——这些设置从同名环境模板中继承。若设置了 `deftemplatesuffix`，则会追加它的值，中间以 `-` 连缀。所以，设置 `deftemplatesuffix` 为 `hires` 会使得普通世界使用 `normal-hires` 模板，下界则为 `nether-hires`。

除了继承自模板的值以外，指定世界的设置也可以在 `worlds:` 里单独设置（在 `worlds.txt` 或 `configuration.txt` 里）。如果某个世界已存在对应部分的配置，则不会被模板的默认值覆盖。

除了世界的名字与对应地图类型，其他设置都为可选项，且有默认值，且地图类型也通常会在模板内提供。这样依赖，`worlds:` 部分的配置也可以只包含世界的名称：

``` YAML
worlds:
  - name: world1
  - name: world2
```

这可以用来管理世界的顺序，世界会优先按其定义中的顺序排列，随后才会将自动选择的世界列入其中。

世界设置更详细的示例配置文件如下：

``` YAML
worlds:
  - name: world
    title: "My Great World"
    enabled: true
    template: mycustomtemplate
    sendposition: true
    sendhealth: true
    fullrenderlocations:
      - x: 100
        y: 64
        z: 2000
    visibilitylimits:
      - x0: -1000
        z0: -1000
        x1: 1000
        z1: 1000
    hiddenlimits:
      - x0: 100
        z0: 0
        x1: 200
        z1: 0
    hidestyle: stone
    center:
      x: 0
      y: 64
      z: 0
    bigworld: false
    extrazoomout: 0
    maps:
      - class: org.dynmap.flat.FlatMap
      # ....
```

可用设置如下：

* `name`：决定 Bukkit 环境下的世界名称，不可重复。无法从模板继承。
* `title`：若设置，可代替世界名称显示。默认为空。
* `enabled`：若设置，表示启用（设置为 `true`）或禁用（设置为 `false`）指定世界。若要自动禁用世界，`configuration.txt` 下的 `deftemplatesuffix` 选择的模板必须将 `enabled` 设置为 `false`。
* `template`：若设置，代替用作世界默认设置的模板名称。否则，根据世界环境自动选择（如 `normal`、`nether` 或 `skylands`），若设置了 `deftemplatesuffix`，则会追加它的值，中间以 `-` 连缀。无法从模板继承。
* `sendposition`：若设置为 `false`，则会出现允许用户隐藏玩家坐标的选择，即便已经启用。设置为 `true` 不会在全局 `sendposition` 选项被禁用的情况下看见玩家位置。默认为 `true`。
* `sendhealth`：若设置为 `false`，则会出现允许用户隐藏玩家生命及护甲值的选择，即便已经启用。设置为 `true` 不会在全局 `sendhealth` 选项被禁用的情况下看见玩家位置。默认为 `true`。
* `fullrenderlocations`：若设置，则表示一串完整渲染开始的中心点世界坐标（包括完整的 XYZ 坐标）列表（坐标必定大于 `0, 64, 0`，若 `/dynmap fullrender` 命令由游戏内玩家执行，则为玩家所在位置）。逻辑上讲，完整渲染的顺序类似绘图软件的油漆桶——若某个地图在定义区块范围内有间隙，例如玩家通过传送门探图，那么从某个位置开始的完整渲染任务就不会波及整个世界：在附近探索范围相接的其中一个点位进行的完整渲染任务会导致另一个点位同步开始任务。
* `visibilitylimits`：若设置，这些角点列表可以用于限制渲染范围：这些角点构成的矩形区域之外将不会被精确地图数据渲染，而是使用特定过滤器（取决于如下的 `hidestyle` 设置）。若列表为空（默认），则不进行限制，地图会渲染到世界已生成的区块边缘。每个矩形区域都包含两个对角点—— $(x_0,z_0)$ 与 $(x_1,z_1)$。在 1.5-alpha-3 之后的版本，也可以设置圆形区域，只需提供圆心位置及半径 `r` 即可，单位为格。
* `hiddenlimits`：若设置，功能与上述相反——它们决定了世界上模糊渲染的位置（同样取决于如下的 `hidestyle` 设置）。若上一选项与此选项一同设置，前者优先（决定可显示区域），之后后者进一步限制区域显示。每个矩形区域都包含两个对角点—— $(x_0,z_0)$ 与 $(x_1,z_1)$。在 1.5-alpha-3 之后的版本，也可以设置圆形区域，只需提供圆心位置及半径 `r` 即可，单位为格。
* `hidestyle`：若 `visibilitylimits` 和/或 `hiddenlimits` 设置限制了世界的区域显示，那么它可以决定它们被限制的方式。支持三种设置：`stone`，让被屏蔽区域显示为被石头填充；`ocean`，让被屏蔽区域显示为被水淹没；`air`，让被屏蔽区域显示为空（类似渲染到世界边界）。默认为 `stone`。
* `center`：若设置，决定此世界的聚焦点。坐标格式包括 XYZ 的值。未设置则跟随世界出生点。
* `bigworld`：若设置，启用类似 `FlatMap` 与 `KzedMap` 的文件系统结构，适用于有成百上千图块的世界。`HDMaps` 默认使用此格式，不受其影响。默认值为 `false`，反之表示启用。改变设置后需要完整渲染才可看到变化。
* `extrazoomout`：若设置，决定世界超出默认值的额外缩放等级。这会让地图在浏览器中有更多缩放等级，会生成更多图块（取决于原本生成的图块量）：每级与上一级都为 `2x2` 比例，那么 4 个图块则在下一级会合并为一个，同时分辨率降低。设置为大于零的值即可启用，大约会增加 25-33% 的图块及存储空间，不过可以让中大规模的地图更易于定位。默认为 `0`（无额外缩放）。
* `maps`：若设置，`maps` 部分提供世界渲染地图相关的所有设置，在地图浏览器上按设置顺序排列。若先前在 `worlds:` 中设置过，那么替换世界模板提供的地图预设。地图定义的相关内容请见“[地图配置](guides/using-dmap.md)”与“[HDMap 配置](hd-map-configuration.md)”。
* `showborder`：若设置，则决定世界边界是否以红线标记。
