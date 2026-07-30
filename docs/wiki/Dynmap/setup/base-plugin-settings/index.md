# 基础插件设置

## 本页内容已经过时，请查阅 Configuration.txt 与[安装教程](setup.base-plugin-settings.installation.md)

如下为 *configuration.txt* 文件中的顶级设置。这些设置涵盖了插件大部分，以及部分独立组件，世界或地图。对于组件设置，请见“[组件配置](advanced-configuration.component-configuration.md)”

核心设置包含如下内容：

* *deftemplatesuffix*：可选项，字符串。用于修改与世界相关的模板名称。若不设置，则普通世界会使用 **normal** 模板，而下界世界会使用 **nether** 模板，末地世界则会使用 **the_end** 模板。当设置了非空内容时，模板使用的名称即为默认名称，下划线以及 *deftemplatesuffix* 设置的值（例如，若 *deftemplatesuffix* 值为 XXX，则普通世界名称显示为 **normal_XXX** 而非 **normal**，下界世界名称显示为 **nether_XXX**，末地世界名称显示为 **the_end_XXX**）。见“高清地图配置”部分了解更多。默认模板包括 **vlowers**、**lowers**、**hires** 以及空白。
* *display_whitelist*：若为 false（默认值），插件会假设玩家处于可见状态，直到使用 */dynmap hide* 命令隐藏。若为 true，则插件会假设玩家处于不可见状态，直到使用 */dynmap show* 命令显示。
* *renderinterval*：浮点数，单位为秒。用于控制 tiles（因玩家）的更新速度。过低值会导致服务器因频繁更新 tiles 而卡顿。默认为 0.5 秒。大部分服务器在不出现问题的最低值为 0.2 秒。
* *renderacceleratethreshold*：整数。决定了在 tiles 处理过程中，*renderinterval* 速率后切换至 *renderaccelerateinterval* 速率前 tile 更新队列的大小。这个设置的目的是为了防止大 tile 处理任务堆积（在玩家尝试生成大块新地图区域时时有发生），而无需提高正常更新的速度。
* *renderaccelerateinterval*：浮点数，单位为秒。在 tile 更新队列长度超过了 *renderacceleratethreshold* 设置的值时代替 *renderinterval* 的值。
* *tiles-rendered-at-once*：这个设置决定了一次更新涉及 tiles 的最大数量。如果不设置，则默认为处理器核心数的 $\frac{1}{2}$。更低的值可以在大量 tile 载入（如载入大量新区块时）时降低 CPU 波峰数值。
* *usenormalthreadpriority*：设置为 true 时，使得渲染器以正常优先级运行（原本为最小优先级）。有助于提升 Windows 系统上的渲染性能（防止渲染过于繁忙），但有可能导致其他程序与之竞争 CPU。大多数 Linux JBM 没有优先级设定。
* *zoomoutperiod*：整数，单位为秒。指定缩放后加载 tiles 的更新频率。这可以防止玩家因地形重复改动（例如挖矿）产生的不必要 tiles 渲染。默认值为 60 秒。
* *enabletilehash*：布尔值。决定是否启用 tile 内容的哈希代码，用于避免重复编码重渲染后未改变的方块（例如，在 tile 层面不可见的方块改动）。这可以降低载入、缩放以及和网页客户端沟通时的性能消耗。
* *render-triggers*：字符串列表。决定了生成或更新地图 tiles 的检测方法。可用触发条件如下：
  * *chunkloaded*：表示在地图区块载入时更新 tiles。不建议使用这个参数，你应当使用 *chunkgenerated*，因为这个参数会引发大量的重复计算。在 v0.31 后弃用。
  * *playermove*：表示基于玩家移动更新 tiles。不建议使用这个参数，因为这个参数同样会引发大量的重复计算。
  * *playerjoin*：表示在玩家登录后更新其位置附近的 tiles。
  * *blockplaced*：表示在玩家放置方块后更新 tiles。（推荐）
  * *blockbreak*：表示在玩家破坏方块后更新 tiles。（推荐）
  * *leavesdecay*：表示在树叶因树木被砍伐时枯萎消失后更新 tiles。（推荐）
  * *blockburn*：表示方块被烧毁后更新 tiles。（推荐）
  * *blockfaded*：表示方块消失（如冰雪融化）后更新 tiles。（推荐）
  * *blockspread*：表示方块蔓延（如岩浆或水等液体扩散）后更新 tiles。（推荐）
  * *chunkgenerated*：表示地图生成新区块后更新 tiles。（推荐）
  * *pistonmoved*：表示活塞推拉后更新 tiles。（推荐）
  * *explosion*：表示方块被爆炸摧毁后更新 tiles。（推荐）
  * *blockfromto*：表示方块流动至新位置并造成方块更新（如岩浆与水的流动）后更新 tiles。（推荐）
  * *blockphysics*：表示方块因物理活动（砂砾或沙子受重力影响、岩浆或水等流体流动）更新时更新 tiles。（推荐）
  * *structuregrow*：表示树苗或蘑菇成长时更新 tiles。（推荐）。
  * *blockgrow*：表示作物或蘑菇生长时更新 tiles。（推荐）
  * *blockredstone*：表示红石信号改变方块时更新 tiles。（在服务器有高频红石时慎用）
