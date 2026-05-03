# Towny 权限节点

[[toc]]

Towny 有许多权限节点，可在不同的世界生效，你可以利用它们实现更进一步的自定义需求。默认情况下，Towny 已经在 townyperms.yml 中为你分配了合适的权限。Towny 一般会从 townyperms.yml 读取权限，不过也接受（可选的）权限插件联动，比如 GroupManager、LuckPerrms 之类。一般情况下，你只需要用权限插件给予管理员组 towny.admin 权限即可，不需要额外为玩家分配权限。

除此之外，有一个默认不会给予的权限，即 towny.wild.*。给予这个权限会使得玩家可以在郊区获得所有建造/破坏/切换/物品使用权限。如果你决定要开放这些功能，以下是操作步骤：

* 其中一种做法是将其放在 townyperms.yml 文件中的 nomad 部分，允许服务器上所有玩家在郊区进行建筑等行为。
* 另外一种做法是通过你的权限插件将其分配给玩家，便于决定哪一个权限组可以在郊区进行建筑等行为。

**_再说一次，有很多人在阅读上述内容后仍然不能完全理解。简单来讲，如果你需要玩家在郊区完全不受限制，那么给予这个权限节点：_**

<center><font size="8">towny.wild.*</font></center>

## 管理员权限

* towny.admin：允许使用 /townyadmin 命令，以及在任何地方进行建筑/破坏的能力。
  * towny.admin.nation_zone：使得没有 towny.admin 权限的管理员可以无视国家区域保护。是 towny.admin 的子节点。
  * towny.admin.outlaw.teleport_bypass：玩家无视 outlaw-teleport 功能的影响，允许在成为逃犯的情况下进入城镇而不被驱逐。
  * towny.admin.town_commands.blacklist_bypass：允许管理员不受命令黑名单限制。
  * towny.admin.updatealerts：决定管理员是否会看见更新提醒。
  * towny.admin.spawn：玩家能够无视重生收费、预热及冷却。
    * towny.admin.spawn.nocharge：玩家能够无视重生收费。
    * towny.admin.spawn.nocooldown：玩家能够无视重生冷却。
    * towny.admin.spawn.nowarmup：玩家能够无视重生预热。
