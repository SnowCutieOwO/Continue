# 设置自定义光照

自定义光照可通过修改 `lightings.txt` 的标准光照设置或在 `custom-lightings.txt` 文件中新增/更新内容实现（推荐后者）。

目前只有两种光照类型——DefaultHDLighting 与 ShadowHDLighting。

DefaultHDLighting 不修改阴影的颜色数据——实际显示与无阴影白天地图等同，且没有设置。

ShadowHDLighting 有一些设置项，允许控制自然光照、阴影强度及是否为同一张地图生成白天与夜间样式的图块。

标准的光照配置示例如下：

``` YAML
lightings:
  - class: org.dynmap.hdmap.ShadowHDLighting
    name: my-custom-lighting
    shadowstrength: 1.0
    ambientlight: 4
    night-and-day: true
    smooth-lighting: false
```

这些 ShadowHDLighting 类的设置详细解释如下：

* `name`：光照定义的名称，不可重复。若 custom-lightings.txt 中有自定义光照与标准光照定义中的名称重合，那么对应的标准光照将会被自定义光照设置覆盖。
* `shadowstrength`：决定了阴影区域的强度。默认为 0.0（不渲染阴影），正常阴影为 1.0。大于 1.0 的值会让阴影更加浓重，反之则让阴影更淡。
* `ambientlight`：决定了自然光照的相对量。完整自然光照为 15（也是默认值），夜间自然光照则为 4。
* `night-and-day`：启用此设置（调为 `true`）后，会为每个图块生成白天与夜间的版本，会在地图浏览器中根据世界时间自动切换。“夜间”与“白天”图块的差别在于，白天图块样貌类似于 `ambientlight` 设置为 15 时的结果，而夜间则跟随上述设置。默认值为 `false`。
* `smooth-lighting`：决定了是否启用平滑光照功能。启用后会增加约 10% 的处理开销，但会使得阴影与光照更柔和。若未设置，则使用 configuration.txt 中设置的值。

