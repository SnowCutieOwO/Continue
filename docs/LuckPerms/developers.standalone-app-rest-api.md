# 独立应用 & REST API

在 Minecraft 服务器中不论是作为插件还是模组，LuckPerms 都可作为独立应用运行。原因如下：

1. 允许管理员快速切换**LuckPerms 命令行**并对远程数据库执行命令而无需启动 Minecraft 服务器！
2. 允许小型独立拓展（如**REST APPI**）以独立应用的方式运行。

## 作为独立 API

独立“插件”是 LuckPerms 主代码库的一部分，处于 [`standalone`](https://github.com/LuckPerms/LuckPerms/tree/master/standalone) 部分中。

运行独立 APP 最简单（也最推荐）的方式是使用 Docker。

只需确保 Docker 安装在你的机器上，之后输入下列命令即可：

```docker
docker run -it --rm ghcr.io/luckperms/luckperms
```

这将会启动一个命令行界面，就像你将它放在服务器中运行一样。
![img](images/standalone-1.png)

你可以使用[环境变量](configuration.md)来配置你的数据库地址/用户名/密码。

你也可以使用 Docker Compose。创建一个叫 `docker-compose.yml` 的文件并复制以下内容：

```YAML
version: "3.8"
services:
  luckperms:
    image: ghcr.io/luckperms/luckperms
    # Uncomment if your database is running on the same host
    #extra_hosts:
    #  - "database:host-gateway"
    environment:
      LUCKPERMS_STORAGE_METHOD: mysql
      LUCKPERMS_DATA_ADDRESS: database:3306
      LUCKPERMS_DATA_DATABASE: minecraft
      LUCKPERMS_DATA_USERNAME: root
      LUCKPERMS_DATA_PASSWORD: passw0rd
```

* 使用 `docker compose up -d` 运行应用
* 使用 `docker compose logs -f luckperms` 浏览控制台
* 使用 `docker compose exec luckperms send <命令>` 发送命令
* 使用 `docker compose down` 停止应用

## LuckPerms REST API（面向开发者）

LuckPerms REST API 是一个可以在独立应用（上述提及）中使用的“拓展”。

它允许其他程序、应用或脚本简单地读取/修改/写入 LuckPerms 数据，而无需与数据库直接交互。

更多信息与使用 API 的教程，请见：

* [`LuckPerms/rest-api`](https://github.com/LuckPerms/rest-api) 的 Github 仓库 & README 文件
* [`API 规范`](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/LuckPerms/rest-api/main/src/main/resources/luckperms-openapi.yml)

## 独立应用内拓展（面向开发者）

你也可以为独立应用创建自己的“类插件”Java 拓展，并在启用时自动载入它们！

它非常简单：

1. 在 jar 的底层目录创建一个叫 `extension.json` 的文件，并将下文复制进去：
    ```JSON
    {"class": "com.example.extension.MainClass"}
    ```
    （将其替换为你的主类！）
2. 创建一个继承了 `import net.luckperms.api.extension.Extension` 的主类。它应该是一个无参数的构造函数，或者是只接受 `net.luckperms.api.LuckPerms` 实例的构造函数。

完成！将你的 jar 文件放入 extensions 文件夹即可。