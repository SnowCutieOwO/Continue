# MythicCrucible
Crucible 是 MythicMobs 的一个拓展。

与 Crucible 的联动允许你导入 MythicMobs & Crucible 物品库中的物品，并基于它们创建你的 Oraxen 物品（原本的物品会保留在对应插件，你可以通过 Oraxen 为其添加机制、贴图或 3D 模型等。）

若要这么做，只需在 Oraxen 的物品配置中增加 `crucible` 部分配置并指定对应插件的物品 ID 即可，如下文配置所示：

```YAML
example_crucible:
  displayname: "<gradient:#59A7EA:#F1D2FF>测试"
  crucible:
    id: my_crucible_itemid
```