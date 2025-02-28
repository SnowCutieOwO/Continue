# 数据库
HuskHomes 在你所选种类的数据库中存储玩家数据、家传送点、地标传送点及其他传送数据。在搭建跨服传送系统时，你需要将数据库中磊设置为 MySQL 或 MariaDB 来允许数据在任意地方都能被读取。

## 数据库种类

::: warning 警告
当前没有自动迁移*数据库*中数据的方法。手动迁移可能会导致数据丢失。
:::

|种类|存储类型|描述|是否支持跨服|
|:---|:---:|:---|:---:|
|`SQLITE`|文件|基于文件存储的数据库种类。是本插件的默认（推荐）存储选择。|❌|
|`H2`|文件|与 SQLITE 相似，是基于文件存储的数据库种类，在数据库读取数据方面略有优化。|❌|
|`MYSQL`|服务器|在 MySQL 服务器上搭建的数据库。|✅|
|`MARIADB`|服务器|在 MariaDB 服务器上搭建的数据库。|✅|
|`POSTGRESQL`|服务器|在 PostgreSQL 服务器上搭建的数据库。|✅|


### 跨服

若你正在一个群组服上使用 HuskHomes，你就需要使用任意一种支持跨服的数据库。这是因为跨服需要让数据在所有子服都能交互，以此使 HuskHomes 能在任意子服上使用相同的数据。

## 配置
若要修改数据库种类，你需要在 `config.yml` 的 `database` 设置下修改这些选项。

数据库配置（config.yml）
```YAML
database:
  # 使用的数据库种类 (SQLITE, H2, MYSQL 或 MARIADB)
  type: SQLITE
  mysql:
    credentials:
      # 若你正在使用 MYSQL、MARIADB 或 POSTGRESQL 作为数据存储方式，你需要在这里设置登录凭证
      host: localhost
      port: 3306
      database: HuskHomes
      username: root
      password: pa55w0rd
      parameters: ?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8
    connection_pool:
      # MYSQL / MARIADB / POSTGRESQL 数据库的 Hikari 连接池设定。 除非你知道你在做什么，否则请勿随意改动！
      size: 12
      idle: 12
      lifetime: 1800000
      keepalive: 30000
      timeout: 20000
```

### 登录凭据（MariaDB & MySQL & PostgreSQL）
    
当你正在以 MariaDB、MySQL 或 PostgreSQL 为数据库时，你将需要指定登录凭据（域名、端口、用户名、密码以及数据库名称）。这些凭据用来连接到你的数据库服务器。

额外地，如果你对高级的设置有需求，你可以修改 HikariCP 连接池设置。默认值对大部分服务器适用。