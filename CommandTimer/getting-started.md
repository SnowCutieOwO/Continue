# 初次使用
跟随本教程创建你的第一个定时命令

CommandTimer 以任务的形式运作。任务是在一次执行表内同时触发的命令集合。执行表则为一系列的设置与条件，用以定义各个命令执行的细节与限制条件。

## 创建定时任务

所有工作都始于 `/cmt` 命令。输入命令后会为你打开一个能管理大部分内容的界面。

点击菜单中的纸可创建一个新的定时任务。

## 插件命令

|命令|命令描述|所需权限|
|---|---|---|
|`/cmt`|打开管理大部分内容的菜单界面|`commandtimer.mamage`|
|`/cmt help`|获取帮助列表|本插件的任意权限|
|`/cmt time`|获取当前世界的时间|本插件的任意权限|
|`/cmt activate <定时任务名称>`|启用指定的定时任务|`commandtimer.activate` 或 `commandtimer.toggle`|
|`/cmt deactivate <定时任务名称>`|禁用指定的定时任务|`commandtimer.deactivate` 或 `commandtimer.toggle`|
|`/cmt execute <定时任务名称>`|立即执行指定的定时任务|`commandtimer.execute`|
|`/cmt reload`|重载插件。拓展模块不会自动重载。**不推荐使用该方法重载插件**|`commandtimer.manage`|
