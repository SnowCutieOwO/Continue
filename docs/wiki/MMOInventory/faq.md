# 🤔 常见问题

其他更常提及的漏洞与问题可在[这个 MythicLib 维基页面](https://docs.phoenixdevt.fr/mythiclib/faq)浏览，若可以的话，也请浏览一遍。

## 安装教程在哪？

就在[这里](general/installtion-guide.md)。

## 插件支持 MySQL 吗？

当然。你可以在插件的主配置文件里启用。如下所示：

``` YAML
mysql:
  enabled: false
  host: localhost
  port: 3306
  database: minecraft
  user: mmolover
  pass: ILoveAria
  ....
```

## 如何做到按 E 打开自定义界面？

你可以利用 [MythicKeys](https://www.spigotmc.org/resources/mythickeysplugin-custom-keybinds-api.98893/) 实现，这需要安装一个客户端模组。（原版 Spigot）无法在没有模组支持的情况下实现对玩家背包开启的检测，因为这些行为都是纯客户端测的。在客户端模组的支持下，你可以向服务器发送对应的数据包，以此才能正常检测玩家是否打开了背包。

1.12 Spigot 旧版本因存在成就相关发包，可以不需要模组，但目前版本此成就已不存在，因此无法实现。

不过你还有另一种方法，即填满背包界面的 2x2 合成栏，使其点击时执行 `/mmoinventory` 命令，这种替代方法实现起来相对便捷。除此之外，你也可以在物品栏里放置一个统计数据物品，右键点击它打开自定义界面（主配置文件中可以开启）。

## 插件兼容自动装备鞘翅吗？

在最近的开发版本构建中已经实现！

## 插件支持自动消耗图腾吗？

不支持。

## 放入对应格子的物品属性没有生效。

确保放入的物品在 `MMOItems/item-types.yml` 里正确设置了其父/子类型为 `ACCESSORY`（饰品），如果需要让 MMOItems 通过自定义界面注册属性，这是必须的。如果你尝试在“催化剂”栏装备“催化剂”类型物品，虽然可放入但不会有任何效果，因为它们装备时任何属性都不会生效！这种限制是 MMOItems 的实现方式决定的。

以此类推，未达到装备等级的物品，虽然可正常放入，但不会为玩家带来任何属性变化（除非你使用的是 `milevel{}` 槽位限制参数）。

## 有没有背包或者坐骑槽位？

没有。

## 有没有武器槽位？

没有。这个功能会与 MMOItems 产生冲突。一部分旧时代的插件，例如 RPGInventory 确实有这个功能，但我们最终决定不将其加入 MMOInventory 中。

## 界面显示不正常

这个问题在 1.21.8 后不再出现，因为 `scale` 参数不再会覆盖原版背包界面的网格。更多细节请见[此页](features/inventory-textures.md)。

![](_images/gliched-inventory.png)

正如在插件资源页解释过的那样，默认的 MMOInventory 资源包利用覆盖了自定义贴图的钻石锄铺满箱子菜单页面，以此区分不同的装备栏位。为了盖住不需要使用的格子，你需要把物品的显示大小调整为 110%，不过实际需要的比例可能会略有差别。你可以打开资源包文件，找到对应的模型文件，（默认）位于 `/assets/minecraft/models/item/slots/fill.json`。

找到 `scale` 部分，可以将它默认的 `1.1` 略微调高，这样就可以盖住那个一像素宽的窄缝。需要注意的是，过大的值会盖住物品栏的其他部分。

``` json title="fill.json" 
{
  "parent": "item/handheld",
  "textures": {
    "layer0": "items/slots/fill"
  },
  "display": {
    "gui": {
      "rotation": [ 0, 0, 0 ],
      "translation": [ 0, 0, 0 ],
      "scale": [ 1.1, 1.1, 1.1 ]
    }
  }
}
```

## 它兼容 Oraxen、ItemsAdder 或者 Nexo 吗？

**MMOInventory 完全兼容 Oraxen、ItemsAdder 和 Nexo。**MMOInventory 的其中一大特色就是[内置了与 Oraxen 的兼容](compatibility/oraxen.md)。