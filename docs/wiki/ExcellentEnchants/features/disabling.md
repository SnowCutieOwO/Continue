# 禁用附魔

ExcellentEnchants 提供的任何附魔都可以完全禁用。被禁用的附魔不会出现在服务器中。

你可以在 **distribution.yml** -> `Disabled` -> `Global` 处设置禁用的附魔列表。

::: warning

被禁用的附魔重启服务器后才会消失。

:::

::: danger

禁用后附魔会从物品和交易中永久消失！

:::

## 世界白名单

插件同样支持在指定世界中禁用附魔的**效果**。

被禁用的附魔仍然会出现在这些世界中，但不会有任何效果。

你可以在 **distribution.yml** -> `Disabled` -> `ByWorld` 下禁用附魔效果。