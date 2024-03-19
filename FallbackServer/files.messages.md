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
  syntax: "%prefix% &c命令格式: /fs <reload:set:add>"
  no_permission: "%prefix% &7抱歉, 但你缺少权限 &c%permission%"
  reloaded: "%prefix% &7配置&b成功&7重载!"
  only_player: "%prefix% &c只有玩家才可使用该命令."
  already_in_hub: "%prefix% &c你已处于大厅!"
  moved: "&7你已被转移至 &b%server%"
  disabled_command: "%prefix% &c抱歉, 该命令不可用."
  no_server: "%prefix% &c找不到可用的重连大厅子服."
  empty_server: "%prefix% &7请&c指定&7一个服务器."
  server_is_added: "%prefix% &b%server% &7已处于重连服务器列表."
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
    - "&b/fs reload &7| 重载配置文件."
    - "&b/fs add <服务器名称> &7| 将指定服务器添加至重连配置."
    - ""
    - "&7当前版本 &b%version%"
    - "&8&m---------------------------"

  stats_command:
    - ""

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
# Velocity 配置文件

MESSAGES:
  prefix: "&7&lF&b&lS &8&l» "
  syntax: "%prefix% &c命令格式: /fs <reload:set:add>"
  no_permission: "%prefix% &7抱歉, 但你缺少权限 &c%permission%"
  reloaded: "%prefix% &7配置&b成功&7重载!"
  only_player: "%prefix% &c只有玩家才可使用该命令."
  already_in_hub: "%prefix% &c你已处于大厅!"
  moved: "&7你已被转移至 &b%server%"
  disabled_command: "%prefix% &c抱歉, 该命令不可用."
  no_server: "%prefix% &c找不到可用的重连大厅子服."
  empty_server: "%prefix% &7请&c指定&7一个服务器."
  server_is_added: "%prefix% &b%server% &7已处于重连服务器列表."
  server_not_available: "%prefix% &b%server% &7不处于 BungeeCord 的配置中."
  server_added: "%prefix% &b%server% &7已添加至配置中."
  connection_failed: "%prefix% &7重连&c失败&7! 正在返回大厅."

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
    - "&b/fs reload &7| 重载配置文件."
    - "&b/fs add <服务器名称> &7| 将指定服务器添加至重连配置."
    - ""
    - "&7当前版本 &b%version%"
    - "&8&m---------------------------"

  stats_command:
    - ""

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
    connecting_sub_title: "&7等待中..."
    connected_title: "&a&l成功连接&7%dots%"
    connected_sub_title: "&7你已连接至 &b%server%"

  lobby:
    enabled: true
    fade_in: 1
    fade_out: 1
    stay: 3
    delay: 1
    lobby_title: "&a&l成功连接至大厅."
    lobby_sub_title: "&7欢迎回来!"
```