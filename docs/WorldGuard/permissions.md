# 权限列表

默认情况下，没有人可以使用 WorldGuard。为了让你、管理员、版主或玩家使用 WorldGuard，你需要为他们提供正确的权限。其中一种方法就是给这些用户以 OP 或版主权限（除非在配置文本中禁用管理员默认获得插件权限的功能），但给予本页面中的权限（通过任一权限插件）更为方便。

你可以将权限 `worldguard.*` 给予你自己或其他管理员，以让他们获得对该插件的完全控制权。

## 管理员权限

|权限|描述|
|---|---|
|worldguard.notify|在设置了“notify”中的黑名单操作和区域内收到对应的提示。|
|worldguard.region.bypass.<世界名称>|绕过指定世界的除 PVP 保护外的各种保护。|
|worldguard.region.toggle-bypass|允许通过 `/rg bypass` 命令切换上述功能（但仍需要有绕过权限）。|
|worldguard.chest-protection.override|绕过聊天保护并开启受保护的箱子。|
|worldguard.god.override-regions|允许在 `invicibility` 标志设置为 `DENY` 的区域内保持上帝模式。|
|worldguard.auto-invincible|配置文本 `auto-invicible` 选项启用时自动在登录时隐身。|
|worldguard.override.potions|允许使用 `blocked-potions` 配置中禁用的药水效果。|
|worldguard.override.lighter|无视配置文本中的 `ignition.block-lighter` 使用打火石或烈焰弹。|
|worldguard.override.infinite-stack|无视配置文本中的 `protection.remove-infinite-stacks` 选项设置。|


::: warning
如果你是 OP 或拥有全部权限，你也会拥有上述保护权限，导致原本区域设置的保护标志对你不起作用。
:::

## 命令权限

见“命令列表”章节来获取这些命令的详细解释。

|权限|描述|
|---|---|
|worldguard.god|允许使用 `/god`（和 `/ungod`）命令。|
|worldguard.god.other|允许对其他玩家使用 `/god`（和 `/ungod`）命令。|
|worldguard.heal|允许使用 `/heal` 命令。|
|worldguard.heal.other|允许对其他玩家使用 `/heal` 命令。|
|worldguard.slay|允许使用 `/slay` 命令。|
|worldguard.slay.other|允许对其他玩家使用 `/slay` 命令。|
|worldguard.locate|允许使用 `/locate` 命令。|
|worldguard.stack|允许使用 `/stack` 命令。|
|worldguard.stack.illegitimate|允许通过 `/stack` 命令制作堆叠数量非法的物品（例如 64 个水桶）。|
|worldguard.fire-toggle.stop|允许使用 `/stopfire` 和 `/allowfire` 命令。|
|worldguard.halt-activity|允许使用 `/stoplag` 命令。|
|worldguard.reload|允许使用 `/wg reload` 命令。|
|worldguard.report|允许使用 `/wg report` 命令。|
|worldguard.profile|允许使用 `/wg profile` 命令。|
|worldguard.report.pastebin|允许将服务器报告上传至在线剪贴板。|
|worldguard.flushstates|允许使用 `/wg flushstates` 命令。|
|worldguard.running|允许使用 `/wg running` 命令。|
|worldguard.debug.event|允许使用 `/wg debug` 命令。这些命令是用于模拟特殊操作的，例如，以此可以追踪哪个插件拦截了玩家 PVP。但是，这也允许了管理员冒用其他玩家的身份。|

## 区域权限

|权限|描述|
|---|---|
|worldguard.region.wand|允许使用区域魔杖。|
|worldguard.region.load|允许使用 `/rg load` 命令。|
|worldguard.region.save|允许使用 `/rg save` 命令。|
|worldguard.region.migratedb|允许使用 `/rg migratedb` 命令。|
|worldguard.region.migrateuuid|允许使用 `/rg migrateuuid` 命令。|
|worldguard.region.migrateheights|允许使用 `/rg migrateheights` 命令。|
|worldguard.region.define|允许使用 `/rg define` 命令。|
|worldguard.region.claim|允许使用 `/rg claim` 命令。|
|worldguard.region.unlimited|绕过区域领取数量限制。|
|worldguard.region.list|允许使用 `/rg list` 命令。|
|worldguard.region.list.own|允许使用 `/rg list` 命令，且能在自己区域上使用。|

