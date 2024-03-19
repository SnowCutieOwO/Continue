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
# 有些正在开发测试的选项默认是禁用的，不要向我们汇报这些功能的有关问题.
# 感谢理解.

settings:

  # 调试模式, 适合调试bug.
  # 重要: 可能会导致服务器后台刷屏, 建议只在提交BUG时使用该模式.
  # 默认禁用.
  debug: false

  # 仅拥有管理员权限的玩家才可以在 /fs 命令上使用 tab 补全.
  command_tab_complete: true

  # 重连(RECONNECT): 玩家在离开服务器时会显示 "Reconnecting" 的动态标题, 如果子服尚未重启完毕, 则玩家会自动均分到设定的大厅子服中.
  # 默认(DEFAULT): 普通的提出方法, 在服务器重启后, 插件会重新将提出玩家分配至大厅子服.
  # 重要: 该功能生效需要重启群组服核心.
  fallback_mode: DEFAULT

  # 这里是所有参与玩家重连与均分的大厅子服.
  # 该命令还会用在 /hub 命令上 (如果启用).
  # 警告: 填入选项均为大小写敏感.
  fallback_list:
    - lobby1
    - lobby2
    - lobby3

  # 若你想要使用重连模式, fallback_mode 必须设置为 RECONNECT.
  # 这些值决定了在对应情况下是否 (在成功重连至其他服务器时) 清除聊天栏.
  clear_chat:
    fallback: true
    reconnect: false

  # 重连部分配置, 仅在 fallback_mode 设置为 RECONNECT 时有效.
  # 可在这里自定义诸如延时和标题模式等设置, 所有时间设定单位均为秒.
  auto_reconnect:
    # 将玩家移动至大厅子服或断开连接前的尝试次数.
    max_tries: 8

    # 重连阶段 ping 服务器的时间.
    # 设置为小于 1 的时间将导致该功能不能正常工作.
    ping_delay: 10

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

    # 拒绝重连的理由.
    # 如果玩家是以下列理由断开连接的, 则不允许玩家自动重连.
    ignored_reasons:
      - "ban"
      - "kick"
      - "afk"
      - "outdated"
      - "whitelist"
      - "connected"
      - "full"
      - "spam"
      - "maintenance"

    # 无视自动重连的服务器.
    # 若玩家在这些子服中被踢出, 则他们会返回大厅子服而不是重连.
    # 可将事件服务器如小游戏子服等添加至此.
    ignored_servers:
      - lobby1
      - lobby2
      - lobby3
      - bw1
      - bw2
      - bw3

    # 显示的标题可在 messages.yml 下自定义.
    # 默认禁用.
    title:
      enable: true
      # NORMAL (默认): 显示末尾带三个点的动态标题 (. -> .. -> ...)
      # PULSE (搏动): 仿心跳式的浮动文本标题.
      # STATIC (静态): 不显示任何动态内容.
      # 可在 messages.yml 中自定义
      mode: NORMAL # 默认禁用.

  # True: 普通玩家将不能看到 /fs 的输出.
  # False: 所有玩家都可以看到简单的 "正在使用 FallbackServer" 消息.
  hide_command: true

  # 决定是否启用更新.
  updater: true

  # 间隔 X 秒检查大厅子服是否连通, 单位为秒.
  # 咋
# 若你的服务器还在开发或使用了不稳定的 Spigot 核心, 建议设置为 5.
  ping_delay: 5

  # 决定是否启用统计数据 -> https://bstats.org/plugin/bungeecord/FallbackServer/11817
  # 默认为 "true", 上传的数据可以帮助作者改进插件.
  # 你可以自行决定是否将其关闭.
  stats: true

  # True: 插件会自动选择最优子服并平衡玩家数量.
  # 警告; 如果列表只包含一个大厅子服则该功能无效.
  # 默认禁用.
  join_balancing: false

  # 管理员将会收到服务器关闭的消息及其具体原因.
  # 默认禁用.
  admin_notification: true

  # 是否使用 FallBackServer 内置的命令拦截.
  use_command_blocker: true

  # 警告: 静载 "use_command_blocker" 设置为 true 时有效.
  # 在这里设置服务器及其下对应禁用的命令.
  command_blocker_list:
    hack_control:
      - lobby
      - hub
    hack_control_2:
      - lobby
      - hub

  # 若插件检测到下列理由断线的玩家, 禁用自动踢出.
  # 示例: 玩家在 Spigot 服务器内被 Essentials 封禁
  # 本插件不会尝试将该玩家重连.
  ignored_reasons:
    - "ban"
    - "whitelist"
    - "full"

  # 警告: 该设置需要重启服务器才可生效.
  # 如果你想要使用 /lobby 命令的话.
  lobby_command: true

  # 仅在 "lobby_command" 设置为 true 时有效.
  # /lobby 的等价命令，也可以将自带的 /hub 命令移除.
  lobby_command_aliases:
    - hub
    - lobby

  # 是否启用服务器黑名单, 如果存在验证服务器的话就需要启用本功能.
  use_ignored_servers: true

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

  add: # 该项禁用
    enabled: true
    permission: "fallback.admin.add"

  remove: # 该项禁用
    enabled: true
    permission: "fallback.admin.remove"

  status: # 该项禁用
    enabled: true
    permission: "fallback.admin.status"

  update: # 该项禁用
    enabled: true
    permission: "fallback.admin.update"
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
# 有些正在开发测试的选项默认是禁用的，不要向我们汇报这些功能的有关问题.
# 感谢理解.

