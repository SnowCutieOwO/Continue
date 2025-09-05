# 类型键

Terra API 的许多地方都用到了泛型与 Java 的 [Class](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html) 类，用于确保反射类型处理的类型安全。通常情况下，这个方法颇有成效。

## 问题

如果你需要注册了 `SomeObject<SomeOtherThing>` 实例的注册条目怎么办？因为有[类型擦除](https://www.baeldung.com/java-type-erasure)的存在，这无法直接实现。你不能直接访问不存在于运行时的 `SomeObject<SomeOtherThing>.class`。

一种解决方案是使用 `SomeObject.class`，但它并非最佳选择，理由有二：

* 它会破坏类型安全、`SomeObject` 不再会有泛型类型。
* 它会覆盖某些东西，或者被尝试注册任何 `SomeObject` 泛型类型的东西覆盖。

## 解决方案

Terra 引入了一种叫做 [TypeKey](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/util/reflection/TypeKey.html) 的抽象类解决这个问题。所有接受 `Class` 实例的 API 同样接受 `TypeKey`。

## 获取类型键

为了让你的类型获取 `TypeKey` 实例，只需创建继承了 `TypeKey` 的注释内部类，同时泛型类型与你的相符。在我们的 `SomeObject<SomeOtherThing>` 示例中，代码如下：

``` Java
public static final TypeKey<SomeObject<SomeOtherThing>> SOME_OBJECT_SOME_OTHER_THING_KEY = new TypeKey<>() { };
```

::: info

注意，`TypeKey` 是 `static final` 的。将键声明移动到类顶部可以减少对其的引用，并减少不必要的实例化。

:::

### 从类实例获取类型键

为了进一步降低重复引用，你可以直接从 [Class](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html) 实例通过 [TypeKey#of(Class)](https://ci.codemc.io/job/PolyhedralDev/job/Terra/javadoc/com/dfsek/terra/api/util/reflection/TypeKey.html#of-java.lang.Class-) 获取 TypeKey。如果你需要某个非泛型类型的 TypeKey，这会很有用。

``` Java
TypeKey<Something> = TypeKey.of(Something.class);
```