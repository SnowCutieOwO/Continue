# MMOItems
MMOItems 引入了带有独特攻击效果的物品

与 MMOItems 的联动允许你导入对应物品库中的物品，并允许以之为 Oraxen 的基础（会保留 MMOItems 的原本配置，在本插件内的配置保存的是额外添加的机制、自定义贴图或 3D 模型等）。

若要实现这个，只需向 Oraxen 的物品配置中加入一个 `mmoitem` 部分即可，如下：

```YAML
example_mmoitem:
  displayname: "<gradient:#59A7EA:#F1D2FF>测试"

  mmoitem:
    type: SWORD
    id: FALCON_BLADE
    level: 10 # 可选
    tier: RARE # 可选
    match_level: true # 可选
```