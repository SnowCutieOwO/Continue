# SSBSlimeWorlds

SuperiorSkyblock2 的 SlimeWorlds 兼容模块！

SlimeWorlds 由 Hypixel 设计，用于优化空岛类世界的处理方式。

原版世界的设计旨在提高大面积区域的效率，因此它们在处理空岛世界时效率低下。SlimeWorlds 则更加优化且高效。

安装模块后，所有岛屿都会变成 SlimeWorld 专有世界的格式。

## 问题排查

自动保存卡顿

只需在 `bukkit.yml` 中像这样调整自动保存的间隔即可：

``` YAML title="bukkit.yml"
ticks-per:
  autosave: 6000
```

这会让世界每五分钟保存一次。