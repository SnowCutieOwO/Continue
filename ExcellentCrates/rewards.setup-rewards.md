# 设置奖励

在 ExcellentCrates 中设置奖励非常简单！

这里有两种奖励类型：

* **物品（ITEM）**。在抽中时给予指定物品。
* **命令（COMMAND）**。在抽中时执行指定命令。

你可以通过[编辑器](editor-gui.md)设置奖励。

## 设置物品奖励

首先，请在背包中准备好待设置的奖励物品。你可以使用来自支持插件的[自定义物品](intergrations.custom-items.md)。

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**奖励（Rewards）**按钮。
3. 点击**新建奖励（Create Reward）**按钮。
4. 点击物品栏中的奖励物品。它也会用在奖励图标上。
5. 点击**物品奖励（Item Reward）**按钮。
6. 大功告成！

若你需要在一个奖励内设置多个物品：

1. 在编辑器内点击奖励。
2. 点击**物品内容（Item Content）**按钮。
3. 丢弃其内的所有物品。
4. 关闭界面（按 ESC 或 E）应用并保存变动。

## 设置命令奖励

首先，请在背包中准备好待设置的奖励图标。你可以使用来自支持插件的[自定义物品](intergrations.custom-items.md)

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**奖励（Rewards）**按钮。
3. 点击**新建奖励（Create Reward）**按钮。
4. 点击物品栏中用作图标的物品。
5. 点击**命令奖励（Command Reward）**按钮。
6. 点击已创建的奖励。
7. 点击**命令内容（Commands Content）**按钮添加新命令。
8. 在聊天栏中输入命令。
9. 重复步骤 7 与 8 直到你添加了所有所需命令。

::: info

你可以在命令中使用 [PlaceholderAPI](intergrations.placeholderapi.md)，内建的**宝箱**与**奖励**[变量](placeholders.md)。

:::

## 奖励配置

在创建奖励后，即可着手配置：

* [权重与稀有度](rewards.weights-rarity.md)
* [权限](rewards.permissions.md)
* [抽取限制](rewards.roll-limits.md)

## 删除奖励

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**奖励（Rewards）**按钮。
3. 点击所需的奖励。
4. 点击**删除奖励（Delete Reward）**按钮。
5. 确认删除操作。

::: warning

在删除奖励之后，所有奖励数据（如抽取限制）会从数据库中永久删除！

:::