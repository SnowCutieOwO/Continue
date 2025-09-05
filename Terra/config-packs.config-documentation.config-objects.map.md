## 映射表（Map）

一串键值对。

见“[在配置中定义数据](config-packs.config-development.defining-data-in-configs.md)”了解更多。

## 用途

有 16 个参数用到：

* MathFunction 中的 map ：

  <badge type="tip" text="functions" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[数学函数](config-packs.config-documentation.config-objects.mathfunction.md)>

* ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[方块](config-packs.config-documentation.config-objects.block.md)，[方块](config-packs.config-documentation.config-objects.block.md)>

* pack.yml 中的 base：

  <badge type="tip" text="functions" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[数学函数](config-packs.config-documentation.config-objects.mathfunction.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](config-packs.config-documentation.config-objects.expression.md)内全局可读数学函数。

* SlantLayer 中的 map：

  <badge type="info" text="palette" /> [列表](config-packs.config-documentation.config-objects.list.md)<[映射表](config-packs.config-documentation.config-objects.map.md)<[调色板](config-packs.config-documentation.config-files.palette.md)，[整数](config-packs.config-documentation.config-objects.intenger.md)>>

* BIOME 中的 base：

  <badge type="info" text="palette" /> [列表](config-packs.config-documentation.config-objects.list.md)<[映射表](config-packs.config-documentation.config-objects.map.md)<[调色板](config-packs.config-documentation.config-files.palette.md)，[整数](config-packs.config-documentation.config-objects.intenger.md)>>

* Stage 中的 BORDER_LIST：

  <badge type="info" text="replace" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)，[权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)>> - 将流水线群系替换为权重列表内的流水线群系的额外映射表。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="functions" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[数学函数](config-packs.config-documentation.config-objects.mathfunction.md)>

* pack.yml 中的 base：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](config-packs.config-documentation.config-objects.expression.md)内全局可读采样器。

* Stage 中的 REPLACE_LIST：

  <badge type="info" text="to" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)，[权重列表](config-packs.config-documentation.config-objects.weightedlist.md)<[流水线群系](config-packs.config-documentation.config-objects.pipelinebiome.md)>> - 将流水线群系替换为权重列表中流水线群系的额外映射表。

* SCATTERED_ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[方块](config-packs.config-documentation.config-objects.block.md)，[方块](config-packs.config-documentation.config-objects.block.md)>

* NoiseSampler 中的 NORMALIZER_EXPRESSION：

  <badge type="tip" text="functions" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[数学函数](config-packs.config-documentation.config-objects.mathfunction.md)> - 一串额外命名数学函数，可用于 `expression` 中。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 将函数名称分配至采样器的映射表。

* NoiseSampler 中的 NORMALIZER_EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 额外的命名噪声采样器，可用在 `expression` 中。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="variables" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[浮点数](config-packs.config-documentation.config-objects.float.md)>

* BiomeColorMapping 中的 MAP：

  <badge type="info" text="map" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[颜色字符串](config-packs.config-documentation.config-objects.colorstring.md)，[群系](config-packs.config-documentation.config-files.biome.md)>

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="variables" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[浮点数](config-packs.config-documentation.config-objects.float.md)> - 额外的命名变量映射表，可用在 `expression` 中。
