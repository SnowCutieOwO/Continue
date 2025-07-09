# 岛屿变量

::: info

这些变量会显示玩家拥有的岛屿相关信息。

若要显示玩家**所处**岛屿的相关信息，请在其中加入“location”，如：`superior_island_location_<变量>`

:::

::: info

以下变量均需要加上 `%%` 或 `{}` 才可使用。

若你正在使用的是 Placeholder，请使用前者，如：

`%superior_island_total_worth%`

若你正在使用的是 MVdWPlaceholder，请使用后者，如：

`{superior_island_total_worth}`

:::

|变量名称|描述|示例输出|
|---|---|---|
|`superior_island_bank`|返回岛屿存款数。|`1,900,000`|
|`superior_island_bank_format`|按格式返回岛屿存款数。|`1.9M`|
|`superior_island_bank_raw`|以纯数字返回岛屿存款数。|`1900000`|
|`superior_island_bank_limit`|返回岛屿存款上限。|`1,900,000`|
|`superior_island_bank_format`|按格式返回岛屿存款上限。|`1.9M`|
|`superior_island_bank_raw`|以纯数字返回岛屿存款上限。|`1900000`|
|`superior_island_bank_next_interest`|返回下一波利息发放时间。|`1 时, 55 秒`|
|`superior_island_biome`|返回岛屿的生物群系。|-|
|`superior_island_block_limit_<方块>`|返回岛屿的方块数量限制。|-|
|`superior_island_center`|返回岛屿的中心位置。|`SuperiorWorld, 600, 100, 600`|
|`superior_island_coop_limit`|返回岛屿合作玩家数量上限。|-|
|`superior_island_count_<方块>`|返回岛屿上指定方块的数量。|-|
|`superior_island_creation_time`|返回岛屿的创建时间。|-|
|`superior_island_crops_multiplier`|返回岛屿的作物生长速度倍率。|-|
|`superior_island_discord_all`|返回岛屿的 Discord 链接，无论是否有权限浏览。|-|
|`superior_island_discord`|在玩家有权限浏览时显示岛屿的 Discord 链接。|-|
|`superior_island_drops_multiplier`|返回岛屿的掉落物倍率。|-|
|`superior_island_end_unlocked`|返回岛屿是否解锁末地世界。|-|
|`superior_island_entity_limit_<实体>`|返回岛屿上指定实体的数量限制。|-|
|`superior_island_exists`|返回岛屿是否存在。|-|
|`superior_island_flag_<标志>`|返回岛屿上指定标志的状态。|-|
|`superior_island_hoppers_limit`|返回岛屿上漏斗的数量限制。|-|
|`superior_island_is_coop`|检查玩家是否为岛屿的合作成员。|-|
|`superior_island_is_leader`|检查玩家是否为岛屿拥有者。|-|
|`superior_island_is_member`|检查玩家是否为岛屿成员。|-|
|`superior_island_leader`|返回岛屿拥有者。|-|
|`superior_island_level`|返回岛屿等级。|`1,900,000`|
|`superior_island_level_format`|按格式返回岛屿等级。|`1.9M`|
|`superior_island_level_int`|按 int 格式返回岛屿等级。|`1900000`|
|`superior_island_level_raw`|以纯数字返回岛屿等级。|`1900000`|
|`superior_island_locked`|检查岛屿是否为私有状态。|-|
|`superior_island_member_<位置>`|返回岛屿成员的名称。|-|
|`superior_island_mission_status_<任务名称>`|检查岛屿任务的完成状态。|-|
|`superior_island_missions_completed_<category>`|检查岛屿任务分类的完成状态。|-|
|`superior_island_name`|返回岛屿名称。|-|
|`superior_island_name_leader`|返回岛屿名称。没有名称时返回岛屿拥有者的名称。|-|
|`superior_island_paypal_all`|返回岛屿的 PayPal 链接，无论是否有权限浏览。|-|
|`superior_island_paypal`|在玩家有权限浏览时显示岛屿的 PayPal 链接。|-|
|`superior_island_permission_<权限>`|检查玩家是否在某个岛屿中有指定的权限。|-|
|`superior_island_radius`|返回岛屿半径。|-|
|`superior_island_rating`|返回岛屿评分。|-|
|`superior_island_rating_amount`|返回参与岛屿评分的玩家数。|-|
|`superior_island_rating_stars`|返回岛屿拥有的星星数。|-|
|`superior_island_raw_worth`|返回岛屿无附加奖励状态下的总价值。|`1,900,000`|
|`superior_island_raw_worth_format`|按格式返回岛屿无附加奖励状态下的总价值。|`1.9M`|
|`superior_island_schematic`|返回创建岛屿所用的结构名称。|`normal`|
|`superior_island_size`|返回岛屿大小。|`41 x 41`|
|`superior_island_size_format`|按格式返回岛屿大小。整数四舍五入。|`40 x 40`|
|`superior_island_spawners_multiplier`|返回岛屿的刷怪速率。|-|
|`superior_island_team_limit`|返回岛屿的成员数量限制。|-|
|`superior_island_team_size`|返回岛屿的成员数量。|-|
|`superior_island_team_size_online`|返回岛屿的在线成员数量。|-|
|`superior_island_top_worth_<名次>`|按总价值排序返回指定名次的岛屿。|-|
|`superior_island_top_level_<名次>`|按总等级排序返回指定名次的岛屿。|-|
|`superior_island_top_rating_<名次>`|按总评分排序返回指定名次的岛屿。|-|
|`superior_island_top_players_<名次>`|按总玩家数排序返回指定名次的岛屿。|-|
|`superior_island_upgrade_<升级名称>`|返回岛屿上指定的升级等级。|-|
|`superior_island_visitor_last_join_<玩家名称>`|返回玩家最后造访岛屿的时间。|-|
|`superior_island_visitors_count`|返回岛屿访客数量。|-|
|`superior_island_warps`|返回岛屿地标传送点数量。|-|
|`superior_island_warps_limit`|返回岛屿地标传送点上限。|-|
|`superior_island_world`|返回岛屿所处世界的名称。|-|
|`superior_island_worth`|返回岛屿的价值。|`1,900,000`|
|`superior_island_worth_format`|按格式返回岛屿的价值。|`1.9M`|
|`superior_island_worth_int`|以 int 格式返回岛屿的价值。|`1900000`|
|`superior_island_worth_raw`|以纯数字格式返回岛屿的价值。|`1900000`|
|`superior_island_x`|获取岛屿的 X 轴坐标。|-|
|`superior_island_y`|获取岛屿的 Y 轴坐标。|-|
|`superior_island_z`|获取岛屿的 Z 轴坐标。|-|