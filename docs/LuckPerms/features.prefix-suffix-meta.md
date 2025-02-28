# 前缀、后缀与元数据
本章节将会引导你如何设置与管理 LuckPerms 的前后缀与元数据。

若你已经对这些概念了如指掌，只需要查询有关的命令，你可以转至[命令用法：元数据](command-usage.meta.md)章节。

## 关键定义

### 前/后缀

在 Minecraft 服务器中的前后缀一般是聊天栏玩家名称前后显示的一段文本。

例如，这是一段聊天消息：

```
[Admin] Luck the great: Hello!
```

前缀即为 `"[Admin] "`部分，而后缀则为 `"the great"` 部分。

### 元数据 

或称“选项”、“变量”，元数据是一系列与玩家或权限组相关联的数据形式。与权限不同的是，元数据会被分为两部分，即“键”与“值”。键即为元数据的名称，值即为元数据的数据值。

例如，我的玩家可能会有这些元数据，来显示他们最多可拥有 5 个家传送点，且他们的名称颜色应该是蓝色。

```
max-home = 5
username-color: blue
```

## 谁提供了这些？

一般来说，在服务器中提供了管理权限的插件都能允许你设置、管理和存储前/后缀/元数据。至少在 LuckPerms 中是这样的。

部分权限插件也会提供将此类内容显示在聊天栏中的方法。但很可惜 LuckPerms 不能这么干，所以你需要额外的聊天插件来手动添加。我们稍后会提到这些。

## 前/后缀/元数据的存储方式

LuckPerms 中的前后缀会转化为权限节点并依此方式存储。你可以注意到的是，在你向指定玩家/权限组添加前后缀之后，它们的权限数据中会多出一条你刚才所设置的内容。为什么这样做？好吧，从插件编写的角度来说这可以更容易些，让所有数据都存在同一个地方，格式也相似。这也表示你也可以像管理权限一样管理这些数据。

前后缀被分为两部分：

* **权重** - 这就是决定前/后缀优先级的数字。数字越大 = 权重越大，优先级越大
* **值** - 这就是前后缀实际显示的内容。

权重为 100 的前缀 `"[Admin] "`，以权限的方式表示即为：`prefix.100.[Admin]`。

元数据的存储方式大致相同。一个元数据键值对，如 `favorite-color=red`，以权限的方式表示即为 `meta.favorite-color.red`。

## 前后缀权重的生效方式

前后缀可以像权限一样被继承。这表示 LuckPerms 需要决定玩家究竟使用哪个前/后缀。

在其他插件请求查看玩家的前/后缀时，LuckPerms 会：

* 收集玩家拥有的所有前/后缀并一同继承
* 按权重排序，权重越高 = 优先级越大
* 然后选择权重最高的前/后缀并将其作为前/后缀的返回内容

如果最终结果包含了多条权重相同的前/后缀，离玩家最近的那条会被优先采用。“最近”表示插件在搜索条目时所发现继承关系最简单的权限。

## 我怎么给玩家设置前后缀

例如，我想要“admin”组玩家拥有“&c[Admin] ”前缀，“mod”组玩家拥有“&d[Mod] ”前缀，我会按顺序执行这些命令：

* /lp creategroup admin
* /lp creategroup mod
* /lp group admin parent add mod
* /lp group admin meta addprefix 100 "&c[Admin] "
* /lp group mod meta addprefix 90 "&d[Mod] "

如果我想要将“admin”组的前缀颜色改为“&4”，并且移除之前设置的值，我会执行这条命令：

* /lp group admin meta removeprefix 100

这会移除所有设置在“admin”组中，权重为 100 的前缀。然后我可以重新为这个组设置前缀。

设置临时前/后缀的命令格式与添加临时权限或临时继承组的格式大致相同。

完整命令列表可以在[这里](command-usage.meta.md)找到。添加和移除元数据的命令也可在这里查阅。

## 我如何查看指定玩家或权限组拥有的前后缀

调试前/后缀最简单的方式就是使用 info 命令。

例如：`/lp user Luck meta info`。这会列出所有玩家拥有和继承的前/后缀与元数据，默认以权重排序，这样你就可以直观地查阅所有数据。

另一个有用的是通用玩家信息命令：`/lp user Luck info`。若玩家在线，则该命令会显示 LuckPerms 当前提供给其他插件显示的前后缀。

## 显示前后缀

