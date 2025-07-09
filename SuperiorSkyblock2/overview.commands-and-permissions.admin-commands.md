# 管理员命令

::: info

尖角括号 `<>` 内为必选参数，而方括号 `[]` 内为可选参数。 

:::

## /island admin

列出所有可用的管理员命令。

* 权限：`superior.admin`

## /island admin add \<玩家名称/岛屿名称\> \<目标玩家\>

向岛屿添加玩家。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：被添加玩家的岛屿名称。  
  `目标玩家`：被添加的玩家名称。  
* 权限：`superior.admin.add`

## /island admin addblocklimite \<玩家名称/岛屿名称/*\> \<材料名\> \<限制数\>

对岛屿指定物品的数量限制进行调整。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `材料名`：待修改限制的方块名称。  
  `限制数`：修改后的限制数量。
* 权限：`superior.admin.addblocklimit`

## /island admin addbonus \<玩家名称/岛屿名称/*\> \<worth/level\> \<数量\>

对岛屿上已存在的奖励进行修改。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `worth`：表示对岛屿上的价值进行修改。  
  `level`：表示对岛屿上的等级进行修改。  
  `amount`：添加的奖励数量。
* 权限：`superior.admin.addbonus`

## /island admin addcooplimit \<玩家名称/岛屿名称/*\> \<限制数量\>

对岛屿上已存在的合作玩家限制进行修改。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `限制数量`：添加的限制数量。
* 权限：`superior.admin.addcooplimit`

## /island admin addcropgrowth \<玩家名称/岛屿名称/*\> \<倍率\>

修改岛屿的作物生长速率。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `倍率`：添加的倍率。
* 权限：`superior.admin.addcropgrowth`

## /island admin adddisbands \<玩家名称\> \<数量\>

对玩家添加更多解散。

* 别称：
  `/island admin givedisbands \<玩家名称\> \<数量\>`
* 参数：    
  `玩家名称`：添加解散的玩家名称。  
  `数量`：添加解散的次数。
* 权限：`superior.admin.givedisbands`

## /island admin addentitylimit \<玩家名称/岛屿名称/*\> \<实体名称\> \<限制数量\>

对岛屿添加实体限制。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `实体名称`：进行限制的实体名称。  
  `限制数量`：限制实体的数量。
* 权限：`superior.admin.addentitylimit`

## /island admin addeffect \<玩家名称/岛屿名称/*\> \<效果\> \<等级\>

为岛屿添加效果。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `效果`：添加的效果名称。  
  `等级`：添加的效果等级。

* 权限：`superior.admin.addeffect`

## /island admin addgenerator \<玩家名称/岛屿名称/*\> \<材料\> \<值\> [世界名称]

修改岛屿的刷石机产出。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `材料`：生成的物品名称。  
  `值`：生成物品的几率。  
  `世界名称`：应用该改动的世界名称。  

* 权限：`superior.admin.addgenerator`

## /island admin addmobdrops \<玩家名称/岛屿名称/*\> \<倍率\>

修改岛屿的掉落倍率。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `倍率`：添加的倍率。

* 权限：`superior.admin.addmobdrops`

## /island admin addsize \<玩家名称/岛屿名称\> \<大小\>

修改岛屿的边界大小。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `大小`：增加边界的数量。

* 权限：`superior.admin.addsize`

## /island admin addspawnerrates \<玩家名称/岛屿名称/*\> \<倍率\>

修改岛屿的刷怪速率。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `倍率`：添加的倍率。
* 权限：`superior.admin.addspawnerrates`

## /island admin addteamlimit \<玩家名称/岛屿名称/*\> \<限制数量\>

修改岛屿的成员数量限制。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `限制数量`：修改后的限制数量。
* 权限：`superior.admin.addteamlimit`

## /island admin addwarpslimit \<玩家名称/岛屿名称/*\> \<限制数量\>

修改岛屿的地标传送点数量限制。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。    
  `限制数量`：修改后的限制数量。
* 权限：`superior.admin.addwarpslimit`

## /island admin bypass

启用绕过模式。

处于绕过模式时可无视岛屿上的所有保护措施。

* 权限：`superior.admin.bypass`

## /island admin chest \<玩家名称/岛屿名称\>

打开指定岛屿的仓库。

* 参数：    
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：仓库对应的岛屿名称。  
* 权限：`superior.admin.chest`

## /island admin cleargenerator \<玩家名称/岛屿名称/*\> [世界名称]

