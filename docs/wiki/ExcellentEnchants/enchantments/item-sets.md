# 物品集

我们需要给每个物品指定它能生效的附魔。这里有两种选择：

* **初级物品** - 在生存模式下可通过附魔台正常获取。
* **支持物品** - 在生存模式下，不可通过附魔台获取，但可通过铁砧或命令添加。

通常，**支持物品**为**初级物品**的子集。

::: info

若要使得某种附魔只能通过附魔书获取。你可以调整它的[获取设置](distribution.md)而不是修改初级物品。

:::

## 配置

你可以在 `item_types.yml` 配置文件中自定义或编辑现有附魔的物品集。

### 示例：钻石盔甲套装

如下设置决定了附魔只能施加于钻石盔甲上：

``` YAML title="item_types.yml"
diamond_armor:
  Name: 钻石盔甲
  Slots:
  - HEAD
  - CHEST
  - LEGS
  - FEET
  Items:
  - diamond_helmet
  - diamond_chestplate
  - diamond_leggings
  - diamond_boots
```

物品集配置中的 `Slots` 决定了附魔生效的[槽位](https://jd.papermc.io/paper/1.21.5/org/bukkit/inventory/EquipmentSlot.html)。

::: warning

盔甲类物品无法手持触发效果为硬编码行为。

:::


## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      link: '../about'
    },
    {
      name: `常见问题`,
      link: '../common-questions'
    }
  ]"
/>