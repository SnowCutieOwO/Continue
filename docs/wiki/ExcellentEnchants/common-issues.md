# 常见插件问题

::: details 基岩版（Geyser）玩家无法在铁砧中使用自定义附魔。

这是 [Geyser 本身的限制](https://geysermc.org/wiki/geyser/current-limitations/)。

:::

## 不兼容插件

|插件名称|当前状态|描述|
|---|---|---|
| HuskSync | ❌ 不兼容 | 插件开发者不愿处理同步自定义 NBT 数据的问题（[#1](https://github.com/WiIIiam278/HuskSync/issues/596)，[#2](https://github.com/WiIIiam278/HuskSync/issues/70)）。 |

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      desc: '无感集成。完全兼容原版机制、命令及其他插件。',
      link: 'about'
    }
  ]"
/>