上文提及，LuckPerms 不会处理任何聊天格式有关的内容。你需要自行安装外部的聊天插件。

一些推荐的插件在下文列出。

### Bukkit/Spigot

LuckPerms 支持**任何**可以从[Vault](https://dev.bukkit.org/projects/vault)读取数据的聊天格式插件。但是你的服务器也需要安装 Vault 才可让这个功能生效。

若你遇到了插件不能正确读取数据的问题，请确保 `/vault-info` 命令显示的的数据是从 LuckPerms 读取的。

能兼容 LuckPerms + Vault 的聊天格式插件如下：

* [VaultChatFormatter](https://www.spigotmc.org/resources/49016/) - 如果只需要简单的聊天格式，推荐使用这个！
* [EssentialsX Chat](https://essentialsx.net/downloads.html) - 若你已经安装了 Essentials(X)，则推荐你使用这个附属插件。
* [ChatEx](https://dev.bukkit.org/projects/chatex)
* [VentureChat](https://www.spigotmc.org/resources/771/)
* [Stylizer](https://www.spigotmc.org/resources/stylizer.78327/) - 包括聊天格式与 TAB 列表格式。
* [DisplayFormatter](https://github.com/MCMDEV/displayformatter) - 包含聊天格式与 TAB 列表格式，针对 LuckPerms 进行兼容。
* [CarbonChat](https://github.com/Hexaoxide/Carbon)（尚处于 Beta）
* [DeluxeChat](https://www.spigotmc.org/resources/1277/)（付费）
* [ChatControl](https://builtbybit.com/resources/18217)（付费）
* [CMI](https://www.spigotmc.org/resources/3742/)（付费）
* [BetterPrefix](https://www.spigotmc.org/resources/18096/)

一些与 LuckPerms + Vault 兼容的 TAB 列表/头顶名称格式插件如下：

* [NameTagEdit](https://www.spigotmc.org/resources/3836/)
* [TAB](https://github.com/NEZNAMY/TAB)
* [Tab](https://www.spigotmc.org/resources/1448/)（付费）
* [CMI](https://www.spigotmc.org/resources/3742/)（付费）
* [BetterPrefix](https://www.spigotmc.org/resources/18096/)

这个列表不代表所有插件。任何支持 Vault 的插件都支持 LuckPerms！

### BungeeCord

在 BungeeCord 上能兼容 LuckPerms + Vault 的聊天格式插件如下：

* [gChat](https://github.com/lucko/gChat) - 如果只需要简单的聊天格式，推荐使用这个。
* [BungeeChat](https://www.spigotmc.org/resources/12592/)
* [MultiChat](https://www.spigotmc.org/resources/26204/)

在 BungeeCord 上能与 LuckPerms + Vault 兼容的 TAB 列表/头顶名称格式插件如下：

* [BungeeTabListPlus](https://www.spigotmc.org/resources/313/)
* [TAB](https://github.com/NEZNAMY/TAB)

### Sponge

* [Nucleus](https://nucleuspowered.org/) - 一个类“Essnentials”的插件，也包含了[聊天格式模块](https://nucleuspowered.org/docs/modules/chat.html)。 

### Fabric

* [Styled Chat](https://modrinth.com/mod/styled-chat) - 使用 [Fabric TextPlacholderAPI](https://placeholders.pb4.eu/)，包含了聊天格式 - 需要注意的是你需要手动配置，并安装 [LuckPerms **Fabric** PlaceholderAPI Addon](https://luckperms.net/download) 才能让这个模组与 LuckPerms 一并运行。
* [Styled Player List](https://modrinth.com/mod/styledplayerlist) - 使用 [Fabric TextPlacholderAPI](https://placeholders.pb4.eu/)，包含了 TAB 列表格式 - 需要注意的是你需要手动配置，并安装 [LuckPerms **Fabric** PlaceholderAPI Addon](https://luckperms.net/download) 才能让这个模组与 LuckPerms 一并运行。
* [GraphiXMod](https://github.com/lochnessdragon/GraphiXMod) - 包含了聊天格式、悬浮字、TAB 列表格式与计分板格式。
* [Chatter](https://github.com/Axieum/Chatter) - 包含了聊天格式与 Discord 集成。

### Forge

* [BetterForgeChat](https://www.curseforge.com/minecraft/mc-mods/betterforgechat-with-luckperms-support) - 包含了聊天格式、TAB 列表格式、FTB Essentials 昵称，支持 Markdown 格式。