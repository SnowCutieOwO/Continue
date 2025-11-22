# 存储系统故障

本章节为[常见问题](../faq.md)的拓展阅读，主要讲述了存储有关的问题与错误。

本章节包含了一些对不同形式存储方式（大部分是 MySQL）的常见问题与解决方法。

首先，让我们厘清 LuckPerms 对存储权限操作的相关内容。我们经常收到许多（有些时候挺恼人！）的用户评论，说插件不工作，有 95% 的情况都与 LuckPerms 无关。😢

为了让权限数据写入存储后端，LuckPerms 使用了一种称之为“驱动”的东西来来与底层的存储系统进行交互。

这些驱动是第三方制作的。它们已有大量的测试，且（大多数情况下）通过数据库的维护团队发布。

需要注意的是：

* **若错误源于驱动 - 这*不是* LuckPerms 导致的。**
* 你*可能*经历过驱动本身的错误，不过大部分情况下应该不会。
* 造成这些错误的一般原因是安装时配置不正确。

下文是一些常见错误。如果你遇到的问题在这里无法找到，那么可以在 Github 上提交一个漏洞报告，我们可以为你指出正确的方向（或在它真的是 LuckPerms 的漏洞时修复它！）

## 常见问题

### LuckPerms 不能连接至 MySQL 服务器

诸如此类的报错：

> Caused by: java.util.concurrent.CompletionException: java.sql.SQLTransientConnectionException: luckperms - Connection is not available, request timed out after 5000ms.
> ...
> Caused by: java.sql.SQLTransientConnectionException: luckperms - Connection is not available, request timed out after 5000ms.

> luckperms - Failed to validate connection com.mysql.jdbc.JDBC4Connection@xxxxxxxxx (Communications link failure)
> The last packet successfully received from the server was xxxxxxx milliseconds ago. The last packet sent successfully to the server was xx milliseconds ago.)

请确认：

* 你使用了正确的地址与端口号
* 你使用了正确的用户名/密码
* 数据库存在且当前用户可访问
* 服务器在线 & 接受连接
* 无防火墙规则阻止连接
* MySQL 绑定至正确的端口，且可在 LuckPerms 安装后从服务器访问
* 检查你的 MySQL 是否已到达最大连接数量。默认情况下，LuckPerms 每个服务器会提供 10 个连接。若你有其他插件连接至相同的服务器，你可能需要考虑提升该限制。

若你遇到了 `Communications link failure` 错误，或者与超时有关的报错，那么上述列表中的某一个出现了问题。

若要让当前用户获得访问 LuckPerms 数据库表的权限，请执行如下指令：

```SQL
GRANT ALL PRIVILEGES ON [数据库名称].* TO '[用户名称]'@'[IP 地址]';
```

将方括号 [ ] 中的内容进行相应替换后再执行即可。

如：
```SQL
GRANT ALL PRIVILEGES ON luckperms.* TO 'luck'@'%';
```

之后，在完成你的操作后，执行命令：
```SQL
FLUSH PRIVILEGES;
```

## MySQL SSL 错误

若你得到的报错与下文相似：

> Establishing SSL connection without server's identity verification is not recommended. According to MySQL requirements SSL connection must be established by default if explicit option isn't set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.

... 你需要为 MySQL 连接禁用 SSL。

你可以编辑 LuckPerms 的配置文件，在“Storage”部分中，找到如下部分的配置并进行编辑即可：

``` YAML
data:
  pool-settings:
    # This setting allows you to define extra properties for connections.
    properties:
      useUnicode: true
      characterEncoding: utf8
      useSSL: false
      verifyServerCertificate: false
```
将文中的最后两项加入即可。

## MySQL“No operations allowed after connection closed”错误

若你得到的报错与下文相似：

> me.lucko.luckperms.lib.hikari.pool.PoolBase - luckperms-hikari - Failed to validate connection me.lucko.luckperms.lib.mysql.jdbc.JDBC4Connection@xxxxxxx (No operations allowed after connection closed.)

> me.lucko.luckperms.lib.hikari.pool.PoolBase - luckperms-hikari- Failed to validate connection me.lucko.luckperms.lib.mariadb.MariaDbConnection@xxxxxxx (xxx cannot be called on a closed connection)

...你需要修改（LP 配置中）`maxium-lifetime` 与 `wait-timeout`（MySQL 配置）设置。

需要注意的是，LP 配置文件中的 `maxium-lifetime` 值必须**小于** MySQL 配置中的 `wait_timeout` 值。

||`maxium-lifetime`|`wait_timeout`|
|---|---|---|
|所处部分：|[LuckPerms 配置文件](https://github.com/LuckPerms/LuckPerms/blob/be92a6754404b387dead24ebc1dd3ca8af8e6456/bukkit/src/main/resources/config.yml#L125-L128)|[MySQL 服务器配置](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_wait_timeout)|
|单位：|毫秒|秒|
|默认值：|`1800000`（30 分钟）|`28800`（8 小时）|

只要 `maxium-lifetime` 小于 `wait_timeout`，不论改哪个值都无伤大雅。别忘了这俩单位不一样！

默认的 `maxium-lifetime` 为 30 分钟，对**大部分**用户都适用。一般情况下如果服务器提供商修改了默认 8 小时的等待时间（后者）时才会出现问题。

若你的 MySQL 服务器是由第三方提供的，可以问问看他们关于该值的设置。

## MySQL 达到了最大连接数

若你得到的报错与下文相似：

> Caused by: com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: User 'xxxxxxxxx' has exceeded the 'max_user_connections' resource (current value: xxx)

你的 MySQL 当前用户已达到最大连接数量。默认情况下，LuckPerms 会为每个服务器提供 10 个连接。若你有其他插件连接至相同的服务器，你可能需要考虑提升该限制。

若你正在运行自己的 MySQL 服务器，这里有些链接讲到了如何提升这个限制的教程。

* https://dev.mysql.com/doc/refman/5.5/en/too-many-connections.html
* https://www.electrictoolbox.com/update-max-connections-mysql/

若你的 MySQL 服务器由服务器提供商负责，你需要联系他们来进行相关修改。

## MySQL 公钥返回不被允许

若你得到的报错与下文相似：

> Caused by: me.lucko.luckperms.lib.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Public Key Retrieval is not allowed

这是一个可以改正的 MySQL 问题。

你可以编辑 LuckPerms 的配置文件，在“Storage”部分中，找到如下部分的配置并进行编辑即可：

``` YAML
data:
  pool-settings:
    # This setting allows you to define extra properties for connections.
    properties:
      useUnicode: true
      characterEncoding: utf8
      useSSL: false
      verifyServerCertificate: false
      allowPublicKeyRetrieval: 
```

在最后一行，加上 `allowPublicKeyRetrieval`，并将其设置为 true。

## MySQL 设置端口失败

若你得到的报错与下文相似：

> Failed to set property port on target class me.lucko.luckperms.lib.mysql.jdbc.jdbc2.optional.MysqlDataSource java.lang.NumberFormatException: For input string: xxxx

你在 LuckPerms 中 `address` 的设置不能建立端口，大部分情况下是地址与端口不正确。若端口为 3306，因为它是默认端口，所以无需设置。正确的 `address` 格式为`"地址:端口号"`。

## LuckPerms 无法连接至 Redis 服务器

请确认：

* 你使用了正确的地址与端口号
* 你输入的密码正确
* 无防火墙规则阻止连接
* Redis 服务器正常启动