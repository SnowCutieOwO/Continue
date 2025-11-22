# 菜单

配置菜单的教程

菜单可以在游戏内为玩家显示技能相关信息。主技能菜单通过命令 `/skills` 打开，其下的子菜单则可分别通过按钮打开。菜单的外观与样式可以在 `menus/` 文件夹中修改，其内的文本在消息文件中修改。

::: info

插件使用了 Slate 库构建菜单；更多配置物品、模板与描述的教程可在其对应维基浏览。

:::

## 菜单列表

插件内含如下菜单：

|菜单名称|打开方式|描述|
|---|---|---|
|skills|`/skills` 命令|浏览玩家所有技能状态及进度。|
|stats|`/stats` 命令或点击主技能菜单内的属性按钮（默认为玩家头颅）|浏览玩家所有属性等级。|
|level_progression|点击主技能菜单中的技能图标或输入对应名称的命令（`/farming`、`/mining` 等）打开。|显示技能的升级线路及对应奖励。包含前往其他技能升级进度的按钮。|
|sources|在升级进度菜单中点击来源图标（默认为附魔之瓶）。|显示技能所有的经验来源及其数量。|
|abilities|在升级进度菜单中点击能力图标（默认为淡蓝色染料）。|显示玩家对应技能的能力与魔法能力与其等级。|
|leaderboard|在升级进度菜单中点击排行图标（默认为纸）。|显示指定技能的前十排行榜。|

## 文件结构

配置菜单的文件位于 `AuraSkills/menus` 文件夹下。每个菜单都有其对应的文件。

如下为大部分菜单都有的键与配置部分的概览：

* `title` - 菜单标题。
* `size` - 菜单行数大小，可填入 `1-6`（每行九格）。
* `fill` - 用于设置填充空格的背景物品。
* `items` - 单个物品的主要配置部分。
* `templates` - 带有自定义上下文件及多个实例的部分。
* `components` - 部分模板/物品内使用的描述组件。
* `formats` - 部分物品使用的键值对。
* `options` - 部分菜单中出现的特殊设置选项。

## 填充（`fill`）

`fill` 部分决定填充菜单空格的物品。该部分有两个必填设置：

* `enabled` - 是否启用该功能。
* `material` - 填充物品的材料名称。

填充物品的名称会自动转为空格，所以其名称不可见。可添加额外键以其他物品相同的格式设置物品的元数据。

## 物品（`items`）

