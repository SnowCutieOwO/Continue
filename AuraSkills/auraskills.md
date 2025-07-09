# AuraSkills

欢迎来到 AuraSkills 维基！

**AuraSkills**（前 **AureliumSkills**）是一个添加了[技能](skills.md)、[属性](stats.md)、[能力](abilities.md)及其他 RPG 相关特色的 Minecraft 插件。本插件基于 Spigot 和 Paper 开发，可以在[官方插件介绍页](https://aurelium.dev/auraskills/download)、[SpigotMC](https://www.spigotmc.org/resources/81069/)、[Hangar](https://hangar.papermc.io/Archy/AuraSkills) 和 [Modrinth](https://modrinth.com/plugin/auraskills) 上下载。插件可高度自定义，适用于从小型生存到大型 MMORPG 服务器的诸多服务器。

这个维基包含了安装、配置及使用插件的相关教程。开发者支持可从 [Discord 聊天群组](https://discord.gg/Bh2EZfB)获取，在这里你可以给予建议、提交漏洞并收取公告。另外 AuraSkills 还在 [Github](https://github.com/Archy-X/AuraSkills) 上开源。

::: warning

这个维基只适用于 AuraSkills 2.0+。旧维基（适用于 AureliumSkills Beta 1.3.x）请[点此](https://wiki.aurelium.dev/skills/)（[站内译文跳转](/AureliumSkills/index.md)）访问。

:::

## 概览

玩家通过诸如耕作、挖矿、战斗或附魔等行为提升[技能](skills.md)等级。升级后玩家会获得不同的[属性效果](stats.md)，解锁并升级各式的[被动](abilities.md)及[魔法能力](mana-abilities.md)，还可获得其他自定义[奖励](rewards.md)。输入 `/skills` 命令后，玩家可以在菜单中浏览有关技能的所有信息。[菜单](menus.md)本身也可完全自定义。钓鱼与采掘能力会掉落自定义战利品，可通过[战利品表](loot.md)自定义和进一步拓展。玩家可以通过排行榜和等级与其他玩家竞争。插件也支持为物品添加穿戴或持有时生效的[属性修饰符](stats.stat-modifiers.md)、[技能条件](skills.item-requirements.md)与[经验修饰符](skills.xp-multipliers.md)。此外，插件还提供了许多供管理员使用的[命令](commands.md)与[权限](permissions.md)来更好地管理玩家和控制访问。

## 技能

> 主条目：[技能](skills.md)

AuraSkills 提供了十一种默认技能，玩家可以通过各种经验来源升级它们。默认情况下，每个技能都会在提升一至二级后增加两项[属性](stats.md)。大多数技能也会在第一次升级后解锁五个被动[能力](abilities.md)，每升五级即可强化。部分技能还有魔法能力，只能由玩家主动触发并会消耗魔力，同时还有使用冷却。

这十一个技能分别是耕作（Farming）、锻造（Foraging）、挖掘（Mining）、钓鱼（Fishing）、采掘（Excavation）、箭术（Archery）、防御（Defense）、战斗（Fighting）、敏捷（Agility）、附魔（Enchanting）及炼药（Alchemy）。Beta 的 15 个技能可以通过载入旧版预设添加。

技能可通过 `/skills` 或单独技能名的命令如 `/farming`、`/mining` 等浏览。

`skills.yml` 文件即为技能配置文件，包括启用/禁用技能、修改其最大等级、能力与魔法能力等设置。

## 配置

在 `plugins/AuraSkills` 文件夹下有多个配置文件用于设置插件。

### 主配置文件

> 主条目：[主配置](main-config.md)

主配置 `config.yml` 文件是用于调整存储/数据库、外部插件对接、语言设置、ActionBar、BossBar、世界/区域、修饰符、条件等全局或杂项内容的设置。

### 技能

> 主条目：[技能#配置](skills.md#配置)

`skills.yml` 用于配置技能，包括：

* 启用/禁用技能
* 修改技能的最大等级
* 移除或切换技能的（魔法）能力
* 其他技能相关的配置

### 奖励

> 主条目：[奖励](rewards.md)

`rewards/` 文件夹包含了每个技能的奖励文件配置。文件的名称即为其对应的技能。奖励会在玩家升级时给予，可设置给予属性、执行命令、给予权限/物品甚至钱（Vault）。`global.yml` 用于添加对所有技能生效的奖励（并非组合等级，只是为了减少重复添加的工作量而存在）。

::: info

修改技能获得的默认属性也是在[奖励](rewards.md)文件中完成的。

:::

### 战利品

> 主条目：[战利品](loot.md)

`loot/` 文件夹包含了某些技能的战利品表。默认情况下，钓鱼和采掘技能的部分被动的战利品表即存储于此。除此之外，还可为挖矿或锻造技能添加自定义战利品表（名称分别为 `mining.yml` 和 `foraging.yml`）

### 菜单

> 主条目：[菜单](menus.md)

`menus/` 文件夹包含了菜单文件，用于修改诸如 `/skills` 命令中界面的外观。大部分有关菜单的内容均可在此修改，你还可以添加新按钮或是为已有按钮添加点击时触发的操作。

## API

> 主条目：[API](api.md)

AuraSkills 提供了一个强拓展性的 API，允许开发者与插件对接并与玩家交互、监听事件及添加自定义内容。