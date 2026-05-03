# 默认 townyperms.yml

``` YAML
#############################################################################################
# This file contains custom permission sets which will be assigned to your players          #
# depending on their current status. This file uses YAML formatting. Do not include tabs    #
# and be very careful to align the spacing preceding the - symbols. Improperly editing this #
# file will prevent Towny from loading correctly.                                           #
#                                                                                           #
# This is all managed by towny and pushed directly to CraftBukkit's SuperPerms.             #
# These will be give in addition to any you manually assign in your specific permission     #
# plugin. Note: You do not need to assign any Towny permission nodes to your players in     #
# your server's permission plugin, ie: LuckPerms.                                           #
#                                                                                           #
# You may assign any Permission nodes here, including those from other plugins.             #
#                                                                                           #
# You may also create any custom ranks you require. Creating ranks can be done using the    #
# /ta townyperms townrank addrank [name] or by carefully editing this file.                 #
# You can add permission to a rank/group using the                                          #
# /ta townyperms group [name] addperm [node] command.                                       #
#                                                                                           #
# You may change the names of any of the ranks except: nomad, default, mayor, king, ranks,  #
# peaceful, conquered, unconquered.                                                         #
#                                                                                           #
# If you want to, you can negate permissions nodes from nodes by doing the following:       #
# Ex:                                                                                       #
#    - towny.command.plot.*                                                                 #
#    - -towny.command.plot.set.jail                                                         #
# In this example the user is given full rights to all of the /plot command nodes,          #
# but has had their ability to set a plot to a Jail plot type disabled.                     #
#                                                                                           #
# The towns.ranks and nations.ranks sections support adding prefix and priorities, this     #
# is done using two nodes: towny.rankpriority.# and towny.rankprefix.<prefix_here>.         #
# Residents will have their ranks parsed until one rank is determined to be the highest     #
# priority, this rank will then be searched for a prefix node. This prefix can be shown     #
# using the %townyadvanced_resident_primary_rank% placeholder for PlaceholderAPI. A prefix  #
# from a Nation rank will take precendence over a prefix from a Town rank.                  #
# Ex:                                                                                       #
#    - towny.rankpriority.100                                                               #
#    - towny.rankprefix.&a<&2Sheriff&a>                                                     #
#                                                                                           #
# The towns.ranks and nations.ranks sections support requiring their town or nation to have #
# a minimum town_level or nation_level. This means that you can lock ranks behind a town or #
# nation's population. By adding a permission node to a rank you will set this requirement: #
# You can read about town_levels and nation_levels here: https://tinyurl.com/3e9ahk2m       #
# Ex:                                                                                       #
#    - towny.town_level_requirement.4                                                       #
# Adding this to a town rank will require the Town to have a town_level of 4 or more to be  #
# able to assign that rank to their residents. If the town lost population the residents    #
# with a rank beyond their town's town_level will have that rank removed from them. When    #
# their town regains enough population, that rank will automatically be re-assigned to the  #
# resident. When a town rank does not contain this node it will have no town_level          #
# requirement.                                                                              #
# Likewise, nation ranks support an optional nation_level requirement, Ex:                  #
#    - towny.nation_level_requirement.4                                                     #
# When added to a nation rank this rank will only be granted when a nation is of level 4 or #
# greater. When a nation rank does not include this node it will not require any            #
# nation_level.                                                                             #
#                                                                                           #
#############################################################################################
  
  
# The 'nomad' permissions are given to all players in all Towny worlds, townless and players who are part of a town.
nomad:
- towny.command.towny.map
- towny.command.towny.prices
- towny.command.towny.tree
- towny.command.towny.time
- towny.command.towny.universe
- towny.command.towny.version
- towny.command.towny.war
- towny.command.town.online
- towny.command.town.here
- towny.command.town.new
- towny.command.town.join
- towny.command.town.list.*
- towny.command.town.ranklist
- towny.command.town.reslist
- towny.command.resident.friend
- towny.command.plot.group.*
- towny.command.plot.perm
- towny.command.plot.perm.hud
- towny.command.plot.trust
- towny.command.nation.list.*
- towny.command.nation.townlist
- towny.command.nation.allylist
- towny.command.nation.enemylist
- towny.command.nation.ranklist
- towny.town.resident
- towny.town.spawn.public
- towny.chat.general
- towny.command.towny.war.hud
- towny.command.resident.set.about
- towny.command.resident.jail
- towny.command.resident.outlawlist
- towny.command.town.allylist
- towny.command.town.enemylist
  
# This section of permissions covers players who are members of a town.
towns:
  
  # 'default' is the permission set which is auto assigned to any normal town member.
  default:
  - towny.command.resident.*
  - towny.command.plot.claim
  - towny.command.plot.unclaim
  - towny.command.plot.forsale
  - towny.command.plot.notforsale
  - towny.command.plot.toggle.*
  - towny.command.plot.set.perm
  - towny.command.plot.set.reset
  - towny.command.town.online
  - towny.command.town.leave
  - towny.command.town.deposit
  - towny.command.town.reclaim
  - towny.town.spawn.town
  - towny.chat.town
  
  # Mayors get these permissions in addition to the default set.
  mayor:
  - towny.tax_exempt
  - towny.command.towny.top
  - towny.command.town.*
  - towny.command.plot.*
  - towny.claimed.owntown.*
  - towny.command.nation.new
  - towny.outlaw.jailer
  - towny.command.nation.join
  - towny.command.nation.leave
  
  # Ranks contain additional permissions residents will be
  # granted if they are assigned that specific rank.
  ranks:
  
    # assistants are able to grant VIP and helper rank.
    assistant:
    - towny.tax_exempt
    - towny.command.town.claim.*
    - towny.command.town.invite.add
    - towny.command.plot.*
    - towny.command.town.toggle.public
    - towny.claimed.owntown.switch.*
    - towny.command.town.rank.vip
    - towny.command.town.rank.helper
    - towny.outlaw.jailer
    helper:
    - towny.claimed.townowned.switch.*
  
    # Currently only an example rank holder with no extra permissions.
    donator:
    - foo.bar
  
    # Currently only an example rank holder with no extra permissions.
    vip:
    - foo.bar
  
    # Sheriff rank is able to jail other town members.
    sheriff:
    - towny.command.town.jail
    - towny.command.town.unjail
    - towny.command.town.jail.list
    - towny.outlaw.jailer
  
# This section of permissions covers players who are members of any town in a nation.
nations:
  
  # All nation members get these permissions.
  default:
  - towny.command.nation.online
  - towny.command.nation.deposit
  - towny.command.nation.spawn
  - towny.nation.spawn.nation
  - towny.nation.spawn.ally
  - towny.town.spawn.nation
  - towny.town.spawn.ally
  - towny.chat.nation
  - towny.chat.alliance
  
  # Kings get these permissions in addition to the default set.
  king:
  - towny.command.nation.*
  - towny.command.nation.deposit.other
  ranks:
    assistant:
    - towny.command.nation.rank.helper
    - towny.command.nation.invite.add
    - towny.command.nation.ally.*
    - towny.command.nation.enemy
    - towny.command.nation.deposit.other
    helper:
    - towny.command.nation.add

```