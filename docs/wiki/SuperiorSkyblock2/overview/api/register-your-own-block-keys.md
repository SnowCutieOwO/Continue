# 注册方块键

键系统用于将方块与物品判定为可比较对象，这样就能支持新旧两个版本。注册自定义键之后，你可以为自定义方块赋予自定义键，使其能从相似方块中被分辨。在本教程中，我会制作一个“魔法海绵”的自定义键。

为了实现这个，首先我要调用 `SuperiorSkyblockAPI.getBlockValues().registerKeyParser()` 方法。这个方法需要两个参数：

* `customKeyParser`：我们需要创建的 `CustomKeyParser` 实例。
* `blockTypes`：可被判断器判定的方块列表。

首先，我需要创建一个 `CustomKeyParser` 对象。示例包含两个需要实现的方法：

* `getCustomKey(<位置>)`：处理判断部分。
* `isCustomKey(<键>)`：这个方法用在方块计数菜单中，将自定义键变为其方块形式。

在创建对象并实现基本的判断功能后，代码应当像这样：

``` Java
    private static final Set<Location> powerfulSponges = new HashSet<>();
    private static final Key SPONGE_KEY = Key.of("SPONGE");
    private static final Key POWERFUL_SPONGE_KEY = Key.of("POWERFUL_SPONGE");

    private static final class PowerfulSpongeParser implements CustomKeyParser{

        @Override
        public Key getCustomKey(Location location) {
            /* 所有自定义海绵方块都会存储在 powerfulSponges 中
            因为其中的所有方块一定都是 SPONGE, 所以我可以在它不是特殊海绵时返回普通海绵键名. 反之则会返回我设置的自定义海绵键名. */
            return powerfulSponges.contains(location) ? POWERFUL_SPONGE_KEY : SPONGE_KEY;
        }

        @Override
        public boolean isCustomKey(Key key) {
            // 若键名为插件创建的 "POWERFUL_SPONGE", 那么返回 true.
            return key.equals(POWERFUL_SPONGE_KEY);
        }

    }
```

大功告成！每次我放置一块魔法海绵时，它都会被判定为“POWERFUL_SPONGE”而非普通海绵。这支持显示在计数菜单、价值菜单、价值文件、等级文件以及其他需要显示的地方！