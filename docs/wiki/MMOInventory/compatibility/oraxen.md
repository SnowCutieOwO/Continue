# 💎 Oraxen

本章讲述了 MMOInventory 与 [Oraxen](https://oraxen.com/) 之间的内置联动。需要注意的是，这不表示插件不支持其他物品插件，只是表示 Oraxen 有一些额外的联动功能。

## 自定义纹理

MMOInventory 1.6.5 引入了 Oraxen 支持。因为 MMOInventory 需要用到自定义资源包，它会在启动时检测 Oraxen，并将对应物品注册入条目。你只需要将所有物品纹理放入 `Oraxen/pack/textures/items/mmoinventory` 文件夹即可。纹理格式必须为 `.PNG`，且名称也必须全部小写。`slots.yml` 与 Oraxen 纹理文件夹也必须完全对应！如果存在错误，Oraxen 可能会抛出纹理报错。默认的 MMOInventory `slots.yml` 配置如下：

![](_images/oraxen_folder.png)


如果你在 `Oraxen/items/` 中发现了 `mmoinventory-hook.yml` 文件，切勿擅自修改！它由 MMOInventory 自动生成，负责将注册资源包中的所有物品，处理所有 Oraxen 兼容相关内容。

## 自定义界面纹理

你还可以利用 Oraxen 的自定义字形功能，给界面添加自定义贴图。你可以用 PAPI 变量 `%oraxen_<glyph_id>%` 引用贴图。另外也请确保你在使用自定义界面贴图时去掉了 `items.yml` 中填充物品部分的配置。

![](_images/oraxen_inv.png)

在界面名称里插入 Oraxen 自定义字形非常简单。打开 `language.yml` 配置文件，作出如下修改即可：

``` YAML
inventory-name:
    self: '&f%oraxen_shift_16%%oraxen_shift_2%%oraxen_mmoinv_default%'
```

如果你从未接触过自定义标签/界面贴图/图标，且对上面展示图的效果感到惊奇，就去试着深入了解它吧。Oraxen 基本上能自动处理自定义物品/界面/表情的贴图。