settings:

  # 调试模式, 适合调试bug.
  # 重要: 可能会导致服务器后台刷屏, 建议只在提交BUG时使用该模式.
  # 默认禁用.
  debug: false

  # 仅拥有管理员权限的玩家才可以在 /fs 命令上使用 tab 补全.
  command_tab_complete: true

  # 重连(RECONNECT): 玩家在离开服务器时会显示 "Reconnecting" 的动态标题, 如果子服尚未重启完毕, 则玩家会自动均分到设定的大厅子服中.

  # 默认(DEFAULT): 普通的提出方法, 在服务器重启后, 插件会重新将提出玩家分配至大厅子服.

  # 重要: 该功能生效需要重启群组服核心.
  fallback_mode: DEFAULT

  # 若你想要使用重连模式, fallback_mode 必须设置为 RECONNECT.
  # 这些值决定了在对应情况下是否 (在成功重连至其他服务器时) 清除聊天栏.
  clear_chat:
    fallback: true
    reconnect: false

  # 重连大厅子服列表，也用于 /hub 命令中.
  fallback_list:
    - lobby1
    - lobby2
    - lobby3

  # 重连部分配置, 仅在 fallback_mode 设置为 RECONNECT 时有效.
  # 可在这里自定义诸如延时和标题模式等设置, 所有时间设定单位均为秒.
  auto_reconnect:

    # 服务器 ping 超时时间.
    # 单位为毫秒, 示例 2000 = 2 秒.
    ping_timeout: 2000

    # 重连阶段 ping 服务器的时间.
    # 设置为小于 1 的时间将导致该功能不能正常工作.
    # 单位为秒.
    ping_delay: 7

    # 将玩家移动至大厅子服或断开连接前的尝试次数.
    max_tries: 5

    # 该选项将会触发普通的 FallbackServer 踢出方法.
    # 按大厅将不同玩家排序.
    player_sort: true

    # 重连前 ping 服务器的时间.
    # 设置为小于 1 的时间将导致该功能不能正常工作.
    # 单位为秒.
    first_delay: 3

    # 拒绝重连的理由.
    # 如果玩家是以下列理由断开连接的, 则不允许玩家自动重连.
    ignored_reasons:
      - "ban"
      - "kick"
      - "afk"
      - "whitelist"
      - "spam"
      - "maintenance"

    # 无视自动重连的服务器.
    # 若玩家在这些子服中被踢出, 则他们会返回大厅子服而不是重连.
    # Add event servers, such as mini-games, here.
    ignored_servers:
      - lobby1
      - lobby2
      - lobby3
      - bw1
      - bw2
      - bw3

    # 在重连时是否要让玩家加入 limbo 挂机子服
    # True: 重连后玩家将会加入 limbo 服.
    # False: 重连后玩家会返回之前正在游玩的服务器.
    join_limbo: false

    # 显示的标题可在 messages.yml 下自定义.
    title:
      enable: true
      # NORMAL (默认): 显示末尾带三个点的动态标题 (. -> .. -> ...)
      # PULSE (搏动): 仿心跳式的浮动文本标题.
      # STATIC (静态): 不显示任何动态内容.
      # 可在 messages.yml 中自定义
      mode: NORMAL # 默认禁用.

  # True: 普通玩家将不能看到 /fs 的输出.
  # False: 所有玩家都可以看到简单的 "正在使用 FallbackServer" 消息.
  hide_command: false

  # 决定是否启用更新.
  updater: true

  # 间隔 X 秒检查大厅子服是否连通, 单位为秒.
  # 在初次启动/重启时，让插件在启用重连功能时先停止 X 秒（在下文设置）
# 若你的服务器还在开发或使用了不稳定的 Spigot 核心, 建议设置为 5.
  ping_delay: 5

  # 决定是否启用统计数据 -> https://bstats.org/plugin/bungeecord/FallbackServer/11817
  # 默认为 "true", 上传的数据可以帮助作者改进插件.
  # 你可以自行决定是否将其关闭.
  stats: true

  # True: 插件会自动选择最优子服并平衡玩家数量.
  # 警告; 如果列表只包含一个大厅子服则该功能无效.
  # 默认禁用.
  join_balancing: false

  # 管理员将会收到服务器关闭的消息及其具体原因.
  # 默认禁用.
  admin_notification: true

  # 是否使用 FallBackServer 内置的命令拦截.
  command_blocker: true

  # 警告: 静载 "use_command_blocker" 设置为 true 时有效.
  # 在这里设置服务器及其下对应禁用的命令.
  # TEMPLATE:
  # SERVERNAME:
  #   - COMMAND1
  #   - COMMAND2
  command_blocker_list:
    hack_control:
      - lobby
      - hub
    hack_control_2:
      - lobby
      - hub

  # 若插件检测到下列理由断线的玩家, 禁用自动踢出.
  # 示例: 玩家在 Spigot 服务器内被 Essentials 封禁
  # 本插件不会尝试将该玩家重连.
  ignored_reasons:
    - "ban"
    - "whitelist"
    - "full"

  # 如果你想要使用 /lobby 命令的话.
  lobby_command: true

  # 仅在 "lobby_command" 设置为 true 时有效.
  # /lobby 的等价命令，也可以将自带的 /hub 命令移除.
  lobby_command_aliases:
    - hub
    - lobby

  # 是否启用服务器黑名单, 如果存在验证服务器的话就需要启用本功能.
  server_blacklist: true

  # 警告: 仅在 "server_blacklist" 设置为 true 时有效.
  # 在这里加入你的想要禁用的大厅子服.
  # 这些子服内将不会将玩家踢出, 玩家会自动断线.
  server_blacklist_list:
    - prelobby1
    - prelobby2

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

  update:
    enabled: true
    permission: "fallback.admin.update"
```