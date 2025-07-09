# 常见功能问题

::: details 我要如何修改宝箱/钥匙物品的名称/描述/附魔？

使用别的插件。这不是本插件该实现的功能。

比如，[SunLight](https://www.spigotmc.org/resources/67733/) 提供了 `/rename`、`/relore` 和 `/i enchant` 命令。
再比如，[ItemEdit](https://www.spigotmc.org/resources/itemedit-1-8-x-1-21-x.40993/) 提供了 `/ie rename <名称>`、`/ie lore <add/set/remove/reset> [...]` 和 `/ue enchant <附魔名称> [附魔等级]` 命令。

:::

::: details 我如何在宝箱预览中隐藏概率？

编辑[预览界面](crates.previews.md)配置。

:::

::: details 我如何将插件的宝箱/钥匙作为在线奖励给予玩家？

请用别的插件。插件不提供此类功能。

:::

::: details 我要如何将宝箱/钥匙放进礼包？
向你的礼包插件添加给予宝箱/钥匙的[命令](commands.md)。这是最好的方式。
:::

::: details 我如何在玩家投票（顶帖）时给予他们宝箱/钥匙？

只需在你的投票（顶帖）插件中添加给予宝箱/钥匙的命令即可。

::: danger

请使用**投票插件**提供的玩家名称变量！

:::

::: details 你能添加对 CMI 悬浮字的支持吗？
（译者注：相当幽默。）    
绝不。这插件的代码和 API 非常混乱。
:::

::: details 我如何强制玩家持有钥匙才可开启宝箱？
`config.yml` -> `Hold_Key_To_Open` 设置为 true
:::

::: details 如何禁用累抽奖励？

`config.yml` -> `Milestones` -> `Enabled` 设置为 `false`。

:::
