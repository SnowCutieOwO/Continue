# BungeeCord
```YAML
#  █████▒▄▄▄       ██▓     ██▓     ▄▄▄▄    ▄▄▄       ▄████▄   ██ ▄█▀     ██████ ▓█████  ██▀███   ██▒   █▓▓█████  ██▀███
#▓██   ▒▒████▄    ▓██▒    ▓██▒    ▓█████▄ ▒████▄    ▒██▀ ▀█   ██▄█▒    ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
#▒████ ░▒██  ▀█▄  ▒██░    ▒██░    ▒██▒ ▄██▒██  ▀█▄  ▒▓█    ▄ ▓███▄░    ░ ▓██▄   ▒███   ▓██ ░▄█ ▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
#░▓█▒  ░░██▄▄▄▄██ ▒██░    ▒██░    ▒██░█▀  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄      ▒   ██▒▒▓█  ▄ ▒██▀▀█▄    ▒██ █░░▒▓█  ▄ ▒██▀▀█▄
#░▒█░    ▓█   ▓██▒░██████▒░██████▒░▓█  ▀█▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄   ▒██████▒▒░▒████▒░██▓ ▒██▒   ▒▀█░  ░▒████▒░██▓ ▒██▒
# ▒ ░    ▒▒   ▓▒█░░ ▒░▓  ░░ ▒░▓  ░░▒▓███▀▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒   ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░   ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
# ░       ▒   ▒▒ ░░ ░ ▒  ░░ ░ ▒  ░▒░▒   ░   ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░   ░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░   ░ ░░   ░ ░  ░  ░▒ ░ ▒░
# ░ ░     ░   ▒     ░ ░     ░ ░    ░    ░   ░   ▒   ░        ░ ░░ ░    ░  ░  ░     ░     ░░   ░      ░░     ░     ░░   ░
#             ░  ░    ░  ░    ░  ░ ░            ░  ░░ ░      ░  ░            ░     ░  ░   ░           ░     ░  ░   ░
#                                       ░           ░                                                ░
# 插件作者 CandiesJar | Github: github.com/sasi2006166 | Discord: https://discord.gg/dJ8DG2cSzt | Telegram: @CandiesJar
# BungeeCord 配置文件

# 警告: 在 Discord 聊天群组上报告任何错误之前, 请仔细阅读这些注释!
# 有些正在开发测试的选项默认是禁用/缺失的，不要向我们汇报这些功能的有关问题.
# 感谢理解.

settings:

  # 调试模式, 适合调试bug.
  # 重要: 可能会导致服务器后台刷屏, 建议只在提交BUG时使用该模式.
  # 默认禁用.
  debug: false

  # 仅拥有管理员权限的玩家才可以在 /fs 命令上使用 tab 补全.
  command_tab_complete: true

  # 选择是否要为大厅添加不同的 Ping 方法。
  # 默认(DEFAULT): 普通的踢出方法, 在服务器重启后, 插件会重新将提出玩家分配至大厅子服.
  # 套接(SOCKET): 该模式将会通过 socket 检查服务器是否在线.
  # 警告: 除非碰到问题, 否则不应改动.
  # 重要2: 套接模式在大厅满时不会检查!
  ping_mode: DEFAULT

  # 间隔 X 秒检查一次大厅服状态, 在此设置.
  # 在首次启动/重启时, 在启用功能时等待 X 秒 (再次设置).
  # 推荐值请设置在 10, 对那些不太稳定的 Spigot 核心更是如此.
  ping_delay: 8

  # 是否启用更新检查.
  updater: true

  # 这里是所有参与玩家重连与均分的大厅子服.
  fallback:
    bedwars:
      servers:
        - bwgame1
        - bwgame2
        - bwgame3
      lobbies:
        - bwlobby1
        - bwlobby2
        - bwlobby3
      mode: FALLBACK
    survival:
      servers:
        - survival
      lobbies:
        - lobby1
        - lobby2
        - lobby3
      mode: RECONNECT
    default: # 请勿删除该默认分组.
      servers:
        - lobby1
        - lobby2
        - lobby3
      mode: DEFAULT

  # 在检测到下列原因时禁用玩家踢出.
  # 示例: 玩家(仅)被 spigot 实例通过 Essentials 封禁
  # FallbackServer 将会断开他的连接而非踢出.
  ignored_reasons:
    - "ban"
    - "flying"
    - "whitelist"
    - "packets"
    - "full"
    - "afk"
    - "maintenance"

  # 这些值决定了在对应情况下是否 (在成功重连至其他服务器时) 清除聊天栏.
  # reconnect_join 会在玩家重连阶段开始时清空玩家的聊天栏.
  clear_chat:
    fallback: true
    server_switch: false
    reconnect: false
    reconnect_join: true

  # 默认为 false 以防止首次加入出现问题.
  # True: 插件自动检测大厅平衡玩家数量.
  # 警告: 如果你不设置平衡组与其下的内容, 加入功能将会完全停止工作.
  # 警告 2: 在不正确配置插件的情况下作者不会提供任何支持.
  join_balancing: false

  # 若 join_balancing 为 true,你可以在这里选择平衡玩家组.
  # 你可以在 "fallback" 部分找到相应配置.
  join_balancing_group: "default"

  # 重连部分配置.
  # 可在这里自定义诸如延时和标题模式等设置, 所有时间设定单位均为秒.
  # 需要注意的是你的组必须设定为 RECONNECT 模式
  auto_reconnect:
    # 将玩家移动至大厅子服或断开连接前的尝试次数.
    max_tries: 8

    # 重连阶段 ping 服务器的时间.
    # 设置为小于 1 的时间将导致该功能不能正常工作.
    # 推荐设置在 10 左右.
    ping_delay: 10

    # 该选项用于 ping 拓展, 用于检查服务器是否完全开启.
    # 警告: 除非遇到问题, 否则不应改动.
    # 警告 2: 同样需要在附属中修改相应的值.
    player_count_check: -1

    # 该选项可在玩家重连时将玩家传送至不同的服务器.
    # 警告: 需要安装 spigot 拓展并预先配置.
    physical_reconnect:
      enabled: false
      server: "reconnectsv"

    # 该选项将会触发普通的 FallbackServer 踢出方法.
    # 按大厅将不同玩家排序.
    player_sort: true

    # 将玩家连接至服务器之前的延时, 可有效防止子服过载.
    # 单位为秒.
    connection_delay: 7

    # 使用 ping 方法检查玩家是否在线的超时时间.
    # 单位为毫秒.
    ping_threshold: 2000

    # 决定在开始重连前的延时, 用于防止后端在服务器关闭时向插件发送请求 (如 /restart 命令重启时) 导致的问题.
    task_delay: 10

    # 在玩家重连进入挂机服时是否清空 tab 列表.
    # 可防止名称相关的视觉 bug 出现, 尤其是在重连后.
    clear_tab-list: true

    # 拒绝重连的理由.
    # 如果玩家是以下列理由断开连接的, 则不允许玩家自动重连.
    ignored_reasons:
      - "ban"
      - "flying"
      - "kick"
      - "afk"
      - "outdated"
      - "whitelist"
      - "connected"
      - "full"
      - "spam"
      - "packets"
      - "maintenance"

    # 无视自动重连的服务器.
    # 若玩家在这些子服中被踢出, 则他们会返回大厅子服而不是重连.
    # 可将事件服务器如小游戏子服等添加至此.
    ignored_servers:
      - lobby1
      - lobby2
      - lobby3

    # 显示的标题可在 messages.yml 下自定义.
    # 默认禁用.
    title:
      enable: true
      # NORMAL (默认): 显示末尾带三个点的动态标题 (. -> .. -> ...)
      # PULSE (搏动): 仿心跳式的浮动文本标题.
      # STATIC (静态): 不显示任何动态内容.
      # 可在 messages.yml 中自定义
      mode: NORMAL
  
  # 是否启用数据统计功能 -> https://bstats.org/plugin/bungeecord/FallbackServer/11817
  # 默认情况下为 "true", 这可以帮助我改进插件.
  # 你也可以将其禁用, 尊重你的选择.
  telemetry: true

  # 管理员将会收到服务器关闭消息, 以及关闭原因.
  # 默认禁用.
  admin_notification: true

  # 启用内置的命令阻止功能.
  # 在指定服务器上禁用某个命令, 在某些情况下如进行屏幕分享时很有用.
  command_blocker: true

  # 警告: 只会在 "command_blocker" 为 true 有用.
  # 在此添加你需要在指定服务器中禁用的命令.
  # 模板:
  # command_blocker_list:
  #   server_name:
  #     - command1
  #     - command2
  command_blocker_list:
    hack_control:
      - lobby
      - hub
    hack_control_2:
      - lobby
      - hub

  # 是否使用 /lobby 命令.
  lobby_command: true

  # 警告: 仅在 "lobby_command" 设置为 true 时有效.
  # /lobby 的等价命令，也可以将自带的 /hub 命令移除.
  lobby_command_aliases:
    - hub
    - lobby

  # 是否启用服务器黑名单, 如果存在验证服务器的话就需要启用本功能.
  ignored_servers: true

  # 警告: 仅在 "server_blacklist" 设置为 true 时有效.
  # 在这里加入你的想要禁用的大厅子服.
  # 这些子服内将不会将玩家踢出, 玩家会自动断线.
  ignored_servers_list:
    - prelobby1

sub_commands:

  # Enabled: true 表示会启用对应的命令.
  # Permission: 权限节点 表示使用该命令所需的权限节点.

  admin:
    permission: "fallback.admin"

  reload:
    permission: "fallback.admin.reload"

  debug:
    permission: "fallback.admin.debug"

  add:
    enabled: true
    permission: "fallback.admin.add"

  remove:
    enabled: true
    permission: "fallback.admin.remove"

  status:
    enabled: true
    permission: "fallback.admin.status"

  servers:
    enabled: true
    permission: "fallback.admin.servers"
```

