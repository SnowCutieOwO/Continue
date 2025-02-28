# 区域标志

区域可以设置相应的标志。他们之中的一些用法参照下表：

* 通过 `pvp` 标志阻止玩家 PVP；
* 通过 `entry` 标志禁止玩家进入区域；
* 通过 `snow-melt` 标志禁止区域内的积雪融化；
* 通过 `receive-chat` 标志禁止玩家接收聊天消息；
* 通过 `vine-growth` 标志禁止区域内的藤蔓生长。

一个区域可同时拥有多个不同的标志，但有些标志只能设置一个值。标志可以通过 `/region flag`（或其缩写 `/rg flag`） 命令设置，下文是设置“spawn”和“hospital”的标志的示例：

```
/region flag spawn pvp deny
/region flag spawn greeting Welcome to spawn!
/rg flag hospital heal-amount 2
/rg flag hospital heal-delay 1
```

通过不指定标志的值来将它的状态重置：

```
/rg flag spawn pvp
```

通过“flags”命令列出已设置的标志列表：

```
/rg flags spawn
```

命令的输出在游戏内是可以交互的。在对应的值上点击可以修改它们的值，底部的箭头按钮则可以翻页。

[[toc]]

## 区域组

有些时候，有些标志可能只需要对某些特定的玩家而不是所有人使用。那么这时候就需要在设置标志时使用可选的“区域组”。

区域组描述了玩家是否为区域的（非）成员。它们由 WorldGuard 在内部处理，并完全与权限组无关。

默认存在以下这些区域组：

|区域组|描述|
|---|---|
|all|所有玩家|
|members|成员|
|owners|区域拥有者|
|nonmembers|除区域成员外的所有人|
|nonowners|除区域拥有者外的所有人|


区域组可以通过 `-g` 设置，如下所示：
```/region flag spawn -g nonmembers pvp deny```

**不可能**在不同区域组内为同一个标志设置不同的值。如果你需要这个功能的话，考虑将多个区域重叠在一起。

::: tip 注意
当有多个重叠的区域时，玩家必须为*设置标志*的区域*或其子区域*的成员之一（当涉及区域权限继承功能时）。这个会在之后的“优先级与继承”章节提及。
:::

::: tip
`entry` 和 `exit` 标志默认是对“非区域成员”限制的，这意味着将这些标志的值设置为“deny”会阻止非成员的玩家进入区域。`spawn` 位置标志默认对“区域成员”限制的，这意味着只有该区域的成员才可使用该功能。`nonplayer-protection-domains` 标志默认不对任何权限组限制。所有其他由 WorldGuard 提供的标志默认对“所有人”进行限制。
:::

## 标志种类

每一个标志都有对其参数种类的限制，决定了该参数将需要什么样的值。例如，标志 `heal-amount` 是一个整数标志，这意味着在为这个标志设置值时你只能填入整数。

|标志种类|释义|
|---|---|
|state|状态，必须为“allow”或“deny”（后面会解释）|
|string|任意形式的文本|
|integer|整数（5 可以，但 5.5 不行）|
|double|任意小数（5、5.5、2.425 等）|
|location|世界中的指定位置|
|boolean（布尔值）|必须为“true”或“false”|
|set|一个包含不重复内容的列表

还有其他的一些标志，但这些内容总体上不应被考虑。

::: tip
大多数字符串标志都会接受 `\n` 作为换行符（例如，通过 `greeting`/`farewell` 向玩家发送多行文本，或是一个通过 `greeting-title` 和 `farewell-title` 设置的正副标题）。
:::

它们也接受颜色代码，不论是旧版本 `&[0-9a-f]` 的格式还是新版本 `[RrYyGgCcBbPp012w]` 等表示暗红、红色、暗黄、黄色等的格式，也接受 `[&``][klmnox]` 等格式的乱码、粗体、删除线、下划线和斜体文本。

它们也支持嵌入内建变量，例如 `%name%` 可以表示玩家名称，`%world%` 表示世界名称，`%online%` 表示在线玩家数量，`%id%` 表示玩家 UUID，`%health%` 表示玩家当前生命值。

