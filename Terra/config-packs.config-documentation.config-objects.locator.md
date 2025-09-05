# 定位器（Locator）

在[地物](config-packs.config-documentation.config-files.feature.md)配置中，定位器可以决定生成物的 Y 轴高度。

定位器会遍历世界范围内特定 Y 轴上的每个方块（一般由定位器设置的 Y 轴范围决定），并根据是否在这个位置上生成结构返回 *true* 或 *false*。

## 类型

不同类型的 `Locator` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Locator` 如下所示：

### SURFACE

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

### TOP

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

### RANDOM

\* 配置类型需要 \* 配置类型需要 `config-locators` 附属才可使用
 附属才可使用

<badge type="info" text="amount" /> [范围](config-packs.config-documentation.config-objects.range.md)

<bdage type="info" text="height" /> [范围](config-packs.config-documentation.config-objects.range.md)

<badge type="tip" text="salt" /> [整数](config-packs.config-documentation.config-objects.intenger.md)

默认值：`0`

### GAUSSIAN_RANDOM

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="amount" /> [范围](config-packs.config-documentation.config-objects.range.md)

<bdage type="info" text="height" /> [范围](config-packs.config-documentation.config-objects.range.md)

<bdage type="info" text="standard-deviation" /> [浮点数](config-packs.config-documentation.config-objects.float.md)

<badge type="tip" text="salt" /> [整数](config-packs.config-documentation.config-objects.intenger.md)

默认值：`0`

### PATTERN

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="pattern" /> [图案](config-packs.config-documentation.config-objects.pattern.md)

<badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

### ADJACENT_PATTERN

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="pattern" /> [图案](config-packs.config-documentation.config-objects.pattern.md)

<badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

<badge type="tip" text="match-all" /> [布尔值](config-packs.config-documentation.config-objects.boolean.md)

默认值：`false`

### SAMPLER

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="samplers" /> [列表](config-packs.config-documentation.config-objects.list.md)<[噪声采样器](config-packs.config-documentation.config-objects.noisesampler.md)>

### SAMPLER_3D

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="sampler" /> [噪声采样器](config-packs.config-documentation.config-objects.noisesampler.md)

### AND

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

### OR

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

### XOR

\* 配置类型需要 `config-locators` 附属才可使用

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

## 用途

有 4 个参数用到：

* Locator 中的 AND：

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

* Locator 中的 OR：

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

* Locator 中的 XOR：

<badge type="info" text="locators" /> [列表](config-packs.config-documentation.config-objects.list.md)<[定位器](config-packs.config-documentation.config-objects.locator.md)>

* FEATURE 中的 base：

<badge type="info" text="locator" /> [定位器](config-packs.config-documentation.config-objects.locator.md)