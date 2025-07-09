# 📊 数据

## 数据类型

本插件有 2 种数据类型：玩家数据与服务器数据。

玩家数据包含玩家自身的数据，如每个物品的购买及出售次数、冷却时间等内容。

服务器数据包含物品购买与出售的总次数、出售时间等内容。随机变量的数据也会存储在服务器数据中。

## 保存

对于玩家数据，我们会在玩家离开服务器时自动将玩家数据保存至数据库。

对于服务器数据，我们会在服务器正常关闭时将数据保存。（请不要直接关掉服务器的控制台窗口，你需要使用 /stop 命令）

服务器崩溃后未保存的数据会丢失，因此建议启用自动保存功能。

## 自动保存

你可以使用自动保存功能，这样插件就会间隔一段时间保存数据，防止数据因崩溃而丢失。不推荐将其频率设置得过高，这可能会导致服务器卡顿。你可以在 `config.yml` 中找到如下内容来设置本功能：

``` YAML
auto-save:
  enabled: true
  hide-message: false
  period-tick: 6000 # 单位为刻, 20 刻 = 1 秒
```

## 数据库

你可以在 `config.yml` 中找到如下内容来设置本功能：

``` YAML
database:
  enabled: false
  jdbc-url: "jdbc:mysql://localhost:3306/ultimateshop?useSSL=false&autoReconnect=true"
  jdbc-class: "com.mysql.cj.jdbc.Driver"
  properties:
    user: root
    password: 123456
```