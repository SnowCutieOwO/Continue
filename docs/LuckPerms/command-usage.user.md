# 玩家命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [/lp user <玩家> `info`](#lp-user-玩家-info)
* [/lp user <玩家> `permission`](command-usage.permission.md)
* [/lp user <玩家> `parent`](command-usage.parent.md)
* [/lp user <玩家> `meta`](command-usage.meta.md)
* [/lp user <玩家> `editor`](#lp-user-玩家-editor)
* [/lp user <玩家> `promote` <路线> [上下文...]](#lp-user-玩家-promote-路线-上下文-标志)
* [/lp user <玩家> `demote` <路线> [上下文...]](#lp-user-玩家-demote-路线-上下文-标志)
* [/lp user <玩家> `showtracks`](#lp-user-玩家-showtracks)
* [/lp user <玩家> `clear` [上下文...]](#lp-user-玩家-clear-上下文)
* [/lp user <玩家> `clone` <玩家>](#lp-user-玩家-clone-玩家)

## `/lp user <玩家> info`

**所需权限：** `luckperms.user.info`

显示玩家的信息，包括名称、所属初级权限组、继承的权限组以及当前的上下文内容。

## `/lp user <玩家> editor`

**所需权限：** `luckperms.user.editor`

为指定权限组打开编辑权限的界面。在改动保存后，界面会显示一条用于应用改动的命令。

## `/lp user <玩家> promote <路线> [上下文...] [标志...]`

**所需权限：** `luckperms.user.promote`    
**可用参数：** 

* `<路线>` - 晋升的路线名称
* `[上下文...]` - 在 **Flags:** 提升的[上下文](features.context.md)。
* `[--dont-add-to-first]` - 加入该参数后，若玩家在指定路线中没有父权限组，则命令会执行失败
* `[-s]` - 静默执行，不会在路线上显示玩家进度

该命令可以手动晋升指定路线上的玩家。首先，命令会先检查玩家是否处在给定上下文的路线中。若玩家不处于该路线，则在不指定上文提及的参数的情况下，他们会被加入该路线的第一个权限组。若他们已处于该路线的多个位置，则命令将会执行失败。在其他情况下，玩家会正常按路线晋升，并会从当前的权限组中移除。若路线会影响到他们的父权限组，它们也会一并改变。

## `/lp user <玩家> demote <路线> [上下文...] [标志...]`

**所需权限：** `luckperms.user.demote`    
**可用参数：** 

* `<路线>` - 降级的路线名称
* `[上下文...]` - 在 **Flags:** 提升的[上下文](features.context.md)。
* `[--dont-add-to-first]` - 加入该参数后，若玩家在指定路线中没有父权限组，则命令会执行失败
* `[-s]` - 静默执行，不会在路线上显示玩家进度

该命令可以手动降级指定路线上的玩家。首先，命令会先检查玩家是否处在给定上下文的路线中。若玩家不处于该路线，则在不指定上文提及的参数的情况下，他们会被加入该路线的第一个权限组。若他们已处于该路线的多个位置，则命令将会执行失败。在其他情况下，玩家会正常按路线晋升，并会从当前的权限组中移除。若路线会影响到他们的父权限组，它们也会一并改变。

## `/lp user <玩家> showtracks`

**所需权限：** `luckperms.user.showtracks`

显示玩家所处的路线。

## `/lp user <玩家> clear [上下文...]`

**所需权限：** `luckperms.user.clear`
**可用参数：** 

* `[上下文...]` - 过滤的上下文内容

清除玩家的权限、权限组继承关系以及存储的元数据。

## `/lp user <玩家> clone <玩家>`

**所需权限：** `luckperms.user.clone`
**可用参数：** 

* `<玩家>` - 另一个玩家的名称

将玩家数据复制给另一个玩家。