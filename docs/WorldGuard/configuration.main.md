# 配置

WorldGuard 的许多功能都存在于配置文件的设置中（例如禁用药水、头戴南瓜是否开启潜水模式等）。每个可用的配置项都可以在这个页面中找到。

## 配置文件

只要你安装了 WorldGuard 并至少启动过一次，你就可以在 **plugins/WorldGuard** 文件夹下找到这个主配置文件：

* `config.yml`

对于每一个世界，你又可以找到分世界的配置文件：

* `worlds/world/config.yml`
* `worlds/world_nether/config.yml`
* `worlds/mining_world/config.yml`

如果你打开了分世界配置文件，里面显示的内容几乎是空的。当你想要覆盖一个世界的设置的时候，你就需要把它们放进分世界的配置文件中。

::: info 示例：按世界创建配置选项
在主配置文件中，你将 `block-creeper-block-damage` 设置为了 true：
```YAML
mobs:
    block-creeper-explosions: false
    block-creeper-block-damage: true
    block-wither-explosions: false
```
但是你想要在下界把这个设置成 `false`。所以你需要打开 `worlds/world_nether/config.yml` 并将文件的内容替换为：
```YAML
mobs:
    block-creeper-block-damage: false
```
上级键和其下的设置只需按这样复制即可。


## 设置

::: tip 注意
此处选项仅作参考，你应优先修改 `config.yml` 中的设置，因为其中一些选项可能需要在其他地方再次设置。
:::

