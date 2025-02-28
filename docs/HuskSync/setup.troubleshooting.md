# 排除问题
本章节包含了一系列经常会遇到的问题与相应的解决方法。

## 常见问题

### 数据库包含重复的 UUID

该问题常出现在离线服务器上。我们[不为此类服务器提供支持](https://william278.net/terms)，我们唯一能给予你的建议是：

* 确保每个子服的 `paper.yml` 下的 `bungee_online_mode` 设置项正确；
* 确保你的登录插件对每个 Spigot/Fabric 子服的玩家都有独立有效的 ID。

### 不能为高于服务器版本的 Minecraft 客户端设置数据

在你尝试将新版本的 Minecraft 用户数据迁移到旧版本，或是你的 Spigot/Fabric 服务器使用了与客户端不匹配的版本时，这种情况经常出现。

HuskSync 会尝试鉴定版本并阻止同步。你的 Spigot/Fabric 服务器必须使用相同版本的 Minecraft 和 HuskSync。

### 玩家数据同步出错

这可能是你的 Spigot/Fabric 服务器和 Redis 服务器时间不同所导致的。HuskSync 有自带的方法来纠正这一问题。
尝试连续增加配置文件中 `network_latency_milliseconds` 项的值来解决这一问题。

### 死亡不掉落与数据同步的问题

使用了[死亡不掉落](guides.keep-inventory.md)（玩家死亡后不会掉落背包物品）的服务器，可能会出现此类数据同步的问题。见[死亡不掉落](guides.keep-inventory.md)章节来确认该问题出现的原因，并找到相应的解决方法。

### 通过 Snappy（轻量的 Linux 发行版）压缩数据时出现问题

一些 Linux 的轻量化的发行版，例如 Alpine Linux（在 Pterodactyl 上被使用）可能缺少 [Snappy](https://github.com/xerial/snappy-java) 数据压缩所需要的前置。这可以通过将配置文本中的 `compress_data` 项修改为 false 来解决。注意，在修改该设置之后你需要重启你的数据库。或者，为你的发行版找到压缩数据的前置！

### Pterodactyl / Pelican 上的 Redis 连接出现问题

Pterodactyl 内置的防火墙可阻止 [Redis](setup.redis.md) 服务器在各子服之间的通信。请为每个服务器添加信任，使其能在子服之间通信。使用 egg 安装 Redis 可能比后端的内部服务更加方便。见我们有关在[翼龙或 Pelican 面板上运行 Redis](setup.redis.md#pterodactyl翼龙面板-pelican-面板托管)的提示。

### Pterodactyl/Pelican 上的数据库连接出现问题

若连接至面板的[数据库](setup.database.md)服务器数量大于一个，你可能需要在配置字段中加入 `useSSL=true` 的字样。

### 服务器重启后玩家数据同步出错

有时候你使用的重启方式可能会引起这个问题。请检查你的服务器是否以如下方式重启：
* `/restart`（这个奇葩的 Spigot/Fabric 命令用的是相当古旧的 bash 脚本）
* 任何重启插件，如 UltimateAutoRestart（这些插件基本就是调用了 API 来重启，而它所使用的重启方法与上一条无异）
大多数情况下这些重启方法都**不**与 HuskSync **兼容**，因为这些方法重启服务器的逻辑相当奇怪且难以预测，使得 HuskSync 很难在此之前执行自己的关闭逻辑。若要安全重启你的服务器，请使用：
* Pterodactyl 执行的定时任务。这会执行关机命令（并在虚拟容器完全关闭时再次重启）。
* 发送停止命令 / 关机命令的 cronjob 定时任务，监听服务完全终止后才会发送启动命令
* 若要手动重启，只需执行命令 `/stop` 并使用命令行启动服务器，这个方式非常安全。

不建议让插件帮你重启。插件只能在它被启用时控制服务器，并且必须依赖脚本才可重启服务器，而脚本重启是不安全的。