* towny.command.townyadmin.*
  * towny.command.townyadmin
  * towny.command.townyadmin.set.*
    * towny.command.townyadmin.set.about - 允许管理员修改玩家的 /res about 信息。
    * towny.command.townyadmin.set.founder
    * towny.command.townyadmin.set.mayor
    * towny.command.townyadmin.set.plot - 允许将地皮转让给其他城镇。
    * towny.command.townyadmin.set.capital
    * towny.command.townyadmin.set.title
    * towny.command.townyadmin.set.surname
    * towny.command.townyadmin.set.nationzoneoverride
    towny.command.townyadmin.plot.*
    * towny.command.townyadmin.plot.claim
    towny.command.townyadmin.resident.*
    * towny.command.townyadmin.resident.friend
    towny.command.townyadmin.town.* - 允许玩家使用 `/ta town add/kick` 命令
    * towny.command.townyadmin.town.new
    * towny.command.townyadmin.town.add
    * towny.command.townyadmin.town.kick
    * towny.command.townyadmin.town.delete
    * towny.command.townyadmin.town.deposit
    * towny.command.townyadmin.town.forsale
    * towny.command.townyadmin.town.notforsale
    * towny.command.townyadmin.town.rename
    * towny.command.townyadmin.town.bankhistory
    * towny.command.townyadmin.town.checkoutposts
    * towny.command.townyadmin.town.invite
    * towny.command.townyadmin.town.settownlevel
    * towny.command.townyadmin.town.giveboughtblocks
    * towny.command.townyadmin.town.outlaw
    * towny.command.townyadmin.town.outpost
    * towny.command.townyadmin.town.rank
    * towny.command.townyadmin.town.set.*
      * towny.command.townyadmin.town.set.foundingdate
    * towny.command.townyadmin.town.trust
    * towny.command.townyadmin.town.trusttown
    * towny.command.townyadmin.town.unruin
    * towny.command.townyadmin.town.withdraw
    * towny.admin.spawn
      * towny.command.townyadmin.town.spawn.freecharge
      * towny.command.townyadmin.town.spawn
  * towny.command.townyadmin.nation.* - 允许玩家使用 `/ta nation add/kick` 命令
    * towny.command.townyadmin.nation.new
    * towny.command.townyadmin.nation.add
    * towny.command.townyadmin.nation.delete
    * towny.command.townyadmin.nation.rename
    * towny.command.townyadmin.nation.bankhistory
    * towny.command.townyadmin.nation.enemy
    * towny.command.townyadmin.nation.add
    * towny.command.townyadmin.nation.deposit
    * towny.command.townyadmin.nation.forcemerge
    * towny.command.townyadmin.nation.kick
    * towny.command.townyadmin.nation.rank
    * towny.command.townyadmin.nation.recheck
    * towny.command.townyadmin.nation.sanctiontown
    * towny.command.townyadmin.nation.set.*
      * towny.command.townyadmin.nation.set.foundingdate
    * towny.command.townyadmin.nation.transfer
    * towny.command.townyadmin.nation.withdraw
  * towny.command.townyadmin.toggle.* - 允许玩家使用 `/ta toggle ...` 命令
    * towny.command.townyadmin.toggle.neutral
    * towny.command.townyadmin.toggle.npc
    * towny.command.townyadmin.toggle.devmode
    * towny.command.townyadmin.toggle.debug
    * towny.command.townyadmin.toggle.townwithdraw
    * towny.command.townyadmin.toggle.nationwithdraw
    * towny.command.townyadmin.toggle.npc
    * towny.command.townyadmin.toggle.regenerations
    * towny.command.townyadmin.toggle.wildernessuse
  * towny.command.townyadmin.eco.* - 允许玩家使用 `/ta eco ...` 命令
    * towny.command.townyadmin.eco.depositall
    * towny.command.townyadmin.eco.depositalltowns
    * towny.command.townyadmin.eco.depositallnations
    * towny.command.townyadmin.eco.resetbanks
    * towny.command.townyadmin.eco.info
    * towny.command.townyadmin.eco.convert
  * towny.command.townyadmin.givebonus - 允许玩家使用 `/ta givebonus...` 命令
  * towny.command.townyadmin.reload - 允许玩家使用 `/ta reload` 命令
  * towny.command.townyadmin.reset - 重新生成默认的 config.yml 配置文件，并完全重载 Towny。
  * towny.command.townyadmin.townyperms - 允许游戏内编辑 townyperms.yml 文件。
  * towny.command.townyadmin.tpplot - 允许使用 `/ta tpplot` 命令。
  * towny.command.townyadmin.install - 允许使用 `/ta install` 命令。
  * towny.command.townyadmin.backup - 执行一次备份。
  * towny.command.townyadmin.newday - 强制进入新城镇日，并触发税收等相关事件。
  * towny.command.townyadmin.newhour - 强制 Towny 触发小时事件。
  * towny.command.townyadmin.purge - 允许使用诸如 `ta purge 30` 等的命令清除旧居民数据。
  * towny.command.townyadmin.unclaim - 允许解除占领脚下的地皮。
  * towny.command.townyadmin.resident.delete - 允许使用 `/ta res delete {名称}` 命令删除指定的领地居民。
  * towny.command.townyadmin.checkoutposts - 允许使用命令 `/ta checkoutposts`。

* towny.claimed.*：获得此权限的玩家可以在所有城镇自由建造/破坏/切换/使用物品。**大部分情况下这个权限只应由管理员或管理员权限组持有。**

> 这类权限只应分配给服务器管理员。不应将其加入 townyperms.yml 中。

  * towny.claimed.alltown.*
    * towny.claimed.alltown.build.*：玩家可在所有城镇中建筑。
    * towny.claimed.alltown.destroy.*：玩家可在所有城镇中破坏。
    * towny.claimed.alltown.switch.*：玩家可在所有城镇中切换。
    * towny.claimed.alltown.item_use.*：玩家可在所有城镇中使用物品。

