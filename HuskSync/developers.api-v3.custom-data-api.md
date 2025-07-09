# 自定义数据 API 

HuskSync 允许你以现有的通用 DataSnapshot 格式保存并同步数据。本章节假设你已阅读过 [API](developers.api-v3.md) 介绍并已熟悉了[数据快照 API](developers.api-v3.data-snapshot-api.md)。本页着重讨论对于 Bukkit 上的 API 实现。

若要这么做，你必须创建并注册一个平台的 `Data` 实现类（如 `BukkitData`）以及一个对应的 `Serializer` 类（如 `BukkitSerializer`）。你之后就可以通过 `OnlineUser#setData(Identifier, Data)` 方法向服务器添加自定义类型数据。

::: info 提示
在你开始之前，请再三确认这是否是你想要做的事情。对于更简单/小的数据同步任务，请考虑使用 OersistentDataContainer API 格式，它会比本章节所讲的内容依赖性更弱。
:::

若你需要找一些使用了 HuskSync 的数据扩展且提供了 Pixelmon 数据序列化方法的 Arclight 插件，快去看看 [GsTio86 编写的 PokeSync](https://github.com/GsTio86/PokeSync)吧！

## 目录

1. [继承 BukkitData 类](#1-继承-bukkitdata-类)
    1. [Adaptable 实现](#11-继承-adaptable)
2. [继承 BukkitSerializer 类](#1-继承-bukkitdata-类)
3. [鉴别并注册我们的 Serializer](#3-鉴别并注册我们的-serializer)
4. [向玩家设置/获取数据](#从向玩家获取或设置数据)
    1. [在 DataSaveEvent 事件的持久化自定义数据](#41-datasaveevent-的持久化自定义数据)

## 1. 继承 BukkitData 类

* HuskSync 提供了一个你必须实现的 `Data` 实例，以此来承载你的自定义数据。
* 在 Bukkit 服务端上，你必须创建一个带有 `extends BukkitData` 的类。这个类有方法实现：`#apply(BukkitUser, BukkitHuskSync)`，在数据需要应用至玩家时会被调用。
* 你可以使用 `BukkitUser` 类来获取玩家的 `Player` 对象。请避免使用 `BukkitHuskSync`，因为这是与插件内核交互用的。

```Java
// An example of a BukkitData class that you could use in a cosmetic plugin to store player particle data.
public class LoginParticleData extends BukkitData {
    
    private String particleId;
    private int numberOfParticles;

    public LoginParticleData(String particleId, int numberOfParticles) {
        this.particleId = particleId;
        this.numberOfParticles = numberOfParticles;
    }

    // This method is called whenever a user has their data applied.
    // If you just want to use HuskSync to sync data used elsewhere, you don't have to do anything here, of course
    @Override
    public void apply(BukkitUser user, BukkitHuskSync plugin) {
        final Player player = user.getPlayer();

        // Let's use the Bukkit API to spawn some particles when a user's data is applied (e.g. when they login).
        player.spawnParticle(Particle.valueOf(particleId), player.getLocation(), numberOfParticles);
    }

}
```

### 1.1 继承 Adaptable

* HuskSync 提供了 `Adaptable` 标记实例来让你的数据能更好地通过 Gson 序列化和反序列化（下一步需要用到）。
* 我非常推荐实现 `Adaptable` 接口。它无需 arg 构建。需要注意的是你*不能*用 `Adaptable` 序列化持久化数据类型或 `final` 部分的内容。

#### 代码示例——Adaptable LoginParticleData 类

```Java
// We've implemented Adaptable here to make it easier to serialize and deserialize our data using Gson.
public class LoginParticleData extends BukkitData implements Adaptable {

    private String particleId;
    private int numberOfParticles;

    public LoginParticleData(String particleId, int numberOfParticles) {
        this.particleId = particleId;
        this.numberOfParticles = numberOfParticles;
    }

    @SuppressWarnings("unused") // Suppress compiler warnings
    private LoginParticleData() {
        // This is required for the Adaptable interface so that Gson can intantiate the class when deserializing.
    }

    @Override
    public void apply(BukkitUser user, BukkitHuskSync plugin) {
        user.getPlayer().spawnParticle(Particle.valueOf(particleId), player.getLocation(), numberOfParticles);
    }

}
```

## 继承 BukkitSerializer 类

* 若要存储你的 `Data`，你需要提供一个 `Serializer` 类用于在 `Data` 和 java 的 `String` 间序列和反序列化，同时可被转化为字节数组并为 HuskSync 压缩/存储。
    * 例如，你可能需要一个诸如 `public class LoginParticleSerializer extends BukkitSerializer implements Serializer<LoginParticleData>` 的类来序列化前一个示例中的内容。
    * 那么你就需要实现 `Serializer` 接口，它有两种方法：`#serialize(T)` 和 `#deserialize(String)`。
* 若你通过上述方法实现了 `Adaptable` 接口，那么 HuskSync 也提供了 `BukkitSerializer.Json<T extends Adaptable>` 类，便于你继承以创建一个使用 Gson 的简单序列化工具。
    * 这是创建序列化方法的推荐方式，即便如此，若你在着手 NBT 数据相关的内容，你可能需要实现一个带有你自己方法的基础序列化方法接口。

```Java
// An example of a BukkitSerializer class that you could use in a cosmetic plugin to store player particle data.
public class LoginParticleSerializer extends BukkitSerializer.Json<LoginParticleData> implements Serializer<LoginParticleData> {
    
    // We need to create a constructor that takes our instance of the API
    public LoginParticleSerializer(@NotNull HuskSyncAPI api) {
        super(api, LoginParticleData.class); // We pass the class type here so that Gson knows what class we're serializing
    }

}
```

## 3. 鉴别并注册我们的 Serializer

* 现在我们已经有了自己的 `Data` 和 `Serializer` 类，我们需要将它注册进 HuskSync。
* 若要这么做，我们需要将一个 `Identifier` 注册进 HuskSync。此为你的物品的独特标识符。
    * 使用 `Identifer#from(String, String)` 或 `Identifier#from(Key)` 来从键值对或 adventure `key` 对象中创建一个标识。
* 确保你注册了序列化方法的插件在每个服务器上安装，这样 HuskSync 才能同步数据。

```Java
// Create an identifier for our data (you may wish to store this somewhere where it can be accessed statically)
public static Identifier LOGIN_PARTICLES_ID = Identifier.from("myplugin", "login_particles");

// (...)

// Register our serializer
huskSyncAPI.registerSerializer(LOGIN_PARTICLES_ID, new LoginParticleSerializer(HuskSyncAPI.getInstance()));
```

## 从/向玩家获取或设置数据

* 现在我们已经注册了我们的 `Data` 和 `Serializer` 类，可以向玩家设置数据并应用。
* 若要这么做，我们会使用 `OnlineUser#setData(Identifier, Data)` 方法。
    * 这个方法会将数据应用至玩家，并将数据存储至玩家插件自定义数据表，来允许数据之后的获取或保存至快照。
* 在注册数据类型的服务器上创建的快照现在会带着我们的数据并在服务器之间同步！

```Java
// Create an instance of our data
LoginParticleData loginParticleData = new LoginParticleData("FIREWORKS_SPARK", 10);

// Set the data to a player
huskSyncAPI.getUser(player).setData(LOGIN_PARTICLES_ID, loginParticleData);

// Get our data from a player
LoginParticleData loginParticleData = (LoginParticleData) huskSyncAPI.getUser(player).getData(LOGIN_PARTICLES_ID);
```

### 4.1 DataSaveEvent 的持久化自定义数据

向 `DataSaveEvent` 添加监听器并使用 `#editData` Consumer 方法来向标准的 DataSave 中添加自定义数据。这会在数据保存时将应用至玩家的数据持久化（在玩家登出、服务器关闭、世界保存时触发）

```Java
@EventHandler
public void onDataSave(BukkitDataSaveEvent event) {
    event.editData((unpacked) -> unpacked.setData(LOGIN_PARTICLES_ID, new LoginParticleData("FIREWORKS_SPARK", 10)));
}
```