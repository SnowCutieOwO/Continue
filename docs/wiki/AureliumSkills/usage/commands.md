# 命令列表  
插件的命令列表。  
  
命令格式：`[]` 为必选参数，`()` 为可选参数。若要查询权限列表，请见权限章节。  
  
## 技能命令  
等价用法：`/sk`、`/skills`、`/skill`。任何 /sk 开头的命令均可被上述等价用法代替。  
`/sk` - 打开技能菜单  
  
## 经验命令  
`/sk xp add [玩家名称] [技能名称] [经验数量] (是否静默)` - 将特定数量的技能经验给予玩家。  
`/sk xp set [玩家名称] [技能名称] [经验数量] (是否静默)` - 将玩家特定技能的经验设置为指定值。  
`/sk xp remove [玩家名称] [技能名称] [经验数量] (是否静默)` - 减少玩家指定技能的经验值数量。  
  
## 排行榜命令 
`/sk top (页码)`  
`/sk top [技能名称] (页码)` - 显示指定技能的排行榜（等价用法：`/skilltop`）  
`/sk top average (页码)`  
`/sk rank` - 显示你的技能排行（等价用法：`/skillrank`）  
  
## 技能命令  
`/sk skill setlevel [玩家名称] [技能名称] [技能等级]` - 将玩家的指定技能设置为特定等级。  
`/sk skill setall [玩家名称] [技能名称]` - 将玩家的所有技能设置为指定等级。  
`/sk skill reset [玩家名称] (技能名称)` - 重置玩家的所有技能等级为 1。不填名称则默认重置所有技能。  
  
## 翻倍命令 
`/sk modifier add [玩家名称] [属性名称] [翻倍命名] [翻倍比率] (是否静默) (是否叠加)` - 向玩家添加特定的属性翻倍。将“是否静默”设置为 true 会使玩家不收到命令回显，设置“是否叠加”为 true 会使已存在的名称相同的翻倍倍率叠加。  
`/sk modifier remove [玩家名称] [翻倍命名] (是否静默)` - 将玩家的特定翻倍删除。  
`/sk modifier list (玩家名称) (属性名称)` - 列出玩家指定属性的翻倍。  
`/sk modifier removeall (玩家名称) (属性名称) (是否静默)` - 将玩家所有的翻倍移除。  
`/sk item modifier add [属性名称] [翻倍比率] (是否显示 Lore)` - 向手持物品添加翻倍，默认显示 Lore。  
`/sk item modifier remove [属性名称] (是否移除 Lore)` - 移除手持物品上的指定翻倍，默认连同 Lore 移除。  
`/sk item modifier list` - 列出手上物品的所有翻倍。  
`/sk item modifier removeall` - 移除手上物品的所有翻倍。  
`/sk armor modifier add [属性名称] [翻倍比率] (是否显示 Lore)` - 向手持物品添加装备翻倍，默认显示 Lore。  
`/sk armor modifier remove [属性名称] (是否移除 Lore)` - 移除手持物品上的指定装备翻倍，默认连同 Lore 移除。  
`/sk armor modifier list` - 列出手上物品的所有装备翻倍。  
`/sk armor modifier removeall` - 移除手上物品的所有装备翻倍。  
## 条件命令  
`/sk item requirement add [技能名称] [技能等级] (是否添加 Lore)` - 向手持物品添加物品条件，默认连同 Lore 添加。  
`/sk item requirement remove [技能名称] (是否移除 Lore)` - 移除手持物品上的指定技能等级限制，默认连同 Lore 移除。  
`/sk item requirement list` - 查询手上物品的条件。  
`/sk item requirement removeall` - 移除手上物品所有的物品条件。  
`/sk armor requirement add [技能名称] [技能等级] (是否添加 Lore)` - 向手持物品添加装备条件，默认连同 Lore 添加。  
`/sk armor requirement remove [技能名称] (是否移除 Lore)` - 移除手持物品上的指定技能等级限制，默认连同 Lore 移除。  
`/sk armor requirement list` - 查询手上物品的装备条件。  
`/sk armor requirement removeall` - 移除手上所有的装备条件。  
## 杂项命令  
`/sk lang [语言名称]` - 切换插件对客户端的显示语言。  
`/sk multiplier (玩家名称)` - 显示玩家通过权限获得的翻倍名称。  
`/sk abtoggle` - 切换自身 ActionBar 可见性。  
`/sk help` - 显示帮助页面。  
  
## 玩家数据命令
`/sk profile skills [玩家名称]` - 查看其他玩家的技能等级。“玩家名称”为你所要查询的玩家名称。被查询玩家不必在线。  
`/sk profile stats [玩家名称]` - 查询其他玩家的属性等级。  
  
## 管理员命令  
`/sk save` - 保存全服的技能数据。  
`/sk updateleaderboards` - 刷新排行榜数据。  
`/sk reload` - 重载配置文本、消息文本、菜单、掉落表、所有 ActionBar、所有 BossBar、生命和幸运值属性。  
`/sk transfer [被操作玩家] [目标玩家]` - 将玩家的数据复制到其他玩家上。“被操作玩家”和“目标玩家”都需要为有效的 UUID 值。该操作不可逆。进行数据转移的双方玩家不必在线。  
`/sk resethealth` - 移除指定玩家的所有生命与幸运属性。若你打算卸载本插件，那么这个命令将会很有用。该命令仅能通过控制台执行，且执行命令时不应有玩家在线，以使其正常运作。  
## 备份命令
`/backup save` - 保存一份当前的技能数据并存至本插件的备份文件夹。  
`/backup load [文件名称]` - 从备份文件夹的指定名称载入备份。你必须指定实际的备份名称，包括文件后缀名。这会覆盖当前的所有技能数据，所以建议在导入新数据之前做好备份。  
## 魔法命令 
`/mana (玩家名称)` - 查询指定玩家或自身的魔力剩余。  
`/mana add [玩家名称] [数量] (允许超过上限) (是否静默)` - 向玩家添加魔力。  
`/mana remove [玩家名称] [数量] (是否静默)` - 扣除指定玩家的魔力点数，不允许为负数，若出现此情况时多余的部分会被忽视，即当前魔力值会被扣减为 0。  
`/mana set [玩家名称] [数量] (允许超过上限) (是否静默)` - 将玩家的魔力设定为指定值。  
## 属性命令 
`/stats` - 打开属性菜单。  
## 技能名称命令 
`/[技能名称]` - 打开对应技能的菜单。可以在配置文本中禁用。（例如：/farming、/archery、/healing）  
## 物品注册命令  
`/sk claimitems` - 打开未领物品菜单，以领取尚未领取的物品。  
`/sk item register [ID]` - 将物品注册入本插件的物品系统，使其可在配置文本中引用。  
`/sk item unregister [ID]` - 解除指定物品的注册。  
`/sk item give [玩家名称] [ID] (数量)` - 将指定的注册物品发送给玩家，若玩家没有足够多背包空间，物品将自动进入玩家的未领物品库存。
