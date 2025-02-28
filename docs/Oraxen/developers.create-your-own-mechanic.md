# 创建自定义机制
又称“如何让 Oraxen 变得更加牛逼？”

## 机制系统的运作原理？

### 什么是机制？

机制（Mechanic）是自定义物品的一种属性。它们可以因物品不同而略有差异。例如，耐久机制允许你给不同的物品定义不同的耐久，但不是所有物品都有相同的耐久度。

::: info 提示
耐久机制通过在元数据中存储物品的耐久值，并通过原版耐久条显示实现。
:::

### 所以如果每个物品的机制有差别，我如何每次覆写不同的耐久度？

不行，至少现在不行。但是，Oraxen 提供了一个 `MechanicFactory` 系统。基本上，你只需创建一个可配置的 `Mechanics` 类，然后 `MechanicsFactory` 类就会为不同版本的 `Mechanic` 类自动配置。除此之外它也会管理这些版本的通用代码。

### 好吧，但我想要修改集成了我自创的机制中的数据，可以吗？

当然，为此 Oraxen 还允许你为每个机制关联 `ItemModifier` 列表。一个 `ItemModifier` 即为 `Function<ItemBuilder, ItemBuilder>`，而它则基本上是包含了服务器生成物品时所做改动的一小段代码。例如，对于耐久机制，我使用了一个 `ItemModifier`，存储了来自用户自行配置并存储在物品元数据中的耐久值。

```Java
item -> item.setCustomTag(NAMESPACED_KEY, PersistentDataType.INTEGER, section.getInt("value"))
```

## 创建第一个自定义机制

::: info 提示
在这个教程中我会以耐久机制为例（因其便于理解），但你也可以按照本教程创建其他的自定义机制。
:::

### 第一步：创建我们的机制类

