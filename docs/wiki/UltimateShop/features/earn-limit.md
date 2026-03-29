# 🌈 收益限制

## EconomyLimit

* EconomyLimit 是一个基于 Vault 经济接口的收益限制插件。 它通过字节码注入拦截经济插件的加钱方法，统计玩家获得的收益，并按照你配置的规则进行限制。

* 当玩家在某个规则周期内达到收益上限后，超出的金额不会直接消失，而是自动转入插件提供的虚拟银行。 玩家可以之后手动提取虚拟银行中的金额，但提取行为依然会计入收益统计，如果当前规则已经超限，则无法提取。

* 请注意：使用经济插件自身的 pay、give 等指令交易可能不会被插件检测到，因为这些经济插件内部操作可能不会经过 Vault。

### 插件支持：

* 多条收益规则同时生效
* 每条规则独立重置周期
* 条件化限额
* 虚拟银行存取
* 多语言显示
* SQLite / MySQL / PostgreSQL / H2 数据库存储
* Paper / Spigot 双平台文本兼容
* display-name 使用 {lang:...} 按玩家语言动态显示

[点击下载](https://www.spigotmc.org/resources/economylimit-limit-your-player-earnings-by-anyway-daily-weekly-monthly-1-20-1-21-11.133458/)