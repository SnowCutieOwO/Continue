# 群系颜色转化器（BiomeColorConverter）

## 类型

不同类型的 `BiomeColorConverter` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `BiomeColorConverter` 如下所示：

- - -

### EXACT

<badge type="info" text="else" /> [群系](config-packs.config-documentation.config-objects.biome.md)

<badge type="info" text="match" /> [群系颜色映射](config-packs.config-documentation.config-objects.biomecolormapping.md)

<badge type="tip" text="ignore-alpha" /> [布尔值](config-packs.config-documentation.config-objects.boolean.md)

默认值：`true`

### CLOSEST

<badge type="info" text="match" /> [群系颜色映射](config-packs.config-documentation.config-objects.biomecolormapping.md)

## 用途

只有一个参数用到：

* BiomeProvider 中的 IMAGE：

  <badge type="info" text="color-conversion" /> [群系颜色转化器](config-packs.config-documentation.config-objects.biomecolorconverter.md)