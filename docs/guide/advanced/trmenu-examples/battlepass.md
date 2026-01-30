# 战令奖励

::: info

使用此示例需要安装 PEconomy。

如果你已经安装了其他的经济插件，那么可能需要将其更换为别的积分插件，比如 [VariableSystem](https://www.minebbs.com/resources/variablesystem.14086/)。

:::

## 使用步骤

1. 新建一个经济类型，名称随意，作为“战令积分”使用。

## 原理

增加一个只升不降的积分，与其他货币（如点券）一同增加，到达数值要求即可获取奖励。

因此也可以用来制作累计充值回馈界面。

## 配置展示

``` YAML
Title:
  - '战令奖励界面'

Title-Update: 80

Layout:
  - - '`info`12345678'
    - 'A `rewards_1`      '
    - 'B `rewards_1_vip`       '
    - 'C `rewards_1_vip+`      '
    - '########>'

  - - '9`10``11``12``13``14``15``16``17`'
    - '         '
    - '         '
    - '         '
    - '#######<#'

Options:
  Arguments: false
  Default-Arguments: [ ]
  # Not work with animated title
  Free-Slots:
    - 71-73
  Default-Layout: 0
  Hide-Player-Inventory: false
  Min-Click-Delay: 200

Bindings:
  Commands:
    - '(?i)battlepass'
    - '(?i)bp'
  Items: []

Events:
  Open:
    - 'sound: item.book.page_turn-1-1'
  Close:
    - 'sound: item.book.put-1-1'

Icons:
  'info': 
    display:
      material: book
      name: '&e战令奖励说明'
      lore:
        - '&7欢迎来到战令奖励界面！'
        - '&7在这里你可以查看并领取你的战令奖励。'
        - ' '
        - '&e战令点数 &7可以通过完成任务和活动获得。'
        - '&7使用战令点数解锁更多精彩奖励！'
        - ' '
        - '&b提示: &7点击不同等级的奖励图标即可领取对应奖励。'
  '#':
    display:
      material: Black Stained Glass Pane
      name: ' '

  '>':
    display:
      material: arrow
      name: '&7下一页'
      lore:
        - '&8你现在位于第 %trmenu_menu_page% 页！'
    actions:
      all: 'page: 2'
  
  '<':
    display:
      material: arrow
      name: '&7上一页'
      lore:
        - '&8你现在位于第 %trmenu_menu_page% 页！'
    actions:
      all: 'page: 0'

  'A':
    display:
      material: stick
      name: '&e普通玩家'
      lore:
        - '&7所有玩家均可获取的奖励列表一览。'
    
  'B':
    display:
      material: blaze_rod
      name: '&bVIP 玩家'
      lore:
        - '&7VIP 及以上玩家专属奖励列表一览。'

  'C':
    display:
      material: breeze rod
      name: '&9VIP+ 玩家'
      lore:
        - '&7VIP+ 及以上玩家专属奖励列表一览。'

  'rewards_1':
    display:
      material: chest
      name: '&7普通奖励'
      lore:
        - '&7达到此等级后可领取：'
        - '  &7* 1x 钻石'
        - '  &7* 100 游戏币'
        - '  &7* 20 经验值'

  'rewards_1_vip':
    display:
      material: chest
      name: '&bVIP 奖励'
      lore:
        - '&7达到此等级后可额外领取：'
        - '  &7* 15 点券'
        - '  &7* 30 绑定点券'

  'rewards_1_vip+':
    display:
      material: chest
      name: '&9VIP+ 奖励'
      lore:
        - '&7达到此等级后可额外领取：'
        - '  &7* 1 通用特殊副本门票'
        - '  &7* 1 双倍经验券'

  '1':
    display:
      material: red stained glass pane
      name: '&e免费奖励'
      lore:
        - '&7查看你的免费战令奖励！'
    
  '2':
    update: 10
    refresh: 10
    display:
      material: stone

    icons:
      - condition: 'check papi "%peco_balance_bp%" >= 100'
        display:
          material: green stained glass pane
          name: '&6Lv.1 奖励'
          lore:
            - '&7所需要求: &a100 &7战令积分'
            - '&b点此一键领取'
      - condition: ~
        proirity: 1
        display:
          material: red stained glass pane
          name: '&6Lv.1 奖励'
          lore:
            - '&7所需要求: &c100 &7战令积分'
            - '&c未达成'

  '3':
    update: 10
    refresh: 10
    display:
      material: stone

    icons:
      - condition: 'check papi "%peco_balance_bp%" >= 150'
        display:
          material: green stained glass pane
          name: '&6Lv.2 奖励'
          lore:
            - '&7所需要求: &a150 &7战令积分'
            - '&b点此一键领取'
        actions:
          left:
            - 'console: give %player_name% diamond 1'
            # 在这里填入你的自定义奖励，进一步逻辑请自行实现
      - condition: ~
        proirity: 1
        display:
          material: red stained glass pane
          name: '&6Lv.2 奖励'
          lore:
            - '&7所需要求: &c150 &7战令积分'
            - '&c未达成'

  '4':
    update: 10
    refresh: 10
    display:
      material: stone

    icons:
      - condition: 'check papi "%peco_balance_bp%" >= 200'
        display:
          material: green stained glass pane
          name: '&6Lv.3 奖励'
          lore:
            - '&7所需要求: &a200 &7战令积分'
            - '&b点此一键领取'
      - condition: ~
        proirity: 1
        display:
          material: red stained glass pane
          name: '&6Lv.3 奖励'
          lore:
            - '&7所需要求: &c200 &7战令积分'
            - '&c未达成'
```

请注意，上述仅为示例框架，无法直接应用于服务器。

你可以根据自己的要求为表添加扩充内容。