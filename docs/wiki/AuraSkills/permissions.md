# 权限

插件权限列表

权限用于控制玩家是否可以使用命令、技能等其他功能。除此之外，经验倍率也可通过权限控制。

## 立碑

默认值：

* `true` - 玩家默认拥有该权限。
* `op` - 仅管理员默认拥有该权限。
* `false` - 没有人默认拥有该权限。

以 `|` 分隔的参数表示该权限控制对应的所有命令。

|权限节点|描述/命令|默认值|
|---|---|---|
|`auraskills.multiplier.[百分比]`|玩家获取经验的倍率。在 `百分比` 处填入玩家额外获取经验的百分比。示例：`auraskills.multiplier.100` 表示玩家额外获取 100% 经验，即双倍经验倍率。|false|
|`auraskills.multiplier.[技能名称].[百分比]`|玩家指定技能获取经验的倍率。在 `技能名称` 处填入技能英文原名。另一参数同上。示例：`auraskills.multiplier.farming.50`|false|
|`auraskills.skill.[技能名称]`|允许使用指定技能的权限。在 `百分比` 处填入技能英文原名。若权限设置为 false，玩家将无法获取对应技能经验值、使用或获取其属性。示例：`auraskills.skill.mining`|true|
|`auraskills.command.skills`|`/skills`|true|
|`auraskills.command.stats`|`/stats`|true|
|`auraskills.command.sources`|`/sources`|true|
|`auraskills.command.help`|`/sk help`（仅对有权限的玩家展示帮助列表）|true|
|`auraskills.command.mana`|`/mana`（仅显示自身魔力值）|true|
|`auraskills.command.top`|`/sk top` 与 `/skilltop`|true|
|`auraskills.command.rank`|`/sk rank` 与 `/skillrank`|true|
|`auraskills.command.lang`|`/sk lang`|true|
|`auraskills.command.abtoggle`|`/abtoggle` 与 `/sk toggle`|true|
|`auraskills.command.save`|`/sk save`|op|
|`auraskills.command.claimitems`|`/sk claimitems`|true|
|`auraskills.command.version`|`/sk version`|op|
|`auraskills.command.multiplier`|`/sk multiplier`|op|
|`auraskills.command.updateleaderboards`|`/sk updateleaderboards`|op|
|`auraskills.command.transfer`|`/sk transfer`|op|
|`auraskills.command.mana.add`|`/mana add`|op|
|`auraskills.command.mana.remove`|`/mana remove`|op|
|`auraskills.command.mana.set`|`/mana set`|op|
|`auraskills.command.mana.other`|`/mana <玩家名称>`（浏览其他玩家的魔力值）|op|
|`auraskills.command.reload`|`/sk reload`|op|
|`auraskills.command.backup.save`|`/sk backup save`|op|
|`auraskills.command.backup.load`|`/sk backup load`|op|
|`auraskills.command.skill.setlevel`|`/sk skill setlevel` 与 `/sk skill setall`|op|
|`auraskills.command.skill.reset`|`/sk skill reset`|op|
|`auraskills.command.xp.add`|`/sk xp add`|op|
|`auraskills.command.xp.set`|`/sk xp set`|op|
|`auraskills.command.xp.remove`|`/sk xp remove`|op|
|`auraskills.command.preset`|`/sk preset load`|op|
|`auraskills.command.profile`|`/sk profile skills\|stats`|op|
|`auraskills.command.modifier`|`/sk modifier add\|remove\|list\|removeall`|op|
|`auraskills.command.armor.modifier`|`/sk armor modifier add\|remove\|list\|removeall`|op|
|`auraskills.command.armor.requirement`|`/sk armor requirement add\|remove\|list\|removeall`|op|
|`auraskills.command.armor.multiplier`|`/sk armor multiplier add\|remove\|list\|removeall`|op|
|`auraskills.command.item.modifier`|`/sk item modifier add\|remove\|list\|removeall`|op|
|`auraskills.command.item.requirement`|`/sk item requirement add\|remove\|list\|removeall`|op|
|`auraskills.command.item.multiplier`|`/sk item multiplier add\|remove\|list\|removeall`|op|
|`auraskills.command.item.register`|`/sk item register\|unregister`|op|
|`auraskills.command.item.give`|`/sk item give`|op|
|`auraskills.command.item.ignore`|`/sk item ignore add\|remove`|op|
|`auraskills.command.openmenu`|`/sk openmenu`|op|
|`auraskills.command.jobs`|`/sk jobs add\|remove\|removeall`|op|
|`auraskills.command.jobs.other`|`/sk jobs add\|remove\|removeall` 指定其他玩家时|op|
|`auraskills.jobs.limit.[数量]`|玩家可拥有的职业数量。示例：`auraskills.jobs.limit.4`|false|
|`auraskills.jobs.block.[技能名称]`|若为 true，则玩家不可选定该职业。|false|
|`auraskills.checkupdates`|是否将更新检查的消息发送给持有权限的玩家。|op|
|`auraskills.*`|所有命令的权限。|false|
|`auraskills.command.user`|玩家默认拥有的权限。|true|
|`auraskills.skill.*`|允许为所有技能获取经验、升级等。|true|
|`auraskills.command.item.*`|允许创建物品修饰符。|false|
|`auraskills.command.armor.*`|允许创建装备修饰符。|false|
|`auraskills.command.admin`|允许使用所有管理员命令。|false|