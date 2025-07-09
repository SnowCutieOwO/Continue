# 💾 保存物品

## 保存你的物品

你可以使用命令 `/shop saveitem <物品 ID>` 来保存手上的物品。物品有两种存储方式：

* Bukkit：使用 BukkitAPI 的方法保存物品。这个方法只支持保存原版数据和通过 BukkitAPI 保存的持久数据，来自其他插件的 NBT 数据将不会被保存。
* Paper：使用 PaperAPI 的方法保存物品。这个方法可以保存所有物品，不会丢失任何数据。（仅 Paper 1.15+ 服务器）

如果你的 Paper 服务器且不需要使用最新的 Paper 保存方法，你需要打开 `config.yml` 并修改 `paper-api.save-item` 为 `false`，这样我们会在Paper 服务端上使用 Bukkit 的保存方法。

## 使用保存的物品

你可以在此使用“物品格式”。在物品格式中，这里有一个称作 `material` 的选项，默认情况下，你需要输入原版物品 ID，但你也可以使用保存物品的 ID 让插件直接获取保存的物品而不是生成。

``` YAML
display-item:
  material: superior_sword # 假设保存的物品 ID 为 'superior_sword'
```

保存的物品会持续缓存在内存中，可以防止重复读取配置文件，减少服务器性能消耗。但是，如果你保存的物品数量太多，也有可能消耗更多内存。