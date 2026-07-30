# 以 Wavefront OBJ 格式导出世界数据

在 1.9.3 版本之后，Dynmap 新增了生成与导出外部可读的 Wavefront OBJ 格式文件。这个功能受到一个独立工具 [jmc-2-obj](http://jmc2obj.net/) 的启发，允许服务器（或控制台）上的操作者选择导出世界数据为模型数据，可导入各种支持 Wavefront OBJ 工具——包括 Blender（免费开源的渲染与动画套件），Maxon Cinema 4D、Autodesk Maya，3D Studio Max 等。这些导出的模型可通过这些包以 Dynmap 不支持的方式渲染（包括高级光照、表面反射等）。鉴于 Dynmap 导出的 OBJ 格式与 jmc-2-obj 类似，这个程序的教程与文档提及的工具也适用于 Dynmap OBJ 文件。

导出功能可通过 `/dynmapexp` 命令开始。这个命令可以控制导出的设置参数：

* `x0, y0, z0`：导出长方体区域的最小 XYZ 轴坐标
* `x1, y1, z1`：导出长方体区域的最大 XYZ 轴坐标
* `world`：导出指定的世界名称
* `byChunk`：若开启，将给定区块内所有的方块都生成并置入对象文件
* `byBlockID`：若开启，将给定区域内所有指定 ID 的方块都生成并置入对象文件
* `byBlockIDData`：若开启，将给定区域内所有带指定数据及 ID 的方块都生成并置入对象文件
* `byTexture`：若开启，将给定区域内所有指定纹理的方块都生成并置入对象文件
* `shader`：指定导出时使用的着色器。默认使用 `stdtexture`。目前仅支持基于资源包的着色器。

`/dynmapexp` 的子命令如下：

* `/dynmapexp set`：设置（上述的）导出属性。额外参数都可通过这条命令多次输入指定（如 `/dynmapexp set x0 0 y0 0 z0 100`）
* `/dynmapexp radius`：只能由游戏内玩家使用。允许导出以玩家当前（XZ 轴）位置及整个 Y 轴为中心，一定半径范围的世界。
* `/dynmapexp info`：浏览当前导出设置的属性。
* `/dynmapexp pos0`：只能由游戏内玩家使用。将导出的 x0、y0、z0 位置及世界设置在玩家当前位置。
* `/dynmapexp pos1`：只能由游戏内玩家使用。将导出的 x1、y1、z1 位置及世界设置在玩家当前位置。
* `/dynmapexp reset`：将当前导出设置重置为默认状态。
* `/dynmapexp export`：开始导出，在服务器 `export` 文件夹（默认位于 `dynmap` 下，可通过 `configuration.txt` 下的 `exportpath` 参数设置改变）中生成一个 `.zip` 格式的文件。这个操作是异步的，可能需要几秒到几分钟不等的时间完成，取决于你选择导出的区域大小。
* `/dynmapexp purge`：删除导出目录中前一次的内容。

完成后，你可以在 `.zip` 压缩包里找到这些内容：

* 一个 minecraft.obj 文件，包含导出的模型（可能会非常大）
* 一个 .mtl 文件，包含材料库（对应 Minecraft 的纹理），用于为 minecraft.obj 中的模型着色
* 一个文件夹，包含材料库使用的贴图文件。

若要使用文件，只需解压文件并在渲染软件中载入 `minecraft.obj` 文件即可。