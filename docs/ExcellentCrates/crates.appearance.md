# 外观

这里有些设置可以让你的宝箱更好看！

你可以通过[编辑器](editor-gui.md)修改这些内容。

## 名称

宝箱的显示名称。见[文本格式](https://nightexpressdev.com/nightcore/configuration/text-formation/)了解可用标签与颜色。

它会通过 `%crate_name%` [变量](placeholders.md)显示在宝箱消息及界面中。

会替换宝箱[物品名称](#名称)的显示。

## 描述

宝箱的描述。见[文本格式](https://nightexpressdev.com/nightcore/configuration/text-formation/)了解可用标签与颜色。

默认并不广泛使用，但你可以通过 `%crate_description%` [变量](placeholders.md)自行放置（如悬浮字中）。

**不会**替换宝箱[物品描述](#描述)的显示。

## 背包物品

这就是玩家可以通过 `/crates give` [命令](commands.md)获取的物品。他可以是任何物品，包括[自定义](intergrations.custom-items.md)物品。

它也会用于在编辑器中显示宝箱。

玩家可以通过持有该物品预览宝箱内容。

::: info

当你从编辑器获取“原复制”物品时，物品不会带有宝箱标签，不会触发打开宝箱的操作。

:::