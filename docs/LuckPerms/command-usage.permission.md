# 权限组命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [`info`](#lp-usergroup-usergroup-permission-info-页码-排序方式)
* [`set` <权限> <true/false> [上下文...]](#lp-usergroup-usergroup-permission-set-权限-truefalse-上下文)
* [`unset` <权限> [上下文...]](#lp-usergroup-usergroup-permission-unset-权限-上下文)
* [`settemp` <权限> <true/false> <时间> [施加模式] [上下文...]](#lp-usergroup-usergroup-permission-settemp-权限-truefalse-时间-施加模式-上下文)
* [`unsettemp` <权限> [时间] [上下文...]](#lp-usergroup-usergroup-permission-unsettemp-权限-时间-上下文)
* [`check` <权限>](#lp-usergroup-usergroup-permission-check-权限)
* [`clear` [上下文...]](#lp-usergroup-usergroup-permission-clear-上下文)

## `/lp user/group <玩家|权限组> permission info [页码] [排序方式]`

**所需权限：** `luckperms.user.permission.info` 或 `luckperms.group.permission.info`    
**可用参数：**

* `[页码]` - 浏览的页码
* `[排序方式]` - 结果排序的方式

列出玩家/权限组的权限节点。

“排序模式”参数允许你指定权限排列的顺序。你可以下列的四个选项之间选择。

|排序方式|描述|
|---|---|
|`priority`|结果将会按核心的继承规则排序|
|`!priority/reverse`|将会按权重反向排序列表|
|`abc/alphabetically`|将会按字母顺序（A-Z）排序|
|`!abc/!alphabetically`|将会按字母顺序反向（Z-A）排序|

## `/lp user/group <玩家|权限组> permission set <权限> [true|false] [上下文...]`

**所需权限：** `luckperms.user.permission.set` 或 `luckperms.group.permission.set`    
**可用参数：**

* `<权限>` - 所设置的权限节点
* `[true|false]` - 设置的权限值（默认为 `true`）
* `[上下文...]` - 设置权限的上下文

为玩家/权限组设置（或给予）状态为“true”的权限，表示他们拥有该权限。将值设置为“false”表示夺去权限。不加入任何上下文表示会在“global（全局）”情境中应用该权限的状态。

## `/lp user/group <玩家|权限组> permission unset <权限> [上下文...]`

**所需权限：** `luckperms.user.permission.unset` 或 `luckperms.group.permission.unset`    
**可用参数：**

* `<权限>` - 取消设置的权限节点
* `[上下文...]` - 取消设置权限节点的上下文

为玩家/权限组取消设置（或移除）指定的权限。

## `/lp user/group <玩家|权限组> permission settemp <权限> <true|false> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.permission.settemp` 或 `luckperms.group.permission.settemp`    
**可用参数：**

* `<权限>` - 所设置的权限节点
* `<true|false>` - 设置权限的值
* `<时间>` - 权限的有效时间
* `[施加模式]` - 权限的叠加方式
* `[上下文...]` - 设置权限的上下文

为玩家/权限组设置一个临时权限。将值设置为“false”表示夺去权限。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。

“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> permission unsettemp <权限> [时间] [上下文...]`

**所需权限：** `luckperms.user.permission.unsettemp` 或 `luckperms.group.permission.unsettemp`    
**可用参数：**

* `<权限>` - 取消设置的权限节点
* `[时间]` - 临时权限节点减少的时间长度，若省略表示直接移除
* `[上下文...]` - 取消设置权限节点的上下文

为玩家/权限组解除临时权限的设置。

## `/lp user/group <玩家|权限组> permission check <权限>`

**所需权限：** `luckperms.user.permission.check` 或 `luckperms.group.permission.check`    
**可用参数：**

* `<权限>` - 检查的权限节点

检查玩家/权限组是否拥有指定权限，并会列出影响检查结果的相关信息。

## `/lp user/group <玩家|权限组> permission clear [上下文...]`

**所需权限：** `luckperms.user.permission.clear` 或 `luckperms.group.permission.clear`    
**可用参数：**

* `[上下文...]` - 过滤的[上下文](features.context.md)

移除玩家/权限组的所有权限。