# 与 UltimateShop 挂钩

## 经济插件

添加一个继承了 `AbstractEconomyHook` 的新类。

``` Java
public class YourClassName extends AbstractEconomyHook {

    public YourClassName() {
        super("插件名称");
    }

    @Override
    public double getEconomy(Player player, String currencyID) {
        // 此处填入代码.
    }

    @Override
    public void takeEconomy(Player player, double value, String currencyID) {
        // 此处填入代码.;
    }

    @Override
    public void giveEconomy(Player player, double value, String currencyID) {
        // 此处填入代码.
    }
}
```

注册至我们的挂钩管理器。

``` Java
HookManager.hookManager.registerNewEconomyHook("插件名称", new YourClassName())
```

## 物品插件

与经济插件相似，因此不作赘述。