# 🗒️ 默认配置

``` YAML
# 登录时发送更新提醒
# 无网络连接时可考虑关闭
update-notify: true

# 间隔一段时间自动保存玩家数据。
# 编辑后需要重载插件。
auto-save:
  enabled: true
  interval: 1800 # 单位为秒（1800 = 30 分钟）
  log: true

# 在 SQL 数据库读取/保存数据时
# 在控制台显示相关信息
debug: false

# MySQL 支持
mysql:
  enabled: false
  host: localhost
  port: 3306
  database: minecraft
  user: root
  pass: ''
  maxPoolSize: 10
  maxLifeTime: 300000
  connectionTimeOut: 10000
  leakDetectionThreshold: 150000
  properties:
    cachePrepStmts: true
    prepStmtCacheSize: 250
    prepStmtCacheSqlLimit: 2048

# 背包格子数量 - 必须为 9 的整数倍。
# 修改此选项后务必更新 items.yml 里的格子数。
inventory-slots: 36

# 启用该选项后即可编辑玩家饰品界面。
# 资源页有相关的编辑教程。
# 编辑后需要重载插件。
no-custom-inventory: false

# 防止一个已知的复制漏洞
# 非常建议保持 true 设置。
disable-equiping-stacked-items: true

# 物品会（在禁用 keep-inventory 游戏规则时）掉落。
# 编辑后需要重载插件。
drop-on-death: true

# 可用兼容模块：
# - aureliumskills（仅等级）
# - battlelevels（仅等级）
# - default（使用玩家经验条，仅等级）
# - heroes
# - mcmmo（仅等级）
# - mcrpg（仅等级）
# - mmocore
# - proskillapi
# - racesandclasses
# - rpgplayerleveling（仅等级）
# - skillapi
# - fabled
# - skills
# - skillspro
level-module: default
class-module: default


# 启用后，MMOInventory 会为 Oraxen 自动生成必需文件，
# 格式大致如下：
#     ~/plugins/Oraxen/items/mmoinventory-hook.yml
#
# 文件会在服务器启动后生成，
# 编辑后需要重载插件。
generate-oraxen-files: false

# 向玩家物品栏增加属性统计物品。
# 点击可打开自定义界面。
# 编辑后需要重载插件。
inventory-button:
  enabled: false
  slot: 9
  item:
    material: CHEST
    name: '&6自定义界面'
    lore:
      - ''
      - '&e点击打开.'
    # custom-model-data: 1
    # skull-texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjg5Yjk4ZjA0YzMyMjdkMzdkMzE5YmJjZmZjNTFmNTJlNzhkOTZhMDViMTI4NTJkMWI0NjRiYjc0MDhhNzgxMCJ9fX0=

# 启用/禁用自动下载纹理包。编辑后需要重载插件。
# 默认路径：https://www.dropbox.com/s/1lftxmzh0q4b5yu/mmoinv_rp_4.zip?dl=1
resource-pack:
  enabled: true
  url: resource_pack_url
  delay: 20

  # 若玩家不接受使用资源包，或下载失败，则将玩家踢出服务器。
  # 编辑后需要重载插件。
  kick:
    enabled: false
    message: 'Please accept server resource pack!'
```