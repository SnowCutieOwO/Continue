# 保护查询

若要查询保护，标志 `Flags.BUILD` 可通过在“[标志计算](worldguard-api.working-with-regions.flag-calculation.md)”中的方法进行测试。

::: warning
区域查询不检查玩家是否拥有绕过权限。这取决于你使用的情况，你可能需要分开检查这些内容。
```Java
boolean canBypass = WorldGuard.getInstance().getPlatform().getSessionManager().hasBypass(player, player.getWorld());
```
:::

::: info 示例：通过缓存队列查询建筑权限
```Java
LocalPlayer localPlayer = WorldGuardPlugin.inst().wrapPlayer(player);
Location loc = new Location(world, 10, 64, 100);
RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
RegionQuery query = container.createQuery();

if (!query.testState(loc, localPlayer, Flags.BUILD)) {
    // 禁止建造
}
```
:::