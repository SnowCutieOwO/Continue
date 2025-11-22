# 配置文件
本章节包含了 HuskSync 的参考配置文件。

## 配置结构

* 📁 `plugins/HuskSync/`
  * 📄 `config.yml`: 插件的总配置文件
  * 📄 `server.yml`: 服务器 ID 配置文件
  * 📄 `messages-xx-xx.yml`: 插件本地化语言文件，格式为 MineDown（见“[语言贡献]”章节）

## 示例文件

### `config.yml`
``` YAML
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃       HuskSync 主配置文件      ┃
# ┃       插件作者 William278      ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 插件介绍: https://william278.net/project/husksync
# ┣╸ 配置文件: https://william278.net/docs/husksync/config-file/
# ┗╸ 维基原文: https://william278.net/docs/husksync

# 默认使用的语言命名.
# 相关文档: https://william278.net/docs/husksync/translations
language: en-gb
# 是否在插件启动时检查更新
check_for_updates: true
# 为运行了 HuskSync 的服务器指定通用 ID。擅自修改本项后果自负！
cluster_id: ''
# 启用开发者调试日志
debug_logging: true
# 是否启用现代化的, 内容丰富的 TAB 补全建议 (若可用)
brigadier_tab_completion: false
# 是否启用 Player Analytics 联动.
# 相关文档: https://william278.net/docs/husksync/plan-hook
enable_plan_hook: true
# 在安装 ProtocolLib 或 PacketEvents 后处理锁定玩家时，是否直接取消对应玩家的游戏事件包
cancel_packets: true
# 数据库设置
database:
  # 使用的数据库种类 (MYSQL, MARIADB, POSTGRES, MONGO)
  type: MYSQL
  # 为 MYSQL, MARIADB, POSTGRES 或 MONGO 数据库设置对应的登录凭据
  credentials:
    host: localhost
    port: 3306
    database: minecraft
    username: root
    password: ''
    # 仅在使用了 MARIADB 或 POSTGRES 类型的数据库下修改本项
    parameters: ?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8
  # MYSQL, MARIADB, POSTGRES 数据库 Hikari 连接池设置. 请勿擅自修改, 否则后果自负!
  connection_pool:
    maximum_pool_size: 10
    minimum_idle: 10
    maximum_lifetime: 1800000
    keepalive_time: 0
    connection_timeout: 5000
  # MongoDB 高级设置。请勿擅自修改, 否则后果自负！
  mongo_settings:
    using_atlas: false
    parameters: ?retryWrites=true&w=majority&authSource=HuskSync
  # 数据库使用的表名。请勿擅自修改, 否则后果自负！
  table_names:
    users: husksync_users
    user_data: husksync_user_data
# Redis 设置
redis:
  # 在此指定 Redis 服务器的登录凭证。
  # 若未设置用户名或你需要使用默认用户，则将 "user" 项留空
  # 若未设置登录密码或你需要使用默认用户，则将 "password" 项留空。
  credentials:
    host: localhost
    port: 6379
    # 自行修改，后果自负！默认值为 0。
    database: 0
    user: ''
    password: ''
    use_ssl: false
  # Redis 哨兵模式相关设置。请勿擅自修改，否则后果自负！
  sentinel:
    # 哨兵模式的主节点名称
    master: ''
    # 地址:端口列表
    nodes: []
    password: ''
# 同步设置
synchronization:
  # 使用的数据同步模式 (LOCKSTEP 或 DELAY)。对大多数服务器推荐使用 LOCKSTEP 模式。
  # 相关文档: https://william278.net/docs/husksync/sync-modes
  mode: LOCKSTEP
  # 每个用户单次数据快照的备份数量
  max_user_data_snapshots: 16
  # 新快照创建与保存的小时间隔（设置为"0"表示保存所有快照）
  snapshot_backup_frequency: 4
  # 由下列理由保存的快照将会被标记（使得其不会被切换）
  # 相关文档: https://william278.net/docs/husksync/data-rotation#save-causes
  auto_pinned_save_causes:
    - INVENTORY_COMMAND
    - ENDERCHEST_COMMAND
    - BACKUP_RESTORE
    - LEGACY_MIGRATION
    - MPDB_MIGRATION
  # 是否在服务器保存世界时为处于该世界的玩家创建一个快照
  save_on_world_save: true
  # 玩家死亡时的数据同步方式与时间设置
  save_on_death:
    # 是否在玩家死亡时创建一份快照（包含死亡时的掉落物）
    enabled: true
    # 在死亡快照中保存什么样的物品（DROPS 或 ITEMS_TO_KEEP）。需要注意的是 ITEMS_TO_KEEP（对启用了 keepInventory 规则的服务器）需要 1.19.4+ 版本才可使用。
    items_to_save: ITEMS_TO_KEEP
    # 是否为背包为空的玩家创建死亡快照？
    save_empty_items: true
    # 在死亡界面退出并登入其他服务器的玩家是否保留物品。
    sync_dead_players_changing_server: true
  # 是否使用 snappy 数据压缩算法。擅自修改后果自负
  compress_data: true
  # 是否显示同步消息 (ACTION_BAR, CHAT, TOAST 或 NONE)
  notification_display_slot: ACTION_BAR
  # 是否同步制图台中的永久地图使得玩家可以跨服浏览地图
  persist_locked_maps: true
  # 是否同步玩家的最大生命值（需要启用生命值同步）
  synchronize_max_health: true
  # 若使用了 DELAY 同步方法，服务器应该在数据库中拉取数据前多久接收一次 Redis 服务器数据更新（如玩家未转到其他服务器的情况）
  network_latency_milliseconds: 500
  # 决定同步的数据类型。
  # 相关文档: https://william278.net/docs/husksync/sync-features
  features:
    inventory: true
    ender_chest: true
    experience: true
    advancements: true
    game_mode: true
    flight_status: true
    potion_effects: true
    persistent_data: true
    statistics: true
    health: true
    hunger: true
    attributes: true
    persistent_data: true
    location: false
  # 在完成数据同步前不可执行的命令（以 * 表示所有命令）
  blacklisted_commands_while_locked:
    - '*'
  # 同步属性相关设置
  attributes:
    # 同步玩家数据时忽略哪些数据. 支持使用通配符.
    # (示例：['minecraft:generic.max_health', 'minecraft:generic.*'])
    ignored_attributes: []
    # 同步玩家数据时保留哪些数据，支持使用通配符。
    # (示例：['minecraft:effect.speed', 'minecraft:effect.*'])
    ignored_modifiers: ['minecraft:effect.*', 'minecraft:creative_mode_*']
  # 监听器的事件优先级 (HIGHEST, NORMAL, LOWEST)。若遇到插件冲突则可修改该部分设置
  event_priorities:
    quit_listener: LOWEST
    join_listener: LOWEST
    death_listener: NORMAL
```
### `server.yml`

``` YAML
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃     HuskSync - 服务器 ID     ┃
# ┃     插件作者 William278      ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 该文件应当包含与群组服核心配置中相同的服务器名称.
# ┗╸ 若你加入这个服务器的命令是 /server alpha, 那么就将这个设置的值改为 'alpha' (注意大小写)

name: beta
```