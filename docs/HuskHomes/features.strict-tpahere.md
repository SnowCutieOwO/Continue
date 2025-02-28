# 强制 tpahere

HuskHomes 提供了一个选项来将 `/tpahere` 请求强制化的选项。该功能会使该命令与 `/tphere` 相似。

* `/tpahere` 请求强制化**禁用**：当玩家同意 `/tpahere` 的传送请求后，他们将会在传送预热结束后传送到发出请求玩家的当前位置；
* `/tpahere` 请求强制化**启用**：当玩家同意 `/tpahere` 的传送请求后，他们将会在传送预热结束后传送到发出请求玩家执行命令时所在的位置。

如果你的服务器使用了权限节点来限制玩家在哪里可以使用 `/tpahere` 命令，那么你可能就需要用到本功能。你可以在本插件 [`config.yml`](setup.config-files.md) 中 `general` 的 `strict_tpa_here_requests` 下启用该选项。