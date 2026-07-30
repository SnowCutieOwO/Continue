# SkullRenderer 类

SkullRenderer 类用于渲染头颅。着色器会在头部（`Rot`）使用 TileEntity 字段，选择渲染头颅类型（`SkullType`）。每个头颅都需要六个纹理——均从 `SKIN` 类型的纹理文件（包含人形实体完整纹理的文件）读取。皮肤必须使用正确的 `texturefile` 参数在[纹理定义文件](../../mod-support/texture-definition-files.md)中载入——如下为僵尸头颅的示例配置：

``` txt
  texturefile:id=zombie,filename=mob/zombie.png,format=SKIN
```

`block` 记录会与使用 SkullRenderer，且需要为每个 `SkullType` 定义值提供六面纹理引用的自定义方块绑定：首个序号（0）中的 `patch0` 到 `patch5`，第二个序号（1）中的 `patch6` 到 `patch11`，依此类推。

## 属性

无

## 需要纹理的补丁

对于每个 `SkullType` 的值，从 `数字`=0 逐渐累加到 `数字`=最大值：

* `patch<6 x 数字>` - 头颅底部（在 `SKIN` 纹理中为序号 5）
* `patch<6 x 数字 + 1>` - 头颅顶部（在 `SKIN` 纹理中为序号 4）
* `patch<6 x 数字 + 2>` - 头颅背部（在 `SKIN` 纹理中为序号 1）
* `patch<6 x 数字 + 3>` - 头颅正面（在 `SKIN` 纹理中为序号 0）
* `patch<6 x 数字 + 4>` - 头颅侧面（在 `SKIN` 纹理中为序号 2）
* `patch<6 x 数字 + 5>` - 头颅侧面（在 `SKIN` 纹理中为序号 3）

