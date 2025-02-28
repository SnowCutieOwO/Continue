# 基于参数的命令权限

该页面是配置文件中 `argument-based-command-permissions` 的详细解释。

**若要下列权限能够正常工作，你必须在 [config.yml](configuration.md) 中启用 [`argument-based-command-permissions`](configuration.md#argument-based-command-permissions) 项！**

在该项启用后，LuckPerms 会在玩家尝试修改或浏览权限数据时启用额外的权限检查。

这些权限允许对玩家修改进行更好的控制，包括阻止他们获取某个权限组的权限，或对某些上下文进行修改。

额外的检查可被分为三部分。

### 目录

* [**在玩家浏览/修改自己或其他玩家时的检查**](#在玩家浏览修改自己或其他玩家时的检查)
    * [修改自身](#修改自身)
    * [修改其他玩家](#修改其他玩家)
    * [浏览自身](#浏览自身)
    * [浏览其他玩家](#浏览其他玩家)
* [**在玩家浏览/修改权限组时的检查**](#在玩家浏览修改权限组时的检查)
    * [修改权限组](#修改权限组)
    * [浏览权限组](#浏览权限组)
* [**在玩家对指定上下文进行修改时的检查**](#在玩家对指定上下文进行修改时的检查)
    * [修改全局上下文](#修改全局上下文)
    * [修改指定部分上下文](#修改指定部分上下文)
* [**在玩家对指定参数修改时的检查**](#在玩家对指定参数修改时的检查)

## 在玩家浏览/修改自己或其他玩家时的检查

### 修改自身

在玩家尝试使用命令修改自身时，LuckPerms 将会检查 `[基础命令权限].modify.self` 权限。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.modify.user.self` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp user check clear`，LuckPerms 会按顺序检查下列权限：

* `luckperms.user.clear`
* `luckperms.user.clear.modify.self`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.modify.user.self`

如果这些检查都返回了 false，则操作会被阻止。

### 修改其他玩家

当玩家尝试使用命令修改其他玩家时，LuckPerms 会检查 `[基础命令权限].modify.others` 权限。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.modify.user.others` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp user Notch clear`，LuckPerms 会按顺序检查下列权限：

* `luckperms.user.clear`
* `luckperms.user.clear.modify.others`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.modify.user.others`

如果这些检查都返回了 false，则操作会被阻止。

### 浏览自身

当玩家尝试使用命令浏览自己的数据时，LuckPerms 会检查 `[基础命令权限].view.self` 权限。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.view.user.self` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp user Luck permission info`，LuckPerms 会按顺序检查下列权限：

* `luckperms.user.clear`
* `luckperms.user.clear.view.self`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.view.user.self`

如果这些检查都返回了 false，则操作会被阻止。

### 浏览其他玩家

当玩家尝试使用命令浏览自己的数据时，LuckPerms 会检查 `[基础命令权限].view.others` 权限。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.view.user.others` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp user Luck permission info`，LuckPerms 会按顺序检查下列权限：

* `luckperms.user.clear`
* `luckperms.user.clear.view.others`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.view.user.others`

如果这些检查都返回了 false，则操作会被阻止。

## 在玩家浏览/修改权限组时的检查

### 修改权限组

当玩家尝试用命令修改权限组时，LuckPerms 会先检查 `[基础命令权限].modify.[权限组名称]`。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.modify.group.[权限组名称]` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp group admin clear`，LuckPerms 会按顺序检查下列权限：

* `luckperms.group.clear`
* `luckperms.group.clear.modify.admin`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.modify.group.admin`

如果这些检查都返回了 false，则操作会被阻止。

### 浏览权限组

当玩家尝试用命令浏览权限组数据包时，LuckPerms 会先检查 `[基础命令权限].view.[权限组名称]`。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.view.group.[权限组名称]` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp group admin permission info`，LuckPerms 会按顺序检查下列权限：

* `luckperms.group.permission.info`
* `luckperms.group.permission.info.view.admin`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.view.group.admin`

如果这些检查都返回了 false，则操作会被阻止。

## 在玩家对指定上下文进行修改时的检查

当玩家尝试用命令对数据进行修改时，若修改的数据带有上下文（只能在指定服务器/世界/上下文中生效），LuckPerms 将会检查额外权限。

### 修改全局上下文

若改动是针对全局上下文的，LuckPerms 将会先检查 `[基础命令权限].usecontext.global`。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.usecontext.global` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp group admin permission set test.node true`，LuckPerms 会按顺序检查下列权限：

* `luckperms.group.permission.set`
* `luckperms.group.permission.set.usecontext.global`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.usecontext.global`

如果这些检查都返回了 false，则操作会被阻止。

### 修改指定部分上下文

若改动不是在全局上下文进行的，LuckPerms 则会检查下列使用的上下文。

它会先检查 `[基础命令权限].usecontext.[上下文键].[上下文值]`。若返回 true，则允许操作，反之则阻止操作。

若玩家被检查时未设置相关值（未定义），LuckPerms 会检查 `luckperms.usecontext.[上下文键].[上下文值]` 权限并以此来代替原有结果。若两个检查都没能返回 true，则阻止玩家的本次操作。

#### 示例

例如，如果我们输入命令 `/lp group admin permission set test.node true server=factions world=nether`，LuckPerms 会按顺序检查下列权限：

* `luckperms.group.permission.set`
* `luckperms.group.permission.set.usecontext.server.factions`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.usecontext.server.factions`
* `luckperms.group.permission.set.usecontext.world.nether`（若检查到玩家拥有这条权限（无论 true/false），则跳过下一条权限的检查）
* `luckperms.usecontext.world.nether`

如果这些检查都返回了 false，则操作会被阻止。

## 在玩家对指定参数修改时的检查

这些检查是对某些命令使用的，且会根据命令中传递的参数发生变化。

例如，`parent add` 命令会基于添加权限组检查额外的权限。

若输入命令 `/lp user Luck parent add admin`，除了检查的其他权限以外，LuckPerms 还会检查 `luckperms.user.parent.add.admin`，这允许你允许玩家使用某个命令，且只能使用特定的参数。

检查的参数在下文列出。

|命令|额外的权限检查|
|---|---|
|permission set|node|
|permission unset|node|
|parent add|group|
|parent set|group|
|parent settrack|group.track|
|parent remove|group|
|parent cleartrack|track|
|meta set|key|
|meta unset|key|
|promote|track.next-group|
|demote|track.old-group|

## 不判定路线上的等级升级指定玩家

这是个非常常见的问题。你需要做的就是添加这些权限：

### 对于 Sponge 和 Spigot：

|权限|值|
|---|---|
|`luckperms.user.promote`|true
|`luckperms.user.promote.*` <--- 仅 Sponge 需要|false|
|`luckperms.user.promote.modify.others`|true|
|`luckperms.user.promote.<路线>.*`|true|
|`luckperms.user.promote.<路线>.<{所有不能经过或达到的等级权限组}>`|false|

表中的最后一个权限中，你需要将所有在该路线无法到达或经过的组用英文花括号 {} 包裹，以英文逗号 `,` 分隔加入其中。例如，你可以设置 `luckperms.user.promote.staff.{admin,owner}` 权限来防止其他玩家升级或经过“admin”和“staff”组。

另外，如果你想要玩家/权限组能够通过全局上下文（无要求）进行升级，你需要添加 `luckperms.usecontext.global` 权限。