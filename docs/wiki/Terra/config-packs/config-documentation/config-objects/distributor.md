# 分布器（Distributor）

在[地物](../../config-documentation/config-files/feature.md)配置中，分布器可以决定生成物分布在世界的哪些位置。

分布器运行在平面中。分布器会为每一对平面坐标分配一个 *true* 或 *false* 的值，前者表示分布器可以在这里生成一个结构。

## 类型

不同类型的 `Distirbutor` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Distirbutor` 如下所示：

- - -

### SAMPLER

\* 配置类型需要 `config-distributor` 附属才可使用

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md)

<badge type="tip" text="threshold" /> [浮点数](float.md)

默认值：`0.0`

### PADDER_GRID

\* 配置类型需要 `config-distributor` 附属才可使用

<badge type="info" text="padding" /> [整数](intenger.md)

<badge type="info" text="salt" /> [整数](intenger.md)

<badge type="info" text="width" /> [整数](intenger.md)

### AND

\* 配置类型需要 `config-distributor` 附属才可使用

<badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>

### OR

\* 配置类型需要 `config-distributor` 附属才可使用

<badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>

### XOR

\* 配置类型需要 `config-distributor` 附属才可使用

<badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>

### YES

\* 配置类型需要 `config-distributor` 附属才可使用

[^1]

### NO

\* 配置类型需要 `config-distributor` 附属才可使用


## 用途

有 4 个参数用到：

* FEATURE 中的 base：

  <badge type="info" text="distributor" /> [分布器](distributor.md)

* Distributor 中的 OR：

  <badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>

* Distributor 中的 XOR：

  <badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>

* Distributor 中的 AND：

  <badge type="info" text="distributors" /> [列表](list.md)<[分布器](distributor.md)>


[^1]: 原文此处即无内容。下 OR 同。