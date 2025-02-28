# 权限组命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [/lp group <权限组> `info`](#lp-group-权限组-info)
* [/lp group <权限组> `permission`](command-usage.permission.md)
* [/lp group <权限组> `parent`](command-usage.parent.md)
* [/lp group <权限组> `meta`](command-usage.meta.md)
* [/lp group <权限组> `editor`](#lp-group-权限组-editor)
* [/lp group <权限组> `listmembers` [页码]](#lp-group-权限组-listmembers-页码)
* [/lp group <权限组> `setweight` <权重>](#lp-group-权限组-setweight-权重)
* [/lp group <权限组> `setdisplayname` <名称> [上下文...]](#lp-group-权限组-setdisplayname-名称)
* [/lp group <权限组> `showtracks`](#lp-group-权限组-showtracks)
* [/lp group <权限组> `clear` [上下文...]](#lp-group-权限组-clear-上下文)
* [/lp group <权限组> `rename` <新名称>](#lp-group-权限组-rename-新名称)
* [/lp group <权限组> `clone` <复制组名称>](#lp-group-权限组-clone-复制组名称)

## `/lp group <权限组> info`

**所需权限：** `luckperms.group.info`    
显示指定组的信息。

## `/lp group <权限组> editor`

**所需权限：** `luckperms.group.editor`    
打开编辑指定权限组权限数据的网页界面。在改动保存后，界面会显示一条用于应用改动的命令。

## `/lp group <权限组> listmembers [页码]`

**所需权限：** `luckperms.group.listmembers`    
**可用参数：** 

* `[页码]` - 浏览的页码

显示直接继承该组的其他玩家/权限组列表。

## `/lp group <权限组> setweight <权重>`

**所需权限：** `luckperms.group.setweight`    
**可用参数：** 

* `<权重>` - 设置的权重

设置权限组的权重，决定了在计算玩家权限时对应组别参与判断的优先级。值更高 = 权重更大。

## `/lp group <权限组> setdisplayname <名称>`

**所需权限：** `luckperms.group.setdisplayname`    
**可用参数：** 

* `<名称>` - 设置的名称
* `[上下文...]` - 显示该名称的[上下文](features.context.md)

设置权限组的显示名称。可以用于表示权限组的“别称”。

## `/lp group <权限组> showtracks`

**所需权限：** `luckperms.group.showtracks`    

显示该权限组所处的路线位置。

## `/lp group <权限组> clear [上下文]`

**所需权限：** `luckperms.group.clear`    
**可用参数：** 

* `[上下文...]` - 用于过滤的[上下文](features.context.md)

清除权限组的权限、继承组及元数据内容。

## `/lp group <权限组> rename <新名称>`

**所需权限：** `luckperms.group.rename`    
**可用参数：** 

* `<新名称>` - 权限组的新名称

修改权限组的名称。需要注意的是该组内的成员不会被提醒相关变动，并在相关内容中继续使用旧权限组的名称。若你需要更新，你需要使用微调功能来更新现有的数据条目。

## `/lp group <权限组> clone <复制组名称>`

**所需权限：** `luckperms.group.clone`    
**可用参数：** 

* `<复制组名称>` - 复制后新组的名称

将已有权限组的数据复制并存入按名称创建的新权限组。