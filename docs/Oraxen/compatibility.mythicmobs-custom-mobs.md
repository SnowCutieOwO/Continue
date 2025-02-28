# MythicMobs - 自定义实体
MythicMobs 允许你创建带有高级技能与属性的自定义实体与 BOSS。

::: info 提示
如果插件与 MythicMobs 不能正常工作，请使用 5.0.2 版本、
:::

该功能由 [yzl210](https://github.com/yzl210) 为你呈现，不要忘记感谢他！

## 如何将 Oraxen 物品设置为掉落物？

### 用法

`oraxen [oraxen 物品名称] [掉落数量(数字或取值范围)] [掉落几率(0-1)]`

### 示例

`oraxen custom_material 3-4 0.75`

这表示有百分之 **75** 的概率掉落 **3 至 4 个 custom_material** 物品。

## 如何让你的实体装备 Oraxen 的物品？

### 用法

`oraxen [位置] [oraxen 物品(装备)名称]`

#### “位置”部分可填参数

0, mainhand, weapon

1, boots, shoes

2, leggings, pants

3, chestpiece, chestplate, body

4, helmet, helm

5, shield

*5 即为副手，但 MythicMobs 的作者并没有设置这个别名，所以你直接填入 **offhand** 是无效的。*

### 示例

`oraxen mainhand custom_sword`

这表示实体会在**主手**持有 **custom_sword**。

`oraxwn 3 custom_chestplate`

这表示实体会在胸甲部位装备一个 **custom_chestplate**（用作胸甲）。