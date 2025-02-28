# 常见问题
有关 Oraxen 常见问题的总结

## Oraxen 是模组吗？

当然不是。这是一个 Minecraft 插件，能让你向服务器以纹理包的方式添加物品、方块以及其他的酷东西。

## Oraxen 用它自己的纹理包，那我还能用自己的吗？

你可以把任何纹理包与 Oraxen 生成的合并。

Oraxen 会将合并后的纹理包发送给所有玩家。

## 我用的是 Bungee/Velocity，为什么玩家跨服的时候纹理包一直在重载？

这是因为所谓的跨服其实是玩家退出再进入另一个服务器实现的，也就是说，这会触发 Minecraft 服务器卸载再加载纹理包的机制。

如果想要防止这种情况，你需要安装 [BungeePackLayer](https://www.spigotmc.org/resources/%E2%9C%82%EF%B8%8F-bungee-pack-layer-optimize-resource-pack-sending.94978/)。

这是一个 Bungee/Velocity 插件，会阻止相同的纹理包重复发送。

如果所有子服上的配置文件不同，那么这个纹理包就会被判定为不同。

## 我能禁用 Oraxen 提供的默认物品吗？

当然可以。`settings.yml` 文件里可以找到禁用这些内容的选项。

注意：必需的配置文件与其他内容仍然会生成，一般情况下大多数文件都会消失。

## Oraxen 会替换物品吗？

Oraxen 的目的就是尽可能实现特色的同时而不干扰原版体验，所以答案是否。但是 Minecraft 本身有一些限制（比如你不能真正地添加自定义物品或装备），所以我们需要做出取舍（可以通过禁用相关机制修改）：
* 默认情况下皮革盔甲穿在身上会有一些不一样（但在背包中的样式还是不变的）
* 新方块会使用原版未使用的菌柄变种：这会导致有些使用了这类方块的自定义建筑会出现一些问题，而且将菌柄方块相邻放置时，可能会显得有些问题（这是显示问题，右键点击或者重进服务器就可以解决）。

## 添加物品后，其他已创建的自定义材质物品消失

默认情况下，Oraxen 会向你的物品设置自定义模型数据并通过最快的方式生成。

每个不同的物品，需要不使用相同模型数据的，在你添加其他物品的时候，如果你手动指定了相同数据值的物品，则有可能出现这种情况。

::: info 提示
别忘了通过命令 `/o reload all`，**以及** `/o pack send @a`（或者重连服务器）来应用这些改动。
:::

## 用 Optifine 的时候显示了材质，但纯原版不行。

自 Minecraft 1.11 之后，物品或模型的名称就不再能使用大写字母了，但 Optifine 仍然保留了对其的兼容性。所以为了避免这样的问题出现，请不要使用大写字母。

## 如何更新 Oraxen？

这里是一个你能参考的视频：https://youtu.be/LkansZwVaPY

## 如何隐藏物品的提示框？

https://github.com/lolgeny/item-tooltip-remover

## 我想要提交新功能或者报告漏洞

首选项：登录 Github 并在官方仓库提交议题：[git.io/oraxen](https://github.com/Th0rgal/Oraxen)

次选项：[加入 Discord 聊天群组](https://discord.gg/4Qk5kBT9UX)，获取你的 Oraxen 认证并在“支持（Support）”与“请求（Requests）”频道发言。

### 我只想使用 Oraxen 的机制

前往 `settings.yml` 并按如下设置进行调整：

```YAML
  upload:
    enabled: false
Pack:
  generation:
    generate: false
    compression: BEST_COMPRESSION
    protection: false
  dispatch:
    send_pack: false
  enable_configs_updater: false
Misc:
  reset_recipes: false
  auto_update_items: false
```

配置文件的顺序可能不会像这里展示的那样。在完成后，请删除 `Oraxen/pack`、`Oraxen/Items/` 以及 `Oraxen/glyphs` 下的所有内容。