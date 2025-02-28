# 零散编辑

LuckPerms 提供了零散编辑权限的命令。这个命令应当小心使用，稍有不慎即可导致权限数据错误。

在使用命令前最好先进行备份，可以复制数据库或文件，也可以使用导出命令。

命令设计上基本保持了 SQL 语言格式。这表示传入命令的数据可以以 SQL 形式表达，或用于修改 YAML 或 JSON 存储类型的文件中。建议有 SQL 语言使用经验的用户直接对数据库进行操作而不是使用本章节提及的命令。

这些命令**只能通过控制台执行**。这是因为这些命令可能会对服务器数据造成明显损害。在完成操作前你还要输入验证码，来防止服务器被玩家强制执行这些命令。

命令用法如下...

## `/lp bulkupdate <数据类型> <操作> [操作部分] [操作值] [限制...]`

看起来有点复杂，我知道的。将它分解开来...

|参数|描述|
|---|---|
|`<数据类型>`|修改的数据类型（可为 `all`、`users` 或 `groups`）|
|`<操作>`|对数据执行的操作（可为 `update` 或 `delete`）|
|`[操作部分]`|操作数据的内容。仅在进行更新操作时需要输入（可为 `permission`、`server` 或 `world`）|
|`[操作值]`|替换的值。仅在进行更新操作时需要输入|
|`[限制]`|更新所作限制|

`数据类型`非常简单。它告诉 LuckPerms 在更新中哪些数据会被影响。可以是 users、groups，也可以两者都是。

`操作`表示对数据进行的处理。它可以为“update（更新）”或“delete（删除）”。“删除”表示任何匹配“限制”的记录都会被删掉。“更新”则是对任何匹配的内容更换为其他值。

`操作部分`与`操作值`参数是可选的，因为它们只在使用“更新”时有效。“操作部分”为更新的内容，“操作值”则为更新后的值。

`限制`参数与更新限制有关。只有匹配该参数内容的权限（或条目）才会受到影响。

### 限制

限制被分为三部分，`内容`、`比较符`与`值`。

可用的`内容`为 `permission`、`server` 和 `world`。权限即为存储在文件内的权限（需要记住的是在这种情况下，所有内容包括权限组继承关系和前后缀都可以视作权限）。“server”和“world”则表示权限生效的服务器/世界。若给予权限时没有对它们进行设置，则默认为“global”。

限制的`值`则是要匹配的值，需要与之前的比较符搭配使用。

有四种不同的比较符可用。

|比较符|名称|描述|
|`==`|等于|两个值是否相同。（无视大小写）|
|`!=`|不等于|两个值是否不相同。（无视大小写）|
|`~~`|相似|两个值是否“相似”。用法与 SQL 语言中的 `LIKE` 相似。|
|`!~`|不相似|两个值是否“不相似”。用法与 SQL 语言中的 `LIKE` 相似。|

更多有关于“相似”及其格式的用法可以在[这里](https://www.w3schools.com/sql/sql_like.asp)和[这里](https://www.tutorialspoint.com/sql/sql-like-clause.htm)找到。

部分特殊符号：

* `%` - 百分号表示零，一或多个字符
* `_` - 下划线表示单字符

#### 示例

* `server ~~ hub_` 会匹配“hub1”，“hub2”，“hub3”等的内容
* `permission !~ group.%` 会匹配非继承权限组的任意内容
* `world == nether` 会匹配与“nether”完全相同的世界值。

在命令中使用限制表达式时，应当将其用英文双引号 `" "` 包裹。

若你想要移除带有指定世界或服务器上下文的权限或权限组的指定上下文，你只需将世界和/或上下文设置为 `global`，这基本上会将对应的权限和/或权限组的上下文移除并重设为“global”。

### 命令示例

#### `/lp bulkupdate all update permission group.mod "permission == group.moderator"`

会更新所有条目，并将“group.moderator”替换为“group.mod”权限。（一般重命名权限组比较快）

#### `/lp bulkupdate users delete "server ~~ hub%" "world == nether"`

会删除任意上下文中服务器名称以“hub”开头，世界以“nether”开头的玩家权限。

#### `/lp bulkupdate all delete "permission == essentials.fly"`

会删除任何匹配“essentials.fly”的权限条目。

#### `/lp bulkupdate all delete "permission == group.vip"`

会删除所有玩家中对 VIP 组的继承。

#### `/lp bulkupdate all update server global "server == factions"`

会删除上下文中包含“server=factions”（仅在所处服务器为 factions 时生效）的任意条目。

#### `/lp bulkupdate all update permission essentials.ban "permission == essentials.mute" "server == survival"`

会修改上下文中包含“server=survival”（仅在所处服务器为 survival 时生效）的所有“essentials.mute”为“essentials.ban”

#### `/lp bulkupdate all update server global "permission == group.mod" "server == survival"`

会修改上下文中包含“server=survival”（仅在所处服务器为 survival 时生效）继承了“mod”组的至“survival”服务器内全部有效（基本表示移除这个上下文）