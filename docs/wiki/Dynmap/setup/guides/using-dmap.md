# 通过 dmap 命令配置世界与地图

在 0.31 之后的版本，Dynmap 新增了配置命令，便于管理员或控制台通过命令调整世界与地图。使用任意命令后，现存配置会转移进 `worlds.txt` 文件（无论现有地图是否基于 `worlds.txt` 或默认模板）。新增世界仍使用模板，但只要配置转移到 `worlds.txt` 后，之后模板的变动不会同步到这些世界中。另外，地图编辑命令仅限 HDMaps 使用——旧版的 KzedMap 与 FlatMap 不能用 `/dmap` 命令设置。

需要注意的是，不可以在渲染任务进行时使用 `/dmap` 编辑命令（所有除 `/dmap worldlist`、`/dmap maplist`、`/dmap perspectivelist`、`/dmap shaderlist` 与 `/dmap lightinglist` 之外的命令）。所以，为了开始使用，必须先输入 `/dynmap pause all` 命令，暂停所有完整渲染及更新渲染任务——不要忘记在完成后使用 `/dynmap pause none` 命令解除暂停，否则会导致任务停止，进而导致后台日志堆积，内存使用量飙升。

停止渲染后，`/dmap` 命令就可以用于添加、删除、渲染或修改现有的地图定义。世界列表设置的顺序也可以自行决定。如下为命令可实现的功能示例：

* 禁用/隐藏世界：`/dmap worldset <世界名称> enabled:false`
* 保护世界，通过权限管理插件限制为仅浏览：`/dmap mapset <世界名称>:<地图名称> protected:true`
* 重置世界与地图设置，使用默认模板：`/dmap worldreset <世界名称>`
* 重置世界与地图设置，使用特定模板（替换现有所有地图）：`/dmap worldreset <世界名称> <模板名称>`
* 置顶世界：`/dmap worldset <世界名称> order:1`
* 修改世界标题：`/dmap worldset <世界名称> title:<"标题文本">`
* 隐藏指定世界的玩家位置与生命显示：`/dmap worldset <世界名称> sendposition:false sendhealth:false`
* 将世界中心位置移动到玩家当前位置：`/dmap worldset <世界名称> center:here`
* 将世界中心位置移动到指定位置：`/dmap worldset <世界名称> center:<X>/<Y>/<Z>`
* 将世界的额外缩放等级设置为 N：`/dmap worldset <世界名称> extrazoomout:<N>`
* 列出指定世界的地图：`/dmap maplist <世界名称>`
* 删除指定世界的地图：`/dmap mapdelete <世界名称>:<地图名称>`
* 向指定世界新增地图（带标题、角度、着色器及光照）：`/dmap mapadd <世界名称>:<地图名称> title:<"地图标题"> perspective:<角度 ID> shader:<着色器 ID> lighting:<光照 ID>`
* 将地图在世界中的顺序/位置改为 N：`/dmap mapset <世界名称>:<地图名称> order:<N>`
* 编辑地图标题：`/dmap mapset <世界名称>:<地图名称> title:<"地图标题">`
* 修改地图角度（缩放或查看角度）：`/dmap mapset <世界名称>:<地图名称> perspective:<角度 ID>`
* 修改地图前缀：`/dmap mapset <世界名称>:<地图名称> prefix:<前缀>`
* 设置地图图标（相对于 `webpath` 的路径，如 `images/block_skylands.png`）：`/dmap mapset <世界名称>:<地图名称> icon:images/block_skylands.png`
* 将地图缩放等级设置为 N：`/dmap mapset <世界名称>:<地图名称> mapzoomin:<N>`
* 修改地图图块存储格式为 JPG：`/dmap mapset <世界名称>:<地图名称> img-format:jpg`
* 修改默认洞穴地图，使其使用新“纹理洞穴景观”：`/dmap mapset <世界名称>:<地图名称> shader:stdtexture-cave`
* 保护世界，只允许有权限玩家浏览：`/dmap mapset <世界名称>:<地图名称> protected:true`
* 浏览可用角度：`/dmap perspectivelist`
* 浏览可用着色器：`/dmap shaderlist`
* 浏览可用光照：`/dmap lightinglist`
* 设置地图与其他世界的地图一同出现：`/dmap mapset <世界名称>:<地图名称> append-to-world:<另一世界名称>`

::: info 注意

通过 `mapset` 设置的属性也可以用 `mapadd` 对新地图设置。

:::

大部分编辑命令需要启动一次完整渲染才会生效。

编辑完成后，记得输入 `/dynmap pause none` 解除暂停正常的渲染。
