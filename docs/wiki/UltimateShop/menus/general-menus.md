# 🔲 全局菜单

所有菜单都存储在 `/menus/` 文件夹下。

## 类型

这里有三种菜单：

* 普通菜单：与其他菜单插件的相同，你可以通过它们打开其他商店。
* 商店菜单：商店菜单会在其内展示指定物品。商店菜单拥有所有普通菜单的功能。
  * Set `menu` option to set their corresponding shop menu in shop configs.
  * 设置 `menu` 选项来改变商店使用的菜单界面。
  * 或者，直接在商店配置中通过 `menu-settings` 设置为商店创建独立的菜单配置。
* 增量购买菜单：能够选择你所购买或出售的数量。这类菜单有着更多设置，你可以前往“增量购买菜单”章节了解更多。**增量购买菜单只可以在商店界面选定物品后打开，而不可以直接开启。**

## 配置

* `title`：菜单界面的标题。对于商店菜单，可填入 `{shop-name}` 以显示其在配置中设置的商店名称。
* `dynamic-title`：[见此](../features/dynamic-title-premium.md).
* `size`：菜单大小。仅支持填入如下数字：**9、18、27、36、45、54**。
* `layout`：按钮排版，参数类型为列表。更多信息见下。

::: warning

`layout` 与 `size` 选项必须一一对应。例如，如果你的界面是 **4x9** 格式，那么 size 必须是 **36**，否则插件会报错。

::: 

* `dynamic-layout`：如果你在 `layout` 选项中使用了诸如变量这样的动态值，则需要启用该选项。对性能有一定影响。<font color="red">**仅付费版**</font>
* `buttons`：按钮配置，按钮 ID 会用在 `layout` 选项中，决定按钮显示的位置。
* `conditions`：只有达到指定条件的玩家才可以打开该菜单。需要在此使用“[条件格式](../format/condition-format.md)”。
* `open-actions`：打开菜单时执行的动作。需要在此使用“[动作格式](../format/action-format.md)”。
* `close-actions`：关闭菜单时执行的动作。需要在此使用“[动作格式](../format/action-format.md)”。**请注意，如果你已经打开一个菜单，此时再通过任何方式打开本插件内的其他菜单也会触发此菜单的关闭动作。**
* `custom-command`: 普通菜单的自定义命令选项，若需要为商店设置打开的自定义命令，请将其添加在[商店](../shops/index.md)配置中。<font color="red">**（仅付费版）**</font>

示例：

``` YAML
title: '商店'

size: 54

bedrock:
  enabled: true
  content: '&f欢迎来到商店.'

custom-command:
  name: 'mineral'
  description: '自定义描述'

conditions: []
  
open-actions:
  1:
    type: sound
    sound: 'ui.button.click' 

close-actions:
  1:
    type: sound
    sound: 'ui.button.click' 

dynamic-layout: false

layout:
  - '000000000'
  - '000000000'
  - '0000A0000'
  - '000000000'
  - '000000000'
  - '000000000'

buttons:
  A:
    display-item:
      material: BREAD
      name: '&d食物'
      lore:
        - '&7点击打开食物商店!'
    actions:
      1:
        type: shop_menu
        menu: 'example'
```

每个按钮都设置了如下内容：

* `display-item`：按钮显示的物品。需要在此使用“[展示物品格式](../format/display-item-format.md)”。
* `actions`：点击后执行的动作。需要在此使用“[动作格式](../format/action-format.md)”。
* `fail-actions`：未达到条件时点击按钮执行的动作。需要在此使用“[动作格式](../format/action-format.md)”。
* `conditions`：点击该按钮所需满足的条件。若玩家没有达到条件，则会触发 `fail-actions` 下的动作。需要在此使用“[条件格式](../format/condition-format.md)”。

## 排版选项

插件中的菜单与商店功能相互独立，它们的配置也分别存储在 menus 与 shops 文件夹中。

* 若要知晓更多有关菜单功能的信息，请阅读“菜单”章节。
* 若要知晓更多有关商店功能的信息，请阅读“商店”章节。
* 若要知晓其他文件夹功能的相关信息，请阅读“[配置文件](../info/configuration-files.md)”章节。

如下为一份商店的简单配置：

``` YAML
# 位于 /shops/ 文件夹下的商店配置。
settings:
  menu: 'example-shop-menu'
  buy-more: true
  shop-name: '方块商店'
  hide-message: false
items:
  A:
    # ...
  B:
    # ...
  C:
    # ...
```

在这里你可以找到 `settings.menu` 选项，它是连接商店与菜单的通道，至关重要。在本示例中，我们将其设置为 `example-shop-menu`。

你可以在 `menus` 文件夹中找到菜单文件，名称为 `example-shop-menu.yml`。

``` YAML
# 这是位于 /shops/ 下的菜单配置。
title: '{shop-name}'
size: 54
layout:
  - '000000000'
  - '0ABCDEFG0'
  - '0HIJKLMN0'
  - '0OPQRSTU0'
  - '000000000'
  - 'a0003000b'
buttons:
  # ...
```

