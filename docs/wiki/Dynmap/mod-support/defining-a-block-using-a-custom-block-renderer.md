# 自定义方块渲染器方块定义

通过自定义方块渲染器提供的模型定义方块，首先要在模型定义文件里选择并配置渲染器。`customblock` 设置可以做到，必须包含一或多个方块 ID（用 `id` 属性设置）、任意所需元数据值（用 `data` 属性设置）及自定义渲染器的类（用 `class` 属性设置）。例如，砂岩楼梯方块的定义如下所示：

``` txt
  customblock:id=128,,data=*,class=org.dynmap.hdmap.renderer.StairBlockRenderer
```

除了这些核心属性以外，部分自定义方块渲染器还拥有（且可能需要）额外属性，有时需要正确配置才能正常使用。见对应渲染器的“属性”部分描述了解详情。

之后，需要定义自定义渲染器引用的纹理。自定义渲染器描述中的“补丁所需纹理”部分定义了方块所需的 `patch<N>` 属性。除了这些描述，纹理定义文件内必须包含 `block` 设置，每个补丁对应 `patchN` 属性。例如，上述楼梯的这都有渲染器需要 3 个补丁：一个用于方块侧面，一个用于顶面，一个用于底面：对于砂岩楼梯，对应配置为：

``` txt
  block:id=128,data=*,patch0=0:sandstone_normal,patch1=0:sandstone_top,patch2=0:sandstone_bottom,transparency=SEMITRANSPARENT
```

注意：大部分自定义渲染器定义的方块都是不完整或不透明的方块，因此若需要透明属性，则需要在 `block` 部分预先配置。对于透光方块，需要使用 `transparent` 设置。对于半透光方块（如台阶和楼梯这类方块）则需要使用 `semitransparent` 设置。