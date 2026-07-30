# Dynmap 上的加速区域

本章节的教程将会简要讲述如何加速渲染 Dynmap 上的指定区域。

第一步，准备需要加速的地图：在编辑任何地图数据之前，请先输入命令：`/dynmap pause all`

通过这个命令设置地图加速增量：`/dmap mapset <世界名称>:<地图名称> boostzoom:<x>`，`x` 可为 0-3 之间的值，每个值都会增加加速值，所以，若需要从 16 ppb[^1] 增加到 64 ppb，你需要将它设置为 2。

第二步，添加加速区域：通过 `/dmarker addcorner <x> <y> <z> <世界名称>` 选择第一个角点，`/dmarker addcorner <x> <y> <z>` 选择第二个角点，最后通过命令 `/dmarker addarea <区域名称> boost:true` 创建区域并将其设置为加速区域。

矩形区域只需要设置两个角点，若需要设置多边形区域，你需要自行添加角点。若需要设置圆形区域，你可以使用这个命令：`/dmarker addcircle <标点 ID> radius:<半径> world:<世界名称> x:<x> y:<y> z:<z> boost:true`。

在确认需要设置的位置后，可以将它们的 `fillopacity` 与 `opacity` 通过命令 `/dmarker updatearea <标点 ID> fillopacity:0.0 opacity:0.0` 设置为透明。

`<标点 ID>` 可通过 `/dmarker listareas` 查看。

第三步，输入命令 `/dynmap pause none` 重新开始所有渲染任务。

第四步，可通过 `/dynmap fullrender <世界名称>:<地图名称>` 或 `/dynmap radiusrender <世界名称> <x> <z> <半径>` 命令渲染加速区域。

[^1]: Pixels Per Block，即“每方块边缘像素数”。
