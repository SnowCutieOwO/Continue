# TrMenu 示例菜单：VIP 升级路线

::: info 

使用此示例需要安装 LuckPerms、PlayerPoints（Rosewood 版）与 PlaceholderAPI。

:::

## 使用步骤

1. 安装对应插件，下载必要拓展。
2. 通过 LuckPerms 创建 `vip1`、`vip2`、`vip3` 三个组，同时创建一个名为 `vip` 的升级路线（track），顺序为 `vip1 -> vip2 -> vip3`。

## 配置展示

``` YAML
Title:
  - '&6&lVIP 商城'

Title-Update: 80

Layout:
  - '####A####'
  - ' `P1``P1``P1` `P3``P3``P3` '
  - '`P0`1 2 3 4 '
  - '   `P2``P2``P2`   '
  - '#########'
PlayerInventory:
  - - '         '
    - '         '
    - '         '
    - '         '

Options:
  Arguments: false
  Default-Arguments: [ ]
  # Not work with animated title
  Free-Slots:
    - 71-73
  Default-Layout: 0
  Hide-Player-Inventory: false
  Min-Click-Delay: 200
  Default-Expansions: ['LuckPerms']

Events:
  Open: 
    - 'sound: ITEM_ARMOR_EQUIP_IRON-1-3'
  Close: []

Icons:
  A:
    update: 20
    display:
      material: paper
      name: '&eVIP 商城'
      lore:
        - ' &7&o这是什么？'
        - '&f玩家可以在这里查看他们的VIP升级路线'
        - '&f必须从 VIP I 升级'

  '#':
    update: 20
    display:
      material: black stained glass pane
      name: '&7'
    
  '1':
    refresh: 10
    update: 20
    display:
      material: stone
      name: '&7'
    icons: 
      - condition: ~
        display:
          material: yellow stained glass pane
          name: '&f普通玩家'
          lore:
            - '&7'
            - '你当前处于该等级！'
            - '&7'

  '2':
    refresh: 10
    display:
      material: stone
      name: '&7'
    icons: 
      - condition: ~
        priority: 3
        display:
          material: barrier
          name: '&7VIP I'
          lore:
            - '&7'
            - '&c你没有足够的钱！'
            - '&7'
            - '&f价格：&c15 点券'
      - condition: 'all [ points *15 not check papi *"%luckperms_current_group_on_track_vip%" == "vip1" ]'
        priority: 2
        display:
          material: glass pane
          glow: true
          name: '&eVIP I'
          lore:
            - '&7'
            - '&a点击购买！'
            - '&7'
            - '&f价格：&a15 点券'
        actions:
          all:
            - 'console: p take %player_name% 15'
            - 'tell: &e恭喜玩家 &6%player_name% &e购买了 VIP I！ {players}'
            - 'sound: BLOCK_RESPAWN_ANCHOR_CHARGE-0.5-2'
            - 'console: lp user %player_name% promote vip'
      - condition: 'any [ check papi *"%luckperms_current_group_on_track_vip%" == *"vip1" check papi *"%luckperms_current_group_on_track_vip%" == *"vip2" check papi *"%luckperms_current_group_on_track_vip%" == *"vip3" ]'
        priority: 1
        display:
          material: yellow stained glass pane
          name: '&aVIP I'
          lore:
            - '&7'
            - '&e你已拥有该等级！'
            - '&7'

  '3':
    refresh: 10
    display:
      material: stone
      name: '&7'
    icons: 
      - condition: 'not points *20'
        priority: 4
        display:
          material: barrier
          name: '&7VIP II'
          lore:
            - '&7'
            - '&c你没有足够的钱！'
            - '&7'
            - '&f价格：&c20 点券'
      - condition: 'check papi *"%luckperms_current_group_on_track_vip%" == "default"'
        priority: 2
        display:
          material: barrier
          name: '&7VIP II'
          lore:
            - '&7'
            - '&c请先解锁前一等级！'
            - '&7'
      - condition: 'points *20'
        priority: 3
        display:
          material: glass pane
          glow: true
          name: '&eVIP II'
          lore:
            - '&7'
            - '&a点击购买！'
            - '&7'
            - '&f价格：&a20 点券'
        actions:
          all:
            - 'console: p take %player_name% 20'
            - 'tell: &e恭喜玩家 &6%player_name% &e购买了 VIP II！ {players}'
            - 'sound: BLOCK_RESPAWN_ANCHOR_CHARGE-0.5-2'
            - 'console: lp user %player_name% promote vip'
      - condition: 'any [ check papi *"%luckperms_current_group_on_track_vip%" == *"vip2" check papi *"%luckperms_current_group_on_track_vip%" == *"vip3" ]'
        priority: 1
        display:
          material: yellow stained glass pane
          name: '&aVIP II'
          lore:
            - '&7'
            - '&e你已拥有该等级！'
            - '&7'

  '4':
    refresh: 10
    display:
      material: stone
      name: '&7'
    icons: 
      - condition: 'not points *30'
        priority: 4
        display:
          material: barrier
          name: '&7VIP III'
          lore:
            - '&7'
            - '&c你没有足够的钱！'
            - '&7'
            - '&f价格：&c30 点券'
      - condition: 'any [ check papi *"%luckperms_current_group_on_track_vip%" == "vip1" check papi *"%luckperms_current_group_on_track_vip%" == "default" ]'
        priority: 2
        display:
          material: barrier
          name: '&7VIP III'
          lore:
            - '&7'
            - '&c请先解锁前一等级！'
            - '&7'
      - condition: 'points *30'
        priority: 3
        display:
          material: glass pane
          glow: true
          name: '&eVIP III'
          lore:
            - '&7'
            - '&a点击购买！'
            - '&7'
            - '&f价格：&a30 点券'
        actions:
          all:
            - 'console: p take %player_name% 30'
            - 'tell: &e恭喜玩家 &6%player_name% &e购买了 VIP III！ {players}'
            - 'sound: BLOCK_RESPAWN_ANCHOR_CHARGE-0.5-2'
            - 'console: lp user %player_name% promote vip'
      - condition: 'check papi *"%luckperms_current_group_on_track_vip%" == "vip3"'
        priority: 1
        display:
          material: yellow stained glass pane
          name: '&aVIP III'
          lore:
            - '&7'
            - '&e你已拥有该等级！'
            - '&7'

  'P0':
    display:
      material: stone
      name: '&7'
    icons:
      - condition: ~
        display: 
          material: lime stained glass pane
          name: '&7'

  'P1':
    refresh: 10
    display: 
      material: stone
      name: '&7'
    icons:
      - condition: 'check papi *"%luckperms_current_group_on_track_vip%" == *"default"'
        display:
          material: red stained glass pane
          name: '&7'
      - condition: 'any [ check papi *"%luckperms_current_group_on_track_vip%" == *"vip1" check papi *"%luckperms_current_group_on_track_vip%" == *"vip2" check papi *"%luckperms_current_group_on_track_vip%" == *"vip3" ]'
        display: 
          material: lime stained glass pane
          name: '&7'
        
  'P2':
    refresh: 10
    display: 
      material: stone
      name: '&7'
    icons:
      - condition: ~
        priority: 2
        display:
          material: red stained glass pane
          name: '&7'
      - condition: 'any [ check papi *"%luckperms_current_group_on_track_vip%" == *"vip2" check papi *"%luckperms_current_group_on_track_vip%" == *"vip3" ]'
        priority: 1
        display: 
          material: lime stained glass pane
          name: '&7'

  'P3':
    refresh: 10
    display: 
      material: stone
      name: '&7'
    icons:
      - condition: ~
        priority: 2
        display:
          material: red stained glass pane
          name: '&7'
      - condition: 'check papi *"%luckperms_current_group_on_track_vip%" == *"vip3"'
        priority: 1
        display: 
          material: lime stained glass pane
          name: '&7'
```

## 效果讲解

* 路线式升级，在玩家购买前一等级的 VIP 之后，才可以购买下一级 VIP，且不能跨级购买。
* 考虑到了按钮有“未购买”、“已购买”、“余额不足”、“等级不足”四种情况，可以分别显示。
* 通过变量检查确认玩家所处的组，通过 `refresh: 10` 与 `priority: #` 设置让按钮能够实时刷新，在不满足多个条件时优先显示等级不足，之后才是余额不足。