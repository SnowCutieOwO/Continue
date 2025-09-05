# 维度适用采样器（DimensionApplicableSampler）

\* 配置类型需要 `config-noise-function` 附属才可使用

<badge type="info" text="." /> [噪声采样器](config-packs.config-documentation.config-objects.noisesampler.md)

<badge type="info" text="dimensions" /> [整数](config-packs.config-documentation.config-objects.intenger.md)

## 用途

有 3 个参数用到：

* NoiseSampler 中的 EXPRESSION：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 为采样器分配函数名称。

* pack.yml 中的 base：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 可在配置内其他 `EXPRESSION` 采样器的[表达式](config-packs.config-documentation.config-objects.expression.md)中使用的采样器列表。

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="tip" text="samplers" /> [映射表](config-packs.config-documentation.config-objects.map.md)<[字符串](config-packs.config-documentation.config-objects.string.md)，[维度适用采样器](config-packs.config-documentation.config-objects.dimensionapplicablesampler.md)> - 可以用在 `expression` 中的额外噪声采样器。
