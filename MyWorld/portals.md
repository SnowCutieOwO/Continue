# 1.插件介绍
除了命令之外，本插件还提供了最简单的跨世界传送解决方案： 实际的传送门。只需走进传送门，就能从一个世界走到另一个世界。要制作传送门，只需在一个看起来像传送门的方块结构附近放置一个[portal]标志。

有三种传送门可供选择：
- Nether portals
> 下界传送门
- End portals
> 末地传送门
- Water portals
> 水幕传送门
# 2.默认传送门目的地
MyWorlds 传送门是使用告示牌创建的。如果想让玩家创建的下界传送门或自然生成的末地传送门将玩家传送到某个目的地，请使用 /world endportal 和 /world netherportal 进行配置。更多信息请参阅命令页面。
## 2.1原版默认值
下界传送门会自动将玩家从 worldname 传送到 worldname_nether，或传送回来。同样，在 worldname 和 worldname_end 之间也会自动设置末地传送门。如果这不起作用，请在世界中运行以下命令，将可选选项应用于 (/tpp worldname)。假设世界名称为 "overworld"、"nether_world "和 "end_world"。将它们替换为你的世界的名字。

| 出发地 | 指令 |说明|
|-----|----|--|
| overworld<br> 主世界    | /mw netherportal destination nether_world<br>/mw netherportal mode nether_link<br>/mw endportal destination end_world<br> /mw endportal mode end_platform  |当玩家进入主世界的下界传送门时，他们在下界的坐标应该是主世界坐标值除以8（下界链接模式）<br>当玩家进入末地传送门时，他们应该传送到末地的黑曜石平台上  |
| nether_world<br> 下界    | /mw netherportal destination overworld<br>/mw netherportal mode nether_link   | 当玩家进入下界传送门时，他们到达主世界的坐标应该是下界坐标乘8（下界链接模式） |
| end_world<br> 末地    | /mw endportal destination overworld<br>/mw endportal mode respawn   | 当玩家进入末地传送门时，他们会在床或世界出生点重生 |

## 2.2Nether Link权限
如果您将默认传送门模式设置为下界链接（nether_link），那么它将在目的地世界（x8 坐标处）创建一个新的下界传送门。创建时，玩家需要以下权限（默认为 true）：**myworlds.world.linknether**

# 3.启用
必须在 MyWorlds 的 config.yml 中启用此传送门行为后才能使用。如果传送门告示牌不起作用，请先检查所有相关的传送门类型是否都已启用：
```yml
# 是否启用不同类型的传送门
# 禁用时MyWorld将不再处理传送门逻辑
enabledPortals:
  # 打开或关闭对下界传送门传送的处理
  # 禁用时使用原版逻辑
  netherPortal: true
  # 打开或关闭对末地传送门传送的处理
  endPortal: true
  # 是否启用水幕传送门
  waterPortal: true
```

# 4.使用方法
## 4.1下界传送门和末地传送门
标准的下界传送门和末地传送门也可以用作传送门。对于自定义的框架或形状，可以使用此命令获得特殊物品来放置它们：

提供放置末地/下界传送门的道具
| 命令 | 权限  |
|--|--|
| /world giveportal [end/nether] | 	myworlds.world.giveportal |


## 4.2水幕传送门
要使用水幕作为传送门，水的周围必须至少有两面是实体方块，至少有一面是露天的。这是为了防止随意的湖泊成为传送门。在地面上挖一个洞，可以防止水向外涌出。水被算作实体方块，因此它们可以无限宽。

## 4.3传送门标志
![Signtemplate.png](../../_resources/Signtemplate.png)

每一行：
- 第一行：传送门标识 `[portal]`
- 第二行是传送门名称。你可以用这个名称传送到这个传送门，例如用 /tpp [名称]
- 第三行是要传送到的传送门或世界名称。该名称在进入传送门时使用
- 第四行，目的地显示名称（留空则使用第三行的传送门/世界名称）

例如：
![example.png](../../_resources/example.png)

### 4.3.1告示牌位置
玩家会被传送到传送门告示牌上方的第一个空地上。你可以把传送门告示牌放在地下，这样玩家就会被传送到上方的实体块上面。把传送门告示牌放在传送门本身的下方是安全的，因为这样可以防止循环传送。

![example1.png](../../_resources/example1.png)
>传送门告示牌放置在下界传送门下方，可将玩家传送到传送门内


## 4.4清理传送门
如果你想删除丢失的传送门，可以从以下地址删除保存的传送门数据：root\plugins\My Worlds\portals.txt
## 4.5传送到传送门
请参阅命令页面中的 /world teleport 和 /tpp 命令
## 4.6Use with Traincarts与火车一起使用
Traincarts 插件支持这种用于创建（跨世界）火车传送器的告示牌。[更多信息请参阅本页。](https://wiki.traincarts.net/p/TrainCarts/Signs/Teleporter)

# 5.重新加入传送门
重新加入传送门是模仿 /world rejoin 命令的特殊传送门。重新加入意味着玩家会被传送到告示牌上写出的世界的最后一个位置。您必须在最后一行指定玩家应重新加入哪个世界。

![rejoin.png](../../_resources/rejoin.png)


要确保重新加入 'world' 也能重新加入 'world_nether'（如果玩家最后一次是在阴间），请参阅最后位置命令来合并世界。这样，当玩家重新加入被合并的其中一个世界时，也会重新加入他们最后所在的世界。

# 6.附加选项
使用 `/world setportaloption <portal name> <option> <value>` 命令可以配置告示牌志上没有的附加选项。如果你想为每个传送门设置怪物和物品是否可以通过传送门，而不是依赖 config.yml 中的全局选项，可以在这里为每个传送门设置：
```yml
/world setportaloption hub playersonly [no/yes]
```

此处命令的详细用法见 14.1 MyWorld Wiki翻译 - 命令 ->11.设置默认的下界传送门或末地传送门行为
