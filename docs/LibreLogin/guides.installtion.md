# 插件安装

## 获取

若你在 Paper 服务端上安装 LibreLogin，你还需要安装 ProtocolLib。

你可以从下面这些链接下载本插件：

* [Github Releases](https://github.com/kyngs/LibreLogin/releases)
* [SpigotMC 资源页](https://www.spigotmc.org/resources/librelogin-bungee-velocity.101040/)

## 安装

关闭群组服。

下载 .jar 格式的插件文件，并将其放入你的 `plugins` 文件夹。

启动群组服。

控制台会出现这样的消息：

```Log
[16:39:51 INFO] [librelogin]: Loading configuration...
[16:39:51 WARN] [librelogin]: !! A new configuration was generated, please fill it out, if in doubt, see the wiki !!
```

**之后编辑插件文件夹中生成的 `config.conf` 文件夹。配置中带有注释，让你能更好了解插件。**


## 登录服

你需要选择并保护你的登录服。大多数服主会选择标准的 Minecraft 服务器作为登录服，这样效率不高、存在漏洞且不能承载很多玩家。我推荐使用 [NanoLimbo](https://www.spigotmc.org/resources/nanolimbo-1-8-1-18.86198/) 作为登录服。它轻量、可配置，且能承载至少百名玩家。

## 迁移

**若你不想玩家丢失数据，那这就是最基础的步骤。**

### 从不包含登录插件的离线服务器迁入

[离线 UUID 创建器可能是你最好的选择。](guides.uuid-creators.md#离线cracked)

### 从正版服务器迁入

[Mojang UUID 创建器可能是你最好的选择。](guides.uuid-creators.md#官方mojang)

### 从登录插件迁入

请参阅[数据库迁移](guides.database-migration.md)章节。

若你将 UUID 创建器指定为 RANDOM，则这个选项最适合你。

## 接下来干什么？

现在你能进行下一步操作了。在此之前感谢你选择 LibreLogin 作为登录插件。我推荐你阅读本维基上的另一篇文章，让你能了解插件的全部功能。