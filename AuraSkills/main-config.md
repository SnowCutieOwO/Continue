# 主配置文件

配置文件 `config.yml` 相关

`config.yml` 是位于 `plugins/AuraSkills` 文件夹下的主插件配置。它用于调整存储/数据库、外部插件对接、语言设置、ActionBar、BossBar、世界/区域、修饰符、条件等全局或杂项内容的设置。

每个[技能](skills.md)和属性的选项曾位于这里，但后来独立为了 `skills.yml` 和 `stats.yml` 文件。

如果你的配置文件缺少了某项内容，可能是因为本页尚未及时更新或移除。你可以在插件的[更新日志](https://github.com/Archy-X/AureliumSkills/blob/master/Changelog.txt)中详细了解配置的改动。

最后更新版本：`2.2.3`

## 选项

### SQL

`sql:`

* `enabled` - 是否启用 SQL 数据存储（需重启才可生效）。
* `type` - 使用的 SQL 数据库类型；目前仅支持 `mysql`。
* `host` - SQL 的域名
* `port` - 端口号（需为数字）
* `database` - 数据库名称（必须已存在）
* `username` - SQL 用户名
* `password` - SQL 密码
* `load_delay` - 在玩家加入后载入数据的延迟时间，适用于多服共用一个数据库时玩家的数据同步情况。
* `always_load_on_join` - 若为 true，插件总会在玩家上线后从数据库内读取数据，无论其是否已载入。
* `ssl` - 是否使用 SSL。
* `maxium_pool_size`、`minimum_idle`、`connection_timeout`、`max_lifetime`、`keepalive_time` - 用于配置 Hikari 连接池的选项。盲目改动后果自负。

### 语言

`default_language` - 玩家使用的默认语言；必须拥有匹配的文件（如：设置为 `en` 时要求存在 `messages_en.yml` 文件）

`try_detect_client_language` - 若设置为 `true`，插件会跟随检测客户端语言。仅对未通过命令设置语言或重启后语言选择被重置的玩家有效。若客户端语言不存在于插件侧，插件会使用 `default_language` 代表的语言。若为 `false`，则插件会让所有玩家使用 `default_language` 代表的语言。

`languages` - 玩家可通过 `/skills lang <语言>` 切换的语言列表；必须有对应的匹配名称。自定义语言也可在此处设置。

### 对接

`hooks:`

* `enabled` - 是否注册给定插件的对接事件。它只会在对应插件被检测到且启用时才会尝试对接，因此服务器上没有对应插件时也可放心将其设置为 `true`。部分插件，如 HolographicDisplays 和 DecentHolograms 功能相同，因此二者必须择其一禁用。

部分插件对应的特殊选项在下文列出：

#### LuckPerms

* `LuckPerms:`
  * `use_permission_cache` - 是否启用缓存 LuckPerms 权限的功能用于优化倍率（修饰符，下同）计算。若你通过某些功能如世界情境修改了倍率而没有触发 LuckPerms 事件，则你可能需要将其设置为 false。

#### WorldGuard

* `WorldGuard:`
  * `blocked_regions` - 这些区域内的玩家无法自然获取技能经验值。
  * `blocked_check_replace_region` - 这些区域内重复放置的方块可以获取经验值。

#### ActionBar

* `action_bar`
  * `enabled` - 是否启用 ActionBar 显示功能（若设置则必须设置为 `true`；设置为 `false` 会禁用所有类型的 ActionBar）。
  * `idle` - 决定正常（无经验获取）状态下的 ActionBar 是否显示。**若你不需要在屏幕底部显示生命或魔力值，则请将其设置为 false。**
  * `ability` - 决定能力提示（准备/取消、触发等状态）。若设置为 false，则能力相关消息只会在聊天栏显示。
  * `xp` - 决定经验获取提示是否显示（非满级情况下）。
  * `maxed` - 决定满级后经验获取提示是否显示。
  * `update_period` - ActionBar 刷新间隔（若 ActionBar 导致服务器卡顿，请将此值调高）。
  * `round_xp` - 若启用，当前显示经验值会被取整。
  * `placeholder_api` - 是否在 ActionBar 内替换 PlaceholderAPI 变量（若安装对应插件且有变量）。
  * `use_suffix` - 是否将玩家经验值缩写为带单位的数字（k、m 等）。仅在 `xp` 为 true 时有效。
  * `format_last` - 若为 true，MiniMessage 的判断会后于变量（如血量和魔力值）解析。这可以让 MiniMessage 以牺牲性能为代价渲染渐变文本。
  * `update_sync` - 若为 true，则 ActionBar 消息会异步更新。此为实验性功能。

#### BossBar

`boss_bar:`

  * `enabled` - 是否在获取经验时显示 BossBar。
  * `mode` - 可以为 `single` 或 `multi`。后者表示收集经验值时会同时显示多条 BossBar，而前者表示只显示一条。
  * `stay_time` - BossBar 显示后持续停留时间的长度，单位为刻。
  * `update_every` - 连续收集经验值时 BossBar 的更新间隔，若此功能造成卡顿请调高该值。
  * `round_xp` - 若启用，当前显示经验值会被取整。
  * `use_suffix` - 是否将玩家经验值缩写为带单位的数字（k、m 等）。
  * `format` - 允许你为技能分别设置 BossBar 样式。
    * 格式：`[技能名称] [颜色] [样式]`
    * 可用颜色有：BLUE（蓝）、GREEN（绿）、PINK（粉）、PURPLE（紫）、WHITE（白）、RED（红）、YELLOW（黄）
    * 可用样式有：PROGRESS（无分割）、NOTCHED_6（六段分割）、NOTCHED_10（十段分割）、NOTCHED_12（十二段分割）、NOTCHED_20（二十段分割）
  * `animate_progress` - 切换 BossBar 动画（更新进度之间的延迟）。

#### 职业

`jobs:`

* `enabled` - 是否启用职业系统。即便选择功能被禁用，该功能也应当保持开启，否则经验来源功能会出现问题。使用该功能还需要安装 Vault 及任意支持 Vault 的经济插件。
* `selection:`
  * `require_selection` - 玩家是否需要选择职业才可获得经验。若为 false 则所有技能都可以对应方式获取经验值。
  * `default_job_limit` - 玩家默认可选择的最大职业数。可通过权限 `auraskills.jobs.limit.[数字]` 对单独玩家限制。
  * `disabled_unselected_xp` - 若为 true，玩家只能收集选中职业的经验。
  * `cooldown_sec` - 玩家选择新职业后再次选择职业的冷却时间。
* `income:`
  * `use_xp` - 是否按 `default.income_per_xp` 的值将获取的经验换算为经济奖励一并给予。
  * `use_expression` - 是否按 `default.expression` 的内容给予玩家经济奖励。会覆盖上述 `use_xp` 选项。
  * `default:`
    * `income_per_xp` - 经验来源换算为经济奖励的倍率。例如，当该选项的值为 0.1 时，获取 14 点技能经验会给予玩家 1.4 单位的 Vault 货币。
    * `expression` - 经验来源换算为经济奖励的计算公式。在 `use_default` 为 true 时生效。可用变量有 xp、base_xp（无倍率经验值）、level（技能等级）、power 和 skill_average。
  * `batching:`
    * `enabled` - 若为 true，经验值会间隔给予而非立即获得。这可以在规模较大的服务器上减轻大量经济获取导致的卡顿。获得经验值的有效速率不受影响。
    * `interval_ms` - 开启本功能时获得经验的最小延迟。例如，该值设置为 2000 时，每次获得经验时都会使得系统检查上一次经验获取的时间。若相差时间大于 2000 毫秒（2秒），则立即给予玩家，否则延迟到相差时间满足两秒再给予玩家。
    * `display_individual` - 若为 true，则 BossBar 显示原有而非延时获取的经验值。这表示若该项为 false 且启用了分次给予功能，则部分 BossBar 将不会显示经验获取，且 BossBar 执行分次给予功能时会显示完整数量。
  * `use_final_xp` - 若设置为 false，income_per_xp 的计算会合并所有经验倍率。

::: info

职业收入也可以在[来源配置](sources.md)中单独调整。

:::

#### 反挂机

`anti_afk:`

* `enabled` - 是否启用反挂机系统。
* `logging_enabled` - 在启用反挂机检查时是否对验证失败的行为进行记录。日志将会发送给任何拥有 auraskills.notify 权限（默认 OP）的玩家。
* `log_threshold` - 用于决定记录事件所需的条件。下文用于检查设置中类型的 min_count 变量也可以用在表达式内。
* `checks:`
  * `[检查名称]:`
    * `enabled` - 是否启用该检查类型。
    * `min_count` - 触发阻止经验获取的最小条件数量。计数会随着玩家符合检查条件的次数增多（位置、俯仰角或身份）并在满足不同条件时重置。
    * `max_distance` - 基于坐标/位置的检查允许的最大移动范围。超出该范围即视作检查失败。

#### 攻击指示悬浮字

`damage-holograms:`

* `enabled` - 启用/禁用攻击指示器（需安装 HolographicDisplays 或 DecentHolograms 并在配置文件中启用对接）。
* `scaling` - 显示在悬浮字上的数值是否根据 `stats.yml` 中的 `action_bar_scaling` 选项进行乘算。
* `decimal:`
  * `display_when_less_than:` - 小于该数值的攻击显示为小数。
  * `max_amount` - 显示小数的最大位数。
* `offset:`
  * `x` - X 轴偏移量
  * `y` - Y 轴偏移量
  * `z` - Z 轴偏移量
  * `random:`
    * `enabled` - 是否启用随机悬浮字位置。
    * `x_min` - X 轴最小偏移量
    * `x_max` - X 轴最大偏移量
    * `y_min` - Y 轴最小偏移量
    * `y_max` - Y 轴最大偏移量
    * `z_min` - Z 轴最小偏移量
    * `z_max` - Z 轴最大偏移量

#### 排行榜

`leaderboards:`

* `update_period` - 排行榜更新间隔，单位为刻。
* `update_delay` - 服务器启动后多久更新排行榜，单位为刻（启动时的立即更新忽略不计）。

`start_level` - 玩家起始的技能等级。默认为 0，可设置为 1 回退至 Beta 版机制。

`enable_skill_commands` - 诸如 `/farming` 和 `/mining` 的技能名称命令是否可以用于打开对应技能菜单（需要重启服务器才可生效）。

`check_block_replace:`

* `enabled` - 玩家放置的方块是否能重复获得经验值；在没有遇到插件兼容性的前提下请将其保持在默认的 `true`。
* `blocked_worlds` - 处于此列表中的世界不会检查方块重新放置。这些世界中会无视 `enabled` 的值禁用检查。

#### 世界与区域

`blocked_worlds` - 这些世界中的玩家无法自然获取技能经验值。

`disabled_worlds` - 这些世界中会禁用本插件的大部分功能，包括但不限于属性、能力、经验获取及 ActionBar（命令与菜单仍然可使用）。

`disable_in_creative_mode` - 是否在创造模式下禁用玩家的经验值获取。

#### 数据校验

`data_validation:`

* `correct_over_max_level` - 若为 true，插件会在玩家进入时检查技能等级是否超过上限，若有则进行削减。

#### 死亡选项

`on_death:`

* `reset_skills` - 是否在玩家死亡时重置技能等级。
* `reset_xp` - 是否在玩家死亡时重置当前等级的技能经验值。技能等级不受影响。

#### 自动保存

`auto_save:`

* `enabled` - 在线玩家的数据是否定时保存而非只在离开游戏时保存。若服务器因崩溃导致玩家数据丢失，则该功能会很有用。
* `interval_ticks` - 执行自动保存的时间间隔（单位为刻）。

#### 升级

`leveler:`

* `title:`
  * `enabled` - 是否在技能升级时显示标题信息。
  * `fade_in` - 标题的淡入时间，单位为刻。
  * `stay` - 标题的持续时间，单位为刻。
  * `fade_out` - 标题的淡出时间，单位为刻。
* `sound:`
  * `enabled` - 是否在技能升级时播放音效。
  * `type` - 播放的声音类型（必须为有效的声音名称）。
  * `category` - 播放的声音所属分类。
  * `volume` - 声音的音量。
  * `pitch` - 声音的音调。
* `double_check_delay` - 一次获取大量经验值的升级检查间隔，单位为刻（值越小显示越快）。

#### 魔力相关

`mana:`

* `enabled` - 若为 false，魔法能力将不会消耗魔力，且其不再显示在 ActionBar 与菜单中。
* `cooldown_timer_period` - 魔法能力释放的间隔。增加该值可减轻魔法能力的 TimerCooldown 导致的卡顿。全局冷却时间相同。需要重启才可生效。

#### 修饰符（旧译“倍率”）

`modifier:`

* `armor:`
  * `equip_blocked_materials` - 该列表中的物品在右键点击时不会获得盔甲属性；即列表中的物品无视其原版属性。
  * `item:`
    * `check_period` - 玩家手中的物品检查属性修饰符的间隔（若遇到卡顿问题请将该值调高）。
    * `enable_off_hand` - 属性修饰符是否对副手同样生效。
  * `auto_convert_from_legacy` - 是否将旧修饰符格式转化为新版。如果你先前使用过 Beta 版插件且设计了物品，请将该选项设置为 true 以防止原有物品属性失效。

#### 条件

`requirement:`

* `enabled` - 是否对条件进行检查。若你没有用到条件，禁用它可提升性能。
* `item:`
  * `prevent_tool_use` - 未满足要求的物品是否无法用于破坏方块。
  * `prevent_weapon_use` - 未满足要求的物品是否无法用于攻击生物。
  * `prevent_block_place` - 未满足要求的方块是否无法被放置。
  * `prevent_interact` - 未满足要求的物品是否无法进行交互。
  * `global` - 决定物品默认拥有的条件。
    格式：`- '[材料名称] [技能名称1]:[限制等级1] [技能名称2]:[限制等级2] ...'`
* `armor:`
  * `prevent_armor_equip` - 未满足要求的防具是否无法装备。
  * `global` - 决定物品默认拥有的条件。
    格式：`- '[材料名称] [技能名称1]:[限制等级1] [技能名称2]:[限制等级2] ...'`
* `override_gloval` - 若为 true，上述设置的全局条件会在单独设置物品条件时覆盖。

#### 暴击

`critical:`

* `base_multiplier` - 暴击伤害的基础倍率。
* `enabled` - 该分类下的选项控制指定物品是否可造成暴击。（`hand` 表示空手，`other` 表示持有不在列表中的物品生效）。

#### 来源

`grindstone:`

* `blocked_enchants` - 列表中的附魔在砂轮中被去除后不活的经验值。请将自定义附魔插件的不可移除/诅咒类附魔填入此处。

`statistic:`

* `gain_period_ticks` - 统计数据类技能给予经验值的间隔。这不会改变经验收集的有效速率，仅对统计数据检查时间进行调整。

`entity:`

* `give_alchemy_on_potion_combat` - 通过药水击杀/伤害实体是否增加炼金而非近战/箭术经验。

#### 菜单

`menus:`

* `lore_wrapping_width` - 启用自动换行时达到换行要求的字符数量。
* `placeholder_api` - 是否在菜单中解析 PlaceholderAPI 的变量。
* `stats:`
  * `show_trait_values_directly` - 若为 true，`modifier` 为 1 且带有单个特征的属性将会显示特征值而非菜单中的值。这可以让默认拥有 20 生命值的玩家可以包括在显示的等级中。
* `removal_protection` - 启用菜单界面按钮的额外保护。

#### 战利品（旧译“道具池”）

`loot:`

* `update_loot_tables` - 默认配置中的战利品表是否随插件自动更新。
* `directly_to_inventory` - 若为 true，所有受幸运影响的奖励物品都会直接进入玩家背包而非掉落在地。该选项不影响原版的物品掉落。

`check_for_updates` - 插件是否在启动时检查新版本，并对拥有 `auraskills.checkupdates` 权限的玩家进行提醒。

#### 自动备份

`automatic_backups:`

* `enabled` - 是否在服务器关闭时启用自动备份。
* `minimum_interval_hours` - 自动保存的最小时间间隔，单位为小时。自动保存只会在该时间后的一小时内进行。
* `max_users` - 若服务器玩家数量超过该数字，跳过自动保存。

`save_blank_profiles` - 若为 false，未升级任何技能或获得经验的玩家数据不会被保存至数据库。