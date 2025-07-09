# 交易提醒

本插件包含两种交易提醒：

* 对店主的交易提醒
* 对带有权限的所有玩家的交易提醒

若要防止玩家从同一个交易收到两次信息，在两种提醒都启用的情况下，店主提醒会覆盖全局提醒。

## 店主提醒


这些提醒可以在配置文本的 `notify-shop-owners-about-trades` 设置下开启（默认启用）。

在本插件的编辑器内有一个选项允许店主在指定商店禁用提醒。这只对玩家商店有效，且只会影响到发送给店主的提醒，而不会对通过权限发送给其他玩家的提醒产生任何影响。

## 全局交易提醒

这些提醒可以在配置文本的 `notify-players-about-trades` 设置下开启（默认禁用）。启用后，交易提醒会发送至所有拥有权限的玩家：

* `shopkeeper.trade-notifications.admin`（默认状态：`false`）：拥有该权限的玩家会收到所有管理员商店的交易提醒。
* `shopkeeper.trade-notifications.player`（默认状态：`false`）：拥有该权限的玩家会收到所有玩家商店的交易提醒。

## 自定义

交易提醒消息可以在自行创建的语言文件中修改。具体修改方法可在[语言文件](installtion-updating.language-files.md)章节阅读。    
不同类型的交易有不同的提醒文本。默认的消息不会在所有情况下都用得到，但这可以让消息的显示变得更加灵活。

另外，配置中 `trade-notification-sound`（默认禁用）与 `shop-owner-trade-notification-sound` 允许在玩家收到交易提醒时播放音效。这些声音可以通过设置为空字符串禁用。

## 防止刷屏

为了防止刷屏。短时间内的多次相似交易会被合并为一条。缺点是发送消息可能会略晚于交易实际发生的时间。

但是，这不会完全防止玩家通过交易刷屏。如果这对你的游玩产生了影响，你可能需要禁用交易提醒，直到我们想出了更完备的应对措施。

玩家也可以通过命令 `/shopkeeper notify trades` 禁用交易提醒（见[命令](commands.md)章节）。玩家在每次进入服务器后的第一条交易都会进行提醒。提示消息可以点击，并会在点击后自动在输入框填入命令。这条提示只在玩家拥有对应权限时显示（见[权限列表](installtion-updating.permissions.md)部分）。

但是，插件不会追踪任何玩家数据，交易提醒目前只能在每次启动游戏并进入服务器游玩的这段时间内有效。在玩家退出后效果就会消失。

## 未来改进

插件未来会着手改进如下内容：

* 库存不足的提醒：https://github.com/Shopkeepers/Shopkeepers/issues/746
* 库存已满的提醒：https://github.com/Shopkeepers/Shopkeepers/issues/746
* 对消息刷屏的保护优化：https://github.com/Shopkeepers/Shopkeepers/issues/748
* 在玩家离线时存储提醒：https://github.com/Shopkeepers/Shopkeepers/issues/749
* 记住玩家对消息提醒的设置：https://github.com/Shopkeepers/Shopkeepers/issues/747
* 在控制台记录交易：https://github.com/Shopkeepers/Shopkeepers/issues/750
* 将交易消息跨服传递至同一 BungeeCord 群组下另一子服中的玩家。