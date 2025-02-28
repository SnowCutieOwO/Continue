# 事件优先级

若你正在使用检查退出、加入或死亡时玩家身上的物品或属性并进行操作的插件，例如战斗记录插件时，你可能会遇到诸如事件执行顺序等于 HuskSync 的兼容性问题。

在战斗记录插件方面，这意味着 HuskSync 监听了一个在玩家死亡、加入或退出游戏时调用的事件，且先于战斗记录插件执行击杀玩家、处理物品。换句话说，玩家会起死回生，并被同步至他们尚未死亡的状态。这会引起刷物品的问题。

HuskSync 提供了一个自定义事件优先级的方法—也就是，HuskSync 监听事件调用的优先级—来让你修复这个问题。

## 修改事件优先级

在 HuskSync 2.1.3 或更高的版本，你可以在 `config.yml` 下的 `synchronization` 设置下修改事件的优先级，如下文所示：
```YAML
synchronization:
  #(...)
  event_priorities:
    join_listener: LOWEST
    death_listener: NORMAL
    quit_listener: LOWEST
```
若要修改玩家加入、死亡或退出事件的优先级，只需简单的将值修改为下列的三个之一：

1. `LOWEST`（最先执行，在事件触发后即开始处理）
2. `NORMAL`（在所有的 LOWEST 监听处理完毕后处理）
3. `HIGHEST`（在所有的 NORMAL 和 LOWEST 事件处理完毕后处理）

请注意，默认情况下 HuskSync 最先监听加入与退出事件（`LOEWST`）。这是出于同步需要；在退出事件监听的情况下，断开连接的一开始就可让 HuskSync 保存数据。这是因为部分插件可能会增加服务器的 tick 循环，导致在数据保存时出现问题，从而影响到系统的正常工作。

## 战斗记录

对于使用战斗记录插件的服主——若有在PVP时击杀玩家的玩家退出游戏情况的——应当将 `quite_listener` 设置为 `NORMAL` 或 `HIGHEST`。