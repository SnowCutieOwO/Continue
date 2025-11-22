# 数据库

HuskSync 会将玩家数据及快照保存在你设置的服务器中。这和 [Redis] 服务器是不同的，它被本插件用于缓存及内部数据沟通。

## 数据库类型

::: warning
暂时没有在这些*数据库*类型之间切换的方法。修改数据库类型会导致数据丢失。
:::

|类型|数据库软件|
|---|---|
|`MYSQL`|MySQL 8.0+|
|`MARIADB`|MariaDB 5.0+|
|`POSTGRE`|PostgreSQL|
|[`MONGO`](#mongodb-安装)|MongoDB|

## 配置

若要修改数据库类型，打开 `config.yml` 文件并修改 `database` 下的属性。

::: details 数据库选项（config.yml）
``` yaml
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
```
:::

## 凭据

你需要指定登录凭据（域名、端口、用户名、密码以及数据库名称）。这些凭据用来连接到你的数据库服务器。

如果你的数据库服务器账号没有密码（不推荐），请将密码一栏留空（`password: ''`），插件会试图不带密码进行连接。

### 连接池设置

如果你正在使用 MySQL、MariaDB 或 PostgreSQL 作为数据库，你可以修改 `HikariCP` 连接池设置，修改风险需自行承担。

需要注意的是修改这些值可能会导致问题。默认值适用于大部分用户。

## MongoDB 安装

如果你正在使用 MongoDB 数据库，除了将数据库类型设置为 `MONGO`，你还需要做一些不同的事。

* 在 `database` 的 `credentials` 部分下，输入你的 MongoDB 数据库凭证。另外你不应该乱动 `connection_pool` 部分的设置。
* 在 `mongo_settings` 部分的 `parameters` 部分，确保指定的 `&authSource=` 与你使用的数据库类型相符（默认为 `HuskSync`）

## MongoDB Atlas 安装

如果你正在使用 MongoDB Atlas 数据库，你需要修改 Atlas 设置并修改连接字段参数。

* 在 `mongo_settings` 下将 `using_atlas` 设置为 `true`。
* 去掉 `mongo_settings` 下 `patameters` 中的 `&authSource=HuskSync`。

需要注意的是使用 Atlas 时 `credentials` 下的 `port` 是会被忽略的。