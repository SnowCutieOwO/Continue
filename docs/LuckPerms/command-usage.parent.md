# 权限组命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `## `/lpb` 而不是 `## `/lp`
* 在使用 Velocity 时应该使用 `## `/lpv` 而不是 `## `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [`info`](#lp-usergroup-玩家权限组-parent-info-页码-排序模式)
* [`set` <权限组> [上下文...]](#lp-usergroup-玩家权限组-parent-set-权限组-上下文)
* [`add` <权限组> [上下文...]](#lp-usergroup-玩家权限组-parent-set-权限组-上下文)
* [`remove` <权限组> [上下文...]](#lp-usergroup-玩家权限组-parent-remove-权限组-上下文)
* [`settrack` <路线> <序号|权限组> [上下文...]](#lp-usergroup-玩家权限组-parent-settrack-路线-索引权限组-上下文)
* [`addtemp` <权限组> <时间> [施加模式] [上下文...]](#lp-usergroup-玩家权限组-parent-addtemp-权限组-时间-施加模式-上下文)
* [`removetemp` <权限组> [duration] [上下文...]](#lp-usergroup-玩家权限组-parent-removetemp-权限组-duration-上下文)
* [`clear` [上下文...]](#lp-usergroup-玩家权限组-parent-clear-上下文)
* [`cleartrack` <路线> [上下文...]](#lp-usergroup-玩家权限组-parent-cleartrack-路线-上下文)
* [`switchprimarygroup` <权限组>](#lp-user-user-parent-switchprimarygroup-权限组)

## `/lp user/group <玩家|权限组> parent info [页码] [排序模式]`

**所需权限：** `luckperms.user.parent.info` 或 `luckperms.group.parent.info`    
**可用参数：**

* `[页码]` - 浏览的页码
* `[排序模式]` - 结果的排序方式

显示玩家/权限组的继承关系（继承的权限组等）。

“排序模式”参数允许你指定权限排列的顺序。你可以下列的四个选项之间选择。

|排序方式|描述|
|---|---|
|`priority`|结果将会按核心的继承规则排序|
|`!priority/reverse`|将会按权重反向排序列表|
|`abc/alphabetically`|将会按字母顺序（A-Z）排序|
|`!abc/!alphabetically`|将会按字母顺序反向（Z-A）排序|

## `/lp user/group <玩家|权限组> parent set <权限组> [上下文...]`

**所需权限：** `luckperms.user.parent.set` 或 `luckperms.group.parent.set`    
**可用参数：**

* `<权限组>` - 所设置的权限组
* `[上下文...]` - 所设置权限组的[上下文](features.context.md)

设置玩家/权限组的继承。与“parent add”命令不同的是，这条命令会清除所有给定上下文的权限组。添加命令只会直接将继承关系“加在”已有的玩家/权限组继承关系上。若命令执行时不指定上下文，则命令也会更新玩家所在的主权限组。

## `/lp user/group <玩家|权限组> parent add <权限组> [上下文...]`

**所需权限：** `luckperms.user.parent.add` 或 `luckperms.group.parent.add`    
**可用参数：**

* `<权限组>` - 所添加的权限组
* `[上下文...]` - 所添加权限组的[上下文](features.context.md)


为玩家/权限组添加继承关系。与“parent set”命令不同的是，这条命令添加的继承关系会直接加在已有的继承关系之上。其他继承的组不会被删除，玩家的主权限组也不会受到干扰。

## `/lp user/group <玩家|权限组> parent remove <权限组> [上下文...]`

**所需权限：** `luckperms.user.parent.remove` 或 `luckperms.group.parent.remove`    
**可用参数：**

* `<权限组>` - 移除的权限组
* `[上下文...]` - 移除权限组的上下文

为玩家/权限组移除继承关系。
若移除的组为玩家的主权限组，默认将其设置回主权限组。

## `/lp user/group <玩家|权限组> parent settrack <路线> <索引|权限组> [上下文...]`

**所需权限：** `luckperms.user.parent.settrack` 或 `luckperms.group.parent.settrack`    
**可用参数：**

* `<路线>` - 设置的路线
* `<索引|权限组>` - 所设置的权限组或表示给定路线中权限组所处的位置序号
* `[上下文...]` - 所设置权限组的上下文

在给定路线上设置玩家/权限组的位置。这条命令与设置命令相同，但它会清除指定路线上的其他所有权限组。其他继承权限组不受影响。

## `/lp user/group <玩家|权限组> parent addtemp <权限组> <时间> [施加模式] [上下文...]`

**所需权限：** `luckperms.user.parent.addtemp` 或 `luckperms.group.parent.addtemp`    
**可用参数：**

* `<权限组>` - 所添加的权限组
* `<时间>` - 权限组的有效时间
* `[施加模式]` - 临时权限的叠加方式
* `[上下文...]` - 所添加权限组的上下文

为玩家/权限组临时添加继承权限组。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。

“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。

|模式关键词|描述|
|---|---|
|`accumulate`|新加入的权限时长会叠加在已有的时长之上|
|`replace`|保留持续时间最长的权限节点|
|`deny`|不接受重复的限时权限节点，若有则拒绝执行命令|

## `/lp user/group <玩家|权限组> parent removetemp <权限组> [duration] [上下文...]`

**所需权限：** `luckperms.user.parent.removetemp` 或 `luckperms.group.parent.removetemp`    
**可用参数：**

* `<权限组>` - 移除的权限组
* `[时间]` - 临时权限节点减少的时间长度，若省略表示直接移除
* `[上下文...]` - 移除权限组的上下文

为玩家/权限组解除临时权限的设置。

## `/lp user/group <玩家|权限组> parent clear [上下文...]`

**所需权限：** `luckperms.user.parent.clear` 或 `luckperms.group.parent.clear`    
**可用参数：**

* `[上下文...]` - 过滤的上下文

移除玩家/权限组的所有权限。
也会一并影响到默认组。

## `/lp user/group <玩家|权限组> parent cleartrack <路线> [上下文...]`

**所需权限：** `luckperms.user.parent.cleartrack` 或 `luckperms.group.parent.cleartrack`    
**可用参数：**

* `<路线>` - 所移动的路线
* `[上下文...]` - 过滤的上下文

移除指定路线上玩家/权限组的所有继承关系。

## `/lp user <user> parent switchprimarygroup <权限组>`

**所需权限：** `luckperms.user.parent.switchprimarygroup`    
**可用参数：**

* `<权限组>` - 切换至的权限组

该命令一般只能对着玩家使用 - 权限组没有“主（默认）”权限组的概念。

该命令允许你修改玩家的默认权限组。若他们还不是指定权限组的成员，他们会立刻加入。该命令不应用于替代“parent set”命令。已存在的主权限组不会作为继承组被移除（玩家可以继承多个权限组）。

若 LuckPerms 配置文件中的 `primary-group-calculation` 被设置为了“stored”以外的内容，你应该使用 [`parent add`](#lp-usergroup-usergroup-parent-add-权限组-上下文) 或 [`parent set`](#lp-usergroup-usergroup-parent-set-权限组-上下文) 而不是这条命令。