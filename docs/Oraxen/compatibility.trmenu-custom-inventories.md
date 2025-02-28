# TrMenu - 自定义背包
TrMenu 是免费开源的插件，允许你创建自定义菜单。

::: info 提示
这里有一个更新且更高效的方式创建背包，基于字符替换。这里是我们合作者的一个教程链接：

https://mcmodels.net/how-to-tutorials/oraxen-tutorials-guides/how-to-create-custom-guis-using-oraxen/
:::

TrMenu 不仅支持 Oraxen 物品，还允许你快速地在配置中引用它们。这样你就可以为你的物品或礼包预览创建炫酷的图标...或者是炫酷的抽奖展示界面。

SpigotMC 链接（旧版）：https://www.spigotmc.org/resources/trmenu-1-8-1-15.74284/
Github 继承版：https://github.com/FxRayHughes/TrMenu/releases

## 如何将 Oraxen 物品以图标形式引入？

Oraxen 物品不是默认材料，所以你应该按 `<oraxen:item_id>` 的形式将其引入：

```YAML
  mats: '<oraxen:your_item_id>'
```

## 如何用 Oraxen 创建自定义界面？

这个概念受到 [SimplySarc 的一个视频](https://www.youtube.com/watch?v=bv_wYNs5L6M)的启发，这个视频中展示了将菜单内的某个物品材质改到能够覆盖 Minecraft 默认界面的大小。这允许你在不移除已有界面的情况下创建新界面。

![img](images/image42.png '自定义界面的样式')

我推荐你看完他的视频来理解这个概念。这之后你可以看向 gui.yml 文件来查看创建自定义菜单的两个示例物品。