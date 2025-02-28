# API
如何将 Oraxen 集成至你的插件

## 将 Oraxen 添加至你的插件

### 仓库与依赖信息

你可以在[这里](https://github.com/oraxen/oraxen#api)找到仓库与依赖告知。

::: info 提示
所有方法及其功能的更详细解释可以在对应的类中找到注释。只需将其在 IDE 中打开并阅读即可。
:::

## 示例用法

Oraxen 围绕 `ItemsBuilder` 类构建，允许你快速创建物品，在插件启动后，它会判断配置，并为每种类型的物品创建构建器。每个构建器都可以用于生成物品（item stacks）。

### [OraxenItem](https://github.com/Th0rgal/Oraxen/blob/master/core/src/main/java/io/th0rgal/oraxen/api/OraxenItems.java) 类

#### 从 Oraxen ID 获取 ItemBuilder

```Java
OraxenItems.getItemById(itemID); // where itemID is a section in items configurations
```

#### 检查 Oraxen ID 是否存在

```Java
OraxenItems.isAnItem(itemID);
```

### 从物品（ItemStack）中提取 Oraxen ID

你可以用这个方法检查某个物品是否为 Oraxen 物品（如果不存在对应的 Oraxen ID，则这个方法会返回 null）。

```Java
OraxenItems.getIdByItem(itemstack);
```

### 自定义方块与家具

#### 放置 Oraxen 方块

在指定位置放置 Oraxen 方块：

```Java
OraxenBlocks.place(itemID, location)
```

在指定位置放置 Oraxen 家具，可选择玩家对象用于调整朝向：

```Java
OraxenFurniture.place(itemID, location, @Nullable player)
```

### 向资源包添加内容

#### 获取 assets/ 文件夹

```Java
ResourccePack.getAssetsFolder();
```

### 机制

Oraxen 允许你向插件添加自定义机制，这部分略微有些复杂，因此我们为其准备了一个[单独的章节](developers.create-your-own-mechanic.md)。