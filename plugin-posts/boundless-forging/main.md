<!-- resoource:info_spigot -->
---
resource-id: '114809'
native-version: ['1.20']
tested-version: ['1.20']
source-code: 'https://github.com/BlurOne-GIT/Boundless-Forging'
---

<!-- resource:description -->

## 运作原理

这个插件尽可能还原原版的铁砧使用方式，所以只需照常使用铁砧即可。所有显示为“过于昂贵！”（安装本插件后就看不到了）的物品最终都会强制修改成只耗费 39 级经验。

## 为什么是 39 级？

在原版 Minecraft，铁砧在出现“过于昂贵”前能收取的最高经验等级是 39 级。若一个物品所需的等级超过了这个数字，插件就会将它扳回 39 级，使得铁砧能够继续使用。在 Spigot 服务端中，虽然配置文本可以修改铁砧使用的等级上限，但客户端看到的铁砧还是会显示“过于昂贵！”。

可惜我并没有找到能修改这个的方法。

## 兼容性

本插件应该能与其他修改了铁砧等级上限的插件兼容。若你发现铁砧出现“过于昂贵！”信息，请将 `config.yml` 中的 `forceMaxRepairCost` 设置为 `true`。