# 命令

命令列表

格式：`<此>` 为必填参数，而 `[此]` 为选填参数。见[权限](permissions.md)章节了解有关权限的更多信息。

::: info

列表中 `/sk` 的命令也可替换为其别称，即 `/skills` 和 `/skill`

:::

## 玩家命令

如下命令默认可被所有玩家使用。

|格式|描述|权限|
|---|---|---|
|`/skills`|打开技能菜单，显示玩家所有技能进度。|`auraskills.command.skills`|
|`/stats`|打开属性菜单，显示玩家所有属性等级。|`auraskills.command.stats`|
|`/[技能名称]`|打开指定技能的进度界面，`[技能名称]` 替换为技能英文原名（如 `/farming`、`/archery` 和 `/healing`）。这些命令可以通过 `config.yml` 下的 `enable_skill_commands` 禁用。|`auraskills.skill.[技能名称]`（控制所有技能的访问）|
|`/sk lang [语言]`|切换菜单与消息中使用的语言。必须为有效的语言代码（可通过 TAB 键补全浏览）|`auraskills.command.lang`|
|`/abtoggle` 或 `/sk toggle`|切换个人的 ActionBar 显示状态。|`auraskills.command.abtoggle`|
|`/sk top [页码]` 或 `/skilltop [页码]`|显示所有技能的排行榜（技能等级总和）。|`auraskills.command.top`|
|`/sk top <技能> [页码]` 或 `/skilltop <技能> [页码]`|显示指定技能的排行榜。|`auraskills.command.top`|
|`/sk top average [页码]` 或 `/skilltop average [页码]`|显示玩家平均技能等级排行榜。|`auraskills.command.top`|
|`/sk rank` 或 `/skillrand`|显示你的技能排名。|`auraskills.command.rank`|
|`/mana`|显示当前魔力量。|`auraskills.command.mana`|
|`/sk claimitems`|打开物品领取界面（来源于物品奖励或 `/sk item` 命令给予的物品），取回给予时因背包已满而溢出至此的物品。|`auraskills.command.claimitems`|
|`/sk sources <技能> [排序方法]`|打开指定技能的经验来源界面，显示获取经验的方式。|`auraskills.command.sources`|
|`/sk help`|显示帮助命令界面。|`auraskills.command.help`|

## 管理员命令

如下命令默认只能由 OP 执行。

