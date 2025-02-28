# 背包保存
若你的服务器使用了 `keepInventory`，一种让玩家在死后保留背包物品的规则，HuskSync 内置的死亡快照和死亡玩家背包同步功能可能导致同步问题。

若要解决此问题，你需要修改配置文本 `config.yml` 的内容，如下文所示。

## 为什么会这样？
HuskSync 在玩家死亡时有特殊处理，以应对玩家死后切换服务器的情况（防止物品丢失）。

* 死亡状态保存——HuskSync 有特殊的逻辑保存玩家数据快照，*除了*他们切换服务器时的*背包内容*。当 [`keepInventory` 游戏规则](https://zh.minecraft.wiki/w/%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99)启用时，背包栏仍然保存着物品，所以快照不会正确保存。该逻辑是默认启用的；
* 死亡时创建快照—HuskSync 在玩家死亡时会创建一个用于备份的特殊快照，拿走他们的掉落物并将它们重新放回玩家的背包。当 `keepInventory` 启用时，玩家不会掉落物品，所以这会导致不正确的快照被创建。该功能默认启用。

## 这要如何修复？

你需要将 `config.yml` 中的 `synchronization.save_on_death`（控制是否在死亡时生成快照）、`save_empty_drops_on_death`（控制空背包的玩家是否在死亡时产生快照）和 `synchronization.synchronise_dead_players_changing_server`（控制切换服务器时是否同步死亡玩家的背包）项设置为 `false`。

### config.yml 中的示例
```YAML
synchronization:
    # ...
    save_on_death: false # <-- 将这个设置为 false
    save_empty_drops_on_death: false # <-- 将这个设置为 false
    # ...
    synchronise_dead_players_changing_server: false # <-- 将这个设置为 false
```

## 通过自定义 keepInventory 设置排除问题

若上述的操作方法对你均无效，你可能需要再做一些额外的事情才能让它正确工作。

若你的服务器使用了高级的设置，例如只保留物品，其他不受插件逻辑影响，那么你需要使用 HuskSync API 来创建一个联动来更新 DataSaveEvent 事件上的数据，以此解决*死亡玩家*切换服务器所产生的问题.

若你的服务器使用了一个权限节点来控制死亡的物品保存，你应该能按照上述步骤正常设置，方法可能据服务器的设置方式和处理玩家的不同方式而略有区别。请注意这个选项可能也会和其他试图保存物品的插件冲突。