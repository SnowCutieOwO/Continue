# FAQ

## 常见问题

这里有一些常被问到的问题。问问题之前请先来这里检查一下是否有相应的答案。

**提示：记得留意控制台是否在开服或其他时候存在报错！**

### 为什么权限不正常工作？

首先，*请确保 LuckPerms 是你唯一安装的权限插件！*我们碰到过太多太多装了 LuckPerms 而忘记把诸如 PermissionsEx 的其他权限管理插件给删掉的用户了。你*必须*移除其他的权限管理插件，不然的话 LuckPerms 就不会处理权限。唯一的例外就是你需要将其他权限插件的数据转移至本插件时，你可以把它们留在服务器里一小会，丹青确保在这之后删掉原本的权限管理插件。

若 LuckPerms 是你唯一的权限插件，问题可能出在你没有输对权限。请确保在给予权限前你阅读了插件相关的文档。如果连文档也不能找到你想要的权限，那么你可以使用[权限检查系统](features.verbose.md)来确认插件究竟在检查玩家的哪些权限，以及 LuckPerms 对用户基于相关权限返回的值。

如果你开的是安装了 LuckPerms 的 Fabric 服务端，你**不能在原版命令上通过权限限制**。与 Bukkit/Spigot 和 Sponge 不一样，Fabric 对原版命令并未加入权限相当检查。这当然不是 LuckPerms 的问题。尽管如此，Fabric 能修改基础游戏，所以你可以加一个能实现此类效果的模组来让这些命令能被权限限制，例如 [Minecraft Command Permissions](https://github.com/lucko/minecraft-command-permissions-fabric) 或 [Command Hider](https://github.com/LoganDark/fabric-command-hider)。

需要注意的是，单独的模组可能也不支持权限限制，毕竟 Fabric 的权限概念不如 Bukkit/Spigot 或 Sponge 那样标准化。

### 为什么前/后缀不工作？

大部分情况下，这不是 LuckPerms 的问题，但你仍然可以按如下步骤排除问题：

* LuckPerms *不*是聊天插件，如果需要让聊天栏或 TAB 列表带有前后缀，你可能需要安装额外的插件；
    * 若你正在使用基于 Bukkit 的服务器（CraftBukkit、Spigot 或 Paper 及其下游分支），你还需要安装 [Vault](https://dev.bukkit.org/bukkit-plugins/vault/)。
    * 你还可以在[这里](features.prefix-suffix-meta.md#显示前后缀)找到一些市面上流行的聊天插件。
* 首先，你应该检查你的前后缀是不是通过 LuckPerms 设置的 —— 输入命令 `/lp user <玩家名称> info` 并检查前后缀一栏是否正确显示了你要设置的称号。如果是的话，那就对了！
* 若你在使用 Essentials，请确保你安装了 [EssentialsX 和 EssentialsXChat](https://ci.ender.zone/job/EssentialsX/)。可别漏了名称里的 X！其他版本的 Essentials 可能不会与 LuckPerms 正常工作。
    * 输入命令 `/ess version` 来检查你的 Essentials 安装信息，这也会显示 Vault 是否安装在服务器上，以及你所使用的权限插件 —— 一般显示的就是 LuckPerms！如果你输入的命令只显示了“重载了 Essentials [版本号]”一类的消息，那么你正在运行的 Essentials 版本是过时的，应该升级到 EssentialsX（可点击上述链接进入）。
    * Essentials 提供了诸如 `{DISPLAYNAME}` 等的内建变量，这个变量将前后缀与显示名称结合在了一块，你可以将 Essentials 配置中的 `add-prefix-suffix` 项设置为 `false`。
* 你的前后缀显示了，但不是你想要的内容？可能是设置了错误的权重导致的。如果你输入 `/lp user <玩家名称> meta info` 然后看见了一串 0，或者一大堆数字（属性）都是相同的，那么 LuckPerms 是取了这之间数字最大或者最靠前的一个，将其当做了玩家最终显示的前后缀。若要修改这个行为，你需要[使用正确的命令重设前后缀](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setprefix-权重-前缀-上下文) —— 或者可以通过网页编辑器直接编辑左侧的数字。前后缀都是以权限节点的形式存储的，与其他权限一样，它们一般会遵循这个格式：`prefix.100.[Admin]` —— 这里的 `100` 就是权重，也就是你需要编辑的数字。
* 最后，LuckPerms 配置的 `meta-formatting` 是非常重要的，除非必要否则不应修改这部分（例如[前后缀堆叠](how-to.stack-prefixes.md)）。如果你的前后缀工作不正常，很有可能就是这部分配置导致的。若你需要将其设置为默认，请确保 `format` 部分的格式与下文一致：
```YAML
format:
  - "highest"
```

### 我如何让权限在多个服务器之间同步？

这个内容在[网络搭建](install-on-multiple-servers.md)有详细讲述。你也应该读一读[服务器间的数据同步](how-to.switch-storage-types.md)章节。这里是太长不读版：

* 如果是下列情况，你需要在你的群组服核心上安装 BungeeCord 版的 LuckPerms：
    * 你想要管理 BungeeCord 权限（大多数情况下都是为这个来的），或
    * 你将你的 message-service（通信服务处理方）设置为了 `pluginsmsg`（不推荐使用 SQL 数据库时这么干）
* 你需要在你的后端子服（Spigot、Sponge 等）上安装 LuckPerms。
* 你必须在 BungeeCord 配置中启用 IP 转发，且 Spigot 子服在 `config.yml` 中设置了 `bungeecord: true`。
* 你必须在所有子服安装 LuckPerms 时使用同种[远程存储方法](storage.md#远程数据库)（如 MySQL）。这也需要 `storage-method` 在所有子服上的登录凭据都相同。
* 确保你的服务器都正确连接到了服务器，可通过 `/lp info` 命令查看数据库是否连接正常。在 BungeeCord 端上使用命令 `/lpb info`（若出现权限不足的提示，则在控制台执行）。
* 若你在使用的是 MySQL 或 MariaDB，那么你需要将所有子服上的 [`messaging-service`](configuration.md#messaging-service) 设置项调整为 `sql`。这将会在数据库发生变动时在所有服务器上同步数据。

### MySQL 错误

例如：
* LuckPerms 连接至 MySQL 服务器失败
* 我被烦人的 SSL 警告消息刷屏
* “连接关闭后不可进行操作（No operations allowed after connection closed）”错误

请[见此](how-to.fix-storage-errors.md)。

### 我使用的是 SpongeForge，在我安装 LuckPerms 之后，我为什么失去了我的所有权限？

这是 SpongeForge 的默认行为。在权限插件安装后，它会禁用自带的 OP 系统。    
若要修复这个，你需要为用户组或玩家分配对应的权限。若你还是想要 OP 系统一样的运作方式，你可以使用通配符 `*`，但我们[不推荐这么干](https://nucleuspowered.org/docs/nowildcard.html)。

### LuckPerms 支持哪些版本？

LuckPerms 支持从 1.8.8 到最新版的所有 Minecraft 版本。

若你需要在 Bukkit 1.7.10 的服务器上使用 LuckPerms，你需要使用 Bukkit-Legacy.jar，可以在[这里](https://luckperms.net/download)下载。

### 在安装 LuckPerms 后，服务器自动关闭了。

LuckPerms 不会主动关闭你的服务器。

如果你的服务器里安装了 AuthMe，那么请确保你在控制台/日志里看到了这样一段话：

```Log
[AuthMe] Aborting initialization of AuthMe: [InjectorReflectionException]: Could not invoke method 'setup' for fr.xephi.authme.permission.PermissionsManager@xxxxxxxx
[AuthMe] THE SERVER IS GOING TO SHUT DOWN AS DEFINED IN THE CONFIGURATION!
```

若出现了这些提示，则说明你的服务器是被 AuthMe 关闭的，配置中默认设置的行为导致了它会自动将服务器关闭。

若要修复该问题，打开 AuthMe 的 config.yml 并将 `forceVaultHook` 项从 false 改为 true。

（译者注：5.6.0 及其下游分支 [AuthMeReReloaded](https://github.com/HaHaWTH/AuthMeReReloaded) 已不再会出现这类问题，因此可以将该插件升级至最新版来解决此类问题。）

### LuckPerms 不能下载前置库

LuckPerms 需要联网下载依赖库。如果 LuckPerms 不能联网或出于各种原因被阻止，插件将**不会**加载。

> me.lucko.luckperms.common.dependencies.DependencyDownloadException: java.net.ConnectException: Connection refused (Connection refused)

这样的报错意味着：
**a)** 服务器没有联网，或
**b)** 你的服务器提供商阻止了此类连接。

要解决这个问题，你可以参考如下步骤：

* 在本地电脑上安装 LuckPerms（有网就行），然后将 `/LuckPerms/libs/` 下的文件内容复制到服务器上的 `/LuckPerms/libs/` 文件夹。
* 联系你的服务器提供商开放对 [`libraries.luckperms.net`](https://libraries.luckperms.net/) 和 [`repo1.maven.org`](https://repo1.maven.org/maven2/) 的连接。
