# spark 的原数据

有些人可能需要用到 spark 获取的原数据，通常用于对接机器人或其他用途。本章节将会详细讲述如何获取这些东西。😎

## JSON

假设你有一个 spark 报告链接：`https://spark.lucko.me/abc123`

收集本次会话的原始数据最直接的方法就是在链接末尾加上 `?raw=1` 参数并对其发送 HTTP 请求：
```HTTP
GET https://spark.lucko.me/abc123?raw=1
```
你应该会得到一个类似下文的 JSON 结构文本：
```JSON
{
  "metadata": {
    "user": {
      "type": 1,
      "name": "Luck",
      "uniqueId": "c1d60c50-70b5-4722-8057-87767557e50d"
    },
    "startTime": 1678186955567
    // 诸如此类...
}
```

你也可以在参数末尾添加诸如 `&path=some.jsonpath.here` 等内容按 [JSON 路径](https://github.com/json-path/JsonPath)进行过滤。
```HTTP
GET https://spark.lucko.me/abc123?raw=1&path=metadata.platform
```
```JSON
{
  "type": 0,
  "name": "Bukkit",
  "version": "git-Paper-386 (MC: 1.19.3)",
  "minecraftVersion": "1.19.3",
  "sparkVersion": 2
}
```
> **注意**    
> 默认情况下，这些节点只会返回与会话有关的**元数据**。大多数情况下这是够用的。  
> 但是如果你真的想要抽样/堆转储数据，首先，你可以自己下载/判断**原**数据。能省我很多事！（详见下文）  
> 如果不行，你也可以在链接末尾加上参数 `&full=true` 来使其返回**完整**内容，但是要注意，这可能会让获取的 JSON 大小达到 MB 级别，从而导致读取困难！

## 原数据

spark 所使用的存储服务称作 [bytebin](https://github.com/lucko/bytebin)
spark 所使用的指定接口为 https://spark-usercontent.lucko.me/

若要收集指定报告中的原数据（如 `https://spark.lucko.me/abc123/`），需要向用户内容端发送一个 GET 的 HTTPS 请求：
```HTTP
GET https://spark-usercontent.lucko.me/abc123
```
若成功发送，则你会收到一个类似下文的信息：
```HTTP
HTTP/2 200
Content-Type: application/x-spark-sampler
Last-Modified: Tue, 07 Mar 2023 13:16:44 GMT
Cache-Control: public, max-age=604800, no-transform, immutable

<body>
```
spark 目前有两种内容类型：

* `application/x-spark-sampler` - 抽样数据
* `application/x-spark-heap` - 堆数据

你可以根据你想要取得的内容使用抽样器或堆模式来分析所获数据。

### Protobuf 格式

从 spark“客户端”（即插件/模组本身）传输过来的原数据与 spark 报告浏览器是通过一种名为 [protobuf](https://protobuf.dev/)（又称 Protocol Buffers[^1]）的格式进行编写的。若要正确判断数据，你就需要用到 protobuf 模式。

目前为止有两种模式（可以判断同种数据）：


* spark（Java）模式：https://github.com/lucko/spark/tree/master/spark-common/src/main/proto/spark
* spark-viewer（TypeScript）模式：https://github.com/lucko/spark-viewer/tree/master/proto

`
### 示例代码

这里有一个用 NodeJS 编写的简易 CLI，可以帮助你快速理解原数据的判断方式：https://github.com/lucko/spark2json

（其实这就是判断上述 JSON 格式的代码，😛）

## 另见

* 有关 Protocol Buffers 的介绍：https://zhuanlan.zhihu.com/p/36554982

[^1]: 
    Protocol Buffers 是一种轻便高效的结构化数据存储格式，可以用于结构化数据序列化，很适合做数据存储或 RPC 数据交换格式。它可用于通讯协议、数据存储等领域的语言无关、平台无关、可扩展的序列化结构数据格式。
