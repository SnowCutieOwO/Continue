# 兼容性

ExcellentEnchants 以**数据驱动**的附魔与**无感**集成至服务器为特色，所有新增附魔都在原版命令、其他插件和**没有兼容性补丁的** Spigot/Paper API 中“可见”。

与其他自定义附魔插件不同的是，ExcellentEnchants 的附魔**原生支持所有**原版机制，如附魔台、铁砧、村民交易、钓鱼、战利品表等。因此它没有硬编码的补丁。

::: danger

**不要**尝试在卸载 ExcellentEnchants 后运行服务器，否则所有物品会永久丢失新附魔。

:::

## 命名空间

默认情况下新附魔的注册命名空间为 `excellentenchants`。

若要在命令和其他插件的配置中使用 **ExcellentEnchants** 的附魔，你需要按 `命名空间:附魔名称` 的格式填写 —— 例如 `excellentenchants:tunnel`。

::: warning

如果你不能使用自定义命名空间，你可以在 `distribution.yml` 配置文件中强制其使用原版的 `minecraft` 命名空间。

***这个选项不稳定，可能会引发潜在的问题。***

:::