* *webpage-title*：字符串。表示 Dynmap 网页端的标题。如未指定，则使用 *server.properties* 下的“server-name”设置。如果未设定或为“Unknown Server”，则标题会使用默认的“Minecraft 动态地图”。
* *tilespath*：字符串。表示存储（及内置网页服务器使用的）地图 tiles 的位置（Dynmap 插件文件夹的相对或绝对路径）。
* *webpath*：字符串。表示内置网页服务器的根目录。（除地图 tiles 文件外的）所有文件都由其处理。路径可为 Dynmap 插件文件夹的相对或绝对路径。
* *webserver-bindaddress*：IP 地址。表示内置网页服务器绑定的网页界面。默认为 0.0.0.0，即绑定至所有界面（适用于大部分配置）。将其设置为 127.0.0.1 会使得其绑定在本地（适用于服务端与内部网页服务器处在同一台机器内的情况）。其他值需要匹配面板或相关界面分配的地址（并非防火墙或群组外的公开地址）。
* *webserver-port*：整数。决定网页服务器绑定的端口号。默认为 8123。注意：如果要设置小于 1024 的端口号，部分系统可能会需要以 root 权限运行程序。
* *max-sessions*：整数，决定了内置网页服务器最大活跃会话数（限制会话与线程及相关内容的占用）。默认值为 30。
* *http-response-headers*：键值对列表。表示内置网页服务器的 HTTP 自定义回复消息头。格式为头字段键名作为属性 ID，值为字符串值。示例：

``` YAML
http-response-headers:
    Access-Control-Allow-Origin: "http://mydomain.com"
    X-Another-Header: "Another Header Value"
```

