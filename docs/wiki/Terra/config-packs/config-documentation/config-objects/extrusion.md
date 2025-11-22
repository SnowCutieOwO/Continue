# 挤压（Extrusion）

## 类型

不同类型的 `Extrusion` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Extrusion` 如下所示：

- - -

### SET

<badge type="info" text="range" /> [范围](range.md)

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md)

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[挤压替换群系](extrusionreplaceablebiome.md)>

### REPLACE

<badge type="info" text="from" /> [字符串](string.md)

<badge type="info" text="range" /> [范围](range.md)

<badge type="info" text="sampler" /> [噪声采样器](noisesampler.md)

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[挤压替换群系](extrusionreplaceablebiome.md)>

## 用途

只有一个参数用到：

* BiomeProvider 中的 EXTRUSION：

  <badge type="info" text="extrusions" /> [列表](list.md)<[挤压](extrusion.md)>
