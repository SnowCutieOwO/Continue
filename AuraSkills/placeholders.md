# 变量

PlaceholderAPI 变量列表

AuraSkills 提供了开箱即用的 PlaceholderAPI，无需下载变量拓展。因插件 2.0 版本后的改名，现存以 `%aureliumskills_%` 开头的变量仍然会与 `%auraskills_` 一并生效。但是，你应当将变量逐渐更换为 `%auraskills_`，旧版变量有可能在未来随时移除。

## 列表

* `%auraskills_power%` - 综合技能等级。
* `%auraskills_[技能名称]%` - 指定技能等级（示例；`%aureliumskills_farming%`）。
* `%auraskills_[技能名称]_roman%` - 罗马数字格式显示的指定技能等级。
* `%auraskills_[属性名称]%` - 指定属性等级（如：`%aureliumskills_health%`）
* `%auraskills_[属性名称]_int%` - 指定属性等级，取整显示。
* `%auraskills_average%` - 平均技能等级。
* `%auraskills_average_int%` - 平均技能等级，取整显示。
* `%auraskills_average_1%` - 平均技能等级，取一位小数显示。
* `%auraskills_hp%` - 取整显示的血量。
* `%auraskills_hp_1%` - 取一位小数显示的血量。
* `%auraskills_hp_2%` - 取两位小数显示的血量。
* `%auraskills_hp_max%` - 血量上限。
* `%auraskills_hp_percent%` - 取整显示的生命值百分比。
* `%auraskills_mana%` - 当前玩家魔力值。
* `%auraskills_mana_int%` - 取整显示当前玩家魔力值。
* `%auraskills_lb_power_[名次]%` - 指定排名综合技能等级及对应玩家名称。
* `%auraskills_lb_power_[名次]_name%` - 指定排名综合技能等级对应玩家名称。
* `%auraskills_lb_power_[名次]_value%` - 指定排名综合技能等级数值。
* `%auraskills_lb_[技能名称]_[名次]%` - 指定排名技能等级及对应玩家名称。
* `%auraskills_lb_[技能名称]_[名次]_name%` - 指定排名技能等级对应玩家名称。
* `%auraskills_lb_[技能名称]_[名次]_value%` - 指定排名技能等级数值。
* `%auraskills_rank%` - 获取综合技能排行榜头衔。
* `%auraskills_rank_[技能名称]%` - 获取指定技能排行榜头衔。
* `%auraskills_xp_required_formatted_[技能名称]%` - 获取指定技能下一级所需经验缩写（示例：5k）
* `%auraskills_xp_required_[技能名称]%` - 获取指定技能下一级所需经验实际数值
* `%auraskills_xp_progress_int_[技能名称]%` - 获取当前等级升级进度整数百分比。
* `%auraskills_xp_progress_1_[技能名称]%` - 获取当前等级升级进度一位小数百分比。
* `%auraskills_xp_progress_[技能名称]%` - 获取当前等级升级进度百分比。
* `%auraskills_xp_int_[技能名称]%` - 获取玩家当前经验数。
* `%auraskills_xp_formatted_[技能名称]%` - 获取玩家当前缩写经验数。
* `%auraskills_xp_[技能名称]%` - 获取玩家当前经验实际数值。
* `%auraskills_multiplier%` - 获取玩家权限经验倍率，取两位小数。（1 = 无倍率，2 = 双倍经验）
* `%auraskills_multiplier_[技能名称]%` - 获取玩家指定技能的权限经验倍率，取两位小数。（1 = 无倍率，2 = 双倍经验）
* `%auraskills_multiplier_percent%` - 获取玩家指定技能的权限经验倍率，取额外部分的百分比。（40 = 40% 额外经验加成）
* `%auraskills_multiplier_percent_[技能名称]%` - 获取玩家指定技能的权限经验倍率，取额外部分的百分比整数。（40 = 40% 额外经验加成）
* `%auraskills_actionbar_status%` - 获取玩家 ActionBar 的开关状态。根据情况返回 true 或 false。
* `%auraskills_[能力名称]%` - 获取能力等级。将 `[能力名称]` 替换为能力的英文小写原名。
* `%auraskills_[能力名称]_roman%` - 获取罗马数字的能力等级。
* `%auraskills_[能力名称]_value%` - 获取能力的数值。
* `%auraskills_[能力名称]_value_int%` - 获取能力整数数值。
* `%auraskills_[能力名称]_value_2%` - 若存在，获取能力次级数值。
* `%auraskills_[能力名称]_value_2_int%` - 若存在，获取能力整数次级数值。
* `%auraskills_mability_[能力名称]%` - 获取魔法能力等级。
* `%auraskills_mability_[能力名称]_roman%` - 获取罗马数字的魔法能力等级。
* `%auraskills_mability_[能力名称]_value%` - 获取魔法能力的数值。
* `%auraskills_mability_[能力名称]_value_int%` - 获取魔法能力整数数值。
* `%auraskills_mability_[能力名称]_active%` - 返回指定魔法能力是否激活。若有则返回 true，反之返回 false。
* `%auraskills_trait_[特征名称]%` - 获取指定特征的有效等级。
* `%auraskills_trait_[特征名称]_bonus%` - 获取指定特征的额外等级（含基础数值）。
* `%auraskills_trait_[特征名称]_menu%` - 返回与属性界面中格式相同的特征。
* `%auraskills_jobs_list%` - 列出所有可用职业的小写英文名，以逗号分隔。
* `%auraskills_jobs_list_formatted%` - 列出所有可用职业对应 `default_language` 语言的本地化名称，以逗号分隔。
* `%auraskills_jobs_count%` - 返回玩家当前拥有的职业数量。
* `%auraskills_jobs_limit%` - 返回玩家最多拥有的职业数量。
* `%auraskills_jobs_active_[技能名称]%` - 根据指定职业激活情况返回 true 或 false。（示例：`%auraskills_jobs_active_farming%`）