# 安装与更新

## 安装

1. 确保你使用了**Bukkit/ Spigot 服务端核心**。你可以在这里找到有关服务端搭建的更多信息：https://www.spigotmc.org/wiki/spigot/
    需要注意的是，插件一开始是设计与 CraftBukkit（或相似的 Spigot）一同使用的。Bukkit 的 API 缺少了一些插件正常运行的必要内容。这表示**其他服务端核心**（Tekkit、Forge 等）不兼容此插件。

    其他 **CraftBukkit 或 Spigot 改版/分支***可能*兼容，但不会受到官方支持。如果你在使用这些核心运行本插件时遇到问题，请先通过安装最新版的 Spigot 核心来排除服务端本身的问题。

2. 在这里**下载**最新版的 Shopkeepers：https://dev.bukkit.org/projects/shopkeepers/files
    每个发行版都会标注其支持的 Bukkit/Minecraft 版本。

3. 关闭服务器。将 `Shopkeeper.jar` 放入服务器的 `plugins` 文件夹。之后重启服务器。

4. 检查控制台日志是否存在报错，确保一切正常工作。

安装成功后，你可能需要进行一些额外设置。

* 可选：本插件将会在 `Shopkeepers` 文件夹下生成一个 `config.yml`。这里有一些你可以自行调整的选项。你可以阅读[配置文件](installtion-updating.configuration.md)章节了解更多。
* 可选：如果你安装了权限管理插件，你可能需要将对应权限分配给玩家和管理组成员。你可以阅读[权限](installtion-updating.permissions.md)章节了解更多。
* 一切准备妥当之后，你就可以着手[创建商店](creating-shops.md)了！
* 如果你遇到了问题（或者有其他想问的），那么阅读[常见问题](more-information.frequently-asked-questions.md)章节。

## 文件夹结构

本插件会在服务器的插件目录下创建存储文件夹：`<服务端路径>/plugins/Shopkeepers/`

整个文件夹结构会像这样：

```Ruby
../plugins/ # 服务的插件文件夹
    +--Shopkeepers/ # 插件的存储文件夹
        |-- config.yml # 配置文件
        +-- data/
            |-- save.yml # 已保存的商店数据 (商店, 交易记录, ..)
            |-- save.yml.tmp # 临时文件, 仅在保存插件数据时短暂存在
        +-- lang/
            |-- language-en-default.yml # 默认的语言文件, 无法修改, 用作其他语言的模板
            |-- # 额外的语言文件 (可选)
        +-- trade-logs/
            |-- # CSV 交易记录文件 (如果配置文件启用了交易日志)
```

## 更新

大多数情况下，更新本插件只需关闭服务器、替换 Shopkeepers.jar，然后重启服务器。

不过，为确保问题不会出现，建议按照如下步骤进行更新：

1. 阅读自当前安装版本至最新版**所有**更新的[**更新日志**](https://github.com/Shopkeepers/Shopkeepers/blob/master/CHANGELOG.md)。有些时候这些日志包含了潜在问题与迁移指导。如果你正在从远古版本迁移至新版，你甚至可能需要从插件初次发布的日志读起，因为最新版不一定能支持从你安装的版本迁移数据。
2. **备份**本插件的文件夹，防止数据丢失。
3. 有些时候默认的配置文件会发生变化，新的设置会生成而旧设置会被删除。检查更新日志来确认任何需要手动**迁移**的**配置选项**。如果你遇到了可能会删除配置文件的情况，请让插件先生成一份默认文件，然后对着它将旧版配置逐一应用。