> 这类权限可以在 townyperms.yml 中分配给助理等级，这样他们就可以在所属城镇中建筑与破坏。

  * towny.claimed.owntown.*
    * towny.claimed.owntown.build.*：玩家可在所属城镇中建筑。
    * towny.claimed.owntown.destroy.*：玩家可在所属城镇中破坏。
    * towny.claimed.owntown.switch.*：玩家可在所属城镇中切换。
    * towny.claimed.owntown.item_use.*：玩家可在所属城镇中使用物品。

## /plot 权限节点

* towny.command.plot.*
  * towny.command.plot.asmayor - 用于城镇地皮管理，拥有这个权限的玩家可以：
    * 从玩家手里收回地皮；
    * 切换城镇内任意地皮权限与设置；
    * 挂售或取消挂售地皮；
    * 城镇拥有者及其助理无需此权限也可挂售地皮。
  * towny.command.plot.asmayorinunowned - 适合分配给助理等级，允许以城镇拥有者的权限进行操作，但仅限于无其他玩家占领的城镇地皮。
    * 这些能做的事包括：
      * 管理地皮组；
      * 挂售或取消挂售地皮；
      * 设置为监狱牢房；
      * 使用命令 `/plot perm add|remove ...`；
      * 使用命令 `/plot trust add|remove ...`。
  * towny.command.plot.claim
  * towny.command.plot.unclaim
  * towny.command.plot.notforsale
  * towny.command.plot.forsale
  * towny.command.plot.district.*
    * towny.command.plot.district.add
    * towny.command.plot.district.remove
    * towny.command.plot.district.delete
    * towny.command.plot.district.rename
  * towny.command.plot.evict
  * towny.command.plot.jailcell
  * towny.command.plot.perm
    * towny.command.plot.perm.*
    * towny.command.plot.perm.gui
    * towny.command.plot.perm.add
    * towny.command.plot.perm.remove
    * towny.command.plot.perm.hud
  * towny.command.plot.toggle.*
    * towny.command.plot.toggle.pvp
    * towny.command.plot.toggle.explosion
    * towny.command.plot.toggle.fire
    * towny.command.plot.toggle.mobs
  * towny.command.plot.trust
  * towny.command.plot.set.*
    * towny.command.plot.set.perm
    * towny.command.plot.set.reset
    * towny.command.plot.set.shop
    * towny.command.plot.set.embassy
    * towny.command.plot.set.arena
    * towny.command.plot.set.wilds
    * towny.command.plot.set.inn
    * towny.command.plot.set.jail
    * towny.command.plot.set.spleef
  * towny.command.plot.clear
  * towny.command.plot.group.*
    * towny.command.plot.group.add
    * towny.command.plot.group.remove
    * towny.command.plot.group.delete
    * towny.command.plot.group.rename
    * towny.command.plot.group.set
    * towny.command.plot.group.toggle
    * towny.command.plot.group.forsale
    * towny.command.plot.group.notforsale
    * towny.command.plot.group.trust
    * towny.command.plot.group.perm

## /resident 权限节点

* towny.command.resident.*
  * towny.command.resident.list
  * towny.command.resident.tax
  * towny.command.resident.jail
  * towny.command.resident.otherresident
  * towny.command.resident.outlawlist
  * towny.command.resident.plotlist
  * towny.command.resident.set.*
    * towny.command.resident.set.about
    * towny.command.resident.set.perm
    * towny.command.resident.set.mode
      * towny.command.resident.set.mode.clear
  * towny.command.resident.spawn
  * towny.command.resident.toggle.*
    * towny.command.resident.toggle.pvp
    * towny.command.resident.toggle.explosion
    * towny.command.resident.toggle.fire
    * towny.command.resident.toggle.mobs
    * towny.command.resident.toggle.bedspawn
    * towny.command.resident.toggle.bordertitles
    * towny.command.resident.toggle.constantplotborder
    * towny.command.resident.toggle.plotborder
    * towny.command.resident.toggle.district
    * towny.command.resident.toggle.ignoreplots
    * towny.command.resident.toggle.ignoreinvites
    * towny.command.resident.toggle.ignoreotherchannels
    * towny.command.resident.toggle.infotool
    * towny.command.resident.toggle.map
    * towny.command.resident.toggle.plotgroup
    * towny.command.resident.toggle.townborder
    * towny.command.resident.toggle.townclaim
    * towny.command.resident.toggle.townunclaim
  * towny.command.resident.friend

