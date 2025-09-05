# 流水线群系（PipelineBiome）

\* 该配置需 `biome-provider-pipeline-v2` 附属才可使用

表示群系流水线期间被替换的群系。

流水线群系可代表：

* 一般的[群系](config-packs.config-documentation.config-files.biome.md)
* 变量群系
* 替换群系

## 表示普通群系

若定义了已有群系的 ID，那么流水线群系即表示这个群系。流水线群系表示的普通群系会使用所有对应群系包含的标签。

## 变量群系

如果流水线群系没有对应任何普通群系的 ID，则它会被看做变量群系。

变量群系在群系流水线过程中会被当做普通群系对待，但变量名称可以随意修改。但变量群系应当将其名称变为全小写，以将其与普通群系区分开来。

例如，除了通过[来源](config-packs.config-documentation.config-objects.source.md)分布正常群系，你可以使用更宽泛的“大陆”和“海洋”变量群系。

``` YAML
source:
  type: SAMPLER
  biomes:
    - land: 1
    - ocean: 1
  sampler:
    type: OPEN_SIMPLEX_2
```

若要形成有效的流水线，**变量群系一定不能出现在最终群系分布中**。这表示，任何在流水线中引入的变量群系最后都必须替换为能表示实际群系的 ID。

如果变量群系出现在了最终群系分布中，这就被称作“流水线泄露（pipeline leak）”。

如上来源本身不会载入，除非 `land` 和 `ocean` 能被替换为表示普通群系的流水线群系。

## Self 格式

被“替换”的流水线群系可在配置中称作 `SELF`，表现为可替换为流水线群系的变量。当你想要将带[标签](config-packs.config-documentation.config-objects.tag.md)的流水线群系替换为其他群系时会非常有用。

## 用途

有 7 个参数用到：

* Stage 中的 BOERDER_LIST：

  <badge type="info" text="default-to" /> [权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)> - 替换包含默认替换标签的流水线群系的流水线群系默认列表。

* Stage 中的 REPLACE_LIST：

  <badge type="info" text="default-to" /> [权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)> - 替换匹配任意默认标签的流水线群系列表。

* Stage 中的 BORDER:

  <badge type="info" text="to" /> [权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)> - 替换的流水线群系列表。

* Stage 中的 BORDER_LIST：

  <badge type="info" text="replace" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)，[权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)>> - 额外的映射表，将流水线群系替换为权重列表中的其他流水线群系。

* Stage 中的 REPLACE_LIST：

  <badge type="info" text="to" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)，[权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)>> - 额外的映射表，将流水线群系替换为权重列表中的其他流水线群系。

* Stage 中的 REPLACE：

  <badge type="info" text="to" /> [权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)> - `from` 标签替换为的流水线群系列表。

* Source 中的 SAMPLER：

  <badge type="info" text="biomes" /> [权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)>