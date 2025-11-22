# 2.2

AuraSkills 2.2 更新日志

AuraSkills 2.2 版本加入了反挂机机制，检测挂机或脚本方式获取经验的玩家。除此之外，还对钓鱼添加了实体类型渔获物。API 也有了重大更改。

## 新功能

* 增加了反挂机系统，防止玩家挂机刷取经验值
  * 可选检测并阻止重复性的挂机经验获取，鼓励玩家活跃游玩。
  * 必须在主配置文件中手动启用 `anti_afk.enabled` 选项。
  * 如下技能包含 8 种检测挂机的方法：耕作、伐木、挖掘、渔技、采掘、战斗、箭术与防御。
  * 检查以如下三种方式之一随机抽取：检测对应玩家坐标，面部朝向（俯仰角/视角）或参与的实体。
  * 检查部分配置位于 `anti_afk.checks`。
    * 指定检查可通过 `enabled` 选项开关。
    * `min_count` 设置决定了玩家重复获取同一数值经验的次数。
    * `max_distance` 设置决定了被判定为挂机的玩家移动范围。
  * 记录未能通过反挂机检查的功能可在 `anti_afk.logging_enabled` 处启用。
    * `log_threshold` 中的表达式决定了记录事件的条件。min_count 可在表达式中引用同名设置项的值。
    * 日志会发送至拥有 auraskills.antiafk.notify 权限（默认 OP 持有）的玩家。
    * 日志会保存在本地，玩家可通过 `/skills antiafk logs <player> [page] [perPage]` 命令浏览（对应权限 auraskills.command.antiafk.logs）
  * 重要免责声明：玩家若无法通过挂机检测并不证明其作弊或使用了宏脚本等手段，因为正常玩家也有可能触发误报，尤其是 min_count 较低的情况下。例如，使用刷怪塔的玩家经常会触发反挂机警报。请在管理前再三检查记录玩家的行为。
* 为渔获物添加了实体类型。
  * 即钓鱼时可以出现实体。
  * 以 `type: entity` 决定。
  * `entity` 键决定了捕获实体的类型。
    * 原版生物可通过名称设置（如 `entity: zombie`）。
    * MythicMobs 实体可通过前缀加名称的方式设置（如 `entity: mythicmobs:SkeletonKing`）。
  * `health` 设置覆盖默认的实体最大生命值。
  * `damage` 设置覆盖默认的实体攻击力。
  * `level` 设置可用于设置实体的 AuraMobs 或 MythicMobs 实体等级。
  * 默认钓上时的水平垂直速度可通过 `velocity.horizontal` 与 `velocity.vertical` 设置覆盖。
  * `hand`、`off_hand`、`feet`、`legs`、`chest` 与 `head` 用于决定生成实体的装备。
    * 值使用的物品格式与普通战利品相同（如 `material`、`enchantments` 等）。
* 新增升级时 BossBar 动画。
  * 允许玩家动态浏览升级状态下的 BossBar 进度。
  * 可在主配置文件的 `boss_bar.animate_progress` 处开关。
* 现在单个战利品条目支持嵌入多条命令。
  * 使用 `commands` 而非 `command` 以插入多条命令。

## 改动

* 优化依赖 SQL 的排行榜更新机制
* 修复了 1.20.5+ 升级标题不显示的问题
* 修复了“经验转化”会给予过高经验值的问题
* 修复了启用职业但未安装经济插件时的 BossBar 显示问题

## API 改动

* 迁移并创建了 Configurate API 包装器（重大改动）
  * api 与 api-bukkit 内的 ConfigurationNode 被替换为 ConfigNode 包装器类。
  * Configurate 不再包含于 api 模块中作为依赖。
  * 任意使用了 API 内 ConfigurationNode 的插件会失效，必须更新（如使用了 LootParser、创建自定义经验来源类型或 ItemManager#parseItem 方法）
  * 只需将 ConfigurationNode 引用改为 ConfigNode，大多数方法为从原方法照搬。
  * 该改动是为了修复与 Nova 一类插件载入时的严重报错。
* 向 ItemManager 加入了特征修饰符。
  * 弃用了 addModifier、getModifiers 与 removeModifier，替换为 addStatModifier、getStatModifiers 与 removeStatModifier。
* 向 SkillsUser 添加了 ActionBar 方法，用于发送与暂停 ActionBar 消息。