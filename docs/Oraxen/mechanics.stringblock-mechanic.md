# 绊线方块机制

::: info 提示
仅适用于 1.123.0+ 的 Oraxen
:::

## 它是如何运作的？

这是一个自定义方块的变种，但这个机制做成的方块碰撞箱基于线，适合用于制作那些可遍历小型装饰物体，而且它们的占用也会比家具类方块小。另外这类方块的 `custom_variation` 也略有不同。

### 全局配置

```YAML
stringblock:
  tool_types:
    - WOODEN
    - STONE
    - IRON
    - GOLDEN
    - DIAMOND
    - NETHERITE
  enabled: true
```
## 我如何创建装饰？

### Oraxen 物品与纹理包配置

```YAML
jasmine_flower:
  displayname: "<white>Jasmine Flower"
  material: PAPER
  Pack:
    generate_model: true
    parent_model: "block/cross"
    textures:
      - custom/flowers/jasmine_flower.png # .png 后缀为非必须
```

### 绊线方块机制

若要使用这个机制，你需要告诉 Oraxen 使用的模型（若要使用 Oraxen 自动生成的，只需将物品的 ID 填入其中即可）。然后你需要一个没有被其他物品使用的 `custom_variation`（例如默认情况下 1 用于某种植物，则你可以在这里填入 2）。这个示例中的配置允许你在用石镐挖掘这个方块时掉落物品。

```YAML
  Mechanics:
    stringblock:
      custom_variation: 2
      model: jasmine_flower
      hardness: 2
      drop:
        silktouch: false
        loots:
          - { oraxen_item: jasmine_flower, probability: 1.0 }
```

### BlockLocker

你可以通过这个选项来允许容器被 [BlockLocker](https://www.spigotmc.org/resources/blocklocker.3268/) 的锁保护。

有效的保护类型为 CONTAINER、DOOR、ATTACHABLE。

```YAML
Mechanics:
  furniture:
    blocklocker:
      can_protect: true
      protection_type: CONTAINER
```

其他机制与自定义方块的大致相同，可在对应章节浏览获取详细信息。并非所有提及的机制都能正常运行，只需使用本章节提及的机制即可。

### 如何用自己的模型创建装饰？

```YAML
oak_log_mini:
  displayname: "<white>oak_log_mini"
  material: PAPER
  Pack:
    generate_model: false
    model: custom/furniture/oak_log_mini
  Mechanics:
    stringblock:
      custom_variation: 3
      model: custom/furniture/oak_log_mini
      hardness: 2
      drop:
        silktouch: false
        loots:
          - { oraxen_item: oak_log_mini, probability: 1.0 }
```