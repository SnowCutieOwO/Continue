# 主配置  
配置文本（`config.yml`）的相关教程

* * *

这是本插件的配置文件详解，它（`config.yml`）位于你服务器中的 `plugins/AureliumSkills`。  
本配置文件最后更新对照版本: Beta 1.2.6  
## 全局设置

* * *

### MySQL 数据库设置 
`mysql:`

*   `enabled` - 是否启用该模块以使用数据库同步数据（需要重启服务器）
*   `host` - MySQL 地址
*   `port` - 端口号（必须是数值）
*   `database` - 数据库名称（必须已经创建）
*   `username` - MySQL 用户名
*   `password` - MySQL 密码
*   `load-delay` - 玩家加入后载入数据的延迟时间， 对多服务器使用统一数据库时很有帮助
*   `always-load-on-join` - 若设置为 true， 玩家加入时总是加载数据库的内容， 无论其此前是否已被载入服务器缓存中
*   `ssl` - 是否启用 SSL 加密

### 消息配置
`default-language` - 玩家使用的默认语言; 必须有对应的消息文件（例如：此项为 en 时需要有名为 messages\_en.yml 的文件存在）

*   `try-detect-client-language` - 若设置为 `true`，插件会尝试使用客户端使用的语言，前提是此语言有效且存在对应的文件. 此选项仅适用于没有使用指令选择语言的玩家，或者在服务器突然重启后丢失已选择语言设置的玩家。若客户端使用了Aurelium Skills没有的语言文件，则默认使用 `default-language` 项设置的语言。 若设置为 `false`，所有未设置语言的玩家都将使用 `default-language` 项设置的语言作为自己的默认语言。
*   `languages` - 可供玩家使用指令 `/skills lang <语言>` 切换的语言文件列表； 须有对应的语言文档与之对应，可以在此处设置自定义语言。

### Action Bar 
`action-bar`:

*   `enabled` - 是否启用/禁用此功能（若要显示 ActionBar 内容则必须启用此模块; 设置为 false 会禁用任意的 ActionBar 消息显示）
*   `idle` - 决定无操作时 ActionBar 显示的内容（并不是收集经验时显示的那一部分！）. 若你想要 ActionBar 一直显示消息，那么你需要启用这个模块。
*   `ability` - 决定准备或触发技能时 ActionBar 显示的内容（准备/取消准备， 激活技能时显示的消息， 等等。）。 若设置为 `false`， 技能消息将只会通过聊天栏发出。

