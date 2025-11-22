## 映射表（Map）

一串键值对。

见“[在配置中定义数据](../../config-development/defining-data-in-configs.md)”了解更多。

## 用途

有 16 个参数用到：

* MathFunction 中的 map ：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

* ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](map.md)<[方块](block.md)，[方块](block.md)>

* pack.yml 中的 base：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](expression.md)内全局可读数学函数。

* SlantLayer 中的 map：

  <badge type="info" text="palette" /> [列表](list.md)<[映射表](map.md)<[调色板](../config-files/palette.md)，[整数](intenger.md)>>

* BIOME 中的 base：

  <badge type="info" text="palette" /> [列表](list.md)<[映射表](map.md)<[调色板](../config-files/palette.md)，[整数](intenger.md)>>

* Stage 中的 BORDER_LIST：

  <badge type="info" text="replace" /> [映射表](map.md)<[流水线群系](pipelinebiome.md)，[权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 将流水线群系替换为权重列表内的流水线群系的额外映射表。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

* pack.yml 中的 base：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](expression.md)内全局可读采样器。

* Stage 中的 REPLACE_LIST：

  <badge type="info" text="to" /> [映射表](map.md)<[流水线群系](pipelinebiome.md)，[权重列表](weightedlist.md)<[流水线群系](pipelinebiome.md)>> - 将流水线群系替换为权重列表中流水线群系的额外映射表。

* SCATTERED_ORE 中的 base：

  <badge type="tip" text="material-overrides" /> [映射表](map.md)<[方块](block.md)，[方块](block.md)>

* NoiseSampler 中的 NORMALIZER_EXPRESSION：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 一串额外命名数学函数，可用于 `expression` 中。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 将函数名称分配至采样器的映射表。

* NoiseSampler 中的 NORMALIZER_EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 额外的命名噪声采样器，可用在 `expression` 中。

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="variables" /> [映射表](map.md)<[字符串](string.md)，[浮点数](float.md)>

* BiomeColorMapping 中的 MAP：

  <badge type="info" text="map" /> [映射表](map.md)<[颜色字符串](colorstring.md)，[群系](../../config-documentation/config-files/biome.md)>

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="variables" /> [映射表](map.md)<[字符串](string.md)，[浮点数](float.md)> - 额外的命名变量映射表，可用在 `expression` 中。
