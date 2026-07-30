# 定义长方体方块

长方体方块可以视作在某轴上截断的简单实心方块。它的纹理应用方式与简单实心方块相同。

定义长方体方块，首先向模型定义文件添加 `boxblock` 设置。详见“[定义立方模型](defining-cuboid-models.md)”。木质压力板（三轴均有截断）的示例模型定义为：

``` txt
  boxblock:id=72,data=*,xmin=0.0625,xmax=0.9275,ymax=0.0625,zmin=0.0625,zmax=0.9275
```

之后方块纹理的定义与简单实心方块相同：只需通过带有纹理引用 `block` 的设置为六面应用纹理即可。关于此，请见“[定义简单方块](defining-a-simple-block.md)”部分。（上述）木质压力板的对应纹理定义示例如下：

``` txt
  block:id=72,allfaces=0:planks_oak,stdrot=true,transparency=TRANSPARENT
```

注意：大多数适合作为立体方块渲染的方块都需要设置 `transparency` 属性——对透光方块设置 `transparent`，或对半透光方块设置 `semitransparent` 属性。