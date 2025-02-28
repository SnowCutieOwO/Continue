# ⌨️ 命令

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

与快速购买相同，将 quickbuy 替换为 quicksell 即可。

`amount` 可替换为 `*` 符号，此时插件会将背包中所有符合条件的物品出售。**<font color="Red">（仅付费版本）</font>**

## /shop reload

重载插件，一些配置需要你重启服务器才可生效。

需要权限 `ultimateshop.reload`。

## /shop givesellstick <物品 ID> <玩家 ID> \[数量\] **<font color="Red">（仅付费版本）</font>**

给予指定玩家指定数量（不填则默认为 1）的出售魔杖。

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

## /shop resetrandomplaceholder <变量 ID> **<font color="Red">（仅付费版本）</font>**

重置随机变量的值。

需要权限 `ultimateshop.resetrandomplaceholder`。

## /shop setrandomplaceholder <变量 ID> \[元素\] **<font color="Red">（仅付费版本）</font>**

设置随机变量的值。

与上一条命令不同的是，它不会重设刷新时间，并允许玩家选择指定的元素。

可在命令末尾添加 `-b` 参数来绕过元素存在性检查，即你可自行设置自定义元素。例如，一个随机变量只有 `A,B,C` 三个元素，若在此填入元素 **D**，则插件会报错，如果在命令末尾添加了 `-b` 参数，则变量值会被设置为 **D**，且插件不会报错，但不推荐你这么干。

需要权限 `ultimateshop.setrandomplaceholder`。

## /shop editor **<font color="Red">（仅付费版本）</font>**

打开商店编辑器。

需要附属插件 **UltimateShopEditor**，你可在 SpigotMC 下载它。

需要权限 `ultimateshop.editor`。