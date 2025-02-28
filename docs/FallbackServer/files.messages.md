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

MESSAGES:
  prefix: "&7&lF&b&lS &8&l» "
  syntax: "%prefix% &c命令格式: /fs <reload:add:remove:status:servers>"
  no_permission: "%prefix% &7抱歉, 但你缺少权限 &c%permission%"
  reloaded: "%prefix% &7配置&b成功&7重载!"
  only_player: "%prefix% &c只有玩家才可使用该命令."
  already_in_hub: "%prefix% &c你已处于大厅!"
  moved: "&7你已被转移至 &b%server%"
  disabled_command: "%prefix% &c抱歉, 该命令不可用."
  no_server: "%prefix% &c找不到可用的重连大厅子服."
  empty_server: "%prefix% &7请&c指定&7一个服务器."
  server_is_added: "%prefix% &b%server% &7已处于重连服务器列表."
  server_removed: "%prefix% &b%server% &7已从组 &b%group%&7 中移除."
  server_not_added: "%prefix% &b%server% &7不处于组 &c%group%&7 中."
  server_not_available: "%prefix% &b%server% &7不处于 BungeeCord 的配置中."
  server_added: "%prefix% &b%server% &7已添加至配置中."
  connection_failed: "%prefix% &7重连&c失败&7! 正在返回大厅."
  exiting_reconnect: "%prefix% &7正在退出重连模式."

  moved_to_lobby:
    - ""
    - "&7&m---------------------------------"
    - ""
    - "&7你已被转移至 &b%server%"
    - "&7理由: &b%reason%"
    - ""
    - "&7&m---------------------------------"

  new_update:
    - "&7&m---------------------------------"
    - "&7Fallback Server 有新版本可用."
    - ""
    - "&7当前版本: &c%old_version% &7|| 最新版本: &b%new_version%"
    - "&7&m---------------------------------"

  fallback_command:
    - "&8&m-----&8[&bFallback Server&8]&m-----"
    - ""
    - "&b/fs reload &7| 重载插件配置."
    - "&b/fs add <组> <服务器> &7| 将返回服添加至服务器配置中."
    - "&b/fs remove <组> <服务器> &7| 将返回服移出服务器配置."
    - "&b/fs status &7| 显示群组实例的运行情况."
    - "&b/fs servers &7| 显示大厅的状态."
    - ""
    - "&7当前版本 &b%version%"
    - "&8&m---------------------------"

  stats_command:
    - "&8&m-----&8[&bSTATUS&8]&m-----"
    - ""
    - "&7当前版本: &b%version%"
    - "&7群组版本: &b%proxy_version%"
    - "&7CPU 核心数: &b%cores%"
    - "&7已用内存: &b%used_memory% MB"
    - "&7总玩家数: &b%total_players%"
    - ""
    - "&7输入命令 &b/fs servers &7获取大厅状态."
    - ""
    - "&8&m---------------------------"

  servers_command:
    online: "&a在线"
    offline: "&c离线"
    maintenance: "&e维护"
    group: "&7组: &7%group%"
    servers: "&7%server% &8| &b%status%"
    header:
      - "&8&m-----&8[&bSERVERS&8]&m-----"
      - ""
    footer:
      - ""
      - "&8&m------------------"

TITLES: # 所有设置单位均为秒.
  fallback:
    enabled: true
    delay: 2
    fade_in: 1 # 显示标题的时间
    fade_out: 1  # # 标题淡出所持续的时间
    stay: 3 # # 标题持续的时间
    fallback_title: "&c服务器崩溃!"
    fallback_sub_title: "&7你已被转移至大厅."

  # 重连标题值是自动处理的.
  # 你可以在 config.yml 启用或禁用该功能
  reconnect:
    reconnect_title: "&c&l正在重连&7%dots%"
    reconnect_sub_title: "&7请耐心等待!"
    connecting_title: "&6&l正在连接&7%dots%"
    connecting_sub_title: "&7等待服务器响应中."
    title_beat: 1 # 用于重连与连接标题时的模拟心跳.
    connected:
      delay: 2
      fade_in: 1
      fade_out: 1
      stay: 2
      title: "&a&l成功连接!"
      sub_title: "&7你已连接至 &b%server%"

  lobby:
    enabled: true
    fade_in: 1
    fade_out: 1
    stay: 3
    lobby_title: "&a&l成功连接至大厅."
    lobby_sub_title: "&7欢迎回来!"

  already_in_lobby:
    enabled: true
    fade_in: 1
    fade_out: 1
    stay: 3
    title: "&c&l已连接至大厅."
    sub_title: "&7你已经处于大厅中了."
