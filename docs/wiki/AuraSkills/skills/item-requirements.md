# 物品条件

物品和盔甲条件的教程

**条件（Requirements）** 允许你为物品添加技能等级限制。例如，你可以创建一把只允许挖掘等级 15 以上玩家使用的镐子。限制方法有两种：物品与盔甲。

物品条件在玩家持有时检查。装备条件只在玩家穿戴时检查。

这里有两种不同的方法添加条件：通过命令或全局条件。

## 命令条件

通过命令添加条件只会在创建条件时将其添加至你手持的物品。因此，你必须向玩家复制并分发这些物品才可使其工作。

命令：

::: warning

命令中的 `item/armor` 表示，设置物品条件输入 `item`，需要设置装备条件则输入 `armor`。

:::

* `/sk item/armor requirement add <技能名称> <技能等级> [显示描述]` - 对手持物品添加物品/装备条件。`技能名称` 为指定限制等级的技能名称，`技能等级` 则为限制的等级。`显示描述` 为可选填入 `true/false` 的值，决定了物品是否会显示等级限制的描述。描述与物品要求完全独立，因此你可以对其删改。
* `/sk item/armor requirement remove <技能名称> [移除描述]` - 移除手持物品的物品/装备条件。若 `移除描述` 为 true，则插件会试图删除原本添加的条件描述。如果你通过其他插件为物品添加了自定义描述，则这个功能可能不会起效。
* `/sk item/armor requirement list` - 列出手持物品包含的物品/装备条件。
* `/sk item/armor requirement removeall` - 移除手持物品包含的所有物品/装备条件。

## 全局条件

全局条件可以对某一类物品进行限制。首先你要在 `config.yml` 下的 `requirement.armor` 或 `requirement.item` 下添加一个 `global` 列表。

内容条目的格式为 `- 材料名称 技能名称:技能等级`。

如下为钻石剑设置近战 10 级条件的全局配置，以及其在配置中的位置：

``` YAML
requirement:
  enabled: true
  item:
    global:
    - DIAMOND_SWORD FIGHTING:10
```

支持对同一物品添加多个条件：

``` YAML
requirement:
  armor:
    global:
    - DIAMOND_CHESTPLATE DEFENSE:10 AGILITY:4
```

::: info 

全局物品不支持自定义物品。

:::