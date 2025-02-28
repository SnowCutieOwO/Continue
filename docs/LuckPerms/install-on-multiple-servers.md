# 群组服安装

LuckPerms 自设计之初便为群组服着想。在正确安装与配置之后，权限数据会在群组子服间传输。

在群组中安装 LuckPerms 时，默认的[安装步骤](install-on-a-single-server.md)和[安装需求](install-on-a-single-server.md#要求)仍然有效。

但是，群组服安装有一个额外的要求。    
**所有的 LuckPerms 示例都必须连接至同一个存储系统**。这意味着你只能使用 `MySQL`、`MariaDB`、`PostgreSQL` 或 `MongoDB` 中的一个。LuckPerms 必须连接至同一个 SQL/MongoDB 服务器，且要能读取到同一数据库或集。

## 预安装

在你开始之前，这里有一些东西西需要你预先检查。它们可不会自动设置——这些步骤也非常重要。万不可跳过！

LuckPerms 支持 `BungeeCord`、`Velovity` 或 `LilyPad` 群组核心。

### BungeeCord

LuckPerms 以玩家的唯一标识（UUID）作为存储数据的索引。玩家的唯一标识是由服务器内部提供的，但是这也可通过服务器中的 `online-mode` 设置改变。

在使用 BungeeCord 时，检查 BungeeCord 的 IP 转发系统是否正确设置和配置是**非常重要**的。

在你的 BungeeCord 群组的 `config.yml` 文件中，你需要这样设置：
```YAML
ip_forward: true
```
在每个子服的 `spigot.yml` 中，你需要这样设置：
```YAML
# 该选项可以在 "settings" 下找到
bungeecord: true
```
在每个海绵端子服的 `config/sponge/global.conf` 文件中，你需要这样设置：
<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
sponge {
    bungeecord {
        ip-forwarding=true
    }
}
```
在修改这些设置之后，你就可以重启 Spigot/Sponge 和 BungeeCord 服务器。

你也应该确保服务器防火墙正确启用，以此阻止可疑用户强行进入后端服务器。在 SpigotMC 上有[一篇教程](https://www.spigotmc.org/wiki/firewall-guide/)提供了相关做法。

### LilyPad

若你正在使用 LulyPad，请先阅读 [LilyPad 安装教程](http://www.lilypadmc.org/threads/connecting-your-bukkit-servers.13/)，应先确保 `LilyPad-Connect` 插件正确安装在了子服。

## 在群组服中安装 LuckPerms

在群组服中安装 LuckPerms 非常简单，这里有些在你安装每个实例时需要修改的选项。

更具体的[安装教程](https://luckperms.net/wiki/Installation)可以指导你在子服安装 LuckPerms。应当在群组下的每个子服都按步骤操作。（大多数情况下只需将插件放入 plugins/mods 文件夹即可）

在安装了 LuckPerms 之后，你需要关闭服务器，打开主配置文件，并将注意力集中在下文的选项：

[**`server`**](configuration.md#server)

若你想要在安装时就设置权限或继承权限组，你就需要修改配置文件中 `server` 的值。（这部分配置文件就在配置文件的最顶上！😄）

这个值用于决定一个“服务器”对所有玩家进服时的上下文[^1]。

[**`storage-method`**](configuration.md#storage-method)

正如在页面顶所述的那样，若你想要在子服之间同步数据，那么子服安装的所有 LuckPerms 都需要连接到同一个服务器。

这意味着 `storage-method` 只能是 `mysql`、`mariadb`、`postgresql` 或 `mongodb`。请不要忘了在配置文件中填写数据库的连接凭证！

[**`messaging-service`**](configuration.md#messaging-service)

“通信服务”是 LuckPerms 内的一个功能，允许服务器在权限数据发生改变时提醒其他服务器。该功能也允许条目在群组之间调配。

* 若你正在运行群组服但群组服核心未安装 LuckPerms，且子服使用的是同一数据库，那么请将使用的数据库设置为 `sql`。
* 若你正在运行小规模群组服且有一个 BungeeCord/Velocity 群组服核心安装了 LuckPerms，那么请将使用的数据库设置为 `pluginmsg`。
* 若你搭建的是基于 LilyPad 的群组服，那么将该选项设置为 `LilyPad`。
* 若你正在运行群组服且有多于一个 BungeeCord/Velocity 核心，那么建议搭建一个 Redis 通信服务器（若你正在运行的是多于一个群组的服务器，那么我默认你已知道这些！），并将该选项设置为 `redis`。在更改该选项后别忘了填写登录凭据设置！

## BungeeCord/Velocity 版的 LuckPerms

有一个常见的错误观点是，在群组服核心上安装 LuckPerms 就不用再在子服上安装一次。这种说法是错误的。

在将 LuckPerms 安装至群组服后，它会做两件事：

* 它会通过**群组中的插件**处理权限检查。它*不会*拦截或处理子服插件中的权限检查。
* 在 `messaging-service` 设置为 “pluginmsg” 时会将更新提醒和记录日志在群组服之间传递。

这意味着如果你想要用 LuckPerms 在 Spigot 或 Sponge 子服做权限检查，你也需要在子服上安装它，在群组服核心上安装它是不能代替它在子服安装的步骤的。

[^1]: 条件值，即执行命令时的“[情境](features.context.md)”。