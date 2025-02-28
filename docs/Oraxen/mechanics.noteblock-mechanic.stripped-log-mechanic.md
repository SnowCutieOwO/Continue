# 去皮木头机制

::: info 提示
仅对 1.134.0+ 的 Oraxen 有效。
:::

## 这是什么？

这个机制允许你为自定义树木去皮，就像原版的那样。

### 配置

```YAML
Mechanics:
  noteblock:
    custom_variation: 2
    logStrip:
      stripped_log: stripped_log # 去皮后换成的方块
```

#### 去皮后掉落

```YAML
Mechanics:
  noteblock:
    custom_variation: 2
    logStrip:
      stripped_log: stripped_log # 去皮后换成的方块
      drop: bark # 右键后额外掉落的物品
```