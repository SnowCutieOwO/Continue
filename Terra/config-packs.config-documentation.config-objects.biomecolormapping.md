# 群系颜色映射（BiomeColorMapping）

\* 配置类型需要 `biome-provider-v2` 拓展才可使用

## 类型

不同类型的 `BiomeColorMapping` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `BiomeColorMapping` 如下所示：

- - -

### USE_BIOME_COLORS

将每个群系与其声明的 `color` 参数进行匹配。

### MAP

<badge type="info" text="map" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[颜色字符串](config-packs.config-documentation.config-objects.colorstring.md)，[群系](config-packs.config-documentation.config-files.biome.md)>

## 用途

有 2 个参数用到：

* BiomeColorConverter 中的 CLOSEST：

  <badge type="info" badge="match" /> [群系颜色映射](config-packs.config-documentation.config-objects.biomecolormapping.md)

* BiomeColorConverter 中的 EXACT：

  <badge type="info" badge="match" /> [群系颜色映射](config-packs.config-documentation.config-objects.biomecolormapping.md)