# 群系（Biome）

表示通过 BIOME 引用的 Terra 群系。

`Biome` 通过群系 ID 引用。例如，一个带有 `FOREST` 的 `BIOME` 配置可以在 `biome` 配置参数中这样引用：

``` YAML
biome: FOREST
```

## 用途

有 3 个参数用到：

* BiomeColorMapping 中的 MAP：

  <badge type="info" text="map" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[颜色字符串](config-packs.config-documentation.config-objects.colorstring.md)，[群系](config-packs.config-documentation.config-files.biome.md)>

* BiomeColorConverter 中的 EXACT：

  <badge type="info" text="else" /> [群系](config-packs.config-documentation.config-files.biome.md)

* BiomeProvider 中的 SINGLE：

  <bagde type="info" text="biome" /> [群系](config-packs.config-documentation.config-files.biome.md)