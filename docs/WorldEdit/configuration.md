# 配置文件

尽管 WorldEdit 在大部分情况下只需要使用命令，但是用户还是可以通过设置配置文件来决定 WorldEdit 的工具或命令的限制或变动。

## 配置文件

只要你运行了安装 WorldEdit 的服务器，你就可以在相应的位置找到本插件的配置文件。

### Bukkit 服务器

Bukkit 版本的 WorldEdit 的配置文件可以在 `plguins/WorldEdit/config.yml`，一般位于服务器核心的同级目录下[^1]。

需要注意的是，Bukkit 所使用的 YAML 格式配置文件容错率很低。在文件中使用的缩进必须使用四个空格（TAB 缩进符会破坏文件结构！），且要一直遵守 YAML 的格式。如果你很少或从未编辑过 YAML 类型的文件的话，你可以将你的配置文件放进一些在线格式检测器中（例如[这个网站](https://yaml-online-parser.appspot.com/)[^2]），并确保你所设置的配置文件中没有任何格式错误。

### Forge/Fabric 客户端/服务器

NeoForge/Fabric 的配置文件选项可在 `config/worldedit/worldedit.properties` 文件中找到。在服务器中，这个文件则会对应存在于服务器的根目录下（也就是服务器核心 .jar 文件的同级目录附近）。在单人客户端中，这会存在于你的“.minecraft”文件夹下。

### Sponge 服务器

在 Sponge 服务器中的配置文件（SpongeForge 或 SpongeVanilla）可以在 `config/worldedit/worldedit.conf` 文件中找到。

## 配置选项

::: tip   
鉴于现在服务端核心百花齐放的场景，其开发状态可能各有不同，所以不是该配置中的所有设置都能稳定运行在所有平台上。如果你发现了某项配置不能正常在游戏里工作，请提醒我们。
:::

|设置项|默认值|描述|
|---|---|---|
|defaultLocale|default|插件所使用的语言，默认情况下跟随系统语言。|
|profile|false|是否在操作后显示所有受到修改的方块及其时间点。|
|traceUnflushedSessions|false|在指定编辑未正确完全执行时显示调试信息。|
|disallowedBlocks|<方块列表>|放置图案参数中不能出现的方块（大多数受重力影响，会“掉落”的方块可能会造成服务器卡顿，甚至在量足够大的时候使服务器崩溃）。|
|defaultChangeLimit|-1|单次操作限制的影响方块数量默认上限。|
|maxChangeLimit|-1|单次操作限制的影响方块数量最大上限（游戏内可通过 `//limit` 命令修改）。|
|defaultMaxPolygonalPoints|-1|多边形所使用的默认顶点数量（`//sel poly`），-1 表示使用最大值。|
|maxPolygonalPoints|20|多边形所使用的最大顶点数量（`//sel poly`，在拥有权限 `worldedit.limit.unrestricted` 时使用）|
|defaultMaxPolyhedronPoints|-1|多面体所使用的默认顶点数量（`//sel convex`），-1 表示使用最大值。|
|maxPolyhedronPoints|20|多面体所使用的最大顶点数量（`//sel convex`，在拥有权限 `worldedit.limit.unrestricted` 时使用）|
|snapshotRepo||不为空时，即为名称对应的文件夹中的快照|
|snapshotsExperimental|false|如果设置为 true，则使用新的快照格式。可以试试，并在使用过程中报告可能的漏洞！|
|maxRadius|-1|需要半径参数的命令的最大半径。|
|maxSuperPickaxe|5|超级镐子工具最大的连锁破坏大小。|
|maxBrushRadius|6|笔刷工具的最大尺寸。|
|logCommands|false|是否记录使用命令的详细信息。|
|logFile||若上一个选项被设置为 true，则该项填入存储日志的位置。|
|logFormat|[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS %4$s]: %5$s%6$s%n|记录命令的格式。|
|wandItem|minecraft:wooden_axe|圈定选区用的默认物品，可被已有游戏内设置覆盖。设置为 -1 表示不绑定任何物品。|
|superPickaxeDrop|true|超级镐子是否掉落其破坏的物品。|
|superPickaxeManyDrop|true|多个超级镐子触发时是否掉落其破坏的物品|
|useInventory|false|编辑时消耗玩家在背包中拥有对应的物品（该功能兼容性不佳，不推荐使用）。|
|useInventoryOverride|false|允许一个指定的权限节点覆盖上述设置。|
|useInventoryCreativeOverride|false|允许创造模式覆盖上述设置。|
|navigationUseGlass|true|如果玩家在使用 `/up` 或 `/ceil` 命令时目的地为空中，是否在他们脚下生成一块玻璃。|
|navigationWand|minecraft:compass|导航魔杖所使用的默认物品，绑定后手持该物品左键等价于输入命令 `/jumpto`，右键等价于 `/thru`，可被游戏内的设置覆盖。设置为 -1 表示不绑定任何物品。|
|navigationWandMaxDistance|50|导航魔杖使用的最大距离。|
|scriptTimeout|3000|快速脚本被强制结束前的最大等待时间。|
|calculationTimeout|100|计算命令被强制结束前的等待时间。|
|maxCalculationTimeout|300|计算命令被强制结束前的最大等待时间。|
|allowedDataCycleBlocks||若不为空，该设置列表中的方块可以用于数据同步工具。|
|saveDir|schematics|结构文件保存的路径（上级目录即为 worldedit 文件夹）|
|scriptsDir|craftscripts|快速脚本保存的路径。|
|allowSumlinks|false|是否允许上述内容使用连接位置（对跨服使用很有帮助）|
|butcherDefaultRadius|-1|`/butcher` 命令的默认使用半径（-1 表示不限制）|
|butcherMaxRadius|-1|`/butcher` 命令的最大使用半径（-1 表示不限制）|
|serverSideCUI|true|是否允许使用 `//drawsel` 命令显示选区。|
|defaultVerticalHeight|256|以高度为可选参数的命令所能设置对应参数的最大值。|
|extendedYLimit|false|若设置为 true，则允许选择没有高度限制的位置，但处理效率更低。仅建议在有模组能拓宽世界上限的情况时使用。|

[^1]: 译者注：即服务器核心的 .jar 文件旁边，字面意义上的旁边。

[^2]: 
    译者注：也可以使用 HelpChat 官方提供的 [YAML 文件格式校验器](https://yaml.helpch.at/)。
    另外，也可使用一些编辑器例如 Visual Studio Code 所提供的检测功能，以 VSCode 为例，它会使用红色波浪线标出文本中不符合语法的地方。