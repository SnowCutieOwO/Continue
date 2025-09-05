# 注册条目

注册条目是 Terra 中一个重要的概念。这使得 Terra、平台，以及其他附属能够检测你的附属对象是否存在，并鉴别它们。

## 什么是注册条目

注册条目可以看作存有*注册项*与*条目*的映射表（维基百科称[关联数组](https://zh.wikipedia.org/wiki/%E5%85%B3%E8%81%94%E6%95%B0%E7%BB%84)）。注册条目注册指定类型的对象，并将它们分组归纳。注册项*单独鉴别*它们的条目，每个键只能对应一个条目。

## 注册条目用在什么地方？

在 Terra 中，注册条目用于附属于配置包之间的物品引用。它们为附属与配置提供了一种创建与分享数据的方法，而无需额外编写兼容代码。

## 使用注册条目

大部分与 Terra API 的交互在某些时候也需要用到注册条目。

### 注册键

注册条目通过 [RegistryKey](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/key/RegistryKey.html) 鉴别它们的值。注册键包含*命名空间*与*名称*。

注册键可以通过 `RegistryKey#parse` 方法创建，解析 `命名空间:ID` 格式的注册键。它们也可以通过 `RegistryKey#of` 方法，带着命名空间与其 ID 创建。

#### 命名空间

命名空间为对应注册值的提供者，通常是你的附属或配置包。带有命名空间的对象还实现了 [Namespaced](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/key/Namespaced.html) 接口。这个对象可以在命名空间中通过 `key(String identifier)` 方法创建注册键。

#### ID/名称

ID 为值本身的名称。可能出现多个物品共用一个 ID 的情况，但它们可以通过各自的命名空间区分。能提供 ID 的物品同时实现了 [StringIdentifiable](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/key/StringIdentifiable.html)。

#### Keyed

[Keyed](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/key/Keyed.html) 接口由提供了自己的注册键的对象实现。

## 获取注册条目

注册条目可通过实现了 [RegistryHolder](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/meta/RegistryHolder.html) 的对象返回。一般情况下，这会是一个 [ConfigPack](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/config/ConfigPack.html) 对象。`RegistryHolder` 定义了几个获取注册条目的方法。大部分情况下，你用到的是接受 [Class](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html) 或 [TypeKey](https://terra.polydev.org/api/concepts/type-key.html) 的方法。这里也有一个不额外检查的方法，接受原始的 `Type` 类型，但不建议使用它。

先试试从配置包实例中获取 Sturcture 注册条目！

``` Java
pack.getRegistry(Structure.class); // 返回持有 Structure 实例的单独注册条目。
```

## 获取可写入条目

上个示例中获取的注册条目是*只读*的，它只适合*获取*信息。但你肯定需要频繁注册自己的对象，因此我们有 [CheckedRegistry](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/CheckedRegistry.html)，它获取的方式与 [Registry](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/CheckedRegistry.html) 从 [RegistryHolder](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/meta/RegistryHolder.html) 处获取类似，因此也可以从 [CheckedRegistryHolder](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/meta/CheckedRegistryHolder.html) 处返回。

来试试看注册点东西吧！

``` Java
pack.getCheckedRegistry(Structure.class).register(myAddon.key("my_structure"), new MyStructure()); // 注册 MyStructure 的新示例，注册键为“my_addon:my_structure”。
```

### 创建注册条目

有时，你可能需要为自己的对象创建一个注册条目。实现了 [RegistryProvider](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/meta/RegistryProvider.html) 的对象可以通过 `#getOrCreateRegistry` 方法创建 [CheckedRegistry](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/registry/CheckedRegistry.html) 实例。