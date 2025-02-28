# 音符盒机制
如何向游戏内添加自定义方块

## 如何创建一个简单的方块？

### 父模型

Oraxen 的物品根配置对任何物品都相同（你可以使用任何材料，比如钻石）并能为其设置一个显示名称等

在 `pack` 部分，你可以使用自己的模型，也可以使用插件生成的。

若要生成一个方块模型，你只需选择方块所使用的父模型即可。

方块支持的 `parent_models` 有：

`block/cube_all`、`block/cross`、`block/orientable`、`block/orientable_vertical` 与 `block/cube_column`。

```YAML
my_block:
  displayname: "My block"
  material: DIAMOND
  Pack:
    generate_model: true
    parent_model: "block/cube_all"
    textures:
      - my_block_texture.png
```

每个父模型都使用了不同数量的纹理。

`block/cube_all` 需要一份纹理，`block/cube_column` 需要两份纹理，`block/cross` 需要一份纹理，`block/orientable` 需要三份纹理，`block/orientable_vertical` 需要两份纹理。

例如，如果你想要有向方块机制制作一个原木，你应该使用 `block/cube_coulmn`。

## 方块机制配置

若要使用这个机制，你需要告诉 Oraxen 使用哪个模型（对于交由插件处理的，只需将物品名称放入即可）。之后你需要使用其他方块不使用的 `custom_variation`（因为默认情况下 1 会被洞穴方块使用，你你可以使用诸如 2 的值）。这个示例掉落配置允许你通过石镐挖掘这个方块并获取其掉落物。

```YAML
Mechanics:
  noteblock:
    custom_variation: 2
    model: my_block
    drop:
      silktouch: false 
      minimal_type: STONE
      loots:
        - {oraxen_item: caveblock, probability: 1.0}
```

## 自定义破坏速度

你可以在 `hardness` 部分配置中设置方块挖掘的最适工具及挖掘速度。

```YAML
Mechanics:
  noteblock:
    custom_variation: 2
    model: my_block
    hardness: 20 # 这会让它难以空手挖掘
    drop:
      silktouch: false 
      minimal_type: STONE
      best_tools:
        - PICKAXE # 使用镐挖掘更快
      loots:
        - {oraxen_item: caveblock, probability: 1.0}
```

## 限制放置

你可以在 `limited_placing` 部分设置中决定自定义方块/家具可以被放在哪些方块上。你可以使用诸如 `roof`、`floor` 和 `wall` 的选项来决定能被放在方块的哪一面。默认情况下这些都会被设置为 `true`。

`type` 参数决定了拒绝模式为白名单或黑名单。

若为 `ALLOW`，则只有列表内的方块能够依附它们。

若为 `DENY`，则列表内的方块不能被它们依附。

这里也存在着一个 `radius_limitation` 选项，允许你限制指定半径内家具的数量。

```YAML
chair:
  Mechanics:
    furniture:
      limited_placing:
        radius_limitation:
          radius: 20
          amount: 10
        roof: false
        floor: true
        wall: false
        type: ALLOW
        block_types:
          - GRASS_BLOCK
          - DIRT
        block_tags:
          - base_stone_nether
        oraxen_blocks:
          - chair
          - ruby_ore
```

