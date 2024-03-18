# 配置文件

spark 的配置文件非常简单。大多数使用本插件的用户不需要动这些默认设置。正因如此，配置文件不是自动生成的。

若要修改默认设置，你需要自行创建配置文件。配置文件的名称为 `config.json`，且应当放在 spark 文件夹中。

## 选项

下文为配置文件中可用的设置项。

### `backgroundProfiler`

是否在后台运行健康记录。

当设置为 true 时，spark 会在服务器/客户端/群组开启时便进行性能健康记录。报告可通过命令正常上传。该设置的默认值为 `true`。

示例
```JSON
{
    "backgroundProfiler": true
}
```

### `backgroundProfilerInterval`

性能健康记录采样的时间间隔。默认值为 `10`（毫秒）。

示例
```JSON
{
    "backgroundProfilerInterval": 10
}
```

### `backgroundProfilerEngine`

性能健康记录所使用的引擎。

默认为 `"async"`，但也可以写 `"java"`。

示例
```JSON
{
    "backgroundProfilerEngine": "async"
}
```

### `viewerUrl`

查询命令输出内容时使用的网址。

数据“代码”会被加在链接后，所以这里填入的链接应当总是以 `/` 符号结尾。

默认值为 `"https://spark.lucko.me/"`。

示例
```JSON
{
    "viewerUrl": "https://spark.lucko.me/"
}
```

### `bytebinUrl`

健康报告和堆转储摘要上传所使用的网站。与上一条设置相似，这里填入的链接应当总是以 `/` 符号结尾。

默认值为 `"https://spark-usercontent.lucko.me/"`。

示例
```JSON
{
    "bytebinUrl": "https://spark-usercontent.lucko.me/"
}
```

### `bytesocksUrl`

用于与 spark 报告浏览器交互的 bytesocks 实例域名。

默认值为 `"spark-usersockets.lucko.me"`。

示例
```JSON
{
    "bytesocksUrl": "spark-usersockets.lucko.me"
}
```

### `overrideTpsCommand`

是否让 spark 覆盖默认的 TPS 命令。该设置只在 Bukkit 系服务端上有效。

默认值为 `true`。

示例
```JSON
{
    "overrideTpsCommand": true
}
```

### `disableResponseBroadcast`

是否禁止 spark 向所有在线管理员（拥有使用 spark 必要权限的玩家）发送命令输出。

默认值为 `false`。

示例
```JSON
{
    "disableResponseBroadcast": false
}
```