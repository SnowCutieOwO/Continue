# 冲突命令
*命令冲突*可在你安装多个提供相似命令的插件时出现。

例如，如果你同时安装了 [EssentialsX](https://essentialsx.net/) 和 HuskHomes，你会有两个 `/home` 命令，这会在玩家尝试使用命令时出现问题，执行的通常是服务器最先载入的插件所注册的那个命令。在这种情况下，玩家将会被传送到 Essentials 的家传送点，而不是 HuskHomes 的家传送点。

本章节给出了几种缓解此问题的方法。

## 禁用 EssentialsX 命令

::: info 对下列插件有效：
EssentialsX（Spigot、Paper）
:::

[EssentialsX](https://essentialsx.net/) 是一个流行的基础插件，提供了包括 `/home`、`/warp`、`/spawn` 和 `/tpa` 在内的命令。如果你安装了这个插件，你就需要禁用这些命令来避免与 HuskHomes 的冲突。

为了禁用这些命令，你需要在 EssentialsX 的配置文件（位于 `Essentials/config.yml`）中的 `disabled-commands` 设置来禁用命令。下面是一个在 EssentialsX 禁用命令的设置。

### EssentialsX config.yml 文件
```YAML
# 禁用命令将会阻止 Essentials 处理这些命令，该功能不会影响其他已经注册的相同命令。
# 你不能禁用在其他插件中使用的命令，它们会优先注册。
# 见 https://bukkit.fandom.com/wiki/Commands.yml#aliases 来连接其他插件的命令。
disabled-commands:
  - home
  - sethome
  - homelist
  - delhome
  - warp
  - setwarp
  - warplist
  - delwarp
  - tp
  - tphere
  - tpa
  - tpahere
  - tpaccept
  - tpdeny
  - tpno
  - rtp
  - tpignore
  - tpoffline
  - tpall
  - tpaall
  - spawn
  - setspawn
  - back
```
  
## 命名空间
::: info 对下列核心有效：
Spigot、Paper、Fabric、Sponge
:::

所有命令都会以命名空间的形式注册，所以你可以用这种方式来使用它们。例如，`/minecraft:tp` 将会执行原版的传送命令，而 `/huskhomes:tp` 则会执行 HuskHomes 的命令。

若你的服务器上有多个注册了相同命令的插件，例如，你可以使用 `/huskhomes:home` 执行 HuskHomes 的家传送点命令，而不是 EssentialsX 的家传送点命令。但是，这样会有些不方便，并且也会让玩家难以理解，所以我们推荐你创建命令别称来让这变得更简单。

## 编辑 Commands.yml

::: info 对下列核心有效：
Spigot、Paper
:::

Spigot 提供了一个 [`commands.yml` 文件](https://bukkit.fandom.com/wiki/Commands.yml)，能让你设置命令的等价用法。这个文件不但能设置其他插件的额外等价命令，还能决定哪些命令由哪些插件优先处理。

### 覆盖 HuskHomes

在你的 `commands.yml` 文件区域下确保 HuskHomes 命令能优先于其他插件的命令执行。这将会把没有插件前缀的命令变成有插件前缀的命令。（译者注：将 /命令 变为 /插件:命令 的形式。）

请记住如果你*想要*其他插件命令覆盖 HuskHomes 的命令，你可以将这个配置文本 `- "huskhomes:` 的前缀改为其他插件的名称（例如，EssentialsX 可以将其改为 `- "essentials:` ）。

#### commands.yml 下的 HuskHomes 命令别称

```YAML
aliases:
  home:
    - "huskhomes:home $1-"
  sethome:
    - "huskhomes:sethome $1-"
  homelist:
    - "huskhomes:homelist $1-"
  homes:
    - "huskhomes:homelist $1-"
  delhome:
    - "huskhomes:delhome $1-"
  edithome:
    - "huskhomes:edithome $1-"
  phome:
    - "huskhomes:phome $1-"
  phomelist:
    - "huskhomes:phomelist $1-"
  warp:
    - "huskhomes:warp $1-"
  setwarp:
    - "huskhomes:setwarp $1-"
  warplist:
    - "huskhomes:warplist $1-"
  delwarp:
    - "huskhomes:delwarp $1-"
  editwarp:
    - "huskhomes:editwarp $1-"
  tp:
    - "huskhomes:tp $1-"
  tphere:
    - "huskhomes:tphere $1-"
  tpa:
    - "huskhomes:tpa $1-"
  tpahere:
    - "huskhomes:tpahere $1-"
  tpaccept:
    - "huskhomes:tpaccept $1-"
  tpyes:
    - "huskhomes:tpaccept $1-"
  tpdecline:
    - "huskhomes:tpdecline $1-"
  tpno:
    - "huskhomes:tpdecline $1-"
  rtp:
    - "huskhomes:rtp $1-"
  tpignore:
    - "huskhomes:tpignore $1-"
  tpoffline:
    - "huskhomes:tpoffline $1-"
  tpall:
    - "huskhomes:tpall $1-"
  tpaall:
    - "huskhomes:tpaall $1-"
  spawn:
    - "huskhomes:spawn $1-"
  setspawn:
    - "huskhomes:setspawn $1-"
  back:
    - "huskhomes:back $1-"
  huskhomes:
    - "huskhomes:huskhomes $1-"
```