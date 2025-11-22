# 颜色采样器（ColorSampler）

\* 该配置需 `library-image` 附属才可使用

颜色采样器由配置定义，可以为每个 XZ 坐标对染上一种颜色。颜色采样器通常可以利用颜色数据在世界范围内分布生成物，例如通过高度图决定地形，或通过图片绘制群系走向。

颜色采样器与[图片](image.md)的不同之处在于，它们可以为任意 XZ 坐标对染色，而 `Image` 只在选定的范围内有效。

## 类型

不同类型的 `ColorSampler` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `ColorSampler` 如下所示：

- - -

### COLOR

将所有输入染上相同的颜色。

<badge type="info" tetx="color" /> [颜色字符串](colorstring.md) - 输出的颜色。

### SINGLE_IMAGE

输出 `Image` 的像素，范围外坐标的颜色由“返回”颜色采样器提供，类型通常为 [COLOR](#color)。

<badge type="info" text="align" /> 对齐

<badge type="info" text="image" /> [图像](image.md) - 用于采样的图像。

<badge type="info" text="outside-samlper" /> [颜色采样器](colorsampler.md) - 为 `Image` 范围外坐标提供颜色的采样器。

### TILED_IMAGE

以指定的 `Image` 为来源，输出重复的网格状像素点。

<badge type="info" text="align" /> 对齐

<badge type="info" text="image" /> [图像](image.md) - 用于采样的图像。

### ROTATE

<badge type="info" text="angle" /> [浮点数](float.md)

<badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

### TRANSLATE

<badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

<badge type="info" text="x" /> [整数](intenger.md)

<badge type="info" text="z" /> [整数](intenger.md)

### 用途

有 6 个参数用到：

* BiomeProvider 中的 IMAGE：

  <badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

* NoiseSampler 中的 CHANNEL：

  <badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md) - 提取通道值的采样器。

* ColorSampler 中的 TRANSLATE：

  <badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

* ColorSampler 中的 ROTATE：

  <badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

* Source 中的 IMAGE:

  <badge type="info" text="color-sampler" /> [颜色采样器](colorsampler.md)

* ColorSampler 中的 SINGLE_IMAGE：

  <badge type="info" text="outside-samlper" /> [颜色采样器](colorsampler.md) - 为 `Image` 范围外坐标提供颜色的采样器。