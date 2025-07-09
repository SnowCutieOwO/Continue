# 迁移

如何从 AureliumSkills Beta 1.3.0 迁移至 AuraSkills 2.0

2.0 更新之后，插件从 AureliumSkills 更名为 AuraSkills。这表示插件配置文件夹从 `/AureliumSkills` 变为了 `/AuraSkills`。

::: info

还不清楚 2.0 版本更新了什么？快去读读[更新记录](release-notes.2-0.md)吧。

:::

虽然推荐直接使用改进后的新默认配置，你仍然可以将旧配置迁移至新文件夹。但是，有些东西不可以直接迁移，因此你仍然需要基于对配置的修改程度手动操作。

若你需要迁移，在使用新版本 AuraSkills 时保留旧的 `/AureliumSkills` 文件夹，在 `/AuraSkills` 文件内容生成后，就可以将旧设置迁移。

::: warning

请在迁移前备份 `/AureliumSkills` 以及数据库（若使用 MySQL 存储数据的话）。

:::

## 是否迁移？

如果你的服务器打算开新周目，则无需迁移。新默认配置更加平衡，推荐使用。仅在你需要保留能力/属性/经验来源值时建议迁移。消息与菜单不会迁移（见下），所以如果你只修改了这些内容，你需要在新配置再次手动修改。

## 失去的内容

* 与旧 AureliumSkills 的兼容性会因插件改名而不再生效。另外 API 中也有许多改动，因此对应插件也需重构代码。请检查与 AureliumSkills 插件联动的插件是否在新版本兼容了 AuraSkills。
* 因插件改名，先前的设置的权限将不会生效。

## 不会迁移的内容

* 消息文件（大幅度格式改动）
* 菜单文件（大幅度格式改动）
* 诸如 `%aureliumskills_...%` 等的 PlaceholderAPI 变量仍然会生效，但建议将其改为新格式 `%auraskills_...%`。
* 在旧的 `source_config.yml` 下添加的自定义经验来源设置。
* 通过 `/sk item register` 注册的物品条目会被重置。鉴于修饰符的 NBT 格式发生了改动，你需要手动重新注册你的物品才可以让其在奖励/战利品中生效。

## 自动迁移的内容

* `config.yml` 的大部分选项（技能相关的会移动至 `skills.yml`，属性相关的会移动至 `stats.yml`）
* 奖励与战利品表（格式大部分不变）
* 玩家数据（现在以 YAML 格式存储在 `userdata` 中，若使用 MySQL 则会创建新表）
* `sources_config.yml` 下的经验值（移动至 `sources` 文件夹下）
* `xp_requirements.yml`（格式不变）
* `abilities_config.yml`（分别移动至 `abilities.yml` 与 `mana_abilities.yml` 中）
* 手持的物品/装备修饰符

## 技能合并

在默认配置中，技能的数量从 15 调整为 11.但是，如果你是从 Beta 版本迁移配置而来，你仍然会拥有 15 个技能及对应能力。若你想要迁移玩家数据并像新默认配置那样合并技能，你需要手动完成如下操作：

* 删除 `skills.yml`、`abilities.yml`、menus 文件夹、rewards 文件夹及 sources 文件夹，使其重新生成。若你在 Beta 版本中修改了 rewards、`abilities_config.yml` 或 `source_config.yml` 之一，你就需要手动将改动加回去。
* 在控制台输入如下所有命令，使得技能合并，且玩家等级在两个待合并技能中取最大值。请确保执行命令时没有玩家在线。
  * `skills storage mergeskills auraskills/endurance auraskills/agility`
  * `skills storage mergeskills auraskills/healing auraskills/alchemy`
  * `skills storage mergeskills auraskills/forging auraskills/enchanting`