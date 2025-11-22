# 群系（BIOME）

* 如下配置类型需要 `config-biomes` 拓展才可使用

这种类型的配置包含了[群系](../config-objects/biome.md)实例。

<badge type="info" text="继承" /> [列表](../config-objects/list.md)<[字符串](../config-objects/string.md)> - 其他 `BIOME` 配置用于复制参数的列表。

继承的配置只在当前配置没有设定某个值时使用。列表中靠前的配置会优先使用。这可以在多个配置间提高参数的复用性。

<badge type="info" text="id" /> [字符串](../config-objects/string.md) - 在其他配置中引用该配置的标识符。

由配置创建的[群系](../config-objects/biome.md)实例可通过这个参数区分。

- - -

<badge type="info" text="color" /> [整数](../config-objects/intenger.md)

<badge type="info" text="tags" /> [集合](../config-objects/set.md)<[标签](../config-objects/tag.md)>

<badge type="info" text="vanilla" /> [群系平台](../config-objects/platformbiome.md)

- - -

* 如下配置类型需要 `chunk-generator-noise-3d` 拓展才可使用

如下参数仅在 [pack.yml](../../config-documentation/config-files/pack-yml.md) 中的 <badge type="info" text="generator" /> 设置为 `NOISE_3D` 时可以使用。

<badge type="info" text="palette" /> [列表](../config-objects/list.md)<[映射表](../config-objects/map.md)<[调色板](../../config-documentation/config-files/palette.md)，[整数](../config-objects/intenger.md)>>
<badge type="info" text="terrain.sampler" /> [噪声采样器](../config-objects/noisesampler.md)

<badge type="tip" text="carving.update-palette" /> [布尔值](../config-objects/boolean.md)

默认值：`false`

<badge type="tip" text="ocean.level" /> [整数](../config-objects/intenger.md)

默认值：`0`

<badge type="tip" text="ocean.palette" /> [调色板](../../config-documentation/config-files/palette.md)

默认值：`空气调色板`

<badge type="tip" text="slant" /> [列表](../config-objects/list.md)<[倾斜层](../config-objects/slantlayer.md)>

默认值：`[]`

<badge type="tip" text="slant-depth" /> [整数](../config-objects/intenger.md)

默认值：`无限大`

<badge type="tip" text="terrain.blend.distance" /> [整数](../config-objects/intenger.md) 

默认值：`3`

<badge type="tip" text="terrain.blend.step" /> [整数](../config-objects/intenger.md) 

默认值：`4`

<badge type="tip" text="terrain.blend.weight" /> [浮点数](../config-objects/float.md) 

默认值：`1.0`

<badge type="tip" text="terrain.blend.weight-2d" /> [浮点数](../config-objects/float.md) 

默认值：`1.0`

<badge type="tip" text="terrain.sampler-2d" /> [噪声采样器](../config-objects/noisesampler.md)

默认值：输出 `0` 的 `CONSTANT` 噪声采样器

- - -

* 如下配置类型需要 `generation-stage-feature` 拓展才可使用

<badge type="info" text="features.<阶段 ID>" /> [列表](../config-objects/list.md)<[地物](../../config-documentation/config-files/feature.md)>

由 `<阶段 ID>` 指定的地物生成阶段中，群系内生成的地物列表。

可用的地物生成阶段在 [pack.yml](../../config-documentation/config-files/pack-yml.md) 中定义。