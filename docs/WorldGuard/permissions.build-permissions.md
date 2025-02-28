# 建筑权限

这是一个额外的功能，允许你以权限节点的方式决定玩家的建筑行为。可以在配置文本中如下位置启用这个功能：
``` YAML
build-permission-nodes:
    Enable: true # <--- 这里
    deny-message:
```
    
可以设置在玩家试图破坏无权限挖掘的区域时发出的提示消息，可设可不设。

## 权限列表

* 放置方块: `worldguard.build.block.place.<材料名>`
* 破坏方块: `worldguard.build.block.remove.<材料名>`
* 与方块交互: `worldguard.build.block.interact.<材料名>`
* 实体放置: `worldguard.build.entity.place.<实体种类>`
* 实体破坏: `worldguard.build.entity.remove.<实体种类>`
* 与实体交互: `worldguard.build.entity.interact.<实体种类>`
* 攻击实体: `worldguard.build.entity.damage.<实体种类>`
* 使用物品: `worldguard.build.item.use.<材料名>`

权限节点也可以 `worldguard.build.block.<材料名>.<操作种类>` 的格式检查，所以诸如 `worldguard.build.block.<材料名>.place` 的权限节点也会生效。

可用材料名称的列表来自于 Bukkit 的材料名称列表文档。例如，允许放置床方块的权限是 `worldguard.build.block.place.red_bed`。需要注意的是*材料名*处填入的既可以是物品名称，也可是方块名称。
