# 🎒 自定义界面

MMOInventory 允许你创建数量不限的自定义物品栏，设置不同的装备槽位。

![](_images/hover_inventory.gif)

## 介绍

在这些界面里，玩家可以拖放物品到对应格子。若物品类型为“戒指”，那么它可以放入“戒指”槽位。任何放进自定义界面里的 MMOItems 物品的携带属性都会正常生效。

需要注意的是，这些自定义界面也包含了装备槽位。这些槽位与玩家按“E”键打开界面的装备栏相同，因此在这里放入新的盔甲会使得玩家在另一个界面装备同样的物品。

## 基础配资

每个界面都有自己的配置文件，位于 `MMOInventory/inventory` 文件夹。如下为默认的 MMOInventory 配置文件示例的开头部分。

``` YAML
# 请勿修改此项！固定后将不能修改。
#.........
id: mmoinventory1_legacy

# 是否启用或禁用此界面。
enabled: true

# 是否使用“自定义（custom）”或“原版（vanilla）”界面。
# 只能有一个原版界面！
type: custom

# 这个界面中的物品是否会在死亡时掉落。
# 仅适用于“自定义”类型的界面，因为
# “原版”类型的界面已经由游戏的 keepINventory 规则控制了。
drop_on_death: false

#........
```

你可以通过配置中的 `enabled` 参数启用或禁用界面。`id` 为一段文本，方便 MMOInventory 保存玩家数据，因此你需要填入这段内容，且不应再次更改。

`drop_on_death` 决定了界面中的物品是否会在玩家死亡时掉落。

`type` 只能为 `vanilla` 或 `custom`。现在建议设置为 `custom`。如果你需要了解如何将原版玩家的界面变成 MMOInventory 的界面，可以参考[这里](vanilla-inventories.md)。

## 开启命令

每个自定义界面都可以设置打开它的命令。你可以决定命令名称、所需权限及其别称。你也可以为发送给玩家的错误提示消息使用不同的语言。

将 `enabled` 设置为 `false` 即可禁用此功能。

``` YAML
# 打开自定义界面的命令。
# 仅适用于“自定义”类型的界面。
open_command:
  enabled: true
  name: 'custominv'
  permission: 'custom_inv.open.mmoinventory_default'
  aliases: [ mmoinv, rpginv, rpginventory ]

  output:
    player-command: '&c该命令只能由玩家执行。'
    specify-player: '&c请指定玩家名称。'
    wrong-player: '&c找不到名为 {arg} 的玩家。'
    not-enough-perms: '&c你没有足够的权限。'
```

确保你编辑之后重启（或重载）了服务器，因为 `/mmoinventory reload` 重载命令可能不能完全应用改动，导致出现幽灵命令（命令一旦注册便很难再将其从 Bukkit 命令注册表中注销。）

## 界面按钮

你也可以在玩家界面里放置永久的按钮/图标，这样他们就可以点击打开自定义界面。你也可以自行决定这个按钮的位置及其材料等信息。

将 `enabled` 设置为 `false` 即可禁用此功能。

``` YAML
# 向玩家背包新增打开自定义界面的按钮。
# 改动后需要重启服务器才会生效。
inventory_button:
  enabled: false
  slot: 9
  item:
    material: CHEST
    name: '&6自定义界面'
    lore:
      - ''
      - '&e点击打开。'
    # custom_model_data: 1
    # skull_texture: eyJ0ZXh0dXJlcyI6e...
```

## 界面槽位

这里就是你决定玩家可以交互的内容了：戒指栏、护符栏、盔甲栏等...需要注意的是，格子类型没有限制，不过你可以自行创建限制特定类型 MMOItems 物品才能放入的格子，也可以自行创建数量不限的 MMOItems 物品类型。

::: details 部分示例

``` YAML
slots:

  # 原版槽位类型
  OFF_HAND:
    type: off_hand
    material: GOLD_NUGGET
    custom_model_data_string: 'off_hand'
    name: "&6副手"
    slot: 12
    lore:
      - 拖动物品放置其上即可装备。

  # 戒指栏（自定义槽位）
  LEFT_RING:
    type: accessory
    material: GOLD_NUGGET
    custom_model_data_string: "ring1"
    name: "&6左戒指栏"
    slot: 34
    restrictions:
      - "mmoitemstype{type=RING}"
    lore:
      - 拖动物品放置其上即可装备。

  # 护符栏（自定义槽位）
  AMULET:
    type: accessory
    material: DIAMOND_HOE
    durability: 5
    name: '&6护符栏'
    slot: 10
    restrictions:
    - 'mmoitemstype{type=AMULET}'
    lore:
    - 拖动物品放置其上即可装备。

  # 制品栏（自定义槽位）
  ARTIFACT:
    type: accessory
    material: DIAMOND_HOE
    durability: 10
    name: '&6制品栏'
    slot: 11
    restrictions:
    - 'mmoitemstype{type=ARTIFACT}'
    - 'unique{enabled=true}'
    lore:
    - 拖动物品放置其上即可装备。
```

