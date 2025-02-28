# 元数据命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `## `/lpb` 而不是 `## `/lp`
* 在使用 Velocity 时应该使用 `## `/lpv` 而不是 `## `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* `info`
* `set` <键名> <值> [上下文...]
* `unset` <键名> [上下文...]
* `settemp` <键名> <值> <时间> [施加模式] [上下文...]
* `unsettemp` <键名> [上下文...]
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
* `clear` [类型] [上下文...]

## `/lp user/group <玩家|权限组> meta info`

**所需权限：** `luckperms.user.meta.info` 或 `luckperms.group.meta.info`    

显示玩家/权限组继承的元数据（选项），前缀与后缀。

## `/lp user/group <玩家|权限组> meta set <键名> <值> [上下文...]`

**所需权限：** `luckperms.user.meta.set` 或 `luckperms.group.meta.set`    
**可用参数：**

* `<键名>` - 所要设置的键名
* `<值>` - 要对键名赋予的值
* `[上下文...]` - 设置这条元数据的[上下文](features.context.md)

对玩家/权限组设置键值对元数据。这些值可以通过 Vault 或 Sponge 权限 API 被其他插件读取或修改。

## `/lp user/group <玩家|权限组> meta unset <键名> <值> [上下文...]`

**所需权限：** `luckperms.user.meta.unset` 或 `luckperms.group.meta.unset`    
**可用参数：**

* `<键名>` - 解除设置的键名
* `[上下文...]` - 解除设置键名的[上下文](features.context.md)

对玩家/权限组取消设置指定的键值对元数据。

## `/lp user/group <玩家|权限组> meta settemp <键名> <值> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.meta.settemp` 或 `luckperms.group.meta.settemp`    
**可用参数：**

* `<键名>` - 所要设置的键名
* `<值>` - 要对键名赋予的值
* `<时间>` - 元数据的有效时间长度
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 设置这条元数据的[上下文](features.context.md)

为玩家/权限组临时添加继承权限组。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。

LuckPerms 使用的时间格式与 java 中使用的 [SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) 相似。如，`1M` 表示一个月，而 `1m` 才表示一分钟。

“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> meta unsettemp <键名> [上下文...]`

**所需权限：** `luckperms.user.meta.unsettemp` 或 `luckperms.group.meta.unsettemp`    
**可用参数：**

* `<键名>` - 解除设置的键名
* `[上下文...]` - 解除设置键名的上下文

为玩家/权限组解除设置指定的键值对元数据。

## `/lp user/group <玩家|权限组> meta addprefix <权重> <前缀> [上下文...]`

**所需权限：** `luckperms.user.meta.addprefix` 或 `luckperms.group.meta.addprefix`    
**可用参数：**

* `<权重>` - 所给予前缀的优先级
* `<前缀>` - 前缀的显示内容
* `[上下文...]` - 给予前缀的[上下文](features.context.md)

向玩家/权限组添加前缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。

## `/lp user/group <玩家|权限组> meta addsuffix <权重> <后缀> [上下文...]`

**所需权限：** `luckperms.user.meta.addsuffix` 或 `luckperms.group.meta.addsuffix`    
**可用参数：**

* `<权重>` - 所给予后缀的优先级
* `<后缀>` - 后缀的显示内容
* `[上下文...]` - 给予后缀的[上下文](features.context.md)

向玩家/权限组添加后缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。

## `/lp user/group <玩家|权限组> meta setprefix [权重] <前缀> [上下文...]`

**所需权限：** `luckperms.user.meta.setprefix` 或 `luckperms.group.meta.setprefix`    
**可用参数：**

* `[权重]` - 所给予前缀的优先级
* `<前缀>` - 前缀的显示内容
* `[上下文...]` - 给予前缀的[上下文](features.context.md)

为玩家/权限组设置前缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。与 `addprefix` 命令不同的是，使用该命令加入前缀之后，在同一上下文中的其他前缀会被删除。另外一个区别就是权重参数在 `setprefix` 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。 

## `/lp user/group <玩家|权限组> meta setsuffix [权重] <后缀> [上下文...]`

**所需权限：** `luckperms.user.meta.setsuffix` 或 `luckperms.group.meta.setsuffix`    
**可用参数：**

* `[权重]` - 所给予后缀的优先级
* `<后缀>` - 后缀的显示内容
* `[上下文...]` - 给予后缀的[上下文](features.context.md)

为玩家/权限组设置后缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。与 `addprefix` 命令不同的是，使用该命令加入后缀之后，在同一上下文中的其他后缀会被删除。另外一个区别就是权重参数在 `setprefix` 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。 

## `/lp user/group <玩家|权限组> meta removeprefix <权重> [前缀] [上下文...]`

**所需权限：** `luckperms.user.meta.removeprefix` 或 `luckperms.group.meta.removeprefix`    
**可用参数：**

* `<权重>` - 所移除前缀的优先级
* `[前缀]` - 前缀的显示内容
* `[上下文...]` - 移除前缀的[上下文](features.context.md)

为玩家/权限组移除前缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。

## `/lp user/group <玩家|权限组> meta removesuffix <权重> [后缀] [上下文...]`

**所需权限：** `luckperms.user.meta.removesuffix` 或 `luckperms.group.meta.removesuffix`    
**可用参数：**

* `<权重>` - 所移除后缀的优先级
* `[后缀]` - 后缀的显示内容
* `[上下文...]` - 移除后缀的[上下文](features.context.md)

为玩家/权限组移除后缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。

## `/lp user/group <玩家|权限组> meta addtempprefix <权重> <前缀> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.meta.addtempprefix` 或 `luckperms.group.meta.addtempprefix`    
**可用参数：**

* `<权重>` - 所给予前缀的优先级
* `<前缀>` - 前缀的显示内容
* `<时间>` - 前缀的有效时间
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 给予前缀的[上下文](features.context.md)

向玩家/权限组添加临时前缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。

“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> meta addtempsuffix <权重> <后缀> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.meta.addtempsuffix` 或 `luckperms.group.meta.addtempsuffix`    
**可用参数：**

