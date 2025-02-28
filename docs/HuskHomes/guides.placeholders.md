# 变量集群
若你安装了 PlaceholderAPI，HuskHomes（4.0.5 或更高版本）将会自动注册一系列变量，这些变量会返回格各自的特定值。

## 变量列表

|变量名称|描述|示例返回值|
|---|---|---|
|`%huskhomes_homes_count%`|返回玩家设置的家传送点数量。|3|
|`%huskhomes_max_homes%`|返回玩家可设置的家传送点最大数量。|10|
|`%huskhomes_max_public_homes%`|返回玩家可设置的公开家传送点数量。|5|
|`%huskhomes_free_home_slot%`|返回玩家可免费设家的数量†。|5|
|`%huskhomes_home_slots%`|返回该玩家购买的设家槽位数量†。|2|
|`%huskhomes_homes_list%`|返回该玩家设置的家传送点名称，以英文逗号分隔。|home, castle, tower|
|`%huskhomes_public_homes_count%`|返回该玩家开放家传送点的数量|3|
|`%huskhomes_public_homes_list%`|返回该玩家开放家传送点的名称，以英文逗号分隔。|castle, tower|
|`%huskhomes_ignoring_tp_requests%`|返回该玩家是否设置了无视传送请求。|true|

† 仅在启用了[经济联动](features.economy-hook.md)的服务器上有效。