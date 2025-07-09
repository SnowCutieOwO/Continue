# API

AuraSkills API 教程

AuraSkills API 允许开发者与插件交互，与现有插件联动或注册新的内容（自定义技能、属性或能力）

API 包含了 `api` 与 `api-bukkit` 子模块。这允许 API 在版本间保持问题并防止开发者使用不稳定的内部方法。

可以在[这里](https://docs.aurelium.dev/auraskills-api-bukkit/)浏览 Javadoc。

## 开始

发行版会发布至 Maven 中央仓库。

### Maven

``` XML title="pom.xml"
<dependency>
    <groupId>dev.aurelium</groupId>
    <artifactId>auraskills-api-bukkit</artifactId>
    <version>2.2.4</version>
    <scope>provided</scope>
</dependency>
```

### Gradle

Groovy DSL：

``` Kotlin title="build.gradle"
repositories {
     mavenCentral()
}

dependencies {
     compileOnly 'dev.aurelium:auraskills-api-bukkit:2.2.4'
}
```

Kotlin DSL：

``` Kotlin title="build.gradle.kts"
repositories {
     mavenCentral()
}

dependencies {
     compileOnly("dev.aurelium:auraskills-api-bukkit:2.2.4")
}
```

## 获取 API 实例

大多数 API 类都可以通过如下方法获取 AuraSkillsApi 访问。

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get();
```

在部分 API 需要 Bukkit 类的情况，如 ItemManager 与 Regions API，你需要获取 AuraSkillsBukkit 的实例：

``` Java
AuraSkillsBukkit auraSkillsBukkit = AuraSkillsBukkit.get();
```

::: warning

下文示例中所有用到 `auraSkills` 变量名均指 `AuraSkillsApi` 实例。

:::

## 与玩家交互

玩家技能信息可通过 `SkillsUsers` 实例以如下方法从 API 实例中获取。

``` Java
SkillsUser user = auraSkills.getUser(player.getUniqueId());
```

方法收到一个 UUID 时，只有在线玩家会收到技能数据。离线玩家仍会返回 `SkillsUser` 对象，但会将所有值改为默认，修改后的值不会生效。

### 技能

你可以通过玩家方法与 `Skills` 枚举对象获取与设置玩家的默认技能等级。如：

``` Java
// 获取玩家的耕作技能等级. 使用 Skills 枚举对象获取所有技能.
int level = user.getSkillLevel(Skills.FARMING);

// 将战斗技能等级设置为 10.
user.setSkillLevel(Skills.FIGHTING, 10); 
```

获取与添加技能经验值大体相似：

``` Java
double xp = user.getSkillXp(Skills.FARMING);

user.addSkillXp(Skills.FARMING, 20.0);

user.addSkillXpRaw(Skills.FARMING, 15.0); // 无视任意经验修饰符

// 将经验值设置为 0, 仅对当前技能等级的升级进度有效
user.setSkillXp(Skills.FARMING, 0.0);
```

### 属性

通过此方法与 `Stats` 枚举对象获取玩家的属性等级非常简单。

``` Java
// 获取玩家的力量属性等级. 通过 Stats 枚举对象获取所有默认属性.
double level = user.getStatLevel(Stats.STRENGTH);

// 获取来源于永久技能奖励的属性等级 (无视修饰符).
double baseLevel = user.getBaseStatLevel(Stats.HEALTH);
```

添加属性等级更加复杂，因为属性等级不直接储存。但是，每条属性修饰符都与一条独立名称关联，这样的系统使得属性提升便于在之后记录与移除。

``` Java
// 添加 10 点智慧属性修饰符. 参数 String 不可重复, 用以标记修饰符的用途.
user.addStatModifier(new StatModifier("my_modifier_name", Stats.WISDOM, 10.0));

// 通过名称即可移除修饰符.
user.removeStatModifier("my_modifier_name");
```

### 魔力值

获取与修改魔力值非常简单：

``` Java
double mana = user.getMana();

// 在移除前检查玩家是否有足够的魔力值
if (mana >= 10.0) {
    user.setMana(mana - 10.0);
} else {
    // 在魔力值不足以扣除的情况下的操作
}

// 获取玩家的最大魔力值 (受智慧属性影响)
double maxMana = user.getMaxMana();
```

另一种消耗魔力的途径，如激活魔法能力或释放技能，即为 `consumeMana` 方法。这会在玩家有足够魔力且成功消耗后返回 true，否则返回 false。在操作失败时它会向玩家发送“魔力不足”的提示。

``` Java
if (user.consumeMana(15.0)) {
    // 你需要在这里自行填入触发成功的消息提示
    // 在这里写入你需要实现的技能代码
}
```

## 事件

API 有许多与插件交互的事件。它们注册的过程与普通的 Bukkit 事件无异。

### 列表

如下为可用事件。这可能不会随时保持更新，因此建议在源码中查看所有可用事件的列表。

* `LootDropEvent` - 在插件掉落/修改战利品时触发。包括修饰符能力与渔技/采集战利品表。通过 `getCause()` 方法可获取触发原因。
* `SkillsLoadEvent` - 在插件完成技能载入（通常为启动后首刻内）时触发。若要访问技能、属性等相关数据，请监听该事件而非在 `onEnable` 下写入代码，因为此时技能尚未载入。
* `ManaAbilityActivateEvent` - 在玩家激活魔法能力时触发。
* `ManaAbilityRefreshEvent` - 在玩家指定的魔法能力冷却完毕（值为 0）时触发。
* `ManaRegenertaeEvent` - 在玩家自然恢复魔力值时触发。
* `SkillLevelUpEvent` - 在玩家升级技能时触发。
* `XpGainEvent` - 在玩家获取技能经验时触发。
* `CustomRegenEvent` - 在玩家通过自定义恢复机制再生生命时触发。

## 全局注册

全局注册用于通过命名空间 ID 获取任意技能、属性或能力等实例。你可以通过支持自定义内容的名称判断内容。通过 `AuraSkillsApi#getGlobalRegistry` 获取注册条目。此实例为只读属性，若要自行注册新内容，请见“[自定义内容](#自定义内容)”章节。

``` Java
GlobalRegistry registry = auraSkills.getGlobalRegistry();

Skill skill = registry.getSkill(NamespacedId.of("pluginname", "skillname");
// 若要获取默认技能, 用 Skills 枚举对象会更简单些
```

## 自定义内容

为了注册自定义内容，首先你需要获取表明插件与配置读取目录的 NamespacedRegistry（包括 skills.yml、奖励、经验来源等）

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get(); // 获取 API 实例

// 通过插件名称与文件夹获取 NamespacedRegistry
NamespacedRegistry registry = auraSkills.useRegistry("pluginname", getDataFolder());
```

`useRegistry` 的首个参数为你注册自定义内容的插件名称（强制小写）。这会用在配置的命名空间及 skills.yml、abilities.yml 等文件中。

### 内容目录

`useRegistry` 的第二个参数为代表内容目录的 Java 文件对象。诸如经验来源与奖励的内容无法单独通过代码注册，需要配合内容目录内自动检测并载入的配置文件完成。建议选择插件的数据文件夹，即 `Plugin#getDataFolder()` 获取的对应位置。

内容文件的格式与 AuraSkills 插件本体相同，其中的内容会在插件载入技能、属性与能力时合并至插件的主配置。例如，你可以在你的 skills.yml 中引用 `auraskills/` 命名空间的能力，也可以引用 `nidechajian/` 命名空间的能力。

### 属性

若要注册自定义属性，请使用 `CustomStat.builder` 静态方法来获取 `CustomStatBuilder` 的实例。你必须通过 `NamespacedId.of` 传递一个 `NamespacedId` 来表示属性名称。之后再通过 `NamespacedRegistry` 注册属性。

单独的属性并不会代表游戏内任何属性或机制。每个属性都必须对应至少一个有效的特征。通过 `CustomTrait.builder` 获取 `CustomTraitBuilder` 来创建特征。这个 `CustomTrait` 之后会传递至 `CustomStatBuilder#trait` 并与属性链接。如果你只想要分割属性，你也可以将其传入 `Traits` 枚举对象的默认特征。

如下示例会创建一个新的灵巧（Dexterity）属性，效果为概率闪避一次伤害。我们在示例代码中创建新类并将其分配至特征，将属性分配至静态常量以便访问。

``` Java
public class CustomTraits {
    
    public static final CustomTrait DODGE_CHANCE = CustomTrait
            .builder(NamespacedId.of("pluginname", "dodge_chance")
            .displayName("闪避几率")
            .build();
        
}

public class CustomStats {

    public static final CustomStat DEXTERITY = CustomStat
            .builder(NamespacedId.of("pluginname", "dexterity")
            .trait(CustomTraits.DODGE_CHANCE, 0.5) // 闪避率每等级灵巧增加 0.5
            .displayName("灵巧")
            .description("增加闪避几率.")
            .color("<green>")
            .symbol("")
            .item(ItemContext.builder()
                    .material("lime_stained_glass_pane")
                    .group("lower") // 在 AuraSkills/menus/stats.yml 中设置的组
                    .order(2) // 组内位置
                    .build())
            .build();

}
```

之后你必须在插件 onEnabled 方法下注册该 CustomTrait 与 CustomStat。

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get();

NamespacedRegistry registry = auraSkills.useRegistry("pluginnanme", getDataFolder());

registry.registerTrait(CustomTraits.DODGE_CHANCE);
registry.registerStat(CustomStats.DEXTERITY);
```

::: warning

将“pluginname”替换为你的插件小写名称。传递至 `NamespacedId.of` 的名称必须与传递至 `AuraSkillsApi#useRegistry` 的名称相同。

:::

#### 特征处理

如上代码只是让其存在并显示属性元素，而没有任何效果。如果你的属性只使用现有特征，那这就足够了。如果你需要创建一个向上面那样的新特征，你必须通过额外代码来实现特征所需功能。

若要实现特征功能，只需创建一个集成了 `BukkitTraitHandler` 的新类即可：

``` Java
public class DodgeChanceTrait implements BukkitTraitHandler, Listener {

    private final AuraSkillsApi auraSkills;
    
    // 在构建器内注入 API 依赖
    public DodgeChanceTrait(AuraSkillsApi auraSkills) {
        this.auraSkills = auraSkills;
    }

    @Override
    public Trait[] getTraits() {
        // 包含 CustomTrait 示例的数组
        return new Trait[] {CustomTraits.DODGE_CHANCE};
    }
    
    @Override
    public double getBaseLevel(Player player, Trait trait) {
        // 0 级时特征的初始等级, 可为 Minecraft 的默认值或其他插件的值
        return 0;
    }
    
    @Override
    public void onReload(Player player, SkillsUser user, Trait trait) {
        // 在特征的上级属性改变时调用
    }
    
    // 插件功能的示例实现 (不完整)
    @EventHandler(ignoreCancelled = true)
    public void onAttack(EntityDamageByEntityEvent event) {
        if (!(event.getEntity() instanceOf Player)) return;
        
        Player player = event.getEntity();
        SkillsUser user = auraSkills.getUser(player.getUniqueId());
        
        // 获取玩家特征等级
        double dodgeChance = user.getEffectiveTraitLevel(Traits.DODGE_CHANCE);
        
        if (ThreadLocalRandom.current().nextDouble() < dodgeChance) {
            // 激活闪避
            event.setCancelled(true);
            player.sendMessage("闪避了此次攻击");
        }
    }

}
```

最后，你可以在 onEnable 下注册你的 `BukkitTraitHandler`：

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get();

auraSkills.getHandlers().registerTraitHandler(new DodgeChanceTrait(auraSkills));
```

::: info

如果类实现了监听器，则调用 registerTraitHandler 会自动注册任意 Bukkit 事件。

:::

#### 配置

若你想要特征与属性能被配置，请在你的[内容目录](#内容目录)中创建一个链接至 `NamespacedRegistry` 的 `stats.yml` 文件，用于注册你的特征/属性。

如下为上述示例中灵巧/闪避率的 `stats.yml` 示例设置：

``` YAML
stats:
  pluginnamne/dexterity:
    enabled: true
    traits:
      pluginname/dodge_chance:
        modifier: 0.5 # 会覆盖 CustomStatBuilder#trait 中传递的值
traits:
  pluginname/dodge_chance:
    enabled: true
    # 在这里添加配置选项，可通过 Trait#option... 方法获取
```

::: warning

你需要通过 `Plugin#saveResource` 在插件文件夹中生成 `abilities.yml` 配置。

:::

### 技能

若要创建一个自定义技能，先通过 `CustomSkill.builder` 获取构建器示例，并通过 `NamespacedId.of` 传入 `NamespacedId`。之后再通过 `NamspacedRegistry` 注册技能。

如下为创建一个与村民交易时产生经验的“交易”技能示例。我们创建一个带有静态常量的 `CustomSkills` 新类，使得实例更易于访问。

``` Java
public class CustomSkills {

    public static final CustomSkill TRADING = CustomSkill
            .builder(NamespacedId.of("pluginname", "trading"))
            .displayName("交易")
            .description("与村民交易可获得经验值")
            .item(ItemContext.builder()
                    .material("emerald")
                    .pos("4,4")
                    .build())
            .build();
    
}
```

之后，通过插件内的 onEnable 方法注册技能：

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get();

NamespacedRegistry registry = auraSkills.useRegistry("pluginnanme", getDataFolder());

registry.registerSkill(CustomSkills.TRADING);
```

#### 添加经验来源

若要添加自定义技能的经验来源，你需要创建一个配置文件，格式与 AuraSkills 使用的经验来源配置相同。在我们的示例中，即 `sources/trading.yml`。

如果你的自定义技能的经验来源在默认技能中可用（如破坏方块、击杀实体、追踪统计数据等），那么你只需在文件中将这些已有种类填入即可。见[经验来源](sources.md)部分了解如何添加现存种类。

在本示例中，没有负责处理村民交易的经验来源，所以我们需要通过 API 自行编写代码。

首先，创建一个继承了 `CustomSource` 的类，用于存储来源的可配置数据。在本示例中出于简洁的目的，我们只会传递“交易绿宝石数量”参数，因此我们只需要为其添加一个可配置的倍率。保留构建器内的 `SourceValues` 参数，在其末尾添加你的自定义参数。

``` Java
public class TradingSource extends CustomSource {

    private final double multiplier;
    
    public TradingSource(SourceValues values, double multiplier) {
        super(values);
        this.multiplier = multiplier;
    }
    
    public double getMultiplier() {
        return multiplier;
    }

}
```

之后，你需要注册你的来源类型，并创建用于反序列化配置中经验来源的判断器。通过 `NamespacedRegistry#registerSourceType` 注册名称并判断经验来源。

首个参数，名称，是你在构建器中使用的经验来源命名空间 ID，与配置中 `type` 键的值。如果你传入 `trading` 作为名称，则你需要在经验来源配置中使用 `type: pluginname/trading`。

第二个参数接受 `XpSourceParser` 示例，类型字段为你的 `CustomSource` 类。你可以创建一个新类，或参考如下示例创建一个匿名类：

``` Java
SourceType trading = registry.registerSourceType("trading", (XpSourceParser<TradingSource>) (source, context) -> {
    double multiplier = source.node("multiplier").getDouble(1.0);
    return new TradingSource(context.parseValues(source), multiplier);
}
```

匿名函数中的 `source` 参数为来自 [Configurate](https://github.com/SpongePowered/Configurate/wiki/Node) 的 `ConfigurationNode`，包含了载入经验来源配置中的键值对。`context` 参数为 `SourceContext`，包含了确保获取一或多个有效值的判断方法。你也需要使用 `context.parseValues(source)` 获取 `SourceValues` 对象来传递经验来源类型构建器的首个参数。这会为你判断经验来源的名称、经验值与显示名称等内容，你只需要实现自定义选项的判断即可。

若要使你的来源能够给予经验，你需要集成一个监听对应 Bukkit 事件的升级器，或者集成其他获取经验的机制。你可以创建一个 `LevelerContext` 类的实例来帮助你制作升级器。它包含诸如检查位置及玩家等实用方法。若要创建实例，还需要传递一个 API 示例及注册时返回的 `SourceType`。

在注册经验来源类型后，你仍然需要为你的技能创建一个来源配置，用于自动定义经验来源。在本示例中，我们需要创建一个 `sources/trading.yml` 文件：

``` YAML
sources:
  trade:
    type: pluginname/trading
    multiplier: 5
```

#### 配置

如上示例为基础数值、解锁与升级等内容进行了硬编码。若你想要这些值能被配置，则请在你的内容目录中创建一个 `abilities.yml` 文件。格式与 AuraSkills 使用的相同：

``` YAML
abilities:
  pluginname/magic_archer:
    enabled: true
    base_value: 15
    value_per_level: 10
    unlock: 6
    level_up: 5
    max_level: 0
```

::: warning

你需要通过 `Plugin#saveResource` 在插件文件夹中生成 `abilities.yml` 配置。

:::

### 魔法能力

创建魔法能力与普通能力大致相似。通过构建器创建一个 `CustomManaAbility` 实例。本示例创建了一个名为“凌波微步”的技能，在玩家右键点击羽毛时向前发射（模拟冲刺效果）。我们创建一个带有静态常量的 新类，使得实例更易于访问。

``` Java
public class CustomManaAbilities {

    public static final CustomManaAbility LEAP = CustomManaAbility
            .builder(NamespacedId.of("pluginname", "leap"))
            .displayName("凌波微步")
            .description("立即向前冲刺 [右键点击羽毛触发技能]")
            .build();

}
```

若要为你的能力设置诸如 base_value、value_per_level、base_cooldown、base_maca_cost 等值，你既可以在方法构建器内设置，也可以在内容目录中创建一个 `mana_abilities.yml` 文件，格式与 AuraSkills 所用的相同，但魔法能力的名称替换为你的命名空间及自定义名称。无论使用哪种方法，你都应当将必要的值设置齐全，否则它们会使用任意的默认值。

确保你在插件的 onEnable 方法下注册了你的 `CustomManaAbility`。

``` Java
AuraSkillsApi auraSkills = AuraSkillsApi.get();

NamespacedRegistry registry = auraSkills.useRegistry("pluginnanme", getDataFolder());

registry.registerManaAbility(CustomManaAbilities.LEAP);
```

之后你必须通过 Bukkit 事件与其他 API 调用获取魔法能力的值，以实现所需的功能。例如，为了获取玩家的值，通过 `SkillsUser#getManaAbilityLevel` 获取魔法能力的值并将其传入 `ManaAbility#getValue`，如下所示：

``` Java
SkillsUser user = auraSkills.getUser(player.getUniqueId());
ManaAbility manaAbility = CustomManaAbilities.LEAP;
int level = user.getManaAbilityLevel(manaAbility);

double value = manaAbility.getValue(level);
double cooldown = manaAbility.getCooldown(level);
double manaCost = manaAbility.getManaCost(level);
```