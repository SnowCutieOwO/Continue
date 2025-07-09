# 兼容插件

能与 AuraSkills 联动的插件

## 介绍

本章大致讲述了兼容 AuraSkills 的插件。它们可分为三类：

* AuraSkills 原生支持的插件
* 通过 API 与 AuraSkills 联动的插件
* 专用附属，与 AuraSkills 一同使用或扩展其功能

::: info

可能有更多支持 AuraSkills 的插件。本章所提及的只是我们已知的内容。

:::

## AuraSkills 联动插件

### Vault

启用[经济奖励](rewards.md#经济奖励money)与[职业](main-config.md#职业)功能。你需要一个支持 Vault 的经济插件，如 EssentialsX 或 CMI（等支持的经济插件）。

### WorldGuard

增加了控制玩家获取经验的自定义标志。同时用于检查指定位置玩家放置/破坏方块的行为。你可以设置无视放置检查的区域，和/或设置完全阻止经验获取的区域。

见[主配置：WorldGuard 部分](main-config.md#worldguard)了解更多。

### LuckPerms

允许[以权限为奖励](rewards.md#权限奖励permission)。另外它可以增强多权限查询性能，默认启用且大部分情况下不应将其禁用。若你遇到了诸如倍率计算错误的问题，请在主配置文件中将 `hooks.LuckPerms.use_permission_cache` 设置为 `false`。

### PlaceholderAPI

AuraSkills 提供了许多 PlacholderAPI 变量。你可以在[这里](placeholders.md)浏览完整列表。

### DecentHolograms 与 HolographicDisplays

增加[攻击伤害指示器](main-config.md#攻击指示悬浮字)。

### ProtocolLib

允许插件检测其他插件是否请求使用 ActionBar。若有则会先行禁用自身的 ActionBar 以防止冲突。

### Towny

“平整挖掘”技能将无法破坏其他玩家城镇区域内的方块。

### MythicMobs 

可通过 AuraSkills 提供的 `giveSkillXP` 给予经验。假设你设计了一个 BOSS，且你需要给予击杀者战斗经验值。那么你可以按如下格式进行配置：

``` YAML
Skills:
  # XP 参数支持嵌入变量数学表达式.
  # s (skill) 参数可为任意 AuraSkills 技能的命名空间 ID.
  - giveSkillXP{s=fighting;xp=1000} @trigger ~onDeath
```

你可以通过 MythicMobs 的编程语言做到很多疯狂的东西。

我们不提供更多支持。若你不确定 Mythic 的触发器/目标选择器或条件的工作机制，请前往其[官方维基](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/home)或在 Discord 上寻求支持。

### MythicCrucible

以 MythicCrucible 为物品插件时，你可以在 mythic 脚本中使用 AuraSkills 提供的 `takeMana` 机制与 `hasMana` 条件。

创建消耗魔法的攻击技能示例：

``` YAML
DamageWithMana:
  Cooldown: 1
  Conditions:
  - hasMana{m=20} true
  Skills:
  - takeMana{m=20}
  - damage{a=20}
```

技能在玩家有 20 点魔法时造成 20 点伤害。触发后消耗玩家 20 魔力。

你也可以在物品上使用技能：

``` YAML
Skills:
  - skill{s=DamageWithMana} @target ~onInteract
```

这个技能会在玩家右键物品时攻击目标。

我们不提供更多支持。若你不确定 Mythic 的触发器/目标选择器或条件的工作机制，请前往其[官方维基](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/home)或在 Discord 上寻求支持。

### Nexo

你可以在幸运属性/特征设置中像普通方块那样加入 Nexo 自定义方块。你也可以指定 Nexo 方块给予的经验数量（`nexo:方块 ID`）。Nexo 物品也可以直接用于经验来源菜单物品。

### Slimefun

检测并添加来自粘液科技放置器的方块，防止玩家刷取经验。

## 已知与 AuraSkills 联动的插件

### [MMOItems](https://www.spigotmc.org/resources/mmoitems.39267/)

可在 MMOItems 的 `preferred_rpg_provider` 中添加 `AURA_SKILLS`。之后，你创建的物品就能消耗本插件的魔力。你也可以让你的物品为玩家增加 AuraSkills 的属性与魔力，或通过技能等级对其进行限制。更多详细内容请阅读官方 [MMOItems](https://gitlab.com/phoenix-dvpmt/mmoitems/-/wikis/Supported%20Plugins#aureliumskills) 维基。

### [CustomFishing](https://polymart.org/resource/customfishing.2723)

你可以在玩家通过 CustomFishing 插件钓上物品的时候给予技能经验，你也可以基于技能等级或其他 AuraSkills 的变量增强钓鱼竿或钓鱼小游戏。

这里是钓鱼时给予钓鱼技能经验的**最小**示例。

``` YAML
tuna_fish_golden_star:
  # ...
  events:
    success:
      aurelium_xp:
        type: plugin-exp
        value:
          plugin: AuraSkills
          exp: 400
          target: fishing
```

更多信息请浏览 CustomFishing 维基，或在 Discord 聊天群组上寻求支持。

### [Eco 系列插件](https://polymart.org/user/auxilor.1107)

eco 系列插件通过 Libreforge YAML 格式配置创建效果、条件与其他内容，以实现每个 eco 系列插件的功能，如 EcoItems、EcoPets、Talismans 等。

eco 与 AuraSkills 联动提供了如下效果与条件：

* [add_stat](https://plugins.auxilor.io/effects/all-effects/add_stat#permanent-effect)
* [skill_xp_multiplier](https://plugins.auxilor.io/effects/all-effects/skill_xp_multiplier#permanent-effect)
* [mana_cost](https://plugins.auxilor.io/effects/configuring-an-effect#mana_cost)
* [has_mana](https://plugins.auxilor.io/effects/all-conditions/has_mana)
* [has_skill_level](https://plugins.auxilor.io/effects/all-conditions/has_skill_level)

### [BeeMinions](https://polymart.org/resource/beeminions.6048)

小精灵可以在产生物品后给予经验。截止编写时尚无相关文档，但你可以看看过滤部分。

### [AuroraPlugins](https://modrinth.com/user/erik_sz)

Aurora 系列插件，如 AuroraLevels、AuroraCollections 与 AuroraQuests 可以与 AuraSkills 联动以自动修正属性奖励。如果你需要让 RPG 体验更丰富多彩而又不想在后期减少属性奖励，这就非常有用。

### [TreeAssist](https://www.spigotmc.org/resources/treeassist.67436/)

连锁砍树时能获得 AuraSkills 的伐树经验。

### [ExecutableItems](https://www.spigotmc.org/resources/83070/)

允许在物品条件中添加玩家魔力值。需要使用 [requiredMana](https://docs.ssomar.com/executableitems/configurations/activator-configuration/activators-features#requiredmana) 参数。

### [UltraBoomerangs](https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/)

使用回旋镖击杀生物时会获得 AuraSkills 经验值。

## 官方附属

### [AuraMobs](https://www.spigotmc.org/resources/auramobs-a-mob-levels-add-on-for-auraskills.94168/)

基于玩家综合/平均技能等级增强生物，使得它们更难被击败。提升其血量和伤害来补充使用 AuraSkills 的 RPG 体验。兼容 AuraSkills 经验值收取与实体战利品表。

## 非官方附属

## [等级限制](https://github.com/Fly1337/AuraSkillsLevelRestrict/releases)

通过该附属，你可以要求玩家破坏方块时达到指定技能等级。高度自定义。

## [CannonsRPG](https://hangar.papermc.io/Intybyte/CannonsRPG)

大炮与 AuraSkills 附属，允许玩家升级与解锁大炮相关技能。

## [Random Enchanted Rewards](https://modrinth.com/plugin/random-enchanted-rewards-for-auraskills)

升级技能时奖励玩家随机附魔书。

## [SkillTime](https://github.com/Intybyte/SkillTime/releases)

设置技能经验获取倍率增加/减少的时间段。