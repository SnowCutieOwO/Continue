# 通用命令

此为**命令用法**的子页面。[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [/lp](#lp)
* [/lp `sync`](#lp-sync)
* [/lp `info`](#lp-info)
* [/lp `editor`](#lp-editor-类型-过滤)
* [/lp `verbose` \<on | record | off | upload\> [filter]](#lp-verbose-onrecordoffupload-过滤)
* [/lp `tree` [范围] [玩家]](#lp-tree-范围-玩家)
* [/lp `search` [筛选条件] <权限>](#lp-search-筛选条件-权限)
* [/lp `networksync`](#lp-networksync)
* [/lp `import` \<file | code --upload\> [--replace]](#lp-import-filecode---upload---replace)
* [/lp `export` \<file\> [--upload]](#lp-export-file--upload)
* [/lp `reloadconfig`](#lp-reloadconfig)
* [/lp `bulkupdate`](#lp-bulkupdate-数据类型-操作-操作部分-操作值-限制)
* [/lp `translations`](#lp-translations)
* [/lp `creategroup` <组名> [权重] [显示名称]](#lp-creategroup-名称-权重-显示名称)
* [/lp `deletegroup` <组名>](#lp-deletegroup-名称)
* [/lp `listgroups`](#lp-listgroups)
* [/lp `createtrack` <路线名>](#lp-createtrack-name)
* [/lp `deletetrack` <路线名>](#lp-deletetrack-name)
* [/lp `listtracks`](#lp-listtracks)

## `/lp`

**所需权限：** 无

基础的 LuckPerms 命令。输入后显示玩家有权执行的所有命令，简单介绍及其可用的参数。若无任何权限则只显示插件版本号。

## `/lp sync`

**所需权限：** `luckperms.sync`    

刷新已载入的数据。若数据库中的数据发生改动，该命令会将这些改动应用在服务器上。

## `/lp info`

**所需权限：** `luckperms.info`    

显示 LuckPerms 的信息/数据，包括调试输出、统计数据、设置内容以及配置文本的一些重要设置项。

## `/lp editor [类型] [过滤]`

**所需权限：** `luckperms.editor`     
**可用参数：**
* `[类型]` - 在编辑器会话中选择的参数。可以为“all（全部）”、“users（玩家）”、“online（在线）”或“groups（用户组）”
* `[过滤]` - 若所选类型包含玩家（如，“all”、“users” 或 “online”），则会将不以参数所给内容开头的权限条目隐藏。权限组不受该过滤影响。

打开编辑权限数据用的网页编辑器。在保存后，你会在网页中得到一条保存命令，在服务器中执行即可让
改动生效。

## `/lp verbose <on|record|off|upload> [过滤]`

**所需权限：** `luckperms.verbose`    
**可用参数：**

* `<on|record|off|upload>` - 是否启用/禁用日志记录或上传日志输出内容
* `[过滤]` - 筛选内容所使用的过滤器

控制 LuckPerms 的权限检查系统。这允许你查看服务器上的玩家权限检查。当插件检查权限时，权限检查便会将该活动传递给判断处理器。

若你的过滤器匹配了权限检查，则你会被提醒。

`on` 将会启用该系统，在过滤器被匹配时会显示在聊天栏。`record` 效果基本相同，但不会在聊天栏中提醒你。`off` 会关闭检查，而 `upload` 则会将首次结果上传至网页浏览器，并向你发送一个链接。

过滤器会匹配以参数内容开头的权限。你可以在这里使用 `&`（和）、`|`（或）符号，以及用于表示取反的 `!`。诸如 `( )` 是括号也是可以在这里使用的。

**例如：**

* `Luck & (essentials | worldedit)` - 匹配通过我的玩家以“essentials”或“worldedit”开头的检查
* `!Luck & !anticheat` - 匹配所有不通过我的玩家且不以“anticheat”开头的检查
* `anticheat & !anticheat.check` - 匹配所有以“anticheat”但不以“anticheat.check”开头的检查

更多信息可[见此](features.verbose.md)。

## `/lp verbose command <me|玩家> <命令>`

**所需权限：** `luckperms.verbose`    
**可用参数：** 

* `<me|player>` - 打开权限检查系统的玩家。使用 `me` 表示你自己
* `<命令>` - 权限检查所检测的命令

控制 LuckPerms 权限检查记录系统。这允许你以指定玩家身份执行命令并监听服务器上对该命令进行的权限检查。

## `/lp tree [范围] [玩家]`

**所需权限：** `luckperms.tree`    
**可用参数：** 

* `[范围]` - 树的根节点（使用 `.` 表示所有权限）
* `[玩家]` - 插件的在线玩家名称

生成注册至服务器的权限树形图。树形图使用的数据来自插件向服务器发送的权限数据，并会随着插件继续检查权限而变得更加详细。

所有参数均可选。默认范围为 `.`
（就是一个点，表示全选）

范围参数允许你只生成树形图的一部分。例如，若将范围指定为 `luckperms.user` 则只会展开以“luckperms.user”开头的树形图。

## `/lp search [筛选条件] <权限>`

**所需权限：** `luckperms.search`    
**可用参数：** 

* `[筛选条件]` - 搜索内容与结果间的联系

|比较符|含义|功能|
|---|---|---|
|`==`|"等于"|默认比较 - 返回与 `<权限>` 相同的搜索结果。|
|`!=`|"不等于"|返回与 `<权限>` 不同的搜索结果。|
|`~~`|"相似"|返回与 `<权限>` 相似的搜索结果（SQL 式）。|
|`!~`|"不相似"|返回与 `<权限>` 不相似的搜索结果（SQL 式）。|

* `<权限>` - 搜索的权限

在所有玩家/权限组中搜索指定权限，并分页返回所有匹配的结果。

## `/lp networksync`

**所需权限：** `luckperms.sync`

刷新数据库内的数据，并使用插件通信服务（若设置的话）来“ping”其他所有连接的服务器使其一同刷新。

## `/lp import <file|code --upload> [--replace]`

**所需权限：** `luckperms.import`    
**可用参数：** 

* `<file>` - 所要导入的文件
* `<code> --upload` - 所要从网络导入的文件
* `[--replace]` - 若包含，则会覆盖原有权限数据。否则合并权限数据。

从文件或网络将权限数据导入 LuckPerms。    
若为文件，则必须为 JSON GZIP 类型的压缩包，且从 LuckPerms v5 带出。若来自于网络，则代码必须以 `--upload` 参数生成。文件应该会生成在插件文件夹中。在导入文件时，`.json.gz` 也需要加入文件名称。在导入本地或网络文件中，`--replace` 标志可以加在命令末尾来覆盖已有的权限数据。若 `--replace` 标志不存在，则已有的权限数据会和导入的权限数据合并。

## `/lp export <file|--upload>`

**所需权限：** `luckperms.export`
**可用参数：** 

* `<file>` - 导出的文件名称
* `<--upload>` - 若存在，则会将权限数据上传至网络并返回一串用于从网络导入的代码
* `[--without-users]` - 若存在，则只导出权限组数据，不会包含任何玩家的数据
* `[--without-groups]` - 若存在，则只导出玩家数据，不会包含任何权限组的数据

将 LuckPerms 的权限数据导出并存储在文件或网络数据库中，文件可以用作备份或是在不同的安装了 LuckPerms 的服务器间转移数据。网络导出的内容会过期，因此不推荐用于备份。与此同时两者都可以使用导入命令再次导入。生成的文件会存放在插件文件夹中。

## `/lp reloadconfig`

**所需权限：** `luckperms.reloadconfig`

重载配置文件中的某些设置。该命令不会重载整个配置文件，有些设置（如存储设置等）可能需要重启服务器才能生效。

## `/lp bulkupdate <数据类型> <操作> [操作部分] [操作值] [限制...]`

**所需权限：** 仅控制台    
**可用参数：** 

* `<数据类型>` - 修改的数据类型（可为 `all`、`users` 或 `groups`）
* `<操作>` - 对数据执行的操作（可为 `update` 或 `delete`）
* `[操作部分]` - 操作数据的内容。仅在进行更新操作时需要输入（可为 `permission`、`server` 或 `world`）
* `[操作值]` - 替换的值。仅在进行更新操作时需要输入
* `[限制]` - 更新所作限制

允许对全体权限数据进行单独修改。可在[这里]找到使用该命令的详细教程。

## `/lp translations`

**所需权限：** `luckperms.translations`

显示已载入翻译的信息，并可通过该命令载入社区贡献的翻译文本。

## `/lp creategroup <名称> [权重] [显示名称]`

**所需权限：** `luckperms.creategroup`
**可用参数：** 

* `<名称>` - 权限组名称。
* `[权重]` - 权限组的权重
* `[显示名称]` - 权限组的显示名称

创建权限组。
## `/lp deletegroup <名称>`

**所需权限：** `luckperms.deletegroup`
**可用参数：** 

* `<名称>` - 权限组名称。

永久删除权限组。

## `/lp listgroups`

**所需权限：** `luckperms.listgroups`

列出当前可用的所有权限组。

## `/lp createtrack <名称>`

**所需权限：** `luckperms.createtrack`
**可用参数：** 

* `<名称>` - 路线的名称

创建新路线。

## `/lp deletetrack <名称>`

**所需权限：** `luckperms.deletetrack`
**可用参数：** 

* `<名称>` - 路线的名称

永久删除已有路线。

## `/lp listtracks`

**所需权限：** `luckperms.listtracks`

显示当前路线。