# 🔌 概述

安装插件后，MMOInventory 的单独实例可通过 Bukkit 的插件管理器访问。

``` Java
MMOInventory plugin = (MMOInventory) Bukkit.getPluginManager().getPlugin("MMOInventory");
```

## 界面

每个界面在内存中都有对应的 `Inventory` 实例。这个抽象接口包含两个实现，分别为用于自定义界面的 `CustomInventory`，和用于原版界面的 `VanillaInventory`。需要注意的是最多只能注册一个原版界面。

`Inventory` 示例包含界面的配置：物品与其中的槽位，点击触发的行为，打开或关闭界面时触发的动作...

首先，按如下方式访问 MMOInventory 的界面管理器：

``` Java
MMOInventory plugin = /* 见上 */
InventoryManager inventories = plugin.getInventoryManager();
```

随后可通过如下方法访问 `Inventory` 实例：

``` Java
CustomInventory someCustomInv = inventories.getCustom("custom_inventory_id");
VanillaInventory theVanillaInv = inventories.getVanilla();

Collection<Inventory> all = inventories.getAll();
Collection<Inventory> customInvs = inventories.getAllCustom();
```

## 槽位

`Inventory#getSlots` 方法会返回 `CustomSlot` 类中的实例集合。每个自定义槽位都对应箱子界面里玩家可放入物品的格子。

自定义槽位的关键功能是限制列表（每个限制条件占一个 `SlotRestriction` 对象）。它们是多个 `SlotRestriction` 抽象接口的实现，例如由 MMOItems 插件提供的 `LevelRestriction` 及 `TypeRestriction`。

## 注册限制类型

假设你有一个存储玩家数据的插件，插件中有一个 `SomePlayerData`，以布尔值的形式存储特定的标记，而你想让槽位将它用作限制条件。

那么首先，引入 `SlotRestriction` 的实现：

``` Java
public class MyRestriction extends SlotRestriction {
  public MyRestriction(MMOLineConfig config) {
    // 不需要配置？
  }

  @Override
  public boolean isVerified(InventoryData player, CustomSlot ignore2, ItemStack ignore1) {
    // 不依赖与物品放入的自定义槽位。
    // 同样不依赖放入的物品。

    SomePlayerData yourPlayerData = SomePlayerData.get(player.getPlayer());
    return yourPlayerData.canUseThisSlot();
  }
}
```

然后，通过 MMOInventory 的槽位管理器注册限制条件。在这里我们将其命名为 `my_restriction`

``` Java
MMOInventory plugin = /* 见上 */
InventoryManager inventories = plugin.getInventoryManager();
```

::: warning

请确保你的代码逻辑在 MMOInventory 载入后、启用前执行。如果你将插件用作*软/硬依赖*，你可以将其放入 `#onLoad` 部分。如果将 MMOInventory 设为*优先载入*，也可以将其放入 `#onEnable` 部分。

:::

之后就可以在界面配置中使用条件，限制放入的物品类型。与其他条件组合搭配还可以让玩家享受更多特权。

``` YAML
slots:
  ...
  SPECIAL_RING_SLOT:
    type: accessory
    material: GOLD_NUGGET
    custom_model_data_string: "ring1"
    name: "&6特殊戒指槽"
    slot: 34
    restrictions:
      - "mmoitemstype{type=RING}"
      - "my_restriction{}" # <<==== 这里！
    lore:
      - '拖动物品放置其上即可装备。'
      - ''
      - '该槽位只在完成'
      - '任务 XXXXX 后解锁。'
```

## 玩家数据

首先，通过如下格式访问玩家的数据对象。

``` Java
Player yourPlayer = /* 见上 */
MMOInventory plugin = /* 见上 */
PlayerDataManager manager = plugin.getDataManager();

PlayerData playerData = manager.get(yourPlayer);
```

每位玩家在内存中都有对应的 `PlayerData` 实例，每个注册的界面还拥有对应的 `InventoryData` 对象。`InventoryData` 抽象接口同时包含对自定义界面（`CustomInventoryData`）与原版界面（`VanillaInventoryDara`）的实现。

你可以通过如下方法获取 `InventoryData` 的实例：

``` Java
PlayerData playerData = /* 见上 */
CustomInventory customInv = /* 见上 */
Inventory someInv = /* 见上 */

VanillaInventoryData vanillaInvData = playerData.getVanilla();
CustomInventoryData customInvData = playerData.getCustom(customInv);
InventoryData invData = playerData.get(someInv); // either custom or vanilla
```


你可以通过如下方法获取装备的物品列表。`NORMAL` 查找模式会忽略放入无效槽位的物品，而 `IGNORE_RESTRICTIONS` 则会返回所有物品，包括玩家原版界面中的物品。

``` Java
List<InventoryItem> items = playerData.getItems(InventoryLookupMode.NORMAL);
```

`InventoryData` 抽象接口主要暴露两个关键方法，用于获取及更新界面内容。需要注意的是 `#setItem` 会触发 `InventoryUpdateEvent` 事件。

``` Java
InventoryData invData = /* 见上 */
CustomSlot someSlot = /* ... */

invData.setItem(someSlot, new ItemStack(Material.DIAMOND_SWORD));
invData.setItem(someSlot, null); // 移除物品

Collection<InventoryItem> content = invData.retrieveItems();
```

`InventoryItem` 类存储了物品及其位置的有关信息。