|设置|默认值|描述|
|---|---|---|
|op-permissions|TRUE|决定 OP 玩家是否给予所有 WorldGuard 的权限，即使权限插件没有为这些玩家分配这些对应权限。|
|summary-on-start|TRUE|在服务器启动时显示每个世界的 WG 设置。这会让控制台刷屏且应当在你有很多世界时禁用。|
|auto-invicible|FALSE|给予玩家 `worldguard.auto-invicible` 权限，使其上线时无敌。|
|auto-invicible-group|FALSE|使 `wg-invicible` 权限组内的玩家上线时无敌。|
|auto-no-drowning-group|FALSE|使 `wg-amphibious` 权限组内的玩家上线时无法被淹死。|
|use-player-move-event|TRUE|是否允许 WorldGuard 使用少量 CPU 来计算玩家移动事件。若要使用 healing（治疗）、feeding（饱食）、greeting（欢迎标语）和部分其他的区域标志，则该项必须启用。|
|use-player-teleports|TRUE|是否在计算玩家位置的时候考虑传送。该项在你使用玩家移动事件或任意需要检测移动事件的标志时应当保持开启。|
|use-particle-effects|TRUE|是否在操作被阻止时显示粒子效果。|
|disable-permission-cache|FALSE|WorldGuard 会在查询权限时调用先前的缓存以加快判断结果，在使用检查性能差的权限插件时相当有用。如果你在使用现代的权限插件情况下使用缓慢权限更新时遇到问题，请将该选项设置为 `TRUE`。|
|custom-metrics-charts|TRUE|将部分信息上传至 [bStats](https://bstats.org/plugin/bukkit/WorldGuard/3283)|
|host-keys||玩家可以连接至服务器的来源域名。见“域名秘钥”章节。|

### security.*

|设置|默认值|描述|
|---|---|---|
|deop-everyone-on-join|FALSE|在玩家上线时自动清除其 OP 状态。|
|block-in-game-op-command|FALSE|禁用游戏内的 /op 命令。|
|host-keys-allow-forge-clients|FALSE|允许玩家通过[域名密钥](configuration.host-keys.md)进入时使用 Forge 客户端。|

### build-permission-nodes.*

|设置|默认值|描述|
|---|---|---|
|enable|FALSE|通过权限限制服务器上玩家的建筑权限。见“建筑权限”章节。|
|deny-message|`"&eSorry, but you are not permitted to do that here."`|考虑到建筑由权限控制，这条消息会在玩家没有权限时发送。如果没有设置，那么将会使用默认消息。|

### event-handling.*

|设置|默认值|描述|
|---|---|---|
|block-entity-spawns-with-untraceable-cause|FALSE|Bukkit 不总是告诉插件实体生成的具体原因，这也许可以让玩家绕过保护来生成实体（比如通过刷怪蛋）。这个选项就用于阻止生成那些不能找到确切生成理由的实体。非常推荐关闭该项，因为事实上生成原因未知的实体占据了很大一部分。|
|interaction-whitelist|[]（列表）|一个包括方块种类的列表，列表中的方块将不会受到保护。例如，如果箱子被添加至这个列表，那么它们就永远不会被区域保护。该设置在非原版行为（由其他插件或模组添加）且你不想阻止玩家与其的正常交互时会相当有用。|
|emit-block-use-at-feet|[]（列表）|一个包括物品种类的列表，在玩家使用列表中的物品时，插件也会要求玩家拥有修改脚下方块的权限。该设置在某些插件或模组使用弹射物（可能会影响世界）但没有和 WorldGuard 测试权限时会相当有用。尽管这是一个治标不治本的方法，因为玩家仍然可以站在保护区域外对着保护区域内的方块使用，使这些弹射物进入保护区域并造成破坏。|
|ignore-hopper-item-move-events|FALSE|禁用保护传输物品并在容器之间交互的漏斗。这可以设置成 true 以略微提高服务器效率，尤其是有大量放置的漏斗的服务器，但是需要注意的是它可以允许保护区域外的漏斗向保护区域内的其他容器传递物品，只要它们足够靠近边界。|
|break-hoppers-on-denied-move|TRUE|如果一个漏斗尝试传递一个物品并被拒绝（只需上一条设置为 false），WorldGuard 将会尝试摧毁这个漏斗方块来阻止它继续传递相似的物品。|

::: info 示例：禁用区域内工作台的保护
可以按如下格式设置 `interaction-whitelist` 项：
```YAML
interaction-whitelist: [workbench]
```
:::

### protection.*

|设置|默认值|描述|
|---|---|---|
|item-durability|TRUE|设置为 `false` 使得物品永远不会损坏。|
|remove-infinite-stacks|FALSE|删除拥有“无限”堆叠数量的物品，也就是那些堆叠数量小于 0 的物品（超过最大数量后变为负数）|
|disable-xp-orb-drops|FALSE|是否禁用经验球掉落。|
|use-max-priority-association|FALSE|是否管理非玩家交互，例如活塞，成为区域内拥有最高交互权限的“成员”。若设置为 `false`，则所有非玩家交互对应的权限为区域内普通成员，这意味着例如活塞，可以将方块从一个区域推到另一个区域（除非区域外有全局区域保护）。若设置为 `true` 活塞就不能这么做。|

### gameplay.*

|设置|默认值|描述|
|---|---|---|
|block-potions|[]（列表）|被禁用的药水列表。可用的药水种类可在 [Bukkit 文档](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)中找到。|
|block-potions-overly-reliably|FALSE|WorldGuard 是否需要严格阻止 *block-potions* 中提及的对应种类的药水。一般不需要设置此项，如果设置可能会误拦截其他种类的药水。|
|disable-conduit-effects|FALSE|是否禁用海洋之心给予的潮涌能量效果。|

::: info 示例：禁用夜视和速度药水
在 Bukkit 文档找到的名称可以按如下方式填入：
```YAML
block-potions: [night_vision, speed]
```
:::

### simulation.sponge.*

::: warning
这部分配置默认不存在于文件中。这些内容已被标记为弃用，且可能在未来的某些时候移除。
:::

|设置|默认值|描述|
|---|---|---|
|enable|FALSE|是否模拟 Minecraft Classic 中的海绵方块行为。在 Minecraft 生存模式和 Minecraft 1.8 的介入之前，海绵是不会吸水的，这个选项已经过时且不建议启用。|
|radius|3|海绵吸水的半径。|
|redstone|FALSE|红石是否可以控制海绵的吸水性。|

### default.*

|设置|默认值|描述|
|---|---|---|
|pumpkin-scuba|FALSE|头戴雕刻南瓜的玩家（不是南瓜灯）是否拥有水下呼吸效果。|
|disable-health-regain|FALSE|是否禁用生命值的自动回复。|

### physics.*

|设置|默认值|描述|
|---|---|---|
|no-physics-gravel|FALSE|砂砾是否不受重力影响。|
|no-physics-sand|FALSE|沙子是否不受重力影响。|
|vine-like-rope-ladders|FALSE|普通梯子是否表现得像绳梯一样，只要最上方的方块处于合理的位置（例如贴在墙壁上），下方的方块即使悬空也不会被破坏。|
|allow-portal-anywhere|FALSE|是否允许传送门方块出现在非法的位置。|
|disable-water-damage-blocks|[]（列表）|列表中填入的方块将不会被水冲毁。|

::: info 示例：阻止红石线和红石火把被水冲毁
材料名称取自 Bukkit 的材料名称列表：
```YAML
physics:
    disable-water-damage-blocks: [redstone_wire, redstone_torch]
```
:::

### ignition.*

|设置|默认值|描述|
|---|---|---|
|block-tnt|FALSE|是否允许 TNT 的爆炸。|
|block-tnt-block-damage|FALSE|是否禁止 TNT 的爆炸破坏方块。|
|block-lighter|FALSE|是否禁用打火石。|

### fire.*

|设置|默认值|描述|
|---|---|---|
|disable-lava-fire-spread|FALSE|决定岩浆是否会引燃附近的方块。|
|disable-all-fire-spread|FALSE|决定火焰是否可以传播。|
|disable-fire-spread-blocks|[]（列表）|列表中的方块将不会被点燃，至少不会因燃烧被破坏。|
|lava-spread-blocks|[]（列表）|若设置（作一个方块种类的列表），除了空气外，岩浆可流经的方块只能是该列表中的。|

### mobs.*

|设置|默认值|描述|
|---|---|---|
|block-creeper-explosions|FALSE|是否禁用苦力怕的爆炸效果。|
|block-creeper-block-damage|FALSE|是否禁用苦力怕的爆炸破坏效果。|
|block-wither-explosions|FALSE|是否禁用凋灵的爆炸效果。|
|block-wither-block-damage|FALSE|是否禁用凋灵的爆炸破坏效果。|
|block-wither-skull-explosions|FALSE|是否禁用发射的凋灵骷髅头爆炸效果。|
|block-wither-skull-block-damage|FALSE|是否禁用发射的凋零骷髅爆炸破坏效果。|
|block-enderdragon-block-damage|FALSE|是否禁用末影龙的方块破坏效果。|
|block-enderdragon-portal-creation|FALSE|是否禁用末影龙死后产生传送门的效果。|
|block-fireball-explosions|FALSE|是否禁用火球的爆炸效果。|
|block-fireball-block-damage|FALSE|是否禁用火球的爆炸破坏效果。|
|anti-wolf-dumbness|FALSE|狼在某些情况下是否无敌。包括但不限于走入岩浆和卡在方块中。当狼被第一次介绍入游戏时，Minecraft 为狼制作的寻路 AI 非常拉胯以至于狼会经常走入岩浆或火中。但鉴于 Minecraft 中的生物 AI 仍有很多进步空间，这项仍然有不少用。|
|allow-tamed-spawns|FALSE|是否允许被驯服的生物（狼、马、猫等）生成。|
|disable-enderman-griefing|FALSE|是否禁用末影人拾起和放置方块的能力。|
|disable-snowman-trails|FALSE|是否禁用雪人生成雪片的能力。|
|block-painting-destroy|FALSE|是否禁用实体破坏挂画的能力。|
|block-item-frame-destroy|FALSE|是否禁用实体破坏物品展示框的能力。|
|block-armor-stand-destroy|FALSE|是否禁用非玩家实体破坏盔甲架的能力。|
|block-plugin-spawning|FALSE|在需要通过本插件保护世界时，通过插件生成的怪物是否需要被禁用。|
|block-above-ground-slimes|FALSE|是否禁止史莱姆在地表生成。|
|block-other-explosions|FALSE|是否禁用其他的爆炸事件。|
|block-zombie-door-destruction|FALSE|是否禁用僵尸破门的能力。|
|block-vehicle-entry|FALSE|是否阻止实体乘坐载具（如矿车、船等）。|
|block-creature-spawn|[]（列表）|不应生成的实体列表。|


### player-damage.*

|设置|默认值|描述|
|---|---|---|
|disable-fall-damage|FALSE|是否阻止玩家受到摔落伤害。|
|disable-lava-damage|FALSE|是否阻止玩家受到岩浆伤害。|
|disable-fire-damage|FALSE|是否阻止玩家受到火焰伤害。|
|disable-lightning-damage|FALSE|是否阻止玩家受到雷电伤害。|
|disable-drowning-damage|FALSE|是否阻止玩家受到溺水伤害。|
|disable-suffocation-damage|FALSE|是否阻止玩家受到窒息伤害。|
|disable-contact-damage|FALSE|是否阻止玩家受到接触伤害（如仙人掌）。|
|teleport-on-suffocation|FALSE|是否在玩家卡在方块中时将玩家传送到其他位置（通常为正上方）。该选项可能会导致玩家可以通过水平的屏障。|
|disable-void-damage|FALSE|是否阻止玩家受到虚空（掉入世界底部所受的）伤害。|
|teleport-on-void-falling|FALSE|是否将坠入虚空的玩家传送至安全地点（如果有的话）。该功能对驱逐误入虚空的玩家很有用。|
|reset-fall-on-void-teleport|FALSE|传送出虚空后是否重置摔落高度。如果将该项关闭很可能会导致玩家摔死（但是至少如果会掉落背包中的物品的话，不会掉在虚空里）。|
|disable-explosion-damage|FALSE|是否阻止玩家受到爆炸伤害。|
|disable-mob-damage|FALSE|是否阻止玩家被其他实体攻击。|
|disable-death-messages|FALSE|是否禁用玩家的死亡消息。|


### crops.*

|设置|默认值|描述|
|---|---|---|
|disable-creature-trampling|FALSE|禁用生物踩踏对耕地的破坏。|
|disable-player-trampling|FALSE|禁用玩家踩踏对耕地的破坏。|

### turtle-egg.*

|设置|默认值|描述|
|---|---|---|
|disable-creature-trampling|FALSE|禁用生物踩踏对海龟蛋的破坏。|
|disable-player-trampling|FALSE|禁用玩家踩踏对海龟蛋的破坏。|

### sniffer-egg.*

|设置|默认值|描述|
|---|---|---|
|disable-creature-trampling|FALSE|禁用生物踩踏对嗅探兽蛋的破坏。|
|disable-player-trampling|FALSE|禁用玩家踩踏对嗅探兽蛋的破坏。|

### weather.*

|设置|默认值|描述|
|---|---|---|
|prevent-lightning-strike-blocks|[]（列表）|不会被雷击中的方块列表。|
|disable-lightning-strike-fire|FALSE|是否禁用雷击产生的火焰。|
|disable-thunderstorm|FALSE|是否禁用雷暴天气。|
|disable-weather|FALSE|是否完全禁用雨天（包括雷暴天）。|
|disable-pig-zombification|FALSE|是否禁用猪受雷击转化为僵尸猪灵的机制。|
|disable-villager-witchification|FALSE|是否禁用村民受雷击转化为女巫的机制。|
|disable-powered-creepers|FALSE|是否禁用苦力怕被雷击后生成充能苦力怕的机制。|
|always-raining|FALSE|天气锁定在下雨状态。|
|always-thundering|FALSE|天气锁定在雷暴状态。|

### dynamics.*

|设置|默认值|描述|
|---|---|---|
|disable-mushroom-spread|FALSE|是否禁用蘑菇的蔓延。|
|disable-ice-melting|FALSE|是否禁用冰的融化。|
|disable-snow-melting|FALSE|是否禁用雪的融化。|
|disable-snow-formation|FALSE|是否禁用雪的生成。|
|disable-ice-formation|FALSE|是否禁用冰的生成。|
|disable-leaf-decay|FALSE|是否禁用树叶的腐烂。|
|disable-grass-growth|FALSE|是否禁用草方块的蔓延。|
|disable-mycelium-spread|FALSE|是否禁用菌丝的蔓延。|
|disable-vine-growth|FALSE|是否禁用藤蔓生长。|
|disable-rock-growth|FALSE|是否禁用石柱类方块（如滴水石柱）的生长。|
|disable-sculk-growth|FALSE|是否禁用幽匿块及其变种的蔓延。|
|disable-crop-growth|FALSE|是否禁用作物的生长。|
|disable-soil-dehydration|FALSE|是否禁用耕地脱水的机制（离开水源的耕地方块会重新变干）。|
|disable-coral-block-fade|FALSE|是否禁用珊瑚方块的枯萎。|
|disable-copper-block-fade|FALSE|是否禁用铜块的氧化。|
|snow-fall-blocks|[]（列表）|若设置（为一个包含方块的列表），则雪只能生成在这些方块上。|

### chest-protection.*

::: warning
这些设置默认不处于配置文件中。这些功能被标记为弃用，且可能在未来被移除。
:::

|设置|默认值|描述|
|---|---|---|
|enable|FALSE|是否启用箱子保护功能。|
|disable-off-check|TRUE|即使关闭箱子保护功能，WorldGuard 也仍然会保护那些带有包含文本 `[Lock]` 的告示牌的箱子，这可以使保护机制启用后，玩家不会恶意锁定其他玩家的箱子。若将该选项设置为 `true`，则箱子保护将不会激活。|


### blacklist.*

|设置|默认值|描述|
|---|---|---|
|use-as-whitelist|FALSE|是否翻转[黑名单](blacklist.md)的功能，即将该项设置为 true 后，只有在该列表上的物品才可使用。|

### blacklist.logging.*

这个设置决定了黑名单内的“日志”操作。几个日志记录的目标内容可以按需分别启用。

|设置|默认值|描述|
|---|---|---|
|console:|||
|enable|TRUE|是否启用将日志输出到控制台的功能。|
|database:|||
|enable|FALSE|是否启用将日志存储至数据库的功能。|
|dsn|`jdbc:mysql://localhost:3306/minecraft`|连接至数据库的字符串。`minecraft` 处应当替换为数据库的名称。|
|user|root|连接至数据库所使用的用户名。|
|pass||连接至数据库所使用的密码。|
|table|blacklist_events|所使用的数据库表名。|
|file:|||
|enable|FALSE|是否启用将日志记录至文件的功能。|
|path|worldguard/logs/%Y-%m-%d.log|存储文件的路径及日志文件的格式。|
|open-files|10|处理文件时打开的最大文件数量（文件处理由操作系统完成）。|

### regions.*

::: tip    
你不能在分世界的配置文件中覆盖 `use-creature-spawn-event` 的设置。
:::

|设置|默认值|描述|
|---|---|---|
|wand|minecraft:leather|右键方块查询区域信息的工具。默认情况下，该物品为皮革。在这之前是线，但 Minercraft 在之后的版本中为线添加了功能。|
|disable-bypass-by-default|FALSE|是否默认禁用绕过权限功能。|
|announce-bypass-status|FALSE|是否在登录时提醒 `/region bypass` 的消息提示。|
|invincibility-removes-mobs|FALSE|当玩家在设置了无敌（invincibility）标志的区域内受到实体的攻击，是否将该实体从世界中删除。|
|fake-player-build-override|TRUE|以字符 `[` 开头，以字符 `]` 结尾的玩家是否可以绕过所有保护。该选项的出现是因为某些第三方插件和模组需要用到“假玩家”实体以正常工作。|
|explosion-flags-block-entity-damage|TRUE|启用后，不同的 `-explosion` 区域标志也会阻止实体的攻击。|
|high-frequency-flags|FALSE|是否处理频繁出现的事件例如火焰传播或流体流动（`fire-spread`、`water-flow` 和 `lava-flow`）。该项设置默认禁用，是因为上述所提到的标志很少使用，且启用该功能后可能会造成服务器的卡顿（尤其是玩家数量和区域数量较多的时候）|
|protect-against-liquid-flow|FALSE|在区域之间的流体流动是否需要禁用。该选项可以防止玩家在其他区域上方倒水或岩浆来破坏领地。若要使用该项，你需要先启用上方的 `high-frequency-flags` 设置。|
|use-paper-entity-origin|FALSE|在使用 Paper 服务端时，该选项会将出生于对应区域的实体当做该区域的成员，而不是它们当前所处位置。这会防止那些跑进其他区域的实体被击杀。（需要注意的是这与以玩家为敌对目标的实体不同——那些实体仍然取决于玩家的权限而不是它们本身。）|
|max-claim-volume|30000|通过自助式区域认领功能获得的区域所可以包含的最大方块数量。|
|claim-only-inside-existing-regions|FALSE|决定玩家是否只能认领已有的区域。|
|cancel-chat-without-recipients|FALSE|若发出的聊天消息没有接收者（如处于 `receive-chat` 设置为 `deny` 的区域），是否阻止消息的发出。将该项功能启用可能会影响外部消息的传递（如 Discord 消息同步）。|
|nether-portal-protection|TRUE|是否锁定任何传送至受保护区域的传送门。|
|set-parent-on-claim||通过[自助区域认领](regions.claiming.md)创建的区域 ID，会被自动分配为[继承关系](regions.priority-and-inheritance.md#继承)|
|location-flags-only-inside-regions|FALSE|需要确认玩家位置的[标志](regions.region-flags.md)是否只在指定区域生效。|
|title-always-use-default-time|TRUE|如果你使用了区域的进入/离开标语，其他插件使得标题消失过快时，请开启该设置。|
|max-region-count-per-player:||玩家（通过自助式区域认领功能）可认领的最大区域数量。该设置可以按权限组进行区别，在该设置下有新条目被加入时即对应权限组可领取的数量也被相应设置（例如“default”，默认用户组）。“default”项为默认设置。如果玩家同时处于多个权限组中，那么玩家的所能认领的区域总数在这些值中取最大值而不是叠加。|
|default|7|（见上。）|

[!WARNING|label:警告]
此分类下也有一些额外的设置，但我们不推荐修改这些设置。

|设置|默认值|描述|
|---|---|---|
|enable|TRUE|是否开启自定义区域设置的功能。|
|use-creature-spawn-event|TRUE|实体的移动事件是否参与一些与实体有关的区域标志的处理。|


### regions.uuid-migration.*

这些设置用于从旧版本的 WorldGuard 迁移数据。在过去，Minecraft 账号纯粹只用玩家的名称区分，但在 Minecraft 1.7 快要结束的时候，Mincraft 转向了另一种通过“UUID”区分账号（内部）的系统，玩家可以*自由修改他们的名称*。然而，所有旧版的配置文件仍然通过玩家名称区分数据，所以下列设置可以启用一次对 UUID 在服务器启动时的迁移保护（该选项默认禁用）。

UUID 迁移可以重复进行（对配置文件也会进行频繁的更改）且它只会转化尚未转化为 UUID 的名称。如果已经没有旧格式的名称可供转化，那么转化过程什么事情都不会发生。

### regions.uuid-migration.*

::: tip
你不能分世界覆盖这些设置。

|设置|默认值|描述|
|---|---|---|
|perform-on-next-start|FALSE|是否在服务器下次重启时自动执行 UUID 迁移工作（仅一次）。若转化的配置文本尚未包含该设置，WorldGuard 默认会将该值设置为 `true` 并自动执行转化程序，随后将其设置为 `false`。|
|keep-names-that-lack-uuids|TRUE|有些时候，添加至区域的名称并不实际存在。该选项允许保留那些尚未被转化成区域数据的名称，这样稍后就可以删除它们或被重新转化（在配置文件中修改该部分配置的值来重新进行数据迁移）。|

### regions.sql.*

[!WARNING|label:警告]
这些设置默认不处于配置文件中。这些功能被标记为弃用，且可能在未来被移除。

::: tip
你不能分世界覆盖这些设置。

|设置|默认值|描述|
|---|---|---|
|use|FALSE|是否使用 MySQL 存储相关数据（见“数据存储”章节）。|
|dsn|`jdbc:mysql://localhost/worldguard`|用于数据库连接的字符串。`worldguard` 为数据库名称。|
|username|worldguard|连接至数据库所使用的用户名。|
|password|worldguard|连接至数据库所使用的密码。|
|table-prefix||数据库所使用的表名。|

## 分页面

* [域名秘钥](configuration.host-keys.md)
