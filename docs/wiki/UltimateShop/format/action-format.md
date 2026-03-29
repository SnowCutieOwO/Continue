# 🎬 动作格式

动作格式包含一些选项。

::: info

在**动作格式示例中的** `actions` 只代表新版本的**动作格式**。若需要查看某个功能或设置名称，请转到对应页面，如 `buy-actions`。

:::

## 全局选项

#### 生效次数

这个动作只会在玩家购买/出售指定次数的物品时触发。

可选。未设置的情况下，每次操作都会触发。

* `start-apply`：操作触发的起始次数。**可选。默认为 0。**
* `end-apply`：操作触发的终止次数。**可选。默认为无限大。** 
* `apply`：操作生效的对应次数。格式：`[1,2,3,4]`**可选。默认使用 `start-apply` 的值。**

``` YAML
    actions:
      1:
        apply: [1,2,3,4,5]
        start-apply: 1
        end-apply: 5
```

#### 一次全售/多次单售

当多个/份物品被出售时，添加这个选项可以表示只触发首个物品的动作。在设计播放音效等行为时非常有用，如果不添加这个选项，则所有物品出售时都会播放一次音效。
可选，若不设置，此每次都会执行。

``` YAML
    actions:
      1:
        sell-all-once: true # 全部出售菜单
        multi-once: true # 增量购买菜单
```

#### 单次打开

只对菜单的 `open-actions` 生效。若启用后，只有玩家在首次打开该菜单才会触发此动作。因此，若该菜单由其他菜单打开，则不会触发此操作。

``` YAML
    actions:
      1:
        open-once: true
```

### 点击类型

这个动作只在玩家使用对应方式点击按钮时触发。对 `open-actions`、菜单配置内的 `close-action` 以及物品设置中的 `buy-actions` 和 `sell-actions` 无效。

``` YAML
    actions:
      1:
        click-type: LEFT
```

### 筛选Java或者基岩版玩家 <font color="red">- 仅付费版</font>

让这个动作只对Java版玩家或者基岩版玩家生效。

可选，如果未设置，则对所有玩家生效。

``` YAML
    actions:
      1:
        java-only: true
        bedrock-only: true
``` 

### 失败类型

仅支持物品配置下的 `fail-actions`。

支持失败原因：
* ERROR
* PERMISSION
* PLAYER\_MAX
* SERVER\_MAX
* REQUIRE\_CONDITION\_NOT\_MEET
* NOT\_ENOUGH
* INVENTORY\_FULL
* API\_CANCEL

``` YAML
    fail-actions:
      1:
        fail-type: 'PLAYER_MAX'
        type: message
        message: 'Hello'
```

## 支持变量

* `{world}`
* `{amount}`

### Item-Level `buy-actions` and `sell-actions`

当你在物品上使用 `buy-actions` 或 `sell-actions` 时，`{amount}` 表示由购买或出售流程决定的物品交易数量。

即：

* 如果 `display-item.calculate-amount` 为 `false`、`{amount}` 在物品动作中始终为 `1`。
* 如果 `display-item.calculate-amount` 为 `true`, `{amount}` 则为 $交易份数 \times 展示的物品数量$。

示例：

* 展示物品数量：`1`
* 玩家购买了 `5` 个
* 则 `buy-actions` 下 `{amount} = 5`

另一个示例：

* 展示物品数量：`64`
* 玩家购买了 `5` 个
* 则 `buy-actions` 下 `{amount} = 320`

### 单条目的 `give-actions` 与 `take-actions`

在单条目中使用 `give-actions` 或 `take-actions` 时，`{amount}` 还可表示指定条目的实际数量。

* `{player_x}`
* `{player_y}`
* `{player_z}`
* `{player_pitch}`
* `{player_yaw}`
* `{player}`
* `{item}` - 物品 ID
* `{item-name}` - 物品的展示名称
* `{shop}` - 商店 ID
* `{shop-name}` - 商店的展示名称
* `{shop-menu}` - 商店的菜单 ID

## 声音

向玩家发送声音。

``` YAML
    actions:
      1:
        type: sound
        sound: 'ui.button.click'
        volume: 1
        pitch: 1
```

## 消息

向玩家发送消息，支持彩色代码。

``` YAML
    actions:
      1:
        type: message
        message: 'Hello!'
```

## 公告

向所有玩家发送消息，支持彩色代码。

``` YAML
    actions:
      1:
        type: announcement
        message: 'Hello!'
```

## 标题

向玩家发送标题消息，支持颜色代码。

``` YAML
    actions:
      1:
        type: title
        main-title: '好日子'
        sub-title: '不错'
        fade-in: 10
        stay: 70
        fade-out: 30
```

## 粒子效果

