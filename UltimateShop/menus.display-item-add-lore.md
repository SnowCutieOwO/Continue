# 🥉 额外物品描述

## 配置

可以在 `config.yml` 下设置通用的额外物品描述。

``` YAML
add-lore:
    - '@n '
    - '@a&e购买价格: {buy-price}'
    - '@b&e出售价格: {sell-price}'
    - '@c&#FF7777玩家购买限制: {buy-times-player}/{buy-limit-player}'
    - '@d&#FF7777全服购买限制: {buy-times-server}/{buy-limit-server}'
    - '@e&#FF7777玩家出售限制: {sell-times-player}/{sell-limit-player}'
    - '@f&#FF7777全服出售限制: {sell-times-server}/{sell-limit-server}'
    - '@g '
    - '@g&#ff3300c不能再买更多了!'
    - '@g&8刷新时间: {buy-refresh-player}'
    - '@i '
    - '@i&#ff3300已售罄!'
    - '@i&8刷新时间: {buy-refresh-server}'
    - '@h '
    - '@h&#ff3300不能再卖更多了!'
    - '@h&8刷新时间: {sell-refresh-player}'
    - '@j'
    - '@j&#ff3300不能再向服务器出售更多了!'
    - '@j&8刷新时间: {sell-refresh-server}'
    - '@n '
    - '@a{buy-click}'
    - '@b{sell-click}'
    - '@k&#FFFACDShift+鼠标左键 选择数量!'
    - '@b&#FFFACD键盘 Q 键 选择全部!'
```

## 单物品设置

各个商品也可以独立设置额外物品描述，只需在物品配置中添加 `add-lore` 部分即可。详见“[商店](shops.shops.md)”一节中的物品 B 示例。

## 前缀 - 条件符

每一行以 `@+小写字母` 开头的描述都会被判断为条件行。我们只会在满足条件时显示这行文本。

* `@a` - 该物品拥有购买价格。（意味着该商品拥有 `buy-prices` 部分配置）
* `@b` - 该物品拥有出售价格。（意味着该商品拥有 `sell-prices` 部分配置）
* `@c` - 该物品拥有玩家购买限制。（意味着该商品拥有 `buy-limits.player` 设置）
* `@d` - 该物品拥有全服购买限制。（意味着该商品拥有 `buy-limits.global` 设置）
* `@e` - 与 @c 相似，但是是出售相关的。
* `@f` - 与 @d 相似，但是是出售相关的。
* `@g` - 该商品已经到达了玩家购买限制。
* `@h` - 该商品已经到达了玩家出售限制。
* `@i` - 该商品已经到达了全服购买限制。
* `@j` - 该商品已经达到了全服出售限制。
* `@k` - 玩家**没有**打开增量购买菜单且该物品启用了增量购买功能。
* `@l` - 该商品正处于购买冷却状态。
* `@m` - 该商品正处于出售冷却状态。
* `@n` - 买/卖价（对应点击类型）有效。如购买的点击类型需要设置买价。

## 后缀

* `-b` - 该行只会对 Java 版客户端的玩家显示。
* `-m` - 该行只会在增量购买菜单中显示。
* `-i` - 本行内的条件取反。

若你需要使用多个后缀，则你可以按照这样的顺序填入：`-i-m-b`

## 换行符

使用 `;;` 表示换行，对于需要使用多行表示价格的用户来说很有用。

``` YAML
placeholder:
  price:
    split-symbol-any: ';;' # <--- 在 config.yml 中修改
    split-symbol-all: ';;' # <--- 在 config.yml 中修改
    unknown: "未知"
```