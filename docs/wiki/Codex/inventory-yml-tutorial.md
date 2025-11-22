# inventory.yml 教程

在这里你可以修改 Codex 的界面显示样式。

## 界面

插件中包含几个不同的界面：

* `main_inventory`：主界面可以通过 `/codex` 命令打开。各个分类都会显示在这里。你可以按这个格式创建更多界面、

::: info

`main_inventory` 界面不可以从 inventory.yml 中移除。但你可以在它下方按格式创建自己的界面。

:::

* `category_<分类>`：你必须创建一个与分类相关联的界面，另外还需要将 `<分类>` 替换为分类的名称。例如，`category_monsters` 表示 `monsters` 分类的界面（monsters.yml 文件）。如果你创建了一个新的文件，比如“`npc.yml`”，那么你必须在 inventory.yml 中添加一个名为 `category_npcs` 的新界面。

::: info

如果你想要创建与同一分类相关联的多个界面，像是分页，那么你可以按如下格式添加一个新界面：

`category_<分类>;<描述内容>`

这个界面会自动与分类相关联，你可以在其内添加日志条目。例如，如果你需要为怪物分类添加多页内容，则你可以创建如下分类：

`category_monsters`

`category_monsters;page2`

`category_monsters;page3`

之后，使用 `open_inventory` 选项，你就可以让玩家在不同页面之间浏览。

:::

## 界面属性

每个界面都有如下所示的三个属性：

``` YAML
inventories:
  main_inventory:
    slots: 45
    title: "&4Codex &7» &8全部分类"
    21:
      type: "category: history"
    22:
      type: "category: regions"
    23:
      type: "category: monsters"
    0;8;36;44:
      item:
        id: RED_STAINED_GLASS_PANE
        name: " "
    1;7;9;17;27;35;37;43:
      item:
        id: BLACK_STAINED_GLASS_PANE
        name: " "
    40:
      item:
        id: BARRIER
        name: '&7关闭'
      click_actions:
        - "message: &7正在关闭菜单."
        - "close_inventory"
```

### 槽位（Slots）

决定界面的行数。你只能填入 9、18、27、36、45 或 54。

### 标题（Title）

决定界面显示的标题。

### 物品槽位（Item Slot）

决定界面中物品的位置。你也可以使用简化格式决定物品在界面中的位置：

#### 格式 1

``` YAML
<槽位>:
  <物品>
```

这会将物品放在第 0 格。

``` YAML
0:
  item: 
    id: BLACK_STAINED_GLASS_PANE
    name: " "
```

#### 格式 2

``` YAML
<槽位 1>;<槽位 2>;<槽位 N>:
  <物品>
```

这会将同一个物品放在第 0、8 和 16 格。

``` YAML
0;8;16:
  item: 
    id: BLACK_STAINED_GLASS_PANE
    name: " "
```

#### 格式 3

``` YAML
<槽位 1>-槽位 N>:
  <物品>
```

这会将同一个物品放在第 0 至第 8 格。

#### 组合格式

这会将同一个物品放置在第 0 至 7、9 以及 17 至 26 格。

``` YAML
0-7;9;17-26:
  item: 
    id: BLACK_STAINED_GLASS_PANE
    name: " "
```

## 物品槽位属性

在这些物品槽位中你可以创建自己的物品。

### 物品（Item）

这就是物品本身。按照[这里](items-tutorial.md)的教程可着手创建。

``` YAML
0-8;9;17;18-26:
  item:
    id: "BLACK_STAINED_GLASS_PANE"
    name: " "
```

## 打开界面（Open Inventory）

点击物品时为玩家打开另一个界面。

``` YAML
36:
      item:
        id: ARROW
        name: "&7返回"
      open_inventory: main_inventory
```

## 点击动作（Click Actions）

点击物品时执行一系列动作。完整动作列表[见此](actions.md)。

## 类型：分类（Type：Category）

你可以通过 `type: category` 选项放置[分类展示物品](discoveries-categories-tutorial.md#1-分类)。如果你这样做的话，所有其他的物品属性都会被无视。格式：`type: "category: <分类名称>"`

``` YAML
22:
   type: "category: regions"
```

## 类型：条目（Type：Discovery）

你可以通过 `type: discovery` 选项放置[条目展示物品](discoveries-categories-tutorial.md#2-已解锁条目)。如果你这样做的话，所有其他的物品属性都会被无视。格式：`type: "discovery: <条目 ID>"`

::: info 

你只能在 `category_<分类名称>` 界面中使用这种物品。

:::

``` YAML
11:
  type: "discovery: shadow_swamp"
```