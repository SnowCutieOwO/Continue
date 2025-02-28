# 创作者指导
对创作者创建 Oraxen 资源包时的指导教程

## 介绍

Oraxen 有几种方式让你能够将你的 MCModels 模型置入其中。

本教程将会提到多种可行的方式。

家具、自定义方块或物品资源包各有差别，你在创建资源包时使用的配置也会略有不同。

推荐在你的可下载资源包中放入 Oraxen 的配置文件及其他相关文件，这能让用户更快速地开箱即用。

## 普通资源包结构教程

`model` 和 `textures` 属性都在 `pluginss/Oraxen/pack/models(或 textures)/` 下。

所以模型文件会储存在 `plugins/Oraxen/pack/models/packname_or_something/model_file.json`。

如果你想要使用其他命名空间，你应该将你的文件放入 `plugins/Oraxen/pack/assets/命名空间/models(或 textures)/`。在配置中用于 `model` 和 `textures` 的格式即为 `命名空间:文件路径`。

任意模型、贴图或文件路径都不应包含大写字母或空格。

1.13 之后的资源包文件中不支持这样的命名方式（尽管 Optifine 保留了这个功能）。

1. `assets/namespace/models/SOMETHING/my model.json` X
2. `assets/namespace/models/something/my model.json` X
3. `assets/namespace/models/something/my_model.json` ✓

纹理最高分辨率应当为 256x256px。这是件非常基础的事，但我还是需要将其指出。

无论什么情况，我们均不推荐你将诸如 `paper.json` 或其他基础材料文件导入。

在支持频道中这些是最经常被提及的问题，且可以通过最基础的 Oraxen 物品设置解决。

一般来说，如果一或多个 Oraxen 物品使用了这个材料，Oraxen 会负责将这些内容输出为最终资源包。    
这会让处理 CustomModelData 的过程更加简单，并解决大部分的问题。

## 普通配置项

自定义模型数据（CustomModelData）是资源包冲突最常见的问题。

一些资源包非常偏向于使用同种物品及相同的自定义模型数据值。

Oraxen 有几种解决问题的方法。

1. 如果配置文件没有指定 `Pack.custom-model_data`，Oraxen 会基于 `material` 和 `model` 为其分配最大的未使用值。
    1. 这个值通常会保存至配置文件，除非 `disable_automatic_model_data` 设置为 true。
    2. 创作者应该将这个值设置为 `true`，并且不在配置文本中指定自定义模型数据的值，以此允许 Oraxen 自行分配。
2. 对于替换字符，情况大致相似。它有一个 `code` 属性，Oraxen 会为其分配最大的未使用值。
    1. 这个值通常会保存至配置文件，除非 `disable_automatic_glyph_code` 设置为 true。
    2. 创作者应该将这个值设置为 `true`，并且不在配置文本中指定 `code` 的值，以此允许 Oraxen 自行分配。
3. 因为 ModelEngine 以 `LEATHER_HORSE_ARMOR` 为其基础属性，因此建议配置文本中不使用这个物品。
    1. 使用其他可染色的物品，如 `TIPPED_ARROW`、`POTION` 或 `SPLASH_POTION` 以让物品能够最大的兼容性。
4. 如果你在制作自定义盔甲，需要注意的是不同分辨率的贴图不能混用。
    1. 这意味着任何包含 128x64 贴图的装备将不能与 64x32 贴图的兼容。
    2. 购买者也应当被告知将 `armor_resolution` 设置为匹配所使用资源包的分辨率。
    3. 这个值应当被设置为 `armor_layer` 文件的长度。（128x64 为 32，64x32 为 16（默认））
    4. 装备对格式要求非常严格，非常建议参考[装备](configuration.custom-armors.md)部分的教程进行制作。


## 自定义物品

自定义物品为最普遍的资源包类型，在 Oraxen 上的实现方式也是最简单的。

你需要物品配置文件，以及为所有资源包准备的文件夹。

配置文件应当放在 `Oraxen/items` 下，命名无过多要求。

为便于分辨，建议将文件命名为与资源包相同或相近的格式。

示例配置文件如下：

```YAML
my_example_item:
  displayname: "<red>自定义物品"
  material: PAPER
  Pack:
    generate_model: false
    model: packname_or_something/model_file
```

这是最基础的示例。

如果你在使用 2D 物品，则 `Pack` 部分应当看起来像这样：

```YAML
Pack:
  generate_model: true
  parent_model: "item/generated"
  textures:
    - packname_or_something/texture_file
```

另外，`textures` 也接受指定的根名：

```YAML
Pack:
  generate_model: true
  parent_model: "item/generated"
  textures:
    top: packname_or_something/top
    bottom: packname_or_something/bottom
    side: packname_or_something/side
```

大多数使用了带朝向的方块，你可以更方便地指定侧边、顶部及底部的贴图。

基本上这些内容依赖于 `parent_model`，所以如果你有一个自定义条目树，你也可以如此照做。

`parent_model` 与 `model` 和 `textures` 的结构相同，所以你可以在这里使用 `命名空间:文件路径` 的格式。

## 自定义方块

自定义方块基本上就是自定义物品，只不过添加了一些方块机制。

