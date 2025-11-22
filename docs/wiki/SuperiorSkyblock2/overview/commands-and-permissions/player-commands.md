# 玩家命令

::: info

尖角括号 `<>` 内为必选参数，而方括号 `[]` 内为可选参数。 

:::

## /island accept <玩家名称/岛屿名称>

接受来自玩家的邀请。

* 别称：  
  `/island join <玩家名称/岛屿名称>`
* 参数：  
  `玩家名称`：邀请发出的玩家名称。  
  `岛屿名称`：邀请玩家所在的岛屿名称。
* 权限：`superior.island.accept`

## /island balance [玩家名称/岛屿名称]

查看岛屿的经济。

* 别称：  
  `/island bal [玩家名称/岛屿名称]`  
  `/island money [玩家名称/岛屿名称]`
* 参数：  
  `玩家名称`：岛屿拥有者的名称。  
  `岛屿名称`：待查询的岛屿名称。
* 权限：`superior.island.balance`

## /island ban <玩家名称>

将玩家从你的岛屿中封禁。

* 参数：  
  `玩家名称`：待封禁的玩家名称。
* 权限：`superior.island.ban`

## /island bank [日志]

打开岛屿银行。

* 参数：  
  `日志`：是否打开岛屿交易记录界面。
* 权限：`superior.island.bank`

## /island biome

修改岛屿的生物群系。

* 别称：  
  `/island setbiome`
* 权限：`superior.island.biome`

## /island border

修改岛屿边界的颜色。

* 权限：`superior.island.border`

## /island chest [页码]

打开岛屿仓库。

* 别称：  
  `/is vault [页码]`
* 参数：  
  `页码`：打开仓库的页码。
* 权限：`superior.island.chest`

## /island close

将岛屿设置为私有，不对外开放。

* 别称：  
  `/is lock`
* 权限：`superior.island.close`

## /island coop <玩家名称>

将指定玩家设置为岛屿合作者。

* 别称：
  `/island trust <玩家名称>`
* 参数：  
  `玩家名称`：待添加至信任列表中的玩家名称。
* 权限：`superior.island.coop`

## /island coops

打开合作界面。

* 权限：`superior.island.coops`

## /island counts [玩家名称/岛屿名称]

查看岛屿内的方块计数清单。

* 别称：  
  `/island blocks [玩家名称/岛屿名称]`
* 参数：  
  `玩家名称`：待查询的岛屿拥有者玩家名称。  
  `岛屿名称`：待查询的岛屿名称。
* 权限：`superior.island.counts`

## /island create <岛屿名称> [结构名称]

创建新的岛屿。

* 权限：`superior.island.create`

## /island delwarp <地标名称>

删除指定的岛屿地标。

* 参数：  
  `地标名称`：待删除的地标名称。
* 权限：`superior.island.delwarp`

## /island demote <玩家名称>

降级岛屿上的指定玩家。

* 参数：  
  `玩家名称`：待降级的玩家名称。
* 权限：`superior.island.demote`

## /island deposit <数量>

向岛屿银行中存款。

* 参数：  
  `数量`：存款的数量。
* 权限：`superior.island.deposit`

## /island disband

永久解散岛屿。

* 别称：  
  `/island reset`  
  `/island delete`
* 权限：`superior.island.disband`

## /island expel <玩家名称>

驱逐岛屿上的游客。

* 参数：  
  `玩家名称`：需要驱逐的玩家名称。
* 权限：`superior.island.expel`

## /island fly

切换岛屿飞行。

* 权限：`superior.island.fly`

## /island help [页码]

列出所有可用命令。

* 参数：  
  `页码`：指定的页码。
* 权限：`superior.island.help`

## /island invite <玩家名称>

向指定玩家发出邀请。

* 别称：  
  `/island add <玩家名称>`
* 参数：  
  `玩家名称`：邀请的玩家名称。
* 权限：`superior.island.invite`

## /island kick <玩家名称>

踢出岛屿中的玩家。

* 别称：  
  `/island remove <玩家名称>`
* 参数：  
  `玩家名称`：待踢出的玩家名称。
* 权限：`superior.island.kick`

## /island lang

切换插件显示的语言。

* 别称：  
  `/island language`
* 权限：`superior.island.lang`

## /island leave

离开你的岛屿。

* 权限：`superior.island.panel`

## /island mission complete <任务名称>

尝试提交指定的任务。

* 别称：  
  `/island challenge complete <任务名称>`
* 参数：  
  `任务名称`：待提交的任务名称。
* 权限：`superior.island.mission`

## /island missions

打开岛屿任务界面。

* 别称：  
  `/island challenges`
* 权限：`superior.island.missions`

## /island name <岛屿名称>

重命名你的岛屿。

* 别称：  
  `/island setname <岛屿名称>`  
  `/island rename <岛屿名称>`
* 参数：  
  `岛屿名称`：新的岛屿名称。
* 权限：`superior.island.name`

## /island open

对外界开放岛屿。

* 别称：  
  `/island unlock`
* 权限：`superior.island.open`

## /island panel [members/visitors] [切换]

打开岛屿界面。

* 别称：  
  `/island manager [members/visitors] [切换]`  
  `/island cp [members/visitors] [切换]`
* 参数：  
  `members/visitors`：打开成员（`members`）或访客（`visitors`）界面。  
  `切换`：是否直接通过 `/is` 命令打开岛屿界面。
* 权限：`superior.island.panel`

## /island pardon <玩家名称>

解封指定的玩家。

