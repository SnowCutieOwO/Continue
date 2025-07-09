# 区域开发相关

区域数据可以通过区域数据 API 而能在其他插件中获取。在“作为依赖”章节中有以 WorldGuard 为示例的代码。

::: info 区域和线程安全
区域 API 在线程方面是完全安全的。但是，一些从区域 API 各部分返回的集合（列表、数组、映射表）大体上来说不应被修改。当这其中的返回内容变得不可修改时，那么表示这里仍存在着旧代码。
:::

## 选区

区域数据可以通过 RegionContainer 获取。每个区域都是一个 RegionContainer 的实例。如果你需要检查建筑权限、标志，或是寻找重叠区域，或者搜寻包含指定位置的区域，你就必须进行一次区域查询操作。只要它返回了空间搜索的结果，你就可以进行标志计算或建筑权限检查。

* [区域管理模块](worldguard-api.working-with-regions.managers.md)
* [区域对象](worldguard-api.working-with-regions.regions.md)
* [自定义标志与选区处理模块](worldguard-api.working-with-regions.custom-flags-and-session-handlers.md)
* [区域查询](worldguard-api.working-with-regions.querying-protection.md)
* [区域事件](worldguard-api.working-with-regions.region-events.md)