|格式|描述|权限|
|---|---|---|
|`/sk reload`|重载插件配置、消息文件、菜单、战利品表等内容。部分功能可能还需要重启服务器才会生效。|`auraskills.command.reload`|
|`/sk version`|显示插件当前版本。|`auraskills.command.version`|
|`/sk skill setlevel <玩家名称> <技能名称> <等级>`|设置指定玩家的技能等级。|`auraskills.command.skill.setlevel`|
|`/sk skill setall <玩家名称> `|设置指定玩家的所有技能等级。|`auraskills.command.skill.setlevel`|
|`/sk skill reset <玩家名称> [技能名称]`|重置玩家指定技能的等级（重置为 0 或 1 级取决于 `config.yml` 下 `start_level` 的设置），若填入 `[技能名称]` 参数则重置指定技能。|`auraskills.command.skill.reset`|
|`/sk xp add <玩家名称> <技能名称> <数量> [是否静默]`|给予指定玩家指定技能的经验。|`auraskills.command.xp.add`|
|`/sk xp set <玩家名称> <技能名称> <数量> [是否静默]`|将玩家指定技能的经验设置为固定值。|`auraskills.command.xp.set`|
|`/sk xp remove <玩家名称> <技能名称> <数量> [是否静默]`|减少玩家指定技能的经验。不会降低技能等级，只影响当前等级的技能升级进度。|`auraskills.command.xp.remove`|
|`/sk multiplier [玩家名称]`|显示玩家拥有的 `auraskills.multiplier.* ` 权限经验修饰符。|`auraskills.command.multiplier`|
|`/sk backup save`|将当前技能数据保存至备份文件夹。|`auraskills.command.backup.save`|
|`/sk backup load <文件名称>`|从备份文件夹载入备份。文件名称必须完全相同，包括后缀。会覆盖当前载入的数据，因此建议在载入前再次备份。|`auraskills.command.backup.load`|
|`/sk save`|保存技能数据。|`auraskills.command.save`|
|`/sk updateleaderboards`|整理并更新技能排行榜。|`auraskills.command.updateleaderboards`|
|`/sk transfer <操作玩家> <目标玩家>`|将玩家数据复制给其他玩家。`操作玩家` 与 `目标玩家` 需填入 UUID，`操作玩家` 的数据不会被重置。被操作的玩家无需在线。|`auraskills.command.transfer`|
|`/sk resethealth`|移除玩家所有的 AuraSkills 生命与幸运属性。若你需要卸载插件，这个命令可用于解决血量残留问题。这个命令只能通过控制台执行，且不应在有玩家活跃时使用。|无|
|`/sk profile skills <玩家名称>`|浏览其他玩家的技能等级。`玩家名称` 为需要查询的玩家名称。被查询玩家无需在线。|`auraskills.command.profile`|
|`/mana <玩家名称>`|显示玩家魔法量。|`auraskills.command.mana.other`|
|`/mana add <玩家名称> <数量> [允许溢出] [是否静默]`|为玩家增加魔法值。若 `允许溢出` 为 true，则给予的魔法量可超出上限。默认情况下魔法量不会超出上限。|`auraskills.command.mana.remove`|
|`/mana set <玩家名称> <数量> [允许溢出] [是否静默]`|为玩家设置魔法值。|`auraskills.command.mana.set`|
|`/sk modifier add <玩家名称> <属性> <名称> <值> [计算方式] [是否静默] [是否叠加]`|为指定玩家添加一个属性修饰符。将 `是否静默` 设置为 true 则不会向玩家发送消息。将 `叠加计算` 设置为 true 时若存在同名修饰符则会叠加计算。|`auraskills.command.modifier`|
|`/sk modifier addtemp <玩家名称> <属性名称> <名称> <值> <持续时间> [忽略离线] [计算方式] [是否静默] [叠加]`|给予玩家临时属性修饰符。`<持续时间>` 参数格式为 `[年]y[月]mo[日]d[时]h[分]m[秒]s`。有效的时间长度示例：`5s`、`10m` 以及 `4d2m1s`。`[忽略离线]` 参数决定了持续时间是否在玩家离线时仍然流逝（默认为 false）。|`auraskills.command.modifier`|
|`/sk modifier remove <玩家名称> <名称> [是否静默]`|移除玩家身上指定的属性修饰符。|`auraskills.command.modifier`|
|`/sk modifier list [玩家名称] [属性]`|列出所有属性修饰符。`玩家名称` 不填则默认检查自身拥有的修饰符。指定 `属性` 可只列出对应属性的修饰符。|`auraskills.command.modifier`|
|`/sk modifier removeall [玩家名称] [属性] [是否静默]`|移除所有属性修饰符。`玩家名称` 不填则默认检查自身拥有的修饰符。指定 `属性` 可只移除对应属性的修饰符。|`auraskills.command.modifier`|
|`/sk item modifier add <属性> <值> [计算方式] [添加描述]`|为手持物品添加物品修饰符。默认一并添加描述。|`auraskills.command.item.modifier`|
|`/sk item modifier remove <属性> [移除描述]`|移除手持物品的物品修饰符，默认若有对应描述也会一并移除。|`auraskills.command.item.modifier`|
|`/sk item modifier list`|列出手持物品包含的所有物品修饰符。|`auraskills.command.item.modifier`|
|`/sk item modifier removeall`|移除手持物品包含的所有物品修饰符。|`auraskills.command.item.modifier`|
|`/sk armor modifier add <属性> <值> [添加描述]`|为手持物品添加装备修饰符。默认一并添加描述。|`auraskills.command.armor.modifier`|
|`/sk armor modifier remove <属性> [移除描述]`|移除手持物品的装备修饰符，默认若有对应描述也会一并移除。|`auraskills.command.armor.modifier`|
|`/sk armor modifier list`|列出手持物品包含的所有装备修饰符。|`auraskills.command.armor.modifier`|
|`/sk armor modifier removeall`|移除手持物品包含的所有装备修饰符。|`auraskills.command.armor.modifier`|
|`/sk item requirement add <技能名称> <技能等级> [添加描述]`|为手持物品添加物品条件。默认一并添加描述。|`auraskills.command.item.requirement`|
|`/sk item requirement remove <技能名称> [移除描述]`|移除手持物品的物品条件，默认若有对应描述也会一并移除。|`auraskills.command.item.requirement`|
|`/sk item requirement list`|列出手持物品包含的所有物品条件。|`auraskills.command.item.requirement`|
|`/sk item requirement removeall`|移除手持物品包含的所有物品条件。|`auraskills.command.item.requirement`|
|`/sk armor requirement add <技能名称> <技能等级> [添加描述]`|为手持物品添加装备条件。默认一并添加描述。|`auraskills.command.armor.requirement`|
|`/sk armor requirement remove <技能名称> [移除描述]`|移除手持物品的装备条件，默认若有对应描述也会一并移除。|`auraskills.command.armor.requirement`|
|`/sk armor requirement list`|列出手持物品包含的所有装备条件。|`auraskills.command.armor.requirement`|
|`/sk armor requirement removeall`|移除手持物品包含的所有装备条件。|`auraskills.command.armor.requirement`|
|`/sk item multiplier add <目标> <值> [添加描述]`|为手持物品添加物品经验加成。`目标` 可为技能名称或 `global`，表示对所有技能生效。`值` 为经验倍率（100 表示额外给予 100%，即总共双倍经验）。|`auraskills.command.item.multiplier`|
|`/sk item multiplier remove <目标>`|移除手持物品包含的所有物品倍率加成。|`auraskills.command.item.multiplier`|
|`/sk item multiplier list`|列出手持物品包含的所有物品倍率加成。|`auraskills.command.item.multiplier`|
|`/sk item multiplier removeall`|移除手持物品包含的所有物品倍率加成。|`auraskills.command.item.multiplier`|
|`/sk armor multiplier add <目标> <值> [添加描述]`|为手持物品添加装备倍率加成。|`auraskills.command.armor.multiplier`|
|`/sk armor multiplier remove <目标>`|移除手持物品指定的装备倍率加成。|`auraskills.command.armor.multiplier`|
|`/sk armor multiplier list`|列出手持物品包含的所有装备倍率加成。|`auraskills.command.armor.multiplier`|
|`/sk armor multiplier removeall`|移除手持物品包含的所有装备倍率加成。|`auraskills.command.armor.multiplier`|
|`/sk item register <键>`|以给定键名注册手中物品。键名可在配置中奖励或战利品部分引用。|`auraskills.command.item.register`|
|`/sk item unregister <键>`|解除给定键名对应的物品。|`auraskills.command.item.register`|
|`/sk item give <玩家名称> <键> [数量]`|将指定注册物品基于玩家。若玩家背包没有足够空间，则物品会被放入待领取物品界面，通过 `/sk claimitems` 打开。|`auraskills.command.item.give`|
|`/sk openmenu <菜单名称> [玩家名称] [属性] [页码]`|为玩家打开菜单。若不指定玩家名称则默认为命令执行者打开。属性参数为打开菜单的 JSON 字符串设置，如：`{"skill":"Skill:mining"}` 会在打开升级界面、能力界面、经验来源和排行榜菜单中生效，即全部显示为挖掘技能相关的界面。`页码` 参数为不小于 0 的整数。|`auraskills.command.openmenu`|
|`/sk jobs add <职业名称> [玩家名称]`|为自己或指定玩家加入某个职业。|`auraskills.command.jobs `（指定其他玩家时为 `auraskills.command.jobs.other`）|
|`/sk jobs remove <职业名称> [玩家名称]`|为自己或指定玩家退出某个职业。|`auraskills.command.jobs `（指定其他玩家时为 `auraskills.command.jobs.other`）|
|`/sk jobs removeall [玩家名称]`|为自己或指定玩家退出所有职业。|`auraskills.command.jobs `（指定其他玩家时为 `auraskills.command.jobs.other`）|
|`/sk trait add <玩家名称> <特征名称> <名称> <值> [是否静默] [是否叠加]`|以指定名称给予玩家特征修饰符。|`auraskills.command.modifier`|
|`/sk trait add <玩家名称> <特征名称> <名称> <值> [计算方式] [是否静默] [是否叠加]`|移除玩家身上指定名称的特征修饰符。|`auraskills.command.modifier`|
|`/sk trait addtemp <玩家名称> <trait> <名称> <值> <持续时间> [忽略离线] [计算方式] [是否静默] [叠加]`|`<持续时间>` 参数格式为 `[年]y[月]mo[日]d[时]h[分]m[秒]s`。有效的时间长度示例：`5s`、`10m` 以及 `4d2m1s`。`[忽略离线]` 参数决定了持续时间是否在玩家离线时仍然流逝（默认为 false）。|`auraskills.command.modifier`|
|`/sk trait list [玩家名称] [特征名称]`|列出玩家身上拥有的特征修饰符。|`auraskills.command.modifier`|
|`/sk trait removeall [玩家名称] [特征名称] [是否静默]`|移除玩家身上所有的特征修饰符。|`auraskills.command.modifier`|
|`/sk item trait add <特征名称> <值> [添加描述]`|为手持物品添加物品特征修饰符，默认一并添加描述。|`auraskills.command.item.modifier`|
|`/sk item trait remove <特征名称>`|移除手持物品的物品特征修饰符，默认一并移除描述。|`auraskills.command.item.modifier`|
|`/sk item trait list`|列出手持物品的所有物品特征修饰符。|`auraskills.command.item.modifier`|
|`/sk item trait removeall`|移除手持物品的所有物品特征修饰符。|`auraskills.command.item.modifier`|
|`/sk armor trait add <特征名称> <值> [添加描述]`|为手持物品添加装备特征修饰符，默认一并添加描述。|`auraskills.command.armor.modifier`|
|`/sk armor trait remove <特征名称>`|移除手持物品的装备特征修饰符，默认一并移除描述。|`auraskills.command.armor.modifier`|
|`/sk armor trait list`|列出手持物品的所有装备特征修饰符。|`auraskills.command.armor.modifier`|
|`/sk armor trait removeall`|移除手持物品的所有装备特征修饰符。|`auraskills.command.armor.modifier`|
|`/sk item ignore add`|为手持物品添加“不可触发魔法能力”的标签。|`auraskills.command.item.ignore`|
|`/sk item ignore remove`|移除手持物品中“不可触发魔法能力”的标签。|`auraskills.command.item.ignore`|