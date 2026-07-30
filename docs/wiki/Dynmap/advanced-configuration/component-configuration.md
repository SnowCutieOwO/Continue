# 组件设置

Dynmap 是通过一系列组件加载的。组件无法全部开启，不过有些组件必须启用。下文将会讲解定义组件的细节及属性。

## 核心客户端组件

如下组件定义了 Dynmap 服务器的客户端接口核心。若需要使用客户端，则需要启用客户端配置组件，以及至少一个客户端更新组件。

### 客户端配置组件

这个组件的设置如下：

``` YAML
  - class: org.dynmap.ClientConfigurationComponent
```

这是必选组件，且无设置可调整。

### 内部客户端更新组件

这个组件决定了网页客户端经过 Dynmap 内置网页服务器的初级接口（因此需要启用这个组件才可正常使用）。它决定了客户顿要在 <http://地址:端口/up/> 链接下生效，包含获取配置数据、获取地图更新、玩家状态及聊天消息第二个功能。这个组件的设置如下：

``` YAML
  - class: org.dynmap.InternalClientUpdateComponent
    sendhealth: true
    sendposition: true
    allowwebchat: true
    webchat-interval: 5
    hidewebchatip: false
    trustclientname: false
    use-player-login-ip: true
    require-player-login-ip: false
    block-banned-player-chat: true
    webchat-requires-login: false
    webchat-permissions: false
    includehiddenplayers: false
    hideifshadow: 15
    hideifundercover: 15
    hideifsneaking: false
    protected-player-info: false
```

这些设置详细解释如下：

* `sendhealth`：决定了玩家生命值是否发送到网页客户端。若禁用，其他使用了玩家生命值的组件将无法获得必要数据，但可以防止玩家通过网页地图查看其他玩家的生命值。启用后，生命值信息仍可以通过对应世界的 `sendhealth` 属性隐藏。
* `sendposition`：决定了玩家位置信息是否发送到网页客户端。若禁用，其他使用了玩家位置信息的组件将无法获得必要数据，但可以防止玩家通过网页地图查看其他玩家的位置。启用后，位置信息仍可以通过对应世界的 `sendposition` 属性隐藏。
* `allowwebchat`：这个设置决定了网页客户端是否可以向服务器发送聊天消息。若为 `false`，那么客户端将不会在网页端发送消息。
* `webchat-interval`：决定了网页聊天消息的发送冷却，单位为秒。
* `hidewebchatip`：若开启，玩家发送到服务器的聊天消息将以通用名称开头，而非 IP。
* `trustclientname`：若开启，将网页客户端反馈的域名/IP（可伪造）解析为发送者的位置（否则使用网页服务器解析到的地址）
* `use-player-login-ip`：若开启，网页聊天消息发送者会显示为同一 IP 下的在线玩家名称。默认为 true（0.29 版本后新增）。
* `require-player-login-ip`：若 `use-player-login-ip` 开启，开启后忽略不属于任何玩家的 IP 发送的消息。默认为 false（0.29 版本后新增）。
* `block-banned-player-chat`：若 `use-player-login-ip` 开启，开启后忽略属于被封禁玩家的 IP 发送的消息。默认为 true（0.29 版本后新增）。注意：与独立管理封禁列表的插件不兼容（目前 CommandBook 确认不兼容）。
* `webchat-requires-login`：若 `login-enabled` 开启，开启后只允许成功登入网页地图界面的玩家发送消息。
* `webchat-permissions`：若存在且开启，网页聊天需认证玩家（通过登录或与 IP 配对）持有 `dynmap.webchat` 权限后才可使用。需要支持检查离线玩家权限的权限管理插件——目前有 PermissionEx、LuckPerms——才能让没在服务器的玩家使用网页地图。
* `includehiddenplayers`：若开启，隐藏状态的玩家（通过 `/dynmap hide` 命令）将会在网页界面中显示在线，但隐藏位置、生命值及发送的消息。这些玩家仍会显示在玩家列表中。
* `hideifshadow`：若设置为小于 15 的值，玩家的生命值与位置信息都会在给定光照值的区域下隐藏（0 = 完全黑暗，4 = 夜间自然光照，15 = 白天自然光照）。
* `hideifundercover`：若设置为小于 15 的值，玩家的生命值与位置信息都会在有遮盖的区域下隐藏。出于 Bukkit 的限制（见开发组发起的 issue），任意方块都会阻挡玩家视线（更新后则会变为取决于当前位置的光照等级——对应白天状态下所在位置的黑暗程度）。
* `hideifsneaking`：若开启，潜行状态的玩家会在地图上隐藏。
* `protected-player-info`：若开启，玩家的生命值及位置信息会受到保护。没有 `dynmap.playermarkers.seeall` 权限的玩家（管理员默认持有）只能看见自己的标记，否则可以看到所有玩家的位置。未提供或设置为 false 时，所有网页地图用户均可看到玩家生命值与位置信息。

