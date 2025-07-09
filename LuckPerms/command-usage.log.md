# 日志命令

此为**命令用法**的子页面，[点此返回](command-usage.md)。

主页提到的一些关键点：

* 在使用 BungeeCord 时应该使用 `/lpb` 而不是 `/lp`
* 在使用 Velocity 时应该使用 `/lpv` 而不是 `/lp`
* 尖括号标注的是必填参数 —— 如 `<必选参数>`
* 方括号标注的是可选参数 —— 如 `[可选参数]`
* 若要在参数中使用空格，请将参数用双引号包裹 —— 如`" "`

## 目录

* [/lp log `recent` [玩家] [页码]](#lp-log-recent-玩家-页码)
* [/lp log `search` <关键词> [页码]](#lp-log-search-关键词-页码)
* [/lp log `notify` [on|off]](#lp-log-notify-onoff)
* [/lp log `userhistory` <玩家> [页码]](#lp-log-userhistory-玩家-页码)
* [/lp log `grouphistory` <权限组> [页码]](#lp-log-grouphistory-权限组-页码)
* [/lp log `trackhistory` <路线> [页码]](#lp-log-trackhistory-路线-页码)

## `/lp log recent [玩家] [页码]`

**所需权限：** `luckperms.log.recent`
**可用参数：**

* `[玩家]` - 筛选的玩家/UUID
* `[页码]` - 浏览的页码

显示指定玩家最近操作的列表。

## `/lp log search <关键词> [页码]`

**所需权限：** `luckperms.log.search`
**可用参数：**

* `<关键词>` - 参与搜索的关键词
* `[页码]` - 浏览的页码

按给定关键词搜索日志条目。

## `/lp log notify [on|off]`

**所需权限：** `luckperms.log.notify`
**可用参数：**

* `[on|off]` - 是否启用或禁用

切换命令执行者的日志提醒可见性。

## `/lp log userhistory <玩家> [页码]`

**所需权限：** `luckperms.log.userhistory`
**可用参数：**

* `<玩家>` - 所要搜索的玩家
* `[页码]` - 浏览的页码

按给定玩家名称搜索日志条目。

## `/lp log grouphistory <权限组> [页码]`

**所需权限：** `luckperms.log.grouphistory`
**可用参数：**

* `<权限组>` - 所要搜索的权限组
* `[页码]` - 浏览的页码

按给定权限组名称搜索日志条目。

## `/lp log trackhistory <路线> [页码]`

**所需权限：** `luckperms.log.trackhistory`
**可用参数：**

* `<路线>` - 所要搜索的路线
* `[页码]` - 浏览的页码

按给定路线搜索日志条目。