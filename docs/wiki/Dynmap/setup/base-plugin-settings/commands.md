# 命令列表

## 玩家显示控制

- `/dynmap hide`：将玩家从地图上隐去。
- `/dynmap hide <玩家名称>`：将指定玩家从地图上隐去。
- `/dynmap show`：将玩家重新显示在地图上。
- `/dynmap show <玩家名称>`：将指定玩家重新显示在地图上。

## 渲染相关

- `/dynmap render`：渲染你所处区块的图块。
- `/dynmap fullrender`：尝试从你所处的位置开始渲染整个世界的地图（若为控制台输入，则从世界中心开始）。
- `/dynmap fullrender <世界名称>`：尝试从世界中心开始渲染整个世界的地图。
- `/dynmap fullrender <世界名称>:surface`：尝试从指定世界的中心开始渲染整个世界的地表地图。
- `/dynmap fullrender resume <世界名称>`：继续地图渲染任务。自动跳过渲染完毕的图块。
- `/dynmap fullrender resume <世界名称>:<地图类型>`：继续地图渲染任务。自动跳过渲染完毕的图块。
- `/dynmap radiusrender <半径>`：尝试渲染至少指定半径内的方块区域，以你所处的位置为中心。
- `/dynmap radiusrender <半径> <地图类型>`：尝试渲染至少指定半径内的方块区域，以你所处的位置为中心，以当前地图类型为基础。
- `/dynmap radiusrender <世界名称> <X 轴坐标> <Z 轴坐标> <半径>`：以指定世界及位置为中心，渲染一定范围内的区域。
- `/dynmap updaterender`：尝试渲染被标记为需更新的图块，从当前位置开始，逐渐覆盖整个地图。触及地图边缘或不需要更新的图块后停止。
- `/dynmap updaterender <地图类型>`：尝试渲染指定类型地图中被标记为需更新的图块，从当前位置开始，逐渐覆盖整个地图。触及地图边缘或不需要更新的图块后停止。
- `/dynmap updaterender <世界名称> <X 轴坐标> <Z 轴坐标>`：尝试渲染被标记为需更新的图块，从指定世界的位置开始，逐渐覆盖整个地图。触及地图边缘或不需要更新的图块后停止。
- `/dynmap updaterender <世界名称> <X 轴坐标> <Z 轴坐标> <半径>`：尝试渲染被标记为需更新的图块，从指定世界的位置开始，逐渐覆盖半径内区域。触及地图边缘或不需要更新的图块后停止。
- `/dynmap cancelrender <世界名称>`：停止指定世界中正在进行的完全渲染或范围渲染任务。
- `/dynmap purgequeue`：清除图块更新队伍。
- `/dynmap purgeworld <世界名称>`：清除指定世界的所有地图文件。
- `/dynmap purgemap <世界名称> <地图类型>`：清除指定世界指定类型的地图文件。
- `/dynmap pause all`：停止所有地图渲染任务（包括地图更新及完整/范围渲染任务）
- `/dynmap pause none`：继续所有地图渲染任务
- `/dynmap quiet`：切换渲染消息

## 统计数据相关

- `/dynmap stats`：显示所有世界不同类型地图的渲染统计数据。
- `/dynmap stats <世界名称>`：显示指定世界不同类型地图的渲染统计数据。
- `/dynmap triggerstats`：显示所有世界的触发渲染统计数据。
- `/dynmap resetstats`：重置所有世界不同类型地图的渲染统计数据。
- `/dynmap resetstats <世界名称>`：重置指定世界不同类型地图的渲染数据。

## 地图标记相关

仅在启用了“地图标记”组件（需 0.22 版本后）后才可使用这些命令。

