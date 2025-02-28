# 宝箱预览

ExcellentCrates **可完全自定义**预览界面来显示奖励及概率！

预览配置存储在 `/plugins/ExcellentCrates/previews/` 文件夹下。

默认情况下只有一个 `default.yml` 预览配置。

## 创建预览

若要创建预览，只需复制现有的预览配置并将其重命名为任意内容即可。

按需[配置](#预览配置)并输入 `/crates reload` [命令](commands.md)应用改动即可。

::: warning

为防出现潜在问题，请不要在文件名称使用 Unicode 字符、空格及大写英文。

:::

## 预览配置

在预览文件中，最顶上包含一部分注释，解释了界面的**配置**与**内容**部分。

但是，这里有一个称作**奖励**的部分用于决定宝箱奖励的显示设置：

### `Name`

覆盖奖励物品的显示名称。见[文本格式](https://nightexpressdev.com/nightcore/configuration/text-formation/)了解可用标签与颜色。

默认情况下会使用内置的 `%reward_name%` [变量](placeholders.md)匹配奖励物品的显示名称。

### `Lore.Default`

覆盖奖励物品的描述。见[文本格式](https://nightexpressdev.com/nightcore/configuration/text-formation/)了解可用标签与颜色。

可用内建变量：

* 内部**宝箱**与**奖励**的[变量](placeholders.md)。
* `%empty-if-above%` - 若前一行非空，则插入空行。
* `%empty-if-below%` - 若后一行为空，则插入空行。
* `%limits%` - 若奖励中有任何限制，则插入 `Lore.Limits.Info` 中的内容。
* `%no_persmission%` - 若无权限获取奖励，则插入 `Lore.No_Permission` 中的内容。

### `Slots`

列出界面中显示奖励的格子。

### `Hide_Unavaliable`

启用后隐藏玩家无法获得的奖励。

## 链接预览

你可以通过[编辑器](editor-gui.md)将指定预览界面绑定至指定宝箱。

1. 打开编辑器。
2. 点击**宝箱（Crates）**按钮。
3. 选中待编辑的宝箱。
4. 若显示预览已禁用，则**右键**点击**预览（Preview）**按钮。
5. **左键**点击**预览（Preview）**按钮。
6. 在聊天栏选择所需的预览界面。

## 禁用预览

你可以通过[编辑器](editor-gui.md)取消预览界面。

1. 打开编辑器。
2. 点击**宝箱（Crates）**按钮。
3. 选中待编辑的宝箱。
4. **右键**点击**预览（Preview）**按钮，此时会显示预览已禁用。