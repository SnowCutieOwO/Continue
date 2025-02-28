# CustomBlockExpansion

这是一个 Oraxen 的拓展，它添加了一些新的自定义方块类型。

它允许你添加自定义门、活板门、楼梯、台阶与透明方块。

下文为每种不同类型的方块示例配置。

::: info 提示
该部分所述内容还未完全发布，但验证的 Oraxen 购买用户可以在 Discord 体验尝鲜版。

需要注意的是每种类型当前只能创建四种变种。
:::

::: warning 提示
这个拓展依赖新版本的涂蜡铜块。

这个拓展尝试通过“假涂蜡铜块”方块来重新加入这个逻辑。

如果你不介意玩家为铜块涂蜡，你可以在 `plugins/Oraxen_CustomBlockExpansion/config.yml` 禁用它来提升性能。
:::

::: warning 提示
转化已有世界时应当多加小心。

在 1.21，试炼之地会生成涂蜡的铜块及其变种，可能会发生一些意想不到的问题。

请使用下文的 WorldConverter 工具转化你的世界。
:::

## 自定义楼梯

```YAML
custom_stair:
  material: PAPER
  itemname: 自定义楼梯
  Pack:
    generate_model: true
    parent_model: block/stairs
    textures:                      # 不同纹理的示例
      bottom: block/reinforced_deepslate_bottom
      side: block/reinforced_deepslate_side
      top: block/reinforced_deepslate_top
  Mechanics:
    custom_stair:
      custom_variation: 1          # 可填入 1-4 
      model: custom_stair          # 物品的 ID，除非你预先提供了模型而非只有贴图
```

## 自定义台阶

```YAML
custom_slab:
  material: PAPER
  itemname: 自定义台阶
  Pack:
    generate_model: true
    parent_model: block/slab
    textures:
      bottom: block/reinforced_deepslate_bottom
      side: block/reinforced_deepslate_side
      top: block/reinforced_deepslate_top
  Mechanics:
    custom_slab:
      custom_variation: 1          # 可填入 1-4 
      model: custom_slab          # 物品的 ID，除非你预先提供了模型而非只有贴图
```

## 自定义门

门的配置添加方式与其他方块略有不同，它需要两个配置。

如果它使用了 `block-parent-models`，则手持模型样式会不正确显示。

第二个配置文件能让 Oraxen 生成必要模型以防止这个问题。

如果你有自己的 json 模型，则你可以不配置第二个文件。

手持形式物品的配置：

```YAML
custom_door:
  material: PAPER
  itemname: Custom Door
  Pack:
    generate_model: true
    parent_model: item/generated   # 手持物品时使用的模型
    textures:
      - item/oak_door        # 手持物品时使用的模型
  Mechanics:
    custom_door:
      custom_variation: 1          # 可填入 1-4 
      model: custom_door_placed    # 物品的 ID，除非你预先提供了模型而非只有贴图
```

方块形式物品的配置：

```YAML
custom_door_placed:
  # 负责处理放置形态方块所使用的模型及其生成
  # 这部分与其他所有在纹理包部分中的方块类型相同
  # 但因门的特殊机制，需要将其分开配置
  Pack:
    generate_model: true
    parent_model: block/door_bottom_left        # 默认为门使用 parent-model
    textures:
      bottom: block/reinforced_deepslate_bottom
      top: block/reinforced_deepslate_top
  # 额外属性，防止物品被“注册”成为 Oraxen 物品
  injectID: false
  excludeFromInventory: true
  excludeFromCommands: true
```

## 自定义活板门

```YAML
custom_trapdoor:
  material: PAPER
  itemname: Custom Trapdoor
  Pack:
    generate_model: true
    parent_model: block/template_orientable_trapdoor_bottom
    textures:
      texture: block/reinforced_deepslate_side
  Mechanics:
    custom_trapdoor:
      custom_variation: 1         # 可填入 1-4
      model: custom_trapdoor      # 第二个配置中的物品 id，负责决定方块模型的生成
```

## 自定义透明方块

这种类型是为诸如树叶的透明方块使用的。

对无需透明度的正常方块，请参考[音符盒机制](mechanics.noteblock-mechanic.md)章节。

```YAML
custom_grate:
  material: PAPER
  itemname: Custom Grate
  Pack:
    generate_model: true
    parent_model: block/cube_all
    textures:
      - block/reinforced_deepslate_side
  Mechanics:
    custom_grate:
      custom_variation: 1          # 可填入 1-4
      model: custom_grate          # 第二个配置中的物品 id，负责决定方块模型的生成
```