```
# Veloicty
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

MESSAGES:
  prefix: "&7&lF&b&lS &8&l» "
  syntax: "%prefix% &c命令格式: /fs <reload:create:add:remove:status:server>"
  no_permission: "%prefix% &7抱歉, 但你缺少权限 &c%permission%"
  reloaded: "%prefix% &7配置&b成功&7重载!"
  only_player: "%prefix% &c只有玩家才可使用该命令."
  already_in_hub: "%prefix% &c你已处于大厅!"
  moved: "&7你已被转移至 &b%server%"
  disabled_command: "%prefix% &c抱歉, 该命令不可用."
  no_server: "%prefix% &c找不到可用的重连大厅子服."
  reconnection_failed: "%prefix% &7重连&c&l失败&7!"
  exiting_reconnect: "%prefix% &7正在退出重连模式."

  empty_group: "%prefix% &7请&c指定&7组."
  server_is_added: "%prefix% &b%server% &7已处于重连服务器列表."
  server_removed: "%prefix% &b%server% &7已从组 &b%group%&7 中移除."
  server_not_added: "%prefix% &b%server% &7不处于组 &c%group%&7 中."
  server_not_available: "%prefix% &b%server% &7不处于 BungeeCord 的配置中."
  server_added: "%prefix% &b%server% &7已添加至配置中."

  moved_to_lobby:
    - ""
    - "&7&m---------------------------------"
    - ""
    - "&7你已被转移至 &b%server%"
    - "&7理由: &b%reason%"
    - ""
    - "&7&m---------------------------------"

  new_update:
    - "&7&m---------------------------------"
    - "&7Fallback Server 有新版本可用."
    - ""
    - "&7当前版本: &c%old_version% &7|| 最新版本: &b%new_version%"
    - "&7&m---------------------------------"

  fallback_command:
    - "&8&m-----&8[&bFallback Server&8]&m-----"
    - ""
    - "&b/fs reload &7| 重载插件配置."
    - "&b/fs add <组> <服务器> &7| 将返回服添加至服务器配置中."
    - "&b/fs remove <组> <服务器> &7| 将返回服移出服务器配置."
    - "&b/fs status &7| 显示群组实例的运行情况."
    - "&b/fs servers &7| 显示大厅的状态."
    - ""
    - "&7当前版本 &b%version%"
    - "&8&m---------------------------"

  stats_command:
    - "&8&m-----&8[&bSTATUS&8]&m-----"
    - ""
    - "&7当前版本: &b%version%"
    - "&7群组版本: &b%proxy_version%"
    - "&7CPU 核心数: &b%cores%"
    - "&7已用内存: &b%used_memory% MB"
    - "&7总玩家数: &b%total_players%"
    - ""
    - "&7输入命令 &b/fs servers &7获取大厅状态."
    - ""
    - "&8&m---------------------------"

  servers_command:
    online: "&a在线"
    offline: "&c离线"
    maintenance: "&e维护"
    group: "&7组: &7%group%"
    servers: "&7%server% &8| &b%status%"
    header:
      - "&8&m-----&8[&bSERVERS&8]&m-----"
      - ""
    footer:
      - ""
      - "&8&m------------------"

  create_command:
    parameters: "%prefix% &7命令格式: /fs create <组> <模式>" # 模式可为 "fallback" 或 "reconnect"
    group_exists: "%prefix% &7已存在名为 &b%group% &7的组."
    group_created:
      - ""
      - "&7&m---------------------------------"
      - "&7组 &b%group% &7创建成功."
      - "&7模式: &b%mode%"
      - "&7可通过命令 &b/fs add %group% <服务器> 添加服务器."
      - "&7输入命令 /fs reload 即可应用改动"
      - "&7&m---------------------------------"
    mode: "%prefix% &7模式 &c%mode% &7不存在."

TITLES: # 所有设置单位均为秒.
  fallback:
    enabled: true
    delay: 2
    fade_in: 1 # 显示标题的时间
    fade_out: 1  # # 标题淡出所持续的时间
    stay: 3 # # 标题持续的时间
    fallback_title: "&c服务器崩溃!"
    fallback_sub_title: "&7你已被转移至大厅."

  # 重连标题值是自动处理的.
  # 你可以在 config.yml 启用或禁用该功能
  reconnect:
    reconnect_title: "&c&l正在重连&7%dots%"
    reconnect_sub_title: "&7请耐心等待!"
    connecting_title: "&6&l正在连接&7%dots%"
    connecting_sub_title: "&7等待服务器响应中."
    title_beat: 1 # 用于重连与连接标题时的模拟心跳.
    connected:
      delay: 2
      fade_in: 1
      fade_out: 1
      stay: 2
      title: "&a&l成功连接!"
      sub_title: "&7你已连接至 &b%server%"

  lobby:
    enabled: true
    delay: 2
    fade_in: 1
    fade_out: 1
    stay: 3
    lobby_title: "&a&l成功连接至大厅."
    lobby_sub_title: "&7欢迎回来!"

  already_in_lobby:
    enabled: true
    fade_in: 1
    fade_out: 1
    stay: 3
    title: "&c&l已连接至大厅."
    sub_title: "&7你已经处于大厅中了."
```