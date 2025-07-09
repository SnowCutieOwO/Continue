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

## 支持变量

* `{world}`
* `{amount}`
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