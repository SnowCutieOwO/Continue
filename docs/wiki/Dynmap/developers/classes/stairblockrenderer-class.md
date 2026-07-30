# StairBlockRenderer

StairBlockRender 类定义了渲染标准楼梯方块的着色器。使用时，需要用它处理所有给定楼梯方块的元数据值。着色器还会处理所有楼梯方块的连接样式及朝向（倒置等）。

着色器可以在如下两个方法中选择一个，为楼梯选择使用的纹理：

* 正常（非 TileEntity 方块），由补丁提供纹理（一个用于侧面，一个用于顶面，一个用于底面）
* 对于基于 TileEntity 的方块，读取 TileEntity 内的指定字段，并执行一次映射搜索，寻找需要用到给定方块所有面的补丁纹理。

## 属性

* `textureindex` - 可选参数，指定渲染方块的 TileEntity 属性名称，对有值（数字或字符串）的方块选择使用的纹理补丁。
* `texturecnt` - 可选参数，需要与 `textureindex` 搭配使用，否则无效。指定映射补丁纹理，进一步定义 `textureindex` 的指定位置：值的格式为 `textmap`，后接数字 `texturecnt-1`。其中 `cnt` 是 `count` 的缩写。
* `textmap<N>` - 从 `数字`=0 到 `数字`=（`texturecnt`-1），包含读取自 TileEntity 字段，按 `textureindex` 读取表示台阶对应纹理取自 `patch<数字>` 的值。

## 需要纹理的补丁

若 `textureindex` 未设置：

* `patch0` - 用于方块任意侧面（垂直面）的纹理
* `patch1` - 方块顶部使用的纹理
* `patch2` - 方块底部使用的纹理

若 `textureindex` 已设置：

* `patch0` - 当方块对应 TileEntity 下的 `textureindex` 字段等于 `textmap0` 属性的值时，为所有侧面应用的纹理。
* `patch1` - 当方块对应 TileEntity 下的 `textureindex` 字段等于 `textmap1` 属性的值时，为所有侧面应用的纹理。
* `patch<数字>` - 当方块对应 TileEntity 下的 `textureindex` 字段等于 `textmap<数字>` 属性的值时，为所有侧面应用的纹理。