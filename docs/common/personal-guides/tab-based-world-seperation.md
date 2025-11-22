# 基于 TAB Reborn 实现按世界分列的玩家列表

有些时候，你可能看到某个服务器使用了一些如下图的 TAB 排版，可以让不同世界的玩家占据一列显示在 TAB 里：

![](_images/tab-list-showcase.png)

这个效果其实可以通过 TAB 自带的[玩家分组](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Layout#player-groups)设置实现。

## 1. 启用排版

按如下高亮部分所示，将 `layout.enabled` 修改为 `true`：

``` YAML title="plugins/TAB/config.yml" {3}
# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Layout
layout:
  enabled: true
  direction: COLUMNS
  default-skin: mineskin:383747683
  enable-remaining-players-text: true
  remaining-players-text: '... 及 %s 名玩家'
  empty-slot-ping-value: 1000
  layouts:
    default:
      ...
```

这样就成功启用了排版模式，现在，你的 TAB 界面应该会有一大堆空白名称的玩家将列表“撑”了起来。

![](_images/tab-list-original.png "启用后的 TAB 排版内容")

## 2. 修改排版

按如下高亮部分所示，将 `layouts.default.fixed-slots` 下的内容修改为分世界列表：

``` YAML title="plugins/TAB/config.yml" {6-9}
layout:
  ...
  layouts:
    default:
      fixed-slots:
        - '1|主城' # 可将其改为你想要的世界名称，不影响玩家所处位置，如下同理
        - '21|生存世界'
        - '41|资源世界'
        - '61|末地世界'
      groups:
        world1group:
        ...
```

其中，数字为其所处位置，后面则是显示的内容。

![](_images/tab-list.png "修改后的 TAB 排版内容")

## 3. 设置分组

要想让玩家能够在这些列表里显示，首先需要为每列定义一个组。

按如下高亮部分所示，在 `layout.layouts.default.groups` 下加入玩家分组设置。

``` YAML title="plugins/TAB/config.yml" {7-23}
layout:
  ...
  layouts:
    default:
      ...
      groups:
        world1group:
          condition: "%world%=world1" # 把 "world1" 改为你想要的世界名称，即可让对应玩家出现在第一列，如下同理
          slots:
            - 2-20
        world2group:
          condition: "%world%=world2"
          slots:
            - 22-40
        world3group:
          condition: "%world%=world3"
          slots:
            - 42-60
        world4group:
          condition: "%world%=world4"
          slots:
            - 62-80
```

* 其中，`world1group` 到 `world4group` 是组别名称，可自定义；
* `condition` 是决定了玩家被分入这组的条件，可以填入 TAB 自带的[变量判断](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Conditional-placeholders#text-operations)；
  * 在本章节教程中，我们填入的是 `%world%=世界名称`，这是一个用于判断玩家所处世界的表达式。
  * `世界名称` 可填入任何有效的世界名称。
* `slots` 则决定了被分入这些组的玩家在列表中的位置，位置与数字对应的图表见下。

![](_images/tab-list-orders.png)

需要注意的是，TAB 能且仅能最多显示 80 名玩家，超出的数量会以 `... (数量) 位更多玩家` 显示在对应列表的末端。

## 4. 大功告成！

在设置了分组条件以后，处于对应世界的玩家就可以出现在对应的列表上。

::: details 本节内容所述完整配置文件

可直接复制覆盖 `config.yml` 文件，并在此基础上进行修改。

非常欢迎你在使用本配置后向其他用户推荐本维基！ :)

``` YAML title="plugins/TAB/config.yml"
# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Header-&-Footer
header-footer:
  enabled: true
  header:
    - ""
    - "&f&l请将服务器的自定义标题放置于此"
    - "&7这个文件位于 &nplugins/TAB/config.yml&7 的 &nheader&7 部分！"
    - ""
  footer:
    - "&7这些文字可以在上述位置的 &nfooter&7 部分修改！"
  disable-condition: '%world%=disabledworld'
  per-world:
    world1:
      header:
        - "an example of world with custom"
      footer:
        - "header/footer and prefix/suffix"
    world2;world3:
      header:
        - "This is a shared header for"
        - "world2 and world3"
  per-server:
    server1:
      header:
        - "an example of server with custom header"

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Tablist-name-formatting
tablist-name-formatting:
  enabled: true
  disable-condition: '%world%=disabledworld'

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Nametags
scoreboard-teams:
  enabled: true
  enable-collision: true
  invisible-nametags: false
  # https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Sorting-players-in-tablist
  sorting-types:
    - "GROUPS:owner,admin,mod,helper,builder,vip,default"
    - "PLACEHOLDER_A_TO_Z:%player%"
  case-sensitive-sorting: true
  can-see-friendly-invisibles: false
  disable-condition: '%world%=disabledworld'

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Playerlist-Objective
playerlist-objective:
  enabled: false
  value: "%ping%"
  fancy-value: "&7Ping: %ping%"
  title: "TAB" # Only visible on Bedrock Edition
  render-type: INTEGER
  disable-condition: '%world%=disabledworld'

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname
belowname-objective:
  enabled: false
  value: "%health%"
  title: "&cHealth"
  fancy-value: "&c%health%"
  fancy-value-default: "NPC"
  disable-condition: '%world%=disabledworld'

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Spectator-fix
prevent-spectator-effect:
  enabled: false

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Bossbar
bossbar:
  enabled: false
  toggle-command: /bossbar
  remember-toggle-choice: false
  hidden-by-default: false
  bars:
    ServerInfo:
      style: "PROGRESS" # for 1.9+: PROGRESS, NOTCHED_6, NOTCHED_10, NOTCHED_12, NOTCHED_20
      color: "%animation:barcolors%" # for 1.9+: BLUE, GREEN, PINK, PURPLE, RED, WHITE, YELLOW
      progress: "100" # in %
      text: "&fWebsite: &bwww.domain.com"

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Scoreboard
scoreboard:
  enabled: true
  toggle-command: /sb
  remember-toggle-choice: false
  hidden-by-default: false
  use-numbers: true
  static-number: 0
  delay-on-join-milliseconds: 0
  scoreboards:
    scoreboard:
      title: "<#E0B11E>服务器名称</#FF0000>"
      lines:
        - "       &f服务器群 123456789"
        - ""
        - " &f&l∥ &e当前信息："
        - ""
        - "   &6玩家名称：&f%player_name%"
        - "   &6当前在线：&f%server_online%"
        - "   &6当前延迟：&f%player_ping%ms"
        - ""
        - " &f&l∥ &e当前活动："
        - ""
        - "   &6当前还没有活动正在进行喔~"
        - ""

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Layout
layout:
  enabled: true
  direction: COLUMNS
  default-skin: mineskin:383747683
  enable-remaining-players-text: true
  remaining-players-text: '... 及 %s 名玩家'
  empty-slot-ping-value: 1000
  layouts:
    default:
      fixed-slots:
        - '1|世界1' # 把 "世界1" 改为你想要的世界名称，不影响玩家所处位置，如下同理
        - '21|世界2'
        - '41|世界3'
        - '61|世界4'
      groups:
        world1group:
          condition: "%world%=world1" # 把 "world1" 改为你想要的世界名称，即可让对应玩家出现在第一列，如下同理
          slots:
            - 2-20
        world2group:
          condition: "%world%=world2"
          slots:
            - 22-40
        world3group:
          condition: "%world%=world3"
          slots:
            - 42-60
        world4group:
          condition: "%world%=world4"
          slots:
            - 62-80

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Ping-Spoof
ping-spoof:
  enabled: false
  value: 0

placeholders:
  date-format: "dd.MM.yyyy"
  time-format: "[HH:mm:ss / h:mm a]"
  time-offset: 0
  register-tab-expansion: false

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Placeholder-output-replacements
placeholder-output-replacements:
  "%essentials_vanished%":
    "yes": "&7| Vanished"
    "no": ""

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Conditional-placeholders
conditions:
  nick: # use it with %condition:nick%
    conditions:
      - "%player%=%essentials_nickname%"
    yes: "%player%"
    no: "~%essentials_nickname%"

placeholder-refresh-intervals:
  default-refresh-interval: 500
  "%server_uptime%": 1000
  "%server_tps_1_colored%": 1000
  "%server_unique_joins%": 5000
  "%player_health%": 200
  "%player_ping%": 1000
  "%vault_prefix%": 1000
  "%rel_factionsuuid_relation_color%": 1000

# assigning groups by permission nodes instead of taking them from permission plugin
assign-groups-by-permissions: false

# if the option above is true, all groups are taken based on permissions and the one higher in this list is used as primary
# Warning! This is not sorting list and has nothing to do with sorting players in tablist!
primary-group-finding-list:
  - Owner
  - Admin
  - Mod
  - Helper
  - default

# Refresh interval (in milliseconds) of:
# - Permission checks in conditions / sorting
# - Group retrieving from permission plugin for sorting / per-group properties
# - Prefix/suffix placeholders taking data from permission plugin
permission-refresh-interval: 1000

# Unlocks extra console messages
debug: false

# https://github.com/NEZNAMY/TAB/wiki/MySQL
mysql:
  enabled: false
  host: 127.0.0.1
  port: 3306
  database: tab
  username: user
  password: password
  useSSL: true

proxy-support:
  enabled: true
  # Supported types: PLUGIN, REDIS, RABBITMQ
  type: PLUGIN
  plugin:
    # Compatible plugins: RedisBungee
    # If enabled and compatible plugin is found, hook is enabled to work with proxied players
    name: RedisBungee
  redis:
    url: 'redis://:password@localhost:6379/0'
  rabbitmq:
    exchange: 'plugin'
    url: 'amqp://guest:guest@localhost:5672/%2F'

########################################################################
# BUKKIT ONLY - THE FOLLOWING SECTION IS ONLY FOR BACKEND INSTALLATION #
########################################################################

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Per-world-playerlist
per-world-playerlist:
  enabled: false
  # players with tab.staff will always see all players
  allow-bypass-permission: false
  # players in these worlds will always see all players
  ignore-effect-in-worlds:
    - ignoredworld
    - build
  shared-playerlist-world-groups:
    lobby:
      - lobby1
      - lobby2
    minigames:
      - paintball
      - bedwars

compensate-for-packetevents-bug: false

#####################################################################
# PROXY ONLY - THE FOLLOWING SECTION IS ONLY FOR PROXY INSTALLATION #
#####################################################################

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Global-playerlist
global-playerlist:
  enabled: false
  display-others-as-spectators: false
  display-vanished-players-as-spectators: true
  isolate-unlisted-servers: false
  update-latency: false
  spy-servers:
    - spyserver1
    - spyserver2
  server-groups:
    lobbies:
      - lobby1
      - lobby2
    group2:
      - server1
      - server2

# Take permissions and groups from backend server instead of proxy
use-bukkit-permissions-manager: false

# Sometimes server might be using offline uuids in tablist instead of online, such as disabling waterfall's tablist rewrite option
# If you experience tablist formatting not working, toggle this option (set it to opposite value)
# Only affects proxies with online mode enabled
use-online-uuid-in-tablist: true
```