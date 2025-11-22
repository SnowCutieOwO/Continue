# 💾 保存物品（物品管理器）

::: info

**3.8.4** 之前的版本存在一个问题：你需要**重载**才可以在某些情况下载入物品。

:::

## 创建物品

你可以在插件的 `items` 文件夹下创建自己的物品，只需新建一个 **yml** 格式的文件并按[物品格式](../format/itemformat/index.md)填写即可。文件名即为物品 ID。

## 保存你的物品

你可以使用命令 `/shop saveitem <物品 ID>` 来保存手上的物品。物品有两种存储方式：

* Bukkit：
  * 如果你使用的是 Spigot 服务端：插件会使用 BukkitAPI 的方法保存物品。它只支持保存原版数据和通过 BukkitAPI 保存的持久数据，来自其他插件的 NBT 数据将不会被保存。
  * 如果你使用的是 Paper 服务端：插件会使用 PaperAPI 的方法保存物品。这个方法可以保存所有物品，不会丢失任何数据。**（仅 Paper 1.15+ 服务端）**
* 物品格式：将物品解析为[物品格式](../format/itemformat/index.md)。

在 Paper 服务端下通过 Bukkit 物品保存方法的示例配置：

``` YAML
item: !!binary |-
  H4sIAAAAAAAA/21RzW4TMRCeJd0oWVB/1IIQXILEG/TGpSDxCKhXa2LPbkxsz8qepUlPPAonXoBn6nsw27TaViBZljzz/XmmAZjBy68oeE25eE4Ap3cLeOEdnEWfyGZs5ZPzGDm5GdSWhyQAMG+gsRx7TpSkNHA8gVtmRS7TINnLvSLUNTQFZcg4Fj7/Aqjg2GIyGG5wXwyhVJrj7SQScWeKoN2a4m9pNFw+9QicqdFqtRgj6QuOuoz7BRwJ7QQuvm18WenJhCHsV8lb+qCeHycFSnaDSaLGN13wevMPytk7qhp4819cmT2diVacT90YAhp4PTXsUISjSRhpSrcOAz2me/Vl1emMVuWGs1Pu+3+4kR0F43QrS5i3gVFKPRpd/dR7Ae8mwvdhS2vemT7gHteB4HzqsWzGnTp6th5hDjM4dRixI9NTNuvAdnvY0oWjFocgRvH6OVN6Inf1u22XUOchUHkY+vyeU+Bk0tXgiSo4s5wzWTEtZ+My96WqoT7o/Lm8VDr8BZMVpHJ0AgAA
```

在 Paper 服务端下通过物品格式保存的示例配置：

``` YAML
material: DIAMOND
amount: 6
name: <blue>村好剑
lore:
- <gray>这太酷了!
custom-model-data: 1
max-stack: 6
food:
  nutrition: 5
  saturation: 5.0
tool:
  damage-per-block: 5
  mining-speed: 1.3
  rules:
  - STONE, 1.4, true
song: minecraft:otherside
glow: true
enchants:
  mending: 1
```

## 使用保存的物品

你可以在此使用[物品格式](../format/itemformat/index.md)。在物品格式中，这里有一个称作 `material` 的选项。默认情况下，你需要输入原版物品 ID，但你也可以填入保存物品的 ID，让插件直接获取保存物品而非生成。

``` YAML
display-item:
  material: superior_sword # 假设保存的物品 ID 为 'superior_sword'
```

保存的物品会持续缓存在内存中，可防止重复读取配置文件，降低性能消耗。但如果保存物品数量太多，还是有可能消耗更多内存。