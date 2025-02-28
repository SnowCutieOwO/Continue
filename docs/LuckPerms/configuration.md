# 配置文件

LuckPerms 的主配置文件可以在这些位置找到。

|核心|位置|
|---|---|
|Bukkit/Spigot|[/plugins/LuckPerms/config.yml](https://github.com/LuckPerms/LuckPerms/blob/master/bukkit/src/main/resources/config.yml)|
|BungeeCord|[/plugin/LuckPerms/config.yml](https://github.com/LuckPerms/LuckPerms/blob/master/bungee/src/main/resources/config.yml)|
Sponge|[/config/luckperms/luckperms.conf](https://github.com/LuckPerms/LuckPerms/blob/master/sponge/src/main/resources/luckperms.conf)|
Fabric|[/config/luckperms/luckperms.conf](https://github.com/LuckPerms/LuckPerms/blob/master/fabric/src/main/resources/luckperms.conf)|
Forge|[/config/luckperms/luckperms.conf](https://github.com/LuckPerms/LuckPerms/blob/master/forge/src/main/resources/luckperms.conf)|
Nukkit|[/plugins/LuckPerms/config.yml](https://github.com/LuckPerms/LuckPerms/blob/master/nukkit/src/main/resources/config.yml)|
Velocity|[/plugins/luckperms/config.yml](https://github.com/LuckPerms/LuckPerms/blob/master/velocity/src/main/resources/config.yml)|

各自核心的默认配置文件都可通过点击上述链接直达。需要注意的是配置文件不会在插件更新时自动更新。如果配置文件中没有找到对应选项，则会使用默认值。

## 索引

### 基础设置

* [server](#server)
* [use-server-uuid-cache](#use-server-uuid-cache)

### 存储设置

* [storage-method](#storage-method)
* [data](#data)
* [pool-settings](#pool-settings)
* [split-storage](#split-storage)

### 更新准备&通信服务

* [sync-minutes](#sync-minutes)
* [watch-files](#watch-files)
* [messaging-service](#messaging-service)
* [auto-push-updates](#auto-push-updates)
* [push-log-entries](#push-log-entries)
* [broadcast-received-log-entries](#broadcast-received-log-entries)
* [redis](#redis)
* [rabbitmq](#rabbitmq)

### 个性化设置

* [temporary-add-behaviour](#temporary-add-behaviour)
* [primary-group-calculation](#primary-group-calculation)
* [argument-based-command-permissions](#argument-based-command-permissions)
* [log-notify](#log-notify)
* [meta-formatting](#meta-formatting)

### 权限计算&继承

* [inheritance-traversal-algorithm](#inheritance-traversal-algorithm)

#### 权限方案设置

* [include-global](#include-global)
* [include-global-world](#include-global-world)
* [apply-global-groups](#apply-global-groups)
* [apply-global-world-groups](#apply-global-world-groups)

#### 元数据查询设置

* [meta-value-selection-default](#meta-value-selection-default)
* [meta-value-selection](#meta-value-selection)

#### 继承设置

* [apply-wildcards](#apply-wildcards)
* [apply-regex](#apply-regex)
* [apply-shorthand](#apply-shorthand)

#### Bukkit 相关设置

* [apply-bukkit-child-permissions](#apply-bukkit-child-permissions)
* [apply-bukkit-default-permissions](#apply-bukkit-default-permissions)
* [apply-bukkit-attachment-permissions](#apply-bukkit-attachment-permissions)

#### Bungee 相关设置

* [apply-bungee-config-permissions](#apply-bungee-config-permissions)

#### Sponge 相关设置

* [apply-sponge-implicit-wildcards](#apply-sponge-implicit-wildcards)
* [apply-sponge-default-subjects](#apply-sponge-default-subjects)

#### 额外设置

* [world-rewrite](#world-rewrite)
* [group-weight](#group-weight)

### 微调设置

#### 服务器操作方/Vault（仅 Bukkit）

* [enable-ops](#enable-ops)
* [auto-op](#auto-op)
* [commands-allow-op](#commands-allow-op)
* [use-vault-server](#use-vault-server)
* [vault-server](#vault-server)
* [vault-include-global](#vault-include-global)
* [vault-ignore-world](#vault-ignore-world)
* [vault-debug](#vault-debug)

### 杂项设置 

* [debug-logins](#debug-logins)
* [allow-invalid-usernames](#allow-invalid-usernames)
* [prevent-primary-group-removal](#prevent-primary-group-removal)
* [contexts.json](#contextsjson)

## 配置源

LuckPerms 会尝试（按下列来源）从多个来源找到并读取配置文件。

1. **系统配置**
2. **环境变量**
3. **配置文件**（`config.yml` 或 `luckperms.conf` 等，取决于使用的核心种类）
4. 默认值

### 系统配置

[系统配置](https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html)是一种配置 Java 应用的方式。它们既可以通过命令行的标签进行设置，也可以通过 [`java.lang.System`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html) API 进行配置。

例如，若要将下列内容从 LuckPerms 的 config.yml 复制到系统配置：
```YAML
server: example

storage-method: mysql
data:
  address: 192.168.0.100
```
...那么在服务器启动时你就需要按照如下内容进行设置：
```batch
java
  -Dluckperms.server=example
  -Dluckperms.storage-method=mysql
  -Dluckperms.data.address=192.168.0.100
  -jar server.jar
```

### 环境变量

[环境变量](https://en.wikipedia.org/wiki/Environment_variable) 是一种配置任意应用的常见方式。它们被定义的方式取决于你的安装过程。对于类 unix shell 的示例可在下文找到，但你也可以尝试在服务器未运行在 Docker 容器中的时候[方便地设置它们](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)。 

例如，若要将下列内容从 LuckPerms 的 config.yml 复制到系统变量：
```YAML
server: example

storage-method: mysql
data:
  address: 192.168.0.100
```
...那么你的服务器启动参数就应像这样：
```batch
export LUCKPERMS_SERVER="example"
export LUCKPERMS_STORAGE_METHOD="mysql"
export LUCKPERMS_DATA_ADDRESS="192.168.0.100"

java -jar server.jar
```

## 描述

### `server`

服务器的名称，会用于某些与服务器名称有关的权限。

若设置为“global”则会无视该设定。更多有关服务器名称相关权限的信息，即权限组运作原理，可以在[这里](reference.how-permission-calculation-works.md)找到。

#### 示例

```YAML
server: global
```

### `use-server-uuid-cache`

若指定玩家没有 LuckPerms 缓存记录，是否使用 UUID 缓存/查询功能。

在禁用该选项时，LP 只会使用它自己的缓存。

#### 示例

```YAML
use-server-uuid-cache: false
```

### `storage-method`

插件使用的存储方式。

完整支持类型列表[见此](storage.md)。

**可用类型**：`mysql`、`mariadb`、`postgresql`、`sqlite`、`h2`、`json`、`yaml`、`hocon` 和 `mongodb`。

若你的 MySQL 支持的话，选择 `mariadb` 会比 `mysql` 更好。除此之外，`h2` 也会比 `sqlite` 效率更高。

#### 示例
```YAML
storage-method: h2
```

### `data`

该部分配置用于指定登录数据库时所需要用到的凭据。

* `address` - 数据库的地址。默认情况下会使用标准数据库引擎端口。若你设置在了非默认端口上，请以 `域名:端口号` 的形式填入此处。
* `database` - LuckPerms 读取的数据库名称。
* `username` - 使用的用户名称
* `password` - 使用的密码。留空表示不进行登录验证。

#### 示例

```YAML
data:
  address: localhost
  database: minecraft
  username: root
```

### `pool-settings`

这些设定会影响到 MySQL 的连接池。默认值适合大部分用户的环境。若自行修改后果自负！

设置 MySQL 连接池的最大大小。这个值基本上会决定连接到数据库后端的最大实际连接数量。决定连接池大小的更多信息可以在下文链接中找到：

https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing

#### 示例

```YAML
data:
  pool-settings:
    maximum-pool-size: 10
```

### `split-storage`

分离存储允许你对不同类型数据使用多种存储方法。

**可用的数据有：**
* **`user`** - 有关玩家的数据，包括权限、继承关系与元数据等
* **`group`** - 有关权限组的数据，包括权限、继承关系与元数据等
* **`track`** - 升级路线（或称之为“路径”）的有关数据
* **`uuid`** - 由 LuckPerms 所用的，`uuid <-- --> 玩家名称` 的缓存，会在 `/lp user` 命令中输入玩家名称时调用
* **`log`** - 由 LuckPerms 存储的操作记录日志

可用存储类型在上文已有提及。

#### 示例
```YAML
split-storage:
  enabled: true
  methods:
    user: mariadb
    group: yaml
    track: yaml
    uuid: mariadb
    log: mariadb
```

### `sync-minutes`

该选项决定了 LuckPerms 间隔多久执行一次同步任务。

一次同步任务会刷新所有储存的数据，并确保插件使用的所有数据都是最新的。

该设置是默认禁用的，因为大部分服主不需要用到这个。但是，如果你正在使用没有通信服务的远程数据库存储，你可能就需要将这个设置启用并将其调整为 3。

设置为 -1 表示将其完全禁用。

#### 示例

```YAML
data:
  sync-minutes: 3
```

### `watch-files`

若你正在使用基于文件的数据库，LuckPerms 会监控数据文件的改动，在检测到改动后又会将其自动更新。

若你不想要这么做，将该选项设置为 false 即可。

```YAML
watch-files: true
```

### `messaging-service`

通信服务有关的设置。

若启用且配置完毕，那么 LuckPersm 将会使用通信系统来通知其他服务器有关的变动。使用命令“/luckperms networksync”可应用这些变动。数据不通过此服务存储，它只会被用作通信平台。

若你要启用该功能，你应该将上文的“sync-minutes”设置为 -1，因为 LuckPerms 没有必要将这些改动应用到数据库上。

**可用选项：**
* `sql` - 使用 SQL 数据库来形成一个用于交流的排队系统。仅在 `storage-method` 为 MySQL 或 MariaDB 时有效。当设置为“none”且正在使用 SQL 数据库时此为默认选项。设置为 `notsql` 可将其禁用。
* `pluginmsg` - 使用插件的通信频道进行交流。LuckPerms 在这种情况下必须安装在所有 BungeeCOrd/Velocity 群组服和子服上。若有多个群组服则该功能无效，另外该选项需要在所有运行 LuckPerms 的服务器上设置。更推荐使用 `sql` 而非本设置！
* `lilypad` - 使用 LilyPad 的通信服务。你需要先安装 LilyPad-Connect 插件。
* `redis` - 使用 Redis 的通信服务。
* `rabbitmq` - 使用 RabbitMQ 的通信服务（AMQP）。
* `none` - 不使用！

#### 示例

```YAML
messaging-service: none
```

### `auto-push-updates`

是否在通过命令产生改动后允许 LuckPerms 自动更新数据。

#### 示例

```YAML
auto-push-updates: true
```

### `push-log-entries`

是否允许 LuckPerms 通过通信服务器向连接的服务器推送登录条目。

#### 示例
```YAML
push-log-entries: true
```

### `broadcast-received-log-entries`

是否向处于该服务器内的玩家播送收到的记录条目。

如果你在 BungeeCord 和子服上一同安装了 LuckPerms，你应该将它们配置中的该项设置为 false 来防止玩家被此类消息重复提醒。

#### 示例
```YAML
broadcast-received-log-entries: true
```

### `redis`

有关于 Redis 的设置。

* `address` - 使用 redis 的地址（单节点）。默认使用标准端口（6379）。若你使用的是非标准端口，请按 `域名:端口` 的格式填写。
* `addresses` - 使用 redis 的地址（集群）.
* `password` - 使用的密码。留空表示不进行登录验证。

#### 示例

单节点 redis：
```YAML
redis:
  enabled: true
  address: localhost
  password: 'passw0rd'
```
集群 redis：
```YAML
redis:
  enabled: true
  addresses:
    - redis-node1
    - redis-node2
  password: 'passw0rd'
```

### `rabbitmq`

有关 RabbitMQ（AMQP）的设置。

* `address` - 使用 rabbitmq 的域名。默认情况下使用标准的 AMQP 端口（5672）。若使用非标准端口，请按 `地址:端口` 的格式填入此处。
* `vhost` - 对于 LuckPerms 使用的虚拟主机。在大多数情况下，这可以（也一定要）保持默认。[在此](https://www.rabbitmq.com/vhosts.html)阅读有关虚拟主机的更多信息。 
* `username` - 使用的用户名称。默认为“guest”，表示在 / 虚拟主机上拥有所有权限的人。[在此](https://www.rabbitmq.com/access-control.html)阅读有关访问控制的更多信息。
* `password` - 使用的密码。默认为“guest”，表示为“guest”用户的密码（见上述设置）。

#### 示例

```YAML
rabbitmq:
  enabled: true
  address: localhost
  vhost: '/'
  username: 'guest'
  password: 'guest'
```

### `temporary-add-behaviour`

控制临时权限/继承/元数据的累加方式。默认的处理方式为 `deny`。

* `accumulate` - 新的临时数据时长会叠加在已有时间之上
* `replace` - 保留持续时间较长的，其他临时数据均会被舍弃
* `deny` - 拒绝加入重复的临时数据

#### 示例

```YAML
temporary-add-behaviour: deny
```

### `primary-group-calculation`

LuckPerms 如何决定玩家的“主”权限组。默认设置为 `parents-by-weight`。

* `stored` - 使用在文件/数据库中对该玩家存储的值
* `parents-by-weight` - 使用玩家权重最高的继承组
* `all-parents-by-weight` - 与上述相同，但判断范围为所有直接继承和间接继承的权限组

#### 示例

```YAML
primary-group-calculation: parents-by-weight
```

### `argument-based-command-permissions`

在玩家使用命令修改权限数据时，LuckPerms 是否进行额外的权限检查。

这个系统的详细文档在[这里](how-to.setup-argument-based-command-permissions.md)会讲到。

#### 示例

```YAML
argument-based-command-permissions: true
```

### `log-notify`

插件是否向玩家在权限发生改动时发送日志提醒。提醒仅对拥有对应接收权限的玩家发送。

提醒也可以通过游戏内命令 `/lp log notify off` 禁用。

#### 示例

```YAML
log-notify: true
```

### `meta-formatting`

LuckPerms 应该如何处理前后缀。

该部分的详细内容可在[这里](how-to.stack-prefixes.md)浏览。

### `inheritance-traversal-algorithm`

在遍历“继承树”时 LuckPerms 应当使用的算法。

* `breadth-first` - 见 https://baike.baidu.com/item/%E5%AE%BD%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2
* `depth-first-pre-order` - 见 https://baike.baidu.com/item/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2
* `depth-first-post-order` - 见 https://baike.baidu.com/item/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2

#### 示例

```YAML
inheritance-traversal-algorithm: depth-first-pre-order
```

### `include-global`

在该服务器上的玩家是否持有全局权限（不设置服务器上下文的权限）。

若该项设置为 false，只有指定在该服务器上的权限才会被添加至玩家。若上述的“global”设置为了 global，则不要将该项设置为 false。有关服务器限制权限的内容可在这里找到。

#### 示例

```YAML
include-global: true
```

### `include-global-world`

与上述选项相似，但该设置是针对世界的。若设置为 false，只有上下文中指定了生效世界的权限才会被分配给玩家。任何没有设置世界上下文的权限不会被应用。

#### 示例

```YAML
include-global-world: true
```

### `apply-global-groups`

这条设置的操作方法与“include-gloabl”相似，但权限组继承的相关设置略有变动。

在计算玩家权限时，插件将会压缩继承树，递归解析每个权限组的继承关系。若该设置为 false，作为结果，权限组不会被“应用”，之后也不会考虑继承的权限组，继承查找也会立即停止。

这表示如果玩家在指定服务器中继承了某个组，如果这个组是全局通用（不通过上下文指定生效服务器）的，则它包含的权限数据将不会生效。

例如，当该设置为 false 且包含下列权限组与继承关系时：

```
玩家 "Luck" 全局继承权限组 "admin", 后者又在指定服务器上继承 "default" 权限组.
```

尽管 Luck 在指定服务器上继承了默认组，但它不会生效，因为继承关系的查找在“admin”权限组时就已经停止。“admin”继承的组都会被忽略。

#### 示例

```YAML
apply-global-groups: true
```

### `apply-global-world-groups`

与上述选项相似，但这个选项的条件是世界。若设置为 false，仅指定了生效世界的权限组才会对玩家生效。所有不指定生效世界上下文的权限组都会被忽略。

#### 示例

```YAML
apply-global-world-groups: true
```

### `meta-value-selection-default`

决定了元数据的选择方式。默认值为 `inheritance`。

* `inheritance` - 选择最先继承的元数据值
* `highest-number` - 选择数值最大的元数据值
* `lowest-number` - 选择数值最小的元数据值

#### 示例

```YAML
meta-value-selection-default: inheritance
```

### `meta-value-selection`

决定元数据值按键值的选择方式。

可填入的值与上一条相同。

#### 示例

```YAML
meta-value-selection:
  max-homes: highest-number
```

### apply-wildcards

If the plugin should apply wildcard permissions.
插件是否允许通配符权限。

若插件作者提供了他们自己的通配符权限，那么启用这个选项将允许 LuckPerms 来直接判断它们。虽然 Bukkit 不很支持这种做法，但现在的服主已逐渐习惯了使用通配符权限。在 Sponge 服务端上，这条设置会决定类似“node.part.*”的权限是否生效。

#### 示例

```YAML
apply-wildcards: true
```

### `apply-regex`

插件是否允许判断正则表达式权限。

若设置为 true，LuckPerms 将会检测以“r=”开头的正则表达式，并返回所有匹配表达式的权限节点。若你没有设置任何正则权限，启用该选项也不会影响性能。更多信息可以在[这里](reference.how-permission-calculation-works.md#正则)找到。

#### 示例

```YAML
apply-regex: true
```

### `apply-shorthand`

插件是否应当解析缩写（如 GLOB 形式的）权限。

该功能的更多信息可以在[这里](reference.how-permission-calculation-works.md#缩写权限)找到。

#### 示例

```YAML
apply-shorthand: true
```

### `apply-bukkit-child-permissions`

插件是否应用 Bukkit 的子权限。

插件作者可以自定义他们的插件权限结构，这会在该选项启用时被 LuckPerms 解析并使用。

鉴于它是标准的 Bukkit 特性，该选项是默认启用的，大部分服主都习惯。但是，如果你不想要使用这个功能，它还是可以被安全关闭的。

#### 示例

```YAML
apply-bukkit-child-permissions: true
```

### `apply-bukkit-default-permissions`

插件是否应用 Bukkit 的默认权限。

插件作者可以自定义哪些权限默认会分配给所有玩家，哪些不会。若该选项设置为 false，LuckPerms 会无视这些默认分配的权限。

鉴于它是标准的 Bukkit 特性，该选项是默认启用的，大部分服主都习惯。但是，如果你不想要使用这个功能，它还是可以被安全关闭的。

#### 示例

```YAML
apply-bukkit-default-permissions: true
```

### `apply-bukkit-attachment-permissions`

插件是否应用 Bukkit 的附属权限。

服务器上的其他插件可以给玩家添加自己的“附属权限”。这允许他们玩家获得持续到他们退出游戏或被移除的权限。若该选项设置为 false，LuckPerms 在判断玩家是否拥有某个权限时不考虑这些附属权限。

在启用该功能后可能会有略微的性能提升。与禁用 OP 系统结合的话，这个功能在防止提权插件上会很有效。

鉴于它是标准的 Bukkit 特性，该选项是默认启用的，大部分服主都习惯。但是，如果你不想要使用这个功能，它还是可以被安全关闭的。

#### 示例

```YAML
apply-bukkit-attachment-permissions: true
```

### `apply-bungee-config-permissions`

插件是否应用在 BungeeCord 的 config.yml 中的权限与权限组内容。

若设置为 false，LuckPerms 会忽略这些内容。

此功能默认禁用，因为权限数据应当完全由 LuckPerms 处理，这样它们就可以完全在游戏内浏览或编辑。

#### 示例

```YAML
apply-bungee-config-permissions: false
```

### `apply-sponge-implicit-wildcards`

插件是否应当根据 Sponge 的内部通配符继承系统对权限进行解析和应用。

长话短说：若玩家获取了 `example` 权限，那么玩家就会拥有 `example.function`、`example.another` 和 `example.deeper.nesting` 等。

若该项设置为 false，则该功能不会生效。

鉴于它是标准的 Sponge 特性，该选项是默认启用的，大部分服主/插件都习惯。但是，如果你不想要使用这个功能，它还是可以被安全关闭的。

#### 示例

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
apply-sponge-implicit-wildcards=true
```

### `apply-sponge-default-subjects`

插件是否使用 Sponge 的默认主权限。

插件可以将一整套默认权限分配至所有玩家。若该选项为 false，则插件将在判断玩家权限时无视这些数据。

鉴于它是标准的 Sponge 特性，该选项是默认启用的，大部分服主/插件都习惯。但是，如果你不想要使用这个功能，它还是可以被安全关闭的。

#### 示例

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
apply-sponge-default-subjects=true
```

### `world-rewrite`

允许在上下文计算中填入世界名称的别称。这些别称允许填入上下文中以参与检查。

#### 示例

```YAML
world-rewrite:
  world_nether: world
  world_the_end: world
```

### `enable-ops`

是否启用原版的 OP 系统。

若设置为 false，所有玩家都会被移除管理员，同时 op/deop 命令也会被禁用。

#### 示例

```YAML
enable-ops: true
```

### `auto-op`

若设置为 true，任何拥有“luckperms.autoop”权限的玩家都会自动获得管理员。

这个权限可以被继承，或通过上下文在指定的世界/服务器生效，也可临时分配。额外地，将该设置调整为 true 会强制将上文的“enable-ops”设置为 false。没有该权限的任何玩家都会被夺去管理员权限，同时 op/deop 命令也会被禁用。

非常重要的是，该选项只会在玩家首次加入服务器或切换世界后进行检查。也就是说，只将这个权限去掉是无法将他们的管理员权限夺去的。玩家需要小退来让改动生效。

非常推荐使用这个选项，而不是单纯地给予玩家一个“*”权限了事。

#### 示例

```YAML
auto-op: false
```

### `commands-allow-op`

管理员玩家是否允许使用 LuckPerms。

设置为 false 则只允许拥有权限的玩家使用命令。

#### 示例

```YAML
commands-allow-op: true
```

### `use-vault-server`

是否使用下文的 `vault-server` 选项。

在该选项设置为 false 时，在“server”部分设定的值会用于 Vault 操作。

#### 示例

```YAML
use-vault-server: false
```

### `vault-server`

Vault 操作使用的服务器名称。

若你不想要 Vault 操作只能在指定服务器上进行，那么将该项设置为“global”。

仅在上文的 `use-vault-server` 项设置为 true 时有效。

#### 示例

```YAML
vault-server: global
```

### `vault-include-global`

在返回元数据或玩家权限组是否考虑全局权限。

#### 示例

```YAML
vault-include-global: true
```

### `vault-ignore-world`

Vault 操作是否无视任何提供的世界参数。

默认情况下，若不提供世界参数，权限将会设置为仅在玩家当前世界生效。（Vault 的设计相当完美）将该项设置为 true 以改变此行为。

#### 示例

```YAML
vault-ignore-world: false
```

### `vault-debug`

在插件使用 Vault 功能时是否将调试信息显示在控制台中。

#### 示例

```YAML
vault-debug: false
```

### `debug-logins`

在处理登录时是否要让 LuckPerms 输出额外的日志。

如果遇到 UUID 或是数据未能载入的问题，这个功能将会很有用。

调试信息看起来会像是这样：

```LOG
[INFO]: [LP] Processing pre-login for c1d60c50-70b5-4722-8057-87767557e50d - Luck
[INFO]: UUID of player Luck is c1d60c50-70b5-4722-8057-87767557e50d
[INFO]: [LP] Processing login for c1d60c50-70b5-4722-8057-87767557e50d - Luck
[INFO]: Luck[/xxx:xxx] logged in with entity id xxx at ([xxx]x, x, x)
```

#### 示例

```YAML
debug-logins: false
```

### `allow-invalid-usernames`

若设置为 true，LuckPerms 将会允许非英文或数字名称玩家进入服务器。

需要注意的是，基于存储方法的实现，玩家名称不应长于 16 个字符。

#### 示例

```YAML
allow-invalid-usernames: false
```

### prevent-primary-group-removal

若设置为 false，插件则会允许玩家的主权限组被继承命令移除，并将他们的主权限组设置为默认组。

#### 示例

```YAML
prevent-primary-group-removal: false
```

## contexts.json

`contexts.json` 文件会在 LuckPerms 的主配置文件旁找到，并允许你设置两样东西。

### 静态上下文

静态[上下文](features.context.md)永不改变，并默认会给予在线的所有玩家。

LuckPerms 默认只提供一个静态上下文，称作“server（服务器）”。这个值可以通过主配置文件的 `server` 项进行设置。

例如，在一个群组服中，有三个公会服务器[^1]，每个名称都不一样。在每个服务器的 LP 配置文件里，我将它们的名称分别设置为了 `factions1`、`factions2` 和 `factions3`。但是，我想要一个这三个服务器都能获得的权限。

为了实现这个功能，在所有的公会服务器上，你可以添加一个静态上下文，名字叫做 `servertype`，并将其设置为 `factions`。

```JSON
{
  "static-contexts": {
  	"servertype": "factions"
  },
}
```

之后，我就可以使用 `/lp group default permission set some.permission true servertype=factions` 命令来为这三个服务器同时设置权限了。

### 默认上下文

默认上下文即为在服务器中执行命令时，各个上下文的缺省值。

```JSON
{
  "default-contexts": {
  	"server": "survival"
  },
}
```

按上述设置，在执行 `/lp user Luck permission set some.permission true` 时，会将 Luck 的 `some.permission` 的状态设置为 `true`，且上下文为 `server=survival`。

[^1]: 国外一种以玩家自发拉帮结派并进行发展或对战为核心玩法的服务器，国内一般附带在生存类服务器玩法中，称之为公会/工会。