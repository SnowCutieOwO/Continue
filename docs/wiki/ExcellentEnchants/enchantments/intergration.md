# 联动

与其他附魔插件不同的是，**ExcellentEnchants** 能与服务器无缝兼容，没有任何副作用。附魔会自动注入战利品表、村民交易列表以及附魔台，而不会修改它们。

::: info

你也可以决定玩家能通过什么方式获取附魔。详见“[分布](distribution.md)”章节。

:::

::: warning

ExcellentEnchants 添加的附魔并非永久。不要试图在没有插件的情况下运行服务器，否则这会导致所有自定义附魔永久丢失。

:::

## 命名空间

**ExcellentEnchants** 使用 `excellentenchants` 作为自定义附魔的命名空间，这可以防止与原版 `minecraft` 命名空间的附魔产生冲突。

出于兼容性考虑，`distribution.yml` 中可以将自定义附魔切换回 `minecraft` 命名空间。

::: warning

尽量避免使用 `minecraft` 命名空间，它可能会引发许多问题。**使用后果自负。**

:::

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      link: 'about'
    }
  ]"
/>