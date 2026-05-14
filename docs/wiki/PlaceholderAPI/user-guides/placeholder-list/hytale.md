# Hytale

这里是适用于 Hytale 的 PlaceholderAPI 变量拓展及变量列表。Minecraft 版本的变量列表请[点此前往](minecraft.md)。

拓展下方的提示框会包含下载的命令。\
如果带有`内置`字样，则你无需手动下载变量拓展。\
如果带有链接，则你需要自行从链接处下载变量拓展并将其放入插件的 `expansions` 文件夹。

::: tip
变量列表未经过任何改动，且不保证其准确性和/或时效性。

本页只会在请求时更新。我们建议通过[提交推送请求](https://github.com/PlaceholderAPI/PlaceholderAPI/pulls)对本列表进行更新。\
[本维基的自述页面](https://github.com/PlaceholderAPI/PlaceholderAPI/blob/wiki/README.md)解释了贡献相关的细节。
:::

[[toc]]

## 独立拓展

在这里列出的拓展无需安装其他插件或外部库，除非其额外声明。\
这里的大部分变量都由本插件团队维护，可视作*官方*变量。

### ChangeOutput

::: tip papi ecloud download changeoutput
:::

允许你修改其他变量返回的内容。

更多信息可在其 [Github 仓库](https://github.com/Kqliber/Expansion-ChangeOutput)上找到。

``` txt
%changeoutput_<选项>_input:<输入内容>_matcher:<匹配内容>_ifmatch:<匹配输出的内容>_else:<不匹配输出的内容>%
```

* `<选项>`：
    * equals - 完全匹配内容
    * ignorecase - 忽略英文字符的大小写
    * ignorecolor - 忽略传入的彩色代码
    * contains - 包含匹配内容
    * \>= - 检查输入是否大等于匹配内容
    * \> - 检查输入是否等于匹配内容
    * \<= - 检查输入是否小等于匹配内容
    * `<输入内容>` - 待比较的文本
    * `<匹配内容>` - 参与比较的文本或关键词
    * `<匹配输出的内容>` - 符合比较条件时输出的内容
    * `<不匹配输出的内容>` - 不符合比较条件时输出的内容

*所有参数均可嵌入变量，需以 `{}` 替代百分号。*

### [Javascript](https://api.extendedclip.com/expansions/javascript/)

::: warning 未经验证
鉴于某些潜在的安全性问题，这个变量拓展目前被标记为“未经验证”。使用风险需自行承担。
:::

使你能够通过 Javascript 根据条件输出不同内容。

``` txt
%javascript_<变量 ID>%
```

### Math

通过 EvalEx 进行简单和高级的数学运算。  

``` txt
%math_<表达式>%
%math_[精确位数]:[舍入模式]_<表达式>%
```

### Player

::: tip papi download Player
:::

``` txt
%player_uuid%
%player_username%
%player_language%
%player_world_uuid%
%player_x%
%player_y%
%player_z%
%player_yaw%
%player_pitch%
%player_has_played_before%
%player_name%
%player_gamemode%
%player_world%
%player_world_displayname%
%player_world_worldgen_type%
%player_world_worldgen_name%
%player_biome%
%player_item_in_hand%
%player_item_in_hand_quantity%
%player_item_in_hand_durability%
%player_item_in_hand_broken%
%player_item_in_hand_unbreakable%
%player_current_fall_distance%
%player_view_radius%
%player_client_view_radius%
%player_since_last_spawn_nanos%
%player_mount_entity_id%
%player_is_collidable%
%player_health%
%player_health_max%
%player_health_min%
%player_ammo%
%player_ammo_max%
%player_ammo_min%
%player_stamina%
%player_stamina_max%
%player_stamina_min%
%player_mana%
%player_mana_max%
%player_mana_min%
%player_oxygen%
%player_oxygen_max%
%player_oxygen_min%
%player_signature_energy%
%player_signature_energy_max%
%player_signature_energy_min%
%player_has_permission_<权限>%
```

### Progress

::: tip papi ecloud download Progress
:::

关于此变量拓展的更多信息可以在 Github 仓库中了解。

``` txt
%progress_bar_{变量}%
%progress_bar_{变量}_c:<填充符号>%
%progress_bar_{变量}_p:<半满符号>%
%progress_bar_{变量}_r:<空缺符号>%
%progress_bar_{变量}_l:<最大长度>%
%progress_bar_{变量}_m:<最大值>%
%progress_bar_{变量}_fullbar:<满条内容>%

# 示例
%progress_bar_{变量}_c:X_p:+_r:-_l:10_m:100_fullbar:Completed!%
```

### RNG

::: tip papi ecloud download RNG
::: 

``` txt
%rng_random%
%rng_online_player%
%rng_last_generated%
%rng_<最小值>,<最大值>%
%rng_list:<数字1>;<权重1>,<数字2>;<权重2>%

提醒：你也可以使用嵌套变量，；例如：%rng_{player_health},{player_exp}%

```

### Server

::: tip papi ecloud download Server
:::

``` txt
%server_name%
%server_online%
%server_worlds%
%server_max_players%
%server_max_view_radius%
%server_motd%
%server_default_gamemode%
%server_default_world%
%server_rate_limit_enabled%
%server_rate_limit_packets_per_second%
%server_rate_limit_burst_capacity%
%server_is_booting%
%server_is_shutting_down%
%server_boot_timestamp%
%server_uptime_millis%
%server_uptime_seconds%
%server_uptime%
%server_plugin_count%
```

### String

::: tip papi ecloud download String
:::

有关此拓展的更多信息可在其 [Github 仓库](https://github.com/BlitzOffline/StringExpansion)中找到。

``` txt

%string_equals_<文本>_<匹配文本>%
%string_equalsIgnoreCase_<文本>_<匹配文本>%
%string_contains_<文本>_<匹配文本>%
%string_containsIgnoreCase_<文本>_<匹配文本>%
%string_charAt_<索引>_<文本>%
%string_indexOf_<文本>_<匹配文本>%
%string_lastIndexOf_<文本>_<匹配文本>%
%string_substring_<起始索引>_<文本>%
%string_substring_<起始索引>,<终止索引>_<文本>%
%string_charAt_<索引>_<文本>%
%string_shuffle_<文本>%
%string_uppercase_<文本>%
%string_lowercase_<文本>%
%string_sentencecase_<文本>%
%string_capitalize_<文本>%
%string_length_<文本>%
%string_random_<文本1>,<文本2>,<文本3>,<...>%
%string_replaceCharacters_<配置>_<文本>%
%string_alternateuppercase_<文本>%
%string_startswith_<文本>_<匹配文本>%
%string_endswith_<文本>_<匹配文本>%
%string_trim_<文本>%
%string_occurences_count_<文本>_<匹配文本>%
```

### World

::: tip papi ecloud download World
:::

``` txt
%world_total%
%world_biome%
%world_time%
%world_timein12%
%world_fulltime%
%world_dayprogress%
%world_moonphase%
%world_sunlightfactor%
%world_date%
%world_sunddirection_x%
%world_sunddirection_y%
%world_sunddirection_z%
%world_name_<世界名称>%
%world_uuid_<世界名称>%
%world_seed_<世界名称>%
%world_canpvp_<世界名称>%
%world_spawnnpc_<世界名称>%
%world_npcfrozen_<世界名称>%
%world_falldamage_<世界名称>%
%world_objectivemarkers_<世界名称>%
%world_entities_<世界名称>%
%world_players_<世界名称>%
%world_players_<世界名称>_<权限组>%
%world_haspermission_<权限>_<世界名称>%
%world_playerexist_<玩家名称>_<世界名称>%
%world_recentjoin_<世界名称>%
%world_recentquit_<世界名称>%
%world_displayname_<世界名称>%
```

## 模组变量拓展

### [ArenaPVP](https://www.curseforge.com/hytale/mods/arena-pvp)

::: info 内置
:::

更多信息详见其[维基页面](https://arenapvp.hapore.net/docs/integrations/placeholderapi)。

``` txt
%arenapvp_in_arena%
%arenapvp_in_queue%
%arenapvp_in_pending%
%arenapvp_is_spectator%
%arenapvp_is_busy%
%arenapvp_in_group%
%arenapvp_is_leader%
%arenapvp_queue_category%
%arenapvp_arena_name%
%arenapvp_arena_category%
%arenapvp_arena_type%
%arenapvp_kills%
%arenapvp_deaths%
%arenapvp_wins%
%arenapvp_losses%
%arenapvp_kdr%
%arenapvp_wlr%
%arenapvp_rating_{类别}%
%arenapvp_kills_{类别}%
%arenapvp_deaths_{类别}%
%arenapvp_wins_{类别}%
%arenapvp_losses_{类别}%
%arenapvp_kdr_{类别}%
%arenapvp_wlr_{类别}%
%arenapvp_top_name_{类别}_{位置}%
%arenapvp_top_rating_{类别}_{位置}%
%arenapvp_top_kills_{类别}_{位置}%
%arenapvp_top_wins_{类别}_{位置}%
%arenapvp_group_size%
%arenapvp_group_leader%
%arenapvp_group_type%
%arenapvp_group_online%
%arenapvp_active_arenas%
%arenapvp_players_in_arenas%
%arenapvp_queue_size%
%arenapvp_pending_matches%
%arenapvp_queue_size_{类别}%
%arenapvp_active_arenas_{类别}%
```

### [CleanPing](https://www.curseforge.com/hytale/mods/cleanping)

::: info 内置
:::

``` txt
%cleanping_ping%
%cleanping_coloured_ping%
%cleanping_ping_<玩家名称>%
%cleanping_coloured_ping_<玩家名称>%
%cleanping_difference_<玩家名称>% - 比较请求玩家当前与过去延迟的差异
%cleanping_difference_<玩家名称1>_<玩家名称2>%
```

### [Declares-Advanced-Jobs](https://www.curseforge.com/hytale/mods/declares-advanced-jobs)

::: info 内置
:::

``` txt
%jobs_current_job%
%jobs_level_<职业>%
%jobs_xp_<职业>%
%jobs_income_<职业>%
```

### [EconomyAPI](https://www.curseforge.com/hytale/mods/economyapi)

::: info 内置
:::

``` txt
%economyapi_balance%
%economyapi_formatted_balance%
%economyapi_formatted_balance_short%
%economyapi_prefix%
%economyapi_starting_balance%
%economyapi_provider%
%economyapi_cache_username%
%economyapi_server_total%
%economyapi_server_average%
%economyapi_server_highest%
%economyapi_server_accounts%
%economyapi_bridge_mode%
%economyapi_storage_type%
%economyapi_config_mobkill_min%
%economyapi_config_mobkill_max%
%economyapi_config_playerkill_min%
%economyapi_config_playerkill_max%
```

### [Ecotale](https://www.curseforge.com/hytale/mods/ecotale)

::: info 内置
:::

``` txt
%ecotale_balance%
%ecotale_balance_formatted%
%ecotale_balance_short%
%ecotale_balance_commas%
%ecotale_balance_<排名>dp%
%ecotale_profit%
%ecotale_profit_ratio%
%ecotale_session_change%
%ecotale_last_activity%
%ecotale_rank%
%ecotale_rank_suffix%
%ecotale_rank_percentile%
%ecotale_gap_to_first%
%ecotale_gap_to_next%
%ecotale_ahead_of%
%ecotale_server_total%
%ecotale_server_average%
%ecotale_server_median%
%ecotale_server_players%
%ecotale_trend_session%
%ecotale_trend_session_percent%
%ecotale_trend_arrow%
%ecotale_trend_label%
%ecotale_currency_symbol%
%ecotale_currency_name%
%ecotale_top_name_<排名>%
%ecotale_balance_<排名>%
```

### [EliteEssentials](https://www.curseforge.com/hytale/mods/eliteessentials)

::: info 内置
:::

``` txt
%eliteessentials_economy_enabled%
%eliteessentials_using_external_economy%
%eliteessentials_currency_name%
%eliteessentials_currency_name_plural%
%eliteessentials_currency_symbol%
%eliteessentials_balance%
%eliteessentials_god%
%eliteessentials_vanished%
%eliteessentials_homes_num%
%eliteessentials_homes_max%
%eliteessentials_homes_names%
%eliteessentials_all_kits_num%
%eliteessentials_all_kits_names%
%eliteessentials_allowed_kits_num%
%eliteessentials_allowed_kits_names%
%eliteessentials_all_warps_num%
%eliteessentials_all_warps_names%
%eliteessentials_allowed_warps_num%
%eliteessentials_allowed_warps_names%
%eliteessentials_home_<玩家名称>_name%
%eliteessentials_home_<玩家名称>_createdat%
%eliteessentials_home_<玩家名称>_coords%
%eliteessentials_home_<玩家名称>_x%
%eliteessentials_home_<玩家名称>_y%
%eliteessentials_home_<玩家名称>_z%
%eliteessentials_home_<玩家名称>_yaw%
%eliteessentials_home_<玩家名称>_pitch%
%eliteessentials_home_<玩家名称>_world%
%eliteessentials_kit_<礼包 ID>_name%
%eliteessentials_kit_<礼包 ID>_id%
%eliteessentials_kit_<礼包 ID>_description%
%eliteessentials_kit_<礼包 ID>_icon%
%eliteessentials_kit_<礼包 ID>_cooldown%
%eliteessentials_kit_<礼包 ID>_remainingcooldown%
%eliteessentials_kit_<礼包 ID>_items%
%eliteessentials_warp_<玩家名称>_name%
%eliteessentials_warp_<玩家名称>_description%
%eliteessentials_warp_<玩家名称>_permission%
%eliteessentials_warp_<玩家名称>_createdat%
%eliteessentials_warp_<玩家名称>_createdby%
%eliteessentials_warp_<玩家名称>_coords%
%eliteessentials_warp_<玩家名称>_x%
%eliteessentials_warp_<玩家名称>_y%
%eliteessentials_warp_<玩家名称>_z%
%eliteessentials_warp_<玩家名称>_yaw%
%eliteessentials_warp_<玩家名称>_pitch%
%eliteessentials_warp_<玩家名称>_world%
```

### [EssentialsCore](https://www.curseforge.com/hytale/mods/essentials-core)

::: info 内置
:::

::: warning [拒绝合并 PR](https://github.com/nhulston/Essentials/pull/14)
:::

``` txt
%essentials_max_homes%                    最大家数量                                               
%essentials_homes_num%                    目前拥有的家数量                                         
%essentials_homes_names%                  家的名称（以英文逗号“,”分隔）                          
%essentials_all_kits_num%                 服务器所有礼包的数量                            
%essentials_all_kits_names%               服务器所有礼包的名称（以英文逗号“,”分隔）            
%essentials_allowed_kits_num%             玩家可获取的礼包数量                   
%essentials_allowed_kits_names%           玩家可获取的礼包名称（以英文逗号“,”分隔）   
%essentials_all_warps_num%                服务器所有地标的数量                           
%essentials_all_warps_names%              服务器所有地标的名称（以英文逗号“,”分隔）           
%essentials_<地标/家>_<名称>_world%   指定地标/家所在世界的名称                    
%essentials_<地标/家>_<名称>_coords%  指定地标/家所在世界的坐标（x、y、z）                
%essentials_<地标/家>_<名称>_x%       指定地标/家所在世界的 X 坐标
%essentials_<地标/家>_<名称>_y%       指定地标/家所在世界的 Y 坐标
%essentials_<地标/家>_<名称>_z%       指定地标/家所在世界的 Z 坐标                         
%essentials_<地标/家>_<名称>_yaw%     指定地标/家所在世界的旋转角
%essentials_<地标/家>_<名称>_pitch%   指定地标/家所在世界的俯仰角                           
%essentials_warp_<名称>_allowed%         玩家是否可以传送到指定地标                        
%essentials_home_<名称>_createdat%       指定家的创建日期                    
%essentials_kit_<名称>_name%             礼包的展示名称                                   
%essentials_kit_<名称>_id%               礼包的 ID                                             
%essentials_kit_<名称>_type%             礼包的类型                                           
%essentials_kit_<名称>_cooldown%         礼包的冷却                                       
%essentials_kit_<名称>_isreplacemode%    礼包是否开启了替换模式           
%essentials_kit_<名称>_itemsnum%         礼包包含的物品数量                                
%essentials_kit_<名称>_allowed%          玩家是否可以领取此礼包
```

### [EssentialsPlus](https://www.curseforge.com/hytale/mods/essentials-plus)

::: tip 提示
:::

``` txt
%essentialsplus_player_balance%
%essentialsplus_player_balance_formatted%
%essentialsplus_player_first_join%
%essentialsplus_player_last_join%
%essentialsplus_player_playtime%
%essentialsplus_player_session_time%
%essentialsplus_player_homes_count%
%essentialsplus_player_homes_max%
%essentialsplus_player_homes_<序号>%
%essentialsplus_player_homes_<序号>_world%
%essentialsplus_player_homes_<序号>_x%
%essentialsplus_player_homes_<序号>_y%
%essentialsplus_player_homes_<序号>_z%
%essentialsplus_player_is_muted%
%essentialsplus_player_is_frozen%
%essentialsplus_player_is_vanished%
%essentialsplus_player_is_flying%
%essentialsplus_server_homes_total%
%essentialsplus_server_warps_total%
%essentialsplus_server_kits_total%
%essentialsplus_server_players_total%
```

### [FlectonePulse](https://www.curseforge.com/hytale/mods/flectonepulse)

::: info 内置
:::

``` txt
%flectonepulse_advancement%                 若启用显示，则返回 true，否则返回空
%flectonepulse_afk%                         若启用显示，则返回 true，否则返回空
%flectonepulse_afk_suffix%                  返回挂机后缀
%flectonepulse_auto%                        若启用显示，则返回 true，否则返回空
%flectonepulse_chat_name%                   返回选定聊天类型，默认为 default
%flectonepulse_death%                       若启用显示，则返回 true，否则返回空
%flectonepulse_discord%                     若启用显示，则返回 true，否则返回空
%flectonepulse_fcolor_number%               返回玩家的自定义颜色
%flectonepulse_fcolor_out_number%           返回玩家的自定义外部颜色
%flectonepulse_fcolor_see_number%           返回玩家的自定义可见颜色
%flectonepulse_greeting%                    若启用显示，则返回 true，否则返回空
%flectonepulse_ip%                          返回玩家的 IP 地址
%flectonepulse_join%                        若启用显示，则返回 true，否则返回空
%flectonepulse_locale%                      返回玩家的当前语言
%flectonepulse_online%                      返回服务器上玩家的数量
%flectonepulse_ping%                        返回玩家的延迟
%flectonepulse_player%                      返回玩家的游戏名称
%flectonepulse_quit%                        若启用显示，则返回 true，否则返回空
%flectonepulse_stream_prefix%               返回玩家的直播前缀
%flectonepulse_spy_status                   若启用窃听模式，则返回 true，否则返回空
%flectonepulse_telegram%                    若启用显示，则返回 true，否则返回空
%flectonepulse_tps%                         返回服务器 TPS
%flectonepulse_twitch%                      若启用显示，则返回 true，否则返回空
%flectonepulse_world_prefix%                返回玩家的世界前缀
%flectonepulse_mute_suffix%                 返回玩家的禁言前缀
%flectonepulse_command_ball%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_ban%                 若启用显示，则返回 true，否则返回空
%flectonepulse_command_broadcast%           若启用显示，则返回 true，否则返回空
%flectonepulse_command_coin%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_dice%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_do%                  若启用显示，则返回 true，否则返回空
%flectonepulse_command_kick%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_mail%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_me%                  若启用显示，则返回 true，否则返回空
%flectonepulse_command_mute%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_poll%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_reply%               若启用显示，则返回 true，否则返回空
%flectonepulse_command_rockpaperscissors%   若启用显示，则返回 true，否则返回空
%flectonepulse_command_spy%                 若启用显示，则返回 true，否则返回空
%flectonepulse_command_stream%              若启用显示，则返回 true，否则返回空
%flectonepulse_command_tell%                若启用显示，则返回 true，否则返回空
%flectonepulse_command_tictactoe%           若启用显示，则返回 true，否则返回空
%flectonepulse_command_translateto%         若启用显示，则返回 true，否则返回空
%flectonepulse_command_try%                 若启用显示，则返回 true，否则返回空
%flectonepulse_command_warn%                若启用显示，则返回 true，否则返回空
```

### [Guilds](https://www.curseforge.com/hytale/mods/guilds)

::: info 内置
:::

``` txt
%guild_name%
%guild_tag%
%guild_rank%
%guild_leader%
%guild_member_count%
%guild_online_count%
%guild_claims%
%guild_lots%
%guild_bank_balance%
%guild_provider%
%guild_preferred_economy%
```

### [HyFactions](https://www.curseforge.com/hytale/mods/hyfactions)

::: tip papi ecloud download HyFactions
:::

关系变量：

``` txt
%rel_factions_relation% - 关系类型（盟友、敌人等）
%rel_factions_relation_color% - 绿、白、红
```

一般变量：

``` txt
%factions_player_has_faction% - 返回 yes/no
%factions_player_faction% - 派系名称
%factions_player_faction_id% - 派系 uuid
%factions_player_faction_rank% - 派系等级
%factions_player_power% - 玩家战力等级
%factions_party_color% - 队伍颜色（数字）
%factions_party_name% - 队伍名称
%factions_party_id% - 队伍 id
%factions_party_description% - 队伍描述
%factions_party_created% - 队伍创建日期
%factions_party_max_claims% - 队伍最大占地数量
%factions_party_claims% - 队伍占地数量
%factions_party_members% - 队伍成员列表
%factions_party_owner_id% - 队伍领袖的 uuid
%factions_party_owner_name% - 队伍领袖的名称
%factions_faction_home_dimension% - 派系据点所在维度
%factions_faction_home_x% - 派系据点所在位置的 x 坐标（双精度浮点数）
%factions_faction_home_y% - 派系据点所在位置的 y 坐标（双精度浮点数）
%factions_faction_home_z% - 派系据点所在位置的 z 坐标（双精度浮点数）
%factions_faction_home_coords% - 派系据点所在位置的 x y z 坐标
%factions_faction_home_yaw% - 派系据点所在位置的旋转角
%factions_faction_home_pitch% - 派系据点所在位置的俯仰角
%factions_faction_color% - 派系的颜色
%factions_faction_description% - 派系介绍
%factions_faction_max_claims% - 派系占地上线
%factions_faction_owner_id% - 派系领袖的 uuid
%factions_faction_owner_name% - 派系领袖的名称
%factions_faction_created% - 派系创建日期
%factions_faction_members% - 派系成员数量
%factions_faction_relations% - 与其他派系的关系
%factions_faction_allies% - 盟友数量
%factions_faction_neutrals% - 中立数量
%factions_faction_enemies% - 敌人数量
%factions_faction_claims% - 派系占地数量
%factions_faction_total_power% - 派系总战力等级
```

### [HyVotifier](https://www.curseforge.com/hytale/mods/hytale-votifier)

::: tip papi ecloud download HyVotifier
:::

``` txt
%hyvotifier_offline_votes%
%hyvotifier_has_offline_votes%
%hyvotifier_offline_votes_enabled%
%hyvotifier_offline_votes_maxclaims%
%hyvotifier_offline_votes_maxlifetimehrs%
%hyvotifier_milestones_enabled%
%hyvotifier_milestone_votecount%
%hyvotifier_next_milestone%
%hyvotifier_leaderboard_votes%
%hyvotifier_leaderboard_position%
%hyvotifier_leaderboard_top_<排名>_name%（请将 <排名> 替换为任意正整数，例如 1、2、3...）
%hyvotifier_leaderboard_top_<排名>_votes%（请将 <排名> 替换为任意正整数，例如 1、2、3...）
```

### [HyperPerms](https://www.curseforge.com/hytale/mods/hyperperms)

::: info 内置
:::

``` txt
%hyperperms_prefix%
%hyperperms_suffix%
%hyperperms_group%
%hyperperms_group_display%
%hyperperms_groups%
%hyperperms_group_count%
%hyperperms_weight%
%hyperperms_has_<权限>%
%hyperperms_in_group_<权限组名称>%
```

### HyperFactions

::: info 内置
:::

关系变量：

``` txt
即将到来
```

一般变量：

``` txt
玩家派系：
   %factions_has_faction% - 玩家是否有派系（返回 yes/no）
   %factions_name% - 派系名称
   %factions_faction_id% - 派系 UUID
   %factions_tag% - 派系标签（简称）
   %factions_display% - 根据 tagDisplay 配置返回标签或名称
   %factions_color% - 派系颜色代码
   %factions_role% - 玩家职位（领袖/管事/成员）
   %factions_description% - 派系描述
   %factions_leader% - 派系领袖名称
   %factions_leader_id% - 派系领袖 UUID
   %factions_open% - 派系的开放状态（返回 true/false）
   %factions_created% - 派系创建日期（年-月-日）

战力：
   %factions_power% - 玩家当前战力
   %factions_maxpower% - 玩家战力上限
   %factions_power_percent% - 玩家战力百分比
   %factions_faction_power% - 派系总战力
   %factions_faction_maxpower% - 派系战力上限
   %factions_faction_power_percent% - 派系战力百分比
   %factions_raidable% - 派系是否可劫掠（返回 true/false）

领土：
   %factions_land% - 占领区块总数
   %factions_land_max% - 最大占领区块总数
   %factions_territory% - 派系当前占领区块数量
   %factions_territory_type% - 当前位置的区域类型

派系据点：
   %factions_home_world% - 派系据点所在的世界
   %factions_home_x% - 派系据点所在的 X 坐标（双精度浮点数）
   %factions_home_y% - 派系据点所在的 Y 坐标（双精度浮点数）
   %factions_home_z% - 派系据点所在的 Z 坐标（双精度浮点数）
   %factions_home_coords% - 派系据点所在的 X、Y、Z 坐标（双精度浮点数）
   %factions_home_yaw% - 派系据点所在的旋转角（双精度浮点数）
   %factions_home_pitch% - 派系据点所在的俯仰角（双精度浮点数）

成员与关系：
   %factions_members% - 成员总数
   %factions_members_online% - 在线成员总数
   %factions_allies% - 盟友派系总数
   %factions_enemies% - 敌方派系总数
   %factions_neutrals% - 中立派系总数
   %factions_relations% - 有关系的派系总数
```

### [JHS-Votifier](https://www.curseforge.com/hytale/mods/jhs-votifier)

::: info 内置
:::

``` txt
%votifier_party_current%
%votifier_party_required%
%votifier_party_remaining%
%votifier_party_total%
%votifier_player_votes%
%votifier_player_streak%
%votifier_player_longest_streak%
%votifier_player_rank%
```

### [LevelingCore](https://www.curseforge.com/hytale/mods/levelingcore)

::: info 内置
:::

``` txt
%levelingcore_level%
%levelingcore_xp%
%levelingcore_xp_to_level%
%levelingcore_ability_points%
%levelingcore_available_ability_points%
%levelingcore_str%
%levelingcore_agi%
%levelingcore_per%
%levelingcore_vit%
%levelingcore_int%
%levelingcore_con%
```

### [LuckPerms](https://www.curseforge.com/hytale/mods/luckperms)

::: tip papi ecloud download LuckPerms

``` txt
%luckperms_prefix%
%luckperms_suffix%
%luckperms_meta_<键值>%
%luckperms_prefix_element_<元素>%
%luckperms_suffix_element_<元素>%
%luckperms_context_<情境键值>%
%luckperms_groups%
%luckperms_primary_group_name%
%luckperms_has_permission_<权限>%
%luckperms_inherits_permission_<权限>%
%luckperms_check_permission_<权限>%
%luckperms_in_group_<权限组>%
%luckperms_inherits_group_<权限组>%
%luckperms_on_track_<路线>%
%luckperms_has_groups_on_track_<路线>%
%luckperms_highest_group_by_weight%
%luckperms_lowest_group_by_weight%
%luckperms_first_group_on_tracks_<路线>%
%luckperms_last_group_on_tracks_<路线>%
%luckperms_expiry_time_<权限>%
%luckperms_inherited_expiry_time_<权限>%
%luckperms_group_expiry_time_<权限组>%
```

### [MMOSkillTree](https://www.curseforge.com/hytale/mods/mmo-skill-tree)

::: tip papi ecloud download MMOSkillTree
:::

``` txt
%mmoskilltree_has_skill_data%
%mmoskilltree_all_xp%
%mmoskilltree_all_levels%
%mmoskilltree_total_xp%
%mmoskilltree_total_level%
%mmoskilltree_calculate_level_from_xp_<经验>%
%mmoskilltree_get_xp_for_level_<等级>%
%mmoskilltree_level_progress_<技能>%
%mmoskilltree_xp_<技能>%
%mmoskilltree_level_<技能>%
```

### [MysticNametags](https://www.curseforge.com/hytale/mods/mysticnametags)

::: info 内置
:::

``` txt
%mystictags_tag%
%mystictags_tag_plain%
%mystictags_full%
%mystictags_full_plain%
```

### [PrekoytesPowerlevels](https://www.curseforge.com/hytale/mods/prekoytes-powerlevels)

::: info 内置
:::

``` txt
%powerlevel_power% - 力量整数值。
%powerlevel_powerdecimal% - 力量一位小数值。
%powerlevel_best% - 个人最佳成绩。
%powerlevel_color% - 从 colors.json 读取的颜色。
%powerlevel_rank% - 从 colors.json 读取的等级。
```

### [Rankup System](https://www.curseforge.com/hytale/mods/rankup-system)

::: info 内置
:::

``` txt
%rankup_rank%
%rankup_next_rank%
%rankup_cost%
```

### [RPGLeveling](https://www.curseforge.com/hytale/mods/rpg-leveling-and-stats)

::: tip papi ecloud download RPGLeveling
:::

``` txt
%rpglevelling_xp%
%rpglevelling_level%
%rpglevelling_is_max%
%rpglevelling_maxlevel%
%rpglevelling_xpnextlevel%
```

### [SimpleClaims](https://www.curseforge.com/hytale/mods/simple-claims)

::: info 内置
:::

``` txt
%simpleclaims_parties_total%
%simpleclaims_can_place_blocks%
%simpleclaims_can_interact_blocks%
%simpleclaims_can_break_blocks%
%simpleclaims_can_interact_chest%
%simpleclaims_can_interact_bench%
%simpleclaims_can_interact_chair%
%simpleclaims_can_interact_door%
%simpleclaims_can_interact_portal%
%simpleclaims_can_enter%
%simpleclaims_can_friendly_fire%
%simpleclaims_can_pvp%
%simpleclaims_party_name%
%simpleclaims_party_description%
%simpleclaims_party_id%
%simpleclaims_party_size%
%simpleclaims_party_color%
%simpleclaims_party_created%
%simpleclaims_party_maxclaims%
%simpleclaims_party_modified%
%simpleclaims_party_owner_uuid%
%simpleclaims_party_owner_name%
%simpleclaims_party_can_place_blocks%
%simpleclaims_party_can_interact_blocks%
%simpleclaims_party_can_break_blocks%
%simpleclaims_party_can_interact_chest%
%simpleclaims_party_can_interact_bench%
%simpleclaims_party_can_interact_chair%
%simpleclaims_party_can_interact_door%
%simpleclaims_party_can_interact_portal%
%simpleclaims_party_can_enter%
%simpleclaims_party_can_friendly_fire%
%simpleclaims_party_can_pvp%
%simpleclaims_party_allies_total%
%simpleclaims_party_allies_uuids%
%simpleclaims_party_allies_names%
%simpleclaims_party_claims%
%simpleclaims_party_partyallied_<队伍 ID>%
%simpleclaims_party_playerallied_<玩家名称>%
```

### [TaleFly](https://builtbybit.com/resources/talefly.91201/)

::: info 内置
:::

``` txt
%talefly_time%
%talefly_time_formatted%
%talefly_status%
%talefly_status_formatted%
%talefly_balance%
%talefly_cost%
%talefly_speed%
```

### [Topper](https://www.curseforge.com/hytale/mods/topper)

有关此变量拓展的更多信息可以在 [Topper 的维基](https://topper-mc.github.io/Wiki/topper/hook/placeholderapi/)中浏览。

``` txt
%topper_<查询内容>%
```

### [VaultUnlocked](https://www.curseforge.com/hytale/mods/vaultunlocked)

::: tip papi ecloud download VaultUnlocked
:::

``` txt
%vault_eco_balance%
%vault_eco_balance_<数字>dp%
%vault_eco_balance_fixed%
%vault_eco_balance_formatted%
%vault_eco_balance_commas%
%vault_group%
%vault_group_capital%
%vault_groups%
%vault_groups_capital%
%vault_prefix%
%vault_suffix%
%vault_groupprefix%
%vault_groupprefix_<位置>%
%vault_groupsuffix%
%vault_groupsuffix_<位置>%
%vault_hasgroup_<组别>%
%vault_inprimarygroup_<组别>%
```

### [Werchat](https://www.curseforge.com/hytale/mods/werchat)

::: info 内置
:::

``` txt
%werchat_channels_total%             频道总数
%werchat_channels%                   频道名称列表，按逗号分隔
%werchat_default_channel%            默认频道名称
%werchat_selected_channel%           玩家所选频道名称（推荐）
%werchat_selected_channel_<键>%      玩家所选频道字段/值（优先选择键指定的类型）
%werchat_channel%                    玩家所选频道名称（旧别称）
%werchat_channel_<选择器>%           选择器指定的频道（返回频道名称）
%werchat_channel_<选择器>_<键>%      选择器 + 键指定的频道（初级键形式）
%werchat_channel_<选择器>__<键>%     边缘情况键选择器格式，有一个多余的下划线
%werchat_ignored_players_total%      屏蔽玩家的数量
%werchat_ignored_players%            屏蔽玩家的列表，按逗号分隔
%werchat_known_name%                 玩家实际账号名称
%werchat_display_colour%             玩家显示名称颜色
%werchat_display_color%              玩家显示名称颜色（英文颜色名称）
%werchat_msg_color%                  玩家消息颜色
%werchat_msg_gradient%               玩家名称渐变色，格式为`#起始颜色,#终止颜色`（未设置时返回空）
%werchat_msg_gradient_end%           玩家消息渐变终止颜色
%werchat_nick_color%`                玩家昵称颜色
%werchat_nick_gradient_end%`         玩家昵称渐变与颜色
%werchat_nick%`                      仅自定义昵称（未设置时返回空）
%werchat_display_name%`              最终聊天名称（若设置昵称则返回昵称，否则返回玩家名称）
```

### [WiFlowAPI](https://www.curseforge.com/hytale/mods/wiflows-placeholderapi)

::: tip papi ecloud download WiFlowAPI
:::

允许你使用 WiFlow API 的变量，完整变量列表[见此](https://docs.wiflow.dev/hytale-plugins/wiflow-placeholderapi/expansions)。

``` txt
%wiflowapi_{变量}%
```