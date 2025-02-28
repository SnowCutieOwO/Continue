# 条目/分类教程

在本页中你可以找到条目或分类的完整配置文件。每次你对这些文件的改动都可以通过 `/codex reload` 命令应用。

## 界面物品

每个物品的格式如下：

``` YAML
inventory_items:
  <类型>:
    <物品>
```

::: info

需要注意的是在这里显示的 `item` 有一些属性，可以在[这里](items-tutorial.md)浏览。

:::

::: info

你可以在这些物品的名称与描述中使用 PlaceholderAPI 变量。

:::

### 1. 分类

每个分类都会在主界面中有代表物品。你可以在这里告诉玩家分类的条目数，以及它的相关介绍。

``` YAML
category:
  id: MAP
  name: "&7分类: #6bcbfe&l世界区域"
  lore:
  - "#eeeeee你探索过的区域都会显示在这里."
  - ""
  - "&7进度: %unlocked% &8[%progress_bar%&8] &8(&7%percentage%&8)"
```

::: info 可用变量：

* `%unlocked%`（会被下列 message.yml 对应键的消息替代，取决于发现的条目数：`currentUnlockedDiscoveriesColorNone`、`currentUnlockedDiscoveriesColorAll`、`currentUnlockedDiscoveriesColorIncomplete`）
* `%progress_bar%`（显示此分类解锁进度的进度条）
* `%percentage%`（显示此分类解锁进度的百分比）

:::

### 2. 已解锁条目

在条目已解锁时显示在**分类界面**的物品样式。

``` YAML
discovery_unlocked:
  id: PAPER
  name: "%name%"
  lore:
  - "%description%"
  - ""
  - "&8于 %date% 发现"
```

::: info 可用变量：

* `%name%`（条目名称）
* `%description%`（条目描述）
* `%date%`（条目解锁的日期）

:::

### 3. 未解锁条目

在条目未解锁时显示在分类界面的物品样式。

``` YAML
discovery_blocked:
  id: GRAY_DYE
  name: "&c??"
  lore:
  - "&7尚未发现该条目中的对应内容."
```

## 奖励

奖励通过动作给予。所有动作可在[这里](actions.md)找到。

### 单条目

发现该分类条目内容时执行的默认动作。

``` YAML
rewards:
    per_discovery:
      - "centered_message: #6bcbfe&m00                                                 00"
      - "centered_message: "
      - "centered_message: #eeeeee&l日志已更新"
      - "centered_message: &7世界区域: %name%"
      - "centered_message: "
      - "centered_message: &7通过命令 #eeeeee/codex &7打开"
      - "centered_message: "
      - "centered_message: &7奖励: &a+50XP"
      - "centered_message: "
      - "centered_message: #6bcbfe&m00                                                 00"
      - "title: 20;60;20;#eeeeee&l日志已更新;&7区域名称: %name%"
      - "playsound: BLOCK_GILDED_BLACKSTONE_STEP;10;0.1"
      - "console_command: xp give %player% 50"
```

::: info 可用变量：

* `%name%`（发现条目的名称）
* `%player%`（玩家名称）

:::

### 全解锁

发现该分类条目所有内容时执行的默认动作。

``` YAML
rewards:
    all_discoveries:
      - "centered_message: #6bcbfe&m00                                                 00"
      - "centered_message: "
      - "centered_message: #eeeeee&l日志分类已完成"
      - "centered_message: &7世界区域"
      - "centered_message: "
      - "centered_message: &7祝贺!"
      - "centered_message: "
      - "centered_message: &7奖励: &a+5000XP"
      - "centered_message: "
      - "centered_message: #6bcbfe&m00                                                 00"
      - "title: 20;60;20;#eeeeee&l日志分类已完成;&7世界区域"
      - "playsound: BLOCK_GILDED_BLACKSTONE_STEP;10;0.1"
      - "console_command: xp give %player% 5000"
```

::: info 可用变量：

* `%player%`（玩家名称）

:::

## 发现条目

发现条目必须按如下格式添加至 `discoveries` 部分。

