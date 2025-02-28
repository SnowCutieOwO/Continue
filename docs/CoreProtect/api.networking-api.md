# 网络通信 API

CoreProtect 网络通信 API 允许客户端通过包获取数据。

|网络通信细节||
|---|---|
|网络通信版本：|1|
|插件版本：|v21.3+|

## 包

服务器只在玩家有 `coreprotect.networking` 权限时进行响应。

## 服务端至客户端

### 数据包

从数据库中读取并发送数据。

* 频道：`coreprotect:data`

|类型：`Int`|1|2|3|4|
|---|---|---|---|---|
||时间：`long`|时间：`long`|时间：`long`|时间：`long`|
||阶段选择器：`UTF`|阶段选择器：`UTF`|返回玩家：`UTF`|返回玩家：`UTF`|
||返回玩家：`UTF`|返回玩家：`UTF`|消息：`UTF`|目标：`UTF`|
||目标：`UTF`|数量：`Int`|签名：`Boolean`||
||数量：`Int`|X：`Int`|X：`Int`||
||Y：`Int`|Z：`Int`|Z：`Int`||
||Z：`Int`|世界名称：`UTF`|世界名称：`UTF`||
||世界名称：`UTF`||||
||是否回滚：`Boolean`||||
||是否为容器：`Boolean`||||
||是否追加：`Boolean`||||

示例（Fabric）：

``` JavaScript
ByteArrayInputStream in = new ByteArrayInputStream(buf.getWrittenBytes());
DataInputStream dis = new DataInputStream(in);
int type = dis.readInt();
long time = dis.readLong();
String selector = dis.readUTF();
String  resultUser = dis.readUTF();
String target = dis.readUTF();
int amount = dis.readInt();
int x = dis.readInt();
int y = dis.readInt();
int z = dis.readInt();
String worldName = dis.readUTF();
boolean rolledback = dis.readBoolean();
boolean isContainer = dis.readBoolean();
boolean added = dis.readBoolean();
```

### 握手包

在玩家注册后发送握手请求。

* 频道：`coreprotect:handshake`
* 是否注册：`Boolean`

## 客户端至服务端

### 握手包

发送握手请求以注册。

* 频道：`coreprotect:handshake`
* 模组版本：`UTF`
* 模组 ID：`UTF`
* CoreProtect 协议：`Int`

示例（Fabric）：

``` JavaScript
PacketByteBuf packetByteBuf = new PacketByteBuf(Unpooled.buffer());
ByteArrayOutputStream msgBytes = new ByteArrayOutputStream();
DataOutputStream msgOut = new DataOutputStream(msgBytes);
msgOut.writeUTF(modVersion);
msgOut.writeUTF(modId);
msgOut.writeInt(coreprotectProtocol);
packetByteBuf.writeBytes(msgBytes.toByteArray());
```

## 调试

### /co network-debug

允许在你注册且拥有对应权限的情况下对网络通信 API 进行调试。

若要使用这个命令，必须先在 CoreProtect 的 `config.yml` 中将 `network-debug` 设置为 `true`。

#### 示例

`/co network-debug <类型>`