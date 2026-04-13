# 🔍 搜索菜单 - 仅付费版

## 配置文件

搜索菜单相较于普通菜单，多出了一些选项。

```yaml
input-item: '1'
result-item: '6'

action-items:
  2:
    action-type: input-name
    display-item:
      material: HOPPER
      name: '&eSearch'
  4:
    action-type: clear-search
    display-item:
      material: BARRIER
      name: '&cClear'

state-items:
  3:
    empty-input:
      display-item:
        material: PAPER
        name: '&eWaiting'
    has-input:
      display-item:
        material: COMPASS
        name: '&aResult'

no-result-item:
  slot: 31
  display-item:
    material: BARRIER
    name: '&cNo Result'
```

* input-item：代表放入搜索物品的槽位。需为单字符。在 `layout` 中使用该字符来调整其在菜单中的显示位置。
* result-item: 代表展示搜索结果物品的槽位。需为单字符。在 `layout` 中使用该字符来调整其在菜单中的显示位置。
* action-items: 代表搜索菜单特殊按钮，支持的 `action-type`（动作类型） 值有：
    * `input-name` ：文本搜索，允许玩家通过聊天框输入物品的名称来搜索商品。
    * `clear-search`：清空当前搜索。
* state-items: 展示搜索菜单当前状态的物品，每个这种物品都有以下内容：
    * `empty-input`
    * `has-input`
    * 可以使用的变量：
        * `{result-amount}` 匹配到的搜索结果的数量
        * `{showing-amount}` 当前展示的搜索结果的数量
        * `{input-amount}` 搜索物品的数量
        * `{name-keyword}` 当前搜索文本
* no-result-item: 当没有搜索结果时将会显示此物品，此物品需要一个 `slot` 选项来指定固定的槽位值。
* result-lore: 每个搜索结果额外增加的 Lore 描述。
    * 可以使用的变量：
        * `{shop}`
        * `{product}`

## 设置搜索菜单

你应该在 `config.yml` 文件中将搜索菜单的 ID 填入 `menu.search-gui.menu` 选项中。

```yaml
menu:
  search-gui:
    menu:
      - 'search'
      - 'search2' # 填入其他搜索菜单。
```

默认的搜索菜单文件是 `menus/search.yml`，并且你可以复制它以创建更多的搜索菜单。

指令：

```yaml
/shop searchgui
/shop searchgui <搜索菜单ID>
```

示例：

```yaml
/shop searchgui search
/shop searchgui search2
```

## 搜索行为

搜索菜单支持两种搜索行为：

### **物品搜索**

玩家将物品拖入搜索菜单中的搜索物品栏，插件会根据搜索的物品自动匹配。

### **文字搜索**

当玩家点击带有 `input-name` 动作类型的搜索菜单特殊按钮，然后在聊天框输入需要搜索的物品的名称。

两种搜索行为可以相互重叠使用。

::: info

默认情况下，原版物品只支持搜索英文 ID，如果需要支持本地化的物品名称，请使用 [本地化物品名称](../features/localized-item-name.md) 功能。

:::

你可以在 `config.yml` 设置使用文本搜索时，取消或者清除搜索的关键词：

取消关键词：

```yml
menu:
  prompt:
    cancel-keyword: 'cancel'
```

清除搜索菜单结果的关键词：

```yml
menu:
  search-gui:
    prompt:
      clear-keyword: '{lang}'
```