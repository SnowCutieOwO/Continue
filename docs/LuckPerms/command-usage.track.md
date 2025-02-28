# 路线命令 

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [/lp track <路线> `info`](#lp-track-路线-info)
* [/lp track <路线> `editor`](#lp-track-路线-editor)
* [/lp track <路线> `append` <权限组>](#lp-track-路线-append-权限组)
* [/lp track <路线> `insert` <权限组> <位置>](#lp-track-路线-insert-权限组-位置)
* [/lp track <路线> `remove` <权限组>](#lp-track-路线-remove-权限组)
* [/lp track <路线> `clear`](#lp-track-路线-clear)
* [/lp track <路线> `rename` <新名称>](#lp-track-路线-rename-新名称)
* [/lp track <路线> `clone` <复制名称>](#lp-track-路线-clone-复制名称)

## `/lp track <路线> info`

**所需权限：** `luckperms.track.info`

显示路线内的所有权限组。

## `/lp track <路线> editor`

**所需权限：** `luckperms.track.editor`

打开编辑指定路线的网页权限编辑器。在改动保存后，界面会显示一条用于应用改动的命令。

## `/lp track <路线> append <权限组>`

**所需权限：** `luckperms.track.append`
**可用参数：**

* `<权限组>` - 添加的权限组

在路线末加入指定的权限组。

## `/lp track <路线> insert <权限组> <位置>`

**所需权限：** `luckperms.track.insert`
**可用参数：**

* `<权限组>` - 插入的权限组
* `<位置>` - 插入权限组的位置

在路线的指定位置加入权限组。例如位置 1 表示将其插入路线开头。

## `/lp track <路线> remove <权限组>`

**所需权限：** `luckperms.track.remove`
**可用参数：**

* `<权限组>` - 要移除的权限组

从路线中移除指定的权限组。

## `/lp track <路线> clear`

**所需权限：** `luckperms.track.clear`

移除路线中的所有权限组。

## `/lp track <路线> rename <新名称>`

**所需权限：** `luckperms.track.rename`
**可用参数：**

* `<新名称>` - 路线的新名称

重命名路线。

## `/lp track <路线> clone <复制名称>`

**所需权限：** `luckperms.track.clone`
**可用参数：**

* `<新名称>` - 复制路线的名称

复制指定的路线并将其命名为给定的新名称。