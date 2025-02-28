# 🔲 全局菜单

所有菜单都存储在 `/menus/` 文件夹下。

## 类型

这里有三种菜单：

* 普通菜单：与其他菜单插件的相同，你可以通过它们打开其他商店。
* 商店菜单：商店菜单会在其内展示指定物品。每个菜单都有一个 `menu` 选项来设置对应的商店菜单。商店菜单拥有所有普通菜单的功能。多个商店可以共享同一个商店菜单，可以做到打开时排版相同而出售物品不同的效果。
* 增量购买菜单：能够选择你所购买或出售的数量。这类菜单有着更多设置，你可以前往“增量购买菜单”章节了解更多。**增量购买菜单只可以在商店界面选定物品后打开，而不可以直接开启。**

## 配置

* `title`：菜单界面的标题。对于商店菜单，可填入 `{shop-name}` 以显示其在配置中设置的商店名称。
* `size`：菜单大小。仅支持填入如下数字：**9、18、27、36、45、54**。
* `layout`：按钮排版。参数类型为列表，行数必须为 `size/9` 的值（即只可填入 1-6 行），每行列表只能有九个元素。每个字符代表着游戏界面中的一个格子，54 个字符就对应着 54 个格子。
* `buttons`：按钮配置。按钮 ID 必须为单字符，可以在 `layout` 的列表中设置其显示的位置。
* `conditions`：只有达到指定条件的玩家才可以打开该菜单。需要在此使用“[条件格式](format.condition-format.md)”。
* `open-actions`：打开菜单时执行的动作。需要在此使用“[动作格式](format.action-format.md)”。
* `close-actions`：关闭菜单时执行的动作。需要在此使用“[动作格式](format.action-format.md)”。**请注意，如果你已经打开一个菜单，此时再通过任何方式打开本插件内的其他菜单也会触发此菜单的关闭动作。**

示例：

``` YAML
title: '商店'

size: 54

bedrock:
  enabled: true
  content: '&f欢迎来到商店.'

conditions: []
  
open-actions:
  1:
    type: sound
    sound: 'ui.button.click' 

close-actions:
  1:
    type: sound
    sound: 'ui.button.click' 

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

* `display-item`：按钮显示的物品。需要在此使用“[展示物品格式](format.display-item-format.md)”。
* `actions`：点击后执行的动作。需要在此使用“[动作格式](format.action-format.md)”。
* `fail-actions`：未达到条件时点击按钮执行的动作。需要在此使用“[动作格式](format.action-format.md)”。
* `conditions`：点击该按钮所需满足的条件。若玩家没有达到条件，则会触发 `fail-actions` 下的动作。需要在此使用“[条件格式](format.condition-format.md)”。