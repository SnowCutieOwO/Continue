# 安装教程
本章节将会引导你将 HuskSync 安装至 Spigot、Fabric、Sponge 或群组子服上。

## 安装需求

::: info 提示
若插件载入失败，请检查你是否运行了[不受支持的版本](setup.compatibility.md)。
:::

* 以 Java 17+ 运行的 Spigot（1.17.1+）、Fabric（最新版 Minecraft）、Sponge（API v10）的 Minecraft Java 版服务器；
* （对群组服）群组服核心（Velocity、BungeeCord） 和 MySQL（v8.0+）MariaDB 或 PostgreSQL 数据库；
* （可选的 [Redis 支持]）Redis 数据库（v5.0+）

## 为服务器下载 HuskHomes

从[最新版的发布页](https://github.com/WiIIiam278/HuskHomes/releases/latest)为你的服务端下载对应的 jar 文件：

* 对于 Spigot 或 Paper 服务器，请下载 `HuskHomes-Paper` jar 文件；
* 对于 Fabric 服务器，请下载 `HuskHomes-Fabric` jar 文件；
* 对于 Sponge 服务器，请下载 `HuskHomes-Sponge` jar 文件。


## 单服安装步骤

### 1. 安装 jar 文件

* 将插件拖放至每个 Spigot 服务器的 `/plugins/` 或 Fabric/Sponge 的 `/mods`文件夹下；
* 你不需要将 HuskSync 安装在群组服上。

### 2. 重启服务器并修改配置

* 开启，之后关闭服务器，使 HuskSync 生成一份配置文件；
* 你现在可以按喜好编辑[配置文件](setup.config-files.md)与本地语言文件了。

### 4. 重启服务器

* 再次启动服务器即可享受 HuskHomes 的功能！

- - -

## 群组服安装教程

这些教程用于指导在多个 Spigot、Fabric 或 Sponge 服务器上安装 HuskHomes 并使其一同工作。另外本功能需要（v8.0+ 的）MySQL。

### 1. 安装 jar 插件

* 将插件拖放至每个 Spigot 服务器的 `/plugins/` 或 Fabric/Sponge 的 `/mods`文件夹下；
* 你不需要将 HuskHomes 安装在群组服上。

### 2. 重启服务器

* 开启，之后关闭服务器，使 HuskHomes 生成一份配置文件；
* 对于高级用户：如果你喜欢的话，你可以自己创建一个 config.yml 文件并使得每个子服的 `/plugins/HuskHomes/`（或 `/config/huskhomes/`） 文件夹同步，更方便地更新配置文件。

### 3. 配置服务器启用跨服模式

* 找到每个子服上的 HuskHomes 的[配置文件](setup.config-files.md)（Spigot 端为 `~/plugins/HuskHomes/config.yml`，Fabric/Sponge 端为 `~/config/huskhomes/config.yml`）；
* 在 `database` 部分配置下，将 `type` 的值设置为 `MYSQL` 或 `MARIADB`（取决于你使用了哪种服务器）；
* 在 `mysql/credentials` 部分配置中，输入你的 MySQL、MariaDB 或 PostgreSQL 数据库登录凭据；
* 下滑并找到 `cross_server` 设置，将其修改为 `true`；
* 若你喜欢，你可以配置 Redis 服务器用于网络通信（若要如此，请将 `messenger_type` 设置为 `REDIS`）；
* 保存配置文件。请确保所有子服的配置文件都更新过。

### 4. 重启服务器并设置 serverl.yml 值

* 再次重启每个子服，你可以在先前的插件文件夹中发现 `serverl.yml` 文件；
* 打开文件，将 `name` 项的值改为群组核心配置中设置的此服务器名称（如，服务器在群组服核心配置中名称为“hub”，游戏内可通过命令 `/server hub` 进入本服，则将此处配置的值改为“hub”）。

### 5. 再次重启服务器

* 请确保你输入的 MySQL 数据库凭证正确，若正确则你的群组现在就在跨服使用 HuskHomes！
* 你可以按需决定是否删除一开始生成的 `HuskHomesData.db` SQLite 文件。

::: deatils 跨服随机传送

在使用跨服随机传送时，下面三项必须为 true。

1. 必须将 `rtp.cross-server` 为 `true`。
2. 你必须使用 Redis 作为消息代理。
3. 在 `rtp.random_target_servers` 必须匹配 `server.yml` 与群组端配置的值！

:::

## 下一步

* [命令与权限](features.commands.md)
* [配置文件](setup.config-files.md)
* [数据库](setup.database.md)
* [Redis 支持](setup.redis-support.md)
* [语言贡献](guides.translations.md)