除此之外，你还可以通过 `menu-settings` 选项设置单独的菜单配置，例如：

``` YAML
# 这是位于 /shops/ 下的菜单配置。
settings:
  shop-name: '示例商店'
  # 此商店的覆盖菜单配置
  menu-settings:
    title: '{shop-name}'
    size: 18
    dynamic-layout: false
    layout:
      - '000000000'
      - '0ABCDEFG0'
    buttons:
      3:
        display-item:
          material: ARROW
          name: '{lang:back-button}'
```

在这些选项中，`layout` 选项至关重要，它决定了你的商品或按钮的展示位置。你会发现它是由 **6x9** 个字符组成的，每个字符都表示 Minecraft 箱子界面中的一个格子。对应位置的字符表示这个位置上显示的物品或按钮 ID。

在这个示例中：

* 因为没有 ID 为 `0` 的商品或按钮，这些格子中不会显示任何物品。
* 如果使用这个菜单的商店有 ID 为 `A`、`B`、`C`、`D` 等的商品，那么它们会逐个显示在对应的位置。
* 按钮同理。我往了和你说，你不仅可以在菜单配置文件中设置自定义按钮，商店配置文件中也可以。
* 如果你修改了 `size` 选项的值，不要忘记将 `layout` 选项中额外的行删去。例如，如果你将 **size** 选项的值改为了 36，那么 layout 选项中对应的字符应该为 **4x9**。

你也可以用多个字符表示格子。但你需要用 `\`` 符号包裹它们，这样插件才可以识别。例如：

``` YAML
layout:
  - '000000000'
  - '0`b1``b2``b3``b4``b5``b6``b7`0'
  - '0HIJKLMN0'
  - '0OPQRSTU0'
  - '000000000'
  - 'a0003000b'
```

配上如下的商品或者按钮配置：

``` YAML
items: # 或者 buttons:
  b1: # 商品 ID
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products: 
      #...
    sell-prices:
      #...
  b2:
    #...
  b3:
    #...
  b4:
    #...
  b5:
    #...
  b6:
    #...
  b7:
    #...
```

你也可以在 `layout` 中使用条件显示，详细信息请[见此](conditional-display-premium.md)。

## 动态排版 <font color="red">- 仅付费版</font>

你也可以在 `layout` 选项中使用 PlaceholderAPI 或内建变量，但在此之前你需要启用 `dynamic-layout` 选项。示例：

``` YAML
dynamic-layout: true
layout:
  - '000000000'
  # 在这里在这里使用随机变量！
  - '0`{random_daily;;1}``{random_daily;;2}``b3``b4``b5``b6``b7`0'
  - '0HIJKLMN0'
  - '0OPQRSTU0'
  - '000000000'
  - 'a0003000b'
```

## 标题更新<font color="red"> - 仅付费版，Paper 服务器</font>

需要你的服务器同时安装 **packetevents 和 MythicChanger** 插件，只支持 Paper 服务器用户。\ 
在 `config.yml` 中将 `menu.title-update.enabled` 设置为 `true`，然后将 `menu.title-update.click-update` 或 `menu.title-update.circle-update` 设置为 `true` 来启用标题更新功能。\  
启用后，每次点击菜单按钮时，标题都会刷新，非常适合展示含有占位符的标题，并在每次点击或每秒自动更新数值。

``` YAML
  # 仅限付费版本，如果启用，则可以更新菜单标题中的动态值。
  title-update:
    enabled: true # <--- 将其设置为 true
    # 是否每秒刷新一次整个菜单标题。
    # 将刷新菜单标题中显示的占位符。
    circle-update: false
    # 是否在点击任意按钮时刷新菜单标题。
    # 将刷新菜单标题中显示的占位符。
    click-update: true # <--- 将其设置为 true
    resend-items-pack: false
```

Minecraft 客户端本身不支持在打开容器后更改其标题，因此你可能会看到物品闪烁和重新出现的情况，这是无法完全解决的。\
你可以尝试将 `menu.title-update.resend-items-pack` 设置为 `true`，它只能稍微缓解这种现象。

## 界面更新

在玩家打开菜单后，设置是否持续刷新菜单中按钮的物品。你可以在 `config.yml` 中找到这些设置。不建议开启，因为会消耗额外性能。

如果你只是想在重置买卖次数时刷新按钮，可以改用 `use-times.auto-reset-mode`。
这个选项能帮助你只在发生重置时刷新按钮显示，以此节省服务器性能。

``` YAML
  menu-update:
    # 是否每秒刷新一次所有按钮。
    # 将刷新显示物品 lore 上的占位符。
    # 但如果在线玩家很多，并且都打开商店GUI，可能会导致服务器卡顿。
    circle-update: false
    # 是否在点击任意按钮时刷新所有按钮。
    # 将刷新显示物品 lore 上的占位符。
    # 但如果在线玩家很多，并且都打开商店GUI，可能会导致服务器卡顿。
    click-update: false
```