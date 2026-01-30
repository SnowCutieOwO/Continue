# 撬锁小游戏

::: info

使用本菜单前，需要先安装 RandomNumber 和 Math 变量拓展。

:::

## 使用步骤

安装完变量拓展之后，直接将菜单放入服务器即可。

## 配置展示

``` YAML
Title:
  - '撬锁'

Title-Update: 80

Layout:
  - '`state`12345678'

Options:
  Arguments: false
  Default-Arguments: [ ]
  # Not work with animated title
  Default-Layout: 0
  Hide-Player-Inventory: false
  Min-Click-Delay: 300
  Depend-Expansions: [ 'randomnumber', 'math' ]

Events:
  Open:
    - 'sound: block.vault.insert_item_fail-1-2'
    - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
    - 'set-meta: lockpickingProgress 0'
  Close:
    - 'sound: entity.villager.no-1-0'

Icons:
  'state':
    update: 10
    refresh: 10
    display:
      material: tripwire_hook
      name: '&e撬锁状态 (%trmenu_meta_lockpickingProgress%%)'
      lore:
        - '&7解锁完成后点此开锁！'
    actions:
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        actions:
          - 'sound: entity.player.levelup-1-3'
          - 'force-close'
          - 'tell: &a你成功撬开了锁！'

  '1':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "1" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'
  '2':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "2" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'
  '3':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "3" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'
    
  '4':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "4" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'

  '5':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "5" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'

  '6':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "6" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'

  '7':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "7" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'

  '8':
    update: 10
    refresh: 10
    display:
      material: stone
    icons:
      - condition: 'all [ check papi %trmenu_meta_lockSlotNumber% is "8" check papi %trmenu_meta_lockpickingProgress% < 100 ]'
        proirity: -1
        display:
          material: stick
          name: "&c&l!! 点击撬锁 !!"
        actions:
          left:
            - 'sound: block.vault.insert_item-1-2'
            - 'set-meta: lockSlotNumber %randomnumber_value_1_8%'
            - 'set-meta: lockpickingProgress %math_0_{trmenu_meta_lockpickingProgress}+20%'
      - condition: 'not check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 2
        display:
          material: stone_button
          name: '&r&l锁孔'
        actions:
          left:
            - 'sound: item.break-1-2'
            - 'close'
            - 'title: &c&l撬锁失败！ &7请重试一次...'
      - condition: 'check papi %trmenu_meta_lockpickingProgress% >= 100'
        proirity: 1
        display:
          material: red stained glass pane
          name: '&r&l无需解锁'
```

## 效果讲解

* 打开菜单后生成一个随机数，用于指定点击的位置。
* 点击正确位置后再用新值覆盖，实现随机变动。
* 点击错误的按钮重新打开后重置进度。
* 每次点击成功增加 20% 的进度。