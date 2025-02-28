# 权限

LuckPerms 的每个命令与其他功能有各自的权限。权限会在[命令用法](command-usage.md)部分列出。但是，能在列表中看到对应的权限与命令还是非常有用的。下表会列出。

::: info 注意
这个列表不会在[基于参数的权限](how-to.setup-argument-based-command-permissions.md)可用时包含任何权限。若你需要知道这些权限，最好使用[权限检查系统](features.verbose.md)。
:::

## 权限列表

| 权限节点 | 权限描述 |
| --- | --- |
| luckperms.sync | [`/lp sync` 命令](command-usage.general.md#lp-sync) 与 [`/lp networksync` 命令](command-usage.general.md#lp-networksync)|
| luckperms.info | [`/lp info` 命令](command-usage.general.md#lp-info)|
| luckperms.editor | [`/lp editor` 命令](command-usage.general.md#lp-editor-type)|
| luckperms.applyedits | [`/lp applyedits` 命令](features.web-editor.md#保存你的修改)|
| luckperms.verbose | [`/lp verbose` 命令](command-usage.general.md#lp-verbose-onrecordoffupload-filter)|
| luckperms.verbose.commandother | [`/lp verbose command <名称> <命令>` 命令](features.verbose.md)|
| luckperms.tree | [`/lp tree` 命令](command-usage.general.md#lp-tree-范围-玩家)|
| luckperms.search | [`/lp search` 命令](command-usage.general.md#lp-search-permission)|
| luckperms.import | [`/lp import` 命令](command-usage.general.md#lp-import-filecode---upload---replace)|
| luckperms.export | [`/lp export` 命令](command-usage.general.md#lp-export-file--upload)|
| luckperms.reloadconfig | [`/lp reloadconfig` 命令](command-usage.general.md#lp-reloadconfig)|
| luckperms.translations | [`/lp translations` 命令](command-usage.general.md#lp-translations)|
| luckperms.creategroup | [`/lp creategroup` 命令](command-usage.general.md#lp-creategroup-名称-权重-显示名称)|
| luckperms.deletegroup | [`/lp deletegroup` 命令](command-usage.general.md#lp-deletegroup-名称)|
| luckperms.listgroups | [`/lp listgroups` 命令](command-usage.general.md#lp-listgroups)|
| luckperms.createtrack | [`/lp createtrack` 命令](command-usage.general.md#lp-createtrack-名称)|
| luckperms.deletetrack | [`/lp deletetrack` 命令](command-usage.general.md#lp-deletetrack-名称)|
| luckperms.listtracks | [`/lp listtracks` 命令](command-usage.general.md#lp-listtracks)|
| luckperms.user.info | [`/lp user <玩家> info` 命令](command-usage.user.md#lp-user-玩家-info)|
| luckperms.user.editor | [`/lp user <玩家> editor` 命令](command-usage.user.md#lp-user-玩家-editor)|
| luckperms.user.promote | [`/lp user <玩家> promote` 命令](command-usage.user.md#lp-user-玩家-promote-track-上下文)|
| luckperms.user.demote | [`/lp user <玩家> demote` 命令](command-usage.user.md#lp-user-玩家-demote-track-上下文)|
| luckperms.user.showtracks | [`/lp user <玩家> showtracks` 命令](command-usage.user.md#lp-user-玩家-showtracks)|
| luckperms.user.clear | [`/lp user <玩家> clear` 命令](command-usage.user.md#lp-user-玩家-clear-上下文)|
| luckperms.user.clone | [`/lp user <玩家> clone` 命令](command-usage.user.md#lp-user-玩家-clone-玩家)|
| luckperms.user.permission.info | [`/lp user <玩家> permission info` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-info-页码-排序方式)|
| luckperms.user.permission.set | [`/lp user <玩家> permission set` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-set-权限-truefalse-上下文)|
| luckperms.user.permission.unset | [`/lp user <玩家> permission unset` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-unset-权限-上下文)|
| luckperms.user.permission.settemp | [`/lp user <玩家> permission settemp` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-settemp-权限-truefalse-时间-施加模式-上下文)|
| luckperms.user.permission.unsettemp | [`/lp user <玩家> permission unsettemp` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-unsettemp-权限-时间-上下文)|
| luckperms.user.permission.check | [`/lp user <玩家> permission check` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-check-权限)|
| luckperms.user.permission.clear | [`/lp user <玩家> permission clear` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-clear-上下文)|
| luckperms.user.parent.info | [`/lp user <玩家> parent info` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-info-页码-排序模式)|
| luckperms.user.parent.set | [`/lp user <玩家> parent set` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-set-权限组-上下文)|
| luckperms.user.parent.add | [`/lp user <玩家> parent add` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-add-权限组-上下文)|
| luckperms.user.parent.remove | [`/lp user <玩家> parent remove` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-remove-权限组-上下文)|
| luckperms.user.parent.settrack | [`/lp user <玩家> parent settrack` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-settrack-路线-索引权限组-上下文)|
| luckperms.user.parent.addtemp | [`/lp user <玩家> parent addtemp` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-addtemp-权限组-时间-施加模式-上下文)|
| luckperms.user.parent.removetemp | [`/lp user <玩家> parent removetemp` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-removetemp-权限组-时间-上下文)|
| luckperms.user.parent.clear | [`/lp user <玩家> parent clear` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-clear-上下文)|
| luckperms.user.parent.cleartrack | [`/lp user <玩家> parent cleartrack` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-cleartrack-路线-上下文)|
| luckperms.user.parent.switchprimarygroup | [`/lp user <玩家> parent switchprimarygroup` 命令](command-usage.parent.md#lp-user-玩家-parent-switchprimarygroup-权限组)|
| luckperms.user.meta.info | [`/lp user <玩家> meta info` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-info)|
| luckperms.user.meta.set | [`/lp user <玩家> meta set` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-set-键-值-上下文)|
| luckperms.user.meta.unset | [`/lp user <玩家> meta unset` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-unset-键名-值-上下文)|
| luckperms.user.meta.settemp | [`/lp user <玩家> meta settemp` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settemp-键名-值-时间-施加模式-上下文)|
| luckperms.user.meta.unsettemp | [`/lp user <玩家> meta unsettemp` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-unsettemp-键名-上下文)|
| luckperms.user.meta.addprefix | [`/lp user <玩家> meta addprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addprefix-权重-前缀-上下文)|
| luckperms.user.meta.addsuffix | [`/lp user <玩家> meta addsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addsuffix-权重-后缀-上下文)|
| luckperms.user.meta.setprefix | [`/lp user <玩家> meta setprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setprefix-权重-前缀-上下文)|
| luckperms.user.meta.setsuffix | [`/lp user <玩家> meta setsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setsuffix-权重-后缀-上下文)|
| luckperms.user.meta.removeprefix | [`/lp user <玩家> meta removeprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removeprefix-权重-前缀-上下文)|
| luckperms.user.meta.removesuffix | [`/lp user <玩家> meta removesuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removesuffix-权重-后缀-上下文)|
| luckperms.user.meta.addtempprefix | [`/lp user <玩家> meta addtempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addtempprefix-权重-前缀-时间-施加模式-上下文)|
| luckperms.user.meta.addtempsuffix | [`/lp user <玩家> meta addtempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addtempsuffix-权重-后缀-时间-施加模式-上下文)|
| luckperms.user.meta.settempprefix | [`/lp user <玩家> meta settempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settempprefix-权重-前缀-时间-施加模式-上下文)|
| luckperms.user.meta.settempsuffix | [`/lp user <玩家> meta settempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settempsuffix-权重-后缀-时间-施加模式-上下文)|
| luckperms.user.meta.removetempprefix | [`/lp user <玩家> meta removetempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removetempprefix-权重-前缀-上下文)|
| luckperms.user.meta.removetempsuffix | [`/lp user <玩家> meta removetempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removetempsuffix-权重-后缀-上下文)|
| luckperms.user.meta.clear | [`/lp user <玩家> meta clear` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-clear-类型-上下文)|
| luckperms.group.info | [`/lp group <权限组> info` 命令](command-usage.group.md#lp-权限组-权限组-info)|
| luckperms.group.editor | [`/lp group <权限组> editor` 命令](command-usage.group.md#lp-权限组-权限组-editor)|
| luckperms.group.listmembers | [`/lp group <权限组> listmembers` 命令](command-usage.group.md#lp-权限组-权限组-listmembers-页码)|
| luckperms.group.setweight | [`/lp group <权限组> setweight` 命令](command-usage.group.md#lp-权限组-权限组-setweight-权重)|
| luckperms.group.setdisplayname | [`/lp group <权限组> setdisplayname` 命令](command-usage.group.md#lp-权限组-权限组-setdisplayname-名称)|
| luckperms.group.showtracks | [`/lp group <权限组> showtracks` 命令](command-usage.group.md#lp-权限组-权限组-showtracks)|
| luckperms.group.clear | [`/lp group <权限组> clear` 命令](command-usage.group.md#lp-权限组-权限组-clear-上下文)|
| luckperms.group.rename | [`/lp group <权限组> rename` 命令](command-usage.group.md#lp-权限组-权限组-rename-新名称)|
| luckperms.group.clone | [`/lp group <权限组> clone` 命令](command-usage.group.md#lp-权限组-权限组-clone-复制组名称)|
| luckperms.group.permission.info | [`/lp group <权限组> permission info` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-info-页码-排序方式)|
| luckperms.group.permission.set | [`/lp group <权限组> permission set` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-set-权限-truefalse-上下文)|
| luckperms.group.permission.unset | [`/lp group <权限组> permission unset` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-unset-权限-上下文)|
| luckperms.group.permission.settemp | [`/lp group <权限组> permission settemp` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-settemp-权限-truefalse-时间-施加模式-上下文)|
| luckperms.group.permission.unsettemp | [`/lp group <权限组> permission unsettemp` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-unsettemp-权限-时间-上下文)|
| luckperms.group.permission.check | [`/lp group <权限组> permission check` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-check-权限)|
| luckperms.group.permission.clear | [`/lp group <权限组> permission clear` 命令](command-usage.permission.md#lp-usergroup-玩家权限组-permission-clear-上下文)|
| luckperms.group.parent.info | [`/lp group <权限组> parent info` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-info-页码-排序模式)|
| luckperms.group.parent.set | [`/lp group <权限组> parent set` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-set-权限组-上下文)|
| luckperms.group.parent.add | [`/lp group <权限组> parent add` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-remove-权限组-上下文)|
| luckperms.group.parent.remove | [`/lp group <权限组> parent remove` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-remove-权限组-上下文)|
| luckperms.group.parent.settrack | [`/lp group <权限组> parent settrack` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-settrack-路线-索引权限组-上下文)|
| luckperms.group.parent.addtemp | [`/lp group <权限组> parent addtemp` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-addtemp-权限组-时间-施加模式-上下文)|
| luckperms.group.parent.removetemp | [`/lp group <权限组> parent removetemp` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-removetemp-权限组-时间-上下文)|
| luckperms.group.parent.clear | [`/lp group <权限组> parent clear` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-clear-上下文)|
| luckperms.group.parent.cleartrack | [`/lp group <权限组> parent cleartrack` 命令](command-usage.parent.md#lp-usergroup-玩家权限组-parent-cleartrack-路线-上下文)|
| luckperms.group.meta.info | [`/lp group <权限组> meta info` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-info)|
| luckperms.group.meta.set | [`/lp group <权限组> meta set` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-set-键名-值-上下文)|
| luckperms.group.meta.unset | [`/lp group <权限组> meta unset` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-unset-键名-值-上下文)|
| luckperms.group.meta.settemp | [`/lp group <权限组> meta settemp` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settemp-键名-值-时间-施加模式-上下文)|
| luckperms.group.meta.unsettemp | [`/lp group <权限组> meta unsettemp` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-unsettemp-键名-上下文)|
| luckperms.group.meta.addprefix | [`/lp group <权限组> meta addprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addprefix-权重-前缀-上下文)|
| luckperms.group.meta.addsuffix | [`/lp group <权限组> meta addsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addsuffix-权重-后缀-上下文)|
| luckperms.group.meta.setprefix | [`/lp group <权限组> meta setprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setprefix-权重-前缀-上下文)|
| luckperms.group.meta.setsuffix | [`/lp group <权限组> meta setsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setsuffix-权重-后缀-上下文)|
| luckperms.group.meta.removeprefix | [`/lp group <权限组> meta removeprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removeprefix-权重-前缀-上下文)|
| luckperms.group.meta.removesuffix | [`/lp group <权限组> meta removesuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removesuffix-权重-后缀-上下文)|
| luckperms.group.meta.addtempprefix | [`/lp group <权限组> meta addtempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addtempprefix-权重-前缀-时间-施加模式-上下文)|
| luckperms.group.meta.addtempsuffix | [`/lp group <权限组> meta addtempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-addtempsuffix-权重-后缀-时间-施加模式-上下文)|
| luckperms.group.meta.settempprefix | [`/lp group <权限组> meta settempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settempprefix-权重-前缀-时间-施加模式-上下文)|
| luckperms.group.meta.settempsuffix | [`/lp group <权限组> meta settempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-settempsuffix-权重-后缀-时间-施加模式-上下文)|
| luckperms.group.meta.removetempprefix | [`/lp group <权限组> meta removetempprefix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removetempprefix-权重-前缀-上下文)|
| luckperms.group.meta.removetempsuffix | [`/lp group <权限组> meta removetempsuffix` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-removetempsuffix-权重-后缀-上下文)|
| luckperms.group.meta.clear | [`/lp group <权限组> meta clear` 命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-clear-类型-上下文)|
| luckperms.track.info | [`/lp track <路线> info` 命令](command-usage.track.md#lp-track-路线-info)|
| luckperms.track.editor | [`/lp track <路线> editor` 命令](command-usage.track.md#lp-track-路线-editor)|
| luckperms.track.append | [`/lp track <路线> append` 命令](command-usage.track.md#lp-track-路线-append-权限组)|
| luckperms.track.insert | [`/lp track <路线> insert` 命令](command-usage.track.md#lp-track-路线-insert-权限组-位置)|
| luckperms.track.remove | [`/lp track <路线> remove` 命令](command-usage.track.md#lp-track-路线-remove-权限组)|
| luckperms.track.clear | [`/lp track <路线> clear` 命令](command-usage.track.md#lp-track-路线-clear)|
| luckperms.track.rename | [`/lp track <路线> rename` 命令](command-usage.track.md#lp-track-路线-rename-新名称)|
| luckperms.track.clone | [`/lp track <路线> clone` 命令](command-usage.track.md#lp-track-路线-clone-复制名称)|
| luckperms.log.recent | [`/lp log recent` 命令](command-usage.log.md#lp-log-recent-玩家-页码)|
| luckperms.log.search | [`/lp log search` 命令](command-usage.log.md#lp-log-search-关键词-页码)|
| luckperms.log.notify | [`/lp log notify` 命令](command-usage.log.md#lp-log-notify-onoff)|
| luckperms.log.userhistory | [`/lp log userhistory` 命令](command-usage.log.md#lp-log-userhistory-玩家-页码)|
| luckperms.log.grouphistory | [`/lp log grouphistory` 命令](command-usage.log.md#lp-log-grouphistory-权限组-页码)|
| luckperms.log.trackhistory | [`/lp log trackhistory` 命令](command-usage.log.md#lp-log-trackhistory-路线-页码)|