## /town 权限节点

* towny.town.*：玩家拥有全部 .town 权限节点。
  * towny.town.resident：允许玩家加入城镇。
  * towny.town.spawn.*：允许传送到任意出生点。
    * towny.town.spawn.town：允许复活或传送到所属城镇的出生点。
    * towny.town.spawn.nation：允许复活或传送到所属国家的出生点。
    * towny.town.spawn.ally：允许复活或传送到盟友所属国家或城镇的出生点。
    * towny.town.spawn.public：允许复活或传送到任意公开城镇的出生点。
    * towny.town.spawn.outpost：允许复活或传送到所处城镇任意前哨站的出生点。这是 `towny.town.spawn.town` 的子权限，如果不想要玩家传送到前哨站出生点，请给予负权限（例如，在 GroupManager 权限配置中的写法为 `- -towny.town.spawn.outpost`）

  * towny.town.spawn.nation.bypass_public：
    * 描述：玩家允许在如下情况使用 `/town spawn`：
      * 对应城镇同属一个国家；
      * 城镇为非公开状态；
      * `is_nation_ally_spawning_requiring_public_status` 设置为 true。
    * 默认状态：false，且不是 towny.town.spawn.* 的子权限。

  * towny.town.spawn.ally.bypass_public：
    * 描述：玩家允许在如下情况使用 `/town spawn`：
      * 对应城镇属于盟国；
      * 城镇为非公开状态；
      * `is_nation_ally_spawning_requiring_public_status` 设置为 true。
      * 默认状态：false，且不是 towny.town.spawn.* 的子权限。

  * 给予上述任一权限节点允许国家领袖或特别授权成员在其他国家成员/盟友被阻止的情况下仍能传送到盟友城镇，因为城镇处于非公开状态，且配置设置了传送或复活出生点需要确认公开状态。