### JSON 文件客户端更新组件

如果不使用内置的网页服务器，那么在 Dynmap 与网页客户端之间传递消息就需要通过外置网页服务器递送文件实现。这可以通过 JSON（JavaSctip Object Notation）做到，这种操作模式一般称为“JSON 文件模式”。这个模式允许禁用内置网页服务器，可以代替内部网页更新组件（只能二选一开启）。这个组件的设置如下：

``` YAML
  - class: org.dynmap.JsonFileClientUpdateComponent
    writeinterval: 1
    sendhealth: true
    sendposition: true
    allowwebchat: false
    webchat-interval: 5
    hidewebchatip: false
    trustclientname: false
    use-player-login-ip: true
    require-player-login-ip: false
    block-banned-player-chat: true
    webchat-requires-login: false
    webchat-permissions: false
    includehiddenplayers: false
    hideifshadow: 15
    hideifundercover: 15
    hideifsneaking: false
    protected-player-info: false
```

这些设置属性与内部网页更新组件大致类似。额外的设置如下：

* `writeinterval`：单位为秒，用于需向 webpath/独立文件夹写入更新配置与地图图块更新的组件。这些文件由网页客户端通过外置网页服务器接收，地图更新通知、玩家位置、生命值数据与聊天栏信息也由此传递。

## 标记组件

在 0.22 版本添加，提供了地图标记的内置支持，可通过 `/dmarker` 命令或供其他插件使用的 API 添加。这个组件的设置如下：

``` YAML
  - class: org.dynmap.MarkersComponent
    type: markers
    showlabel: false
    enablesigns: false
    showspawn: false
    spawnicon: world
    spawnlabel: "Spawn"
    showofflineplayers: false
    offlinelabel: "Offline"
    offlineicon: offlineuser
    offlinehidebydefault: true
    offlineminzoom: 0
    maxofflinetime: 30
    showspawnbeds: false
    spawnbedlabel: "Spawn Beds"
    spawnbedicon: "bed"
    spawnbedhidebydefault: true
    spawnbedminzoom: 0
    spawnbedformat: "%name%'s bed"
```

这个组件的设置解析如下：

* `showlabel`：若存在且开启，会使得地图标记标签保持显示，否则只会在指针移动其上时显示。
* `enablesigns`：若存在且开启，玩家可以用告示牌设置地图标记。启用后，拥有 `dynmap.marker.set` 权限的玩家可通过放置第一行填入 `[dynmap]` 的告示牌在地图上设置标记。其他文本会变成标记的标签，而 `icon:` 开头的内容可以设置代替默认的图标，`set:` 则可以决定标记所处的标记点组。完成后，`[dynmap]` 以及其他两个设置的文本都会消失，只留下用作标签的信息和其他内容。破坏告示牌等于删除对应标记点。
* `showspawn`：若存在且开启，出生点会带标记（默认为“world”样式）与对应标签（默认为“Spawn”）。
* `spawnicon`：若设置，可决定出生点标记点的图标（仅在 `showspawn` 开启时有效），默认为“world”。
* `spawnlabel`：若设置，可决定出生点标记点的标签（仅在 `showspawn` 开启时有效），默认为“Spawn”。
* `showofflineplayers`：若存在且开启，离线玩家会在地图上显示位置（标记点会被标记为玩家登出）。
* `offlinelabel`：离线玩家标记点标签——默认为“Offline”。
* `offlineicon`：离线玩家标记点图标——默认为“offlineuser”。
* `offlinehidebydefault`：若存在且开启，离线玩家标记点默认隐藏。默认为 `true`。
* `offlineminzoom`：若设置为任意非零值，则指定地图上显示离线玩家标记点所需的最小缩放倍率。
* `maxofflinetime`：若设置为任意非零值，则指定离线位置标记点存在的最长时间（小于零表示永不消失）。所有离线玩家的位置在服务器重启后消失，无视该设置限制。
* `showspawnbeds`：若存在且开启，则显示在线玩家设置为重生点床的位置（下线后消失）。
* `spawnbedlabel`：重生点床标记点的标签。默认为“Spawn Beds”。
* `spawnbedicon`：重生点床标记点的图标。默认为“bed”。
* `spawnbedhidebydefault`：若开启，床重生点图标默认隐藏。
* `spawnbedminzoom`：若设置为非零值，则指定地图上显示床重生点标记所需的最小缩放倍率。

