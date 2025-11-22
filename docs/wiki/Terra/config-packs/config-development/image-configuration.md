# 图片配置

本页为 `library-image` 附属的相关文档。

## 概述

`library-image` 的生成过程通常有两个步骤：1）从平面坐标中返回一个颜色值，2）将颜色转化为用于世界生成的群系或高度值。

``` mermaid

flowchart LR
  label1["平面坐标"] --> label2["1）返回颜色"]
  label2 --> label3["2）转化颜色"]
  label3 --> label4[输出（如生物群系、高度值）]

```

### 图片配置

[图片](../config-documentation/config-objects/image.md)配置决定了 Terra 载入图片数据的方式，通常情况下只需将图片路径填入即可。图片配置会用在其他有关 `library-image` 或颜色源的配置中，影响世界生成。

### 颜色采样器

[颜色采样器](../config-documentation/config-objects/colorsampler.md)通常负责初步返回颜色值。颜色采样器与图像配置的不同之处在于，它们可以为*无限*空间提供颜色，而图像配置仅限于指定宽度和高度内操作。

颜色采样器可能利用图片配置获取颜色源数据，但也可以决定世界空间中的图片生成。颜色采样器的行为和[噪声采样器](../config-documentation/config-objects/noisesampler.md)相似，但关键的不同是它输出的是颜色，而非数字。

``` mermaid

flowchart LR
  chart1["平面坐标"] --> chart2["颜色采样器"]
  chart2 --> chart3["颜色"]

```

### 颜色转化

待完成