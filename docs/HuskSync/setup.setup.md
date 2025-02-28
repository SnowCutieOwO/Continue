# 安装教程

本章节将会引导你安装 HuskSync 至你的 Spigot 或 Fabric 群组子服上。请先检查服务器[兼容性](setup.compatbility.md)，并为服务器下载对应版本的 HuskSync。

## 安装需求

HuskSync 需要一个数据库服务器，一个 Redis 服务器，以及任何与其兼容的 Minecraft 服务器：


* 任意数量的基于 Fabric 或 Spigot/Paper 的服务器。
    * 每个服务器运行的 Minecraft 版本必须相同
    * 不可以在 Fabric 和 Spigot 单端间同步数据
    * HuskSync 不应安装在你的 Velocity、BungeeCord 及 Waterfall 群组端上
* 运行了 MySQL v8.0+、MariaDB v5.0+、PostgreSQL 或 MongoDB 之一的[数据库](setup.database.md)服务器。
* [Redis](setup.redis.md) 数据库（5.0 或更高版本）

## 安装步骤

在你开始之前，请先关掉群组上的所有服务器。推荐进行备份。

### 1. 安装 jar 文件

* 将插件拖放至每个 Spigot 子服的 `/plugins/` 文件夹下；
* 无需将 HuskSync 安装在群组服上。
* 额外地，你可以安装 [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) 或 [PacketEvents](https://www.spigotmc.org/resources/packetevents-api.80279/) 加强对锁定用户处理能力，或安装 [Plan](https://www.spigotmc.org/resources/plan-player-analytics.32536/) 插件来快速统计玩家数据。

### 2. 重启服务器

* 开启，之后关闭服务器，使 HuskSync 生成一份[配置文件](setup.config-file.md)；
* HuskSync 会因无法连接到数据库后在控制台报错并自行禁用。鉴于你还未设置登录凭据，所以这是预料之内的；
* 对于高级用户：如果你喜欢的话，你可以自己创建一个 config.yml 文件并使得每个子服的 `/plugins/HuskSync/` 文件夹同步，更方便地更新配置文件。

### 3. 输入 MySQL 和 Redis 数据库的登录凭据

* 找到每个子服的 HuskSync 的配置文件（一般位于 `~/plugins/HuskSync/config.yml`）；
* 在 `database` 设置区域下的 `credentials` 部分，输入你的 MySQL 数据库登录凭据。通常情况下你不应该动 `connection_pool` 部分设置的任何内容；
* 在 `redis` 的 `credentials` 设置中，输入你的 Redis 数据库登录凭据。如果你的 Redis 数据库没有设置密码，请将密码一项留空（译者注：即空字符串 '' 或 ""）；
* 除非你在一个群组下区分多个子群组，每个子群组之间的玩家数据相互隔离，否则不应更改 `cluster_id` 的值。

::: details MongoDB 用户 - 额外安装步骤

* 找到服务器上的 HuskSync 配置文件（`~/plugins/HuskSync/config.yml`）。
* 将 `database` 下的 `type` 值设置为 `MONGO`。
* 在 `database` 下的 `credentials` 配置中，输入 MongoDB 数据库的登录凭据。切记不要擅自修改 `connection_pool` 部分的设置。
* 在 `mongo_settings` 下的 `parameters` 部分，确保指定的 `&authSource=` 符合你使用的数据库（默认为 `HuskSync`）。

:::

::: details 对 MongoDB Atlas 用户的额外配置

* 找到服务器上的 HuskSync 配置文件（`~/plugins/HuskSync/config.yml`）。
* 将 `mongo_settings` 下的 `using_atlas` 设置为 `true`。
* 将 `mongo_settings` 下的 `parameters` 中的 `&authSource=HuskSync` 部分删去即可。
（在使用 Atlas 时自动无视 `credentials` 下 `port` 设置的值）

:::

### 4. 在 server.yml 文件中设置服务器名称

* 找到服务器上的 HuskSync 服务器名称配置文件（~/plugins/HuskSync/server.yml）
* 将该文件中的 `name:` 后的值改为自己的服务器名称，与群组服核心配置中设置的服务器名字相同（示例，若此服务器名称为“hub”，也就是在切换服务器时输入的命令是 `/server hub`，那么就把 `'hub'` 填在该设置的末尾）

### 5. 再次重启每个子服

* 若提供的 MySQL 和 Redis 数据库登录凭据有效，服务器开启之后数据同步功能就会正常运行；
* 若你需要从 HuskSync 1.x 版本或 MySQLPlayerDataBridge 导入数据，请浏览下方的教程：
  * [从旧版迁移](guides.legacy-migration.md)
  * [从 MPDB 迁移](guides.mpdb-migration.md)