# Velocity
```YAML
#  █████▒▄▄▄       ██▓     ██▓     ▄▄▄▄    ▄▄▄       ▄████▄   ██ ▄█▀     ██████ ▓█████  ██▀███   ██▒   █▓▓█████  ██▀███
#▓██   ▒▒████▄    ▓██▒    ▓██▒    ▓█████▄ ▒████▄    ▒██▀ ▀█   ██▄█▒    ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
#▒████ ░▒██  ▀█▄  ▒██░    ▒██░    ▒██▒ ▄██▒██  ▀█▄  ▒▓█    ▄ ▓███▄░    ░ ▓██▄   ▒███   ▓██ ░▄█ ▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
#░▓█▒  ░░██▄▄▄▄██ ▒██░    ▒██░    ▒██░█▀  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄      ▒   ██▒▒▓█  ▄ ▒██▀▀█▄    ▒██ █░░▒▓█  ▄ ▒██▀▀█▄
#░▒█░    ▓█   ▓██▒░██████▒░██████▒░▓█  ▀█▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄   ▒██████▒▒░▒████▒░██▓ ▒██▒   ▒▀█░  ░▒████▒░██▓ ▒██▒
# ▒ ░    ▒▒   ▓▒█░░ ▒░▓  ░░ ▒░▓  ░░▒▓███▀▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒   ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░   ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
# ░       ▒   ▒▒ ░░ ░ ▒  ░░ ░ ▒  ░▒░▒   ░   ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░   ░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░   ░ ░░   ░ ░  ░  ░▒ ░ ▒░
# ░ ░     ░   ▒     ░ ░     ░ ░    ░    ░   ░   ▒   ░        ░ ░░ ░    ░  ░  ░     ░     ░░   ░      ░░     ░     ░░   ░
#             ░  ░    ░  ░    ░  ░ ░            ░  ░░ ░      ░  ░            ░     ░  ░   ░           ░     ░  ░   ░
#                                       ░           ░                                                ░
# 插件作者 CandiesJar | Github: github.com/sasi2006166 | Discord: https://discord.gg/dJ8DG2cSzt | Telegram: @CandiesJar
# Velocity 配置文件

# 警告: 在 Discord 聊天群组上报告任何错误之前, 请仔细阅读这些注释!
# 有些正在开发测试的选项默认是禁用/缺失的，不要向我们汇报这些功能的有关问题.
# 感谢理解.

settings:

  # 调试模式, 适合调试bug.
  # 重要: 可能会导致服务器后台刷屏, 建议只在提交BUG时使用该模式.
  # 默认禁用.
  debug: false

  # 仅拥有管理员权限的玩家才可以在 /fs 命令上使用 tab 补全.
  command_tab_complete: true

  # 选择是否要为大厅添加不同的 Ping 方法。
  # 默认(DEFAULT): 普通的踢出方法, 在服务器重启后, 插件会重新将提出玩家分配至大厅子服.
  # 套接(SOCKET): 该模式将会通过 socket 检查服务器是否在线.
  # 警告: 除非碰到问题, 否则不应改动.
  # 重要2: 套接模式在大厅满时不会检查!
  ping_mode: DEFAULT

  # 间隔 X 秒检查一次大厅服状态, 在此设置.
  # 在首次启动/重启时, 在启用功能时等待 X 秒 (再次设置).
  # 推荐值请设置在 10, 对那些不太稳定的 Spigot 核心更是如此.
  ping_delay: 8

  # Ping 检查进入超时阶段的秒数.
  # 若服务器在超过如下设定值的秒数后未响应, 则它会被视作离线.
  ping_timeout: 2

  # 是否启用更新检查.
  updater: true

  # 这里是所有参与玩家重连与均分的大厅子服.
  fallback:
    bedwars:
      servers:
        - bwgame1
        - bwgame2
        - bwgame3
      lobbies:
        - bwlobby1
        - bwlobby2
        - bwlobby3
      mode: FALLBACK
    survival:
      servers:
        - survival
      lobbies:
        - lobby1
        - lobby2
        - lobby3
      mode: FALLBACK
    default: # 请勿删除该默认分组.
      servers:
        - lobby1
        - lobby2
        - lobby3
      mode: DEFAULT

  # 在检测到下列原因时禁用玩家踢出.
  # 示例: 玩家(仅)被 spigot 实例通过 Essentials 封禁
  # FallbackServer 将会断开他的连接而非踢出.
  ignored_reasons:
    - "ban"
    - "flying"
    - "whitelist"
    - "packets"
    - "full"
    - "afk"
    - "maintenance"

  # 若你想要使用重连模式, 则 fallback_mode 必须设置为 RECONNECT.
  # 这些值决定了在对应情况下是否 (在成功重连至其他服务器时) 清除聊天栏.
  clear_chat:
    fallback: true
    server_switch: false
    reconnect: false
    reconnect_join: true

  # 默认为 false 以防止首次加入出现问题.
  # True: 插件自动检测大厅平衡玩家数量.
  # 警告: 如果你不设置平衡组与其下的内容, 加入功能将会完全停止工作.
  # 警告 2: 在不正确配置插件的情况下作者不会提供任何支持.
  join_balancing: false

  # 若 join_balancing 为 true,你可以在这里选择平衡玩家组.
  # 你可以在 "fallback" 部分找到相应配置.
  join_balancing_group: "default"

  # 重连部分配置.
  # 可在这里自定义诸如延时和标题模式等设置, 所有时间设定单位均为秒.
  # 需要注意的是你的组必须设定为 RECONNECT 模式
  auto_reconnect:
    # 将玩家移动至大厅子服或断开连接前的尝试次数.
    max_tries: 8

    # 重连阶段 ping 服务器的时间.
    # 设置为小于 1 的时间将导致该功能不能正常工作.
    # 推荐设置在 10 左右.
    ping_delay: 10

    # 该选项用于 ping 拓展, 用于检查服务器是否完全开启.
    # 警告: 除非遇到问题, 否则不应改动.
    # 警告 2: 同样需要在附属中修改相应的值.
    player_count_check: -1

    # 该选项可在玩家重连时将玩家传送至不同的服务器.
    # 警告: 需要安装 spigot 拓展并预先在 'standalone' 部分配置过.
    physical_reconnect:
      enabled: false
      server: "reconnectsv"

    # 选择玩家在重连时加入挂机服的设置.
    # True: 玩家在重连时会进入挂机服.
    # False: 玩家在重连时会返回离开时所在服务器.
    join_limbo: false

    # 在此自定义挂机服设置.
    # WARNING: 仅在 "join_limbo" 为 true 时有效.
    limbo_settings:
      name: "FallbackLimbo" # 挂机服的名称, 可以是任何内容.
      dimension: "OVERWORLD" # 挂机服的维度, 可以为"OVERWORLD"、"NETHER" 或 "THE_END".
      gamemode: "ADVENTURE" # 挂机服的游戏模式, 可以为 "SURVIVAL", "CREATIVE", "ADVENTURE", 或 "SPECTATOR".
      schematic:
        enabled: false
        name: "limbo.schematic" # 仅在启用时有效.
        x: 69
        y: 70
        z: 69
      world_time: 5000
      x: 0
      y: 100
      z: 0
      yaw: 0
      pitch: 0

    # ping 时的超时时间.
    # 单位为毫秒, 2000 毫秒 = 2 秒.
    ping_timeout: 2000

    # 该选项将会触发普通的 FallbackServer 踢出方法.
    # 按大厅将不同玩家排序.
    player_sort: true

    # 重连服务器时开始 ping 服务器的延时.
    # 填入小于 1 的值会导致其不工作.
    # 单位为秒.
    first_delay: 3

    # 在玩家重连进入挂机服时是否清空 tab 列表.
    # 可防止名称相关的视觉 bug 出现, 尤其是在重连后.
    clear_tab-list: true

    # 拒绝重连的理由.
    # 如果玩家是以下列理由断开连接的, 则不允许玩家自动重连.
    ignored_reasons:
      - "ban"
      - "flying"
      - "kick"
      - "afk"
      - "outdated"
      - "whitelist"
      - "connected"
      - "full"
      - "spam"
      - "packets"
      - "maintenance"

    # 无视自动重连的服务器.
    # 若玩家在这些子服中被踢出, 则他们会返回大厅子服而不是重连.
    # 可将事件服务器如小游戏子服等添加至此.
    ignored_servers:
      - lobby1
      - lobby2
      - lobby3

    # 显示的标题可在 messages.yml 下自定义.
    title:
      enable: true
      # NORMAL (默认): 显示末尾带三个点的动态标题 (. -> .. -> ...)
      # PULSE (搏动): 仿心跳式的浮动文本标题.
      # STATIC (静态): 不显示任何动态内容.
      # 可在 messages.yml 中自定义
      mode: NORMAL

  # True: 正常玩家将无法看见 /fs 的消息.
  # False: 所有玩家都可以看见简单的 "正在运行 fallbackserver" 消息.
  hide_command: false
  
  # 是否启用数据统计功能 -> https://bstats.org/plugin/bungeecord/FallbackServer/11817
  # 默认情况下为 "true", 这可以帮助我改进插件.
  # 你也可以将其禁用, 尊重你的选择.
  telemetry: true

  # 管理员将会收到服务器关闭消息, 以及关闭原因.
  # 默认禁用.
  admin_notification: true

  # 启用内置的命令阻止功能.
  # 在指定服务器上禁用某个命令, 在某些情况下如进行屏幕分享时很有用.
  command_blocker: true

  # 警告: 只会在 "command_blocker" 为 true 有用.
  # 在此添加你需要在指定服务器中禁用的命令.
  # 模板:
  # 服务器名称:
  #   - 命令 1
  #   - 命令 2
  command_blocker_list:
    hack_control:
      - lobby
      - hub
    hack_control_2:
      - lobby
      - hub

  # 是否使用 /lobby 命令.
  lobby_command: true

  # 警告: 仅在 "lobby_command" 设置为 true 时有效.
  # /lobby 的等价命令，也可以将自带的 /hub 命令移除.
  lobby_command_aliases:
    - hub
    - lobby

  # 是否启用服务器黑名单, 如果存在验证服务器的话就需要启用本功能.
  ignored_servers: true

  # 警告: 仅在 "server_blacklist" 设置为 true 时有效.
  # 在这里加入你的想要禁用的大厅子服.
  # 这些子服内将不会将玩家踢出, 玩家会自动断线.
  ignored_servers_list:
    - prelobby1

sub_commands:

  # Enabled: true 表示会启用对应的命令.
  # Permission: 权限节点 表示使用该命令所需的权限节点.

  admin:
    permission: "fallback.admin"

  reload:
    permission: "fallback.admin.reload"

  debug:
    permission: "fallback.admin.debug"

  create:
    enabled: true
    permission: "fallback.admin.create"

  add:
    enabled: true
    permission: "fallback.admin.add"

  remove:
    enabled: true
    permission: "fallback.admin.remove"

  status:
    enabled: true
    permission: "fallback.admin.status"

  servers:
    enabled: true
    permission: "fallback.admin.servers"
```