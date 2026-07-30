# Configration.txt

本页囊括了所有 Configuration.txt 中的内容。

本页讲述的内容非常完整且详细，提及了大部分用得上的设置及其解释。若只需要简单的安装教程，请回到[上一章节](installation.md)。

## deftemplatesuffix

决定了地图的渲染**分辨率**。若要修改地图的清晰度（与文件大小），请浏览[文件格式](#image-format)部分设置。可用的分辨率选项有：`vlowres`、`lowres`、`hires`、`low_boost_hi`、`hi_boost_vhi`、`hi_boost_xhi`。

``` txt
若需要将地图模板的世界基础设置为极低画质（每格方块 2 像素），将值调整为 vlowres 即可。
* 这些模板在 normal-vlowres.txt、nether-vlowres.txt 和 the_end-vlowres.txt 中设置。
若需要将地图模板的世界基础设置为较低画质（每格方块 4 像素），将值调整为 lowres 即可。
* 这些模板在 normal-lowres.txt、nether-lowres.txt 和 the_end-lowres.txt 中设置。 
若需要将地图模板的世界基础设置为较高画质（每格方块 16 像素），将值调整为 hi-res 即可（等待完整渲染可能耗时较久）。
* 这些模板在 normal-hires.txt、nether-hires.txt 和 the_end-hires.txt 中设置。
若需要将地图模板的世界基础设置为较低画质（每格方块 4 像素），且允许玩家将清晰度调整为较高画质（每格方块 16 像素），将值调整为 low_boost_hi 即可。
* 这些模板在 normal-low_boost_hi.txt、nether-low_boost_hi.txt 和 the_end-low_boost_hi.txt 中设置。
若需要将地图模板的世界基础设置为较高画质（每格方块 16 像素），且允许玩家将清晰度调整为极高画质（每格方块 32 像素），将值调整为 hi_boost_vhi 即可。
* 这些模板在 normal-hi_boost_vhi.txt、nether-hi_boost_vhi.txt 和 the_end-hi_boost_vhi.txt 中设置。
若需要将地图模板的世界基础设置为较高画质（每格方块 16 像素），且允许玩家将清晰度调整为最高画质（每格方块 64 像素），将值调整为 hi_boost_xhi 即可。
* 这些模板在 normal-hi_boost_xhi.txt、nether-hi_boost_xhi.txt 和 the_end-hi_boost_xhi.txt 中设置。
```

默认值：

``` YAML
deftemplatesuffix: hires
```

## storage-scheme


这部分决定了地图数据的存储方式，默认支持 `filetree`（本地文件）、`sqlite`（本地数据库）及 `mysql`（远程数据库）。“filetree（本地文件）”模式下，地图数据会以图片的形式存储在 tiles 文件夹，此为默认设置，且适用于大多数服务器。“sqlite（本地数据库）”模式下，地图的数据会被存储在本地的 SQLite 数据库中，推荐小规模服务器或 Windows 系统用户使用。“mysql（远程数据库）”模式下，地图的数据会被存储在单独的 MySQL 服务器实例中。它适用于任意规模的服务器，且适合与提供了 MySQL 部署功能的服务器一同使用。

``` YAML
# 地图存储方式：如下三选一
#  filetree：经典的默认选择，本地文件。将地图数据以图片形式存储在“tilepath”指定的文件夹中。
#  sqlite：简单的 SQLite 数据库文件（可能会变得非常大），存储在“dbfile”设置指定的文件中（默认为 data 文件夹下的 dynmap.db 文件）
#  mysql：MySQL 数据库，连接到 域名:端口，通过用户名及密码登入
storage:
  # 本地文件存储（将地图以标准的图片文件格式存储）
  type: filetree
  # 存储地图数据的 SQLite 数据库（将地图数据存储在数据库中）
  #type: sqlite
  #dbfile: dynmap.db
  # 存储地图数据的 MySQL 数据库（指向 '域名':'端口'，“flags” 可指定额外参数，“database” 表示指定的表。通过 “userid” “password” 登入，通过表前缀 “prefix” 定位存储位置)
  #type: mysql
  #hostname: localhost
  #port: 3306
  #database: dynmap
  #userid: dynmap
  #password: dynmap
  #prefix: ""
  #flags: "?allowReconnect=true"
```

这三种存储方式中，只有本地文件无需额外设置。根据使用核心的类型，可能需要下载兼容层才能使用其他的存储方式。

### Fabric 及 Forge 服务端

Fabric 模组开发者 @kosma 制作了两个添加 SQL 兼容层的模组，支持 Fabric 与 Forge。

* SQLite 实现由这个模组负责：Kosmolot's SQLite Mod（[Modrinth](https://modrinth.com/plugin/sqlite-jdbc)、[Curseforge](https://www.curseforge.com/minecraft/mc-mods/sqlite-jdbc)）
* MySQL 实现由这个模组负责：Kosmolot's MySQL Mod（[Modrinth](https://modrinth.com/plugin/mysql-jdbc)、[Curseforge](https://www.curseforge.com/minecraft/mc-mods/mysql-jdbc)）

### Paper 及 Spigot 服务端

它们内置了对 SQL 服务器的支持，因此无需额外安装组件。只需将类型设置为 mysql 后填入登录凭据即可。

## 组件

这部分配置允许你调整 Dynmap 所有的功能。并非所有组件都可以同时启用，除此之外，有些组件对 Dynmap 的功能至关重要。这部分只会大致讲述每个组件的功能；它们的详细功能请前往[组件配置]()章节了解。

``` YAML
components:
```

### 客户端配置组件

Dynmap 运行的必需组件，没有额外设置。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientConfigurationComponent
```

### 内置客户端更新组件

这个组件控制连接到内网服务器的 Dynmap 网页客户端更新。如果你正在使用内置网络服务器，请保持其载入，否则应当将其关闭。\
**默认启用**。

``` YAML
  - class: org.dynmap.InternalClientUpdateComponent
```

### Json 文件客户端更新组件

这个组件控制连接到外网服务器的 Dynmap 网页客户端更新。如果你正在使用外部网络服务器，请保持其载入，否则应当将其关闭。\
**默认禁用**。

``` YAML
  #- class: org.dynmap.JsonFileClientUpdateComponent
```

### 简单网页聊天组件

这个组件控制服务器 -> 网页的聊天桥接。禁用这个组件会导致服务器无法向网页地图发送游戏内的聊天消息，但不会阻止网页地图向服务器发送聊天消息。\
**默认启用**。

``` YAML
  - class: org.dynmap.SimpleWebChatComponent
```

### 标记组件

这个组件控制着内置的地图图标功能。它负责控制 `/dmarker` 命令设置的图标，标记告示牌以及 API。\
**默认启用**。

``` YAML
  - class: org.dynmap.MarkersComponent
```

### 客户端组件

这些组件负责 Dynmap 的用户相关体验。它们会管理网页客户端上元素或自定义 logo 的显示。出于简洁考虑，这些组件的选项可以前往[组件配置]()章节浏览。

### 聊天

这个组件控制网页 -> 服务器的聊天桥接。禁用这个组件会导致网页地图无法向服务器发送游戏内的聊天消息，但不会阻止服务器向网页地图发送聊天消息。如果你禁用了这个组件，我们非常推荐一并禁用聊天框组件，这样可以在网页地图上完全关闭聊天功能。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: chat 
```

### 聊天气泡

这个组件允许在玩家图标上显示聊天气泡。禁用这个组件会导致玩家头上不会出现聊天内容。另外，这个组件依赖于玩家标记组件。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: chatballoon 
```

### 聊天框

这个组件控制着网页聊天界面。它决定了可浏览的聊天内容数量，消息传递延迟以及是否在聊天栏中显示玩家头像。禁用这个不会阻止玩家聊天，只会隐藏聊天窗口。如果你禁用了这个组件，请记得一并禁用聊天组件，反之亦然。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: chatbox 
```

### 玩家标记

这个组件控制玩家的位置与名称在地图上的显示方式。这个组件是聊天气泡的前置组件。禁用这个组件会导致玩家图标在地图上不可见。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: playermarkers 
```

### 数字时钟

注意：一次只能启用一种时钟。这个组件会显示一个对应了当前世界的游戏内时间的时钟。原版服务器的时钟通常完全准确，而对于模组服务器或安装了不同玩家显示不同时间的插件，则有可能出现不准确的情况。\
**默认禁用**。

``` YAML
  #- class: org.dynmap.ClientComponent
  #  type: digitalclock 
```

### 星期时钟

注意：一次只能启用一种时钟。这个组件会显示一个对应了当前世界的游戏内时间的时钟。太阳与月亮标志会显示在时钟旁，用以表示昼夜交替。原版服务器的时钟通常完全准确，而对于模组服务器或安装了不同玩家显示不同时间的插件，则有可能出现不准确的情况。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: timeofdayclock 
```

### 连接按钮

这个组件会在网页地图的右上角添加一个链接按钮，内含指向当前地图位置的链接。这个按钮可以右键点击复制链接，这样你就可以保存当前位置，并与其他玩家分享。禁用这个组件会导致链接按钮从网页地图上消失，不过先前复制的链接仍然可以访问对应的位置。\
**默认启用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: link 
```

### 坐标界面

注意：仅在平面地图下准确。立体地图无法准确显示所指位置的坐标。这个组件会在网页地图的左上角显示坐标界面。它可以显示鼠标指针所处位置对应游戏内的坐标。禁用这个组件会导致坐标界面从网页地图上消失。\
**默认禁用**。

``` YAML
  - class: org.dynmap.ClientComponent
    type: coord 
```

### Logo

这个组件允许你在网页地图的一角放置自定义图标。通常情况下，应该是一张服务器图标，或者其他图片，若需要显示透明图片，还需要是 .png 格式。半透明像素会以白色为背景。这个组件不会压缩图片，上传的图片大小即为显示在屏幕的大小。（一个 512px 的图标在网页地图上的显示大小同样为 512px）。\
**默认禁用**。

``` YAML
  #- class: org.dynmap.ClientComponent
  #  type: logo 
```

### 超时退出

这个组件可以用于判断当前的网页地图用户是否长时间未操作。如果你正在使用内置网络服务器，需要主动清退长时间未使用网页客户端的玩家，那么你就可以使用这个功能。可以自行设置超时的时间与触发功能的页面。\
**默认禁用**。

``` YAML
  #- class: org.dynmap.ClientComponent
  #  type: inactive 
```

## display-whitelist

默认值：

决定了是否将 hideplayers.txt 用作白名单。这个文件允许你隐藏指定的玩家，让他们不显示在网页界面的侧边栏中。若 display-whitelist 设置为 true，那么只有这个文件中的玩家会显示在那里。

默认值：

``` YAML
display-whitelist: false
```

## renderinterval

决定了插件渲染图块的时间间隔，单位为秒。调高值可以降低图块更新的速度。每张图片都是服务器地图的一部分。可以填入小数值。未设置时，默认值为 0.5 秒。

默认值：

``` YAML
renderinterval: 1
```

## renderacceleratethreshold

在插件尝试加速渲染时，队列里能同时存在的图块数量上限。值过高可能会导致性能降低。单位为图块数量。

默认值：

``` YAML
renderacceleratethreshold: 60
```

## renderaccelerateinterval

渲染队列到达 renderacceleratethreshold 设置的上限后，插件渲染图块的速度。值过低可能会导致性能问题。单位为图块/秒。

默认值：

``` YAML
renderaccelerateinterval: 0.2
```

## tiles-rendered-at-once

这个设置决定了插件一次更新的最大图块数量。与 renderinterval 组合使用可以极大提升每秒渲染的图块数量。不推荐设置为大于服务器 CPU 核心数量的值。配置没有为这个设置提供默认值，因为 Dynmap 会使用服务器的半数 CPU。修改这个设置会导致完整渲染与范围渲染极大影响服务器性能，但对普通的渲染更新影响甚微。单位为图块数量。

默认值：

``` YAML
#tiles-rendered-at-once: 2
```

## usenormalthreadpriority

这个设置可以让 Winodows 系统将插件的渲染线程优先级调整为普通（标准的背景线程优先级为“低”）。这可以让渲染器更快，还能防止 Windows 阻止长时间渲染。Linux 基本可以无视这个设定，不过改动它有可能会导致未知后果。

默认值：

``` YAML
usenormalthreadpriority: true 
```

## saverestorepending

这个设置允许插件存储渲染队列，这样在服务器重启后仍然可以快速恢复秩序。不推荐改动这个设置，除非你遇到了 Dynmap 启动相关的问题，或者你的服务器经常停电。

默认值：

``` YAML
saverestorepending: true 
```

## save-pending-period

这个设置决定了 Dynmap 保存渲染队列至硬盘的时间间隔，以便在崩溃后快速恢复秩序。单位为秒。

默认值：

``` YAML
save-pending-period: 900
```

## zoomoutperiod

这个设置决定了 Dynmap 检查缩放区域外的图块更新程度。这些图块名称中带有“z”，相较普通的图块，它们大部分不会经常更新。值太低可能导致性能下降，太高则会导致此类图块更新过慢，从而导致缩放后的图块无法反映最新的地形。单位为秒。

默认值：

``` YAML
zoomoutperiod: 30
```

## initial-zoomout-validate

这个设置决定了服务器启动时是否让 Dynmap 检查缩放区域外图块是否最新。如果一些图块不是最新，而更新会消耗大量性能，这样做可以让服务器启动时就将其更新完毕，是一种简单的强制更新图块途径。

默认值：

``` YAML
initial-zoomout-validate: true
```

## tileupdatedelay

这个设置决定了渲染触发器检测到改动后多久更新图块。值太低会导致插件重复渲染同一图块。除此之外，这个设置的值也可以通过每个世界的 worlds.txt 设置进行覆盖，对不同的地图进行更细致的调整。单位为秒。

默认值：

``` YAML
tileupdatedelay: 30
```

## enabletilehash

这个设置决定了 Dynmap 是否在触发更新时校验图块差异。若更新后的图块与原件相同（无可见改变），则跳过更新，节省资源。不推荐禁用这个设置。

默认值：

``` YAML
enabletilehash: true
```

## hideores

这个设置允许 Dynmap 将矿物替换成普通的石头。仅对默认资源包生效，仅起到替换贴图的作用。地图开始渲染后启用这个设置则需要完整重新渲染。

默认值：

``` YAML
#hideores: true
```

## better-grass

这个设置允许 Dynmap 将覆雪草方块与普通草方块渲染成类似 BetterGrass（Optifine）的风格。地图开始渲染后启用这个设置则需要完整重新渲染。

![](_images/better-grass-example.png "如图所示。维基原文图片已不可考，图取自 BetterGrassify 资源介绍帖。")

默认值：

``` YAML
#better-grass: true
```

## smooth-lighting

这个设置允许 Dynmap 在渲染地图时使用平滑光照。例如，就像客户端设置的平滑光照那样。除此之外，这个设置的值也可以通过每个世界的 worlds.txt 设置进行覆盖，对不同的地图进行更细致的调整。地图开始渲染后启用这个设置则需要完整重新渲染。

``` YAML
smooth-lighting: true
```

## use-brightness-table

这个设置允许 Dynmap 使用世界中的方块光照等级决定亮度。若设置为 false，插件会试图使用旧版的光照曲线渲染地图。除此之外，这个设置的值也可以通过每个世界的 worlds.txt 设置进行覆盖，对不同的地图进行更细致的调整。地图开始渲染后启用这个设置则需要完整重新渲染。

默认值：

``` YAML
use-brightness-table: true
```

## lock-alias

这个设置允许地图不渲染指定方块，或将其替换为其他方块。它一般用在屏蔽箱子或刷怪笼上，但也可以通过变量替换为其他模组中的自定义方块。这个设置有详细的格式要求，大致为 `"minecraft:方块名称": "minecraft:替换方块名称"`。如果你使用的是非模组版 Dynmap，就不需要以 `minecraft:` 开头。

默认值：

``` YAML
block-alias:
#    "minecraft:quartz_ore": "stone"
#    "diamond_ore": "coal_ore"
```

## image-format

这个设置决定了 Dynmap 保存文件时使用的文件类型与压缩方法。Dynmap 支持 PNG、JPG 与 WEBP，且 JPG 格式还支持不同的清晰度。标准格式有 `png`、`jpg`、`jpg-q75`、`jpg-q80`、`jpg-q85`、`jpg-q90`、`jpg-q95`、`jpg-q100`、`webp`、`webp-q75`、`webp-q80`、`webp-q85`、`webp-q90`、`webp-q95`、`webp-q100` 以及 `webp-l`。PNG 格式的文件不会进行压缩，在地图上显示的清晰度最高，代价是存储占用最大。JPG 格式的文件则可以适当压缩，极大节省存储空间的同时还可减少网络带宽的使用。除此之外，这个设置的值也可以通过每个世界的 worlds.txt 设置进行覆盖，对不同的地图进行更细致的调整。\
注意：若需要使用 WEBP 格式，你的 Dynmap 构建版本需要在 426 号之后，且系统中需要自行安装处理 WEBP 格式的工具。更多有关内容请见此 Reddit 帖子。

默认值：

``` YAML
image-format: jpg-q90
```

## use-generated-textures

这个设置决定了 Dynmap 渲染水体与岩浆纹理的方式。若设置为 true，则插件将还原它们在游戏里的样子，否则只渲染静态图片。

默认值：

``` YAML
use-generated-textures: true
```

## correct-water-lighting

这个设置决定了 Dynmap 渲染水面下方块和水体光照的方式。若设置为 true，则插件将还原它们在游戏里的样子，否则使用（更暗的）旧版光照引擎。

默认值：

``` YAML
correct-water-lighting: true
```

## transparent-leaves

这个设置决定了 Dynmap 是否要将树叶渲染成透明纹理。出于兼容性考虑，建议部分模组服将此项设置保持在 false。对原版服务器无性能影响。

默认值：

``` YAML
transparent-leaves: true
```

## ctm-support

这个设置决定了 Dynmap 是否为多方块渲染类似连接纹理（即 Connected Texture Mod，简称 CTM）模组的纹理。大部分资源包/模组需要此功能保持开启，不建议手动调整。

默认值：

``` YAML
ctm-support: true
```

## custom-colors-support

这个设置决定了 Dynmap 是否需要使用纹理包中的自定义颜色渲染地图。适用于纹理包内自定义的草/水体/树叶颜色，且不会影响自定义群系颜色。大部分资源包/模组需要此功能保持开启，不建议手动调整。

默认值：

``` YAML
custom-colors-support: true
```

## fetchskins

这个设置决定了 Dynmap 是否为玩家图标获取对应的自定义皮肤。默认情况下启用，否则将所有玩家在地图上的图标显示为史蒂夫。

默认值：

``` YAML
#fetchskins: false
```

## refreshskins

这个设置决定了 Dynmap 是否在保存玩家皮肤后再次更新。默认启用。关闭后玩家皮肤将不再自动刷新。

默认值：

``` YAML
#refreshskins: false
```

## skin-url

这个设置决定了 Dynmap 获取玩家皮肤的链接。默认情况下不应更改，除非你了解你要做出的改动。内建变量 `%player%` 会返回玩家名称。

默认值：

``` YAML
skin-url: "http://skins.minecraft.net/MinecraftSkins/%player%.png"
```

## skinsrestorer-integration

这个设置可以让 Dynmap 通过 SkinRestorer 获取玩家皮肤。一般用于离线服务器，因为它们一般无法经过 Mojang 的验证服务器。默认禁用。

默认值：

``` YAML
#skinsrestorer-integration: true
```

## render-triggers

这个设置决定了 Dynmap 如何及多久更新地图。调整这些设置会影响服务器性能，最终导致地图更新速度发生变化。禁用所有触发器即可阻止 Dynmap 更新地图。在这种情况下，只有范围渲染或完整渲染才可以刷新地图。在 Dynmap 3.1 中，Spigot 服务端有 12 个设置项，而 Forge 则有 5 个。

Spigot：
* `playermove` 不推荐启用。如果启用，Dynmap 会在玩家移动时触发路径内图块的更新。适合用于调试，但玩家过多时会导致崩溃。
* `playerjoin` 不推荐启用。如果启用，Dynmap 会在玩家加入时更新附近区块对应的图块。这可能会被玩家用于压测服务器甚至产生崩溃。
* `blockplaced` 默认启用。如果启用，Dynmap 会将玩家放置过方块的位置标记为待更新。
* `blockbreak` 默认启用。如果启用，Dynmap 会将玩家挖掘过的位置标记为待更新。
* `leavesdecay` 默认启用。如果启用，Dynmap 会将腐烂后树叶的位置标记为待更新。若禁用则可能导致树叶保留在地图上，因此不建议关闭。不过安装了砍树插件且规模较大的服务器可以考虑禁用。
* `blockburn` 默认启用。如果启用，Dynmap 会将烧毁后方块的位置标记为待更新。不建议禁用，因为烧毁后的方块可能残留在地图上干扰玩家浏览。
* `chunkgenerated` 默认启用。如果启用，Dynmap 会将新生成的区块对应位置标记为待更新（即首次渲染）。若你已经预加载了世界，则可以禁用这个设置。不过鉴于它并不会影响性能，所以建议开启。对于性能吃紧的服务器，这可能会让服务器在加载世界时变得格外卡顿。
* `blockformed` 默认启用。作用未知。[^1]
* `blockfaded` 默认启用。作用未知。
* `blockspread` 默认启用。如果启用，Dynmap 会在岩浆流动时将流经区域标记为待更新。
* `pistonmoved` 默认启用。如果启用，Dynmap 会更新有活塞推拉运动的位置。如果服务器存在使用了活塞的大型机械，这可能会导致卡顿。在 tileupdatedelay 正确设置的情况下，这个设置几乎不会影响服务器性能。
* `explosion` 默认启用。如果启用，Dynmap 会将爆炸破坏的方块位置标记为待更新。
* `blockfromto` 默认禁用。如果启用，Dynmap 会更新玩家移动后踩上的任何方块。与 playermove 不同的是，更新只在玩家第一次踩上新位置时触发，且不会多次触发。启用后可能导致严重卡顿，不建议开启。
* `blockphysics` 默认禁用。作用未知。
* `structuregrow` 默认启用。作用未知。
* `blockgrow` 默认启用。如果启用，Dynmap 会将带有生长行为的方块位置标记为待更新（如树木生长、作物状态变化等）。
* `blockredstone` 默认禁用。如果启用，Dynmap 会将有信号更新的红石元件位置标记为待更新。这个设置会极大影响服务器性能，且可以被玩家用于卡服。通常不推荐启用。

Forge：

* `blockupdate` 默认启用。如果启用，Dynmap 会将存在方块更新的位置标记为待更新。
* `blockupdate-with-id` 默认禁用。如果启用，Dynmap 会将存在指定 ID 与元数据方块更新的位置标记为待更新
* `lightingupdate` 默认禁用。如果启用，Dynmap 会将存在光照更新的位置标记为待更新。
* `chunkpopulate` 默认启用。如果启用，Dynmap 会将进入最新生成状态的区块标记为待更新。
* `chunkgenerate` 默认启用。如果启用，Dynmap 会将新生成的区块标记为待更新。
* `none` 默认禁用。如果启用，Dynmap 不会自动更新地图图块。

Spigot 触发器的默认设置为：

``` YAML
render-triggers:
  #- playermove
  #- playerjoin
  - blockplaced
  - blockbreak
  - leavesdecay
  - blockburn
  - chunkgenerated
  - blockformed
  - blockfaded
  - blockspread
  - pistonmoved
  - explosion
  #- blockfromto
  #- blockphysics
  - structuregrow
  - blockgrow
  #- blockredstone
```

Forge 的默认触发器为：

``` YAML
render-triggers:
  - blockupdate
  #- blockupdate-with-id
  #- lightingupdate
  - chunkpopulate
  - chunkgenerate
  #- none
```

## webpage-title

这个设置决定了网页地图在浏览器里显示的标题。默认情况下与 server.properties 内的 `server-name` 同步，但可以在这里用设置手动覆盖。

默认值：

``` YAML
#webpage-title: "My Awesome Server Map"
```

## tilespath

这个设置决定了 Dynmap 存储图块的路径。默认情况下为相对于 Dynmap 插件文件夹的路径，但也可以在需要的情况下上填入绝对路径（使用外部网络服务器时）。非常推荐将这些文件存储在 web 文件夹下。如果启用了 MySQL，则不使用这个设置，如果使用了 SQLite，则它就是 SQLite 数据库的位置。

默认值：

``` YAML
tilespath: web/tiles
```

## webpath

这个设置决定了 Dynmap 存储网页文件的路径。默认情况下为相对于 Dynmap 插件文件夹的路径，但也可以在需要的情况下上填入绝对路径（使用外部网络服务器时）。若设置为服务器所在文件夹之外的位置，则需要分配对应的文件夹读写权限，以便 Dynmap 保存图块、允许网页用户通过网页浏览地图。

默认值：

``` YAML
webpath: web
```

## update-webpath-files

这个设置决定了 Dynmap 是否在更新插件本体后一并刷新网页文件，若使用自定义前端，请禁用这个设置。

默认值：

``` YAML
update-webpath-files: true
```

## exportpath

这个设置决定了 Dynmap 通过 `/dynmapexp` 命令导出的 OBJ zip 压缩包的存储位置。默认情况下为相对于 Dynmap 插件文件夹的路径，也可以填入绝对路径。若设置为服务器所在文件夹之外的位置，则需要分配对应的文件夹读写权限。

默认值：

``` YAML
exportpath: export
```

## webserver-bindaddress

Dynmap 绑定的 IP 地址。通常不需要更改。默认跟随 server.properties 的 `server-ip` 设置。若未设置，则使用 `0.0.0.0`——也就是所有可用的地址。如果网页地图无法正常进入，推荐将其手动设置为 0.0.0.0。
默认值：

``` YAML
#webserver-bindaddress: 0.0.0.0
```

## webserver-port

Dynmap 绑定的 TCP 端口号。大部分服务器提供商都会限制端口号数量，请配合查看购买界面了解你的服务器能使用的端口号。若你正在自托管 Dynmap，需要在此填入转发端口，才可允许外部连接。关于配置网页地图的更多信息，请见“安装”章节。网页地图无法正常打开一般是这个设置导致的，如果需要帮助，请立即前往 Discord 聊天群组详细描述你的问题。

默认值：

``` YAML
webserver-port: 8123
```

## max-sessions

这个设置决定了网页地图承载的访客数量上限。仅对外置网页服务器生效，对于规模较大的服务器可能会有性能影响。到达上限时插件会断开较旧的会话。

默认值：

``` YAML
max-sessions: 30
```

## disable-webserver

这个设置决定了 Dynmap 是否运行内置的网页服务器。只在使用外置网页服务器时关闭，另外还需要用户对自己使用的系统和外置网页服务器了如指掌。禁用这个设置后，应当一并关闭“内置客户端更新”组件，并打开“JSON 文件客户端更新”组件。

默认值：

``` YAML
disable-webserver: false
```

## allow-symlinks

这个设置决定了 Dynmap 内置的网页服务器是否允许使用符号链接（Symbolic Link，类似更高级的“快捷方式”）。一般情况下 Dynmap 不会用到这个，除非你在外部硬盘或者 Dynmap 文件目录之外的地方存储了图块数据。关闭这个设置可提升安全性。

默认值：

``` YAML
allow-symlinks: true
```

## login-enabled

这个设置决定了进入 Dynmap 的网页界面时是否可以登录。如果需要设置网页地图的登录功能，那么必须开启它。

默认值：

``` YAML
login-enabled: false
```

## login-required

这个设置决定了玩家是否需要登录后浏览网页地图。启用这个设置需要一并启用登录功能。玩家可以在游戏里用 `/dynmap webregister` 命令注册账号。

默认值：

``` YAML
login-required: false
```

## timesliceinterval

这个设置决定了在完整渲染图块之后的停顿时间。这个设置会拖慢完整渲染的速度，但可以极大缓解 CPU 的压力。单位为秒。

默认值：

``` YAML
timesliceinterval: 0.0
```

## maxchunkspertick

这个设置决定了 Dynmap 一次载入的区块数量上限。Dynmap 有时需要在渲染时载入区块（尤其是完整渲染期间），这个设置可以缓解性能不佳的服务器出现的卡顿。诸如 Paper 及分支等优化过的服务端可以异步载入区块，因此这个选项的影响微乎其微。不过对于 Spigot/Bukkit 服务端，这可以提升完整渲染期间的性能。单位为每秒区块数。

默认值：

``` YAML
maxchunkspertick: 200
```

## progressloginterval

这个设置决定了 Dynmap 多久发送渲染进度消息。可以适当调高，减少大规模渲染任务时的日志刷屏。必须设置为 100 或更高。单位为图块数量。

默认值：

``` YAML
progressloginterval: 100
```

## parallelrendercnt

这个设置决定了 Dynmap 渲染时使用的线程数量。建议与 tiles-rendered-at-once 的值保持相同。不推荐设置为大于服务器 CPU 核心数量的值。配置没有为这个设置提供默认值，因为 Dynmap 会使用服务器的半数 CPU。修改这个设置会导致完整渲染与范围渲染极大影响服务器性能，但对普通的渲染更新影响甚微。单位为线程数量。

默认值：

``` YAML
#parallelrendercnt: 4
```

## updaterate

这个设置决定了网页端检查更新的频率。包括玩家与地图标记。设置过低的值会导致网页端与服务端卡顿，反之设置过高会导致网页更新过慢，且无实际性能提升。单位为毫秒。

默认值：

``` YAML
updaterate: 2000
```

## fullrenderplayerlimit

这个设置决定了 Dynmap 暂停完整渲染所需的玩家数量。设置为 0 表示不限制。适用于大规模服务器且玩家众多、地图面积大，需要在空闲时间进行完整渲染的服务器。单位为玩家个数。

默认值：

``` YAML
fullrenderplayerlimit: 0
```

## updateplayerlimit

这个设置决定了 Dynmap 暂停更新渲染所需的玩家数量。设置为 0 表示不限制。只推荐性能吃紧的服务器启用，它会导致玩家数量达到阈值时立刻暂停更新。单位为玩家个数。

默认值：

``` YAML
updateplayerlimit: 0
```

## per-tick-time-limit

这个设置决定了是否“智能”利用资源。Dynmap 会尝试尽可能快（或慢）地进行渲染任务，直到服务器刻达到设置的值。单位为毫秒每刻（MSPT）。50 MSPT 为 20 刻每秒（正常情况下）。

默认值：

``` YAML
per-tick-time-limit: 50
```

## update-min-tps

这个设置决定了 Dynmap 会在 TPS 低于阈值时暂停渲染任务。它和下面的两个设置都可以减少 Dynmap 的占用，还可以在服务器性能吃紧时进一步减少 Dynmap 导致的卡顿。填入超过 20 的值会导致 Dynmap 停止渲染。设置得太低会导致 Dynmap 潜在的占用增加。

注意：这些设置不会对服务器上 Dynmap 的性能造成直接影响，它们只是为其设置的限制。

默认值：

``` YAML
update-min-tps: 18.0
```

## fullrender-min-tps

这个设置决定了 Dynmap 会在 TPS 低于阈值时暂停完整渲染任务。

默认值：

``` YAML
fullrender-min-tps: 18.0
```

## zoomout-min-tps

这个设置决定了 Dynmap 会在 TPS 低于阈值时暂停范围渲染任务。

默认值：

``` YAML
zoomout-min-tps: 18.0
```

## showplayerfacesinmenu

这个设置决定了玩家头像是否出现在网页地图侧边栏中。

默认值：

``` YAML
showplayerfacesinmenu: true
```

## grayplayerswhenhidden

这个设置决定了未出现在地图视野内或处于隐身状态的玩家在侧边栏中的名称是否显示为灰色。

默认值：

``` YAML
grayplayerswhenhidden: true
```

## player-sort-permission-nodes

这个设置决定了 Dynmap 是否用权限节点为侧边栏中的玩家进行排序。这会用到配置中设置的权限节点，而不是在你安装的其他权限管理插件中进行。不同的列表整理顺序相同：首先列入的玩家同样会在网页侧边栏中靠前展示。没有权限的玩家会排在侧边栏末尾。

默认值：

``` YAML
player-sort-permission-nodes:
  - bukkit.command.op
```

## sidebaropened

这个设置决定了侧边栏是否永久打开，或者是否允许玩家关闭侧边栏。可填入的值有 `false`、`true` 以及 `pinned`。设置为 false 会在玩家打开网页地图时保持侧边栏关闭，否则会保持开启。设置为 pinned 后，打开时默认展开，且显示关闭按钮。

默认值：

``` YAML
#sidebaropened: true
```

## http-response-headers

仅面向进阶用户，通常不需要设置。以 `ID: 值` 格式添加自定义 HTTP 响应头。设置的内容仅对内置网络服务器有效。

默认值：

``` YAML
#http-response-headers:
#    Access-Control-Allow-Origin: "my-domain.com"
#    X-Custom-Header-Of-Mine: "MyHeaderValue"
```

## trusted-proxies

仅面向进阶用户，通常不需要设置。对 Dynmap 内置网页服务器设置的信任代理列表，用于接受 X-Forward-For（XFF）请求头。一般情况下只在 Dynmap 处于反向代理状态下允许 IP 用户名验证时用到这个功能。

默认值：

``` YAML
trusted-proxies:
  - "127.0.0.1"
  - "0:0:0:0:0:0:0:1"
```

## joinmessage / quitmessage

这个设置决定了发送至网页客户端的玩家加入/退出消息格式。可填入 `%playername%` 作为玩家变量。若设置为空字符串（`""`），则隐藏这些消息。

默认值：

``` YAML
joinmessage: "%playername% joined"
quitmessage: "%playername% quit"
```

## spammessage

这个设置决定了网页端玩家发送消息过快时的提醒。可填入 `%interval%` 显示剩余冷却时间，冷却时间则在“[聊天框客户端](#聊天框)”组件中的 `messagettl` 部分进行设置。设置为空字符串（`""`）则不会提醒玩家等待冷却。

默认值：

``` YAML
spammessage: "You may only chat once every %interval% seconds."
```

## webmsgformat

这个设置决定了网页端发送的消息在游戏中的显示样式。`%playername%` 与 `%message%` 分别对应玩家名称及发送的消息。支持颜色代码，但需要对符号进行转义：在游戏中的 `&4` 需要变成 `&color;4`。如果玩家没有登录网页地图，或链接参数没有指定玩家名称，那么 %playername% 变量会返回发送者的 IP 地址。

默认值：

``` YAML
webmsgformat: "&color;2[WEB] %playername%: &color;f%message%"
```

## showlayercontrol

这个设置决定了网页地图上是否显示图层菜单。允许玩家隐藏或显示玩家标记、地图标记、公会边界（若拓展支持）等。

默认值：

``` YAML
showlayercontrol: true
```

## check-banned-ips

这个设置决定了 Dynmap 是否参考 banned-ips.txt 文件过滤网页客户端的访客。仅对内置网络服务器生效。

默认值：

``` YAML
check-banned-ips: true
```

## defaultzoom

它与后面两项设置共同决定着玩家首次打开网页地图时的默认参数。这个设置决定了首次加入时的地图缩放程度。

默认值：

``` YAML
defaultzoom: 0
```

## defaultworld

这个选项决定了首次加入时地图展示的世界（例如：world、world_nether、world_the_end）。

默认值：

``` YAML
defaultworld: world
```

## defaultmap

这个选项决定了首次加入时地图展示的样式（例如：flat、surface、cave）。

默认值：

``` YAML
defaultmap: flat
```

## followzoom

（若启用）跟随玩家时，地图的缩放程度。

默认值：

``` YAML
#followzoom: 3
```

## followmap

（若启用）跟随玩家时，使用的地图样式。

默认值：

``` YAML
#followmap: surface
```

## persist-ids-by-ip

这个设置会将玩家的游戏内 IP 与网页客户端的 IP 进行匹配，自动关联玩家名称。这个设置需要反向代理的进阶配置才可生效。另外，如果多个玩家使用了同一个 IP，Dynmap 则会选择最近加入的玩家名称与其关联。

默认值：

``` YAML
persist-ids-by-ip: true
```

## cyrillic-support

这个设置决定了是否启用西里尔字母[^2]的支持。

默认值：

``` YAML
cyrillic-support: false
```

## round-coordinates

这个设置决定了是否将坐标值改为其最接近的整数。

默认值：

``` YAML
round-coordinates: true
```

## msg

这些设置决定了玩家看见的消息文本。含义无需额外解释。

默认值：

``` YAML
msg:
    maptypes: "Map Types"
    players: "Players"
    chatrequireslogin: "Chat Requires Login"
    chatnotallowed: "You are not permitted to send chat messages"
    hiddennamejoin: "Player joined"
    hiddennamequit: "Player quit"
```

## url

这些设置仅面向进阶用户，一般安装时无需改动，有关更多信息请浏览“使用 MySQL/SQLite 的外置网页服务器”章节。

默认值：

``` YAML
url:
    #configuration: "up/configuration"
    #update: "up/world/{world}/{timestamp}"
    #sendmessage: "up/sendmessage"
    #login: "up/login"
    #register: "up/register"
    #tiles: "tiles/"
    #markers: "tiles/"
```

## custom-commands

在某个事件触发后跟随执行的自定义命令。有记载的两个命令为 `preupdatecommand` 与 `postupdatecommand`。

注意：会极大影响性能，因为保存图块事件可以在完整渲染期间频繁触发。

默认值：

``` YAML
custom-commands:
    image-updates:
        preupdatecommand: ""
        postupdatecommand: ""
```

## snapshotcachesize

效果不明。开发者原话：“快照缓存大小，单位为区块数量。”

默认值：

``` YAML
snapshotcachesize: 500
```

## soft-ref-cache

效果不明。开发者原话：“快照缓存使用软引用（设置为 true 时），否则使用弱引用（设置为 false）。”

默认值：

``` YAML
soft-ref-cache: true
```

## enterexitperiod

检查玩家移动的时间间隔，用于更新网页地图上的玩家图标位置。单位为毫秒。

默认值：

``` YAML
#enterexitperiod: 1000
```

## titleFadeIn

标题淡入的持续时间。单位为刻（每刻对应 50 毫秒）。

默认值：

``` YAML
#titleFadeIn: 10
```

## titleStay

标题的持续时间。单位为刻（每刻对应 50 毫秒）。

默认值：

``` YAML
#titleStay: 70
```

## titleFadeOut

标题淡出的持续时间。单位为刻（每刻对应 50 毫秒）。

默认值：

``` YAML
#titleFadeOut: 20
```

## enterexitUseTitle

效果不明。开发者原话：“标题界面是否显示进入/退出标题（默认为 true），若为 false 则只显示在聊天栏。”

默认值：

``` YAML
#enterexitUseTitle: true
```

## enterReplaceExits

效果不明。开发者原话：“如果新输入的消息需要先于退出消息处理（而非按顺序排队），则设置为 true，默认为 false。”

默认值：

``` YAML
#enterReplacesExits: true
```

## publicURL

这个设置决定了 `/dynmap url` 命令显示的网站，不设置的情况下不会返回内容。填入的网址应是以 `https://` 开头的完整域名（如 <https://www.baidu.com/>）。

默认值：

``` YAML
#publicURL: http://my.greatserver.com/dynmap
```

## noPermissionMsg

如果玩家无权使用命令，则返回这条信息。

默认值：

``` YAML
noPermissionMsg: "You don't have permission to use this!"
```

## verbose

这个功能会显示判断启动消息，适用于调试世界载入及网页服务器启动问题。开发者可能会要求你打开它获取有关信息，正常情况下开启会导致后台刷屏。

默认值：

``` YAML
verbose: false
```

## debuggers

记录指定 Dynmap 模块的日志信息。开发者可能会要求你打开它获取有关信息，正常情况下开启会导致后台刷屏。

默认值：

``` YAML
#debuggers:
#  - class: org.dynmap.debug.LogDebugger
```

## dump-missing-blocks

这个设置决定了 Dynmap 是否需要忽略缺少渲染数据的方块。适用于遮盖错误方块或模组方块。此功能可能会引发异常现象，请慎重启用。

默认值：

``` YAML
dump-missing-blocks: false
```

## migrate-chunks

这个设置仅适用于 1.13-1.14 版本的 Minecraft。将旧区块更新为新格式，使得 Dynmap 可以在 1.14 的服务器中浏览更旧版本的区块。只应在拥有旧版本（低于 1.14）存档的服务器上使用。此为实验性功能，也是 Dynmap 少有会直接修改世界文件的功能，启用前强烈建议备份。

默认值：

``` YAML
#migrate-chunks: true
```

## hackAttemtBlurb

Log4J 防护：尝试在网页聊天里注入宏时替换的文本信息。

默认值：

``` YAML
hackAttemptBlurb: "(IaM5uchA1337Haxr-Ban Me!)"
```

恭喜！你终于读完了配置文件的解析！

[^1]: 原文如此。下同。

[^2]: 即用到了西里尔字母的语言，例如俄语、乌克兰语等。在无支持的情况下，这些字母会像中文一样显示为全角，启用支持后可恢复到类似普通英语的正常间隔。