# 禁用附魔

只需将附魔从 `/enchants/` 文件夹移动到 `/enchants/_disabled_`，即可全服禁用某个附魔。

**注意：** 这会移除附魔的所有获取途径及携带附魔的物品，若附魔书只包含特殊附魔，则有可能导致它们变成空附魔书。

::: warning

被禁用的附魔重启服务器后才会消失。

:::

## 仅禁用效果

除此之外，你可以只在某个世界禁用附魔生效，而不影响玩家按流程正常获取、通过命令或创造模式标签页获取。

只需将对应附魔或世界添加至 `config.yml` -> `Disabled` -> `ByWorld` 部分即可：

``` YAML title="config.yml"
Disabled:
  # ... 其他设置省略 ...
  ByWorld:
    plots_world:
      - '*' # 在当前世界禁用所有附魔。
    world_the_end:
      - tunnel
      - blast_mining
```

::: info

`*` 表示指定所有附魔。

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
      name: `常见问题`,
      link: '../common-questions'
    }
  ]"
/>