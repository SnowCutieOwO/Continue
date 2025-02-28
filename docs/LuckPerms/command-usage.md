# 命令用法

命令用法会在玩家输入的命令包含无效参数时在控制台/聊天栏显示。**直接输入 /lp** 会显示当前玩家有权限执行的所有命令。

若输入命令只返回了版本消息，则你没有权限使用本插件的任何命令。你需要在控制台中先[给予自己 LuckPerms 的所有命令权限](getting-started.md#获取编辑权限的完全权限)。

## 别名

每个平台的别称已在下文列出。每个命令的工作方式都相同，所以你可以按需使用。

|Bukkit/Sponge/Fabric/Forge/Nukkit|BungeeCord|Velociy|
|---|---|---|
|`/lp`|`/lpb`|`/lpv`|
|`/luckperms`|`/luckpermsbungee`|`/luckpermsvelocity`|
|`/permissions`*（已弃用）*|||
|`/perms`*（已弃用）*|||
|`/perm`*（已弃用）*|||

**`重要提示：`** 命令别称在 BungeeCord 和 Velocity 上是有差别的。这可以区分你在哪个平台执行命令。如果别称也相同，你就没有可能在后端服务器上操作 LuckPerms，因为命令总是会被群组服核心处理！

若你正在使用 Bukkit/Spigot，默认情况下所有 OP 都可以使用 LuckPerms 的所有命令。你可以在配置文本中修改这个行为。

## 概览

**参数值：**

* `<必须>` - 在执行对应命令时，你*必须*填入部分内容所代表的参数
* `[可选]` - 在执行对应命令时无需填入对应参数，若留空则插件会使用默认值（缺省值）

若你想要在参数中使用空格，你必须将参数用引号（`" "`）包裹起来。

下文使用的别称（`/lp`）可以被替换为上述表格中的任意一种（标注为“弃用”的除外）。

### 通用命令

操作 LuckPerms 功能会用到的命令。

* /lp
* /lp `sync`
* /lp `info`
* /lp `editor`
* /lp `verbose` \<on | record | off | upload\> [filter]
* /lp `tree` [范围] [玩家]
* /lp `search` [筛选条件] <权限>
* /lp `networksync`
* /lp `import` \<file | code --upload\> [--replace]
* /lp `export` \<file\> [--upload]
* /lp `reloadconfig`
* /lp `bulkupdate`
* /lp `translations`
* /lp `creategroup` <组名> [权重] [显示名称]
* /lp `deletegroup` <组名>
* /lp `listgroups`
* /lp `createtrack` <路线名>
* /lp `deletetrack` <路线名>
* /lp `listtracks`

### 玩家命令

用于浏览或修改指定玩家数据的命令。

这些命令一般以 `/lp user <玩家> ...` 开头 —— 在这里，`<玩家>` 可以是查询/修改的玩家名称或UUID。

* /lp user <玩家> `info`
* /lp user <玩家> `permission`
* /lp user <玩家> `parent`
* /lp user <玩家> `meta`
* /lp user <玩家> `editor`
* /lp user <玩家> `promote` <路线> [上下文...]
* /lp user <玩家> `demote` <路线> [上下文...]
* /lp user <玩家> `showtracks`
* /lp user <玩家> `clear` [上下文...]
* /lp user <玩家> `clone` <玩家>

### 权限组命令

用于浏览或修改指定权限组的命令。

这些命令一般以 `/lp user <组名> ...` 开头 —— 在这里，`<组名>` 可以是查询/修改的权限组名称。

* /lp group <组名> `info`
* /lp group <组名> `permission`
* /lp group <组名> `parent`
* /lp group <组名> `meta`
* /lp group <组名> `editor`
* /lp group <组名> `listmembers` [页码]
* /lp group <组名> `setweight` <权重>
* /lp group <组名> `setdisplayname` <名称>
* /lp group <组名> `showtracks`
* /lp group <组名> `clear` [上下文...]
* /lp group <组名> `rename` <新名称>
* /lp group <组名> `clone` <复制组名称>

### 权限组命令

用于浏览或修改指定玩家或权限组的权限数据命令。

一般以 `/lp user <玩家> permission ...` 或 `/lp group <组名> permission ...` 开头。

* `info`
* `set` <权限> <true/false> [上下文...]
* `unset` <权限> [上下文...]
* `settemp` <权限> <true/false> <时间> [施加模式] [上下文...]
* `unsettemp` <权限> [时间] [上下文...]
* `check` <权限>
* `clear` [上下文...]

### 继承命令


用于浏览或修改玩家或权限组的继承属性（父子关系）的命令。

一般以 `/lp user <user> parent ...` 或 `/lp group <组名> parent ...` 开头。

* `info`
* `set` <组名> [上下文...]
* `add` <组名> [上下文...]
* `remove` <组名> [上下文...]
* `settrack` <路线名> <组名> [上下文...]
* `addtemp` <组名> <时间> [施加模式] [上下文...]
* `removetemp` <组名> [时间] [上下文...]
* `clear` [上下文...]
* `cleartrack` <路线名> [上下文...]
* `switchprimarygroup` <组名>

### 元数据命令

用于修改或浏览玩家或权限组元数据的命令。

* `info`
* `set` <键> <值> [上下文...]
* `unset` <键> [上下文...]
* `settemp` <键> <值> <时间> [施加模式] [上下文...]
* `unsettemp` <键> [上下文...]
* `addprefix` <权重> <前缀> [上下文...]
* `addsuffix` <权重> <后缀> [上下文...]
* `setprefix` [权重] <前缀> [上下文...]
* `setsuffix` [权重] <后缀> [上下文...]
* `removeprefix` <权重> [前缀] [上下文...]
* `removesuffix` <权重> [后缀] [上下文...]
* `addtempprefix` <权重> <前缀> <时间> [施加模式] [上下文...]
* `addtempsuffix` <权重> <后缀> <时间> [施加模式] [上下文...]
* `settempprefix` [权重] <前缀> <时间> [施加模式] [上下文...]
* `settempsuffix` [权重] <后缀> <时间> [施加模式] [上下文...]
* `removetempprefix` <权重> [前缀] [上下文...]
* `removetempsuffix` <权重> [后缀] [上下文...]
* `clear` [上下文...]


### 路线命令

用于浏览或修改指定路线的命令。

一般以 `/lp track <路线> ...` 开头 —— `<路线>` 表示被查询/修改的的路线名称。

* /lp track <路线> `info`
* /lp track <路线> `editor`
* /lp track <路线> `append` <组名称>
* /lp track <路线> `insert` <组名称> <位置>
* /lp track <路线> `remove` <组名称>
* /lp track <路线> `clear`
* /lp track <路线> `rename` <新名称>
* /lp track <路线> `clone` <复制组名称>

### 日志命令

用于查询活跃日志的命令。

* /lp log `recent` [玩家] [页码]
* /lp log `search` <关键词> [页码]
* /lp log `notify` [on|off]
* /lp log `userhistory` <玩家> [页码]
* /lp log `grouphistory` <组名> [页码]
* /lp log `trackhistory` <路线名> [页码]