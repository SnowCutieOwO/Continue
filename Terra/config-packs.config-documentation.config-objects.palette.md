# 调色板（Palette）

表示对[调色板](config-packs.config-documentation.config-files.palette.md)配置的引用。

`Palette` 通过引用调色板的 ID 定义。例如，一个 ID 为 `GRASS_MIX` 的 `PALETTE` 配置在 `palette` 参数中引用的格式如下：

``` YAML
palette: GRASS_MIX
```

## 用途

有 2 个参数用到：

* BIOME 中的 base：

  <badge type="tip" text="ocean.palette" /> [调色板](config-packs.config-documentation.config-objects.palette.md)

* BIOME 中的 base：

  <badge type="info" text="palette" /> [列表](config-packs.config-documentation.config-objects.list.md)<[映射表](config-packs.config-documentation.config-objects.map.md)<[调色板](config-packs.config-documentation.config-objects.palette.md)，[整数](config-packs.config-documentation.config-objects.intenger.md)>>