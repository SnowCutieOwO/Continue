# Redis

Redis 是一个用于数据缓存及跨服通信的服务器。HuskSync 需要至少 5.0+ 的 Redis 才可与[数据库](setup.database.md)搭配使用。这里有很多种方式安装或获取 Redis 服务器。

为了达到最佳预期，我们建议为本地运行（与其他服务器一并运行）的 Redis 服务器分配 1GB 运行内存。如果你有多台机器，则请在你运行了 Velocity/BungeeCord/Waterfall 的服务器上安装 Redis。

## 什么是 Redis？

[Redis](http://redis.io/)（**RE**mote **DI**ctionary **S**erver，远程字典服务）是一个开源、内存加载数据的存储服务器，可用作缓存、通信断点、流数据引擎或数据库。

HuskSync 需要 Redis，并使用它在玩家切换服务器及主/副通信执行管理员操作（如通过 [`/invsee` 命令](features.commands.md) 更新其他服务器上玩家的数据）时缓存数据。见“[常见问题](features.faqs.md)”章节获取更多信息。

## 配置

若要配置 Redis，找到你的 [`config.yml`](setup.config-file.md)，并修改 `redis` 部分下的内容。将 `broker_type` 设置为 `REDIS`。

::: details 数据库选项（config.yml）
``` YAML
# Redis 设置
redis:
  # 在此指定 Redis 服务器的登录凭证。若未设置登录密码，则将 "password" 项留空
  credentials:
    host: localhost
    port: 6379
    password: ''
    use_ssl: false
  # Redis 哨兵模式相关设置。请勿擅自修改，否则后果自负！
  sentinel:
    # 哨兵模式的主节点名称
    master: ''
    # 地址:端口列表
    nodes: []
    password: ''
```
:::

### 凭据

在你的 Redis 上输入域名、端口及默认的用户密码。

如果你的 Redis 默认用户没有密码，则将其留空（`password: ''`），之后插件就会尝试不带密码连接数据库。

### 默认用户密码

取决于你安装的 Redis 版本，它有可能设置随机默认用户密码。你可以在 Redis 的服务器配置中找到这些。你可以在 `redis-cli` 中通过如下命令清理默认用户的密码。

``` bash
requirepass thepassword
user default on nopass ~* &* +@all
```

#### 使用 Redis 哨兵

若你在使用 [Redis 的哨兵模式](https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/)，可以在 `sentinel` 部分下进行设置。

你需要提供主集合的名称，哨兵的密码及按 `地址:端口` 格式填写的列表。

## 获取 Redis 服务器

使用 HuskSync 必须使用 Redis 服务器。在不同服务器上获取 Redis 的教程可以在下文找到。HuskSync 已经过 Redis 公开包调试，但应该也可以和其他分支的 Redis 或相关软件兼容。

为了达到最佳预期，我们建议为本地运行（与其他服务器一并运行）的 Redis 服务器分配 1GB 运行内存。如果你有多台机器，则请在你运行了 Velocity/BungeeCord/Waterfall 的服务器上安装 Redis。

### 若你正在使用服务器托管

联系服务器提供商并请求其为你搭建 Redis。你可以向他们提供本页面的相关描述。如果还在找支持 Redis 的服务器提供商，我们的[服务器提供商列表](https://william278.net/docs/website/redis-hosts)中提到了有关内容。

如果你的服务器提供商没有提供 Redis，你就需要考虑 HuskSync 是否真的适合你了。如果你仍然需要 HuskSync，你可以选择通过 DigitalOcean 等机构租赁外部的 Redis 服务器，尽管我们不推荐这么做，这会导致游戏服务器及缓存之间的延迟增加，从而影响同步性能。

### 在 Linux 或 macOS 上的 Redis

你可以在 Linux 的分发上[安装 Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/)。Redis 在大多数包管理仓库中都可以找到。

你也可以在你的 macOS 服务器上[安装 Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/)。

### 在 Windows 上的 Redis

Windows 并不受到 Redis 的官方支持，但这里有一些[非官方移植](https://github.com/tporadowski/redis/releases)，你可以将其安装在 Windows 系统上，它运行良好。

如果你喜欢，你也可以[通过 WSL 安装 Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/)。

### Pterodactyl（翼龙面板）/ Pelican 面板托管

如果你在翼龙或 Pelican 面板上托管服务器，你也需要安装 Redis，并可以将其应用于服务器上的 HuskHomes。

如果你正在同一节点上运行 Redis 和服务器，你需要以 `172.18.0.1` 为地址（或其他等价设置，取决于你的网络设置），并将其在 Redis 的配置中绑定（nano /etc/redis/redis.conf）。

你也需要将 `requirepass` 部分的配置取消注释，并为其设置一个密码使得其能被访问，或禁用 `protected-mode` 设置。在设置密码并通过命令 `systemctl restart redis` 重启 Redis 服务器后，你也需要在你的翼龙面板 `.env` 中更新密码（`nano /var/www/pterodactyl/.env`）并通过 `cd /var/www/pterodactyl && php artisan config:clear` 刷新缓存。

你也可能也需要在 Linux 分发的防火墙上放行特定连接。