* *disable-webserver*：若设置为 *true*，则禁用内置网页服务器（需要使用外部服务器网络，以及 JSONFileClientUpdateComponent），其他配置选项需要该设置值为 *false*。
* *allow-symlinks*：若设置为 *true*，则 *webpath* 和 *tilepath* 下的文件夹将会允许包含符号链接。若为 *false*，则内置网页服务器将不会跟随符号链接（这是与外置网页服务器保持文件同步的推荐选择）。
* *timesliceinterval*：浮点数，单位为秒。指定 */dynmap fullrender* 过程中 tiles 的最小处理间隔。默认值为 0.0（无间隔）。填写大于零的值可降低服务器在完全渲染过程中的负载，但会显著延长处理时间。
* *maxchunkspertick*：整数。限制给定服务器刻（50 毫秒）内的地图区块载入数量。鉴于地图区块载入是在 Bukkit 的服务器主线程上处理的，这个选项可用于缓解地图载入导致的卡顿。
* *progressloginterval*：整数。完全渲染过程中发送报告的间隔时间。默认（以及最小）值为 100。
* *parallelrendercnt*：可选项，整数。决定了全渲染过程由多个线程完成。设置表示同时使用的线程数量，不应大于服务器 CPU 核心数量。注意：这会导致 CPU 占用增加，同时内存占用也会少量上升。请谨慎填入大于或等于系统 CPU 核心数的数字。
* *updaterate*：整数，单位为毫秒。决定了网页客户端间隔多久向服务端请求更新（诸如 tile 更新、聊天消息同步、玩家位置更新等）。调整至更高的值可缓解网页服务器压力。
* *fullrenderplayerlimit*：可选项。决定了玩家数量达到一定程度时暂缓全渲染/范围渲染任务。默认为 0（禁用），设置为 1 时会使得一旦有玩家进入服务器即会停止全渲染/范围渲染任务。
* *showplayerfacesinmenu*：布尔值。决定正版玩家头像是否在网页客户端中显示。默认为显示（即 true）。
* *sidebaropened*：字符串。决定是否永久固定侧边栏（true）、默认固定（pinned）或默认不固定（false）。默认值为 false。
* *joinmessage*：字符串。决定网页聊天是否显示玩家加入服务器的消息。内建变量 %playername%，会显示玩家名称。
* *quitmessage*：字符串。决定网页聊天是否显示玩家离开服务器的消息。内建变量 %playername%，会显示玩家名称。
* *spammessage*：字符串。决定网页聊天是否可以频繁发送消息。
* *webprefix*：字符串。决定从网页客户端接收的消息显示的前缀。旧版颜色代码“&”可用在这里表示不同的颜色。
* *websuffix*：字符串。决定从网页客户端接收的消息显示的后缀。旧版颜色代码“&”可用在这里表示不同的颜色。
* *showlayercontrol*：布尔值。决定是否显示图层控制（设置为 false 表示不显示，即便设置了标记层）。默认为 true。
* *check-banned-ips*：布尔值。决定内置网页服务器是否检查服务端的 banned-ips.txt 检查网页客户端的 IP 是否处于黑名单。
* *persist-ids-by-ip*：若为 true，插件会记住玩家的 IP 地址与其名称，不会因服务器关闭或重载而消失（允许积累 IP 地址与玩家名称的关联数据）。默认为 true（0.29 后引入）。
* *defaultzoom*：整数。决定玩家首次打开网页界面时的缩放大小。
* *defaultworld*：字符串。决定玩家首次打开网页界面时的所处世界。
* *defaultmap*：字符串，决定玩家首次打开网页界面时的地图名称。
* *followzoom*：可选项，整数。决定玩家选择跟随模式时的缩放大小。
* *followmap*：可选项，字符串。决定玩家选择跟随模式时的所处世界。
* *verbose*：布尔值。决定是否在 Dynmap 启动时显示详细信息。设置为 false 可显著减少消息报告及细节。
* *hideores*：布尔值。决定是否隐藏矿物类方块，将其显示为石头（防止地图被用于搜寻矿物）。默认为 false。
* *better-grass*：布尔值。决定是否以 BetterGrass 客户端模组般渲染雪与草方块的侧面。默认为 false。
* *smooth-lighting*：布尔值。为所有支持该选项的地图提供平滑光照功能。设置为 true 即可简单地为所有地图启用平滑光照。同时设置是基于着色器定义的，可以用来控制各个地图的特征。启用该功能会大约增加 10% 的性能消耗。
* *use-generated-textures*: 若存在且为 true，会使得基于资源包的高清地图渲染以等同于 Minecraft 客户端的品质加载水、岩浆与火焰。若为 false，则使用 texture.png 与 misc/water.png（0.29 版本前）的内容。设置后需要重新渲染整个地图才可生效。
* *correct-water-lighting*: 若存在且为 true，会使得基于资源包的高清地图渲染以等同于 Minecraft 客户端的品质加载水的光照。若为 false，则使用旧版更暗的水体（0.29 版本前）。设置后需要重新渲染整个地图才可生效。
* *fetchskins*：布尔值。决定服务器是否在玩家登录时获取其皮肤。若为 false，则不会获取皮肤，并为所有玩家使用默认皮肤。默认值为 true。
* *refreshskins*：布尔值。决定服务器是否在玩家登录时刷新皮肤脸部及其他图片。若为 false，则已经存在的文件将永远不会刷新（如果皮肤脸部是本地管理或由管理员/其他插件上传，则该功能会有用）。默认为 true。

## 网页界面登录安全设置

网页界面基于登录的认证有如下设置：

* *login-enabled*：布尔值。启用登录认证支持（若存在且设置为 true）。

* *login-required*：布尔值。强制地图仅登录可见（若存在且设置为 true）。