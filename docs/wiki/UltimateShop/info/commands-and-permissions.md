# ⌨️ 命令与权限

## 常见问题

### 问：`/shop` 命令需要权限吗？

**答：** `/shop` 命令可直接打开名为 `main` 的菜单。这个功能被称作**自动开启**，你可以在 config.yml 的 `menu.auto-open.enabled` 选项中关闭。若你只需要某些玩家可以使用这个命令，你可以在菜单中设置 `conditions` 来限制满足条件的玩家打开它。更多信息详见菜单章节。

### 打开每日商店示例配置时为什么显示条件不足？

**答：** 菜单有预先设置的条件，你可以在 `menus/daily-shop-example.yml` 中找到。

## ultimateshop.bypassprice

这个权限可以绕过价格检查，购买任何东西都无需付款。

## ultimateshop.bypass.protection

这个权限可以绕过使用出售魔杖时的保护检查。

## /shop menu <菜单ID>/<商店ID>

打开普通菜单或商店菜单。

需要权限 ``ultimateshop.menu`。
这个指令可在控制台执行，只需在末尾添加 `<玩家>` 参数即可。如 `/shop menu Shop1 Player1`。

命令末尾可添加 `-b` 参数，来无视菜单开启条件检查。**<font color="Red">（仅付费版本）</font>**

## /shop quickbuy <商店ID> <商品ID> \[数量\]

快速购买商店中的指定物品。

需要权限 `ultimateshop.quickbuy`。

这个指令可在控制台执行，只需在末尾添加 `<玩家>` 参数即可。如 `/shop quickbuy ore A 5 Player1`。

## /shop quicksell <商店ID> <商品ID> \[数量\]

与快速购买相同，将 `quickbuy` 替换为 `quicksell` 即可。

`amount` 可替换为 `*` 符号，此时插件会将背包中所有符合条件的物品出售。**<font color="Red">（仅付费版本）</font>**

::: warning

如果对应物品没有显示在商店菜单中，或者玩家没有达成打开对应商店的条件，那么这个物品将不能参与交易。如果你不想要这样，可以将商店配置中的 `settings.secret-shop-items` 选项的值改为 `false`。

:::

## /shop reload

重载插件，一些配置需要你重启服务器才可生效。

需要权限 `ultimateshop.reload`。

## /shop givesellstick <物品 ID> <玩家 ID> \[数量\] **<font color="Red">（仅付费版本）</font>**

给予指定玩家指定数量（不填则默认为 **1**）的 [出售魔杖](../features/sell-stick-premium.md)。

需要权限 `ultimateshop.givesellstick`。

## /shop givesellchest <物品 ID> <玩家 ID> \[数量\] **<font color="Red">（仅付费版本）</font>**

给予指定玩家指定数量（不填则默认为 **1**）的 [出售魔箱](../features/sell-chest-premium.md)。

需要权限 `ultimateshop.givesellstick`。

## /shop setbuytimes <商店 ID> <物品 ID> <玩家>/global \[次数\]

将玩家对指定商品的购买次数限制在特定值。

需要权限 `ultimateshop.setbuytimes`。

若不指定 `次数` 参数，则插件会重置购买/出售次数。

`物品 ID` 可被替换为 `*` 符号，插件会自动选择商店内的所有物品。**<font color="Red">（仅付费版本）</font>**

`setselltimes` 命令用法与其相似。

::: info

global 参数表示为 `{buy-times-server}` 或 `{sell-times-server}` 变量设置购买/出售次数，而非所有玩家的购买/出售次数。

**无法**通过本插件的命令一次性设置所有玩家的数据。因为假设你的玩家数据量较多，在没有优化代码的支撑下，服务器会立即崩溃。很多插件都没有这个功能，但仍有极少部分以此为卖点。我们从未承认在任何场合提供此功能，且它也不会在未来更新至本插件，因为它的开发非常耗时且意义不大。你可以通过**自动重置**功能实现相似效果，有关内容可以在这里浏览。

:::

## /shop addbuytimes/addselltimes <商店 ID> <物品 ID> <玩家>/global <次数>

向指定玩家的指定商店内物品添加指定的购买次数。

需要权限 `ultimateshop.addbuytimes`

`物品 ID` 可被替换为 `*` 符号，插件会自动选择商店内的所有物品。**<font color="Red">（仅付费版本）</font>**

`addselltimes` 命令用法与其相似。

## /shop sellall

打开全部出售菜单。

需要权限 `ultimateshop.sellall`。

## /shop saveitem <物品 ID>

保存手持的物品。

需要权限 `ultimateshop.saveitem`。

## /shop generateitemformat

将手持物品数据转化为本插件特有的物品格式，并将其保存在 `plugins/UltimateShop` 文件夹下。

需要权限 `ultimateshop.generateitemformat`。

## /shop getplaceholdervalue <文本> **<font color="Red">（仅付费版本）</font>**

解析输入文本中的变量并返回。

需要权限 `ultimateshop.getplaceholdervalue`。

## /shop resetrandomplaceholder <变量 ID> \[玩家名称\] **<font color="Red">（仅付费版本）</font>**

重置随机变量的值。

如果需要刷新分玩家的随机变量，请在命令中填入玩家的名称，对于不依赖玩家改变的变量，则请勿填入，否则插件会报错。

需要权限 `ultimateshop.resetrandomplaceholder`。

## /shop setrandomplaceholder <变量 ID> \[元素\] \[玩家名称\] **<font color="Red">（仅付费版本）</font>**

设置随机变量的值。

与上一条命令不同的是，它不会重设刷新时间，并允许玩家选择指定的元素。

如果需要设置分玩家的随机变量，请在命令中填入玩家的名称，否则插件会报错。

需要权限 `ultimateshop.setrandomplaceholder`。

## /shop search

获取手持物品对应的商品。

需要权限 `ultimateshop.search`。

## /shop sellhand

出售手持物品。

需要权限 `ultimateshop.sellahand`。

## /shop sellallhand

出售手持的所有物品。例如你的第一个槽位有15个苹果，第二个槽位有16个苹果，无论手持的是第一个槽位，还是第二个槽位，使用该指令将会出售全部的苹果（31个苹果）。

需要权限 `ultimateshop.sellallhand`。

::: info

sellhand = 只出售手持的所有物品。\
sellallhand = 以手上物品为基准，出售物品栏中与手持相同的所有物品。

:::

## /shop updategui \[玩家名称\]

更新指定玩家的商店界面。只会更新按钮，标题不受影响。

需要权限 `ultimateshop.updategui`。

## /shop updateguititle \[玩家名称\]

更新指定玩家的商店界面的标题。只会更新标题，商店界面不受影响。

需要权限 `ultimateshop.updateguititle`。

## /shop editor**<font color="Red">（仅付费版本）</font>**

打开游戏内编辑器。

需要权限 `ultimateshop.editor`。

## /shop searchgui \[搜索GUI菜单名称\]**<font color="Red">（仅付费版本）</font>**

打开指定的搜索 GUI，如果未指定，则打开 ID 为 `search` 的搜索菜单。

需要权限 `ultimateshop.searchgui`。

## 自定义变量命令 **<font color="Red">（仅付费版本）</font>**

对于自定义变量的完整命令列表，请[见此](../placeholders/custom-placeholder-premium.md)。