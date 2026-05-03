# 变量

自 Towny 0.94.0.18 开始，插件内置了对 PlaceholderAPI 的支持，无需再从 PAPI eCloud 下载变量拓展。使用这些变量仍需安装 PlaceholderAPI 插件本身。不过目前 Towny 本体尚不支持变量，只有 TownyChat 可以使用。

如果你使用的 Towny 版本低于 0.94.0.18，你仍可以下载[旧的 PAPI Towny 变量拓展](https://api.extendedclip.com/expansions/towny/)。

> 你可以在 Towny 的 config.yml `papi_chat_formatting` 部分自定义变量的返回值。（比如，去掉方括号，或者改变颜色）

::: detail 按时间顺序排列

## v0.95.0.0 引入

* `%townyadvanced_town%` - 返回城镇名称（若有）
* `%townyadvanced_town_formatted%` - 返回带格式的城镇名称（若有）
* `%townyadvanced_nation%` - 返回国家名称（若有）
* `%townyadvanced_nation_formatted%` - 返回带格式的国家名称（若有）
* `%townyadvanced_town_balance%` - 返回城镇银行存款
* `%townyadvanced_nation_balance%` - 返回国家银行存款
* `%townyadvanced_town_tag%` - 返回城镇标签（若有）
* `%townyadvanced_town_tag_override%` - 返回城镇标签（若有）或完整城镇名称
* `%townyadvanced_nation_tag%` - 返回国家标签（若有）
* `%townyadvanced_nation_tag_override%` - 返回国家标签（若有）或完整国家名称
* `%townyadvanced_towny_tag%` - 返回城镇及国家标签
* `%townyadvanced_towny_tag_override%` - 若玩家拥有城镇与国家标签，则返回，若无则返回名称
* `%townyadvanced_towny_tag_formatted%` - 若玩家拥有城镇与国家标签，则返回，若无则返回带格式的名称
* `%townyadvanced_title%` - 返回国家领袖授予的前缀
* `%townyadvanced_surname%` - 返回国家领袖授予的后缀
* `%townyadvanced_towny_name_prefix%` - 返回城镇拥有者及国家领袖的前缀
* `%townyadvanced_towny_name_postfix%` - 返回城镇拥有者及国家领袖的后缀
* `%townyadvanced_towny_prefix%` - 若有前缀，则返回，若无则返回城镇拥有者及国家领袖的前缀
* `%townyadvanced_towny_postfix%` - 若有后缀，则返回，若无则返回城镇拥有者及国家领袖的后缀
* `%townyadvanced_towny_colour%` - 返回玩家身份对应名称的颜色（详见 config.yml）

## v0.95.1.0 引入

* `%townyadvanced_town_residents_amount%` - 返回城镇居民的数量
* `%townyadvanced_town_residents_online%` - 返回城镇在线居民的数量
* `%townyadvanced_town_townblocks_used%` - 返回城镇占领的地块数量
* `%townyadvanced_town_townblocks_bought%` - 返回城镇购置的地块数量
* `%townyadvanced_town_townblocks_bonus%` - 返回城镇额外获得的地块数量
* `%townyadvanced_town_townblocks_maximum%` - 返回城镇可占领的地块数量
* `%townyadvanced_town_townblocks_natural_maximum%` - 返回城镇可占领的地块数量，忽略奖励与购置地块数量
* `%townyadvanced_town_mayor%` - 返回居民所在城镇的拥有者名称
* `%townyadvanced_nation_king%` - 返回居民所在国家的领袖名称
* `%townyadvanced_resident_friends_amount%` - 返回居民的好友数量
* `%townyadvanced_nation_residents_amount%` - 返回居民所在国家的国民数量
* `%townyadvanced_nation_residents_online%` - 返回居民所在国家的在线国民数量
* `%townyadvanced_nation_capital%` - 返回居民所在国家首都的名称

## v0.95.2.0 引入

* `%townyadvanced_daily_town_upkeep%` - 返回城镇的维护费用
* `%townyadvanced_daily_nation_upkeep%` - 返回国家的维护费用
* `%townyadvanced_has_town%` - 返回居民是否已经加入了城镇
* `%townyadvanced_has_nation%` - 返回居民是否已经加入了国家

## v0.96.0.0 引入

* `%townyadvanced_nation_tag_town_formatted%` - 返回国家标签及完整城镇名称。若国家标签未设置，则只返回城镇名称。

## v0.96.2.0 引入

* `%townyadvanced_town_ranks%` - 返回城镇拥有者及其他获得的职称，若无则返回空
* `%townyadvanced_nation_ranks%` - 返回国家领袖及其他获得的职称，若无则返回空
* `%townyadvanced_player_status%` - 根据玩家所处地位返回游民、居民、城镇拥有者或国家领袖

## v0.96.3.0 引入

* `%townyadvanced_town_prefix%` - 返回玩家所属城镇在配置中设置的前缀（如：废墟、定居点）
* `%townyadvanced_town_postfix%` - 返回玩家所属城镇在配置中设置的后缀（如：废墟、定居点）
* `%townyadvanced_nation_prefix%` - 返回玩家所属国家在配置中设置的前缀（如：土地、领域）
* `%townyadvanced_nation_postfix%` - 返回玩家所属国家在配置中设置的后缀（如：土地、领域）
* `%townyadvanced_player_jailed%` - 若玩家正处于监禁状态，则返回 true。否则返回 false。
* `%townyadvanced_player_plot_type%` - 返回玩家所处地块的类型，如：商店，若无则返回空。
* `%townyadvanced_player_plot_owner%` - 返回玩家是否为地块的拥有者，若是则返回 true。
* `%townyadvanced_nation_tag_town_name%` - 返回国家标签（若有，否则返回空）及城镇名称（若玩家已经加入城镇）
* `%townyadvanced_daily_town_tax%` - 返回城镇向居民收取的每日税额
* `%townyadvanced_daily_nation_tax%` - 返回国家向城镇收取的每日税额

## v0.96.6.0 引入

* `%townyadvanced_player_location_town_or_wildname%` - 返回玩家所在城镇或郊区名称
* `%townyadvanced_player_location_formattedtown_or_wildname%` - 返回玩家所在城镇或郊区的格式化名称
* `%townyadvanced_player_location_town_prefix%` - 返回玩家的前缀，若无则返回空
* `%townyadvanced_player_location_town_postfix%` - 返回玩家的后缀，若无则返回空
* `%townyadvanced_player_location_pvp%` - 根据所处位置是否开放 PVP 返回开启状态，若无则返回空
* `%townyadvanced_nation_map_color_hex%` - 返回命令 `/t set mapcolor` 中设置（详见 dynmap-towny）的国家的十六进制颜色值

## v0.96.7.0 引入

* `%townyadvanced_is_nation_peaceful%` - 如果玩家所属国家为和平状态，则返回 `status_town_title_peaceful` 设置的值，默认为 `&b(和平状态)`
* `%townyadvanced_is_town_peaceful%` - 如果玩家所属城镇为和平状态，则返回 `status_town_title_peaceful` 设置的值，默认为 `&b(和平状态)`
* `%townyadvanced_player_location_plot_name%` - 若有，则返回地皮的名称。
* 有关变量：`%rel_townyadvanced_color%`
  * 给名称加上 config.yml 新增的 `papi_relational_formatting` 部分所指的颜色
  * 可以用于 TAB 或其他插件的相关变量中。

## v0.97.1.0 引入

* `%townyadvanced_player_location_plot_owner_name%` - 返回地皮拥有者，若无人拥有则返回空
* `%townyadvanced_town_map_color_hex%` - 返回城镇设置的颜色

## v0.97.2.0 引入

* `%townyadvanced_player_location_town_resident_count%` - 若玩家所处位置属于某个城镇，返回城镇中的居民数量
* `%townyadvanced_player_location_town_mayor_name%` - 若玩家所处位置属于某个城镇，返回城镇拥有者的名称
* `%townyadvanced_player_location_town_nation_name%` - 若玩家所处位置属于某个城镇且它属于某个国家，返回国家的名称

## v0.97.3.0 引入

* `%townyadvanced_town_board%` - 返回玩家所属城镇的公告消息
* `%townyadvanced_nation_board%` - 返回玩家所属国家的公告消息
* `%townyadvanced_player_location_town_board%` - 返回玩家所处城镇的公告消息
* `%townyadvanced_player_location_nation_board%` - 返回玩家所处国家的公告消息

## v0.98.0.0 引入

* `%townyadvanced_player_location_plotgroup_name%` - 若玩家所在位置有地皮组，则返回地皮组的名称
* `%townyadvanced_player_location_plot_forsale%` - 若地皮处于挂售状态，则返回语言文件中的“地皮挂售”对应字符串
* `%townyadvanced_is_town_public%` - 若城镇处于对外开放状态，则返回语言文件中的“开放状态”字符串
* `%townyadvanced_is_town_open%` - 若玩家所属的城镇处于对外开放状态，则返回语言文件中的“开放状态”字符串

## v0.98.2.0 引入

* `%townyadvanced_time_until_new_day_hours_raw%` - 返回新城镇日到来的剩余小时数
* `%townyadvanced_time_until_new_day_minutes_raw%` - 返回新城镇日到来的剩余分钟数
* `%townyadvanced_time_until_new_day_seconds_raw%` - 返回新城镇日到来的剩余秒钟数
* `%townyadvanced_time_until_new_day_formatted%` - 返回新城镇日到来的剩余时间，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_hours_formatted%` - 返回新城镇日到来的剩余小时数，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_minutes_formatted%` - 返回新城镇日到来的剩余分钟数，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_seconds_formatted%` - 返回新城镇日到来的剩余秒钟数，带格式且跟随玩家选择语言

## v0.98.3.0 引入

* `%townyadvanced_town_creation_cost%` - 返回城镇建立的价格
* `%townyadvanced_nation_creation_cost%` - 返回国家建立的价格
* `%townyadvanced_number_of_towns_in_server%` - 返回服务器上的城镇总数
* `%townyadvanced_number_of_neutral_towns_in_server%` - 返回服务器上的中立城镇总数
* `%townyadvanced_number_of_towns_in_world%` - 返回与玩家在同一世界有占领地块的城镇数量
* `%townyadvanced_number_of_neutral_towns_in_world%` - 返回与玩家在同一世界有占领地块的中立城镇数量

## v0.98.4.0 引入

* `%townyadvanced_daily_town_per_plot_upkeep%` - 返回城镇每块地块的维护费用
* `%townyadvanced_daily_town_overclaimed_per_plot_upkeep_penalty%` - 返回城镇每块地块的额外维护费用
* `%townyadvanced_daily_town_upkeep_reduction_from_town_level%` - 返回城镇受其等级 `upkeepModifier` 影响获得的维护费折扣，若玩家不属于任何城镇，则返回只有一个玩家的城镇的维护费用
* `%townyadvanced_daily_town_upkeep_reduction_from_nation_level%` - 返回城镇受其等级 `nationTownUpkeepModifier` 影响获得的维护费折扣，若玩家不属于任何国家，则返回只有一个玩家的国家的维护费用
* `%townyadvanced_daily_nation_per_town_upkeep%` - 返回国家中城镇的平均维护费用
* `%townyadvanced_daily_nation_upkeep_reduction_from_nation_level%` - 返回国家受其等级 `nationTownUpkeepModifier` 影响获得的维护费折扣，若玩家不属于任何国家，则返回只有一个玩家的国家的维护费用
* `%townyadvanced_town_merge_cost%` - 返回合并城镇所需的基础费用
* `%townyadvanced_town_merge_per_plot_percentage%` - 返回被合并城镇需要支付的地块费用
* `%townyadvanced_town_reclaim_cost%` - 返回收复城镇的费用
* `%townyadvanced_town_reclaim_max_duration_hours%` - 返回城镇被删除前可保持废弃状态的时间上限
* `%townyadvanced_town_reclaim_min_duration_hours%` - 返回城镇被删除前可保持废弃状态的时间下限
* `%townyadvanced_townblock_buy_bonus_price%` - 返回通过 `/t buy bonus` 命令购买城镇地块的基础价格
* `%townyadvanced_townblock_claim_price%` - 返回通过 `/t claim` 命令占领城镇地块的基础价格
* `%townyadvanced_townblock_unclaim_price%` - 返回通过 `/t unclaim` 命令解除占领城镇地块的基础价格
* `%townyadvanced_outpost_claim_price%` - 返回通过 `/t claim outpost` 命令设置前哨站的基础价格
* `%townyadvanced_town_unformatted%` - 若玩家已经加入城镇，则返回其名称
* `%townyadvanced_nation_unformatted%` - 若玩家已经加入国家，则返回其名称
* `%townyadvanced_player_town_is_trusted%` - 根据玩家是否加入城镇且受到信任返回 true 或 false
* `%townyadvanced_player_plot_is_trusted%` - 根据玩家是否加入地皮且受到地皮信任返回 true 或 false
* `%townyadvanced_town_balance_unformatted%` - 返回城镇银行的存款数字
* `%townyadvanced_nation_balance_unformatted%` - 返回国家银行的存款数字

## v0.98.5.0 引入

* `%townyadvanced_nation_or_town_name%` - 返回玩家国家名称，若无则返回城镇名称，否则返回空

## v0.99.0.0 引入

* `%townyadvanced_townblock_next_claim_price%` - 返回占领下一块地皮的价格，计算价格时考虑所所有涨价规则

## v0.99.1.0 引入

* `%townyadvanced_resident_primary_rank_spaced%` - 返回居民的初级等级，以空格分隔
* `%townyadvanced_player_status%` - 根据玩家所在位置返回游民、居民、城镇拥有者或国家领袖称号

## v0.99.2.0 引入

* `%townyadvanced_town_map_color_minimessage_hex%` - 返回 MiniMessage 格式的城镇颜色（兼容 TownyChat）
* `%townyadvanced_nation_map_color_minimessage_hex%` - 返回 MiniMessage 格式的国家颜色（兼容 TownyChat）
* `%townyadvanced_top_town_balance_数字%` - 按城镇银行存款排序，返回指定排名的城镇名称
* `%townyadvanced_top_town_residents_数字%` - 按居民数量排序，返回指定排名的城镇名称
* `%townyadvanced_top_town_land_数字%` - 按占领地块数量排序，返回指定排名的城镇名称

## v0.100.1.0 引入

* `%townyadvanced_daily_resident_tax%` - 返回玩家每日支付的税。返回数字为任意城镇税与地皮税之和。欠税会缓存一段时间，长度受 config.yml 中的 `economy.bank_account_cache_timeout` 设置控制。
* `%townyadvanced_daily_resident_tax_unformatted%` - 不带格式返回玩家每日支付的税。

## v0.101.1.0 引入

* `%townyadvanced_town_formatted_with_town_minimessage_colour%` - 使用了配置的城镇变量格式，但以 MiniMessage 格式在城镇名称前插入颜色
* `%townyadvanced_nation_formatted_with_nation_minimessage_colour%` - 使用了配置的国家变量格式，但以 MiniMessage 格式在国家名称前插入颜色
* `%townyadvanced_towny_tag_override_with_minimessage_colour%` - 使用了配置的“全部显示”变量格式，但以MiniMessage 格式在国家或城镇名称（或设置的对应标签）前插入颜色
* `%townyadvanced_resident_join_date_unformatted%` - 返回玩家加入服务器的时间，以毫秒为单位
* `%townyadvanced_resident_join_date_formatted%` - 返回玩家加入服务器的时间，按正常时间单位分割
* `%townyadvanced_player_location_town_forsale_cost%` - 返回购置玩家所处位置城镇的价格，若无法购得则返回“非卖”

## v0.102.0.0 引入

* `%townyadvanced_town_tag_unformatted%` - 从 Towny 的 config.yml 中读取的无格式城镇标签
* `%townyadvanced_town_tag_override_unformatted%` - Towny 的 config.yml 中读取的城镇标签（若不设置则为名称）
* `%townyadvanced_nation_tag_unformatted%` - 从 Towny 的 config.yml 中读取的无格式国家标签
* `%townyadvanced_nation_tag_override_unformatted%` - Towny 的 config.yml 中读取的国家标签（若不设置则为名称）
* `%townyadvanced_daily_town_upkeep_unformatted%` - 返回无格式的城镇维护费用数量
* `%townyadvanced_daily_nation_upkeep_unformatted%` - 返回无格式的国家维护费用数量

:::

::: detail 按类型排列

## 城镇与国家前缀/标签相关

* `%townyadvanced_town%` - 返回城镇名称（若有）
* `%townyadvanced_town_formatted%` - 返回带格式的城镇名称（若有）
* `%townyadvanced_town_formatted_with_town_minimessage_colour%` - 使用了配置的城镇变量格式，但以 MiniMessage 格式在城镇名称前插入颜色
* `%townyadvanced_town_unformatted%` - 若玩家已经加入城镇，则返回其名称
* `%townyadvanced_town_tag%` - 返回城镇标签（若有）
* `%townyadvanced_town_tag_override%` - 返回城镇标签（若有）或完整城镇名称
* `%townyadvanced_town_unformatted%` - 若玩家已经加入城镇，则返回其名称
* `%townyadvanced_town_tag_override_unformatted%` - Towny 的 config.yml 中读取的城镇标签（若不设置则为名称）
* `%townyadvanced_nation_or_town_name%` - 返回玩家国家名称，若无则返回城镇名称，否则返回空
* `%townyadvanced_nation%` - 返回国家名称（若有）
* `%townyadvanced_nation_formatted%` - 返回带格式的国家名称（若有）
* `%townyadvanced_nation_formatted_with_nation_minimessage_colour%` - 使用了配置的国家变量格式，但以 MiniMessage 格式在国家名称前插入颜色
* `%townyadvanced_nation_unformatted%` - 若玩家已经加入国家，则返回其名称
* `%townyadvanced_nation_tag_override_unformatted%` - Towny 的 config.yml 中读取的国家标签（若不设置则为名称）
* `%townyadvanced_towny_tag%` - 返回城镇及国家标签
* `%townyadvanced_towny_tag_override%` - 若玩家拥有城镇与国家标签，则返回，若无则返回名称
* `%townyadvanced_towny_tag_override_with_minimessage_colour%` - 使用了配置的“全部显示”变量格式，但以MiniMessage 格式在国家或城镇名称（或设置的对应标签）前插入颜色
* `%townyadvanced_towny_tag_formatted%` - 若玩家拥有城镇与国家标签，则返回，若无则返回带格式的名称

## 居民相关

* `%townyadvanced_title%` - 返回国家领袖授予的前缀
* `%townyadvanced_surname%` - 返回国家领袖授予的后缀
* `%townyadvanced_towny_name_prefix%` - 返回城镇拥有者及国家领袖的前缀
* `%townyadvanced_towny_name_postfix%` - 返回城镇拥有者及国家领袖的后缀
* `%townyadvanced_towny_prefix%` - 若有前缀，则返回，若无则返回城镇拥有者及国家领袖的前缀
* `%townyadvanced_towny_postfix%` - 若有后缀，则返回，若无则返回城镇拥有者及国家领袖的后缀
* `%townyadvanced_town_ranks%` - 返回城镇拥有者及其他获得的职称，若无则返回空
* `%townyadvanced_nation_ranks%` - 返回国家领袖及其他获得的职称，若无则返回空
* `%townyadvanced_resident_primary_rank%` - 返回居民的初级等级
* `%townyadvanced_resident_primary_rank_spaced%` - 返回居民的初级等级，以空格分隔
* `%townyadvanced_player_status%` - 根据玩家所处地位返回游民、居民、城镇拥有者或国家领袖
* `%townyadvanced_towny_colour%` - 返回玩家身份对应名称的颜色（详见 config.yml）
* `%townyadvanced_resident_join_date_unformatted%` - 返回玩家加入服务器的时间，以毫秒为单位
* `%townyadvanced_resident_join_date_formatted%` - 返回玩家加入服务器的时间，按正常时间单位分割
* `%townyadvanced_resident_friends_amount%` - 返回居民的好友数量
* `%townyadvanced_has_town%` - 返回居民是否已经加入了城镇
* `%townyadvanced_has_nation%` - 返回居民是否已经加入了国家
* `%townyadvanced_player_jailed%` - 若玩家正处于监禁状态，则返回 true。否则返回 false。

## 城镇相关

* `%townyadvanced_town_residents_amount%` - 返回城镇居民的数量
* `%townyadvanced_town_residents_online%` - 返回城镇在线居民的数量
* `%townyadvanced_town_townblocks_used%` - 返回城镇占领的地块数量
* `%townyadvanced_town_townblocks_bought%` - 返回城镇购置的地块数量
* `%townyadvanced_town_townblocks_bonus%` - 返回城镇额外获得的地块数量
* `%townyadvanced_town_townblocks_maximum%` - 返回城镇可占领的地块数量
* `%townyadvanced_town_townblocks_natural_maximum%` - 返回城镇可占领的地块数量，忽略奖励与购置地块数量
* `%townyadvanced_town_mayor%` - 返回居民所在城镇的拥有者名称
* `%townyadvanced_town_prefix%` - 返回玩家所属城镇在配置中设置的前缀（如：废墟、定居点）
* `%townyadvanced_town_postfix%` - 返回玩家所属城镇在配置中设置的后缀（如：废墟、定居点）
* `%townyadvanced_is_town_peaceful%` - 如果玩家所属城镇为和平状态，则返回 `status_town_title_peaceful` 设置的值，默认为 `&b(和平状态)`
* `%townyadvanced_is_town_public%` - 若城镇处于对外开放状态，则返回语言文件中的“开放状态”字符串
* `%townyadvanced_is_town_open%` - 若玩家所属的城镇处于对外开放状态，则返回语言文件中的“开放状态”字符串
* `%townyadvanced_town_map_color_hex%` - 返回城镇设置的颜色
* `%townyadvanced_town_map_color_minimessage_hex%` - 返回 MiniMessage 格式的城镇颜色（兼容 TownyChat）
* `%townyadvanced_town_board%` - 返回玩家所属城镇的公告消息
* `%townyadvanced_town_reclaim_max_duration_hours%` - 返回城镇被删除前可保持废弃状态的时间上限
* `%townyadvanced_town_reclaim_min_duration_hours%` - 返回城镇被删除前可保持废弃状态的时间下限

## 国家相关

* `%townyadvanced_nation_residents_amount%` - 返回居民所在国家的国民数量
* `%townyadvanced_nation_residents_online%` - 返回居民所在国家的在线国民数量
* `%townyadvanced_nation_king%` - 返回居民所在国家的领袖名称
* `%townyadvanced_nation_capital%` - 返回居民所在国家首都的名称
* `%townyadvanced_nation_prefix%` - 返回玩家所属国家在配置中设置的前缀（如：土地、领域）
* `%townyadvanced_nation_postfix%` - 返回玩家所属国家在配置中设置的后缀（如：土地、领域）
* `%townyadvanced_nation_map_color_hex%` - 返回命令 `/t set mapcolor` 中设置（详见 dynmap-towny）的国家的十六进制颜色值
* `%townyadvanced_nation_map_color_minimessage_hex%` - 返回 MiniMessage 格式的国家颜色（兼容 TownyChat）
* `%townyadvanced_is_nation_peaceful%` - 如果玩家所属国家为和平状态，则返回 `status_town_title_peaceful` 设置的值，默认为 `&b(和平状态)`
* `%townyadvanced_nation_board%` - 返回玩家所属国家的公告消息

## 新城镇日相关

* `%townyadvanced_time_until_new_day_hours_raw%` - 返回新城镇日到来的剩余小时数
* `%townyadvanced_time_until_new_day_minutes_raw%` - 返回新城镇日到来的剩余分钟数
* `%townyadvanced_time_until_new_day_seconds_raw%` - 返回新城镇日到来的剩余秒钟数
* `%townyadvanced_time_until_new_day_formatted%` - 返回新城镇日到来的剩余时间，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_hours_formatted%` - 返回新城镇日到来的剩余小时数，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_minutes_formatted%` - 返回新城镇日到来的剩余分钟数，带格式且跟随玩家选择语言
* `%townyadvanced_time_until_new_day_seconds_formatted%` - 返回新城镇日到来的剩余秒钟数，带格式且跟随玩家选择语言

## 经济相关

* `%townyadvanced_town_balance%` - 返回城镇银行存款
* `%townyadvanced_nation_balance%` - 返回国家银行存款
* `%townyadvanced_town_balance_unformatted%` - 返回城镇银行的存款数字
* `%townyadvanced_nation_balance_unformatted%` - 返回国家银行的存款数字
* `%townyadvanced_daily_town_upkeep%` - 返回城镇的维护费用
* `%townyadvanced_daily_town_upkeep_unformatted%` - 返回无格式的城镇维护费用数量
* `%townyadvanced_daily_nation_upkeep%` - 返回国家的维护费用
* `%townyadvanced_daily_nation_upkeep_unformatted%` - 返回无格式的国家维护费用数量
* `%townyadvanced_daily_town_tax%` - 返回城镇向居民收取的每日税额
* `%townyadvanced_daily_nation_tax%` - 返回国家向城镇收取的每日税额
* `%townyadvanced_daily_town_per_plot_upkeep%` - 返回城镇每块地块的维护费用
* `%townyadvanced_daily_town_overclaimed_per_plot_upkeep_penalty%` - 返回城镇每块地块的额外维护费用
* `%townyadvanced_daily_town_upkeep_reduction_from_town_level%` - 返回城镇受其等级 `upkeepModifier` 影响获得的维护费折扣，若玩家不属于任何城镇，则返回只有一个玩家的城镇的维护费用
* `%townyadvanced_daily_town_upkeep_reduction_from_nation_level%` - 返回城镇受其等级 `nationTownUpkeepModifier` 影响获得的维护费折扣，若玩家不属于任何国家，则返回只有一个玩家的国家的维护费用
* `%townyadvanced_daily_nation_per_town_upkeep%` - 返回国家中城镇的平均维护费用
* `%townyadvanced_daily_nation_upkeep_reduction_from_nation_level%` - 返回国家受其等级 `nationTownUpkeepModifier` 影响获得的维护费折扣，若玩家不属于任何国家，则返回只有一个玩家的国家的维护费用
* `%townyadvanced_town_creation_cost%` - 返回城镇建立的价格
* `%townyadvanced_nation_creation_cost%` - 返回国家建立的价格
* `%townyadvanced_townblock_buy_bonus_price%` - 返回通过 `/t buy bonus` 命令购买城镇地块的基础价格
* `%townyadvanced_townblock_claim_price%` - 返回通过 `/t claim` 命令占领城镇地块的基础价格
* `%townyadvanced_townblock_unclaim_price%` - 返回通过 `/t unclaim` 命令解除占领城镇地块的基础价格
* `%townyadvanced_outpost_claim_price%` - 返回通过 `/t claim outpost` 命令设置前哨站的基础价格
* `%townyadvanced_townblock_next_claim_price%` - 返回占领下一块地皮的价格，计算价格时考虑所所有涨价规则
* `%townyadvanced_town_merge_cost%` - 返回合并城镇所需的基础费用
* `%townyadvanced_town_merge_per_plot_percentage%` - 返回被合并城镇需要支付的地块费用
* `%townyadvanced_town_reclaim_cost%` - 返回收复城镇的费用
* `%townyadvanced_daily_resident_tax%` - 返回玩家每日支付的税。返回数字为任意城镇税与地皮税之和。欠税会缓存一段时间，长度受 config.yml 中的 `economy.bank_account_cache_timeout` 设置控制。
* `%townyadvanced_daily_resident_tax_unformatted%` - 不带格式返回玩家每日支付的税。

## 排行榜相关

* `%townyadvanced_top_town_balance_数字%` - 按城镇银行存款排序，返回指定排名的城镇名称
* `%townyadvanced_top_town_residents_数字%` - 按居民数量排序，返回指定排名的城镇名称
* `%townyadvanced_top_town_land_数字%` - 按占领地块数量排序，返回指定排名的城镇名称

## 位置相关

* `%townyadvanced_player_plot_type%` - 返回玩家所处地块的类型，如：商店，若无则返回空。
* `%townyadvanced_player_plot_owner%` - 返回玩家是否为地块的拥有者，若是则返回 true。
* `%townyadvanced_player_location_town_or_wildname%` - 返回玩家所在城镇或郊区名称
* `%townyadvanced_player_location_formattedtown_or_wildname%` - 返回玩家所在城镇或郊区的格式化名称
* `%townyadvanced_player_location_town_prefix%` - 返回玩家的前缀，若无则返回空
* `%townyadvanced_player_location_town_postfix%` - 返回玩家的后缀，若无则返回空
* `%townyadvanced_player_location_pvp%` - 根据所处位置是否开放 PVP 返回开启状态，若无则返回空
* `%townyadvanced_player_location_plot_name%` - 若有，则返回地皮的名称。
* `%townyadvanced_player_location_plot_owner_name%` - 返回地皮拥有者，若无人拥有则返回空
* `%townyadvanced_player_location_town_resident_count%` - 若玩家所处位置属于某个城镇，返回城镇中的居民数量
* `%townyadvanced_player_location_town_mayor_name%` - 若玩家所处位置属于某个城镇，返回城镇拥有者的名称
* `%townyadvanced_player_location_town_nation_name%` - 若玩家所处位置属于某个城镇且它属于某个国家，返回国家的名称
* `%townyadvanced_player_location_town_board%` - 返回玩家所处城镇的公告消息
* `%townyadvanced_player_location_nation_board%` - 返回玩家所处国家的公告消息
* `%townyadvanced_player_location_plotgroup_name%` - 若玩家所在位置有地皮组，则返回地皮组的名称
* `%townyadvanced_player_location_plot_forsale%` - 若地皮处于挂售状态，则返回语言文件中的“地皮挂售”对应字符串
* `%townyadvanced_player_location_town_forsale_cost%` - 返回购置玩家所处位置城镇的价格，若无法购得则返回“非卖”
* `%townyadvanced_player_town_is_trusted%` - 根据玩家是否加入城镇且受到信任返回 true 或 false
* `%townyadvanced_player_plot_is_trusted%` - 根据玩家是否加入地皮且受到地皮信任返回 true 或 false
* `%townyadvanced_number_of_towns_in_server%` - 返回服务器上的城镇总数
* `%townyadvanced_number_of_neutral_towns_in_server%` - 返回服务器上的中立城镇总数
* `%townyadvanced_number_of_towns_in_world%` - 返回与玩家在同一世界有占领地块的城镇数量
* `%townyadvanced_number_of_neutral_towns_in_world%` - 返回与玩家在同一世界有占领地块的中立城镇数量

## 相关变量

* `%rel_townyadvanced_color%` - 给名称加上 config.yml 新增的 `papi_relational_formatting` 部分所指的颜色。可以用于 TAB 或其他插件的相关变量中。