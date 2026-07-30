# PostgreSQL Storage

本章节讲述的是 Dynmap 其中一种的存储方式。它是较为进阶的存储结构，可以通过独立设备托管需预先安装的数据库，我们稍后会讲到。

抱歉，我得自己学习一下如何安装这些服务器。有关教程可以在 <https://www.postgresql.org/> 找到。

## 配置 Postgres 数据库

通过托管服务器的终端创建新数据、添加新数据库用户。

## 在 Postgres 中新建数据库

你可能会注意到输入命令后出现了 `CREATE DATABASE` 这样的内容，这是正常现象。

``` txt
C:\Program Files\PostgreSQL\15\bin>psql -U postgres
Password for user postgres:
postgres=# CREATE DATABASE <DATABASE_NAME>;
CREATE DATABASE
```

::: deatil 示例

``` txt
C:\Program Files\PostgreSQL\15\bin>psql -U postgres
Password for user postgres:
postgres=# CREATE DATABASE dynmap;
CREATE DATABASE
```

:::

## 添加新用户

::: info

若 Postgres 与游戏处于同一服务器，那么 `<游戏服务器地址>` 应为 `localhost`。

:::

``` txt
postgres=# CREATE USER <Dynmap 用户> WITH PASSWORD '';
CREATE ROLE
postgres=# ALTER DATABASE <Dynmap 数据库> OWNER TO <Dynmap 用户>;
ALTER DATABASE
```

::: detail 示例

``` txt
postgres=# CREATE USER dynamp WITH PASSWORD 'CHANGE_ME_QUICK';
CREATE ROLE
postgres=# ALTER DATABASE dynmap OWNER TO dynmap;
ALTER DATABASE
```

:::

若你输入错误，需要删除用户，你可以这样做：

``` txt
postgres=# DROP USER ;
```

创建新用户之后，可以试着登入。（需要先通过 `exit` 从 Postgres 用户登出）

``` txt
postgres -u 
psql (15.3)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#
```

## Postgres 权限

Postgres 可以分配给用户这些权限：

* `ALL PRIVILEGES` - 获得所有权限
* `CREATE` - 允许用户创建数据库/数据表
* `DELETE` - 允许用户从表中删除（数据）行
* `DROP` - 允许用户删除整个数据库/数据表
* `INSERT` - 允许用户向表中插入（数据）行
* `SELECT` - 允许用户从数据库中读取数据
* `UPDATE` - 允许用户更新数据表中的数据

### 编辑 dynmap/configuration.txt

Postgres 的数据库驱动（应该是 JDBC，需验证）已经内置。

最后一步就是配置 Dynmap 的 `configuration.txt`，使插件能访问数据库，用于存储数据。找到并修改如下部分的配置：


``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  type: filetree
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  #type: mysql
  #hostname: localhost
  #port: 3306
  #database: dynmap
  #userid: dynmap
  #password: dynmap
  #prefix: ""
  #flags: "?allowReconnect=true&autoReconnect=true"
```

将其改为：

::: detail 启用 PostgreSQL

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  #type: filetree <- DONT FORGET TO COMMENT THIS OUT
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  type: postgres
  hostname: <postgres_ip/postgres_hostname/postgres_domain>
  port: 5432
  database: <Dynmap 数据库>
  userid: <Dynmap 用户>
  password: <Dynmap 用户_PASSWORD>
  prefix: "" # Can add prefix for tables if you want
  flags: "?allowReconnect=true&autoReconnect=true"
```

:::

示例：

::: detail PostgreSQL 示例

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  #type: filetree <- DONT FORGET TO COMMENT THIS OUT
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  type: postgres
  hostname: localhost
  port: 5432
  database: dynmap
  userid: dynmap
  password: CHANGE_ME_QUICK!
  prefix: "" # Can add prefix for tables if you want
  flags: "?allowReconnect=true&autoReconnect=true"
```

:::

保存配置文件，启动游戏服务器，检查 Dynmap 是否能成功连接到 PostgreSQL。

## 安装后

经过测试，能正常创建数据库的步骤就是这些。不过我的用户权限可能有些设置问题，这个需要你自己解决。