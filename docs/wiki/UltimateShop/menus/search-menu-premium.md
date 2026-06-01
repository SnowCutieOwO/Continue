# 🔍 搜索界面 - 仅付费版

## 搜索界面配置

与普通菜单相比，搜索菜单多出了如下配置：

```yaml
input-item: '1'
result-item: '6'

action-items:
  2:
    action-type: input-name
    display-item:
      material: HOPPER
      name: '&e搜索'
  4:
    action-type: clear-search
    display-item:
      material: BARRIER
      name: '&c清除'

state-items:
  3:
    empty-input:
      display-item:
        material: PAPER
        name: '&e等待中'
    has-input:
      display-item:
        material: COMPASS
        name: '&a结果'

no-result-item:
  slot: 31
  display-item:
    material: BARRIER
    name: '&c无结果'
```

* `input-item`：决定输入按钮的样式，这些格子允许玩家放入匹配用的物品。必须为单字符，可以在 `layout` 部分决定其显示的位置。
* `result-items`：决定了输出格所用按钮样式。符合条件的物品会按顺序显示在格子中。必须为单字符，可以在 `layout` 部分决定其显示的位置。
* `action-items`：决定了特殊搜索界面按钮。当前支持的 `action-type` 值如下：
  * `input-name`：打开输入框，按名称搜索物品
  * `clear-search`：返回输入物品并清除当前输入的关键词
* `state-items`：显示当前搜索状态。每个不同的状态按钮都支持如下内容：
  * `empty-input`
  * `has-input`
  * 可用变量：
    * `{result-amount}` 搜索结果总数
    * `{showing-amount}` 当前显示数量
    * `{input-amount}` 输入物品总数
    * `{name-keyword}` 当前搜索关键词
* `no-result-item`：当物品没有匹配结果时显示的内容。这是通过 `slot` 决定位置的固定物品。
* `result-lore`：追加在搜索结果物品后的额外描述。
  * 可用变量：
    * `{shop}`
    * `{product}`

## 设置搜索菜单

请在 `config.yml` 中将菜单的 ID 填入 `menu.search-gui.menu` 部分。

``` YAML
menu:
  search-gui:
    menu:
      - 'search'
      - 'search2' # 可以在这里填写更多的菜单 ID。
```

默认搜索菜单是 `menus/search.yml`，可自行复制创建更多收藏夹菜单。

相关命令：

```yaml
/shop searchgui
/shop searchgui <菜单名称>
```

示例：

```yaml
/shop searchgui search
/shop searchgui search2
```

## 搜索行为

搜索界面可以使用两种搜索方法：

### **物品搜索**

当有物品被放入输入格子时，插件会尝试寻找出售这些物品的商店。

### **关键词搜索**

当玩家点击 `input-name` 或 `search-name` 按钮时，他们可以在聊天栏中输入要搜索的关键词。\
这个关键词就会用于查找匹配的物品显示名称、物品名称以及原版物品名称。

如果没有放入物品，仍然可以通过关键词搜索所有物品。

::: info

原版物品名默认只支持英文 IDD，如果你需要支持其他语言，你需要启用[本地化物品名称](../features/localized-item-name.md)功能。

:::

另外，关键词搜索也使用了共享输入系统。

在 `config.yml` 中设置统一取消操作的关键词：

```yml
menu:
  prompt:
    cancel-keyword: 'cancel'
```

搜索界面统一清空关键词：

```yml
menu:
  search-gui:
    prompt:
      clear-keyword: '{lang}'
```

即：

* 输入 `cancel-keyword` 中的内容：取消输入操作
* 输入 `clear-keyword` 中的内容：清除当前输入的关键词