``` YAML
discoveries:
  <条目 ID>:
    name: <名称>
    description:
    - <描述内容>
```

### 名称

条目的名称。会展示在界面及消息文本中。

``` YAML
name: "#6bcbfe&l阴影沼泽"
```

### 描述

条目的描述。会展示在界面及消息文本中。

``` YAML
description:
      - "#eeeeee阴影沼泽中所发现的异象."
      - "#eeeeee难以战胜."
      - ""
      - "&7掉落物:"
      - "&8❱ #eeeeee阴影魔药 &8(25%)"
      - "&8❱ #eeeeee铁锭 &8(90%)"
```

### 发现条件

决定该条目可被发现的条件。

#### WorldGuard 区域

对应条目会在进入 WorldGuard（https://dev.bukkit.org/projects/worldguard）区域时解锁。

::: info 将 `type` 设置为 **WORLDGUARD_REGION**。

**`value.region_name:`** 区域名称。

:::

``` YAML
discovered_on:
  type: WORLDGUARD_REGION
  value:
    region_name: shadow_swamp
```

#### 击杀实体

对应条目会在击杀原版实体时解锁。

::: info 将 `type` 设置为 **MOB_KILL**。

**`value.mob_type:`** 实体类型。所有可用实体列表可在这里查询：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html

**`value.mob_name:`** 可选。实体的自定义名称。请勿使用颜色字符。

:::

``` YAML
discovered_on:
  type: MOB_KILL
  value:
    mob_type: ZOMBIE
    mob_name: Shadow Warrior
```
#### 击杀 MythicMobs 实体

对应条目会在击杀 MythicMobs 实体时解锁。

::: info 将 `type` 设置为 **MYTHIC_MOB_KILL**.

**`value.mob_type:`** MythicMobs 实体的 ID。你可以使用“;”表示多个 ID。

:::: tabs

::: tab 示例 1

``` YAML
discovered_on:
  type: MYTHIC_MOB_KILL
  value:
    mob_type: forest_corrupter
```

:::

::: tab 示例 2

``` YAML
discovered_on:
  type: MYTHIC_MOB_KILL
  value:
    mob_type: crab;super_crab;mega_crab
```

:::

::::

### 点击动作

在玩家点击与已解锁条目相关内容时触发的动作。所有动作可在[这里](actions.md)浏览。可选。

``` YAML
click_actions:
- "console_command: warp shadow_swamp %player%"
```

### 自定义界面物品

你可以将[分类界面物品](discoveries-categories-tutorial.md#界面物品)替换为只对该条目生效的内容。

#### 已解锁条目

显示在[分类界面](inventory-yml-tutorial.md)的已解锁条目物品。所有来自于[这里](discoveries-categories-tutorial.md#2-已解锁条目)的变量都可使用。

``` YAML
inventory_items:
  discovery_unlocked:
    id: PAPER
    name: "%name%"
    lore:
    - "%description%"
    - ""
    - "&8于 %date% 发现"
    - ""
    - "&a&l点击 &a传送."
```

#### 未解锁条目

显示在[分类界面](inventory-yml-tutorial.md)的未解锁条目物品。所有来自于[这里](discoveries-categories-tutorial.md#3-未解锁条目)的变量都可使用。

### 自定义奖励

你可以将[条目的单独奖励](discoveries-categories-tutorial.md#单条目)替换为只对该条目生效的内容。

``` YAML
rewards:
- "centered_message: #6bcbfe&m00                                                 00"
- "centered_message: "
- "centered_message: #eeeeee&l日志已更新"
- "centered_message: &7世界区域: %name%"
- "centered_message: "
- "centered_message: &7可通过命令 #eeeeee/codex &7查看"
- "centered_message: "
- "centered_message: &7奖励: &a+300XP&7, &a$5.000"
- "centered_message: "
- "centered_message: #6bcbfe&m00                                                 00"
- "title: 20;60;20;#eeeeee&l日志已更新;&7世界区域: %name%"
- "playsound: BLOCK_GILDED_BLACKSTONE_STEP;10;0.1"
- "console_command: xp give %player% 300"
- "console_command: eco give %player% 5000"
```