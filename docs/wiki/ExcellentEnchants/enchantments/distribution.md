# 分布

**ExcellentEnchants** 支持如下分布方法：

| 方法 | 描述 | 全局设置 | 附魔设置 |
|---|---|---|---|
|[附魔台](https://zh.minecraft.wiki/w/%E9%AD%94%E5%92%92#%E9%99%84%E9%AD%94)|决定附魔台中的物品获得什么附魔，或战利品中的物品携带什么附魔。|`Enchanting_Table`|`Discoverable`|
|[村民交易](https://zh.minecraft.wiki/w/%E4%BA%A4%E6%98%93#%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E5%91%98)|决定村民是否能将插件附魔以附魔书形式出售。|`Trading`|`Tradable`|
|[随机战利品](https://zh.minecraft.wiki/w/%E6%88%98%E5%88%A9%E5%93%81%E8%A1%A8)|决定附魔是否能出现在战利品表中的随机装备上。|`Random_Loot`|`On_Random_Loot`|
|[村民装备交易](https://zh.minecraft.wiki/w/%E4%BA%A4%E6%98%93#%E7%9B%94%E7%94%B2%E5%8C%A0)|决定村民是否能出售携带此类附魔的装备。只在[村民交易平衡性改动](https://minecraft.wiki/w/Villager_Trade_Rebalance)**禁用**时生效。|`Trade_Equipment`|`On_Traded_Equipment`|
|[实体装备](https://zh.minecraft.wiki/w/%E7%9B%94%E7%94%B2#%E7%94%9F%E7%89%A9%E7%9B%94%E7%94%B2)|决定生成实体穿戴的装备是否能携带此类附魔。|`Mob_Equipment`|`On_Mob_Spawn_Equipment`|

你可以在 `distribution.yml` 文件的**全局设置**中全局禁用某种获取方式。

你可以在 `/enchants/` 文件夹的**附魔设置**中单独调整附魔的获取方式。

部分附魔默认标记为**宝藏附魔**，使得它们无法从指定途径获取。你可以在附魔对应的配置文件中修改它们的宝藏附魔状态。

::: info

有关宝藏附魔的更多信息，请见 [Minecraft 维基](https://zh.minecraft.wiki/w/%E9%AD%94%E5%92%92#%E5%AE%9D%E8%97%8F%E5%9E%8B%E9%AD%94%E5%92%92)。

:::

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `关于`,
      link: '../about'
    },
    {
      name: `联动`,
      desc: '与其他附魔插件不同的是，**ExcellentEnchants** 能与服务器无缝兼容，没有任何副作用。',
      link: 'intergration'
    },
    {
      name: `物品组`,
      desc: '我们需要为每个附魔指定它能生效的物品。',
      link: 'item-sets'
    },
    {
      name: `切换附魔`,
      desc: '只需将附魔从 /enchants/ 文件夹移动到 /enchants/_disabled_，即可全服禁用某个附魔。',
      link: 'disabling'
    }
  ]"
/>