`block_tags`（方块标签）可填入的内容能在[这里](https://minecraft.fandom.com/wiki/Tag#Block_tags)找到。适用于拒绝/允许一系列有指定标签的方块。

`block_types` 即为材料名称。适用于拒绝/允许指定的方块。

`oraxen_blocks` 为 Oraxen 配置中定义的方块。

允许所有自定义方块与家具填入此处，但家具必须设置 `barrier-hitbox`（屏障碰撞箱）。

## 发光

你可以通过 `light` 选项来让方块发光。

```YAML
Mechanics:
  noteblock:
    custom_variation: 2
    model: my_block
    light: 5
    drop:
      silktouch: false 
      loots:
        - {oraxen_item: my_custom_item, probability: 1.0}
```

## BlockLocker

你可以通过这个选项来允许容器被 [BlockLocker](https://www.spigotmc.org/resources/blocklocker.3268/) 的锁保护。

有效的保护类型为 CONTAINER、DOOR、ATTACHABLE。

```YAML
Mechanics:
  furniture:
    blocklocker:
      can_protect: true
      protection_type: CONTAINER
```

::: info 提示
该功能需要 LightAPI，但这个插件不能在新版本的 Paper 上运行，因为高版本对区块与光照处理有着许多变化。

你可以在[这里](https://github.com/IPECTER/LighterAPI/releases/tag/5.4.0-SNAPSHOT)找到原插件的分支版本。

这个版本应该能在新版本的 Spigot 与 Paper 上正常运行。
:::

* [LightAPI（SpigotMC）](https://www.spigotmc.org/resources/lightapi.4510)

## 容器

这是家具与音符盒机制的一个子机制，允许你将自定义方块设置为容器。

例如箱子、衣柜或其他什么的方块。

这里有你能选择的不同类型：*STORAGE*、*PERSONAL*、*ENDERCHEST* 与 *DISPOSAL*。

**STORAGE** 与普通箱子类型，任何玩家都可以打开并存取物品。

**PERSONAL** 类似自定义末影箱，允许你自行决定行数等内容。

**ENDERCHEST** 就是原版的末影箱，但允许你通过指定的自定义方块或家具打开它们。

**DISPOSAL** 即为自定义垃圾桶，你可以向其中丢入物品，关闭界面后它们会被销毁。

```YAML
Mechanics:
  noteblock:
    barrier: true
    storage:
      type: STORAGE
      rows: 5                             # 默认值: 6
      title: "<red>My Storage"            # 默认值: "Storage"
      open_sound: entity.shulker.open     # 默认值: entity.chest.open
      close_sound: entity.shulker.close   # 默认值: entity.chest.close
```

> [!NOTE|label:提示]
> 这个机制也可以和家具机制一起使用！

## 坠落方块

这是一个能为你的方块模拟沙子与砂砾机制的设置。将它放置在其他方块侧，然后它会在没有底部方块支撑的情况下坠落。

```YAML
Mechanics:
  noteblock:
    is_falling: true # 若未指定则为 false
```

## 矿物

这个实例配置向你展示了如何创建支持时运与精准采集的普通硬度矿物。

```YAML
amethyst_ore:
  displayname: "<light_purple>紫水晶矿"
  material: DIAMOND
  Pack:
    generate_model: true
    parent_model: "block/cube_all"
    textures:
      - amethyst_ore
  Mechanics:
    noteblock:
      block_sounds:
        place_sound: block.stone.place
        break_sound: block.stone.break
        hit_sound: my.custom.hitsound     # 在 Oraxen/sound.yml 中预先设定的声音
        step_sound: my.custom.stepsound   # 需要 Oraxen/pack-folder 也存有一份文件
        fall_sound: my.custom.fallsound
        volume: 0.8                      # 默认值: 0.8
        pitch: 0.8                       # 默认值: 0.8
      custom_variation: 1
      model: amethyst_ore
      hardness: 6
      drop:
        silktouch: true
        fortune: true
        minimal_type: IRON
        best_tools:
          - PICKAXE
        loots:
          - oraxen_item: amethyst
            probability: 1.0
```

> [!NOTE|label:提示]
> 这不会在世界中生成你的自定义矿物。
>
> 如果需要矿物在世界中生成，请移步[世界生成器](compatibility.world-generators.md)章节寻找相关实现方法。

## 带模型的自定义方块

```YAML
box_block:
  displayname: "<white>box"
  material: PAPER
  Pack:
    generate_model: false # 因为这是一个方块, 指向指定方块的次级模型无论如何都会生成
    model: custom/furniture/caja
  Mechanics:
    noteblock:
      custom_variation: 3
      model: custom/furniture/caja
      hardness: 6
      drop:
        silktouch: false 
        best_tools:
          - AXE
        loots:
          - { oraxen_item: box_block, probability: 1.0 }
```

> [!NOTE|label:提示]
> 这个功能不支持边界小于 16x16x16 的方块。