# 调色板（PALETTE）

* 如下配置类型需要 `config-palette` 拓展才可使用

这种类型的配置包含了[调色板](config-packs.config-documentation.config-objects.palette.md)实例。

<badge type="info" text="继承" /> [列表](config-packs.config-documentation.config-objects.list.md)<[字符串](config-packs.config-documentation.config-objects.string.md)> - 其他 `PALETTE` 配置用于复制参数的列表。

继承的配置只在当前配置没有设定某个值时使用。列表中靠前的配置会优先使用。这可以在多个配置间提高参数的复用性。

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md) - 在其他配置中引用该配置的标识符。

由配置创建的[调色板](config-packs.config-documentation.config-objects.palette.md)实例可通过这个参数区分。

- - -

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md)

<badge type="info" text="layers" /> [列表](config-packs.config-documentation.config-objects.list.md)<[调色板层](config-packs.config-documentation.config-objects.palettelayer.md)>

<badge type="tip" text="sampler" /> [噪声采样器](config-packs.config-documentation.config-objects.noisesampler.md)

默认值：`Constant 0`