* towny.command.town.*

  * towny.command.town.here
  * towny.command.town.nearby
  * towny.command.town.allylist
  * towny.command.town.enemylist
  * towny.command.town.list.*
    * towny.command.town.list.forsale
    * towny.command.town.list.residents
    * towny.command.town.list.open
    * towny.command.town.list.balance
    * towny.command.town.list.upkeep
    * towny.command.town.list.name
    * towny.command.town.list.townblocks
    * towny.command.town.list.online
    * towny.command.town.list.public
    * towny.command.town.list.ruined
    * towny.command.town.list.bankrupt
    * towny.command.town.list.founded
  * towny.command.town.new：建立新城镇的权限。
  * towny.command.town.leave
  * towny.command.town.withdraw
  * towny.command.town.deposit
  * towny.command.town.deposit.othertown：并不是 `towny.command.town.deposit` 的子权限，如果需要向其他城镇的银行存钱，则必须拥有此权限。
  * towny.command.town.bankhistory
  * towny.command.town.forsale
  * towny.command.town.notforsale
  * towny.command.town.buytown
  * towny.command.town.rank.*
  * towny.command.town.reslist
  * towny.command.town.jail
  * towny.command.town.jail.list
  * towny.command.town.unjail
  * towny.command.town.merge
  * towny.command.town.outlaw：允许逃犯出现在城镇中。
  * towny.command.town.outpost.list：`towny.town.spawn.town` 的子权限。
  * towny.command.town.plotgrouplist
  * towny.command.town.purge
  * towny.command.town.reclaim
  * towny.command.town.set.*
    * towny.command.town.set.board
    * towny.command.town.set.mayor
    * towny.command.town.set.homeblock
    * towny.command.town.set.spawn
    * towny.command.town.set.spawncost
    * towny.command.town.set.outpost
    * towny.command.town.set.perm
    * towny.command.town.set.taxes
    * towny.command.town.set.plottax
    * towny.command.town.set.shoptax
    * towny.command.town.set.embassytax
    * towny.command.town.set.plotprice
    * towny.command.town.set.shopprice
    * towny.command.town.set.embassyprice
    * towny.command.town.set.mapcolor
    * towny.command.town.set.name：重命名城镇的权限。
    * towny.command.town.set.primaryjail
    * towny.command.town.set.tag
    * towny.command.town.set.taxpercentcap
    * towny.command.town.set.title
    * towny.command.town.set.title.colours：如果在 config.yml 中启用了 `does_adding_colour_codes_require_permission_node` 设置，则必须给予这个权限才可设置彩色名称。
    * towny.command.town.set.surname
  * towny.command.town.buy.*
    * towny.command.town.buy.bonus
  * towny.command.town.othertown：允许玩家通过命令 `/t {城镇名称}` 对其他城镇进行相关操作。
  * towny.command.town.plots：允许使用 `/town {名称} plots` 命令。
  * towny.command.town.say
  * towny.command.town.merge：允许使用 `/town merge {其他城镇名称}` 命令。
  * towny.command.town.toggle.*：允许使用所有城镇切换命令（若玩家身份为城镇拥有者或其助理，则居民还可以切换自己的土地。）
    * towny.command.town.toggle.pvp
    * towny.command.town.toggle.public
    * towny.command.town.toggle.explosion
    * towny.command.town.toggle.fire
    * towny.command.town.toggle.neutral
    * towny.command.town.toggle.mobs
    * towny.command.town.toggle.taxpercent
    * towny.command.town.toggle.open
    * towny.command.town.toggle.nationzone
  * towny.command.town.trust
  * towny.command.town.trusttown
  * towny.command.town.mayor
  * towny.command.town.delete：删除自己城镇的权限。
  * towny.command.town.join：加入公开城镇的权限。
  * towny.command.town.add：邀请玩家加入城镇的权限。
  * towny.command.town.kick：踢出城镇玩家的权限。
  * towny.command.town.takeoverclaim：玩家可以通过 `/t takeoverclaim` 命令从过度扩张的城镇中偷取地皮。
  * towny.command.town.claim.*
    * towny.command.town.claim.town：玩家可以使用 `/town claim` 命令扩张城镇（当通过 /townyworld 设置世界不可占领时使用）
    * towny.command.town.claim.outpost：允许/禁止玩家通过权限建立前哨站。（仍需要配置启用前哨站功能）
    * towny.command.town.claim.fill：允许玩家通过 `/t claim fill` 命令进行填充式占领。
    * towny.command.town.claim.town.multiple：允许玩家通过 `/t claim auto|rect|circle` 命令进行大面积占领。
  * towny.command.town.unclaim：允许解除占领城镇地皮。
    * towny.command.town.unclaim.all
  * towny.command.town.cede.plot：允许玩家使用 `/t cede plot {townname}` 命令。
  * towny.command.town.online
  * towny.command.town.invite.*
    * towny.command.town.invite.manage.*：玩家可以管理城镇邀请。
      * towny.command.town.add：玩家可以向城镇添加玩家。
        * towny.command.town.invite.add
        * towny.command.town.invite.add.multiple：设置为负权限时，城镇拥有者/助理每次只能邀请一位玩家加入城镇，以防无城镇玩家被邀请信息刷屏。
      * towny.command.town.invite.accept：同意加入国家的邀请。
      * towny.command.town.invite.deny：拒绝加入国家的邀请。
    * towny.command.town.invite.sent：玩家可以浏览城镇发出的邀请。
    * towny.command.town.invite.received：玩家可以浏览城镇收到的邀请。
    * towny.command.town.invite：玩家可以浏览邀请相关帮助页面。

## /nation 权限节点

