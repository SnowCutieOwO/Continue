# 开发者 API

你可以通过 Maven 将 **ExcellentEnchants** 导入你的项目。请将 `{版本号}` 替换为如下显示的最新版本：

![](https://repo.nightexpressdev.com/api/badge/latest/releases/su/nightexpress/excellentenchants/Core?color=40c14a&name=ExcellentEnchants&prefix=v)

``` XML
<repository>
  <id>nightexpress-releases</id>
  <url>https://repo.nightexpressdev.com/releases</url>
</repository>

<dependency>
  <groupId>su.nightexpress.excellentenchants</groupId>
  <artifactId>Core</artifactId>
  <version>{版本号}</version>
</dependency>
```

## 获取数据

### 通过命名空间键获取 ExcellentEnchants 附魔：

``` Java
// 总是使用 EnchantKeys 类获取带有效命名空间的键。
NamespacedKey key = EnchantKeys.custom(EnchantId.TUNNEL);

// 对于 PaperMC
Enchantment enchantment = RegistryAccess.registryAccess().getRegistry(RegistryKey.ENCHANTMENT).get(key);

// 对于 SpigotMC
Enchantment enchantment = Registry.ENCHANTMENT.get(key);

// 通过 nightcore API
Enchantment enchantment = RegistryType.ENCHANTMENT.getRegistry().get(key);

// 通过 ExcellentEnchants API
CustomEnchantment custom = EnchantRegistry.getByKey(key);
Enchantment enchantment = custom.getBukkitEnchantment();
```

### 通过 ID 获取 ExcellentEnchants 附魔：

``` Java
CustomEnchantment custom = EnchantRegistry.getById(EnchantId.TUNNEL);
Enchantment enchantment = custom.getBukkitEnchantment();
```

### 检查 ExcellentEnchants 附魔是否存在：

``` Java
boolean exists = EnchantRegistry.isRegistered(EnchantId.TUNNEL);
```

### 获取所有 ExcellentEnchants 附魔：

``` Java
Set<CustomEnchantment> customs = EnchantRegistry.getRegistered();
```