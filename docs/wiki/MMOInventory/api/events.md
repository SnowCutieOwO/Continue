# 📮 事件

本章简要讲述了 MMOInventory 可以发起的 Bukkit 事件。

## `InventoryUpdateEvent`

每次界面内容更新后触发。`#getPreviousItem` 返回替换前的物品，若无则返回 `null`。`#getNewItem` 则返回替换后的物品，若无则返回 `null`。`#getInventoryData` 返回玩家的界面数据。`#getSlot` 则返回被点击的格子位置。

该事件无法取消。它一般用于向 MMOItems 发送界面更新。

## `ItemEquipEvent`

`InventoryUpdateEvent` 的对应可取消部分。只在玩家点击箱子界面内的格子时调用。需要注意的是，它也会在玩家与原版界面中的自定义格子交互时触发。

注意，点击编辑物品检测并不容易，这可能会导致与 MMOItems 的更新不同步。解决方法如下：

* 监听先前事件，或设置计划任务，在下一刻通过 `InventoryData#setItem` 编辑。
* 或编辑对应位置的装备物品，设置其物品类型与元数据。需要注意的是 MMOItems 在诸如减少耐久或降级物品的行为中会这么做。因此需要在此之后再次解析 MMOItems 的修饰符。