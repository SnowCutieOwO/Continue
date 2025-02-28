# 方块

方块数据被分为两部分，*类型*与*状态*。这些通过 `BlockType` 和 `BlockState` 类表示。方块种类的例子是 `minecraft:oak_log`，状态为分类 `minecraft:oak_log` 和*属性* `[axis=y]`。

你可以在 `BlockType` 中通过方法 `getDefaultState()` 或提供正确的属性映射表至 `getState(Map)` 方法中获得 `BlockStates` 对象。

例如，获取 `minecraft:oak_log[axis=y]` 的状态：
```Java
BlockType oakLog = Objects.requireNonNull(BlockTypes.OAK_LOG);
BlockState yFacingOakLog = oakLog.getState(ImmutableMap.of(
    oakLog.getProperty("axis"), "y"
));
System.err.println("State: " + yFacingOakLog);
```

部分方块包含 NBT 数据，它们是通过 `BaseBlock` 类型表示的。

你可以通过 `toBaseBlock(CompoundTag)` 方法从 `BlockState` 获取 `BaseBlock`。