# 权重列表（WeightedList）

一串带有权重的元素列表。

见“[分布列表](../../config-development/noise/how-noise-distributes-things.md#权重列表)”了解更多。

## 用途

有 10 个参数用到：

* BORDER_LIST 中的 Stage：

<badge type="info" text="default-to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 默认流水线群系列表，用于替换包含默认替换标签的流水线群系。

* Extrusion 中的 REPLACE：

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[挤压替换群系](extrusionreplaceablebiome.md)>

* FEATURE 中的 base：

<badge type="info" text="structures.structures" /> [权重列表](weightedlist.md)<[结构](structure.md)>

* Stage 中的 REPLACE_LIST：

<badge type="info" text="default-to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换匹配默认标签的流水线群系列表。

* Extrusion 中的 SET：

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[挤压替换群系](extrusionreplaceablebiome.md)>

* Stage 中的 BORDER：

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换的流水线群系列表。

* Stage 中的 BORDER_LIST：

<badge type="info" text="replace" /> Map<[流水线群系](pipelinebiome.md), [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 一串额外映射表，用于将流水线群系替换诶权重列表中其他流水线群系。

* Stage 中的 REPLACE_LIST：

<badge type="info" text="to" /> Map<[流水线群系](pipelinebiome.md), [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 一串额外映射表，用于将流水线群系替换诶权重列表中其他流水线群系。

* Stage 中的 REPLACE：

<badge type="info" text="to" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)> - 替换 `from` 标签的流水线群系列表。

* Source 中的 SAMPLER：

<badge type="info" text="biomes" /> [权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>
