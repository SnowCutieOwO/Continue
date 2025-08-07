# 🌐 多服同步 - 仅付费版

* 因为 Velocity 的 BungeeCord 插件信道功能可以兼容旧版，使用 Velocity 的服主理应也可以使用该功能。
* 将 Spigot 子服下的 `spigot.yml` 中 `bungeecord` 项设置为 `true`。
* 将代理端的 `config.yml` 中 `ip_forward` 项设置为 `true`。
* 将 UltimateShop 的 `config.yml` 中 `databse.enabled` 项设置为 `true`，然后设置你的数据库设置。
* 将 UltimateShop 的 `config.yml` 中 `bungeecord-sync.enabled` 项设置为 `true`。
* 和大部分插件一样，UltimateShop 不会主动验证服务器间数据及其同步过程。如果你的 BungeeCord 出现了数据同步类问题，可以尝试提高 `config.yml` 文件中的 `cache.load-delay` 值。如果你的服务器规模庞大，对数据同步要求较高，那么我们推荐你使用其他插件。