*   `xp` - 决定获得技能经验时的 ActionBar 消息（并不是满级显示的消息）
*   `maxed` - 决定满级技能收集经验时的 ActionBar 消息
*   `update-period` - ActionBar 更新时间，单位为 刻(ticks， 20 ticks = 1秒）（若 ActionBar 造成服务器卡顿，尝试增加这个值）
*   `round-xp` - 若启用，当前经验值将会被四舍五入为整数.
*   `placeholder-api` - 是否在 ActionBar 内启用 PlaceholderAPI 从而允许使用变量，若要启用你需要先安装 PlaceholderAPI。

### Boss Bar
`boss-bar:`

*   `enabled` - 是否启用 BossBar 用于显示经验收集进度
*   `mode` - 可被设置为 `single/multi` 两个值。当设置为 singles，本插件最多将只占用一个 BossBar 用于显示收集经验显示，而 multi 则会占用多个 BossBar
*   `stay-time` - BossBar 显示完毕后停留的时间
*   `update-every` - 连续收集经验时 BossBar 的显示刷新间隔，若出现卡顿问题，请尝试将该值提高
*   `round-xp` - 是否在 BossBar 上显示四舍五入后的经验值
*   `format` - BossBar 的信息显示格式  
    
    *   `Format:'\[技能名\] \[颜色\] \[BossBar 样式\]'`
    *   \- 可用的颜色有 BLUE（蓝）， GREEN（绿）， PINK （粉）， PURPLE（紫）， WHITE（白）， RED（红） 和 YELLOW（黄）
    *   \- 可用的 BossBar 样式有 SOLID（无分隔）， SEGMENTED\_6（分隔最多）， SEGMENTED\_10（分隔较多）， SEGMENTED\_12（分隔较少）， SEGMENTED\_20（分隔最少）
    
    `base-mana` - 玩家尚未收集智慧经验时初始魔法值上限  
    `enable-roman-numerals` - 显示等级时使用罗马数字而非阿拉伯数字

### 伤害显示  
`damage-holograms` - 是否启用本模块（需安装 HolographicDisplays）

*   `damage-holograms-scaling` - 是否根据 health.hp-indicator-scaling 选项修改显示的攻击力数值
*   `damage-holograms-decimal`:  
    *   `display-when-less-than:` - 小于特定值时在伤害显示中显示小数
    *   `decimal-max-amount` - 显示的小数最大位数
*   `damage-holograms-offset:`
*   `x` - X 轴偏移量
*   `y` - Y 轴偏移量
*   `z` - Z 轴偏移量

`random:`

*   `enabled` - 是否启用随机位置攻击显示
*   `x-min` - 最小 X 轴偏移量
*   `x-max` - 最大 X 轴偏移量
*   `y-min` - 最小 Y 轴偏移量
*   `y-max` - 最大 Y 轴偏移量
*   `z-min` - 最小 Z 轴偏移量
*   `z-max` - 最大 Z 轴偏移量

### 排行榜

*   `update-period` - 排行榜刷新时间，单位为刻
*   `update-delay` - 在服务器开启多少时间后排行榜会被立刻刷新，单位为刻（不包括开启初的排行榜内容刷新）

### 游戏体验
`enable-skill-commands` - 技能名称是否被用于做成命令以打开各自的子菜单，例如 /farming 或 /mining （重启后有效）  
`check-block-replace` - 被玩家重复放置的方块是否可以再次获得经验；。默认应当保持为 true，除非你在使用过程中出现了兼容性问题。  
  
### 世界与区域  
`blocked-check-block-replace-worlds` - 在该列表中的世界不会被插件检测重复放置，这意味着玩家可以在这些世界中重复放置并破坏方块来获得对应的技能经验。  
`blocked-check-block-replace-regions` - 在该列表中的 WorldGuard 区域中不会被插件检测重复放置 （该功能需要 1.13+ 版本）  
`blocked-worlds` - 在该列表世界中的玩家将不能通过正常方式获取技能经验。  
`blocked-regions` - 在该列表 WorldGuard 区域中的玩家将不能通过正常方式获取技能经验。  
`disabled-worlds` - 插件的大部分功能在该列表中的世界将会被禁用，包括但不限于属性/技能/收集经验/ActionBar信息显示（菜单和其他命令仍然可用）  
`disable-in-creative-mode` - 是否禁用玩家在创造模式下的经验获取  
  
### 自动保存
`auto-save:`

*   `enabled` - 是否定时保存，或只是在玩家退出的时候保存他们的数据？当你正在遭受因服务器崩溃而导致的经验与技能数据丢失问题时这个选项很有效。
*   `interval-ticks` - 自动保存间隔（单位为刻）

  
### 经济 
`skill-money-rewards:`

*   `enabled` - 玩家在升级时是否可以获得金币奖励 （需要安装 Vault）
*   `base` - 在第二级时玩家获得的金币基数
*   `multiplier` - 倍率 （获得的金币数 = 基数 + 倍数 \* 等级的平方）

### 升级提醒 
`leveler:`

*   `title:`  
    *   `enabled` - 当玩家升级时是否启用标题提醒
    *   `fade-in` - 淡入时间，单位为刻
    *   `stay` - 标题文字保持显示的时间
    *   `fade-out` - 淡出时间，单位为刻
*   `sound:`  
    *   `enabled` - 当玩家升级时是否启用音效提醒
    *   `type` - 声音种类（必须为有效声音名称）
    *   `category` - 声音的子种类
    *   `volume` - 声音的音量
    *   `pitch` - 声音的音调
    *   `double-check-delay` - 对于一次收集到大量经验而升级的检查延迟，单位为刻 （数值越小代表越快）

  
### 倍率 
`modifier:`

*   `armor:`  
    *   `equip-blocked-materials` - \*右键装备时不会获得装备原版属性的物品列表；当你需要只获得盔甲上的属性而不需要原版的防御数值等属性的时候，你就可以将他们添加至这个地方。
*   `item:`  
    *   `check-period` - 检查玩家手中的物品是否有属性提升的lore间隔，单位为刻。当服务器出现卡顿时考虑提升该值。
    *   `enable-off-hand` - 物品属性是否在扶手持有时生效。
*   `auto-convert-from-legacy` - 旧的属性 NBT 格式是否要在新版本环境下被自动转换。当你的所有物品已被转换并可以正确工作或服务器出现性能问题时，你可以将该项禁用。

  
### 条件限制 
`requirement:`

*   `enabled` - 决定装备的条件限制模块是否启用。若你没有用到这一块功能，关闭该模块将会提升服务器性能。
*   `item:`  
    *   `prevent-tool-use` - 玩家没有达到工具的使用条件时是否阻止玩家使用该工具破坏方块。
    *   `prevent-weapon-use` - 玩家没有达到武器的使用条件时是否阻止玩家使用该武器攻击其他实体。
    *   `prevent-block-place` - 玩家没有达到物品的使用条件时是否阻止玩家放置该物品。
    *   `global` - 决定默认添加至物品的条件限制。 格式为：`'\[材料名称\] \[技能名称\]:\[技能等级\] \[技能名称\]:\[技能等级\] …'`
*   `armor:`  
    *   `prevent-armor-equip` - 当玩家未达到盔甲的使用条件时是否禁止玩家装备物品。
    *   `global` - 决定盔甲限制是否同时应用到该种类的所有物品树上。格式为：`'\[材料名称\] \[技能名称\]:\[技能等级\] \[技能名称\]:\[技能等级\] …'`

  
### 暴击  
`critical:`

*   `base-multiplier` - 基础的暴击伤害倍率
*   `enabled` - 在此列表中的物品允许产生暴击伤害。（空手表示为“empty fist”，“other” 项为持有不在列表的物品）

  
### 菜单 
`menus:`

*   `placeholder-api` - 是否在菜单中允许使用 PlaceholderAPI 的变量

  
### 杂项  
`check-for=updates` - 是否允许插件在服务器启动后检查更新，并提醒拥有权限 `aureliumskills.checkupdates` 的玩家？  
`automatic-backups:`

*   `enabled` - 是否在服务器关闭时启用自动保存
*   `minimum-interval-hours` - 单次保存的最小间隔，单位为小时。在距离上一次保存一定时间以后，才会创建一个新备份，前提是时间超过这里设定的值。

### 技能设定 
**通用技能选项**

*   `enabled` - 该技能是否启用。被禁用的技能在菜单中不可见，也无法升级。技能的对应能力和魔法能力在禁用时也不可用。
*   `max-level` - 该技能可升到的最大等级。
*   `check-cancelled` - 影响大多数技能。检查方块的破坏事件是否被取消 （仅在出现兼容性问题时禁用）
*   `check-multiplier-permissions` - 是否在玩家收集经验时检查经验倍率权限。若你不需要用到倍率权限，将此项关闭可提升服务器性能。

**箭术与战斗选项**

*   `damage-based` - 基于玩家造成的伤害而不是击杀的实体给予玩家对应的经验。 警告：这仍然引用 sources\_config.yml 中的值，用于计算每点原版伤害所获得的经验值。若你想要玩家升级的效率保持在正常水平，你必须降低并衡量在 source\_config.yml 中的箭术和战斗经验对应值。
*   `spawner-multiplier` - 用于修改从刷怪笼生成的生物所获经验的选项。设置为0可禁止刷怪笼中的生物产生技能经验；设置为1 表示与普通生物无异（当然默认值也是这么设置的）。收集的经验是原本该种生物应获得的经验乘以这个选项的倍率所得到的最终值。

**防御选项**

*   `max` - 单次可收集经验的最大值
*   `min` - 单次需要达到收集经验的最小伤害值
*   `allow-shield-blocking` - 持盾阻挡攻击时是否仍可以获得经验（默认值为 false）

**探索选项**  

*   `xp-gain-period` - 获得经验的时间间隔，单位为刻（译者注：20刻=1秒）

**炼药经验**  

*   `give-xp-on-takout` - 是否在将制作完毕的药水拿出炼药台时获得经验
*   `give-xp-on-potion-combat` - 在战斗中使用喷溅型/滞留型药水是否可以获得炼药经验（与炼药相应的经验设置同步）

**治愈选项**  
`exclude-negative-potions` - 负面药水不增加治愈经验  
**锻造选项**  

*   `blocked-grindstone-enchants` - 一些与磨石交互时不会获得经验的附魔。在阻止通过诅咒附魔刷取经验时非常有效。

### 属性设置  
**生命值**  
`health:`

*   `modifier` - 每个生命等级应换算为多少点原版生命值（2 = 1 原版心）。该值默认为 0.5，意味着每个生命等级会为玩家提供 0.5 生命值（原版四分之一心）该设置不会被 `hp-indicator-scaling` 选项所影响。
*   `health-scaling` - 若启用，插件将在玩家生命值足够多时压缩血量（完全不会影响到实际生命）最多显示两排心。（该选项用于防止过多的生命值遮挡屏幕，意味着高血量上限下的一颗心实际血量不等同于低血量下的一颗心实际血量）
*   `hp-indicator-scaling` - 实际血量值会被乘以这个数值并显示在 ActionBar 和菜单等地方（仅做显示，不影响实际生命值）
*   `update-delay` - 切换世界时血量刷新的间隔，单位为刻（若遇到插件兼容性问题，请将其设置为0）
*   `force-base-health` - 若启用，基础生命值将在每次刷新被重置为20点（仅在遇到插件兼容性问题时启用）
*   `hearts` - 该功能用于修改不同范围血量显示的生命值。键为显示生命的数量，值为实际血量的范围。  
    例如，当这里有两条值 '12': 29 和 '13': 37，这意味着血量上限在 29（含） 至 37（含） 的玩家的屏幕上将会显示 12 颗心  
    这个值不是显示在 ActionBar 处的值。若要找到 ActionBar 处生命值的修改方式，你需要找到 `health.hp-indicator-scaling` 选项并将其修改（该值默认为 5）。  
    这支持低于 10 颗或高于 20 颗心的生命值，只需按格式在配置文本下添加即可。  
    键名不应重复，否则较高数字的键会覆盖较低数字的键。  
    这些选项不会修改你实际的血量值。  
    仅在 `health.health-scaling` 一项设置为 true 时有效。
*   `keep-full-on-increase` - 满血玩家在生命属性上升时保持满血。意味着玩家不需要在生命属性提升后补血。

**力量**  
`strength:`

*   `modifier` - 每点力量等级可提升多少原版攻击力 （2 = 1 点原版攻击力）若 use-percent 设置为了 true， 则计算公式为 `最终伤害 = 原伤害 \*（1 +（力量等级 \* 攻击倍率）/ 100）`
*   `hand-damage` - 是否将该属性应用在诸如物品、空手等非武器上
*   `bow-damage` - 是否将该属性应用在弓上
*   `display-damage-with-health-scaling` - 属性菜单中显示的伤害值是否受到 health.hp-indicator-scaling 影响
*   `use-percent` - 力量增加的伤害值是否以百分比计算，而非简单的数值添加。这会使基础伤害的作用更加突出，所以等待武器冷却结束或使用更好的武器显得更加重要，若该内容设置为 true，那么推荐的倍率值为 0.63。

**韧性**  
`toughness:`

*   `new-modifier` - 控制韧性减免伤害的比例（见[属性信息与计算](https://github.com/Archy-X/AureliumSkills/wiki/Stats-Information-and-Calculations)一章）

**再生**  
`regeneration:`  

*   `custom-regen-mechanics` - 自定义的新再生机制是否启用（允许控制血量回复频率但不完全像原版那样）
*   `base-regen` - 当再生等级为 0 时，基础的生命再生间隔
*   `saturated-modifier` - 有饱和时每级再生可额外提供多少回复的血量
*   `hunger-full-modifier` - 当玩家饱食度满但没有饱和药水效果时每点再生等级为玩家提供多少生命回复值
*   `hunger-almost-full-modifier` - 当玩家饱食度大于 14 小于 20 点时每点再生等级为玩家提供多少生命回复值

`custom-regen-options:`  

*   `saturated-delay` - 当 `custom-regen-mechanics` 启用时，玩家有饱和药水效果时玩家的再生速率为多快？单位为刻。
*   `hunger-delay` - 当 `custom-regen-mechanics` 启用时，玩家没有饱和药水效果时玩家的再生速率为多快？单位为刻。
*   `mana-modifier` - 每点智慧等级可提供多少额外的魔力回复
*   `base-mana-regen` - 当再生等级为 0 时，基础的魔力再生间隔

**幸运**  
`luck:`  

*   `modifier` - 每点幸运等级可增加多少点原版幸运属性
*   `double-drop-enabled` - 幸运双倍掉落功能是否启用
*   `double-drop-modifier` - 每点幸运等级可提升多少双倍爆率
*   `double-drop-percent-max` - 双倍爆率的上限

**智慧**  
`wisdom:`  

*   `anvil-cost-modifier` - 每点智慧等级提供的铁砧经验减免
*   `experience-modifier` - 每点智慧等级提供的经验翻倍倍率
*   `allow-over-max-mana` - 智慧属性下降时是否保留高于上限的魔力值
*   `max-mana-per-wisdom` - 每点智慧等级能增加多少魔力上限
