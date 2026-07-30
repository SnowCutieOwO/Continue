# 通过链接重写与 ApplicationRequestRouting，在 IIS 上运行 Dynmap 网页服务

Dynmap With IIS Using URL Rewrite and applicationrequestrouting thanks to kekec852

本章节假设：

* 你对 IIS 服务器的配置与管理有基础了解。
* 网页服务器的根目录位于 `C:\Inetpub\wwwroot\`。
* 你的 IIS 和游戏服务器位于同一台机器上。
* 你已经下载安装了链接重写与 ApplicationRequestRouting（<http://www.iis.net/downloads/microsoft/application-request-routing>，<http://www.iis.net/downloads/microsoft/url-rewrite>）。

开始：

* 首先，新建 `C:\Inetpub\wwwroot\dynmap\` 目录。
* 将 dynmap 文件夹下的 web 文件夹内容复制到 `C:\Inetpub\wwwroot\dynmap\`。

你有两个选择：

* 新建 `C:\Inetpub\wwwroot\dynmap\tiles\` 文件夹，编辑 `configuration.txt`，确保 `tilespath` 设置正确指向 `C:\Inetpub\wwwroot\dynmap\tiles\`。

``` YAML
# The path where the tile-files are placed.
tilespath: C:\Inetpub\wwwroot\dynmap\tiles
```

或者

* 右键 Dynmap 文件夹，点击“新建虚拟文件夹”，在 IIS 内新建一个名为 `tiles`（别称）且指向 Dynmap 插件文件夹中的 `web/tiles`。

重写部分：

* 在 IIS 中选择 Dynmap 文件夹，点击 `URL Rewrite`（链接重写按钮），`Add Rule(s)`（添加规则）；选择反向代理。在 `Inbound Rule`（入站规则）处填 `127.0.0.1:8123` 并点击完成。当弹出窗口询问是否启用反向代理时，选“是”。浏览你的 Dynmap `web` 文件夹（`C:\Inetpub\wwwroot\dynmap\`），打开 `web.config`，将内容修改为如下内容：

``` XML
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <clear />
                <rule name="ReverseProxyInboundRule1" stopProcessing="true">
                    <match url="up/(.*)" />
                    <action type="Rewrite" url="http://127.0.0.1:8123/up/{R:1}" />
                </rule>
				<rule name="ReverseProxyInboundRule2" stopProcessing="true">
                    <match url="standalone/(.*)" />
                    <action type="Rewrite" url="http://127.0.0.1:8123/standalone/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

另外，部分 IIS（一般为 7.x）不会自动将 MIME 类型分配给 Dynmap 所需的 `*.json` 文件（尝试载入文件时会遇到 406 错误，例如标记点 API 使用时会遇到）。解决方法见此：<http://support.microsoft.com/kb/942050>。将 MIME 类型为 `json` 格式拓展分配 `application/json` 即可。

另外，有关如何让 IIS 6 与 7 正确处理 JSON 文件的方法，请见：<http://www.sencha.com/forum/showthread.php?33266-Some-Problem-with-JSON&p=229858&viewfull=1#post229858>。