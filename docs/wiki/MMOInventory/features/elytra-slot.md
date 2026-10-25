# 🪽 鞘翅栏

这是一种特殊类型的装备栏。玩家只能在这个格子里装备鞘翅。装备后，玩家就能在高空坠落时切换鞘翅装备。

## 使用方式

只需在对应格子中装备鞘翅即可。若玩家坠落超过四格且身上没有缓降效果，则鞘翅会自动代替玩家的胸甲栏。玩家可以在下落过程中使用鞘翅滑翔。当玩家落地后，鞘翅会放回自定义界面，换回原本装备的盔甲。

## 槽位示例

如下默认配置片段可以在 `inventory/default_mmoinventory.yml` 找到。

``` YAML
slots:
  #.....
  ELYTRA:
  type: elytra
  material: GOLD_NUGGET
  custom_model_data_string: "elytra"
  name: "&6鞘翅栏"
  restrictions:
    - 'material{materials="ELYTRA"}'
  slot: 14
  lore:
    - '只能在这个格子里装备 &b鞘翅&7。'
    - '坠落时&b自动装备&7。'
    - '将物品拖放其上即可装备。'
```

## 如何禁用

删除配置文件，或者将所有界面中的 `elytra` 类型的格子配置删除。

## 主配置

在 `config.yml` 中，你可以修改自动装备鞘翅触发所需的最小坠落高度。

``` YAML
elytra_deployment:

  # 若玩家身上有“缓降”状态效果，
  # 则摔落时间会重置，使得玩家无法自动替换鞘翅
  # 直到他接触地面或效果结束。
  skip_if_slow_falling: true

  # 触发鞘翅自动装备
  # 所需的最小摔落高度（单位为格）。
  fall_distance_threshold: 4
```