* towny.nation.spawn.*：允许复活或传送至所有国家的出生点。
  * towny.nation.spawn.nation：允许复活或传送至所属国家的出生点。
  * towny.nation.spawn.ally：允许复活或传送至盟友国家的出生点。
  * towny.nation.spawn.public：允许复活或传送至公开国家的出生点。
* towny.command.nation.*
* towny.command.nation.default
  * 为国家子命令设置的一系列权限，所有玩家默认拥有。
  * 每个节点没有特定功能，因为它们是为更进一步的子命令准备的，而这些子命令有各自的权限。
  * towny.command.nation.list
    * towny.command.nation.list.residents
    * towny.command.nation.list.towns
    * towny.command.nation.list.open
    * towny.command.nation.list.balance
    * towny.command.nation.list.upkeep
    * towny.command.nation.list.name
    * towny.command.nation.list.townblocks
    * towny.command.nation.list.online
    * towny.command.nation.list.public
    * towny.command.nation.list.founded
  * towny.command.nation.new
  * towny.command.nation.leave
  * towny.command.nation.withdraw
  * towny.command.nation.deposit
  * towny.command.nation.deposit.other
  * towny.command.nation.bankhistory
  * towny.command.nation.baltop
  * towny.command.nation.rank.*
  * towny.command.nation.king
  * towny.command.nation.othernation - 允许玩家对其他国家使用 `/n {国家名称}` 命令。
  * towny.command.nation.sanctiontown
  * towny.command.nation.say
  * towny.command.nation.join
  * towny.command.nation.set.* 
    * towny.command.nation.set.board
    * towny.command.nation.set.spawncost
    * towny.command.nation.set.spawn
    * towny.command.nation.set.king
    * towny.command.nation.set.capital
    * towny.command.nation.set.taxes
    * towny.command.nation.set.taxpercentcap
      * towny.command.nation.set.conqueredtax
      * towny.command.nation.set.name
      * towny.command.nation.set.title
      * towny.command.nation.set.title.colours - 如果在 config.yml 中启用了 `does_adding_colour_codes_require_permission_node` 设置，则必须给予这个权限才可设置彩色名称。
      * towny.command.nation.set.surname
      * towny.command.nation.set.tag
      * towny.command.nation.set.mapcolor
    * towny.command.nation.toggle.*
      * towny.command.nation.toggle.neutral
      * towny.command.nation.toggle.open
      * towny.command.nation.toggle.public
      * towny.command.nation.toggle.taxpercent
    * towny.command.nation.invite.*
      * towny.command.nation.invite.manage.*：允许管理国家的城镇邀请。
        * towny.command.nation.add：玩家可以向国家添加新城镇。
          * towny.command.nation.invite.add
        * towny.command.nation.invite.accept
        * towny.command.nation.invite.deny
      * towny.command.nation.invite.sent：玩家可以浏览国家发出的邀请。
      * towny.command.nation.invite.received：玩家可以浏览国家收到的邀请。
      * towny.command.nation.invite：玩家可以浏览邀请相关帮助页面。
    * towny.command.nation.ally.*
      * towny.command.nation.ally.manage.*：允许管理国家盟友邀请。
        * towny.command.nation.ally.add
        * towny.command.nation.ally.remove
        * towny.command.nation.ally.accept
        * towny.command.nation.ally.deny
      * towny.command.nation.ally.sent：玩家可以浏览国家发出的结盟邀请。
      * towny.command.nation.ally.received：玩家可以浏览国家收到的结盟邀请。
      * towny.command.nation.ally：玩家可以浏览结盟邀请相关帮助页面。
    * towny.command.nation.enemy
    * towny.command.nation.delete
    * towny.command.nation.online
    * towny.command.nation.add
    * towny.command.nation.kick
    * towny.command.nation.spawn
    * towny.command.nation.townlist
      * towny.command.nation.allylist
      * towny.command.nation.enemylist
      * towny.command.nation.merge

## /towny 权限节点