重置岛屿的刷石机产出。

* 别称：
  `/island admin cg \<玩家名称/岛屿名称/*\> [世界名称]`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。  
  `世界名称`：待清除的世界名称。  
* 权限：`superior.admin.cleargenerator`

## /island admin close \<玩家名称/岛屿名称\>

强制关闭岛屿，不对外开放。

* 别称：
  `/is admin lock \<玩家名称/岛屿名称\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.close`

## /island admin cmdall \<玩家名称/岛屿名称/*\> \<online-filter=true/false\> \<命令\>

以岛屿上所有成员的身份执行一次命令。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。  
  `online-filter`：是否只对岛屿上的在线玩家执行。
  `命令`：待执行的命令。
    * 你可以在这里使用 `{player-name}` 内建变量，它会自动替换为玩家名称。  
* 权限：`superior.admin.cmdall`

## /is admin count \<玩家名称/岛屿名称\> [材料名称]

检查岛屿的方块统计数量。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `材料名称`：指定待检查的方块名称。  
* 权限：`superior.admin.count`

## /island admin delwarp \<玩家名称/岛屿名称\> \<地标名称\>

删除指定岛屿的地标。
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `地标名称`：待删除的地标名称。  
* 权限：`superior.admin.delwarp`

## /island admin demote \<玩家名称\>

降级指定的玩家。

* 参数：  
  `玩家名称`：待降级的玩家名称。  
* 权限：`superior.admin.demote`

## /island admin deposit \<玩家名称/岛屿名称/*\> \<数量\>

向指定的岛屿银行存款。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。  
  `数量`：存款数量。
* 权限：`superior.admin.deposit`

## /island admin disband \<玩家名称/岛屿名称\>

解散一个岛屿。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.disband`

## /island admin ignore \<玩家名称/岛屿名称\>

将指定岛屿从排行榜中移出，使其不再参与排行。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.ignore`

## /island admin join \<玩家名称/岛屿名称\>

强制加入指定岛屿。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待加入的岛屿名称。  
* 权限：`superior.admin.join`

## /island admin kick \<玩家名称\>

将指定玩家从岛屿中踢出。

* 参数：  
  `玩家名称`：待踢出的玩家名称。  
* 权限：`superior.admin.kick`

## /island admin mission \<玩家名称\> \<complete/reset\> \<任务名称\>

强制完成或重置指定玩家的岛屿任务。

* 参数：  
  `玩家名称`：待修改的玩家名称。  
  `complete`：表示强制完成任务。
  `reset`：表示强制重置任务。
  `任务名称`：待修改的任务名称。  
* 权限：`superior.admin.mission`

## /island admin modules [模块名称] [load/unload]

管理安装的模块。

* 参数：  
  `模块名称`：待管理的模块名称。  
  `load`：从文件夹中载入该模块。
  `unload`：从服务器中卸载该模块。
* 权限：`superior.admin.modules`

## /island admin msg \<玩家名称\> \<消息\>

不带前缀地向玩家发送消息。

* 参数：  
  `玩家名称`：被发送消息的玩家名称。  
  `消息`：待发送的消息内容。
* 权限：`superior.admin.msg`

## /island admin msgall \<玩家名称/岛屿名称/*\> \<消息\>

不带前缀地向岛屿成员发送消息。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待发送消息的岛屿名称。  
  `*`：表示对服务器上所有岛屿发送消息。
  `消息`：待发送的消息内容。
* 权限：`superior.admin.msgall`

## /island admin name \<玩家名称/岛屿名称\> \<名称\>

为岛屿设置新名称。  

