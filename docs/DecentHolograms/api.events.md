# 🚧 事件
DecentHolograms 提供的自定义事件

DecentHolograms 提供了一系列自定义事件，全都可以在指定情况下触发。* `
若要使用这些事件，将它们按需加入你的插件中，与其他服务器提供的事件进行组合使用。

## DecentHologramsEvent

此为最基础的事件。所有其他事件都从此继承，它可以用作其他基于 DecentHolograms 事件的全部捕获。

推荐使用更具体的事件，但如果你想要使用这个，推荐使用 `instanceof` 检查并获取更详细的事件实例使用。

这个事件不会影响服务器中的任何外部方法。

## DecentHologramsReloadEvent

这个事件会在命令 [`/dh reload`](general.commands.general.md#dh-reload) 命令重载服务器后触发。

如果你的插件需要注意 DecentHolograms 的任何重载（例如刷新通过其他方法添加的特殊内容），那么这个事件就会很有用。

这个事件不会影响服务器中的任何外部方法。

## HologramClickEvent

这个事件会在玩家左/右键点击悬浮字时触发。

这个事件可被取消，并允许你进一步处理相关内容。

这个事件提供了下列方法：

* `getPlayer()` - 返回点击了悬浮字的玩家。
* `getHologram()` - 返回被点击的悬浮字名称。
* `getHologramPage()` - 返回被点击的悬浮字页码。
* `getClickType()` - 返回点击类型（使用左右键点击，及点击时是否按住了 Shift）。
* `getEntityId()` - 返回被点击实体的类型。
