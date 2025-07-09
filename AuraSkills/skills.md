# 技能

技能与 skills.yml 文件的教程

**技能（Skills）** 是玩家在游戏不同方面的经验或进度。作为 AuraSkills 的主要特色，它与插件的其他特色功能息息相关。技能的所有信息都可以通过 `/skills` 命令在菜单中浏览。每个技能都有其指定任务或行为作为经验获取来源。玩家通过获取足够升级的经验值提升技能等级。

在提升技能等级之后，玩家可获得如下奖励：

* 属性等级
* 能力解锁与升级
* 魔法能力解锁与升级
* 其他自定义[奖励](rewards.md)，包括：
  * 命令
  * 权限
  * 物品
  * 钱

插件目前包含十一种默认技能：

* 耕作（Farming）
* 采集（Foraging）
* 挖掘（Mining）
* 渔技（Fishing）
* 发掘（Excavation）
* 箭术（Archery）
* 防御（Defense）
* 近战（Fighting）
* 敏捷（Agility）
* 附魔（Enchanting）
* 炼药（Alchemy）

默认配置中有 4 种技能自 Beta 后被合并或移除。从 Beta 或旧版预设迁移的服务器还拥有如下额外技能：

* 耐力（已合并至默认的“敏捷”）
* 治疗（已合并至默认的“炼药”）
* 锻造（已合并至“附魔”）
* 魔法（已移除）

## 配置

技能在 `skills.yml` 下编辑。每个技能都在完整命名空间 ID 下有其对应部分的配置（以 `auraskills/` 为开头的都是默认技能）。如下为带有注释的耕作技能示例配置：

``` YAML title="skills.auraskills/farming.yml"
auraskills/farming: # 技能的命名空间 ID
  abilities: # 技能升级获取的能力
    - auraskills/bountiful_harvest
    - auraskills/farmer
    - auraskills/scythe_master
    - auraskills/geneticist
    - auraskills/triple_harvest
  mana_ability: auraskills/replenish # 技能对应的魔法能力
  options: # 技能的配置萱萱, 详细解释见下文
    enabled: true
    max_level: 97
    check_cancelled: true
    check_multiplier_permissions: true
```

### 能力

`abilities` 键为附加至技能的的能力列表（随技能提升解锁）。能力名称必须为完整命名空间 ID。能力的其他设置位于 `abilities.yml`。

### 魔法能力

`mana_ability` 键为技能魔法能力的名称（完整命名空间 ID）。鉴于不是所有技能都有魔法能力，该项可选。魔法能力的其他设置位于 `mana_abilities.yml`。

## 选项

### 全局选项

* `enabled` - 是否启用技能及其相关功能。若设置为 false，玩家不能获取该技能的经验值，也不可使用其中的能力与魔法能力，且技能会从菜单界面中隐去。禁用技能并不会使得玩家等级重置，因此重新将技能启用会保留玩家先前获取的等级及经验值。
* `max_level` - 技能的最大等级。降低该值不会导致超过该等级的玩家被强制降低。
* `check_cancelled` - 给予经验值时，源升级模块是否忽略取消的事件。
* `check_multiplier_permissions` - 是否允许基于权限的修饰符（如 `auraskills.multiplier.*`）生效。如果你没有用到此类功能，将该项禁用可提升性能。

#### 炼药与近战选项

* `spawner_multiplier` - 通过刷怪笼生成的生物被击杀时的经验倍率。设置为 0 会使得刷怪笼产生的生物不会获得经验值。

#### 防御选项

* `max` - 防御技能一次可获得的最大经验值。
* `min` - 防御技能一次可获得的最小经验值。小于该值则不会被给予玩家。
* `allow_shield_blocking` - 是否在玩家用盾阻挡伤害时同样给予玩家经验。

#### 炼药选项

* `ignore_custom_potions` - 若为 true，带有自定义效果（非酿造获取）将不会和诸如炼金术士、药力增强及高效喷溅等炼药能力兼容。

## 命令

技能的名称可用于直接打开对应的升级界面，如 `/farming`、`/archery` 等。可将 `config.yml` 下的 `enable_skill_commands` 改为 false 禁用。

技能等级可以通过如下命令修改：

* `/skills skill setlevel <玩家名称> <技能名称> <等级>`
* `/skills skill setall <玩家名称> <技能名称> <等级>`
* `/skills skill reset <玩家名称> [技能名称]`

## 菜单

技能菜单可通过命令 `/skills` 打开。菜单的排版与格式可在 `menus/skills.yml` 调整。

## 消息

显示名称与描述可以在消息文件的 `skills` 部分调整。