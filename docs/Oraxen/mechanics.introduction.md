# 机制
又名：如何赋予你的物品特殊能力

## 介绍

在 Oraxen 中制作一个有趣的物品非常简单，但如何更进一步？本插件的“机制”部分允许你通过配置文件赋予物品特殊的能力。例如，你可以创建一个能挖掘基岩的镐子，或是能偷取对手生命值的剑。

## 如何给物品添加机制？

### 物品配置

如你在[对应部分的初学者教程](configuration.items-beginners.md)所见的那样，你只需添加新的一部分“mechanics”配置，其中包含的就是你需要的各种机制。

```YAML
example_item:
  material: DIAMOND_AXE
  Mechanics:
    # 将机制填入此处

    example_mechanic:
      example_option: true
    
    another_example_mechanic:
      another_option: "示例配置"
```

每一部分物品配置中的机制设定允许你修改它们，并只对所在物品本身生效。这也意味着如果你给某个镐子添加了 5\*5 的范围挖掘功能，你也可以将这部分配置复制到其他物品上，并将其的范围修改为 3\*3。

## 全局配置

这些配置会被保存在 Oraxen 插件文件夹的 `mechanics.yml` 中。它们允许你修改一些物品用到的全局设定。你可能不常用到它，但它总归是有用的。例如，基岩破坏机制允许你破坏基岩。大多数服务器不希望他们的玩家挖穿世界——最后一层基岩。在 `bedrockbreak`（基岩破坏）机制的配置中，你就可以设置这个细节（这也会对所有使用了这个机制的物品生效）。

```YAML
bedrockbreak:
  enabled: true
  disable_on_first_layer: false # 此项
  durability_cost: 500
```