### 分区域权限

下列权限支持通过基础权限（例如 `worldguard.region.redefine`）使用，但也可以通过指定的权限使得区域成员使用命令（需要注意的是区域的拥有者也是其成员）：

* `worldguard.region.redefine.own.<区域名称>`
* `worldguard.region.redefine.member.<区域名称>`
* `worldguard.region.redefine.<区域名称>`

支持使用通配符的权限管理插件也可以用于给予任意分类的所有权限，例如：

* `worldguard.region.redefine.own.*`

|权限|描述|
|---|---|
|worldguard.region.redefine.*|允许使用 `/rg redefine` 命令。|
|worldguard.region.remove.*|允许使用 `/rg remove` 命令。|
|worldguard.region.setpriority.*|允许使用 `/rg setpriority`命令。|
|worldguard.region.setparent.*|允许使用 `/rg setparent` 命令。|
|worldguard.region.select.*|允许使用 `/rg select` 命令。|
|worldguard.region.info.*|允许使用 `/rg info` 和 `/rg flags` 命令。|
|worldguard.region.teleport.*|允许使用 `/rg teleport` 命令。|
|worldguard.region.teleportcenter.*|允许在观察者模式下使用 `/rg teleport -c` 命令。|
|worldguard.region.addmember.*|允许使用 `/rg addmember` 命令。|
|worldguard.region.addowner.*|允许使用 `/rg addowner` 命令。|
|worldguard.region.removemember.*|允许使用 `/rg removemember` 命令。|
|worldguard.region.removeowner.*|允许使用 `/rg removeowner` 命令。|
|worldguard.region.locationoverride.*|无视配置文本中 `regions.location-flags-only-inside-regions` 选项的设置。|

::: info 示例：允许玩家查看自己所拥有区域的详细信息

使用形如 own.* 的权限。

```
worldguard.region.info.own.*
```
:::

::: info 示例：允许所有玩家使用命令 `/rg teleport city`

区域名称可以在权限节点中添加。
```
worldguard.region.teleport.city.*
```
:::

### 标志命令权限

命令 `/rg flag` 有如下基础权限：

```
worldguard.region.flag.*
```

另外，比起提供对应的权限，你可以按下列方式为玩家设置权限。


* 决定*哪个区域*可以通过玩家自由修改标志，可给予下列权限之一（于上一章节所提及的权限相同）：
  * `worldguard.region.flag.regions.own.<区域名称>`
  * `worldguard.region.flag.regions.member.<区域名称>`
  * `worldguard.region.flag.regions.<区域名称>`
* 总之，若要决定*哪种标志*可以被玩家设置，可将下列权限给予玩家：
* `worldguard.region.flag.flags.<标志名称>.<设置的值>.own.<区域名称>`
* `worldguard.region.flag.flags.<标志名称>.<设置的值>.member.<区域名称>`
* `worldguard.region.flag.flags.<标志名称>.<设置的值>.<区域名称>`    
`<设置的值>` 可以是 `allow`、`deny` 或 `unset`（如果没有预先提供）等。更复杂的值也会被检查，但是，诸如 `,` 和 `.` 等的特殊字符会被忽略。

::: info 示例：允许玩家只能修改自己拥有的区域，并限制他们只能修改 `use` 和 `chest-access` 标志的状态

你需要给玩家提供下列权限：
```
worldguard.region.flag.regions.own.*
worldguard.region.flag.flags.use.*
worldguard.region.flag.flags.chest-access.*
```

:::

## 分页面

* [建筑权限](permissions.build-permissions.md)
