# 配置服务器

自 LibreLogin **v0.12.0** 以来，插件便允许配置强制端口。在你首次打开配置文件时，这部分配置会看起来像这样：

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
# 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。
# 配置允许设置强制端口。在 "root" 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.
# 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts
lobby {
    root=[
        lobby1,
        lobby0
    ]
}
```

## 简单配置

大多数人不想要使用强制端口，所以只需将所有服务器放入“**root**”部分下即可。默认配置中可见参考。

## 强制端口搭建

这不能简单讲明白，详细请看下文的示例。

示例中的情境表示，从“bedwars.myserver.com”进入的玩家会被传送至 **bedwars-hub-0** 或 **bedwars-hub-1**。其他玩家则会被传送至 **lobby0** 或 **lobby1**。

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
# 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。
# 配置允许设置强制端口。在 "root" 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.
# 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts
lobby {
    root=[
        lobby1,
        lobby0
    ],
    bedwars§myserver§com=[
        bedwars-hub-0,
        bedwars-hub-1
    ]
}
```