## 服务端侧聊天组件

这些组件决定了服务器侧的聊天实现方式，包括从服务端到客户端发送聊天消息，以及发往服务端的聊天消息如何呈现给服务器上的玩家。这些组件只能多选一开启。

### 简单聊天组件

这个组件实现了访问标准 Bukkit/Minecraft 聊天频道。启用后，所有聊天消息都会与网页客户端分享，且所有来自网页客户端的消息都会发送给服务器上的所有玩家（与其他网页客户端）。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.SimpleWebChatComponent
    allowchat: true
```

这个组件的设置解析如下：

* `allowchat`：若启用，这个设置决定了服务器上的聊天消息是否回传给网页客户端。若关闭，则不会发送。

### HeroChat 聊天组件（弃用——不兼容 HeroChat 5）

HeroChat 插件实现了聊天频道以及其他需要特殊设置的功能。这个组件与 HeroChat 联动，允许指定频道的聊天消息转发到网页客户端，也允许网页客户端的消息进入指定频道。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.herochat.HeroWebChatComponent
    herochatwebchannel: Global
    herochatchannels:
      - Global
```

这个组件的设置解析如下：

* `herochatwebchannel`：对应 HeroChat 聊天频道的名称，用于接收来自网页客户端的消息。默认值为“Global”。
* `herochatchannels`：检测聊天消息的 HeroChat 频道名称，用于与网页客户端分享。可填入任意数量的频道。默认包含“Global”聊天频道。

### 客户端侧聊天组件

这些组件决定了发送与接收聊天消息的网页客户端组件的行为及可用性。取决于对应服务端侧的组件是否启用，以及是否允许上述的功能。它们可单独启用，也可组合使用。

#### 客户端聊天组件

这个组件启用了聊天消息的输入框，允许网页端输入并向服务器发送聊天消息。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: chat
    allowurlname: false
```

这个组件的设置解析如下：

* `allowurlname`：若开启（且对应 ClientUpdateComponent 下的 `trustclientname` 开启），那么网页控制台的用户可通过 `chatname` URL 参数指定聊天栏名称。

### 聊天气泡客户端组件

这个组件实现了聊天气泡，在地图上显示在玩家头像上显示他们发送的消息。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: chatballoon
    focuschatballoons: false
```

这个组件的设置解析如下：

* `focuschatballoons`：若启用，在聊天消息不可见时，立即移动到聊天消息所在位置。

需要注意的是，聊天气泡显示依赖于玩家的位置信息，因此如果当前世界或客户端更新组件中的 `sendposition` 设置被禁用，那么聊天气泡将无法显示。

### 聊天框客户端组件

这个组件实现了浏览服务器内玩家消息及其他网页客户端消息的聊天框。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: chatbox
    showplayerfaces: true
    messagettl: 5
    scrollback: 100
    sendbutton: false