- `/dmarker add <标签> icon:<图标> set:<设置 ID>`：在玩家当前位置添加新标记点，带有指定标签及可选图标，还可设置标记点组。
- `/dmarker add id:<id> <标签> icon:<图标> set:<设置 ID>`：在玩家当前位置添加新标记点，带有指定 ID、标签及可选图标，还可设置标记点组。
- `/dmarker add id:<id> <标签> icon:<图标> set:<设置 ID> x:<x 轴坐标> y:<y 轴坐标> z:<z 轴坐标> world:<世界名称>`：在世界的指定位置添加新标记点，带有指定 ID、标签及可选图标，还可设置标记点组。
- `/dmarker movehere <标签>`：将对应标签的标记点移动到玩家当前的位置。
- `/dmarker movehere id:<id>`：将对应 ID 的标记点移动到玩家当前的位置。
- `/dmarker update <标签> icon:<新图标> newlabel:<新标签>`：修改对应标签的标记点图标，并重命名其标签。
- `/dmarker update id:<id> icon:<新图标> newlabel:<新标签>`：修改对应 ID 的标记点图标，并重命名其标签。
- `/dmarker delete <标签>`：删除对应标签的标记点。
- `/dmarker delete id:<id>`：删除对应 ID 的标记点。
- `/dmarker list`：列出默认标记点组中的所有标记点。
- `/dmarker list set:<设置 ID>`：列出指定标记点组中的所有标记点。
- `/dmarker icons`：列出标记点使用的所有图标。
- `/dmarker addset <标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>`：新建标记点组，并设置指定标签（ID = 标签）
- `/dmarker addset id:<id> <标签> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>`：新建标记点组，并设置指定 ID 与标签
- `/dmarker updateset <标签> newlabel:<new-label> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>`：更新指定标签的标记点组（ID = 标签）
- `/dmarker updateset id:<id> newlabel:<new-label> hide:<默认隐藏> prio:<优先级> minzoom:<最小缩放>`：更新指定 ID 的标记点组
- `/dmarker deleteset <标签>`：删除指定标签的标记点组。
- `/dmarker deleteset id:<id>`：删除指定 ID 的标记点组。
- `/dmarker listsets`：列出所有标记点。
- `/dmarker addicon id:<id> <标签> file:"文件名称"`：从指定文件（路径相对于服务器所在根目录，文件内容会被复制）安装新图标，设置 ID 与标签。
- `/dmarker updateicon id:<id> newlabel:<标签> file:"文件名称"`：从指定文件更新图标，以读取内容替代现有设置。
- `/dmarker deleteicon id:<id>`：删除指定 ID 的图标。
- `/dmarker addcorner`：将当前位置作为角点添加至角点列表。
- `/dmarker addcorner <x> <y> <z> <世界名称>`：将指定位置作为角点添加至角点列表。
- `/dmarker clearcorners`：清理角点列表。
- `/dmarker addarea <标签>`：通过角点列表新建指定标签的区域。
- `/dmarker addarea id:<id> <标签>`：通过角点列表新建指定 ID 的区域。
- `/dmarker deletearea <标签>`：删除指定标签对应的区域。
- `/dmarker deletearea id:<id> <标签>`：删除指定 ID 对应的区域。
- `/dmarker listareas`：列出所有区域。
- `/dmarker updatearea <标签> <参数>:<值> ...`：更新指定标签对应区域的属性。
- `/dmarker updatearea <id> <参数>:<值> ...`：更新指定 ID 对应区域的属性。
- `/dmarker updatearea <id> label:<标签> newlabel:<新标签>`：更新指定 ID 的区域标记点标签。
- `/dmarker addcircle <标签>`：通过角点列表新建指定标签的圆形区域。
- `/dmarker addcircle id:<id> <标签>`：通过角点列表新建指定 ID 的圆形区域。
- `/dmarker deletecircle <标签>`：删除指定标签对应的圆形区域。
- `/dmarker deletecircle id:<id> <标签>`：删除指定 ID 对应的圆形区域。
- `/dmarker listcircles`：列出所有圆形区域。
- `/dmarker updatecircle <标签> <参数>:<值> ...`：更新指定标签对应圆形区域的属性。
- `/dmarker updatecircle <id> <参数>:<值> ...`：更新指定 ID 对应圆形区域的属性。
- `/dmarker updatecircle <id> label:<标签> newlabel:<新标签>`：更新指定 ID 的圆形区域标记点标签。
- `/dmarker addline <标签>`：通过角点列表新建指定标签的线形区域。
- `/dmarker addline id:<id> <标签>`：通过角点列表新建指定 ID 的线形区域。
- `/dmarker deleteline <标签>`：删除指定标签对应的线形区域。
- `/dmarker deleteline id:<id> <标签>`：删除指定 ID 对应的线形区域。
- `/dmarker listlines`：列出所有线形区域。
- `/dmarker updateline <标签> <参数>:<值> ...`：更新指定标签对应线形区域的属性。
- `/dmarker updateline id:<id> <参数>:<值> ...`：更新指定 ID 对应线形区域的属性。
- `/dmarker appenddesc id:<id> set:<设置 ID> desc:"<标记描述>"`：更新指定 ID 的线形区域标记点标签。
- `/dmarker resetdesc id:<id> set:<设置 ID>`：重置标记点的描述。

## 地图/世界配置命令

