# MySQL MariaDB 存储

本章节讲述的是 Dynmap 其中一种的存储方式。它是较为进阶的存储结构，可以通过独立设备托管需预先安装的数据库，我们稍后会讲到。

## Linux

通过如下命令安装 MySQL：

``` bash
sudo apt install mysql-server
```

MySQL 数据库软件安装完毕，但还需要进一步配置。

为了确保安装的安全性，MySQL 自带一个修改不安全设置的脚本。可以通过如下命令运行这个脚本：

``` bash
sudo mysql_secure_installation
```

脚本会询问你是否需要修改或配置有效密码插件。

``` log
Warning: Enabling this feature is a judgment call. If enabled, passwords that don’t match the specified criteria will be rejected by MySQL with
an error. This will cause issues if you use a weak password in conjunction with software that automatically configures MySQL user credentials, 
such as the Ubuntu packages for phpMyAdmin. It is safe to leave validation disabled, but you should always use strong, unique passwords for
database credentials.
```

输入 `Y` 表示同意，输入其他任意内容表示不启用并继续。

``` txt
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?
```

输入 `y|Y` 表示同意，输入其他任意内容表示不同意：

``` log
If you’ve enabled validation, the script will also ask you to select a level of password validation. Keep in mind that if you enter 2 – for the
strongest level – you will receive errors when attempting to set any password which does not contain numbers, upper and lowercase letters, 
and special characters, or which is based on common dictionary words.
```

密码验证策略有三种级别：

``` txt
LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary file
```

请输入 `0 = LOW, 1 = MEDIUM and 2 = STRONG: 1`

之后，你需要设置一个 root 密码：

``` txt
Please set the password for root here.

New password:

Re-enter new password:
```

剩余部分的询问可直接输入 `Y` 并按下 `ENTER` 继续。这可以移除匿名用户以及测试数据库，禁用远程 root 登录，载入并立即应用这些改动的规则。

需要注意的是，在运行 MySQL 5.7（及更高版本）的 Unbntu 系统中，MySQL 的 root 用户被设置为默认通过 auth_socket 插件验证而非密码登录。虽然更安全且可用性更强，但在需要外部程序（如 phpMyAdmin）接入时会造成不必要的麻烦。

### 安装 MySQL/MariaDB 服务器

现在，就可以设置 MySQL/MariaDB 服务器了。推荐为不同应用创建限制权限的新用户/密码。如果你正在搭建外置网页服务器，你也可以通过设置防火墙（iptables/firewalld/ufw 等）只允许网页服务器连接至数据库。

### 配置 MySQL/MariaDB 数据库

通过托管服务器的终端创建新数据、添加新数据库用户。

#### 在 MySQL/MariaDB 中新建数据库

``` text
mysql -u root -p
[若有则输入 MySQL root 密码]
mysql> CREATE DATABASE <dynmap_database_name>;
mysql> exit
```

::: detail 示例

``` txt
mysql -u root -p
[若有则输入 MySQL root 密码]
mysql> CREATE DATABASE DynmapDatabase;
mysql> exit
```

:::

#### 添加新用户

::: info

若 MySQL 与游戏处于同一服务器，那么 `<游戏服务器地址>` 应为 `localhost`。

:::

``` txt
mysql -u root -p
[若有则输入 MySQL root 密码]
mysql> CREATE USER '<Dynmap 用户>'@'<游戏服务器地址>' IDENTIFIED BY '<密码>';
mysql> GRANT CREATE, DELETE, INSERT, SELECT, UPDATE, INDEX ON <Dynmap 数据库>.* TO '<Dynmap 用户>'@'<游戏服务器地址>';
mysql> FLUSH PRIVILEGES;
mysql> exit
```

::: detail MySQL 与游戏在同一个服务器时的示例

``` txt
mysql -u root -p
[若有则输入 MySQL root 密码]
mysql> CREATE USER 'minecraftserver'@'localhost' IDENTIFIED BY 'password5678';
mysql> GRANT CREATE, DELETE, INSERT, SELECT, UPDATE, INDEX ON dynmapDatabase.* TO 'minecraftserver'@'localhost'';
mysql> FLUSH PRIVILEGES;
mysql> exit
```

:::

若你输入错误，需要删除 MySQL 用户，你可以这样做：

``` txt
mysql> DROP USER '<需删除用户>'@'<你输入的地址>';
```

创建新用户之后，可以试着登入。（需要先通过 `exit` 从 root 用户登出）

``` txt
mysql -u <网页服务器用户名> -p
[输入用户密码]
mysql> exit
```

### MySQL 权限

MySQL 可以分配给用户这些权限：

* `ALL PRIVILEGES` - 获得所有权限
* `CREATE` - 允许用户创建数据库/数据表
* `DELETE` - 允许用户从表中删除（数据）行
* `DROP` - 允许用户删除整个数据库/数据表
* `INSERT` - 允许用户向表中插入（数据）行
* `SELECT` - 允许用户从数据库中读取数据
* `UPDATE` - 允许用户更新数据表中的数据

### 编辑 dynmap/configuration.txt

若你正在使用的是 Forge 或 Fabric 系服务端，你还需要安装 kosma 编写的 SQL 提供器模组。

MySQL/MariaDB 的实现由这个模组处理：[Kosmolot's MySQL mod](https://www.curseforge.com/minecraft/mc-mods/sqlite-jdbc)。

最后一步就是配置 Dynmap 的 `configuration.txt`，使插件能访问数据库，用于存储数据。找到并修改如下部分的配置：

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

::: detail 启用 MySQL

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  #type: filetree <- DONT FORGET TO COMMENT THIS OUT
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  type: mysql
  hostname: <mysql_ip>
  port: <mysql_port>
  database: <mysql_database>
  userid: <dynmap_mysql_user>
  password: <dynmap_mysql_password>
  prefix: "" # Can add prefix for tables if you want
  flags: "?allowReconnect=true&autoReconnect=true"
```

:::

示例：

::: detail MySQL 示例

``` YAML
storage:
  # Filetree storage (standard tree of image files for maps)
  #type: filetree <- DONT FORGET TO COMMENT THIS OUT
  # SQLite db for map storage (uses dbfile as storage location)
  #type: sqlite
  #dbfile: dynmap.db
  # MySQL DB for map storage (at 'hostname':'port' with flags "flags" in database 'database' using user 'userid' password 'password' and table prefix 'prefix')
  type: mysql
  hostname: localhost
  port: 3306
  database: dynmap
  userid: dynmap
  password: dynmap
  prefix: "" # Can add prefix for tables if you want
  flags: "?allowReconnect=true&autoReconnect=true"
```

:::

保存配置文件，启动游戏服务器，检查 Dynmap 是否能成功连接到 MySQL/MariaDB。

## Windows

对于 Windows 用户，我们推荐阅读这篇教程：<https://www.onlinetutorialspoint.com/mysql/install-mysql-on-windows-10-step-by-step.html>。

在服务器搭建完毕，可以从这里开始阅读 linux 的教程：<https://github.com/webbukkit/dynmap/wiki/MySQL-MariaDB-Storage#setup-of-the-mysqlmariadb-server>

保存配置文件，启动游戏服务器，检查 Dynmap 是否能成功连接到 MySQL/MariaDB。

进一步了解：https://www.scaler.com/topics/sql/how-to-install-mysql-in-windows-10/