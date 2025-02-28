# 经济联动
HuskHomes 支持将特定的操作设置为收费。玩家必须持有数量足够的货币才可执行该操作，否则将不予执行。玩家发送命令后，在执行操作之前就会扣款。

## 设置教程

### Spigot & Paper 的安装

::: info 对下列服务端有效：
Spigot、Paper
:::

若要启用经济插件联动，同时安装 [Vault](https://www.spigotmc.org/resources/vault.34315/) 和任意一个支持 Vault 的经济插件。然后，将 `config.yml` 下 `economy` 的 `enabled` 选项值设置为 `true`。

### Sponge 的安装

::: info 对下列服务端有效：
Sponge
:::

若要在 Sponge 服务器上启用经济联动，你需要安装一个通过 Sponge 经济 API 管理玩家经济的模组。然后，将 `config.yml` 下 `economy` 的 `enabled` 选项值设置为 `true`。

### 绕过经济检查

拥有权限节点 `huskhomes.bypass_economy_checks` 将会绕过经济检查，并且可以免费执行原本需要收费的操作。

## 家传送点槽位

当启用经济联动后，玩家将会需要在免费设家数量用完之后付款来解锁额外槽位。

玩家的免费设家次数用完时，插件就会向玩家收费。当免费的最后一个设家槽位被消耗掉时，插件会发送消息提醒该玩家。

你可以在配置文件的 `economy` 下的 `free_home_slots` 设置修改玩家可以拥有的免费设家数量。默认值为 `5`。

## 经济操作

你可以在 `config.yml` 文件的 `costs` 一栏中为下列选项设置所消耗的经济单位。请注意这个设置区域默认只设置了 `additional_home_slot`、`make_home_public` 和 `random_teleport` 的经济消耗，可参照下表设置价格来启用这些操作的收费功能。

### 操作表

|操作种类|操作描述|默认消耗|
|:---|:---|---:|
| `ADDITIONAL_HOME_SLOT`    | 玩家购买一个额外的设置家传送点槽位。       |     `100.00` |
| `MAKE_HOME_PUBLIC`        | 玩家将家传送点转为开放。                  |      `50.00` |
| `RANDOM_TELEPORT`         | 玩家执行 /rtp 命令。                     |      `25.00` |
| `BACK_COMMAND`            | 玩家执行 /back 命令返回至上一个传送点。    |       `0.00` |
| `HOME_TELEPORT`           | 玩家执行 /home 命令传送至自己的家传送点。  |       `0.00` |
| `PUBLIC_HOME_TELEPORT`    | 玩家执行 /phome 命令传送至公开的家传送点。 |       `0.00` |
| `WARP_TELEPORT`           | 玩家执行 /warp 命令传送至地标传送点。     |       `0.00` |
| `SPAWN_TELEPORT`          | 玩家执行 /spawn 命令传送至主城出生点。    |       `0.00` |
| `SEND_TELEPORT_REQUEST`   | 玩家发送传送请求。                       |       `0.00` |
| `ACCEPT_TELEPORT_REQUEST` | 玩家同意其他玩家的传送请求。              |       `0.00` |

### 示例配置

::: warning
你必须在 config.yml 中指定一个小数值。（例如，`100.00` 是有效的，而 `100` 无效。）经济消耗在 `config.yml` 下 `economy` 的 `costs` 配置。
:::

### 设置经济消耗（config.yml）

```YAML
economy:
  # 启用经济插件联动（需要安装 Vault 与任意支持它的经济插件）
  enabled: false
  # 设置玩家可以免费设置多少个家传送点，若超出该数量，玩家就需要花钱购买额外槽位。
  free_home_slots: 5
  # 执行特定操作所耗费的经济单位。相关文档：https://william278.net/docs/huskhomes/economy-hook/
  costs:
    make_home_public: 50.0
    additional_home_slot: 100.0
    random_teleport: 25.0
    back_command: 0.0
    home_teleport: 0.0
    public_home_teleport: 0.0
    warp_teleport: 0.0
    spawn_teleport: 0.0
    send_teleport_request: 0.0
    accept_teleport_request: 0.0
```