- `/dmap worldlist`：列出所有配置的世界（不论启用或禁用）
- `/dmap worldset <世界名称> enabled:<true|false>`：将指定世界的配置开启或关闭。
- `/dmap worldset <世界名称> center:<x/y/z|here|default>`：设置指定世界的地图中心。
- `/dmap worldset <世界名称> extrazoomout:<数字>`：设置指定世界的额外缩放等级。
- `/dmap worldset <世界名称> title:<标签>`：设置指定世界的标题。
- `/dmap worldset <世界名称> sendposition:<true|false> sendhealth:<true|false>`：设置指定世界的 send-position 和/或 send-health 标志。
- `/dmap worldset <世界名称> order:<数字>`：将指定世界的位置移动到世界列表中的指定位置。
- `/dmap worldreset <世界名称>`：将指定世界重置为默认配置。
- `/dmap worldreset <世界名称> <模板名称>`：将指定世界重置为指定的默认配置。
- `/dmap maplist <世界名称>`：列出指定世界所有类型的地图信息。
- `/dmap mapdelete <世界名称>:<地图类型>`：删除指定世界的指定类型地图。
- `/dmap mapadd <世界名称>:<地图类型> <属性:值,属性:值,...>`：新建指定世界的指定类型地图，可额外设置属性（兼容所有 `mapset` 命令中能使用的参数）。
- `/dmap mapset <世界名称>:<地图类型> order:<数字>`：将指定世界指定类型地图的位置移动到地图列表中的指定位置。
- `/dmap mapset <世界名称>:<地图类型> prefix:<前缀>`：设置指定世界指定类型地图的文件名称前缀。
- `/dmap mapset <世界名称>:<地图类型> title:<标签>`：设置指定世界指定类型地图的标题。
- `/dmap mapset <世界名称>:<地图类型> icon:<图标文件>`：设置指定世界指定类型地图的标题。（相对于 `webpath` 文件夹）。
- `/dmap mapset <世界名称>:<地图类型> mapzoomin:<数字>`：设置指定世界指定类型地图的缩放等级。
- `/dmap mapset <世界名称>:<地图类型> perspective:<角度> shader:<阴影> lighting:<光照>`：设置指定世界指定类型地图的角度、阴影及光照。
- `/dmap mapset <世界名称>:<地图类型> img-format:<格式>`：设置指定世界指定类型地图的图片格式（`png`、`jpg`、`jpg-q90`、`jpg-q95` 等）。
- `/dmap perspectivelist`：列出所有设定的角度。
- `/dmap shaderlist`：列出所有设定的阴影。
- `/dmap lightinglist`：列出所有设定的光照。
- `/dmap worldgetlimits <世界名称>`：返回世界可见性及隐藏限制，以及显示“限制类型”的列表，和形状属性设置。
- `/dmap worldaddlimit <世界名称> corner1:<x1>/<z1> corner2:<x2>/<z2>`：新建位置为 `x1,z1` 到 `x2,z2` 的矩形视野限制。添加数量不限。
- `/dmap worldaddlimit <世界名称> corner1:<x1>/<z1> corner2:<x2>/<z2> limittype:hidden`：新建位置为 `x1,z1` 到 `x2,z2` 的矩形视野隐藏限制。添加数量不限。与普通视野限制效果相反。
- `/dmap worldaddlimit <世界名称> type:round center:<x>/<z> radius:<半径>`：新建圆心为 `x,z` 的圆形视野隐藏限制。添加数量不限。
- `/dmap worldremovelimit <世界名称> <编号>`：删除指定编号的视野限制（可在 `/dmap worldgetlimits` 列表中浏览）。
- `/dmap worldaddlimit <世界名称> style:<air|stone|ocean>`：默认为 `stone`（石头），若需要类似区块被直接“裁剪”的效果（例如，若需要在世界边界外生成区块，保留建筑结构等内容的完整性），请将其设置为 `air`（空气）。
## 杂项命令

各种各样的其他命令。

- `/dynmap sendtoweb message ...`：向网页客户端发送消息。
- `/dynmap ids-for-ip <IP 地址>`：列出使用过指定 IP 地址登录的玩家列表（按时间从早到晚排序）
- `/dynmap ips-for-id <玩家名称>`：列出使用过指定玩家名称登录的 IP 列表（按时间从早到晚排序）
- `/dynmap add-id-for-ip <玩家名称> <IP 地址>`：对指定 IP 地址添加玩家名称。
- `/dynmap del-id-for-ip <玩家名称> <IP 地址>`：移除指定 IP 地址使用过的玩家名称。
- `/dynmap webregister`：开始注册网页地图账号。
- `/dynmap webregister <玩家名称>`：为其他玩家注册网页地图账号。
- `/dynmap url`：若有，显示设置的 publicURL。
