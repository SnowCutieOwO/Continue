# 描述

携带[插件附魔](../enchantments/list.md)的物品可以显示**基于发包**、**纯客户端侧**的附魔描述，显示附魔的作用。

你可以在 **config.yml** -> `Modules` -> `EnchantTooltip` 处切换该功能的开关。

::: warning

使用此功能需要安装 [PacketEvents](https://www.spigotmc.org/resources/80279/) 或 [ProtocolLib](https://www.spigotmc.org/resources/1997/)。

**创造模式**下的附魔描述**不会**显示，这会导服务器将其判定为真实数据从而永久滞留在物品上。

:::

## 配置

可在 `config.yml` 的 `EnchantTooltip` 部分修改设置。

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      link: '../about'
    },
    {
      name: `常见问题`,
      link: '../common-questions'
    }
  ]"
/>