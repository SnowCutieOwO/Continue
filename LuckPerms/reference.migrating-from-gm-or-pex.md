# 从 GroupManager 或 PermissionsEx 迁移至 LuckPerms

此为[迁移教程](how-to.migrate-from-other-plugins.md)的续章。

在你按照指示将 GroupManager 或 PermissionsEx 迁移至 LuckPerms 之后，本章节的信息可以教你快速适应 LuckPerms！

首先下表比较了 GroupManager、PermissionsEx 和 LuckPerms 中的**等价命令**。如果你知道如何在 GM 或 PEX 中使用哪条命令，那么下表可以帮你快速找出在 LuckPerms 中执行相同命令的方法。

当然也有 [LuckPerms 的完整命令列表](command-usage.md)，你可能更需要阅读这个章节！

其次，也有额外插件能让你继续使用*某些* GroupManager 或 PermissionsEx 的命令，并自动执行 LuckPerms 对应的功能。你可以在[这里](https://github.com/LuckPerms/LuckPermsCompat)找到更多有关信息。但是，通常来说，我们希望你“除旧迎新”，这样就可以立即适应*对应*的 LuckPerms 命令 —— 一段时间后就会像 GM 或 PEX 那样熟练使用！

祝你好运，也祝你使用 LuckPerms 愉快！

## GroupManager 命令等价用法

|GroupManager|LuckPerms|
|---|---|
|manuadd <玩家> <权限组>|lp user <玩家> parent set <权限组>|
|manudel <玩家>|lp user <玩家> clear|
|manuaddsub <玩家> <权限组>|lp user <玩家> parent add <权限组>|
|manudelsub <玩家> <权限组>|lp user <玩家> parent remove <权限组>|
|manpromote <玩家> <权限组>|lp user <玩家> promote <路线>|
|mandemote <玩家> <权限组>|lp user <玩家> demote <路线>|
|manwhois <玩家>|lp user <玩家> info|
|manuaddp <玩家> <权限>|lp user <玩家> permission set <权限> true|
|manudelp <玩家> <权限>|lp user <玩家> permission unset <权限>|
|manulistp <玩家>|lp user <玩家> permission info|
|manucheckp <玩家> <权限>|lp user <玩家> haspermission <权限>|
|manuaddv <玩家> prefix <值>|lp user <玩家> meta addprefix <权重> <值>|
|manuaddv <玩家> suffix <值>|lp user <玩家> meta addsuffix <权重> <值>|
|manuaddv <玩家> <键> <值>|lp user <玩家> meta set <键> <值>|
|manudelv <玩家> <键>|lp user <玩家> meta unset <键>|
|manulistv <玩家>|lp user <玩家> meta info|
|||
|mangadd <权限组>|lp creategroup <权限组>|
|mangdel <权限组>|lp deletegroup <权限组>|
|mangaddi <组1> <组2>|lp group <组1> parent add <组2>|
|mangdeli <组1> <组2>|lp group <组1> parent remove <组2>|
listgroups|lp listgroups|
|mangaddp <权限组> <权限>|lp group <权限组> permission set <权限> true|
|mangdelp <权限组> <权限>|lp group <权限组> permission unset <权限>|
|manglistp <权限组>|lp group <权限组> permission info|
|mangcheckp <权限组> <权限>|lp group <权限组> haspermission <权限>|
|mangaddv <玩家> prefix <值>|lp group <权限组> meta addprefix <权重> <值>|
|mangaddv <玩家> suffix <值>|lp group <权限组> meta addsuffix <权重> <值>|
|mangaddv <玩家> <键> <值>|lp group <权限组> meta set <键> <值>|
|mangdelv <玩家> <键>|lp group <权限组> meta unset <键>|
|manglistv <玩家>|lp group <权限组> meta info|
|||
|mansave|lp sync|
|manload|lp sync|

## PermissionsEx 命令等价用法

|PermissionsEx|LuckPerms|
|---|---|
|pex|lp|
|pex reload|lp sync|
|pex toggle debug|lp verbose <选项>|
|pex user <玩家> check <权限>|lp user <玩家> haspermission <权限>|
|pex backend|lp info|
|pex import <后端>|lp export <文件> / lp import <文件>|
|||
|pex user <玩家> list|lp user <玩家> permission info|
|pex user <玩家> prefix|lp user <玩家> meta infov
|pex user <玩家> prefix <文>|lp user <玩家> meta addprefix <权重> <前缀>|
|pex user <玩家> suffix|lp user <玩家> meta info|
|pex user <玩家> suffix <后缀>|lp user <玩家> meta addsuffix <权重> <后缀>|
|pex user <玩家> delete|lp user <玩家> clear|
|pex user <玩家> add <权限> <世界>|lp user <玩家> permission set <权限> <true/false> world=<世界>|
|pex user <玩家> remove <权限> <世界>|lp user <玩家> permission unset <权限> world=<世界>|
|pex user <玩家> timed add <权限> <时间> <世界>|lp user <玩家> permission settemp <权限> <true/false> <时间> world=<世界>|
|pex user <玩家> timed remove <权限> <时间> <世界>|lp user <玩家> permission unsettemp <权限> world=<世界>
|pex user <玩家> set <键> <值> <世界>|lp user <玩家> meta set <键> <值> world=<世界>|
|||
|pex user <玩家> group list|lp user <玩家> parent info|
|pex user <玩家> group add <权限组> <世界>|lp user <玩家> parent add <权限组> world=<世界>|
|pex user <玩家> group add <权限组> <世界> <时间>|lp user <玩家> parent addtemp <权限组> <时间> world=<世界>
|pex user <玩家> group set <权限组>|lp user <玩家> parent set <权限组>|
|pex user <玩家> group remove <权限组> <世界>|lp user <玩家> parent remove <权限组> world=<世界>|
|pex groups list|lp listgroups|
|pex group <权限组> list|lp group <权限组> permission info|
|pex group <权限组> prefix|lp group <权限组> meta info|
|pex group <权限组> prefix <前缀>|lp group <权限组> meta addprefix <权重> <前缀>|
|pex group <权限组> suffix|lp group <权限组> meta info|
|pex group <权限组> suffix <后缀>|lp group <权限组> meta addsuffix <权重> <后缀>|
|pex group <权限组> create|lp creategroup <权限组>|
|pex group <权限组> delete|lp deletegroup <权限组>|
|pex group <权限组> parents list|lp group <权限组> parent info|
|pex group <权限组> users|lp group <权限组> listmembers|
|pex group <权限组> parents set <继承权限组>|lp group <权限组> parent add <继承权限组>|
|pex group <权限组> add <权限> <世界>|lp group <权限组> permission set <权限> <true/false> world=<世界>|
|pex group <权限组> remove <权限> <世界>|lp group <权限组> permission unset <权限> world=<世界>|
|pex group <权限组> timed add <权限> <时间> <世界>|lp group <权限组> permission settemp <权限> <true/false> <时间> world=<世界>|
|pex group <权限组> timed remove <权限> <时间> <世界>|lp group <权限组> permission unsettemp <权限> world=<世界>|
|pex group <权限组> set <键> <值> <世界>|lp group <权限组> meta set <键> <值> world=<世界>|
|||
|pex group <权限组> user add <玩家>|lp user <玩家> parent add <权限组>|
|pex group <权限组> user remove <玩家>|lp user <玩家> parent remove <权限组>|
|pex promote <玩家> <等级>|lp user <玩家> promote <等级>|
|pex demote <玩家> <等级>|lp user <玩家> demote <等级>|