* `<权重>` - 所给予后缀的优先级
* `<后缀>` - 后缀的显示内容
* `<时间>` - 后缀的有效时间
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 给予后缀的[上下文](features.context.md)

向玩家/权限组添加临时后缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。
“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> meta settempprefix [权重] <前缀> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.meta.settempprefix` 或 `luckperms.group.meta.settempprefix`    
**可用参数：**

* `[权重]` - 所给予前缀的优先级
* `<前缀>` - 前缀的显示内容
* `<时间>` - 前缀的有效时间
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 给予前缀的[上下文](features.context.md)

为玩家/权限组设置临时前缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。与 `addtempprefix` 命令不同的是，使用该命令加入前缀之后，在同一上下文中的其他前缀会被删除。另外一个区别就是权重参数在 `setprefix` 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。 

填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。
“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> meta settempsuffix [权重] <后缀> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.meta.settempsuffix` 或 `luckperms.group.meta.settempsuffix`    
**可用参数：**

* `[权重]` - 所给予后缀的优先级
* `<后缀>` - 后缀的显示内容
* `<时间>` - 后缀的有效时间
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 给予后缀的[上下文](features.context.md)

为玩家/权限组设置临时后缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。与 `addtempsuffix` 命令不同的是，使用该命令加入后缀之后，在同一上下文中的其他后缀会被删除。另外一个区别就是权重参数在 `setsuffix` 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。 

填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。
“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> meta removetempprefix <权重> [前缀] [上下文...]`

**所需权限：** `luckperms.user.meta.removetempprefix` 或 `luckperms.group.meta.removetempprefix`    
**可用参数：**

* `<权重>` - 所移除前缀的优先级
* `[前缀]` - 前缀的显示内容
* `[上下文...]` - 移除前缀的[上下文](features.context.md)

从玩家/权限组中移除临时前缀。你可以将其包裹在英文双引号 `" "` 之间来向前缀加入空格。

## `/lp user/group <玩家|权限组> meta removetempsuffix <权重> [后缀] [上下文...]`

**所需权限：** `luckperms.user.meta.removetempsuffix` 或 `luckperms.group.meta.removetempsuffix`    
**可用参数：**

* `<权重>` - 所移除后缀的优先级
* `[后缀]` - 后缀的显示内容
* `[上下文...]` - 移除后缀的[上下文](features.context.md)

从玩家/权限组中移除临时后缀。你可以将其包裹在英文双引号 `" "` 之间来向后缀加入空格。

## `/lp user/group <玩家|权限组> meta clear [类型] [上下文...]`

**所需权限：** `luckperms.user.meta.clear` 或 `luckperms.group.meta.clear`    
**可用参数：**

* `[类型]` - 所要清除的元数据类型

|类型|含义|
|---|---|
|`any/all/*`|默认类型 —— 清除所有元数据|
|`chat/chatmeta`|清除所有前后缀|
|`meta`|清除所有非聊天元数据（除前后缀外的所有元数据）|
|`prefix/prefixes`|清楚前缀|
|`suffix/suffixes`|清除后缀|

* `[上下文...]` - 过滤的上下文内容

移除所有元数据/前缀/后缀。