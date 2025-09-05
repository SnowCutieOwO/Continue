# 世界管理器创建世界

大部分世界管理器都有自己设置/修改世界生成器的方法，其中一些可能不支持使用自定义生成器。如果你不确定你使用的多世界插件是否支持自定义生成器，或不知道如何使用，请在联系 Terra 支持频道前查阅对应插件的文档。

世界管理插件种类繁多，我们不可能逐一列出讲述。如果你还不确定你想要使用哪个世界管理插件，我们在本教程中推荐使用 [Multiverse Core](https://github.com/Multiverse/Multiverse-Core/wiki/)。

::: warning

有些时候，世界管理插件会在初始化时未能正确设置生成器，这可能导致世界存坏的相关问题，例如突兀的区块生成。

因此我们推荐在通过世界管理器设置后，[在 Bukkit 配置](getting-started.bukkit-installation.md#世界创建)再设置一次，以避免**世界管理器出错**时地形无法生成。

:::

## Multiverse Core

若要使用 Multiverse Core 创建 Terra 世界，请在 Multiverse 的[创建命令](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#create-command)后添加如下参数：

`-g Terra:<包 ID>`

Terra 自带一个主世界地形包，其 ID 为 `OVERWORLD`。如果你没有预先安装其他配置包，则请将 `<包 ID>` 替换为 `OVERWORLD`。

如下命令会创建名为 `example_world`，环境为 `NORMAL`，并使用默认 `OVERWORLD` 包的世界：

`/mv create example_world NORMAL -g Terra:OVERWORLD`

## 问题排查

如果你在世界设置过程中碰到了问题，请确保你仔细按照各个步骤进行了设置。在服务端日志中检查可能出现的报错，并尝试自行排除问题所在。

如果你未能成功创建世界，并且尝试自行解决无果，随时可以[寻求帮助](contact-and-support.md)并提供相关信息，尤其是上述的日志！