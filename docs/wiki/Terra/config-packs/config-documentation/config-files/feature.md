# 地物（FEATURE）

* 如下配置类型需要 `config-feature` 拓展才可使用

这种类型的配置包含了[地物](../config-objects/feature.md)实例。

<badge type="info" text="继承" /> [列表](../config-objects/list.md)<[字符串](../config-objects/string.md)> - 其他 `FEATURE` 配置用于复制参数的列表。

继承的配置只在当前配置没有设定某个值时使用。列表中靠前的配置会优先使用。这可以在多个配置间提高参数的复用性。

<badge type="info" text="id" /> [字符串](../config-objects/string.md) - 在其他配置中引用该配置的标识符。

由配置创建的[地物](../config-objects/feature.md)实例可通过这个参数区分。

- - -

<badge type="info" text="distributor" /> [分布器](../config-objects/distributor.md)

<badge type="info" text="id" /> [字符串](../config-objects/string.md)

<badge type="info" text="locator" /> [定位器](../config-objects/locator.md)

<badge type="info" text="structures.distribution" /> [噪声采样器](../config-objects/noisesampler.md)

<badge type="info" text="structures.structures" /> [权重列表](../config-objects/weightedlist.md)<[结构](../config-objects/structure.md)>