* 别称：
  `/island admin setname \<玩家名称/岛屿名称\> \<名称\>`
  `/island admin rename \<玩家名称/岛屿名称\> \<名称\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `名称`：设置的岛屿名称。  
* 权限：`superior.admin.name`

## /island admin open \<玩家名称/岛屿名称\>

将岛屿对外开放。

* 别称：
  `/island admin unlock \<玩家名称/岛屿名称\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.open`

## /island admin openmenu \<玩家名称\> \<菜单\>

为玩家打开指定菜单。

* 别称：
  `/island admin menu \<玩家名称\> \<菜单\>`
* 参数：  
  `玩家名称`：指定的玩家名称。  
  `菜单`：打开的菜单名称。  
* 权限：`superior.admin.openmenu`

## /island admin promote \<玩家名称\>

升级指定岛屿上的玩家。

* 参数：  
  `玩家名称`：待升级的玩家名称。  
* 权限：`superior.admin.promote`

## /island admin purge \<cancel/时间\>

清除服务器上所有不活跃的岛屿。

* 参数：  
  `cancel`：取消下一次清理。
  `时间`：超过该时间长度的不活跃岛屿会被清理，单位为秒。
* 权限：`superior.admin.purge`

## /island admin rankup \<玩家名称/岛屿名称/*\> \<升级名称\>

升级岛屿的指定内容。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。  
  `升级名称`：升级的指定内容。

* 权限：`superior.admin.rankup`

## /island admin recalc [玩家名称/岛屿名称]

重新计算制定岛屿的价值与等级。

* 别称：
  `/island admin recalculate [玩家名称/岛屿名称]`
  `/island admin level [玩家名称/岛屿名称]`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待重新计算的岛屿名称。  
* 权限：`superior.admin.recalc`

## /island admin reload

重载所有配置文件与语言文件。

* 权限：`superior.admin.reload`

## /island admin removeblocklimit \<玩家名称/岛屿名称/*\> \<材料\>

移除岛屿上指定的方块数量限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对服务器上所有岛屿生效。  
  `材料`：待移除限制的材料名称。  
* 权限：`superior.admin.removeblocklimit`

## /island admin removeratings \<玩家名称/岛屿名称/*\>

移除指定岛屿的所有评分，或移除指定玩家对所有岛屿的评分。

* 别称：
  `/island admin rratings \<玩家名称/岛屿名称/*\>`
  `/island admin rr \<玩家名称/岛屿名称/*\>`
* 参数：  
  `玩家名称`：待移除评价的玩家名称。  
  `岛屿名称`：待移除评价的岛屿名称。  
  `*`：表示移除所有岛屿的评价。
* 权限：`superior.admin.removeratings`

## /island admin resetworld \<玩家名称/岛屿名称/*\> \<世界名称\>

重置指定岛屿的世界。

* 别称：
  `/island admin rworld \<玩家名称/岛屿名称/*\> \<世界名称\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待重置的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `世界名称`：待重置的世界名称。  
    * 应当为 `normal`、`nether` 或 `the_end` 中的其中一个。不可以为默认世界。
* 权限：`superior.admin.resetworld`

## /island admin schematic [结构名称]

切换结构模式。

该模式下可创建新的结构。

* 别称：
  `/island admin schem [结构名称]`
* 参数：  
  `结构名称`：将结构保存为该名称的文件。
* 权限：`superior.admin.schem`

## /island admin setbanklimit \<玩家名称/岛屿名称/*\> \<限制数量\>

设置岛屿的银行存款上限。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `限制数量`：限制的存款量。
* 权限：`superior.admin.setbanklimit`

## /island admin setbiome \<玩家名称/岛屿名称/*\> \<生物群系\>

为岛屿设置生物群系。

* 别称：
  `/island admin biome \<玩家名称/岛屿名称/*\> \<生物群系\>`

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `生物群系`：待设置的生物群系。
* 权限：`superior.admin.setbiome`

## /island admin setblockamount \<世界名称\> \<x\> \<y\> \<z\> \<数量\>

设置堆叠方块的数量。

* 别称：
  `/island admin setblocksize \<世界名称\> \<x\> \<y\> \<z\> \<数量\>`
* 参数：  
  `世界名称`：堆叠方块所在的世界。  
  `x`：堆叠方块所在的 X 轴坐标。  
  `y`：堆叠方块所在的 Y 轴坐标。  
  `z`：堆叠方块所在的 Z 轴坐标。  
  `数量`：所要设置的堆叠方块的数量。
* 权限：`superior.admin.setblockamount`

## /island admin setblocklimit \<玩家名称/岛屿名称/*\> \<材料\> \<限制数量\>

为指定岛屿设置方块数量限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `材料`：设置的方块名称。  
  `限制数量`：修改的限制数量。
* 权限：`superior.admin.setblocklimit`

## /island admin setbonus \<玩家名称/岛屿名称/*\> \<worth/level\> \<奖励\>

为岛屿设置奖励。

* 别称：
  `/island admin bonus \<玩家名称/岛屿名称/*\> \<worth/level\> \<奖励\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `worth`：表示为岛屿价值设置奖励。
  `level`：表示为岛屿等级设置奖励。
  `奖励`：设置的奖励内容。
* 权限：`superior.admin.setbonus`

## /island admin setchestrow \<玩家名称/岛屿名称/*\> \<页码\> \<行数\>

设置岛屿仓库的箱子页面数。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `页码`：设置行数的对应页码。  
  `行数`：所要设置的行数。
* 权限：`superior.admin.setchestrow`

## /island admin setcooplimit \<玩家名称/岛屿名称/*\> \<限制数量\>

设置岛屿的合作玩家数量限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `限制数量`：所要设置的限制数量。
* 权限：`superior.admin.setcooplimit`

## /island admin setcropgrowth \<玩家名称/岛屿名称/*\> \<倍率\>

设置岛屿上的作物生长速率。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `倍率`：所要设置的倍率。
* 权限：`superior.admin.setcropgrowth`

## /island admin setdisbands \<玩家名称/*\> \<数量\>

设置玩家的解散次数。

* 参数：  
  `玩家名称`：待设置的玩家名称。  
  `*`：表示对所有玩家生效。  
  `数量`：设置的解散次数。
* 权限：`superior.admin.setdisbands`

## /island admin seteffect \<玩家名称/岛屿名称/*\> \<效果\> \<等级\>

修改岛屿的药水效果等级。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `效果`：待设置的效果。  
  `等级`：待设置的等级。
* 权限：`superior.admin.seteffect`

## /island admin setentitylimit \<玩家名称/岛屿名称/*\> \<实体名称\> \<限制数量\>

修改岛屿的实体限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `实体名称`：待设置的实体名称。  
  `限制数量`：待设置的限制数量。
* 权限：`superior.admin.setentitylimit`

## /island admin setgenerator \<玩家名称/岛屿名称/*\> \<材料\> \<值\> [世界名称]

修改岛屿刷石机的产出。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `材料`：待设置的材料名称。  
  `值`：修改的产出率。  
  `世界名称`：应用修改的世界名称。  
* 权限：`superior.admin.setgenerator`

## /island admin setleader \<原拥有者\> \<新拥有者\>

转让岛屿。

* 参数：  
  `原拥有者`：原本的岛屿拥有者。  
  `新拥有者`：新的岛屿拥有者。
* 权限：`superior.admin.setleader`

## /island admin setmobdrops \<玩家名称/岛屿名称/*\> \<倍率\>

修改岛屿的实体掉落物倍率。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `倍率`：所要设置的倍率。
* 权限：`superior.admin.setmobdrops`

## /island admin setpermission \<玩家名称/岛屿名称/*\> \<权限\> \<职位\>

修改岛屿指定职位的权限。

* 别称：
  `/island admin setperm \<玩家名称/岛屿名称/*\> \<权限\> \<职位\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `权限`：修改的权限名称。  
  `职位`：修改的职位名称。  
* 权限：`superior.admin.setpermission`

## /island admin setrate \<玩家名称/岛屿名称\> \<目标\> \<评分\>

修改指定玩家对岛屿的评分。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `目标`：待修改评分的玩家名称。  
  `评分`：修改后的评分。
* 权限：`superior.admin.setrate`

## /island admin setrolelimit \<玩家名称/岛屿名称/*\> \<职位\> \<限制\>

为岛屿职位设置限制
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `职位`：待限制的岛屿职位。  
  `限制`：待设置的限制。
* 权限：`superior.admin.setrolelimit`

## /island admin setsettings \<玩家名称/岛屿名称/*\> \<岛屿标志\> \<true/false\>

修改岛屿的标志。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `岛屿标志`：待设置的岛屿标志。  
  `true`：在该岛屿上启用该标志。  
  `false`：在该岛屿上禁用该标志。 
* 权限：`superior.admin.setsettings`

## /island admin setsize \<玩家名称/岛屿名称/*\> \<大小\>

设置岛屿边界大小。

* 别称：
  `/island admin setislandsize \<玩家名称/岛屿名称/*\> \<大小\>`
  `/island admin setbordersize \<玩家名称/岛屿名称/*\> \<大小\>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `大小`：设置的边界大小。
* 权限：`superior.admin.setsize`

## /island admin setspawn

修改插件的出生位置。

* 权限：`superior.admin.setspawn`

## /island admin setspawnerrates \<玩家名称/岛屿名称/*\> \<倍率\>

修改岛屿的刷怪笼速率。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `倍率`：待设置的倍率。
* 权限：`superior.admin.setspawnerrates`

## /island admin setteamlimit \<玩家名称/岛屿名称/*\> \<限制数量\>

为岛屿设置成员限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `限制数量`：设置的限制数量。
* 权限：`superior.admin.setteamlimit`

## /island admin settings

打开游戏内配置编辑器。

* 权限：`superior.admin.settings`

## /island admin setupgrade \<玩家名称/岛屿名称\> \<升级名称\> \<等级\>

设置岛屿升级的等级。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `升级名称`：待修改的升级名称。  
  `等级`：修改的等级。
* 权限：`superior.admin.setupgrade`

## /island admin setwarpslimit \<玩家名称/岛屿名称/*\> \<限制数量\>

修改岛屿的地标数量限制。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `限制数量`：待设置的限制数量。
* 权限：`superior.admin.setwarpslimit`

## /island admin show \<玩家名称/岛屿名称\>

显示岛屿的相关信息。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.show`

## /island admin spawn [玩家名称]

将玩家传送至出生点。

* 参数：  
  `玩家名称`：待传送的玩家名称。  
* 权限：`superior.admin.spawn`

## /island admin syncupgrades \<玩家名称/岛屿名称/*\>

同步岛屿的翻倍卡与限制，以及升级内容。

会移除任何通过命令为岛屿添加的属性。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  

* 权限：`superior.admin.syncupgrades`

## /island admin spy

切换聊天窃听模式。

窃听模式下可同时查看其他岛屿的聊天。

* 权限：`superior.admin.spy`

## /island admin stats

显示插件相关统计数据。

* 权限：`superior.admin.stats`

## /island admin teleport \<玩家名称/岛屿名称\> [normal/nether/the_end]

传送至指定岛屿。

* 别称：  
  `/island admin tp <玩家名称/岛屿名称> [normal/nether/the_end]`  
  `/island admin go <玩家名称/岛屿名称> [normal/nether/the_end]`  
  `/island admin visit <玩家名称/岛屿名称> [normal/nether/the_end]`  
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待传送的岛屿名称。  
  `normal`：传送至岛屿的主世界。
  `nether`：传送至岛屿的下界世界。  
  `the_end`：传送至岛屿的末地世界。
* 权限：`superior.admin.teleport`

## /island admin title \<玩家名称\> \<淡入时间\> \<持续时间\> \<淡出时间\> -title [消息] -subtitle [消息]

向玩家发送标题消息。

* 参数：  
  `玩家名称`：待发送消息的玩家名称。  
  `淡入时间`：标题消息的淡入时间，单位为刻。  
  `持续时间`：标题消息的持续时间，单位为刻。  
  `淡出时间`：标题消息的淡出时间，单位为刻。  
  `-title 消息`：发送的标题内容。  
  `-subtitle 消息`：发送的副标题内容。
* 权限：`superior.admin.title`

## /island admin titleall \<玩家名称/岛屿名称/*\> \<淡入时间\> \<持续时间\> \<淡出时间\> -title [消息] -subtitle [消息]

对岛屿上的所有成员发送标题。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待发送消息的岛屿名称。  
  `*`：对所有玩家发送标题。  
  `淡入时间`：标题消息的淡入时间，单位为刻。  
  `持续时间`：标题消息的持续时间，单位为刻。  
  `淡出时间`：标题消息的淡出时间，单位为刻。  
  `-title 消息`：发送的标题内容。  
  `-subtitle 消息`：发送的副标题内容。
* 权限：`superior.admin.titleall`

## /island admin unignore \<玩家名称/岛屿名称\>

将岛屿设置为重新参与排行。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
* 权限：`superior.admin.unignore`

## /island admin unlockworld \<玩家名称/岛屿名称/*\> \<normal/nether/the_end\> \<true/false\>

为指定岛屿解锁世界。

* 别称：  
  `/island admin world <玩家名称/岛屿名称/*> <normal/nether/the_end> <true/false>`  
  `/island admin uworld <玩家名称/岛屿名称/*> <normal/nether/the_end> <true/false>`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `*`：表示对所有岛屿生效。  
  `normal`：为岛屿解锁主世界。
  `nether`：为岛屿解锁下界。  
  `the_end`：为岛屿解锁末地世界。  
  `true`：为岛屿解锁世界。  
  `false`：为岛屿锁定世界。

* 权限：`superior.admin.world`

## /island admin withdraw \<玩家名称/岛屿名称\> \<数量\>

从指定岛屿的银行中取款。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待修改的岛屿名称。  
  `数量`：取款数量。
* 权限：`superior.admin.withdraw`