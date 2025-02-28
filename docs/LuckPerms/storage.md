# 存储类型

LuckPerms 可以用多种方法存储它的数据。选项可以在配置文件的“存储设定（Storage Settings）”部分修改。

## 可用选项

* **远程数据库** - 需要连接至单独运行的数据库
  * MySQL
  * MariaDB（略优于 MySQL）
  * PostgreSQL
  * MongoDB
* **文件存储/本地数据库** - 无需额外步骤，“开箱即用”，但数据较难编辑。
  * H2（略优于 SQLite）
* **可读&可编辑文本文件**
  * YAML（.yml 文件）
  * JSON（.json 文件）
  * HOCON（.conf 文件）
  * TOML（.toml 文件）

使用的默认选项为 `H2`。

### 远程数据库

|优势|劣势|
|---|---|
|允许数据在多个服务器之间共享|搭建非常复杂|
|总体上可信度更高|需要额外资源运行数据库|
|能处理更大量的数据，支持频繁读写||
|带有索引，处理批量查询与更新时效率更高||

### 本地数据库

|优势|劣势|
|---|---|
|相比可编辑的文件存储方式更可信且高效|较难直接编辑数据|
|带有索引，处理批量查询与更新时效率更高|有时候会出现数据损坏的问题|
||数据不能跨服共享|

### 文本（配置）文件

|优势|劣势|
|---|---|
|可读性强|相较于使用文件数据库效率偏低|
|直接查询/编辑文件|难以批量查询与更新数据|
||数据不能跨服共享|
||手动编辑数据时更易出错|

## 更多细节

### 文件/本地数据库（H2&SQLite）
* 所有权限数据都存在 LuckPerms 文件夹下的一个文件中
* 不能像 YAML 或 JSON 文件那样被轻易编辑
* 必须使用插件的命令才可浏览或编辑数据

在使用 `H2` 的情况下，所有数据都存在 `luckperms-h2.mv.db` 文件中。
在使用 `SQLite` 的情况下，所有数据都存在 `luckperms-sqlite.db` 文件中。

若要使用这些选项，可按如下内容分别设置：
```YAML
storage-method: h2
# 或者使用 SQLite
storage-mathod: sqlite
```

### 可读&可编辑文件（YAML/JSON/HOCON/TOML）

* 数据存储在 LuckPerms 的多个文件中
* 文件可以在服务器运行时编辑，所作改动会被自动应用。

在设置为 `YAML` 的情况下，数据会存储在 `yaml-storage` 文件夹下的 `.yml` 文件中。
在设置为 `JSON` 的情况下，数据会存储在 `json-storage` 文件夹下的 `.json` 文件中。
在设置为 `HOCON` 的情况下，数据会存储在 `hocon-storage` 文件夹下的 `.conf` 文件中。
在设置为 `TOML` 的情况下，数据会存储在 `toml-storage` 文件夹下的 `.toml` 文件中。

这些存储类型中的格式大致相同，部分因语法差异而略有区别。

部分示例文件可以在[文末](#示例文件)找到。

若要使用这些选项，可按如下内容分别设置：
```YAML
# 使用 yaml 格式的文件存储
storage-method: yaml
# 使用 json 格式的文件存储
storage-method: json
# 使用 hocon 格式的文件存储
storage-method: hocon
# 使用 toml 格式的文件存储
storage-method: toml
```

### 远程数据库（MySQL/MariaDB/PostgreSQL/MongoDB）

你需要在配置文件中填入数据库服务器的地址、端口、数据库名以及用户名和密码。

若要存储大量数据，则我们会推荐你使用这个，或者考虑扩展一个服务器网络。若你已经在运行多个服务器且想在服务器之间同步数据，那么你就需要使用其中一种的远程数据库。

数据库结构可在[这里](https://github.com/LuckPerms/LuckPerms/tree/master/common/src/main/resources/me/lucko/luckperms/schema)找到。

若要使用这些选项，可按如下内容分别设置：
```YAML
# 使用 mysql 数据库存储
storage-method: mysql
# 使用 mariadb 数据库存储
storage-method: mariadb
# 使用 postgresql 数据库存储
storage-method: postgresql
# 使用 mongodb 数据库存储
storage-method: mongodb
```

### 示例文件

#### 示例 YAML 文件
```YAML
uuid: c1d60c50-70b5-4722-8057-87767557e50d
name: Luck
primary-group: default
permissions:
- test.permission:
    value: true
    context:
      server: factions
- negated.permission.example:
    value: false
- special.test.perm
- special.test.permission
parents:
- default
prefixes:
- '&c[Admin] ':
    priority: 10
meta:
- homes:
    value: '10'
```

#### 示例 JSON 文件
```JSON
{
  "uuid": "c1d60c50-70b5-4722-8057-87767557e50d",
  "name": "Luck",
  "primaryGroup": "default",
  "permissions": [
    {
      "permission": "test.permission",
      "value": true,
      "context": {
        "server": "factions"
      }
    },
    {
      "permission": "negated.permission.example",
      "value": false
    },
    {
      "permission": "special.test.perm",
      "value": true
    },
    {
      "permission": "special.test.permission",
      "value": true
    }
  ],
  "parents": [
    {
      "group": "default"
    }
  ],
  "prefixes": [
    {
      "prefix": "&c[Admin] ",
      "priority": 10
    }
  ],
  "meta": [
    {
      "key": "homes",
      "value": "10"
    }
  ]
}
```

#### 示例 HOCON 文件

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
uuid=c1d60c50-70b5-4722-8057-87767557e50d
name=Luck
primary-group=default
permissions=[
    {
        permission="test.permission"
        value=true
        context {
            server=factions
        }
    },
    {
        permission="negated.permission.example"
        value=false
    },
    {
        permission="special.test.perm"
        value=true
    },
    {
        permission="special.test.permission"
        value=true
    }
]
parents=[
    {
        group=default
    }
]
prefixes=[
    {
        prefix="&c[Admin] "
        priority=10
    }
]
meta=[
    {
        key=homes
        value="10"
    }
]
```

#### 示例 TOML 文件

```TOML
uuid = "c1d60c50-70b5-4722-8057-87767557e50d"
name = "Luck"
primary-group = "default"

[[permissions]]
  permission = "test.permission"
  value = true

  [permissions.context]
    server = "factions"

[[permissions]]
  permission = "negated.permission.example"
  value = false

[[permissions]]
  permission = "special.test.perm"
  value = true

[[permissions]]
  permission = "special.test.permission"
  value = true

[[parents]]
  group = "default"

[[prefixes]]
  prefix = "&c[Admin] "
  priority = 10

[[meta]]
  key = "homes"
  value = "10"
```