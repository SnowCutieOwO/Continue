# Hytale

这是**面向 [Hytale](https://hytale.com/) 的 LuckPerms**，目前它还处于 **beta** 版本，可以从我们的[下载页面](https://luckperms.net/download)获取。与你熟悉的 LuckPerms 一样，承载着来自 Minecraft 的爱意，编织出兼容 Hytale 的代码！🎉

面相 Hytale 的 LuckPerms 同样基于插件/模组的代码。我们相信将 Hytale 支持的 LuckPerms 建立在 Minecraft 已有的雄厚核心库基础上可以使得它有同样稳定且高效地管理权限，甚至可能比那些小型开发者“定制”的插件有更优秀的表现。🥳

在维基或项目的记录的内容有部分仍旧只适用于 Minecraft。不过，好在 Hytale 的权限系统与现代绝大部分服务器采用的 Bukkit 底层逻辑类似，在 Hytale 中使用本插件的体验会几乎与 Minecraft 相同。太棒了！

祝你在你的 Hytale 服务器上使用 LuckPerms 顺利！

## 常见问题

* [我以前从没用过 LuckPerms！我该从哪里看起？](#我以前从没用过-luckperms我该从哪里看起)
* [原本的 OP 功能失效！](#原本的-op-功能失效)
* [与其他模组/插件的兼容性](#与其他模组插件的兼容性)
* [权限查找与问题排查](#权限查找与问题排查)
* [聊天格式](#聊天格式)
* [使用 LuckPerms API](#使用-luckperms-api)

### 我以前从没用过 LuckPerms！我该从哪里看起？

那么，首先欢迎你的到来！👋

最简单的答案就是，浏览这些章节：

* [安装步骤](install-on-a-single-server.md)可以指导你安装 LuckPerms，而
* [快速开始](getting-started.md)则可以教你快速上手！

之后，如果你对权限插件毫无概念还想了解更多，我们建议你从目录最顶上开始阅读！[命令用法](command-usage/index.md)章节有完整的命令列表，供你参考使用。

### 原本的 OP 功能失效！

LuckPerms 安装之后，Hytale 内置的权限系统会被接管。这样 LuckPerms 才可以着手判断处理玩家的权限相关内容。

这也表示：

* 内置的 `/op` 命令将会失效。你应该通过权限分配管理员。
* 内置的 `/perm` 命令也会失效。你必须使用 LuckPerms 的 `/lp` 命令配置玩家的权限。

如果你需要类似 OP 的功能（允许使用**所有**命令及受到权限限制的功能），那么你可以使用如下命令：

* `/lp user <玩家名称> permission set *` - 给予玩家 `<玩家名称>` 所有权限。
* `/lp group <组名称> permission set *` - 给予权限组 `<组名称>` 所有权限（适用于需要设置“管理组”的情况）。

### 与其他模组/插件的兼容性

LuckPerms 致力于通过 `CommandSender#hasPermission` 和 `PermissionsModule#hasPermission` 与其他检查权限的模组保持最大兼容性。如果你的模组使用了这种检查方法，那么它们可以完美兼容！

默认情况下，LuckPerms 会代表非玩家实体通过内置的 Hytale 权限系统进行检查。这意味着你可以使用内置的 `/perm` 命令对 NPC、“服务号”或者 Nitrado“匿名”用户进行权限管理。不过玩家权限仍旧需要通过 LuckPerms 本身进行配置。

### 权限查找与问题排查

如果你不知道某个命令或者功能所需的权限，你可以试试看 LuckPerms 的权限检查系统功能！见“[权限检查系统](features/verbose.md)”章节了解更多。

你也可以试试看内置的 `/help` 命令，它会显示可用命令及对应权限的菜单。

### 聊天格式

在早期的 beta 版本中，LuckPerms 有一个内置的聊天格式模块。不过随着现在模组/插件的生态已经开始发展，这个功能已经被去除，且有更好的选择供你使用。我们推荐你使用如下的这些聊天格式插件。

#### mini-chat-formatter

[mini-chat-formatter](https://github.com/lucko/mini-chat-formatter) 由 LuckPerms 作者编写，是一个面向 Hytale 的简单聊天格式模组。它自带对 LuckPerms 的支持。

只需下载安装这个模组，然后在 `mods/lucko_mini-chat-formatter/config.json` 中进行配置即可，如下所示：

``` json title="config.json"
{
  "Format": "<prefix><username><suffix>: <message>"
}
```

格式所用的字符串，以及前后缀的值都使用了 MiniMessages 格式。（是，这是 Minecraft 插件使用的一种格式，不过它非常优秀，且复用性强！）

前后缀的格式设置会刻意地**“溢出”**到后续部分。

部分示例：

|输入命令|结果|
|---|---|
|`/lp user lucko meta setprefix 10 "<red>[ADMIN] "`|![](_images/hytale-chat-1.png)|
|`/lp user lucko meta setprefix 10 "<red>[ADMIN]</red> "`<br>（注意闭合的 `</red>` 标签）`|![](_images/hytale-chat-2.png)|
|`/lp user lucko meta setprefix 10 "<red>[ADMIN] "`<br>`/lp user lucko meta setsuffix 10 "<gray>"`|![](_images/hytale-chat-3.png)|

希望你已经了解了。如果还需要了解详细信息：

* [mini-chat-formatter](https://github.com/lucko/mini-chat-formatter)（Github 仓库地址）
* [前后缀与元数据](features/prefix-suffix-meta.md)（LuckPerms 的维基页面）
* [MiniMessage 格式](https://docs.papermc.io/adventure/minimessage/format/)（PaperMC 文档）

#### 进阶聊天格式选项

如果你需要进阶的聊天格式功能，我们推荐使用其他兼容 LuckPerms 的聊天格式插件。包括但不限于：HeroChat、EliteEssentials、EssentialsPlus 等等。

### 使用 LuckPerms API

我们制作了一个简单的基础示例插件，以此描述如何在 Hytale 插件环境下与 LuckPerms API 交互。

https://github.com/LuckPerms/api-cookbook-hytale

关键要做到：

#### 1）将 LuckPerms 声明为依赖或可选依赖

在插件的 `manifest.json` 文件中，你必须这样写：

``` json title="manifest.json"
{
  "Dependencies": {
    "LuckPerms:LuckPerms": "*"
  }
}
```
或者
``` json title="manifest.json"
{
  "OptionalDependencies": {
    "LuckPerms:LuckPerms": "*"
  }
}
```

这是因为 Hytale 的插件管理器会将插件之间的类载入器分隔，除非声明为依赖。

#### 2）从 JavaPlugin.start() 之后获取 API 实例

2) Obtain the API instance from JavaPlugin.start() or later

LuckPerms 会在“开始”阶段执行它的最终初始化内容，而这些内容通常在“设置”阶段尚未准备完毕。

``` Java
  @Override
  protected void setup() {
    // 无效！❌
    LuckPerms luckPerms = LuckPermsProvider.get();
  }

  @Override
  protected void start() {
    // 有效！✅
    LuckPerms luckPerms = LuckPermsProvider.get();
  }
```

#### 3）PlayerAdapter 与 ContectManager 需要 `PlayerRef`

3) PlayerAdapter and ContextManager expect PlayerRef

LuckPerms API 中的方法需要“玩家”对象，以 `PlayerRef` 类型传递，**而非** `player`。

Methods in the LuckPerms API that expect a "player" object need to be passed a PlayerRef, not a Player.

例如：

``` Java
// PlayerAdapter 是用于在 Hytale 的 PlayerRef 与 LuckPerms 的 User 对象之间快捷转换的类
PlayerAdapter<PlayerRef> playerAdapter = LuckPermsProvider.get().getPlayerAdapter(PlayerRef.class);

User user = playerAdapter.getUser(playerRef);
CachedPermissionData permissionData = playerAdapter.getPermissionData(playerRef);
CachedMetaData metaData = playerAdapter.getMetaData(playerRef);

// 例如，获取玩家前缀 :)
String prefix = metaData.getPrefix();
```

### 其他

请加入我们的 Discord 聊天群组获取帮助。这里有对应的 Hytale 频道供你询问问题。😃