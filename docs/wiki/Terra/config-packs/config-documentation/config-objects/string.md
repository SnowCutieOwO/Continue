# 字符串（String）

一串字符。

见“[在配置中定义数据](../../config-development/defining-data-in-configs.md)”了解详情。

## 用途

有 47 个参数用到：

* NoiseSampler 中的 IMAGE：

  <badge type="tip" text="image" /> [字符串](string.md) - 在配置包目录中指向图片的相对路径。（对于 Windows 用户：请使用正斜杠 `/` 而非反斜杠 `\\`）

* NoiseSampler 中的 CELLULAR：

  <badge type="tip" text="return" /> [字符串](string.md) - 采样器用于计算噪声的函数。

* NoiseSampler 中的  DISTANCE：

  <badge type="tip" text="distance-function" /> [字符串](string.md) - 用于计算采样点位与配置点之间距离的函数。

* NoiseSampler 中的 IMAGE：

  <badge type="info" text="channel" /> [字符串](string.md) - 输出图像的通道。

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 一串额外命名数学函数，可用于 `expression` 中。

* Extrusion 中的 REPLACE：

  <badge type="info" text="from" /> [字符串](string.md)

* PALETTE 中的 base：

  <badge type="info" text="id" /> [字符串](string.md)

* NoiseSampler 中的 DISTANCE_TRANSFORM：

  <badge type="tip" text="normalization" /> [字符串](string.md)

* pack.yml 中的 base：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](expression.md)内全局可读数学函数。

* NoiseSampler 中的 DISTANCE_TRANSFORM：

  <badge type="tip" text="cost-function" /> [字符串](string.md)

* Image 中的 BITMAP：

  <badge type="info" text="path-format" /> [字符串](string.md) - 在配置包目录中指向图片的相对路径。（对于 Windows 用户：请使用正斜杠 `/` 而非反斜杠 `\\`）

* pack.yml 中的 base：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 可在其他配置文件定义的 `EXPRESSION` 采样器中使用的[表达式](expression.md)内全局可读采样器。

* MathFunction 中的 map：

  <badge type="tip" text="arguments" /> [列表](list.md)<[字符串](string.md)>

* pack.yml 中的 base：

  <badge type="info" text="id" /> [字符串](string.md) - 配置包的 ID。

* SCATTERED_ORE 中的 base：

  <badge type="info" text="id" /> [字符串](string.md)

* pack.yml 中的 base：

  <badge type="tip" text="author" /> [字符串](string.md) - 配置包的作者。

* Image 中的 STITCHED_BITMAP：

  <badge type="info" text="path" /> [字符串](string.md) - 在配置包目录中指向图片的相对路径格式字符串。（对于 Windows 用户：请使用正斜杠 `/` 而非反斜杠 `\\`）

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 将函数名称分配至采样器的映射表。

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="variables" /> [映射表](map.md)<[字符串](string.md)，[浮点数](float.md)> - 可用在 `expression` 中的额外命名变量映射表。

* MathFunction 中的 map：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

* GenerationStage 中的 FEATURE：

  <badge type="info" text="id" /> [字符串](string.md)

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="samplers" /> [映射表](map.md)<[字符串](string.md)，[维度适用采样器](dimensionapplicablesampler.md)> - 可以用在表达式中的额外命名噪声采样器。

* NoiseSampler 中的  CELLULAR：

  <badge type="tip" text="distance" /> [字符串](string.md) - 计算细胞边缘距离的方法。

* FEATURE 中的 base：

  <badge type="info" text="id" /> [字符串](string.md)

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="variables" /> [映射表](map.md)<[字符串](string.md)，[浮点数](float.md)>

* ORE 中的 base：

  <badge type="info" text="id" /> [字符串](string.md)
