# 充能

**充能**是一种使得附魔使用次数有限（能量条）的功能。效果次数（能量条）用尽时，玩家需要用“燃料”物品在铁砧中结合，为其充能。

“燃料”物品（默认为青金石）可自定义其名称、描述、模型数据及[其他选项](https://nightexpressdev.com/nightcore/configuration/item-formation/)。

::: info

每次每个附魔充能消耗 `1 经验等级`。

:::

## 配置

在 **config.yml** 的 `Charges` -> `Enabled` 部分启用本功能。

启用后，每个附魔的配置文件下会多出 `Charges` 部分，根据需要对其进行修改即可。

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      link: '../about'
    },
    {
      name: `命令`,
      desc: '命令的别称可以在 engine.yml 中修改。默认为 /excellentenchants 或 /eenchants。',
      link: '../commands'
    }
  ]"
/>