* towny.command.towny.*

  * towny.command.towny.map
  * towny.command.towny.prices
  * towny.command.towny.top
    * towny.command.towny.top.*
      * towny.command.towny.top.residents
      * towny.command.towny.top.land
      * towny.command.towny.top.balance
  * towny.command.towny.tree
  * towny.command.towny.time
  * towny.command.towny.universe
  * towny.command.towny.version
  * towny.command.towny.spy

## /townyworld 权限节点

* towny.command.townyworld.*
  * towny.command.townyworld.list
  * towny.command.townyworld.set
  * towny.command.townyworld.toggle.*
    * towny.command.townyworld.toggle.claimable
    * towny.command.townyworld.toggle.usingtowny
    * towny.command.townyworld.toggle.pvp
    * towny.command.townyworld.toggle.forcepvp
    * towny.command.townyworld.toggle.explosion
    * towny.command.townyworld.toggle.forceexplosion
    * towny.command.townyworld.toggle.fire
    * towny.command.townyworld.toggle.forcefire
    * towny.command.townyworld.toggle.friendlyfire
    * towny.command.townyworld.toggle.jailing
    * towny.command.townyworld.toggle.townmobs
    * towny.command.townyworld.toggle.worldmobs
    * towny.command.townyworld.toggle.wildernessmobs
    * towny.command.townyworld.toggle.warallowed
    * towny.command.townyworld.toggle.revertunclaim
    * towny.command.townyworld.toggle.revertentityexpl
    * towny.command.townyworld.toggle.revertblockexpl
    * towny.command.townyworld.toggle.plotcleardelete
    * towny.command.townyworld.toggle.unclaimblockdelete
    * towny.command.townyworld.toggle.unclaimentitydelete
    * towny.command.townyworld.toggle.wildernessuse
  * towny.command.townyworld.regen
  * towny.command.townyworld.undo

## 聊天相关权限节点

* towny.chat.general：允许玩家使用全局聊天频道。
  * towny.chat.town：允许玩家使用城镇聊天频道。
  * towny.chat.nation：允许玩家使用国家聊天频道。
  * towny.chat.mod：允许玩家使用小管理聊天频道。
  * towny.chat.admin：允许玩家使用管理聊天频道。
  * towny.chat.local：允许玩家使用本地聊天频道。
  * towny.chat.spy：允许玩家窃听所有频道的发言。
  * towny.chat.join.{频道名称}：允许玩家通过 `/join {频道名称}` 命令加入指定频道。
  * towny.chat.leave.{频道名称}：允许玩家通过 `/leave {频道名称}` 命令退出指定频道。
  * townychat.mod.mute：允许使用 `/chmute {频道名称} {玩家名称}` 命令禁言指定频道的某个玩家。
  * townychat.mod.unmute：允许使用 `/chunmute {channel} {player}` 命令解除指定频道某个玩家的禁言。
  * townychat.chat.color: 允许玩家在聊天消息中使用颜色代码。
  * townychat.chat.format.*：允许使用所有聊天样式，如加粗、斜体。默认 OP 拥有。
    * 子权限：
    * townychat.chat.format.bold
    * townychat.chat.format.italic
    * townychat.chat.format.magic
    * townychat.chat.format.underlined
    * townychat.chat.format.strike
  * townychat.chat.format.reset：允许使用 `&r` 重置聊天格式。此权限默认所有玩家拥有。

## 郊区相关权限节点

* towny.wild.*
  * towny.wild.build.*
  * towny.wild.destroy.*
  * towny.wild.switch.*
  * towny.wild.item_use.*
    * towny.wild.build.{材料名称}
    * towny.wild.destroy.{材料名称}
    * towny.wild.switch.{材料名称}
    * towny.wild.item_use.{材料名称}

## 杂项权限节点