这意味着你可以使用与上一段相同的配置，但需要加上 `Mechanics` 不分。

这里有两种类型的方块机制，`noteblock` 与 `stringblock`。

`noteblock` 基本上可用于任何实心方块，如石头、木头、泥土等。

`stringblock` 一般用于植物、花卉与其他没有碰撞箱的装饰物。

### 音符盒（NoteBlock）

`noteblock` 机制为大多数方块普遍使用的机制。

下文为示例配置：

```YAML
my_example_block:
  displayname: "<red>My Example Block"
  material: PAPER
  Pack:
    generate_model: true
    parent_model: "block/cube_all"
    textures:
      - something/texture_file
  Mechanics:
    noteblock:
      custom_variation: 1
      model: something/model_file
```

`custom_variation` 属性用于标识普通方块与特殊方块。

与 `custom_model_data` 不同的是，这不会自动分配，你必须自行指定。

因为它会生成在世界中，玩家就能够对其进行控制。

也许在未来的某个时间点，我们能实现为其的自动分配。如果你出售的资源包包含 README 说明文件，你就应该向买家提提及这件事。

`model` 属性与 `Pack` 部分的相同，且遵守同一规则。

如果启用了 `generate_model` 项且你指定了材质，则模型为你的物品 ID，即 `my_example_block`。

这里也有额外的子机制，如自定义音效、硬度等。

你可以在[音符盒机制](mechanics.noteblock-mechanic.md)及其子页面下了解更多。

### 绊线方块（StringBlock）

`stringblock` 机制用于没有碰撞箱的方块。

一般用于植物、花卉及其他装饰方块。

下文为示例配置文件：

```YAML
my_example_block:
  displayname: "<red>自定义方块"
  material: PAPER
  Pack:
    generate_model: true
    parent_model: "block/cross"
    textures:
        - something/texture_file
  Mechanics:
    stringblock:
      custom_variation: 1
      model: something/model_file
```

如你所见，这部分与 `noteblock` 机制相似。

有关的子机制可以在[绊线钩机制](mechanics.stringblock-mechanic.md)及其子页面下浏览。

## 自定义家具

家具一般为用到了 3D 模型的饰物，如椅子、桌子等。

下文为示例配置：

```YAML
my_example_furniture:
  displayname: "<red>示例家具"
  material: PAPER
  Pack:
    generate_model: false
    model: packname_or_something/model_file
  Mechanics:
    furniture:
      type: DISPLAY_ENTITY
      hitbox:
        width: 1.0
        height: 1.0
      display_entity_properties:
        display_transform: FIXED
      barrier: true
```

如你所见，这里有些你能够使用的属性。

`type` 属性可以指定家具类型。对应选项为 `DISPLAY_ENTITY`、`ITEM_FRAME` 和 `GLOW_ITEM_FRAME`。

`DISPLAY_ENTITY` 为 1.19.4 以上出现的一种新类型，也只能在 1.19.4 以上的服务器中生效。

推荐设置为这个选项，低版本会被自动调整为 `ITEM_FRAME` 选项。

这种类型有更多设置并允许更好的碰撞箱调整，且性能更高。

`hitbox` 属性用于指定家具的碰撞箱。

这个功能只在 1.19.4 以上的服务器有效，且会生成交互实体。

它只是一个碰撞箱，用于检测点击及其他与家具的交互。

这个实体一般没有碰撞箱，所以你需要使用 `barrier` 属性。

`display_entity_properties` 属性用于指定 `DISPLAY_ENTITY` 的属性。

`display_transform` 属性用于指定物品的形态。可用选项有 `FIXED`、`HEAD`、`BODY`、`LEFT_ARM`、`RIGHT_ARM`、`RIGHT_LEG` 以及 `GROUND`。

基本上这些就是 BlockBench 的 `Display` 部分的内容。

如果你想要 `ITEM_FRAME` 与 `DISPLAY_ENTITY` 间的兼容性，你应当使用 `FIXED`。，

ItemsAdder 因其使用了盔甲架，会使用相同的 `HEAD`。

你可以在[展示实体属性](mechanics.furniture-mechanic.display-entity-furniture.md#展示实体属性)部分详细阅读。

`barrier` 属性用于指定家具的碰撞箱。

这会在家具的位置放置一个普通的屏障方块。

你可以按如下格式放置多个屏障：

```YAML
Mechanics:
  furniture:
    barriers:
        - { x: 0, y: 0, z: 0 }
        - { x: 0, y: 1, z: 0 }
```

## 自定义声音

一些资源包可能会带有自然环境、实体或其他东西的音效。

推荐尽可能使用其他的命名空间。

这是因为 Oraxen 默认会基于 `sound.yml` 生成一个 sounds.json 文件，这会导致冲突。

如果用例允许自定义命名空间，你只需将 sounds.json 添加至 `Oraxen/pack/assets/namespace/`，并将声音文件添加至 `Oraxen/pack/assets/namespace/sounds` 文件夹下。

如果用例需要为 Minecraft 的普通声音，你不应该在资源包中包含 sounds.json。

因此你需要向 Oraxen 的 sound.yml 文件添加条目，来获得最大兼容性。

之后只需将声音文件添加至 `Oraxen/pack/assets/minecraft/sounds` 文件夹即可。