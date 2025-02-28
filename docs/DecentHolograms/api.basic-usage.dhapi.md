# DHAPI
DHAPI 类内的多种方法阐释

`DHAPI` 类在 2.0.12 被添加。它的目的就是成为 DecentHolograms API 的主要用法，提供了创建、编辑与删除悬浮字、悬浮字页或行而无需直接与这些内容交互的方法。

## 创建悬浮字

`DHAPI` 类提供了 `createHologram` 方法来创建悬浮字，且可自由决定悬浮字是否永久存在，或是否带有默认文本。

### 基础的 `createHologram` 方法

最基础的代码看起来会像这样：

```Java
DHAPI.createHologram(String, Location);
```

第一个参数即为悬浮字的名称，第二个参数则为悬浮字所在的位置（需传入一个 `org.bukkit.Location` 对象）

使用这个方法可以创建一个悬浮字，且它的第一行是配置文本中设定的“默认文本”。
除此之外这个悬浮字还是**非持久**的，因此它不会被保存至 YAML 文件，而且会在插件重载/服务器重启之后消失。

### 创建永久悬浮字

若要让悬浮字变成永久状态，我们同样可以使用 `createHologram` 方法，但要在它的末尾加上一个布尔值：

```Java
DHAPI.createHologram(String, Location, boolean);
```

在这里填入 `true` 可以告诉 DecentHolograms，这条悬浮字是永久的，需要存进它在 `holograms` 下的 YAML 文件里。在这之后，这条悬浮字就会在插件启用时自动载入。

::: warning 重要！
调用 `createHologram` 时若指定的悬浮字名称已存在，则会抛出一个错误。
若要避免这种情况，请先在调用方法前检查相同的悬浮字是否已存在。

```Java
public void createHologram(String name, Location location){
   if(DHAPI.getHologram(name) != null)
        return;

    DHAPI.createHologram(name, location);
}
```
:::

### 添加初始文本

`createHologram` 方法也有提供了一种设定初始内容的方法，可以覆盖配置文件中提供的默认文本。
下为方法示例：

```Java
DHAPI.createHologram(String, Location, List<String>);
```

