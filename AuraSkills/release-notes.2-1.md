# 2.1

AuraSkills 2.1 更新日志

AuraSkills 2.1 加入了职业系统，以及允许玩家获取经验时赚钱的额外功能。同时加入了为玩家、物品及盔甲添加特征修饰符的命令。

## 新功能

::: warning

必须在 config.yml 中手动启用职业，且需要安装 Vault 及任意一款支持的经济插件才可正常生效。

:::

* 添加了职业系统。
  * 允许玩家选择某个技能为职业，并以此赚钱。
  * 若要使用这个功能，请在 config.yml 中将 jobs.enabled 项改为 true。
  * 所有经验来源对应的收入都在 jobs.income 下修改。
    * 若 use_xp 项为 true，玩家获得的经济数量会基于 default.income_per_xp 的值。
    * 若 use_expression 项为 true，玩家获得的经济数量会基于 default.expression 的值。
      * 可填入的内建变量为 xp、base_xp（无修饰符的值）、level（技能等级）、power 及 skill_average。
    * 若 use_final_xp 设置为 false，income_per_xp 的计算会排除所有经验倍率。
* 职业选择在 jobs.selection 部分设置。
  * 玩家可以在升级进度界面中新出现的按钮（默认为金锭）选择当前技能为职业。
  * 若 require_selection 为 false，所有技能都可以获取经济，且职业选择按钮会被隐藏。
  * default_job_limit 为玩家一次可最多选择的职业数量。
  * 限制可以通过权限 auraskills.jobs.limit.[数字] 分玩家单独设置（示例：auraskills.jobs.limit.4）
  * disable_unselected_xp 选项在 true 时会阻止玩家获得非在职技能的经验。
* 玩家获得的经济也可以在经验来源配置中单独配置。
  * 键名可添加至默认配置或单独配置。
  * 如下键可添加至来源配置：
    * income_per_xp - 每点经验可获得的经济，与 config.yml 中的值效果相同。
    * income - 给予的固定数量金钱。
    * income_expression - 计算收入的表达式，与 config.yml 中的值效果相同。
* 菜单文件会自动加入职业选择按钮的相关设置。
  * 你必须在 menus/skills.yml 的 `- component: max_level` 下手动添加一行 `- component: skill_job_active`。
  * 即便不添加也不会影响游玩体验，但玩家不能看见菜单中显示的“选中职业”。
* 新职业命令：
  * `/skills jobs add <职业名称> [玩家名称]` - 为自己或其他玩家加入特定职业。
  * `/skills jobs remove <职业名称> [玩家名称]` - 为自己或其他玩家退出特定职业。
  * `/skills jobs removeall [玩家名称]` - 为自己或其他玩家退出所有职业。
  * 未指定玩家名称时，这些命令的对应权限为 auraskills.command.jobs。（默认 OP 拥有）
  * 指定玩家名称时，这些命令的对应权限为 auraskills.command.jobs.other。（默认 OP 拥有）
* 新职业 PlaceholderAPI 变量：
  * `%auraskills_jobs_list%` - 返回玩家选择的职业列表，全小写并以逗号分隔。
  * `%auraskills_jobs_list_formatted%` - 返回玩家选择的职业列表，使用配置中 default_language 对应语言的本地化文本并以逗号分隔。
  * `%auraskills_jobs_count%` - 返回玩家选择的职业数量。
  * `%auraskills_jobs_limit%` - 返回玩家选择的职业数量上限。
* 添加了直接赋予玩家特征修饰符的命令：
  * `/skills trait add <玩家名称> <特征名称> <名称> <值> [是否静默] [stack]` - 将带有指定名称的特征修饰符赋予玩家。
  * `/skills trait remove <玩家名称> <名称> [是否静默]` - 移除指定名称的特征修饰符。
  * `/skills trait list [玩家名称] [特征名称]` - 列出玩家拥有的所有特征修饰符。
  * `/skills trait removeall [玩家名称] [特征名称] [是否静默]` - 移除玩家拥有的所有特征修饰符。
  * 这些命令与属性修饰符命令功能大致相同。
* 添加了赋予物品特征修饰符的命令。
  * `/skills item|armor trait add <特征名称> <值> [添加描述]` - 为物品添加特征修饰符，默认一并添加描述。
  * `/skills item|armor trait remove <特征名称>` - 移除物品的特征修饰符。
  * `/skills item|armor trait list` - 列出物品包含的所有特征修饰符。
  * `/skills item|armor trait removeall` - 移除物品所有的特征修饰符。
  * 上述的 item|armor 表示应当只选择一个参数指定，不可同时选中。
  * 这些命令的权限是 auraskills.command.item.modifier 和 auraskills.command.armor.modifier。
  * 与属性修饰符相同，特征修饰符使用 PDC 且不依赖描述生效。
* 添加了忽略指定物品行为的命令。
  * 这允许你在自定义物品上禁用魔法能力，为其他右键点击触发的行为腾出空间。
  * `/skills item ignore add` - 为手上物品添加“不触发魔法能力”的标签。
  * `/skills item ignore remove` - 移除手上物品“不触发魔法能力”的标签。
* 菜单文件新增 format_title，用于禁用菜单标题的颜色与 MiniMessage 格式解析。
  * 只需将其手动添加至菜单文件的设置部分即可（若不存在可手动创建）。
  * 向升级聊天栏消息增加了解析 PlaceholderAPI 变量的功能。
  * 添加了用于菜单中显示升级进度条的 `%auraskills_xp_bar_[技能名称]%` 变量。

## 改动

* 优化菜单以显著提升不进行操作时的占用。
* 修改了默认技能与 level_pregression 菜单中的配置，使其完全使用代码块风格的 YAML 格式。
* level_pregression 菜单内模板的默认情境对应材料改为与技能菜单的一致。
* 添加了物品修饰符描述消息的符号变量支持。
* 自动备份会在玩家较多时禁用（使用新增的 max_users 配置选项决定）。
* stats.yml 血量特征部分新增 ensure_scaling_disabled 选项，可在禁用特征的情况下一并禁用生命压缩（默认为 true）。
* 更新了日语、波兰语、简体中文。

## 漏洞修复

* 修复了 1.20.5+“流血”与“生命吸收”被动粒子效果错误的问题。
* 修复了添加魔力命令总是会将魔力加至上限的问题。
* 修复了能力消息中十六进制彩色不显示的问题。
* 修复了部分 level_progression 模板中添加的情境部分会导致配置不正常的问题。
* 修复了 action_bar_scaling 不在菜单与聊天栏内生效的问题。
* 修复了设置为 false 的倍率权限无法被正确忽略的问题。
* 修复了鼠标拿起物品并用 Shift + 鼠标左键替换物品无法触发“祛魔”能力的问题。
* 修复了 1.20.5+ hide_attribute 标志不生效的问题。
* 修复了“炼药”延长时间被动描述在同一药水物品上重复出现的问题。

## API 改动

* 向 SkillsUser 添加了职业相关方法。
* 新增 Trait#getMenuDisplay 方法用以获取属性菜单中格式化的特征值。
* 修复了 MenuManager#buildMenu 在多次调用以拓展同一个菜单时无法生效的问题。