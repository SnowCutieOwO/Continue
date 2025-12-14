# 🌈 动态标题 - 仅付费版

## 条件

* 服务器需要安装 [packetevents](https://modrinth.com/plugin/packetevents) 插件。
* 仅支持 Paper 及其下游分支。
* 仅在 1.21.8 通过测试，其他版本可能存在未知问题。

## 点击更新

将 `config.yml` 下 `menu.title-update.enabled` 的值设置为 `true`。之后，每次点击菜单中的按钮都会刷新标题，可以一并更新标题中包含的变量。

``` YAML
  # 仅付费版
  title-update:
    enabled: true # <--- 设置为 true
    black-dynamic-title: true
    resend-items-pack: false
```

## 物品闪烁

Minecraft 客户端本身不支持在打开界面后修改它的标题，因此你会看到物品在快速闪烁，这是我们无法解决的问题。你可以尝试将 `config.yml` 中的 `menu.title-update.resend-items-pack` 设置为 true。但这也只能略微缓解这种情况。

## 动画

你可以在菜单设置中设置动态标题实现动画，目前仅支持 Java 版的菜单。

``` YAML
title: '物品商店 %localtime_time%' #<--- 旧标题
dynamic-title: # <--- 新的动态标题
  enabled: true
  titles:
    - "§aUltimateShop §7| §f欢迎来到 §e服务器商店§f!"
    - "§bUltimateShop §7| §f欢迎来到 §e服务器商店§f!"
    - "§dUltimateShop §7| §f欢迎来到 §e服务器商店§f!"
  interval: 45
```

所有菜单都可以增加这部分配置。但在此之前，你需要将 `config.yml` 的 `menu.title-update.enabled` 设置为 `false`。如果可以，还需要将 `config.yml` 的 `menu.title-update.black-dynamic-title` 设置为 `true`。这个功能可能导致物品闪烁。略微增加间隔并使用重发物品包可以略微缓解这种情况。