当然，就像[第一个例子](#创建悬浮字)的那样，这不会创建一个持久显示的悬浮字。但是，肯定有方法能让我们这么做：

```Java
DHAPI.createHologram(String, Location, boolean, List<String>);
```
就像[第二个例子](#创建永久悬浮字)那样，在这里填入 `true` 会让悬浮字能持久显示。

## 获取悬浮字

若要通过这个类编辑悬浮字，首先你要获得一个 `Hologram` 实例。这可以通过 `getHologram` 方法实现：

```Java
DHAPI.getHologram(String);
```

如果给定名称对应的悬浮字不存在，这个方法会返回 `null`。

## 获取悬浮字页

DeceneHolograms 允许悬浮字有多页不同的文本。所以肯定有在悬浮字实例上获取 `HologramPage` 实例的方法。

方法本身很容易看懂：

```Java
DHAPI.getHologramPage(Hologram, int);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字的索引。

::: warning 重要提醒
* 方法可能会返回 `null`，因此提供的页码应该不小于 0，且小于页码总数。
* 除非[手动移除](#删除已有页)，否则悬浮字实例总会有一个序号为 0 的 `HologramPage` 实例。 
:::

## 获取悬浮字行

因为一个悬浮字能有多页，因此 `DHAPI` 提供的 `getHologramLine` 方法会需要一个 `HologramPage` 实例。
[上一部分](#获取悬浮字)已经提及了如何获取 `HologramPage` 实例。

在你获取了有效的 `HologramPage` 实例之后，你可以使用 `getHologramLine` 方法：

```Java
DHAPI.getHologramLine(HologramPage, int);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字的索引。    
除此之外，你还可以直接对着返回的 `HologramPage` 实例使用 `getLine` 方法。

需要注意的是，正如上文警告过的那样，这个方法也可能会返回 `null`。
所以这个方法同样需要在使用 `HologramPage` 之前做好非空检查。

## 编辑悬浮字行

这里有多种方法编辑悬浮字，例如添加一行、编辑一行或者移除一行。

### 添加新行

为了将一行文本加入悬浮字，你需要使用 `addHologramLine` 方法。最基本的使用方式看起来会像这样：

```Java
DHAPI.addHologramLine(Hologram, String);
```

这会向悬浮字的第一页添加一行文本。    
如果你的如果你的悬浮字有很多页，并且你想要给除了第一页之外的其他页加上文本，你就可以用到下面这种方法：

```Java
DHAPI.addHologramLine(Hologram, int, String);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字的索引。需要注意的是，序号从 0 开始计数，例如第一页的序号为 0，第二页的序号为 1。

::: tip 提示
你可以将 String 参数替换为 `org.bukkit.Material` 或 `org.bukkit.ItemStack` 示例。
这会按你提供的 Material / ItemStack 创建一个悬浮物品。
如果你传入的参数为后者，则某些 NBT 可能不会被加入。前者不包含任何 NBT 值。
:::

### 覆盖已有行

你可以将某一行悬浮字改为其他内容，甚至将一整页悬浮字的内容都覆盖。

若要覆盖指定行文本，你可以使用下列方法：

```Java
DHAPI.setHologramLine(Hologram, int, String);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字的索引。需要注意的是，序号从 0 开始计数，例如第一页的序号为 0，第二页的序号为 1。    
如果你的如果你的悬浮字有很多页，并且你想要给除了第一页之外的其他页加上文本，你就可以用到下面这种方法：

```Java
DHAPI.setHologramLine(Hologram, int, int, String);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字页的索引（同样以 0 起始）。第二个 `int` 填入的则是悬浮字行的索引。

::: tip 提示
你可以将 String 参数替换为 `org.bukkit.Material` 或 `org.bukkit.ItemStack` 示例。
这会按你提供的 Material / ItemStack 创建一个悬浮物品。
如果你传入的参数为后者，则某些 NBT 可能不会被加入。前者不包含任何 NBT 值。
:::

最后你也可以编辑整页的文本。若要这么做，你可以使用 `setHologramLines` 方法（注意末尾的 `s`）方法：

```Java
DHAPI.setHologramLines(Hologram, List<String>);
```

与之前的例子一样，这个方法会修改第一页悬浮字。你可以使用如下方法来批量修改指定页的悬浮字行：

```Java
DHAPI.setHologramLines(Hologram, int, List<String>)
```

### 插入新行

你可以通过这个方法将悬浮字插入指定行的位置。

最基本的方法看起来像这样：

```Java
DHAPI.insertHologramLine(Hologram, int, String);
```

这会向悬浮字的第一页指定行号（以 0 起始）插入一行新文本。

与上文方法相似，这个方法也提供了一种能让你在其他页插入文本的方法：

```Java
DHAPI.insertHologramLine(Hologram, int, int, String);
```

`int` 处填入的应该为不小于 0 的整数，表示获取悬浮字页的索引（同样以 0 起始）。第二个 `int` 填入的则是悬浮字行的索引。

::: tip 提示
你可以将 String 参数替换为 `org.bukkit.Material` 或 `org.bukkit.ItemStack` 示例。
这会按你提供的 Material / ItemStack 创建一个悬浮物品。
如果你传入的参数为后者，则某些 NBT 可能不会被加入。前者不包含任何 NBT 值。
:::

### 移除已有行

移除一行悬浮字也特别简单：

```Java
DHAPI.removeHologramLine(Hologram, int);
```

这会向悬浮字的第一页指定行号（以 0 起始）删除一行现存文本。

若要移除其他页的悬浮字行，请使用这个方法：

```Java
DHAPI.removeHologramLine(Hologram, int, int);
```

这将会移除指定页（第二页，以 0 起始的序号）指定行号（第三个参数）的悬浮字。

::: tip 提示
与 `List#remove` 方法相似，删除方法会返回一个 `HologramLine` 实例，其中含有你删除的内容，这样你就可以把它用在其他地方。
:::

## 编辑悬浮字页

DecentHolograms 提供了显示多页悬浮字的功能。    
当然也提供了编辑与管理这些内容的方法。

### 添加新页

向悬浮字添加新的一页非常简单，只需调用 `addHologramPage` 方法：

```Java
DHAPI.addHologramPage(Hologram);
```

这会添加一页悬浮字，初始内容则是来自 config.yml 设置中的预留文本。

若要创建包含自定义内容的一页悬浮字，你需要使用这个方法：

```Java
DHAPI.addHologramPage(Hologram, List<String>);
```

### 插入新页

悬浮字页可通过 `insertHologramPage` 方法插入：

```Java
DHAPI.insertHologramPage(Hologram, int);
```

这个方法将会在指定序号（以 0 起始）的悬浮字前加入一个新的 `HologramPage` 实例。被添加的 `HologramPage` 只会拥有 config.yml 设置中的预留文本。

当然也可以像上文那样为新加入的一页设定文本，方法如下：

```Java
DHAPI.insertHologramPage(Hologram, int, List<String>);
```

### 删除已有页

移除一页悬浮字可以通过调用 `removeHologramPage` 实现：

```Java
DHAPI.removeHologramPage(Hologram, int)
```

这个方法会返回一个包含被移除内容的 `HologramPage` 实例，这样你就可以把它用在其他地方。    
提供的页码序号（以 0 起始）应该不小于 0，且小于页码总数，否则会返回 `null`。 