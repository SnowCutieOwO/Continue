# 🔍 自定义物品匹配方法

## 默认物品匹配方法

### 原版物品

默认情况下，我们支持两种出售匹配，即：

* Bukkit：这个出售方法要求对应物品完全匹配，若玩家手上的物品存在差别，则它无法被出售。例如，增加了额外附魔，或在铁砧中修改了物品名称，而这会导致物品的 NBT 信息被修改。
* ItemFormat：物品格式只支持读取原版 NBT，它可以设置原版 NBT 的忽略列表。如果你在忽略列表里加入了附魔，则玩家仍可以在修改名称或添加附魔后出售对应物品。

示例配置：

``` YAML
sell:
  # 支持填入: Bukkit 或 ItemFormat.
  # 对于每个物品, 你可以添加 match-item 部分来制作自定义出售匹配方法, 更多信息请见 Wiki.
  sell-method: Bukkit
  # 仅支持 ItemFormat 出售方法.
  item-format:
    require-same-key: false
    ignore-key:
      - 'lore'
      - 'damage'
      - 'enchants'
      - 'tool.damage-per-block'
      - 'nbt.CustomNBTKey'
```

对于 `item-format` 部分的选项：

* `require-same-key`：这表示商店中的物品必须拥有玩家物品上的所有数据。  
  例如：商店有一把不带任何附魔的钻石剑，如果玩家想将一把带锋利附魔的钻石剑出售至商店，且 `require-same-key` 选项为 `true`，则玩家无法完成这个操作。因为商店中的钻石剑没有附魔数据。
* `ignore-key`：物品格式™列表，在检查物品是否相同时无视这些内容。  
  例如：商店有一把带锋利附魔的钻石剑，如果玩家出售的钻石剑没有对应附魔，且该列表中没有设置 `enchants` 选项，则玩家无法完成这个操作。否则插件就会无视物品上的附魔并继续检查其他数据。

::: info

你可以通过命令 `/shop generateitemformat` 判断手持物品的物品格式，键名也会在其中显示。例如，如果你只想无视锋利附魔而保留其他附魔，则你可以在 `ignore-keys` 中填入 `enchants.sharpness` 而非 `enchants`。

:::

### 第三方插件物品

由[受支持插件](info.compatibility.md)生成的物品会自动判断其物品 ID 并与物品格式内 `hook-item` 选项的物品 ID，所以无论它怎么变化，它最终都可以正常出售。

## 单物品自定义匹配方法 - 需要安装 MythicChanger

尽管上述的物品格式方法能够解决物品被修改导致无法出售的问题，它仍然不够灵活。因此，这个功能可以帮助你为每个物品设置自定义物品出售模式。

你可以在每个物品或价格的配置中增加一个 `match-item` 部分，这可以设置物品是否达到要求并可出售。

如果你想要在玩家尝试购买该物品并展示在插件的商店界面与变量后给予玩家在此处设置的物品，你还是需要用到物品格式。

这个功能需要你的服务器安装 MythicChanger 插件，请在这里获取：

* 免费版：[点此下载](https://www.spigotmc.org/resources/mythicchanger-match-and-modify-all-your-items-without-trouble-1-14-1-21.98523/)
* 付费版：[点此下载](https://www.spigotmc.org/resources/mythicchanger-premium-match-and-modify-all-your-items-without-trouble-1-14-1-21.115913/)

对于如何配置 `match-item` 部分的教程，请阅读 MythicChanger 的维基。[点此访问](https://mythicchanger.superiormc.cn/configs/match-item)。需要注意是部分插件的匹配规则需要<font color="red">付费版本的 MythicChanger，而非付费版的 UltimateShop</font>！

示例物品如下所示。在本示例中，绿宝石和钻石都可以出售，但只有钻石会在商店中显示。在玩家购买该物品后，他只会获得钻石，因为 `match-item` 部分不影响购买。

``` YAML
  A:
    price-mode: ALL
    product-mode: CLASSIC_ALL
    products:
      '1':
        material: diamond
        amount: 1
        match-item: # 此为添加的 match-item 部分.
          material: # 此为匹配规则键! 可在 MythicChanger 维基了解更多!
            - diamond
            - emerald
          has-name: false # 此为匹配规则键! 可在 MythicChanger 维基了解更多!
      '2':
        # 更多子物品?
    buy-prices:
        # 你也可以在购买价格下设置匹配规则!
```