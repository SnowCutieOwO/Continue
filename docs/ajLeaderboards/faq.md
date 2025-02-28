# 常见问题

这里收集了几个社区常出现的问题及其答案，你可以使用右侧的导航栏快速跳转到你需要的问题。

- - -

## 没有玩家出现在排行榜上（`---`）

这可能是这两个常见问题的结合：

[管理员没有出现在排行榜上](#管理员没有出现在排行榜上)    
[为什么排行榜上只显示在线玩家](#为什么排行榜只显示在线玩家)

## 管理员没有出现在排行榜上！

这可能是因为你拥有 [`ajleaderboards.dontupdate.<排行榜>`](setup.permissions.md) 权限。这个权限默认分配至 OP 与拥有 `*` 权限的玩家。

若要修复这个，你可以在权限插件中给予管理员负权限，或将其禁用。

例如，在使用 LuckPerms 的情况下将其设置为负权限，你需要输入这个命令：

```
/luckperms user <玩家名称> permission set ajleaderboards.dontupdate.* false
```

你可以在配置文件中禁用 `enable-dontupdate-permission` 设置来取消该权限。

## 为什么排行榜只显示在线玩家？

**本插件会显示离线玩家！**

本插件只会在排行榜设置后玩家至少上线一次后显示其数据。这表示设置排行榜后没有进入的玩家不会出现在排行榜上。只有在他们被加入排行榜后，他们的数据才会一直显示在上面（即便离线），除非你手动将其移除。

你可以使用命令 `/ajlb updateplayer <排行榜名称> <玩家名称>` 手动添加玩家数据，但不是所有的变量都支持这个操作。如果没有生效，你应该询问对应变量的插件开发者，为其添加离线玩家相关的支持。在此之前你只能等那些玩家（在设置排行榜后）上线至少一次。

如果 `updateplayer` 命令能够更新离线玩家，你可以通过命令 `/ajlb updatealloffline <排行榜名称>` 更新所有加入过服务器的玩家数据。

## 我正在尝试显示排行榜，但它显示 `排行榜不存在`

请确保你输入了正确的排行榜名称。如果你正在创建的是告示牌，命令中会有自动补全帮你输入，所以请再次检查你的拼写。你也可以输入命令 `/ajlb list` 确保你要显示的排行榜在列表中。

另外也请确保你没有在 `<排行榜名称>` 中加入了 `%` 符号。例如，你应该填入 `statistic_player_kills`，而非 `%statistic_player_kills%`。

如果你正在使用的变量没有在这些地方显示，请确保你正确执行了[安装教程](setup.setup.md)中的步骤。

## 我如何在排行榜上显示玩家的前缀/等级？

ajLeaderboards 能够在玩家离线时显示他们的前缀。

请确保你的服务器安装了 [vault](https://www.spigotmc.org/resources/vault.34315/)，之后将 [本插件的前缀变量](setup.placeholders.md) 填入名称旁来显示前缀。

## 变量在悬浮字上不显示！

如果你正在使用的是 HolographicDisplays，我推荐你使用 [DecentHolograms](https://www.spigotmc.org/resources/decent-holograms-1-8-1-19-papi-support-no-dependencies.96927/)。HolograpicDisplays 做出了一些改变，使得它用起变量来比其他插件更加麻烦。所以我建议别再用这个插件。就像我之前提及过的那样，我推荐 DecentHolograms，但实际上任何支持 PlacheolderAPI 的悬浮字插件都可以正常使用（因此我也不指望 HolographicDisplays 某天会有完整的 PlaceholderAPI 支持）。

这个 HolographicDisplays 的依赖更改对我毫无意义，因为对 PlaceholderAPI 的支持*只需修改一行代码*。

关于如何从 HolographicDisplays 迁移至 DecentHolograms 的教程详见[这里](https://snowcutieowo.github.io/DecentHolograms/#/general.compatibility?id=holographicdisplays)。

## 这个插件在我的服务器里产生卡顿！

首先试试看在配置文件中禁用 `blocking-fetch` 选项（设置为 `false` 或 `auto`），之后输入命令 `/ajlb reload`。

如果服务器仍在卡顿，尝试生成一份检测报告，并将其通过 Discord 发送给我（邀请链接在插件介绍帖）。

## 排行榜所有名次都显示同一个值（但玩家名称不同）

请确保你阅读了[安装教程第一步](setup.setup.md#1必需找到使用的变量)中的重要提示。

## 我如何给予奖励？

目前，内置给予奖励的唯一方式是通过 [LuckPerms 的上下文（Context）](setup.luckperms-contexts.md) 给予排行榜中指定名次的玩家权限/前缀/后缀。

## 玩家数据没有更新！

本插件内置了检查数据更新问题的工具。

输入命令 `/ajlb checkupdate <排行榜名称> <玩家名称>`，然后检查返回的内容。

如果它显示玩家数据应当正常更新，首先请确保命令 `/ajlb list <排行榜名称>` 中显示的值相同。

如果玩家在上述命令中的值相同，则变量返回的可能不是数据，你可以通过输入命令 `/papi parse <玩家名称> %变量%` 验证，`<玩家名称>` 处填入出现数据更新问题的玩家名称，`%变量%` 则填入目标变量（在 `/ajlb add` 命令中输入的变量）。为了让插件能够判断它，变量返回的应当是（不带任何颜色代码的）数字。