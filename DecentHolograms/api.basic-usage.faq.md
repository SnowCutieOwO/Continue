# 常见问题
使用 DecentHolograms 时常出现的问题

本章节详细讲述了 DecentHolograms API 相关的问题。如果你碰到了在这里没有列出的问题，考虑一下加入我们的 Discord 群组并在这里询问我们。

## 我如何只让特定玩家看到悬浮字？

让指定玩家看见悬浮字稍微有些费劲。    
一个悬浮字默认会展示给所有人，如果只是把这个玩家从可见列表里移出，可能做不到你想要的效果。

所以，在[获取悬浮字对象](api.basic-usage.dhapi.md#获取悬浮字)之后，将它的默认可见性设置为 `false`：

```Java
hologram.setDefaultVisibleState(false);
```

在这之后，将能看见悬浮字的玩家通过这个方法设置：

```Java
hologram.setShowPlayer(player);
```

你也可以将玩家移出可见列表：

```Java
hologram.removeShowPlayer(player);
```

若你想要做到相反的操作 —— 只让特定玩家看不见悬浮字 —— 你可以通过 `setHidePlayer` 方法做到：

```Java
hologram.setHidePlayer(player);
```

也有将玩家移出隐藏列表的方法：

```Java
hologram.removeHidePlayer(player);
```

需要注意的是，在使用 `setHidePlayer` 方法时，`setDefaultVisibleState` 需要设置为 `true` 才可以正常工作。这是悬浮字的默认状态，除非你手动修改。