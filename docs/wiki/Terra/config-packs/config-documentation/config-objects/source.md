# 源（Source）

\* 配置类型需要 `biome-provider-pipeline-v2` 附属才可使用

流水线的源。

## 类型

不同类型的 `BiomeProvider` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `BiomeProvider` 如下所示：

- - -

### IMAGE

\* 配置类型需要 `pipeline-image` 附属才可使用

<badge type="info" text="color-conversion" /> [流水线群系颜色转化器](pipelinebiomecolorconverter.md)

<badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

### SAMPLER

根据[噪声采样器](noisesampler.md)对[权重列表](weightedlist.md)内的流水线群系进行分布。

<badge type="info" text="biomes" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md)

## 用途

只有一个参数用到：

* BiomeProvider 中的 PIPELINE：

  <badge type="info" text="pipeline.source" /> [源](source.md) - 初始群系排版。