::: info 示例：使用字符串的格式设置
设置出生点的 `greeting-title` 标志，向进入区域的玩家发送花里胡哨的欢迎消息：
```
/rg flag spawn greeting-title `bWelcome to spawn!\n`YEnjoy your stay in `g`n%world%`x, `C%name%`Y!
```
:::

## 冲突标志

有些时候，一个位置上可能存在多个设置了不同值的标志的重叠区域。下列规则用于决定哪些值会被选中：

* **如果**区域尚未设置对应值，那么它将会从它的父区域继承标志的值。（需要注意的是 `build` 在默认情况下对成员自动设置。）
* 更高优先级的区域标志将会覆盖低优先级区域的标志值。
* 全局区域和其他区域相同，但它的优先级是最低的。

尽管如此，还是有可能在这些过程之后产生冲突的标志值。假设这里有两个不同的区域，且有着一样的优先级。此时，标志的值取决于它们的种类：

* 对 state（状态） 类型的标志，若设置 `deny`，最终的值仍是 `deny`，若设置 `allow`，则最终的值是 `allow`。
* 对于其他种类的标志，结果不固定。因此，不能也不建议在重叠且优先级相同的区域中设置两条不同的欢迎/离开信息。

## 标志的默认值

标志拥有默认值，如果在没有对操作进行影响的区域为区域组设置标志，就会优先使用默认值。例如，如果没有设置 `item-pickup` 标志，WorldGuard 默认会允许这种行为。你可以通过上文提及的“flags”（译者注：/rg flags 区域）命令查看这个标志的默认值。状态标志的默认值也可以是允许（allow），或者不设置值。在大部分情况下，所有有关区域保护的标志，例如下文列出的那些，都是没有默认值的。但 `build` 标志除外，它相对特殊。它的默认值取决于区域的隶属关系，通常都是自动设置的，如果没有自动设置，那么优先级最高的区域将会影响建筑操作。这就是非成员默认不能建造而成员和拥有者可以的原因。所有与保护相关的标志都与 build 标志串联检查。因此 build 标志返回的值即是该区域默认的行为。

::: tip
大多数时间你不需要设置任何标志。你应该只需要在改变默认设置或覆盖其他区域设置的标志时才进行修改。尤其不要设置与区域保护相关的标志来完全保护或完全解除某片区域的保护。应当使用成员归属关系或者 `passthrough` 标志进行设置。
:::

## 标志设置

标志被分为下面几个大类。

### 覆写

|标志|种类|描述|
|---|---|---|
|passthrough|state（状态）|这个标志是“passthrough build”的缩写，它和移动没有任何关系。<br>如果没有设置**（默认）**，那么区域会保护其中的方块；<br>如果设置为 `deny`，那么区域会保护其中的方块；<br>如果设置为 `allow`，那么区域不再会保护其中的方块。<br>这个标志是干什么用的？<br>在你使用其他标志（例如 PVP、治疗标志等）且你不想要阻止玩家的建筑行为；<br>为什么不把 `build` 标志设置为 `allow`（稍后解释）呢？这会覆盖其他区域的设置并允许玩家进行建筑！|
|nonplayer-protection-domains|state（状态）|非玩家来源内容，例如活塞，通常是所有区域内的成员，或者只是其中一个优先级最高区域的成员，而在全局区域的情况下，则具体取决于 `use-max-priority-association` 配置文件中的设置。<br><br>区域的边界可以为非玩家来源通过 `nonplayer-protection-domains` 取消该设置。该标志是一个字符串的列表，描述区域各自所属的领域。如果一个非玩家来源是一个区域的成员，那么它也一定会是另一个同领域下区域的成员，只要这个领域内包含多于一个的区域。|

### 保护相关


|标志|种类|描述|
|---|---|---|
|build|state（状态）|对于全部玩家或方块：<br>方块是否可以被放置或破坏；<br>门、拉杆等（但不限制在容器中的）是否可以使用；<br>实体和方块是否可以交互；<br>是否允许 PVP；<br>是否允许在床上睡觉；<br>是否能打开容器；<br>是否能放置载具（船、矿车等）；<br>等等...|
|interact|state（状态）|包括所有能够“交互”的方块或实体：<br>门、拉杆等（但不限制在容器中的）是否可以使用；<br>载具（包括动物）是否可以骑乘；<br>等等...|
|block-break|state（状态）|方块是否可以被破坏|
|block-place|state（状态）|方块是否可以被放置|
|use|state（状态）|门、拉杆等（但不限制在容器中的）是否可以使用|
|damage-animals|state（状态）|是否能够攻击被动生物（牛、羊等）|
|chest-access|state（状态）|是否能打开容器|
|ride|state（状态）|载具（包括动物）是否可以骑乘|
|pvp|state（状态）|是否允许 PVP|
|sleep|state（状态）|是否允许在床上睡觉|
|respawn-anchors|state（状态）|是否允许激活重生锚|
|tnt|state（状态）|是否允许 TNT 爆炸破坏方块|
|vehicle-place|state（状态）|是否允许放置载具（船、矿车等）|
|vehicle-destroy|state（状态）|是否允许破坏载具|
|lighter|state（状态）|是否可以使用打火石或烈焰弹|
|block-trampling|state（状态）|耕地、乌龟蛋和嗅探兽蛋是否可以被破坏|
|frosted-ice-form|state（状态）|是否允许带有冰霜行者的玩家在水上产生临时的冰块|
|item-frame-rotation|state（状态）|物品是否可以在物品展示框中旋转|
|firework-damage|state（状态）|烟花是否可以对实体造成伤害|
|use-anvil|state（状态）|是否可以使用铁砧|
|use-dripleaf|state（状态）|是否可以使用（大型）垂滴叶|

::: warning
上述的这些标志都是指定玩家的。例如，`block-break` 标志，如果设置为 deny 的话，将会**禁止活塞推动或破坏方块**。

若要知晓原因，请考虑玩家可以从外界向领地内放置点燃的 TNT，或者玩家可以制作一个自走式活塞虫并以此进入其他人的领地。当这些操作是被玩家刻意触发的，找到建造 TNT 的玩家是非常困难的。无论如何，你还是需要保护主城以避免某些人使用 TNT 大炮轰炸主城。

一个错误的解决办法是直接阻止 TNT 大炮或者活塞。然而这两个东西在某些情况下还是有必要使用的。例如，TNT 大炮和活塞应该在区域*内*能够使用。

首先，成员是可以在区域内进行建造行为的：它**不是**玩家，而是**成员**。当我们考虑到活塞或 TNT 时应当一视同仁。WorldGuard 如何判断一个活塞机器或者 TNT 大炮时领地的成员？**如果它在区域内**，那它就是！

当你创建一个区域并没有设置任何标志时：
* 成员可以建筑；
* 非成员**不可以**建筑。
在区域内部的 TNT 大炮和活塞能正常工作，因为它们是该区域的“成员”。一个玩家，例如“张三”，不是这个区域的成员，是不能放置或破坏方块的。当你把张三添加为区域成员之后，他就可以进行建筑行为了。

当你设置保护标志的时候，你会覆盖此类行为。如果你将 `block-break` 设置为了 `deny`，那么即使是区域成员也无法破坏方块。张三也不能破坏方块。区域内的 TNT 也不能破坏方块。区域内的活塞也不能破坏方块。**但是你可以破坏活塞。**
这会带来两个问题：
* **我如何阻止玩家放置或破坏方块？** 什么都不需要做。不需要改变任何标志！记住，一个区域在默认情况下只有成员才可以破坏。
* **我如何将一个标志设置为只影响玩家？** 你也许是在说：我如何才能让一个标志只影响到区域的非成员？好吧，这很简单：使用区域组。
:::


### 生物、火焰与爆炸

::: tip
注意：如果 `build` 标志设置为了 `allow` 或者 `deny`，它仍然可以被其他的标志覆盖（例如 `block-break`、`interact` 等）。`build` 标志通过成员归属关系自动设置。
:::

|标志|种类|描述|
|---|---|---|
|creeper-explosion|state（状态）|苦力怕是否可以造成爆炸|
|enderdragon-block-damage|state（状态）|末影龙是否可以破坏方块|
|ghast-fireball|state（状态）|恶魂火球和凋灵的骷髅头是否可以造成爆炸|
|other-explosion|state（状态）|爆炸是否造成伤害|
|fire-spread|state（状态）|火焰是否可以蔓延|
|enderman-grief|state（状态）|末影人是否可以拾起/放置方块|
|snowman-trails|state（状态）|雪傀儡脚下是否会产生雪|
|ravager-grief|state（状态）|劫掠兽是否可以破坏方块|
|mob-damage|state（状态）|实体是否可以攻击玩家|
|mob-spawning|state（状态）|是否禁止实体的生成，包括玩家使用命令、刷怪蛋等方法生成的怪物，下 `deny-spawn` 同|
|deny-spawn|实体种类列表|禁止生成的实体列表，|
|entity-painting-destroy|state（状态）|非玩家来源是否可以破坏挂画|
|entity-item-frame-destroy|state（状态）|非玩家来源是否可以破坏物品展示框|
|wither-damage|state（状态）|凋灵是否可以造成伤害（比如刚生成时爆炸的伤害，而凋灵的骷髅头弹射物所造成的伤害则由上述的 ghast-fireball 控制）|

::: info 示例：阻止羊和猪在主城生成
实体种类必须在参数中指定：
```
/rg flag spawn deny-spawn cow,pig
```
:::

### 自然事件

|标志名称|种类|描述|
|---|---|---|
|lava-fire|state（状态）|岩浆是否可以在其附近生成火焰|
|lightning|state（状态）|是否允许雷击产生|
|water-flow|state（状态）|是否允许水流动|
|lava-flow|state（状态）|是否允许岩浆流动|
|snow-fall|state（状态）|是否允许下雪时在区域内生成雪片|
|snow-melt|state（状态）|区域内的雪是否会融化|
|ice-form|state（状态）|区域内的水是否会结冰|
|ice-melt|state（状态）|区域内的冰是否会融化|
|frosted-ice-melt|state（状态）|区域内的霜冰（冰霜行者产生的冰）是否会融化|
|mushroom-growth|state（状态）|是否允许区域内的蘑菇生长|
|leaf-decay|state（状态）|区域内的树叶是否会自然腐烂|
|grass-growth|state（状态）|区域内的草方块是否会蔓延|
|mycelium-spread|state（状态）|区域内的菌丝是否会蔓延|
|vine-growth|state（状态）|区域内的藤蔓（和海草）是否会生长|
|rock-growth|state（状态）|区域内的石头（如滴水石柱等）是否会生长|
|sculk-growth|state（状态）|区域内的幽匿块（和幽匿脉络）是否会蔓延|
|crop-growth|state（状态）|区域内的农作物（小麦、土豆、西瓜等）是否会生长|
|soil-dry|state（状态）|区域中的耕地是否会变干|
|coral-fade|state（状态）|区域中的珊瑚块脱水后是否会死亡|
|copper-fade|state（状态）|铜块是否会氧化|

::: warning
标志 `fire-spread`、`water-flow`、`lava-flow` 和 `lava-fire` 需要在配置文本中启用“高频标志”才可正常使用。这是因为这些事件的触发会非常频繁，也就需要更多对区域的检查，并潜在地降低服务器的运行效率（或者只是警告服务器的内存占用略微上升）。
:::

### 移动相关

|标志名称|种类|描述|
|---|---|---|
|entry|state（状态）|玩家（默认为非成员）是否可以进入该区域|
|exit|state（状态）|玩家（默认为非成员）是否可以离开该区域|
|exit-via-teleport|state（状态）|玩家是否可以通过传送离开该区域。<br><br>仅在玩家被禁止以正常方式离开区域时有效。|
|exit-override|boolean（布尔值）|是否总是允许玩家离开|
|entry-deny-message|state（状态）|禁止玩家进入区域发送的消息|
|exit-deny-message|state（状态）|禁止玩家离开区域发送的消息|
|notify-enter|boolean（布尔值）|拥有 `worldguard.notify` 权限的玩家将会在玩家进入区域时收到提示消息|
|notify-leave|boolean（布尔值）|拥有 `worldguard.notify` 权限的玩家将会在玩家离开区域时收到提示消息|
|greeting|state（状态）|进入区域时向玩家发送的消息|
|greeting-title|state（状态）|进入区域时向玩家发送的标题。使用换行符（`\n`）可发送一个子标题|
|farewell|state（状态）|离开区域时向玩家发送的消息|
|farewell-title|state（状态）|离开区域时向玩家发送的标题。使用换行符（`\n`）可发送一个子标题|
|enderpearl|state（状态）|是否允许在区域内使用末影珍珠|
|chorus-fruit-teleport|state（状态）|是否允许在区域内使用紫颂果传送|
|teleport|location|在玩家使用 `/region teleport` 传送至区域时，玩家固定出现在的地点|
|spawn|location|在区域内死亡的玩家（默认成员）重生的位置|
|teleport-message|state（状态）|输入命令 `/region teleport` 传送入区域内的玩家所发送的消息|

::: tip
正如上述，标志 `spawn` 仅对“成员”有效，这意味着只有该区域的成员才可使用这个功能。为标志设置区域组可以解决这个问题。
:::

::: tip
如果重叠的区域有相同的 `greeting` 和 `farewell` 参数，那么在这两个区域之间移动不会有任何提示消息。    
例如，如果你在已处于一个区域的基础上再进入其他区域，不会收到任何提醒消息。在更普遍的意义上讲，其他种类的移动，只要起始点和目标点不会变动，均是如此。
:::

::: warning
`greeting` 和 `farewell` 项需要配置文件中“使用玩家移动事件” 的设置**保持**开启。
:::

::: info 示例：阻止非成员进入名为“secret_club”的区域
因为进入标志默认对非成员生效，你无需在这里额外设置：
```
/rg flag secret_club entry -g nonmembers deny
```
:::

### 地图制作相关


|标志名称|种类|描述|
|---|---|---|
|item-pickup|state（状态）|区域内是否可以捡起物品|
|item-drop|state（状态）|区域内是否可以丢弃物品|
|exp-drops|state（状态）|区域内是否可以掉落经验值|
|deny-message|string（字符串）|被拒绝操作的玩家所收到的消息|
|invicible|state（状态）|区域内的玩家是否是无敌的|
|fall-damage|state（状态）|区域内的玩家是否受到摔落伤害|
|game-mode|gamemode（游戏模式）|在玩家进入区域所设定的游戏模式（survival 生存模式、creative 创造模式、adventure 冒险模式）|
|time-lock|string（字符串）|将进入区域后的时间锁定在一天内的指定时间（0-24000 刻）。使用 + 或 - 来表示相对时间|
|weather-lock|weather（天气种类）|在区域内玩家所见的天气。不影响世界实际天气。有效值为 `rain` 和 `clear`|
|natural-health-regen|state（状态）|玩家是否允许在和平模式或吃饱后回复生命值。|
|natural-hunger-drain|state（状态）|玩家是否会自然失去饱食度|
|heal-delay|integer（整数）|区域内的回血间隔（如果预先设置了 `heal-amount` 标志）。设置为 0 可禁用。|
|heal-amount|integer（整数）|每个 `heal-delay` 间隔回复的生命值（如果设置为负数则是失去生命值）|
|heal-min-health|double（小数）|（通过 `heal-amount` 标志设置的）最小回复的生命值量|
|heal-max-health|double（小数）|（通过 `heal-amount` 标志设置的）最大回复的生命值量|
|feed-delay|integer（整数）|与上述的生命回复相关的值相同，但是是饥饿值|
|feed-amount|integer（整数）|与上述的生命回复相关的值相同，但是是饥饿值|
|feed-min-hunger|integer（整数）|与上述的生命回复相关的值相同，但是是饥饿值|
|feed-max-hunger|integer（整数）|与上述的生命回复相关的值相同，但是是饥饿值|
|blocked-cmds|字符串列表|需要禁用的命令列表|
|allowed-cmds|字符串列表|允许执行的命令列表（未在该列表中的命令都会被禁止使用）|

::: warning
治疗和饱食度相关标志需要配置文件中“使用玩家移动事件” 的设置**不**关闭。
:::

::: info 示例：对尝试某些被禁用的行为的玩家发送自定义消息
只需设置 `deny-message` 标志：[^1]
```
/rg flag spawn deny-message 抱歉! 你正处于主城保护区. 如果需要建家, 请使用铁路系统离开主城出生点.
```
:::

::: info 示例：禁用主城区域附近的“tp”和“teleport”命令
问题中的命令可按如下命令设置禁用：
```
/rg flag spawn blocked-cmds /tp,/teleport
```
:::

::: info 示例：在“医院”区域，玩家每秒被治疗一颗心，上限为一半最大生命值
在没有任何效果的情况下，玩家的最大生命值为 20，那么能恢复的最大生命值就是 10 点。
```
/rg flag hospital heal-delay 1
/rg flag hospital heal-amount 2
/rg flag hospital heal-max-health 10
```
:::

### 杂项

|标志名称|种类|描述|
|---|---|---|
|pistons|state（状态）|是否允许使用活塞|
|send-chat|state（状态）|玩家是否可以发送聊天消息|
|receive-chat|state（状态）|玩家是否可以收到聊天消息|
|potion-splash|state（状态）|药水是否可以拥有喷溅效果|

::: info 提示
WorldGuard 只能限制安装了本插件的服务器中的命令或聊天消息。若你正在使用群组等跨服同步消息的插件，WorldGuard 不能拦截这些消息。
:::

[^1]: 若要禁用消息显示，可使用 `-e` 参数。
