# 命令列表

HuskHomes 提供了一系列你可使用的命令。本章节将会为列出所有命令及其对应权限，让你更好[控制玩家的访问内容](guides.managing-access.md)。

## 命令与权限表

::: info 提示
若你安装了多个命令相似的插件，你可能需要[创建命令别称](guides.command-conflicts.md#commandsyml-下的-huskhomes-命令别称)来让 HuskHomes 的命令能被优先执行。
:::

||解释|
|---|---|
|✅|玩家默认可用|
|❌|仅 OP 默认可用|

下为 HuskHomes 的命令列表，包含了对其的简单介绍以及所需的权限节点。绕过传送预热和传送扣费的权限也在下文一并标出。

||命令|描述|权限|默认状态|
|---|---|---|---|:---:|
|家传送点命令||||
|`/home`|`/home [名称]`|传送至你设置的家。|`huskhomes.command.home`|✅|
|`/home`|`/home [<玩家名称.家名称>]`|传送至其他玩家设置的家。|`huskhomes.command.home.other`|❌|
|`/homelist`|`/homelist [页码]`|列出你设置的所有家。|`huskhomes.command.homelist`|✅|
|`/homelist`|`/homelist <玩家名称> [页码]`|列出指定玩家设置的所有家。|`huskhomes.command.homelist.other`|❌|
|`/sethome`|`/sethome [名称]`|设置一个家传送点。|`huskhomes.command.sethome`|✅|
|`/delhome`|`/delhome [名称]`|删除你设置的家传送点。|`huskhomes.command.delhome`|✅|
|`/delhome`|`/delhome add [确认]`|删除你设置的所有家传送点。|`huskhomes.command.delhome`|✅|
|`/delhome`|`/delhome <玩家名称.家名称>`|删除其他玩家设置的家|`huskhomes.command.delhome.other`|❌|
|`/edithome`|`/edithome <名称>`|浏览或编辑家传送点的相关内容。|`huskhomes.command.edithome`|✅|
|`/edithome`|`/edithome <名称> rename <新名称>`|重命名指定的家传送点。|`huskhomes.command.edithome.rename`|✅|
|`/edithome`|`/edithome <名称> description <描述>`|为家传送点设置自定义描述。|`huskhomes.command.edithome.description`|✅|
|`/edithome`|`/edithome <name> relocate`|将家传送点所在的位置移动至你的当前位置。|`huskhomes.command.edithome.relocate`|✅|
|`/edithome`|`/edithome <名称> privacy [public(公开)|private(私有)]`|为家传送点设置开放状态（对外开放或设为私有）|`huskhomes.command.edithome.privacy`|✅|
|`/edithome`|`/edithome <玩家名称.家名称>`|浏览或编辑其他玩家的家传送点相关内容。|`huskhomes.command.edithome.other`|❌|
|`/phome`|`/phome [<玩家名称.家名称>]`|传送至指定的公开传送点。|`huskhomes.command.phome`|✅|
|`/phomelist`|`/phomelist [页码]`|浏览公开传送点列表。|`huskhomes.command.phomelist`|✅|
|地标命令||||
|`/warp`|`/warp [名称]`|传送至指定地标。|`huskhomes.command.warp`†|✅|
|`/warp`|`/warp <名称> <被操作玩家名称>`|将其他玩家传送至指定地标。|`huskhomes.command.warp.other`†|❌|
|`/warplist`|`/warplist [页码]`|浏览地标传送点列表。|`huskhomes.command.warplist`†|✅|
|`/setwarp`|`/setwarp <名称>`|创建一个新的地标。|`huskhomes.command.setwarp`|❌|
|`/delwarp`|`/delwarp <名称>`|删除指定的地标。|`huskhomes.command.delwarp`|❌|
|`/editwarp`|`/esitwarp <名称>`|浏览并编辑地标的有关内容。|`huskhomes.command.editwarp`|❌|
|`/editwarp`|`/editwarp <名称> rename <新名称>`|重命名指定地标。|`huskhomes.command.editwarp.rename`|❌|
|`/editwarp`|`/editwarp <名称> description <描述文本>`|设置地标的描述文本。|`huskhomes.command.editwarp.description`|❌|
|`/editwarp`|`/editwarp <名称> relocate`|将地标传送点所在位置移动到你的当前位置。|❌|
|主城命令||||
|`/tp`|`/tp <目标玩家>`|传送到其他玩家的位置。|`huskhomes.command.tp`|❌|
|`/tp`|`/tp <玩家名称> <目标玩家>`|将指定玩家传送至目标玩家的位置。|`huskhomes.command.tp.other`|❌|
|`/tp`|`/tp <(x) (y) (z) [水平视角] [仰角] [世界名称] [服务器名称]>`|传送至指定位置。|`huskhomes.command.tp.coordinates`|❌|
|`/tp`|`/tp <玩家名称> <坐标>`|将指定玩家传送至其他位置。|`huskhomes.command.tp.other`<br>`huskhomes.command.tp.coordinates`|❌|
|`/tphere`|`/tphere <玩家名称>`|将指定玩家传送至你的位置。|`huskhomes.command.tphere`|❌|
|`/tpoffline`|`/tpoffline <玩家名称>`|传送至指定玩家最后离线所处的位置。|`huskhomes.command.tpoffline`|❌|
|`/tpall`|`/tpall`|将所有玩家传送至你的位置。|`huskhomes.command.tpall`|❌|
|请求传送命令|||||
|`/tpa`|`/tpa <玩家名称>`|向指定玩家发出传送邀请。|`huskhomes.command.tpa`|✅|
|`/tpahere`|`/tpahere <玩家名称>`|请求指定玩家传送到你的位置。|`huskhomes.command.tpahere`|✅|
|`/tpaall`|`/tpaall`|向所有玩家发出传送到你的位置的请求。|`huskhomes.command.tpaall`|❌|
|`/tpaccept`|`/tpaccept`|接受你最后收到的传送请求。|`huskhomes.command.tpaccept`|✅|
|`/tpaccept`|`/tpaccept [玩家名称]`|接受指定玩家向你发送的传送请求。|`huskhomes.command.tpaccept`|✅|
|`/tpdecline`|`/tpdecline`|拒绝你最后收到的传送请求。|`huskhomes.command.tpdecline`|✅|
|`/tpdecline`|`/tpdecline [玩家名称]`|拒绝指定玩家向你发送的的传送请求。|`huskhomes.command.tpdecline`|✅|
|`/tpignore`|`/tpignore`|设置是否忽略所有传送请求。|`huskhomes.command.tpignore`|✅|
|随机传送命令|||||
|`/rtp`|`/rtp`|在世界内随机传送。|`huskhomes.command.rtp`|✅|
|`/rtp`|`/rtp <玩家名称>`|将指定用户在世界内随机传送。|`huskhomes.command.rtp.other`|❌|
|`/rtp`|`/rtp <玩家名称> <世界名称>`|将指定用户在指定世界内随机传送。|`huskhomes.command.rtp.world`|❌|
|返回传送命令|||||
|`/back`|`/back`|传送至你的上一个位置（见下）|`huskhomes.command.back`|✅|
|`/back`|`/back`|传送至你上一个被传送到的位置|`huskhomes.command.back.previous`|✅|
|`/back`|`/back`|传送至你上一次的死亡地点|`huskhomes.command.back.death`‡|✅|
|插件管理命令|||||
|`/huskhomes`|`/huskhomes`|使用插件管理命令。|`huskhomes.command.huskhomes`|✅|
|`/huskhomes`|`/huskhomes about`|浏览插件的关于信息。|`huskhomes.command.huskhomes.about`|✅|
|`/huskhomes`|`/huskhomes help [页码]`|浏览启用的插件命令列表。|`huskhomes.command.huskhomes.help`|✅|
|`/huskhomes`|`/huskhomes update`|检查插件更新。|`huskhomes.command.huskhomes.update`|
|`/huskhomes`|`/huskhomes reload`|重载插件语言文本和配置文件。|`huskhomes.command.huskhomes.reload`|
|`/huskhomes`|`/huskhomes import`|从其他插件导入数据。|`huskhomes.command.huskhomes.import`|
|`/huskhomes`|`/huskhomes delete player <玩家名称> [确认操作]`|从系统数据库中删除指定玩家的所有家传送点。|`huskhomes.command.huskhomes.delete`|❌|
|`/huskhomes`|`/huskhomes delete homes <世界名称> [服务器名称] [确认操作]`|删除指定世界和/或服务器上的所有家传送点。|`huskhomes.command.huskhomes.delete`|❌|
|`/huskhomes`|`/huskhomes delete warps <世界名称> [服务器名称] [确认操作]`|删除指定世界和/或服务器上的所有地标传送点。|`huskhomes.command.huskhomes.delete`|❌|
|`/huskhomes`|`/huskhomes status`|浏览服务器调试信息界面。|`huskhomes.command.huskhomes.status`|❌|

### 注释

† — 若使用了通过权限限制的地标传送，玩家仍需要 `huskhomes.command.warp.(地标名称)` 才可以浏览或传送至地标位置。

‡ — 需要在 [`config.yml`](setup.config-files.md) 中将 return_by_death 项启用后才可使用。

### 命令别称

下列命令有一些便于使用的别称：

|命令名称|命令别称|
|---|---|
|`/homelist`|`/homes`|
|`/phome`|`/publichome`|
|`/phomelist`|`/phomes`、`/publichomelist`|
|`/warplist`|`/warps`|
|`/tp`|`/tpo`|
|`/tpaccept`|`/tpyes`|
|`/tpdecline`|`/tpno`、`/tpdeny`|

## 禁用命令

若你需要禁用一条命令，可以在配置文件下该部分中 `disabled_commands` 处添加对应的命令，这样做它就不会被注册。

### 在 config.yml 中禁用命令

```YAML
# 被禁用的命令 (例: ['/home', '/warp'] 的设置会禁用 /home 和 /warp 两条命令)
disabled_commands: [ '/rtp' ]
```

## 家传送点限制

你可以通过权限节点修改玩家能够创建的家最大数量、免费创建的家数量以及开放家传送点的数量。

* `huskhomes.max_homes.<数量>` — 决定了玩家可以设置的家传送点数量上限
* `huskhomes.free_homes.<数量>` — 决定了玩家可免费设置的家传送点数量，在此之后设置的所有家传送点都需要付费†
* `huskhomes.max_public_homes.<数量>` — 决定了玩家可开放的最大家传送点数量

† 仅对启用了经济联动的服务器有效。

若玩家拥有多个权限节点（例如在多个权限组中），HuskHomes 默认使用数量最大的权限节点。若你需要让这些权限*叠加生效*，你可以将配置文件中的 `stack_permission_limits` 设置为 `true`（该设置在 `general` 部分）。

需要注意的是通过权限分配的上限会覆盖配置文件中为玩家设置的值（`max_homes`、`general` 下的 `max_public_homes` 和 `economy` 下的 `free_homes`）。

## 传送预热时间

你可以通过权限节点修改传送预热时间：

* `huskhomes.teleport_warmup.<时间秒数>` - 决定玩家在传送前需要原地站定多久。

HuskHomes 会在相同权限中取数值设置最大者生效，且忽略 `stack_permission_limits` 的值。

## 绕过权限节点

这些权限可以让你绕过传送预热、传送冷却和传送收费。

|描述|权限节点|默认状态|
|---|---|---|
|绕过传送预热†|`huskhomes.bypass_teleport_warmup`|未设置|
|绕过[传送冷却检查](features.cooldowns.md)|`huskhomes.bypass_cooldowns`|未设置|
|绕过[传送扣费检查](features.economy-hook.md)|`huskhomes.bypass_economy_checks`|未设置|

† 在配置文件中的传送预热设置为 `<= 0` 的值时无效。