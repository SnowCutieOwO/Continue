# 命令

命令的别称可以在 **engine.yml** 中修改。默认为 `/excellentenchants` 或 `/eenchants`

## 标志

* `-charged` - 返回[充能附魔](features/charges.md)。
* `-custom` - 只显示非原版附魔。

## 插件命令

<badge type="tip" text="<> 必选参数" /> <badge type="info" text="[] 可选参数" />

标志 -s 会将命令标记为静默执行（玩家不会收到命令执行的提醒）。

* `/eenchants [help]` - 显示插件命令列表。
* `/eenchants reload` - 重载插件与附魔配置。
* `/eenchants list [玩家名称]` - 打开自定义附魔列表。
* `/eenchants book <玩家名称> <附魔名称> <附魔等级>` - 将指定等级的附魔给予玩家。附魔等级为 `-1` 时表示随机等级。
* `/eenchants randombook [玩家名称] [-custom] [-charged]` - 获取随机等级的随机附魔书。
* `/eenchants enchant <附魔名称> <附魔等级> [玩家名称] [格子]` - 为指定位置的物品添加附魔。附魔等级为 `-1` 时表示随机等级。
* `/eenchants disenchant <附魔名称> [玩家名称] [格子]` - 移除手中或指定格子物品上的附魔。
* `/eenchants givefuel <附魔名称> [数量]` - 获取用于为附魔[充能](features/charges.md)的物品。

## 另见

<Links
  :grid="2"
  :items="[
    {
      name: `切换附魔`,
      desc: '只需将附魔从 /enchants/ 文件夹移动到 /enchants/_disabled_，即可全服禁用某个附魔。',
      link: 'enchantments/disabling'
    }
  ]"
/>