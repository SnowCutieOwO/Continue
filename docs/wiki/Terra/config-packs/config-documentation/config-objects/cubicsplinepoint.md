# 立体样条点（CubicSplinePoint）

\* 配置类型需要 `config-noise-sampler` 拓展才可使用

<badge type="info" text="from" /> [浮点数](float.md) - 输入噪声值的匹配来源。

<badge type="info" text="gradient" /> [浮点数](float.md) - 立体样条在当前点位的渐变/斜率。

<badge type="info" text="to" /> [浮点数](float.md) - 输入噪声与 `from` 相同时的输出。

## 用途

只有一个参数用到：

* NoiseSampler 中的 CUBIE_SPLINE：

  <badge type="info" text="points" /> [列表](list.md)<[立体样条点](cubicsplinepoint.md)>
