# 展示实体家具

::: info 提示
本章提及的内容仅适用于 1.19.4 或更高版本的服务器。

展示实体家具仅会对 1.19.4 以上的玩家显示。

ViaVersion 不会修复这个问题。

除此之外，Oraxen 版本也必须高于 1.154.0。
:::

::: info 提示
不建议修改旧家具配置。

已经放置的物品展示框家具不会自动更新，且如果配置改动，则它们有可能损坏。

如果你想要修改配置，你应当移除家具再将其放置。

在未来，我们可能会制作一个命令、系统或插件拓展，以让旧家具能够被迁移至展示实体/新配置。
:::

展示实体是一种 1.19.4 引入的新实体。

它有三种类型：物品、方块与交互。

Oraxen 利用了物品展示实体与交互实体来实现家具的功能。

在这些实体的帮助下，你可以轻松做到以前不能做到的事。

除了更多选项之外，它不会被削除渲染，意味着不会像之前那样在某个角度观察时突然消失。

虽然这有可能导致玩家客户端帧数变低，但至少家具不会隐形了。

下文为示例配置：

```YAML
cart:
  displayname: "<gray>推车"
  material: PAPER
  Mechanics:
    furniture:
      type: DISPLAY_ENTITY
      hitbox:
        width: 0.4
        height: 0.3
      display_entity_properties:
        display_transform: NONE
        brightness:
          block_light: 15
          sky_light: 0
      barrier: true
  Pack:
    generate_model: false
    model: default/cart
```

## 家具类型

首先，`type` 是 Oraxen 1.154.0 以上版本添加的一种新属性。

它允许你自由选择使用旧版的展示框或是新的展示实体。

如果你的服务器允许低于 1.19.4 的玩家进入，我们推荐你保持使用前者。后者可能会导致这些玩家无法看见家具。

在未指定的情况下为 `ITEM_FRAME`。

可用选项为：`ITEM_FRAME`、`GLOW_ITEM_FRAME` 与 `DISPLAY_ENTITY`。

## 碰撞箱

碰撞箱是 Oraxen 1.154.0 之后增加的一种新属性。

这是基于新实体的相关设置。

这个实体没有碰撞箱，仅用于充当家具的碰撞箱。

它可以和旧的屏障机制一起使用。

它有 `width` 和 `height` 属性，可用于定义碰撞箱的大小。

## 展示实体属性

这部分会详细讲解新的实体带来的一些设置。

某些设置会比其他的更有用，但我还是将所有的设置都加了进来。

在 `display_entity_properties` 部分，你可以设置这些内容：

`display_transform`、`tracking_rotation`、`brightness`、`view_range`、`shadow_radius`、`shadow_strenth`、`scale`。

`display_transform` 决定了模型的展示方式。

默认为 `NONE`，即显示样式与 BlockBench 中显示的一样。

其他插件可能会使用盔甲架并将物品装备在它的头部，你可以将这个设置调整为 `HEAD`，以达到相同的效果。

这里还有几个额外选项：`FIRSTPERSON_LEFTHAND`、`FIRSTPERSON_RIGHTHAND`、`FIXED`、`GROUND`、`GUI`、`THIRDPERSON_LEFTHAND`、`THIRDPERSON_RIGHTHAND`。

所有这些在游戏中的显示效果都和 BlockBench 中 Display 页面的对应效果一样。你可以在[家具位置](mechanics.furniture-mechanic.furniture-position.md)章节中找到 `FIXED`（物品展示框位置）的示例。

`tracking_roration` 设置决定了你是否想要用家具“追踪”玩家。

这个设置一般用于公告板和排行榜展示板等你想让玩家浏览信息的家具，而非普通的家具。

可用选项有：

* `FIXED` - 不旋转
* `VERTICAL` - 允许绕 Y 轴转动
* `HORIZONTAL` - 允许绕 X 或 Z 轴转动
* `CENTER` - 允许绕中心转动

`brightness` 属性用于设置家具发光。

它有一个 `block_light` 和 `sky_light` 选项，用于设置 Minecraft 所使用的不同种类光照。示例配置如下：

```YAML
display_entity_properties:
  brightness:
    block_light: 15
    sky_light: 0
```

`scale` 属性可用于调整家具比例。

它有 `x`、`y` 与 `z` 属性，可用于调整各个轴上的缩放比例。示例配置如下：

```YAML
display_entity_properties:
  scale:
    x: 1
    y: 1
    z: 1
```

剩余的 `view_range`（实体可见范围）、`shadow_radius`（阴影半径）与 `shadow_strength`（阴影深浅）都可以自行读懂，本文不在此过多解释。