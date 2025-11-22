# 图片（Image）

\* 配置类型需要 `library-image` 附属才可使用

本章节讲述了如何在其他需要 `Image` 类型的配置中引入图片并使用的方法。

## 类型

不同类型的 `Image` 有着不同的行为，有时还有额外的配置参数可以控制它们。

类型通过配置参数 <badge type="info" text="type" /> 决定。如果两个附属使用了同一种类型名称，你可以在类型前加上 `附属名称:` 区分。

可用的 `Image` 如下所示：

- - -

### BITMAP

载入单张图片。如果你在载入超大图片时遇到问题，请使用 [STITCHED_MAP](#stitched_bitmap) 类型。

<badge type="info" text="columns" /> [整数](intenger.md)

<badge type="info" text="path-format" /> [字符串](string.md) - 从包目录开始，指向图片的相对路径。（Windows 用户请用斜杠 `/` 代替反斜杠 `\`）

<badge type="info" text="rows" /> [整数](intenger.md)

<badge type="tip" text="zero-indexed" /> [布尔值](boolean.md)

默认值：`false`

### STITCHED_BITMAP

将 `Image` 图片分成小块载入，并在生成过程中逐渐“缝合”的另类载入方法。如果图片过大而无法通过前一种方式载入内存（Java 的 `BufferedImage` 类实现方法的短板），那么就可以使用这类载入方法。

<badge type="info" text="columns" /> [整数](intenger.md) - 缝合的图片列数。

<badge type="info" text="path" /> [字符串](string.md) - 从包目录开始，指向图片的相对路径。（Windows 用户请用斜杠 `/` 代替反斜杠 `\`）

路径格式的名称部分必须包含 `{row}` 和 `{column}` 变量，用以表示图片对应分块所在的行号与列号。

假设有一个结构如下的包目录，我们需要通过这个方法将其缝合为一整张图片：

``` txt
my-config-pack/
├── pack.yml
├── images
┆   └── stitched-image/
        ├ my-image-0-0.png
        ├ my-image-0-1.png
        ├ my-image-1-0.png
        └ my-image-1-1.png
```

那么缝合图片的 `path-format` 即为：

``` YAML
path-format: images/stitched-image/my-image-{row}-{column}.png
```

<badge type="info" text="rows" /> [整数](intenger.md) - 缝合的图片行数。

<badge type="tip" text="zero-indexed" /> [布尔值](boolean.md)

默认值：`false`

如果图片行列的分块序号从 0 开始，则应将其设置为 true。

## 用途

有 3 个参数用到：

* NoiseSampler 中的 DISTANCE_TRANSFORM：

  <badge type="info" text="image" /> [图片](image.md)

* ColorSampler 中的 SINGLE_IMAGE：

  <badge type="info" text="image" /> [图片](image.md) - 采样的图片。

* ColorSampler 中的 TILED_IMAGE：

  <badge type="info" text="image" /> [图片](image.md) - 采样的图片。
