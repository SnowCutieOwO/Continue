# 基于组件（1.21.2+）

若选择组件作为 `custom_armor` 类型，则你不会像盔甲纹饰和着色器方法那样受到任何限制。

与着色器方法不同的是，这个方法不会破坏着色器模组的兼容性，且不仅限于皮革盔甲物品。

除此之外，它也可以不仅限于盔甲类物品。你甚至可以使用纸。

其他方法过去的不足之处都不会在它这里遇到。

## 如何配置盔甲？

::: info 提示
确保你的 Oraxen 物品的 itemID 遵照了`盔甲名称_盔甲类型`的格式。

对于上文的示例，则为 `ruby_chestplate`、`ruby_leggings` 和 `ruby_boots`。

确保你的 `armor-layer` 文件遵照了 `**盔甲名称**_armor_layer_1或2.png` 的格式。

在下文的示例中，我们需要一份 `**ruby**_armor_layer_1.png` 和 `**ruby**_armor_layer_2.png` 文件。
:::

只需设置材料，无需重复指定纹理图标：

```YAML
ruby_helmet:
  displayname: "<gradient:#FA7CBB:#F14658>Ruby Helmet"
  material: PAPER
  Pack:
    generate_model: true
    parent_model: "item/generated"
    textures:
      - default/armors/ruby_helmet
```

若要让盔甲能正常显示，可装备组件必须存在。

Oraxen 会在你没有手动指定的情况下自动为其分配。

如果你想的话，你也可以手动分配。

值必须为 `oraxen:盔甲名称`，所以在本示例中为：

```YAML
ruby_helmet:
  Components:
    equippable:
      slot: HEAD
      model: oraxen:ruby
```