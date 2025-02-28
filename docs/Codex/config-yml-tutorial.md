# config.yml 教程

``` YAML
# 加入服务器时显示更新提示.
update_notify: true

# 决定自动保存玩家数据的时间间隔 单位为秒).
player_data_save: 300

# 发现日志条目时的时间格式.
discoveries_date_format: "dd/MM/yyyy"

# 条目物品中变量 %progress_bar% 的显示格式.
progress_bar_placeholder:
  filled_symbol: "&a|"
  empty_symbol: "&c|"
  amount: 20

# MySQL 登陆凭据.
mysql_database:
  enabled: false
  host: localhost
  port: 3306
  username: root
  password: root
  database: database

# 请勿修改此项.
config_version: 2
```