# 数学函数（MathFunction）

\* 配置对象需要 `config-noise-function` 附属才可使用

一个数学函数。

<badge type="info" text="expression" /> [表达式](expression.md)

<badge type="tip" text="arguments" /> [列表](list.md)<[字符串](string.md)>

默认值：`[]`

<badge type="itp" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

默认值：`{}`

## 用途

有 3 个参数用到：

* NoiseSampler 中的 EXPRESSION：

  <badge type="itp" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)>

* pack.yml 中的 base：

  <badge type="itp" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 可在配置内其他 `EXPRESSION` 采样器的[表达式](expression.md)中使用的采样器列表。

* NoiseSampler 中的 EXPRESSION_NORMALIZER：

  <badge type="itp" text="functions" /> [映射表](map.md)<[字符串](string.md)，[数学函数](mathfunction.md)> - 可以用在 `expression` 中的额外噪声采样器。
