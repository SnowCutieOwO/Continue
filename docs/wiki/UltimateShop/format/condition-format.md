# ⚖️ 条件格式

条件格式包含一些选项。

::: info

在**条件格式示例中的** `actions` 只代表新版本的**条件格式**。若需要查看某个功能或设置名称，请转到对应页面，如 `buy-conditions`。

:::

## 全局选项

#### 生效次数

这个动作只会在玩家购买/出售指定次数的物品时触发。

* `start-apply`：操作触发的起始次数。**可选。默认为 0。**
* `end-apply`：操作触发的终止次数。**可选。默认为无限大。** 
* `apply`：操作生效的对应次数。格式：`[1,2,3,4]`**可选。默认使用 `start-apply` 的值。**

``` YAML
    conditions:
      1:
        apply: [1,2,3,4,5]
        start-apply: 1
        end-apply: 5
```

### 点击类型

这个动作只在玩家使用对应方式点击按钮时触发。对 `open-actions`、菜单配置内的 `close-action` 以及物品设置中的 `buy-actions` 和 `sell-actions` 无效。

``` YAML
    conditions:
      1:
        click-type: LEFT
```

### 动作 <font color="red">- 仅付费版</font>

::: info

如果需要添加交易物条件未达到或者达到后执行的动作，你需要在交易物配置中使用 `fail-actions` 选项。

:::

``` YAML
    conditions:
      1:
        not-meet-actions:
          1: 
            type: message
            message: '条件未达成'
        meet-actions:
          1: 
            type: message
            message: '条件已满足'
```

你可以为整个条件设置动作，如下所示：

``` YAML
conditions:
  not-meet-actions:
      1: 
        type: message
        message: '你必须在指定世界中使用这个物品！'
  1:
    type: world
    world: 'test'
```

## 支持变量

* `{world}`
* `{amount}`

### 物品层面的 `buy-conditions` 与 `sell-conditions`

在物品上使用 `buy-conditions` 或 `sell-conditions` 时，`{amount}` 表示玩家尝试交易物品的次数。

如果玩家购买了 5 个物品，那么 `{amount}` 就是 `5`。


### 单条目的 `apply-conditions` 与旧版 `conditions`

当你在单条目中使用 `apply-conditions`，`{amount}` 总是为 `1`。

旧版的 `conditions` 同样如此，因为在代码中它们是旧形式的 `apply-conditions`。

为什么？

* `apply-conditions` 会在插件选择最终条目时优先判定
* 此时实际物品数量尚未结算

因此：

* `{amount}` 不代表最终价格
* `{amount}` 也不代表最终物品数量
* `{amount}` 只会返回 `1`

这表示 `apply-conditions` 用于决定分支，而非检查实际计算数量。

### 单条目的 `require-conditions`

当你在单条目中使用 `require-conditions`，`{amount}` 表示条目物品的最终结算量。

这是它与 `apply-conditions` 的最大区别。

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

## 世界

玩家需处于指定的世界中。

``` YAML
  conditions:
    1:
      type: world
      world: lobby
```

## 群系

玩家需处于指定的生物群系中。

``` YAML
  conditions:
    1:
      type: biome
      biome: oraxen
```

## 权限

玩家需拥有指定的权限。

**需要注意的是 OP 拥有所有权限，除非插件设置了默认不分配，所以请在去除 OP 权限的情况下测试该条件。**

``` YAML
  conditions:
    1:
      type: permission
      permission: 'group.vip'
```

## 变量

玩家需达到指定的变量条件。

`rule` 可填入如下内容：

* `>=`
* `<=`
* `>`
* `<`
* `==`（字符串比较）
* `=`（数字比较）
* `!=`（数字或字符串比较）
* `!*=`（数字或字符串）不包含（指定内容）
* `*=`（字符串）包含（指定内容）。
    如：`str *= string` 会返回 `true`，而 `example *= ple` 则会返回 `false`。

``` YAML
  conditions:
    1:
      type: placeholder
      placeholder: '%player_health%'
      rule: '<='
      value: 5
```

## 菜单

玩家是否打开了指定的菜单。

```yaml
  conditions:
    1:
      type: menu
      menu: 'example-shop-menu'
```

## 菜单类型

玩家是否打开了指定类型的菜单。

支持如下种类：

* `COMMON`（一般菜单）
* `SHOP`（商店菜单）
* `MORE`（增量购买菜单）
* `SEARCH`（搜索界面）
* `FAVOURITE`（收藏界面）

``` YAML
  conditions:
    1:
      type: menu_type
      menu-type: 'favourite'
```

## 任选 <font color="red">- 仅付费版</font>

``` YAML
  conditions:
    1:
      type: any
      conditions:
        1:
          type: placeholder
          placeholder: '%eco_balance%'
          rule: '>='
          value: 200
        2:
          type: placeholder
          placeholder: '%player_points%'
          rule: '>='
          value: 400
```

## 非 <font color="red">- 仅付费版</font>

只有达到条件的玩家才可触发对应动作。

``` YAML
  conditions:
    1:
      type: not
      conditions:
        1:
          type: placeholder
          placeholder: '%eco_balance%'
          rule: '>='
          value: 200
```
