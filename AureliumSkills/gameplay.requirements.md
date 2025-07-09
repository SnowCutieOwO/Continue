# 条件
添加物品和装备条件的教程。  
  
条件允许你为物品添加技能等级限制。例如你可以制作一个只有玩家挖掘等级到达 15 时才可使用的镐子。条件种类分为物品和装备。  
物品条件在玩家持有物品时检查条件，而装备条件则在玩家试图装备物品时检查条件。  
这里有两种方式来添加条件：使用命令条件或设置全局条件。  
  
## 命令条件  
使用命令只能为手持的物品施加特定的条件。若要使其正常运作，你需要将物品分发至玩家的手上。  
  
命令：  

::: info
下方的 `item/armor` 意味着你只能在这两个参数中二选一。`item` 为物品条件，而 `armor` 为装备条件。
:::

*   `/skills item/armor requirement add <技能名称> <限制等级> [是否显示 lore]` - 向物品添加物品/装备限制。“技能名称”为所要限制等级的技能名称，“限制等级”为所要限制技能的等级。“是否显示 Lore” 是一个可选项，只能填入 true 或 false。该项决定对应的 lore 是否显示在物品上。当然，Lore 的显示与限制条件的工作完全分离，所以你可以任意编辑显示的 Lore 而不用担心物品上的条件失效。
*   `/skills item/armor requirement remove <技能名称> [是否移除 lore]` - 从手持物品中删除物品/装备条件。若“是否移除 Lore” 项参数为 true，原本与限制条件一同添加的 Lore 也会一并删除。如果你将其修改为了别的自定义 Lore，那么这个功能可能会无效。
*   `/skills item/armor requirement list` - 列出手持物品上所有的物品/装备条件。
*   `/skills item/armor requirement removeall` - 移除手持物品上的所有物品/装备条件。

## 全局条件 
全局条件允许对指定种类的所有物品添加限制条件。若要添加全局条件，你必须向 `config.yml` 中的 `requirement.item` 或 `requirement.armor` 下添加一个 `global` 列表。  
  
添加条件的基本格式为：`- 材料名称 技能名称:技能等级`  
  
下面是一个全局物品限制的设置，表示了使用任意钻石剑均需要 10 级或更高的战斗技能。除此之外该示例还包括了它在配置文件中的位置：  

``` YAML
requirement:
  enabled: true
  item:
    global:
    - DIAMOND\_SWORD FIGHTING:10
```

也支持对单个物品添加多个技能限制：  

``` YAML
requirement:
  armor:
    global:
    - DIAMOND\_CHESTPLATE DEFENSE:10 AGILITY:4
```

::: info
全局条件不支持限制自定义物品。
:::

## NBT 标签 

::: info
下方的有关内容需要你掌握 NBT 结构的基础知识。
:::

下面是物品/装备条件的 NBT 标签结构（不是全局条件）。它可以用在给予命令等处，这样就可以给予玩家已经有限制条件的物品。  

```{AureliumSkills: {Requirements: {[种类]: {[技能名称]: [限制等级]}}}}```

将 [种类] 替换为 Armor/Item，表示装备条件/物品条件。将 [技能名称] 替换为首字母大写的英文技能名称（例如战斗为 Fighting）。将 [限制等级] 替换为所要限制的技能等级。  
为物品添加农耕 10 级使用限制的示例：  

```{AureliumSkills: {Modifiers: {Item: {Farming: 10}}}}```