首先创建一个继承 `Mechanic` 的类，如果你使用了 [intelliJ](https://www.jetbrains.com/idea/)，你会得到如下结果：

```Java
class DurabilityMechanic extends Mechanic {

    public DurabilityMechanic(MechanicFactory mechanicFactory, 
                    ConfigurationSection section,
                    Function<ItemBuilder, ItemBuilder>... modifiers) {
        super(mechanicFactory, section, modifiers);
    }

}
```

机制构建器包含三个参数：

* 一个创建了机制的 `Factory` 实例
* 用于配置机制的部分
* 物品修饰符（Item Modifier(s)）

我想要我的每个机制都有不同的耐久度，所以我会试着读取机制配置并存储对应部分的值。

#### 机制配置部分会看起来像这样：

```Java
class DurabilityMechanic extends Mechanic {

    private int itemDurability;

    public DurabilityMechanic(MechanicFactory mechanicFactory, 
                              ConfigurationSection section) {
        /* We give:
        - an instance of the Factory which created the mechanic
        - the section used to configure the mechanic
        - the item modifier(s)
         */
        super(mechanicFactory, section, item ->
                item.setCustomTag(NAMESPACED_KEY,
                        PersistentDataType.INTEGER, section.getInt("value")));
        this.itemDurability = section.getInt("value");
    }

    public int getItemMaxDurability() {
        return itemDurability;
    }
}
```

所以现在我们有了一个 `DurabilityMechanic` 类，它能适用任何物品，且会调用我们的 `DurabilityModifier` 类来告诉 Oraxen 在生成物品前需要哪些改动（在这里我们只是添加了一条数据，用于存储对应的耐久度）。

### 第二步：创建自己的机制工厂类

如之前那样，使用你的 IDE 功能来自动创建一个继承了 `MechanicFactory` 的类。

```Java
class DurabilityMechanicFactory extends MechanicFactory {

    public DurabilityMechanicFactory(ConfigurationSection section) {
        super(section);
    }

    @Override
    public Mechanic parse(ConfigurationSection itemMechanicConfiguration) {
        return null;
    }
}
```

我们重写了判断方法来（通过先前创建的 `DurabilityMechanic` 类）创建一个新机制。我们也想要告诉 Oraxen 这个机制被成功实现，且可通过 `addToImplemented` 方法载入。所以我们的新类大概会像这样：

```Java
public class DurabilityMechanicFactory extends MechanicFactory {

    public DurabilityMechanicFactory(ConfigurationSection section) {
        super(section);
    }

    @Override
    public Mechanic parse(ConfigurationSection itemMechanicConfiguration) {
        Mechanic mechanic = new DurabilityMechanic(this, itemMechanicConfiguration);
        addToImplemented(mechanic);
        return mechanic;
    }

}
```

### 第三步：添加我们的特性（事件）

在这个示例中，我使用的事件只与耐久有关，我会创建一个 `DurabilityMechanicsManager` 类，集成了监听器，来让代码短小精悍。但我不能直接在 `DurabilityMechanicFactory` 的代码中实现这个。

我告诉 Bukkit 在工厂类构建时负责管理事件的类，如下：

```Java
public class DurabilityMechanicFactory extends MechanicFactory {

    public DurabilityMechanicFactory(String mechanicId) {
        super(mechanicId);
        MechanicsManager.registerListeners(OraxenPlugin.get(),
                new DurabilityMechanicsManager(this));
    }

    @Override
    public Mechanic parse(ConfigurationSection itemMechanicConfiguration) {
        Mechanic mechanic = new DurabilityMechanic(this, itemMechanicConfiguration);
        addToImplemented(mechanic);
        return mechanic;
    }

}
```

若要按插件管理的实际耐久值来计算物品上的显示耐久至，我用到了一个简单的计算公式：

$bukkitdamage = {bukkitMaxDurability - {{realDurability * bukkitMaxDurability} \over {realMaxDurability}}}$

接着，这就是我的 `DurabilityMechanicsManager` 类：

```Java
class DurabilityMechanicsManager implements Listener {

    private DurabilityMechanicFactory factory;

    public DurabilityMechanicsManager(DurabilityMechanicFactory factory) {
        this.factory = factory;
    }

    @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
    private void onItemDamaged(PlayerItemDamageEvent event) {
        ItemStack item = event.getItem();
        String itemID = OraxenItems.getIdByItem(item);
        if (factory.isNotImplementedIn(itemID))
            return;

        DurabilityMechanic durabilityMechanic = 
                (DurabilityMechanic) factory.getMechanic(itemID);

        ItemMeta itemMeta = item.getItemMeta();
        PersistentDataContainer persistentDataContainer = 
                itemMeta.getPersistentDataContainer();
        int realDurabilityLeft = persistentDataContainer
                .get(DurabilityMechanic.NAMESPACED_KEY, PersistentDataType.INTEGER) 
                        - event.getDamage();

        if (realDurabilityLeft > 0) {
            double realMaxDurability = 
                    //because int rounded values suck
                    durabilityMechanic.getItemMaxDurability();
            persistentDataContainer.set(DurabilityMechanic.NAMESPACED_KEY,
                    PersistentDataType.INTEGER, realDurabilityLeft);
            ((Damageable) itemMeta).setDamage((int) (item.getType()
                    .getMaxDurability() - realDurabilityLeft 
                    / realMaxDurability * item.getType().getMaxDurability()));
            item.setItemMeta(itemMeta);
        } else {
            item.setAmount(0);
        }

    }

}
```

### 最后一步：注册机制

若要完成机制创建，我们需要注册我们的 `MechanicFactory`，并重载物品来向其应用新机制。推荐在 `EventListener` 中为 `OraxenNativeMechanicsRegisteredEvent` 注册，因为 `/oraxen reload all` 会清除这些内容。

若要实现这个，我们需要将这些内容添加至插件的 `onEnabled` 部分：

```Java
Bukkit.getPluginManager().registerEvents(new Listener() {
    @EventHandler
    public void onMechanicRegister(OraxenNativeMechanicsRegisteredEvent event) {
        MechanicsManager.registerMechanicFactory("durability", DurabilityMechanicFactory::new, true);
        OraxenItems.loadItems();
    }
}, this);
```

## 总结

为了正确创建新的机制，推荐将代码分为三个部分：

* 继承了 [MechanicFactory](https://github.com/Th0rgal/Oraxen/blob/master/src/main/java/io/th0rgal/oraxen/items/mechanics/MechanicFactory.java) 的工厂类
* 继承了 [Mechanic](https://github.com/Th0rgal/Oraxen/blob/master/src/main/java/io/th0rgal/oraxen/items/mechanics/Mechanic.java) 的机制类
* 在 `<机制名称>MechanicsManager` 类中的机制代码（同样可选）

::: info 提示
因为 `ItemModifier`，你能够通过自定义机制修改物品。
```Java
item -> item.setCustomTag(NAMESPACED_KEY,
                        PersistentDataType.INTEGER, section.getInt("value"))
```
你也可以用相似的方式修改纹理包：
```Java
ResourcePack.addModifiers(packFolder -> {/* 修改内容 */});
```
:::

终于，你注册了你的自定义机制！

若要概括教程，[这里是耐久机制的完整源代码](https://github.com/Th0rgal/Oraxen/blob/master/src/main/java/io/th0rgal/oraxen/items/mechanics/provided/durability/DurabilityMechanicFactory.java)。