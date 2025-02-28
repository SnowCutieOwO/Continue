# 配置
默认特性配置

## 命令

::: info 提示
你可以使用下列命令浏览所有该部分的所有命令：
```
/dh features help
```
:::

## 伤害显示

造成伤害时，一条显示伤害数值的悬浮字会显示在实体附近。

### 配置

::: info 提示
**该功能可在主配置文件 `config.yml` 中修改。**
:::

#### config.yml

```YAML
# ...

damage-display:
  # Do you want this feature enabled? [true/false]
  enabled: false
  # Do you want to display damage for players? [true/false]
  players: true
  # Do you want to display damage for mobs? [true/false]
  mobs: true
  # Do you want to display 0 (or less) damage? [true/false]
  zero-damage: false
  # How long will the hologram stay in ticks
  duration: 40
  # Damage placeholder: {damage}
  # Animations and Placeholders DO work here
  appearance: '&c{damage}'
  # Appearance of the damage, if the damage is critical
  critical-appearance: '&4&lCrit!&4 {damage}'
  # Height offset
  height: 0

# ...
```

## 回复显示

回复生命后，一条显示回复量数值的悬浮字会在实体附近生成。

### 配置

::: info 提示
**该功能可在主配置文件 `config.yml` 中修改。**
:::

#### config.yml

```YAML
# ...

healing-display:
  # Do you want this feature enabled? [true/false]
  enabled: false
  # Do you want to display healing for players? [true/false]
  players: true
  # Do you want to display healing for mobs? [true/false]
  mobs: true
  # How long will the hologram stay in ticks
  duration: 40
  # Heal placeholder: {heal}
  # Animations and Placeholders DO work here
  appearance: '&a+ {heal}'
  # Height offset
  height: 0

# ...
```