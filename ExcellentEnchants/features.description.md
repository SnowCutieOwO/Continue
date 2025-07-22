# 描述

ExcellentEnchants 能够在物品上增加附魔的简要描述。

附魔描述基于发包，为客户端侧功能，物品的实际数据不会受到影响。

你可以在 **config.yml** -> `Description` -> `Enabled` 处切换该功能的开关。

::: info

描述在**创造模式**下**不会**显示，此时的物品不经过有效性检查，服务器会强行接受并覆盖修改后的物品。

:::

::: warning

使用此功能需要安装 [PacketEvents](https://www.spigotmc.org/resources/80279/) 或 [ProtocolLib](https://www.spigotmc.org/resources/1997/)。

:::