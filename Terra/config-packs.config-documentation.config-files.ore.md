# 矿物（ORE）

* 如下配置类型需要 `config-ore` 拓展才可使用

这种类型的配置包含了[结构](config-packs.config-documentation.config-objects.structure.md)实例。

<badge type="info" text="继承" /> [列表](config-packs.config-documentation.config-objects.list.md)<[字符串](config-packs.config-documentation.config-objects.string.md)> - 其他 `FEATURE` 配置用于复制参数的列表。

继承的配置只在当前配置没有设定某个值时使用。列表中靠前的配置会优先使用。这可以在多个配置间提高参数的复用性。

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md) - 在其他配置中引用该配置的标识符。

由配置创建的[结构](config-packs.config-documentation.config-objects.structure.md)实例可通过这个参数区分。

- - -

<badge type="info" text="id" /> [字符串](config-packs.config-documentation.config-objects.string.md)

<badge type="info" text="material" /> [方块](config-packs.config-documentation.config-objects.block.md)

<badge type="info" text="replace" /> [集合](config-packs.config-documentation.config-objects.set.md)<[方块](config-packs.config-documentation.config-objects.block.md)>

<badge type="info" text="size" /> [浮点数](config-packs.config-documentation.config-objects.float.md)

<badge type="tip" text="material-overrides" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[方块](config-packs.config-documentation.config-objects.block.md)，[方块](config-packs.config-documentation.config-objects.block.md)>

默认值：`{}`

<badge type="tip" text="physics" /> [布尔值](config-packs.config-documentation.config-objects.boolean.md)

默认值：`false`