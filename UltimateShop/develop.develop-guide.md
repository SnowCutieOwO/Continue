# 开发教程

## 获取商店对象

``` Java
ConfigManager.configmanager.shopConfigs.get(shopID);
```

## 获取物品对象

``` Java
ObjectShop shop = ConfigManager.configmanager.shopConfigs.get(shopID);
if (shop == null) {
  return;
}
ObjectItem item = shop.getProduct("TEST");
List<ObjectItem> items = shop.getProductList();
```

## 发起购买物品请求

``` Java
BuyProductMethod.startBuy(Inventory inventory, String shop, String product, Player player, boolean quick, boolean test, int multi);
```

* `inventory` 为 Bukkit 界面对象，对于玩家的界面，请使用 `player.getInventory()` 方法。
* `shop` 为商店 ID。
* `product` 为物品 ID。
* `quick` 表示是否在购买后发送消息（若在 `config.yml` 中启用 `send-message-after-buy` 选项，则消息仍会发送）。
* `test` 表示是否从玩家处取走物品，若你不知道玩家是否有足够的物品，请填入 `true`。
* `multi` 为单次交易次数，默认为 `1`。

## 发起出售物品请求

``` Java
SellProductMethod.startSell(Inventory inventory, String shop, String product, Player player, boolean quick, boolean test, boolean ableMaxSell, int multi);
```

* `ableMaxSell` 表示在 `multi` 给定次数交易无法完成时，是否改为玩家能够出售的最大次数。适用于全部出售功能。

## 获取玩家缓存对象

``` Java
CacheManager.cacheManager.playerCacheMap.get(player);
```

能够获取玩家的购买次数、出售次数等数据。

## 获取服务器缓存对象

``` Java
CacheManager.cacheManager.serverCache;
```