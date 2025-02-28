# 命令
插件命令的简单解释

## 概览

所有 Oraxen 都以同一内容开头，即 `oraxen`。如果你不想这么麻烦，可以将其替换为 `/oxn`，甚至更短的 `/o`。

在本章节的教程中我们会使用最短的缩写 `/o`，如果这个简写出于各种原因不能使用，你仍可以输入 `/oxn` 或 `/oraxen` 使用插件功能。

## 获取物品

### 用于测试

这个方法最大的好处是它允许你一次性浏览所有物品，就像创造模式那样高效（只需点击即可让物品进入物品栏）。但你不能通过这个功能将物品给予其他玩家（例如商店中不能使用这个命令作为给予玩家对应物品的操作）

**命令用法：** `/oraxen inventory`

**所需权限：**

```
oraxen.command.inventory.view # 允许访问全物品界面
oraxen.command.inventory.give # 允许从这个界面中拿出物品
oraxen.command.inventory.* # 包含上两条权限的功能
```

#### 正确给予

当你想要给予玩家物品时，使用这条命令才是对的。若目标的背包已满，则物品会掉在地上。

**命令用法：**

```
/oraxen give <玩家> <物品名称> <数量> # 给予玩家指定数量的物品
```

### 修复

#### 修复单个物品

这个命令可以修复主手持有的物品。你可以在设置中决定 Oraxen 是否只修复使用了它的耐久系统的物品，或是同样允许修复原版的耐久物品。

**命令用法：**

```
/oraxen repair hand # 修复手中的物品
```

**所需权限：**

```
oraxen.command.repair # 允许使用 /o repair 命令
```

#### 修复背包内所有物品

这个命令可以修复背包内的所有物品（包括装备栏）。你可以在设置中决定 Oraxen 是否只修复使用了它的耐久系统的物品，或是同样允许修复原版的耐久物品。

**命令用法：**

```
/oraxen repair all # 修复所有的物品（背包内）
```

**所需权限：**

```
oraxen.command.repair # 允许使用 /o repair hand 命令
oraxen.command.repair.all # 允许使用 /o repair all 命令
```

## 管理配方

这个命令能通过配方管理器在游戏内添加新的合成表。更多信息可见“配方”章节。

![img](images/image.png '通过命令 /o recipe show all 显示的配方')


**命令用法：**

```
/oraxen recipe builder <构建器> # 创建 <构建器> 类型的配方并打开
/oraxen recipe save <配方> # 以 <名称> 为名称保存配方
/oraxen recipe show all # 显示载入的配方
/oraxen recipe show <配方> # 显示指定配方
```

**所需权限：**

```
oraxen.command.recipes # 允许你通过 /o recipes 命令创建新配方
```

## 打包

这条命令允许你与 Oraxen 纹理包交互：发送指定信息来从网络下载纹理包，或直接从游戏中载入。

**命令用法：**

```
/oraxen pack send <玩家> # 在游戏内将纹理包发送给 <玩家>
/oraxen pack msg <玩家> # 向 <玩家> 发送指定消息
```

**所需权限：**

```
oraxen.command.pack # 允许使用 /o pack 命令
```

## 物品信息

这个命令允许你输出物品信息与自定义模型数据 ID。

**命令用法：**

```
/oraxen iteminfo <物品名称> # 输出请求的物品信息
```

**所需权限：**

```
oraxen.command.iteminfo # 允许使用 /o iteminfo 命令
```

## 重载

这个命令允许你快速而安全地重载 Oraxen 配置（注意不能使用诸如 Plugman 的管理插件重载 Oraxen）。当前尚不支持重载已注册的配方。

## 用法

```
/oraxen reload all # 重载物品配置，重载配方配置，重新生成纹理包并上传
/oraxen reload items # 重载物品配置
/oraxen reload pack # 重新生成纹理包并上传
/oraxen reload recipes # 重载配方配置
```

**所需权限：**

```
oraxen.command.reload # 允许使用 /o reload 命令
```

## 调试

我希望你永远不会用到这条命令。但如果你真的在使用 Oraxen 期间遇到了漏洞，我（此指作者）很可能会要求你执行这个命令来获取有关的更多信息。

**命令用法：**

一般需根据实际情况使用，且可能会随 Oraxen 更新而更新。我会在帮助你的时候解释清楚这些的。

**所需权限：**

```
oraxen.command.debug # 允许使用 /o debug 命令
```