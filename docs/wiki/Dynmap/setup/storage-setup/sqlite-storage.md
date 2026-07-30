# SQLite Storage

本章节讲述的是 Dynmap 其中一种的存储方式。它是一种进阶存储方式，配置简便且无需额外安装依赖。缺点是基于它单文件的存储结构，即使只是部分损坏也会导致整个文件无法读取。

若你正在使用的是 Spigot 或 Paper 系服务端，请直接跳到“配置 configuration.txt”这一步。

若你正在使用的是 Forge 或 Fabric 系服务端，你还需要安装 kosma 编写的 SQL 提供器模组。

The SQlite 的实现由这个模组处理：[Kosmolot's SQlite mod](https://www.curseforge.com/minecraft/mc-mods/sqlite-jdbc)

## Configuring configuration.txt

最后一步就是配置 Dynmap 的 `configuration.txt`，使插件能访问数据库，用于存储数据。

找到并修改如下部分的配置：

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  type: filetree
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  #type: mysql
  #hostname: localhost
  #port: 3306
  #database: dynmap
  #userid: dynmap
  #password: dynmap
  #prefix: ""
  #flags: "?allowReconnect=true&autoReconnect=true"
```

将其改为：

::: detail SQlite 示例

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  #type: filetree &lt;- DONT FORGET TO COMMENT THIS OUT
  # SQLite db for map storage (uses dbfile as storage location)
  type: sqlite
  dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  #type: mysql
  #hostname: localhost
  #port: 3306
  #database: dynmap
  #userid: dynmap
  #password: dynmap
  #prefix: ""
  #flags: "?allowReconnect=true&autoReconnect=true"
```

:::
保存配置文件，启动游戏服务器，检查 Dynmap 是否能成功连接到 SQLite。