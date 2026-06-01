# 🌉 ItemBridge

本插件现已兼容 jhqwqmc 编写的 [ItemBridge](https://github.com/jhqwqmc/ItemBridge) 用作自定义物品提供器，它支持的插件数量远超我们的默认兼容列表。

## 支持插件列表

* [AzureFlow](https://www.minebbs.com/resources/9673)
* [Baikiruto](https://github.com/YsGqHY/Baikiruto)
* [CraftEngine](https://github.com/Xiao-MoMi/craft-engine)
* [CustomFishing](https://github.com/Xiao-MoMi/Custom-Fishing)
* [DragonArmourers](https://archives.mcbbs.co/read.php?tid=951699)
* [EcoArmor](https://github.com/Auxilor/EcoArmor)
* [EcoCrates](https://github.com/Auxilor/EcoCrates)
* [EcoItems](https://github.com/Auxilor/EcoItems)
* [EcoMobs](https://github.com/Auxilor/EcoMobs)
* [EcoPets](https://github.com/Auxilor/EcoPets)
* [EcoScrolls](https://github.com/Auxilor/EcoScrolls)
* [ExecutableItems](https://modrinth.com/plugin/executableitems)
* [HeadDatabase](https://www.spigotmc.org/resources/14280)
* [HMCCosmetics](https://github.com/HibiscusMC/HMCCosmetics)
* [ItemsAdder](https://www.spigotmc.org/resources/73355)
* [MagicGem](https://liyi2015.gitbook.io/magicgem/)
* [MMOItems](https://gitlab.com/phoenix-dvpmt/mmoitems)
* [MythicMobs](https://mythiccraft.io/index.php?resources/1)
* [NeigeItems](https://github.com/ankhorg/NeigeItems-Kotlin)
* [Nexo](https://polymart.org/product/6901)
* [Nova](http://github.com/xenondevs/Nova)
* [Oraxen](http://github.com/oraxen/oraxen)
* [PxRpg](https://www.pxpmc.com/a/pxrpgfree.html)
* [Ratziel](https://github.com/TheFloodDragon/Ratziel-Beta)
* [Reforges](https://github.com/Auxilor/Reforges)
* [Sertraline](https://github.com/zzzyyylllty/Sertraline-Hydrochloride)
* [Slimefun](https://github.com/Slimefun/Slimefun4)
* [StatTrackers](https://github.com/Auxilor/StatTrackers)
* [SX-Item](https://github.com/Saukiya/SX-Item)
* [Talismans](https://github.com/Auxilor/Talismans)
* [Zaphkiel](https://github.com/TabooLib/zaphkiel)

## 将 ItemBridge 用作自定义物品提供器

找到 `config.yml` 中的 `hook-item-method`，将其改为 `ITEMBRIDGE`。之后，重启服务器。

``` YAML
# 支持填入的值：DEFAULT 或 ITEMBRIDGE
hook-item-method: 'DEFAULT'
```

之后，使用物品格式中的 `hook-plugin` 与 `hook-item` 获取其他物品库插件的物品。

::: warning

需要注意的是，默认的自定义物品提供器与 ItemBridge 使用的 `hook-item` 格式不同。例如：

在内置的自定义物品提供器中，CraftEngine 物品需要在 `hook-item` 部分这样填写（命名空间;;物品ID）：

``` YAML
hook-plugin: 'CraftEngine'
hook-item: 'myemoji;;happy'
```

而在 ItemBridge 自定义物品提供器中，CraftEngine 物品则需要在 `hook-item` 部分这样填写（命名空间:物品ID）：

``` YAML
hook-plugin: 'CraftEngine'
hook-item: 'myemoji:happy'
```

:::

在使用这两种物品提供器时，如果不知道如何填入物品格式，可以手持物品输入命令 `/shop generateitemformat`，将其自动转化为插件支持的物品格式。执行命令后，`plugins/UltimateShop`（或 `plugins/<你使用的插件名称>`）文件夹下会新增一个 `generated-item-format.yml` 文件。