# 基于盔甲纹饰（1.20-1.21.1）

若你选择了纹饰作为 `custom-armor` 的类型，插件会帮你处理好大部分内容。

与核心着色器方法不同的是，盔甲纹饰可以不仅限于皮革材质。


默认情况下，Oraxen 使用锁链（`CHAINMAIL`），但可以在 `settings.yml` 中修改这些内容。

这之后，Oraxen 会基于你的自定义盔甲配置生成数据包。

因为它需要用到数据包，你需要在添加/移除盔甲套装后完全重启服务器才可应用改动。

::: warning
将 `CustomArmor.armor_type` 设置为 `TRIMS` 后，你需要：
1. 启动服务器，让其生成数据包
2. 关闭服务器
3. 再次重启，使其应用先前生成的数据包
:::

## 如何配置盔甲？

::: info 提示
确保你的 Oraxen 物品的 itemID 遵照了`盔甲名称_盔甲类型`的格式。

对于上文的示例，则为 `ruby_chestplate`、`ruby_leggings` 和 `ruby_boots`。

确保你的 `armor-layer` 文件遵照了 `**盔甲名称**_armor_layer_1或2.png` 的格式。

在下文的示例中，我们需要一份 `**ruby**_armor_layer_1.png` 和 `**ruby**_armor_layer_2.png` 文件。
:::

只需设置材料并指定两次纹理图标即可：

```YAML
ruby_helmet:
  displayname: "<gradient:#FA7CBB:#F14658>红宝石头盔"
  material: CHAINMAIL_HELMET
  Pack:
    generate_model: true
    parent_model: "item/generated"
    textures:
      - default/armors/ruby_helmet
      - default/armors/ruby_helmet
```

`trim_pattern` 必须存在才能让盔甲正常显示。

Oraxen 会在未指定该内容的情况下自动分配。

你也可以在 `trim_pattern` 下手动设置。

值应当为 `oraxen:盔甲名称`，所以在我们的示例中，它应该像这样：

```YAML
ruby_helmet:
  trim_pattern: oraxen:ruby
```