* 别称：  
  `/island unban <玩家名称>`
* 参数：  
  `玩家名称`：待解封的玩家名称。
* 权限：`superior.island.pardon`

## /island permissions [玩家名称] [是否重置]

获取指定等级或玩家的所有权限。

* 别称：  
  `/island perms [玩家名称] [是否重置]`  
  `/island setpermission [玩家名称] [是否重置]`  
  `/island setperm [玩家名称] [是否重置]`
* 参数：  
  `玩家名称`：待修改权限的玩家。  
  `是否重置`：是否重置指定等级或玩家的权限。
* 权限：`superior.island.permissions`

## /island promote <玩家名称>

升级岛屿内的指定玩家。

* 参数：  
  `玩家名称`：待升级的玩家名称。
* 权限：`superior.island.promote`

## /island rankup <升级名称>

提升岛屿属性（如刷怪速率、作物生长速度等）的等级。

* 参数：  
  `升级名称`：待升级的岛屿属性。
* 权限：`superior.island.rankup`

## /island rate [玩家名称/岛屿名称]

为指定岛屿评分。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待评价的岛屿名称。
* 权限：`superior.island.rate`

## /island ratings

显示所有岛屿评分。

* 权限：`superior.island.ratings`

## /island recalc

重新计算岛屿价值。

* 别称：  
  `/island recalculate`  
  `/island level`
* 权限：`superior.island.recalc`

## /island setdiscord <Discord 标签>

为岛屿设置 Discord 频道。

* 参数：  
  `Discord 标签`：对应的 Discord 标签。
* 权限：`superior.island.setdiscord`

## /island setpaypal <邮箱>

为岛屿设置 PayPal 邮箱。

* 参数：  
  `邮箱`：岛屿的 PayPal 邮箱。
* 权限：`superior.island.setpaypal`

## /island setrole <玩家名称> <岛屿等级>

为指定玩家分配岛屿等级。

* 参数：  
  `玩家名称`：待设置的玩家名称。  
  `岛屿等级`：待分配的岛屿等级。
* 权限：`superior.island.setrole`

## /island setteleport

* 别称：  
  `/island settp`  
  `/island setgo`  
  `/island sethome`
* 权限：`superior.island.setteleport`

## /island settings

打开设置界面。

* 权限：`superior.island.settings`

## /island setwarp <地标名称> [地标分类]

创建一个新的岛屿地标。

* 参数：  
  `地标名称`：设置的地标名称。  
  `地标分类`：设置的地标所属分类。
* 权限：`superior.island.setwarp`

## /island show [玩家名称/岛屿名称]

查询指定岛屿的信息。

* 别称：  
  `/island info`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待查询的岛屿名称。
* 权限：`superior.island.show`

## /island team [玩家名称/岛屿名称]

查询岛屿成员在线状态。

* 别称：  
  `/island showteam [玩家名称/岛屿名称]`  
  `/island online [玩家名称/岛屿名称]`
* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：待查询的岛屿名称。
* 权限：`superior.island.team`

## /island teamchat [消息]

切换岛屿队伍聊天模式。

* 别称：  
  `/island chat [消息]`  
  `/island tc [消息]`
* 参数：  
  `消息`：在队伍聊天中发送的消息。
* 权限：`superior.island.teamchat`

## /island teleport

传送至你的岛屿。

* 别称：  
  `/island tp`  
  `/island go`  
  `/island home`
* 权限：`superior.island.teleport`

## /island toggle <border/blocks>

切换岛屿边界与堆叠方块放置。

* 参数：  
  `border`：切换边界可见性。  
  `block`：切换方块堆叠功能开关。
* 权限：  
  切换基本权限：`superior.island.toggle`  
  切换边界权限：`superior.island.toggle.border`  
  切换方块堆叠权限：`superior.island.toggle.blocks`

## /island top

打开岛屿排行榜界面。

* 权限：`superior.island.top`

## /island transfer <玩家名称>

转让岛屿。

* 别称：  
  `/island leader <玩家名称>`  
  `/island leadership <玩家名称>`
* 参数：  
  `玩家名称`：待转让的玩家名称。
* 权限：`superior.island.transfer`

## /island uncoop <玩家名称>

解除指定玩家与你的合作关系。

* 别称：  
  `/island untrust <玩家名称>`
* 参数：  
  `玩家名称`：待解除合作的玩家名称。
* 权限：`superior.island.uncoop`

## /island upgrade

打开岛屿升级界面。

* 别称：  
  `/island upgrades`
* 权限：`superior.island.update`

## /island value [材料名]

获取手中或指定材料的价值。

* 权限：`superior.island.value`

## /island values [玩家名称/岛屿名称]

打开价值界面。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：检查价值的岛屿名称。
* 权限：`superior.island.values`

## /island visit <玩家名称/岛屿名称>

传送至指定岛屿的访客传送点。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：访问的岛屿名称。
* 权限：`superior.island.visit`

## /island visitors

打开访客界面。

* 权限：`superior.island.panel`

## /island warp [玩家名称/岛屿名称] [地标名称]

传送至指定岛屿的地标。

* 参数：  
  `玩家名称`：岛屿拥有者的玩家名称。  
  `岛屿名称`：传送的岛屿名称。  
  `地标名称`：传送的地标名称。
* 权限：`superior.island.warp`

## /island warps

打开地标界面。

* 权限：`superior.island.warps`

## /island withdraw <数量>

从岛屿银行中取款。

* 参数：  
  `数量`：取款数额。
* 权限：`superior.island.withdraw`