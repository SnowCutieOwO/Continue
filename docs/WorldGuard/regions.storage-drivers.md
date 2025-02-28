# 存储方法

区域数据可以使用下列方法保存：

|存储方法|优势|
|---|---|
|YAML|<ul><li>无需额外的数据库服务器；</li><li>可通过直接打开的方式手动修改区域数据；</li><li>备份方便；</li><li>较为高效的读写速度。</li></ul>|
|MySQL|<ul><li>可以从其他系统更容易地读取数据；</li><li>只保存修改过的数据，减小性能开销。</li></ul>|

::: tip
尚未支持其他的 SQL 数据库（PostgreSQL、SQL Server、SQLite 等）。
:::

::: warning
对区域存储的 SQL 支持是由第三方开发者提供的，且在重写之前就包含巨大的问题。非常建议不要使用 SQL 存储 WorldGuard 的区域数据。    
**如果你已经在使用 SQL 作为区域数据存储方式的话，你应该使用上文提及的迁移命令将其转移至 YAML 文件中。可能会在未来移除 WorldGuard 中对区域数据的 SQL 存储支持。**
:::

## 切换存储方式

默认模式为 YAML 文件存储。

在配置文件中，可以启用 `regions.sql.use` 设置项来启用 MySQL，这之后就会自动禁用 YAML 存储方法。如果你正在将存储方式切换为 MySQL，那么数据表就会自动创建，但使用之前也请确保 SQL 用户账号拥有必要的权限。

::: warning
非常推荐在切换存储方式之前进行备份。
:::

### 数据迁移

如果你只是简单地切换了存储方法，那么你将不会拥有任何区域数据，因为新产生的数据库里面没有任何数据。所以，你需要使用一个特殊的迁移命令将数据在这两种存储方式之间转移数据，不论存储方法切换之前**或是**之后，你都可以使用这个命令。

若要迁移数据，你需要使用命令 `/rg migratedb from to`，指定来源和目标存储方式。例如，若要将 YAML 中的数据迁移至 MySQL，你需要使用这个命令：
```
/rg migratedb yaml mysql
```

迁移前请确保目标数据库是空的。

## 存储方式

::: warning
在 WorldGuard 之外手动修改数据库数据时切记备份。
:::

### YAML

存储在 YAML 文件中的区域数据会分别放在 WorldGuard 配置中的世界文件夹，每个世界都有一个与其名称相对应的文件夹，其中就存放着“region.yml”文件。这个文件可以在服务器启动时进行就该，并使用 `/rg load` 命令快速载入。

区域数据文件应当与下文的示例相似：
```YAML
regions:
    test:
        min: {x: 1730.0, y: 0.0, z: -169.0}
        max: {x: 1742.0, y: 255.0, z: -158.0}
        members:
            players: [bobby]
            unique-ids: [0ea8eca3-dbf6-47cc-9d1a-c64551ca975c]
        flags: {use: allow, greeting: Welcome!, pvp: allow, pvp-group: MEMBERS}
        owners:
            groups: [admins]
        type: cuboid
        priority: 4
    __global__:
        members: {}
        flags: {}
        owners: {}
        type: global
        priority: 0
```
        
UUID 按正常方式存储，但玩家名称也可以在某些命令指定 `-n` 参数时使用。

### MySQL

* 只有一个运行中的服务器实例可以使用一个表；
* 在使用相同的数据库时需要提供表前缀以区分不同的数据或安装内容；
* 数据是通过交互修改的，如果出错则可能导致数据回滚；
* 默认情况下，WorldGuard 只会保存有改动的区域数据而不是完全重载完整的区域数据文件。

所使用的数据表会在下文解释：

|表名|目的|
|---|---|
|region|区域数据，包括区域大小、区域优先级和继承关系。|
|region_cuboid|长方体区域及其边界的相关数据。|
|region_poly2d|平面区域及其 Y 轴起止位置的相关数据。|
|region_poly2d_point|每行都代表平面区域的一个端点。|
|region_flag|每个区域的标志数据。|
|region_players|区域中的玩家数据。|
|region_groups|区域中的权限组数据。|
|world|转化为世界 ID 的普通世界名称列表。|
|user|转化为玩家 ID 的普通玩家名称列表。|
|group|转化为权限组 ID 的普通权限组名称列表。|

::: warning
不建议在服务器运行时修改 WorldGuard 的 MySQL 中的数据。这是因为 WorldGuard 只会保存有所变动的数据至数据库，如果对数据库中的区域标志数据以 WorldGuard 无法预料的方式进行外部修改，将会出现严重的问题。
:::

## 高延迟环境

数据完全是后台读取和存储的，所以即使是读取速度缓慢的硬盘或连接不畅的 MySQL 在正常情况下也不太可能会出现读取超时的问题。