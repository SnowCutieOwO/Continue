# CrateReloaded - 抽奖箱
优质 - 强大 - 动态 - 高自定义 - 视效

该功能由作者 [yzl210](https://github.com/yzl210) 提供，感谢！

Spigot 链接：https://www.spigotmc.org/resources/free-crate-reloaded-mystery-crate.861/

## 奖励

### 用法

`oraxen-item:(<oraxen 物品名称> <物品数量(可选, 默认为 1)>)`

### 示例

```YAML
reward:
  rewards:
    - 'unique:(), chance:(1),   oraxen-item:(common_material 15)'
    - 'unique:(), chance:(0.1), oraxen-item:(rare_material), oraxen-item:(common_material 5)'
```

## 图标（仅展示）

### 用法

`oraxen-display:(<oraxen 物品名称> <物品数量(可选, 默认为 1)>)`

### 示例

```YAML
reward:
  rewards:
    - 'unique:(), chance:(1),    cmd:(heal {player}), oraxen-display:(heal_icon)'
    - 'unique:(), chance:(0.1), oraxen-item:(rare_material), oraxen-item:(common_material 5), oraxen-display:(rare_and_common_icon)'
```