:::

这里可以使用的槽位类型有很多。

|槽位类型|描述|
|---|---|
|`helmet`|原版头盔栏|
|`chestplate`|原版胸甲栏|
|`leggings`|原版护腿栏|
|`boots`|原版鞋子栏|
|`off_hand`|原版副手栏|
|`accessory`|任意自定义槽位|
|`elytra`|鞘翅栏。更多请[见此](elytra-slot.md)。|
|`fill`|界面填充物品|

MMOInventory 引入的“自定义”槽位与原版的玩家界面。包括戒指、护符、制品...所有自定义槽位使用的都是 `accessory` 槽位类型。

## 槽位限制

槽位限制可以施加在任意格子上，而玩家放入的物品需要满足指定条件。

|限制类型|效果|
|---|---|
|`milevel{}`|使用后，无法在自定义槽位（MMOItems）中使用的物品将无法装备|
|`mitype{type=RING}`|槽位只能放入指定 MMOItems 类型的物品|
|`unique`|不可以将同一个 MMOitems 物品装备在两个以上的槽位|
|`class{name="Warrior,Mage"}`|槽位只能放入指定职业类型的物品|
|`level{min=10}`|低于指定等级的玩家无法使用该槽位|
|`perm{perm=some.perm.node}`|缺少指定权限的玩家无法使用该槽位|

支持的 RPG 职业及等级提供插件可以在[这里](../compatibility/rpg-plugins.md)浏览。

最重要的槽位限制的是 `mitype`，因为你可以通过这个参数限制放入的 MMOItems 类型。若要制作一个戒指栏，你可以将 `mitype` 的 `type` 参数设置为 `RING`（`RING` 为默认的 MMOItems 戒指物品类型）。 

## 界面物品

这个新引入的功能允许你添加点击时触发 [MythicLib 脚本](https://docs.phoenixdevt.fr/mythiclib/scripts/intro)的物品。这些物品不与任何槽位关联，因此玩家无法将物品装备于此。

``` YAML
items:

  INFO:
    material: SPRUCE_HANGING_SIGN
    name: "&6信息"
    slot: 5
    lore:
      - ''
      - '&f ⌛ &7等级 &f%mmocore_level%'
      - '&f %mythiclib_space_1%❣%mythiclib_space_1% &7职业: &f%mmocore_class%'
      - '&f ☄ &7黄金: &f%vault_eco_balance%'
      - ''
      - '&7生命值: &f%mythiclib_stat_max_health%'
      - '&7防御值: &f%mythiclib_stat_defense%'
      - '&7伤害值: &f%mythiclib_stat_attack_damage%'
    on_click:
      - 'command{format="p";from_console=false}'
  
  CLOSE:
    item: BARRIER
    name: "&c关闭"
    slot: 35
    lore:
      - "&7点击关闭此界面."
    on_click:
      - 'close_inventory{}'
```

## 玩家信息

如下格式片段可以创建展示玩家基本信息的物品。点击后会执行 `/p` 命令，打开 MMOCore 的玩家信息界面。

``` YAML
# 静态物品，并非槽位。
# 玩家可以点击物品，但不能改变其位置。
items:
  INFO:
    #item: GOLD_NUGGET
    #custom_model_data_string: "info"
    material: SPRUCE_HANGING_SIGN
    name: "&6信息"
    slot: 5
    lore:
      - ''
      - '&f ⌛ &7等级 &f%mmocore_level%'
      - '&f %mythiclib_space_1%❣%mythiclib_space_1% &7职业: &f%mmocore_class%'
      - '&f ☄ &7黄金: &f%vault_eco_balance%'
      - ''
      - '&7生命值: &f%mythiclib_stat_max_health%'
      - '&7防御值: &f%mythiclib_stat_defense%'
      - '&7伤害值: &f%mythiclib_stat_attack_damage%'
    on_click:
      - 'sudo{format="p"}'
```

## 关闭界面

如下格式片段可以创建点击后关闭界面的物品。

``` YAML
items:
  CLOSE:
    item: BARRIER
    name: "&c关闭"
    slot: 35
    lore:
      - "&7点击关闭此界面."
    on_click:
      - 'close_inventory{}'
```