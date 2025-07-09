# 工具物品

## 导航工具

FAWE 的其中一种传送方式即为“导航魔杖”。默认情况下为原版的指南针 `compass`。物品可以在 `worldedit-config.yml` 中修改：

``` YAML
navigation-wand:
  item: minecraft:compass
  max-distance: 100
```

左键点击执行 [/jumpto](https://github.com/IntellectualSites/documentation/blob/main/fastasyncworldedit/commands/navigation/navigation.md#jumpto) 命令，右键点击执行 [/thru](https://github.com/IntellectualSites/documentation/blob/main/fastasyncworldedit/commands/navigation/navigation.md#thru) 命令。

FAWE 工具物品（包括导航工具）可通过一般的创造选项卡或 `//wand -n` 命令获得（见“[魔杖](https://github.com/IntellectualSites/documentation/blob/main/fastasyncworldedit/commands/selection/selection.md#wand)”章节）。

**权限：**

* `worldedit.navigation.jumpto.tool`
* `worldedit.navigation.thru.tool`

![image](images/image.png "指南针")

## 魔杖工具物品

选择角点的其中一种方式就是“选区魔杖”。默认情况下为原版的木斧 `wooden_axe`。物品可以在 `worldedit-config.yml` 下修改：

``` YAML
wand-item: minecraft:wooden_axe
```

手持魔杖左键点击方块可设置第一个角点（又称“一号点位”），右键点击则会设置第二个角点（又称“二号角点”）。

FAWE 工具物品可通过一般的创造选项卡或 `//wand [-n]` 命令获得（见“[魔杖](https://github.com/IntellectualSites/documentation/blob/main/fastasyncworldedit/commands/selection/selection.md#wand)”章节）。

## 超距魔杖

与选区魔杖使用方法相同，但点击范围无限大，且可绑定至其他物品。

手持魔杖左键点击方块可设置第一个角点（又称“一号点位”），右键点击则会设置第二个角点（又称“二号角点”）。

超距魔杖对应物品可通过命令 `/tool farwand` 或 `/farwand` 绑定至手中物品。

**权限：**

* `worldedit.tool.farwand`