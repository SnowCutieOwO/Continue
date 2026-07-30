# 在 IIS 上运行 Dynmap 网页服务

本章节假设：

* 网页服务器的根目录位于 `C:\Inetpub\wwwroot\`。
* 你的 IIS 和游戏服务器位于同一台机器上。
* 你的 IIS 启用了 `ASP.NET`（<http://support.microsoft.com/kb/315122>）。

开始：

* 首先，新建 `C:\Inetpub\wwwroot\dynmap\` 目录。
* 新建 `C:\Inetpub\wwwroot\dynmap\tiles\` 目录。
* 将 dynmap 文件夹下的 web 文件夹内容复制到 `C:\Inetpub\wwwroot\dynmap\`。

你现在应该有一个 `up.asax` 文件位于 `C:\Inetpub\wwwroot\dynmap\`。

* 打开 `configuration.txt`，确保 `tilespath` 设置正确指向 `C:\Inetpub\wwwroot\dynmap\tiles\`：

``` YAML
# The path where the tile-files are placed.
tilespath: C:\Inetpub\wwwroot\dynmap\tiles
```

* 重启游戏服务器。

* 进入游戏服务器，（随便）放置几个方块，使得 Dynmap 重新渲染你的地图。

如果一切正常，你就能在 `C:\Inetpub\wwwroot\dynmap\tiles\` 中找到新生成的 .png 文件。也可以在浏览器里打开 <http://yourwebserver/dynmap/>。它应该能展示地图，但会警告你无法更新（玩家位置与地图更新）。

新建或打开 `C:\Inetpub\wwwroot\dynmap\standalone\config.js` 文件，替换为如下内容：

``` js
    var config = {
      url: {
        configuration: 'up.aspx?path=configuration',
        update: 'up.aspx?path=world/{world}/{timestamp}',
        sendmessage: 'up.aspx?path=sendmessage',
        login: 'up.aspx?path=login',
        register: 'up.aspx?path=register',
        tiles : 'tiles/',
        markers : 'tiles/'
      }
    };
```

刷新浏览器。现在就能正常显示玩家和地图更新了。记得保持更新。

## 问题排查

前往网页服务器位置，在此打开浏览器。前往 <http://localhost/dynmap/up.aspx?path=configuration>，这里会显示你在 `configuration.txt` 中的配置。如果它报错，请根据内容修改配置。如果你不知道怎么做，请进入我们的 IRC 聊天房间或论坛提问。

另外，部分 IIS（一般为 7.x）不会自动将 MIME 类型分配给 Dynmap 所需的 `*.json` 文件（尝试载入文件时会遇到 406 错误，例如标记点 API 使用时会遇到）。解决方法见此：<http://support.microsoft.com/kb/942050>。将 MIME 类型为 `json` 格式拓展分配 `application/json` 即可。

另外，有关如何让 IIS 6 与 7 正确处理 JSON 文件的方法，请见：<http://www.sencha.com/forum/showthread.php?33266-Some-Problem-with-JSON&p=229858&viewfull=1#post229858>。