``` YAML
    actions:
      1: 
        type: particle
        particle: HEART
        count: 20
        offset-x: 0.3
        offset-y: 1.0
        offset-z: 0.3
        speed: 0.01
```

## 效果

给予玩家药水效果。

``` YAML
    actions:
      1:
        type: effect
        potion: BLINDNESS
        duration: 60
        level: 1
        ambient: true # 可选
        particles: true # 可选
        icon: true # 可选
```

## 传送

将玩家传送至指定位置。

``` YAML
    actions:
      1:
        type: teleport
        world: LobbyWorld
        x: 100
        y: 30
        z: 300
        pitch: 90 # 可选
        yaw: 0 # 可选
```

## 玩家身份执行命令

以玩家身份执行命令。

``` YAML
    actions:
      1:
        type: player_command
        command: 'tell Hello!'
```

## 管理员身份执行命令

以管理员身份执行命令。

``` YAML
    actions:
      1:
        type: op_command
        command: 'tell Hello!'
```

## 控制台身份执行命令

以控制台身份执行命令。

``` YAML
    actions:
      1:
        type: console_command
        command: 'op {player}'
```

## 生成原版实体

生成原版的实体。

``` YAML
    actions:
      1:
        type: entity_spawn
        entity: ZOMBIE
        world: LOBBY # 可选
        x: 100.0 # 可选
        y: 2.0 # 可选
        z: -100.0 # 可选
```

## 生成 MythicMobs 实体

生成 MythicMobs 插件的实体。需要安装对应插件。

``` YAML
    actions:
      1:
        type: mythicmobs_spawn
        entity: Super_Skeleton
        level: 1 # 可选
        world: LOBBY # 可选
        x: 100.0 # 可选
        y: 2.0 # 可选
        z: -100.0 # 可选
```

## 打开普通菜单

打开指定的普通菜单。

``` YAML
    actions:
      1:
        type: open_menu
        menu: main
```

## 打开商店菜单

``` YAML
    actions:
      1:
        type: shop_menu
        shop: farming
```


## 打开增量购买菜单

``` YAML
    actions:
      1:
        type: buy_more_menu
        shop: farming
        item: A
```

## 带自定义设置打开增量购买菜单 <font color="red">- 仅付费版</font>

``` YAML
    actions:
      1:
        type: buy_more_menu
        shop: farming
        item: A
        buy-more-menu:
          menu: buy-more-buy
          max-amount: 128
```

## 打开一键出售菜单

``` YAML
    actions:
      1:
        type: sell_all_menu
```

## 购买物品

``` YAML
    actions:
      1:
        type: buy
        shop: food
        item: A
        amount: 5 # 可选
```

## 出售物品

``` YAML
    actions:
      1:
        type: sell
        shop: food
        item: A
        amount: 5 # 可选
        sell-all: true # 可选
```

## 关闭

关闭当前界面。

``` YAML
    actions:
      1:
        type: close
```

## 延迟 <font color="red">- 仅付费版</font>

使得对应动作延迟 X 刻执行。

``` YAML
    actions:
      1:
        type: delay
        time: 50
        wait-for-player: true
        actions:
          1:
            type: entity_spawn
            entity: ZOMBIE
```

## 几率 <font color="red">- 仅付费版</font>

设置动作触发的几率，最高为 100。50 表示有 50% 几率执行。

``` YAML
    actions:
      1:
        type: chance
        rate: 50
        actions:
          1:
            type: entity_spawn
            entity: ZOMBIE
```

## 任选 <font color="red">- 仅付费版</font>

随机挑选其中 X 条动作并执行。

``` YAML
    actions:
      1:
        type: any
        amount: 2
        actions:
          1:
            type: entity_spawn
            entity: ZOMBIE
          2:
            type: entity_spawn
            entity: SKELETON
          3:
            type: entity_spawn
            entity: WITHER
```

## 条件 <font color="red">- 仅付费版</font>

只有达到条件的玩家才可触发对应动作。

``` YAML
    actions:
      1:
        type: conditional
        conditions:
          1: 
            type: world
            world: lobby
        actions:
          1:
            type: entity_spawn
            entity: ZOMBIE
```

## 跨服 <font color="red">- 仅付费版</font>

需要启用 config.yml 中的 `bungeecord-sync.enabled` 选项，并正确配置 BungeeCord 的设置。更多信息请参阅“多服同步”章节。

``` YAML
    actions:
      1:
        type: connect
        server: 'lobby'
```

## 更新 GUI

更新 GUI 内的所有按钮，但是标题不会更新。

``` YAML
    actions:
      1:
        type: update_gui
```

## 更新 GUI 标题 <font color="red">- 仅付费版</font>

需要服务器启用标题更新功能，有关具体信息，可见 [此页面](../menus/general-menus.md)。

```yaml
    actions:
      1:
        type: update_title
```