# 路线

LuckPerms 有它自己的（所谓）独特的路线系统，尽管其他主流的权限插件也有相似的功能。

你可以把路线看做“爬梯”或“升级路线”。

* * *
需要注意的是，路线仅为一种为玩家设计的，便捷的升级/降级功能，本身**不影响任何继承**。
* * *

### 示例一

我可能有一条叫做“staff”的路线。这个路线包含了如下几个权限组：

**default ➡️ helper ➡️ mod ➡️ admin**

我可以用这条路线来升级或降级玩家。

例如，如果“Notch”在“helper”组中，我想要将他升级为“mod”组，你可以执行这条命令：

`/luckperms user Notch promote staff`

### 示例二

我可能有一条给捐赠者的道路，这个路线包含了如下权限组：

**default ➡️ iron ➡️ gold ➡️ diamond**

那么我之后可以在他们购买“升级”时使用如下命令将他们升级到路线的下一级对应组别中去：

`/luckperms user Luck promote donator`

若要将某玩家降级，你可以使用降级（demote）命令。

## 创建路线

只需输入命令 `/luckperms createtrack <名称>`，然后再输入 `/luckperms track <名称> append <权限组>` 将每个权限组添加至路线中即可。这里也有其他帮助编辑路线的命令，你可以在“[命令用法](command-usage.md)”章节找到它们。