# 访问控制

若要管理服务器上玩家能使用 HuskHomes 的哪些功能，你应该安装一个权限管理插件。如果你只是开服与朋友玩耍，那么只需改动 `config.yml` 下的一些内容而无需安装权限管理插件。

## LuckPerms

[LuckPerms](https://luckperms.net/) 是一个标准、稳定且备受推崇的权限插件，且可以在 Spigot、Fabric 和 Sponge 服务器上运行。你可以先行阅读 LuckPerms 的教程来安装此插件。之后你可以输入命令 `/lp editor` 来将本页所提及的权限分配给对应的权限组。HuskHomes 大部分的权限都对默认玩家启用（见下）。你可以将权限设置为“false”来将权限从指定组中移除。

## 无权限插件的情况

所有命令都有默认的 OP 等级限制，使得你可以无需安装权限插件便可进行管理。下列命令需要 OP（通过命令 `/op <玩家名称>` 获得）才可使用：

* /tp
* /tphere
* /tpaall
* /tpall
* /setspawn
* /setwarp
* /delwarp
* /editwarp
* /tpoffline

其他命令（但*不是所有子命令*）都默认可以被玩家使用。你可以[完全禁用这些命令](features.commands.md#禁用命令)来防止玩家使用它们，或者若要更好控制的话，安装一个权限插件（*推荐*）

