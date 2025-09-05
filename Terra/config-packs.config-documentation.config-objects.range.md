# 范围（Range）

整数的范围，分别表示最小值与最大值。

在这里，所取范围的最小值包含在范围中，而最大值则不含。例如，当最小值为 `2` 且最大值为 `5` 时，则处于范围中的整数为 `2, 3, 4`。

The defined minimum value is inclusive of the represented values while the maximum is not included. For example, given a min of 2 and a max of 5, the range would represent the values 2, 3, 4.

范围只有一个整数时仍然有效。例如，当范围为 `3` 时，等同于最小值为 `3`，最大值为 `3+1` 即 `4` 的范围。

在 `range` 参数中这样设置的示例如下：

``` YAML
range: 3
```

为了指定最小与最大值，范围可写作有如下参数的映射表：

<badge type="info" text="max" /> [整数](config-packs.config-documentation.config-objects.intenger.md) - 范围最大值（含）。

<badge type="info" text="min" /> [整数](config-packs.config-documentation.config-objects.intenger.md) - 范围最小值（含）。

在 `range` 参数中这样设置的示例如下：

``` YAML
range:
  min: 2
  max: 5
```

## 用途

有 14 个参数用到：

* Pattern 中的 MATCH_SET：

  <badge type="info" text="offset" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Extrusion 中的 REPLACE：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Pattern 中的 MATCH：

  <badge type="info" text="offset" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Extrusion 中的 SET：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 TOP：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Pattern 中的 MATCH_SOLID：

  <badge type="info" text="offset" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 RANDOM：

  <badge type="info" text="amount" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 GAUSSIAN_RANDOM：

  <badge type="info" text="amount" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 GAUSSIAN_RANDOM：

  <badge type="info" text="height" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Pattern 中的 MATCH_AIR：

  <badge type="info" text="offset" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 PATTERN：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 RANDOM：

  <badge type="info" text="height" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 SURFACE：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)

* Locator 中的 ADJACENT_PATTERN：

  <badge type="info" text="range" /> [范围](config-packs.config-documentation.config-objects.range.md)
