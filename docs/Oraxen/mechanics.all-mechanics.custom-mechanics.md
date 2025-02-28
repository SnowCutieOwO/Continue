# 自定义机制
这个机制允许你实现高度自定义的机制而无需接触编程

## 它如何生效？

这个机制仅对物品生效，不对方块/家具生效。

对于那些内容，请参阅[点击动作（clickAction）机制](mechanics.all-mechanics.clickaction-mechanic.md)章节。

本章节提及的机制包含三个主要部分：

**事件**：触发机制的前提？如：对着方块右键点击

**条件**：触发机制所要满足的添加。如：拥有某个权限

**动作**：触发后执行的操作。如：执行命令或发送消息

::: info 提示
一个叫做 oneUsage 的额外设置允许让物品仅能单次使用。
:::

## 较为全面的示例配置

```YAML
Mechanics:
  custom:
    test:
      one_usage: false
      event: "CLICK:right:all"
      conditions:
        - "HAS_PERMISSION:example.permission"
      actions:
        - "[console] give <player> cooked_beef 1"
```

在这个示例中，子配置 `test` 定义了一个在玩家（对着方块或空气）右键点击触发的自定义机制。

如果玩家拥有权限 `example.permission`，那么控制台将会执行给定的命令，其中的 `<player>` 会被替换为触发机制的玩家名称。

物品不会被消耗（因为 `oneUsage: false`）。

## 可用事件

### CLICK:点击类型:目标类型

在点击物品时调用。

**点击类型：**`[ right, left, all ]`

**目标类型：**`[ block, air, all ]`

### DROP

在你丢弃物品时调用。

### PICKUP

在你拾起物品时调用。

### BREAK

在玩家损坏物品（用尽耐久）时调用。

### EQUIP

在玩家装备物品时调用。

### UNEQUIP

在玩家取下装备的物品时调用。

### INV_CLICK

在玩家在背包内点击该物品时调用。

### DEATH

在玩家死亡后非正常地掉落时调用。

## 可用动作

### COMMAND:发送者:命令

**发送者：**`[ console, player ]`

**命令：**`所要执行的命令。可以在此使用 <player> 变量。`

### MESSAGE:内容

**内容：**`发送消息的内容（支持 MiniMessage 格式）。`

### ACTIONBAR:内容

**内容：**`发送消息的内容（支持 MiniMessage 格式）。`