```

这个组件的设置解析如下：

* `showplayerfaces`：若启用，玩家发送的聊天消息会带上皮肤头像。
* `messagettl`：决定聊天消息的持续显示时间。若设置了 `scrollback` 选项，则忽略此设置。
* `scrollback`：若启用，决定聊天栏中保留的消息条数。设置后，消息将不再淡出（即忽略 `messagettl` 设置），而是保留在屏幕上，直到被其他消息顶出显示范围。
* `sendbutton`：若存在且开启，则在网页界面上显示发送按钮。

## 地图控制组件

这些设置决定了诸如玩家标记、世界时钟、图标等地图组件相关内容。这里的组件可随意开关。

### 玩家标记组件

这个组件用于在地图上显示玩家的位置及名称。玩家的位置只在可用时显示（见上述 `sendposition` 设置）。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: playermarkers
    showplayerfaces: true
    showplayerhealth: true
    showplayerbody: false
    smallplayerfaces: false
    hidebydefault: false
    layerprio: 0
    label: "Players"
```

这个组件的设置解析如下：

* `showplayerfaces`：若启用，载入并显示玩家的自定义皮肤（若有），并将其头部用作头像。否则只显示一般图标。
* `showplayerhealth`：若启用，载入玩家的生命值与护甲值，并显示在名称下方。需要玩家的生命值相关信息可悲读取（见上述 `sendhealth` 项）。
* `smallplayerfaces`：若启用，（假设你已经开启了 `showplayerfaces` 设置）则玩家头像会显示为正常大小的一般（等同于当 `showplayerfaces` 关闭时使用的一般图标大小）。
* `showplayerbody`：若启用，在地图上显示玩家的完整身体。仅在 `showplayerfaces` 开启且 `smallplayerfaces` 关闭时有效。
* `hidebydefault`：可选参数，若存在且开启，则将玩家标记设置为默认隐藏状态。若网页界面有图层控制面板，那么玩家仍可手动开启。
* `layerprio`：可选参数，决定当前图层在图层控制面板的优先级，这里的层级会按 `layerprio` 的值从低到高排列（若这个值相同，则按 a-z 字母顺序排列）。默认为 0。
* `label`：可选参数，在图层集中显示当前图层的名称。默认为“Players”。

### 数字时钟组件

用于在网页地图上显示简单的数字时钟，对应当前世界的时间。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: digitalclock
```

一次只能启用一个时钟组件。

### 每日时间时钟组件

这是一个更加精细的时钟组件，会通过太阳与月亮图标的切换显示白天与黑夜。这个组件有着如下设置：

``` YAML
  - class: org.dynmap.ClientComponent
    type: timeofdayclock
    showdigitalclock: true
    showweather: true
```

这个组件的设置解析如下：

* `showdigitalclock`：若启用，则（与日月表一并）显示数字时钟。
* `showweather`：若启用，则一并显示天气图标（降雨、雷暴）。

### 坐标组件

这个组件用于显示鼠标指针对应的位置。这个组件有着如下设置：

``` YAML
   - class: org.dynmap.ClientComponent
     type: coord
     label: "Location"
     hidey: false
     show-mcr: false
```

这个组件的设置解析如下：

* `label`：决定显示位置的内容。默认为“x,y,z（只显示坐标位置）”。
* `hidey`：若存在且开启，则隐藏 Y 轴位置，只显示 XZ 轴位置。
* `show-mcr`：若存在且开启，显示所指区域的 Minecraft 区块文件 ID。

### 图标组件

这个组件可以在地图上显示一个图标。这个组件有着如下设置：

``` YAML
   - class: org.dynmap.ClientComponent
     type: logo
     text: "Dynmap"
     linkurl: "http://forums.bukkit.org/threads/dynmap.489/"
```

这个组件的设置解析如下：

* `text`：图标下方显示的文本内容。
* `linkurl`：文本内容绑定的链接。

### 链接组件

这个组件提供了“指向”网页地图界面的链接。点击后会复制打开当前状态地图的所有设置，包括但不限于所处世界、地图类型、缩放等级及所处坐标——允许以链接的形式标记、分享给其他用户。这个组件有着如下设置：

``` YAML
   - class: org.dynmap.ClientComponent
     type: link
```

这个组件目前没有设置可使用。