> 主条目：[Slate/物品](https://wiki.aurelium.dev/slate/items)

`itmes` 部分设置菜单内的按钮。见[主条目](https://wiki.aurelium.dev/slate/items)了解配置物品材料、NBT 及描述等内容的教程。

## 模板（`templates`）

> 主条目：[Slate/模板](https://wiki.aurelium.dev/slate/templates)

`templates` 部分设置一个菜单内重复出现的物品样式。见[主条目](https://wiki.aurelium.dev/slate/templates)了解配置模板的教程。

## 组件（`components`）

> 主条目：[Slate/组件](https://wiki.aurelium.dev/slate/components)

`components` 部分用于配置模板内用到的一些描述。见[主条目](https://wiki.aurelium.dev/slate/components)了解更多。

## 格式（`formats`）

`formats` 是用于设置其他物品或模板内描述等内容的键值对。通常情况下，在物品/模板中以方括号结尾标明为数组的变量，如 `{条目[]}`，会使用来自该部分配置的内容来作为数组中的元素。尽管格式的名称不一定要匹配变量，但非常建议为其命名时至少体现其功能。

## 选项（`options`）

### skills:

* `bar_length` - 经验进度条中显示的总字符数量。也影响升级菜单的经验条。
* `percent_format` - `{percent}` 变量在进度组件中的小数位数。也对升级进度菜单中的经验条生效。
* `current_xp_format` - `{current_xp}` 变量在进度组件中的小数位数。格式为 Java DemicalFormat。

#### level_progression:

* `use_level_as_amount` - 当为 true 时，等级模板（`unlocked`、`in_progress` 与 `locked`）会将其物品数量设置为对应等级（例如 30 级时菜单内的对应物品数量也会设置为 30）。超过最大堆叠数（通常为 64）的时候，会使用 `over_max_stack_amount` 的值。
* `over_max_stack_amount` - 超出最大堆叠数时在按钮中显示的物品数量。仅在 `use_level_as_amount` 为 true 时有效。
* `item_per_page` - 每页菜单显示的技能物品（`unlocked`、`in_progress` 与 `locked`）数量。
* `start_level` - 路线内第一个物品显示的等级。
* `track` - 取值范围为 0 至 54 的数字列表，用于定位物品。路径的索引匹配了单页菜单内技能等级物品的位置，因此其长度应当与 `items_per_page` 匹配。
* `xp_format` - `{source_xp}` 变量在经验来源模板与 multiplied_xp 组件中的小数位数。格式为 Java DemicalFormat。

### sources:

* `source_start` - 经验来源图标排序的起始位置（左上角）。
* `source_end` - 经验来源图标排序的终止位置（右下角）。
* `items_per_page` - 每页菜单显示的经验来源图标数量。
* `use_track` - 是否使用 `track` 中的设置来决定物品位置，而非上述 `source_start` 与 `source_end` 参数。
* `track` - 取值范围为 0 至 54 的数字列表，用于定位物品。

## 颜色与格式

菜单文件默认使用 [MiniMessage](https://docs.advntr.dev/minimessage/format.html) 格式。样式通过尖角括号标签（`<标签>`）与可选的闭合标签（`</标签>`）组成。旧的 Bukkit 颜色格式（如 `&a`）同样支持，尽管 MiniMessage 有着更大的优势而被建议使用。

可使用的普通颜色名称有 `black`、`dark_blue`、`dark_green`、`dark_aqua`、`dark_red`、`dark_purple`、`gold`、`gray`、`dark_gray`、`blue`、`green`、`aqua`、`red`、`light_purple`、`yellow`、或 `white`。

也可以按 `<#RRGGBB>` 的格式使用十六进制彩色。见 MiniMessage 文档浏览完整格式。部分诸如悬浮提示框和点击动作的功能在这里可能无法生效。

## 变量

菜单配置中使用的变量使得插件能够视情况插入消息与数据。按不同目的可将其大体分为三类：

* 单花括号（`{示例}`）- 由插件内部替换的变量数据，如玩家等级与经验值。通常情况下只在默认位置（或物品附加的组件）有效，因此不应放到别的地方使用。
* 双花括号（`{{示例}}`）- 按路径 `menus.[菜单名称].[变量]` 搜寻消息配置内对应文本的消息变量。`[菜单名称]` 为菜单名称，而 `[变量]` 则为双花括号中的文本。若键不存在，则它会寻找 `menus.common.[变量]` 对应的消息。玩家设置的语言决定消息文本的来源，允许单个菜单配置显示多种语言。
* PlaceholderAPI 变量（`%示例%`）- 以百分符号标注的变量为 PlaceholderAPI 变量。它们既可以为 AuraSkills 的变量，也可以是其他插件的变量。必须安装 PlaceholderAPI 插件（及必要的变量拓展）才可生效。

## 自定义菜单

自定义菜单可以在 `menus` 文件夹中以 `.yml` 后缀的形式存在。文件的名称即为通过命令与其他菜单引用的名称。自定义菜单与其他菜单使用的格式相同，但模板、组件、格式与选项部分不会生效。PlacholderAPI 与点击操作仍可用于这种菜单。

自定义菜单可以通过命令 `/sk openmenu` 命令打开，或在其他菜单内设置点击动作进入。

如下为位于 `menus/test.yml`，名为 test 的自定义菜单示例：

``` YAML
title: 测试菜单
fill:
  enabled: true
  material: black_stained_glass_pane
items:
  test:
    material: diamond
    display_name: <green>测试物品
    lore:
      - <red>测试描述
      - ' '
      - <yellow>点击返回技能主界面 
    on_click:
      - type: menu
        action: open
        menu: skills
```

这个菜单可以从其他菜单的点击操作中进入，如技能菜单中的 your_skills 物品：

``` YAML
items:
  your_skills:
    on_click:
      - type: menu
        action: open
        menu: test
```