* towny.outlaw.jailer：在城镇内被击杀的逃犯将会被押送至鉴于。默认城镇拥有者及其助理和警长拥有。
* towny.tax_exempt：拥有此权限的玩家无需缴税。**只在 TownyPerms 中有效。**无法在其他权限管理插件中生效。
* towny.bypass_death_costs：拥有此权限的玩家死亡无扣费惩罚。
* towny.bypass_bed_restriction：拥有此权限的玩家可自由使用床设置重生点。
* towny.receives-plot-notifications：让玩家能看见地皮提醒，默认拥有。
* towny.town.{城镇名称}：
  处于城镇中的玩家会得到一个权限节点，即 `towny.town.{城镇名称}`。
  * 适合用于检测玩家是否加入城镇。
  * 例如制作需要加入城镇才可交互的 NPC。
 * towny.nation.{国家名称}：
  处于城镇中的玩家会得到一个权限节点，即 `towny.nation.{国家名称}`。
  * 适合用于检测玩家是否加入国家。
  * 例如制作需要加入国家才可交互的 NPC。 
* towny.townless：不属于任何城镇的玩家默认持有此权限。
* towny.nationless：不属于任何国家的玩家默认持有此权限。
* TownyPerms 特色：城镇/国家变量节点
  * 现版本支持直接向 Townyperms 中嵌入带变量的权限节点。
  * 对于无城镇的游民无效。
  * 例如：向 townyperms.yml 的默认城镇部分增加 `stargate.network.{townname}` 权限，所有处于城镇 `England` 的玩家会获得 `stargate.network.england` 权限，以 `{townname}` 表示城镇，`{nationname}` 表示国家。
* 对于不支持信息/选项节点的权限管理插件：
  * `prefix.前缀内容`
  * `suffix.后缀内容`
    * 对于没有 `prefix:` 与 `suffix:` 设置的权限插件，这两个权限节点分别对应 Towny 聊天配置的 `{permprefix}` 与 `{permsuffix}` 变量。
  * towny_maxplots.x（x 为任意数字，如 towny_maxplots.2 表示最多拥有两块地皮）
  * towny_extraplots.x（x 为任意数字，如 towny_extraplots.2 表示最多额外拥有两块地皮）
  * towny_maxoutposts.x（x 为任意数字，如 towny_maxoutposts.2 表示最多额外拥有两座前哨站）

## 信息/选项/元权限节点

> 这是一种类似于权限节点的东西，它同样需要添加进权限节点配置。但有如下额外信息：GroupManager 的 `info:` 部分，PermissionEX 的 `options:` 部分。而这些内容在 LuckPerms 中统一称为[元数据](../../LuckPerms/features/prefix-suffix-meta.md)。

* 设置加入服务器时默认的聊天频道/模式。
  * `towny_default_modes: 'map,townclaim,plotborder,global,local,town,nation,mod,admin'`
    * 对居民设置默认的聊天模式，可在 `/res set mode` 命令界面找到。
    * 使上线玩家自动加入某个频道。
* `towny_maxoutposts: {数量}`
> 通过所在权限组限制玩家可建立的前哨站数量。
* `towny_maxplots: {数量}`
> 通过所在权限组限制玩家可占领的地皮数量。如果权限组没有对应权限，或值为 -1，则 Towny 会使用配置文件中 `max_plots_per_resident` 的值。当 `max_plots_per_resident` 为 -1，且此权限值为 -1 或不存在，则玩家可以领取数量不限的地皮。

> 示例：
> ``` YAML
>        groups:
>           Default:
>             default: true
>             permissions:
>             - general.spawn
>             inheritance: []
>             info:
>               prefix: ''
>               build: true
>               suffix: ''
>               towny_maxplots: 1
>               towny_default_modes: 'local'
>               towny_maxoutposts: 2
> 
>           Admins:
>             default: false
>             permissions:
>             - '*'
>             inheritance:
>             info:
>               prefix: ''
>               build: true
>               suffix: ''
>               towny_maxplots: -1
> ```

* `town_extraplots: {数量}`
  * 用法与 `towny_maxplots` 类似，即：在 GM 的 `info` 部分进行设置，与前后缀设置方法类似。
  * 示例：`towny_extraplots: 1`
  * 通常给予拥有 `town_maplots` 且为城镇拥有者或其助理的玩家。
  * 使其能超出最大地皮数量占领额外地皮。