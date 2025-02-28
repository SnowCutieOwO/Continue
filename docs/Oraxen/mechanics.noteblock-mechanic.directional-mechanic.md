# 方向机制

## 这是什么？

这个机制允许你放置方块并基于放置方向修改它们的材质，适用于诸如树木。

这里有三种方向模式：`LOG`、`FURNANCE` 和 `DROPPER`

`LOG` 有三种不同的方向，`FURNANCE` 有四种，而 `DROPPER` 有六种。

::: info 提示
每个子方块都有一个 `model` 属性，Oraxen 会用于决定显示的内容。

如果在子方块下没有 `model` 属性，则 Oraxen 会使用来自父方块的模型。
:::

::: info 提示
模型会自动根据放置的位置及方向调整。这表示你可以使用同一个模型，它会被正确旋转。如果子方块预先设定了一个模型，则它不会被旋转，这样你就可以在不同方向上使用不同的模型。
:::

<video src="./videos/video1.mp4" controls></video>

## 配置

### 父方块示例

```YAML
mainBlock:
  displayname: "<white>Frozen Mushroom Stem"
  material: PAPER
  Pack:
    generate_model: false
    model: mainBlockModel
  Mechanics:
    noteblock:
      model: mainBlockModel
      custom_variation: 1
      directional:
        # 可填入的有效值为 LOG, FURNACE 和 DROPPER
        directional_type: LOG
        # LOG
        y_block: mainBlockY
        x_block: mainBlockX
        z_block: mainBlockZ
        # FURNACE 与 DROPPER
        north_block: mainBlockNorth
        east_block: mainBlockEast
        south_block: mainBlockSouth
        west_block: mainBlockWest
        # DROPPER 也需要这些值
        up_block: mainBlockUp
        down_block: mainBlockDown
      hardness: 1
      drop:
        minimal_type: WOOD
        best_tools:
          - AXE
        silktouch: false
        loots:
          - {oraxen_item: mainBlock, probability: 1.0}
```

#### LOG 类型示例

```YAML
# 这不包括上文示例的父模型配置
mainBlockY:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 1
      directional:
        parent_block: mainBlock # 掉落的基础方块
      
mainBlockX:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 2
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockZ:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 3
      directional:
        parent_block: mainBlock # 掉落的基础方块
```

#### FURNANCE 类型示例

```YAML
# 这不包括上文示例的父模型配置
mainBlockNorth:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel
      custom_variation: 1
      directional:
        parent_block: mainBlock # 掉落的基础方块
      
mainBlockSouth:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel
      custom_variation: 2
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockWest:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel
      custom_variation: 3
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockEast:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel
      custom_variation: 4
      directional:
        parent_block: mainBlock # 掉落的基础方块
```

#### DROPPER 类型示例

```YAML
# 这不包括上文示例的父模型配置
mainBlockNorth:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 1
      directional:
        parent_block: mainBlock # 掉落的基础方块
      
mainBlockSouth:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 2
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockWest:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 3
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockEast:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      custom_variation: 4
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockUp:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel_vertical
      custom_variation: 5
      directional:
        parent_block: mainBlock # 掉落的基础方块

mainBlockDown:
  excludeFromInventory: true # 使得物品栏只包含基础方块
  material: PAPER
  Mechanics:
    noteblock:
      model: mainBlockModel_vertical
      custom_variation: 6
      directional:
        parent_block: mainBlock # 掉落的基础方块
```