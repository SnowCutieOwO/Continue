# 命令

本页列出了所有命令，及其详细的功能描述。

## 概览

[[toc]]

### 判断命令

这些命令用于将变量在聊天栏内替换为对应值。适用于调试。

#### `/papi bcparse`

::: info 
**描述：**

解析字符串内的变量并显示在所有玩家的聊天栏。

**参数：**

* `<player|me|--null>` - 判断变量时使用的玩家身份（填入 `me` 表示你自己，`--null` 则表示强制指定为空（适用于模仿控制台调试））。
* `<带变量的文本>` - 用于判断的文本。

**示例：**
``` txt
/papi bcparse funnycube My name is %player_name%!
```
:::

#### `/papi cmdparse`

::: info
**描述：**

执行命令并解析其中的变量。

**参数：**
* `<player|me|--null>` - 判断变量时使用的玩家身份（填入 `me` 表示你自己，`--null` 则表示强制指定为空（适用于模仿控制台调试））。
* `<带变量的命令>` - 用于执行的命令。

**示例：**
``` txt
/papi cmdparse funnycube say My name is %player_name%!
```
:::

#### `/papi parse`

::: info
**描述：**

解析指定文本中的变量并显示结果。

**参数：**

* `<player|me|--null>` - 判断变量时使用的玩家身份（填入 `me` 表示你自己，`--null` 则表示强制指定为空（适用于模仿控制台调试））。
* `<带变量的文本>` - 用于判断的文本。

**示例：**
``` txt
/papi parse funnycube My group is %vault_group%
```
:::

#### `/papi parserel`

::: info
**描述：**

以指定玩家对另一个玩家的视角解析一个相对变量。

**参数：**

* `<玩家 1>` - 变量解析中代指“自己”的玩家名称。
* `<玩家 2>` - 变量解析中代指其他玩家的名称。
* `<带变量的文本>` - 待解析的变量。

**示例：**

``` txt
/papi parserel funnycube extended_clip %placeholder%
```
:::

### eCloud 命令

这些命令都以 `/papi ecloud` 开头，用于使用[拓展云](dev-guides.ecloud.md)相关的功能。

#### `/papi ecloud clear`

::: info
**描述：**

清除 eCloud 的缓存。
:::

#### `/papi ecloud disable`

::: info
**描述：**

关闭与 eCloud 的连接。
:::

#### `/papi ecloud download`

::: info
**描述：**

从 eCloud 下载指定的变量拓展。

**参数：**

* `<拓展名称>` - 所要下载的变量拓展名称。
* `[版本号]` - 变量拓展的版本号（可选）。

**示例：**

``` txt
/papi ecloud download Vault
/papi ecloud download Vault 1.5.2
```
:::

#### `/papi ecloud enable`

::: info
**描述：**

启用与 eCloud 的连接。
:::

#### `/papi ecloud info`

::: info
**描述：**

列出指定变量拓展的有关信息。

**参数：**

* `<拓展名称>` - 查询的变量拓展名称。
* `[版本号]` - 查询的变量拓展版本。

**示例：**

``` txt
/papi ecloud info Vault
```
:::

#### `/papi ecloud list`

::: info
**描述：**

列出所有 eCloud 上可用的变量拓展，查询指定作者发布的变量拓展，或查看服务器上[安装](#papi-ecloud-download)的变量拓展。  
已安装的变量会在拓展列表中显示为绿色，有更新可用的会显示为亮黄色。

**参数：**

* `<all（全部）|作者名称|installed（已安装）>` - 列出所有拓展、指定作者发布的拓展或服务器上安装的拓展。

**示例：**

``` txt
/papi ecloud list all
/papi ecloud list clip
/papi ecloud list installed
```
:::

#### `/papi ecloud placeholders`

::: info 
**描述：**

列出拓展添加的所有变量。

**参数：**

* `<变量拓展>` - 列出变量的拓展。

**示例：**

``` txt
/papi ecloud placeholders Vault
```
:::

#### `/papi ecloud refresh`

::: info
**描述：**

刷新来自 eCloud 的缓存数据。
:::

#### `/papi ecloud status`

::: info

**描述：**

显示 eCloud 当前的状态。

:::

### 拓展命令

这些命令可以用于管理你已安装的变量拓展。

#### `/papi info`

::: info 
**描述：**

列出指定变量拓展的信息。

**参数：**

* `<变量拓展>` - 查询的拓展名称（对应拓展需要注册且启用）。

**示例：**

``` txt
/papi info Vault
```
:::

#### `/papi list`

::: info
**描述：**

列出所有活跃/注册的变量。  
与 [/papi ecloud list installed](#papi-ecloud-list) 不同的是，这个命令会列出插件注册的变量拓展（非独立的 .jar 文件），且不会显示有更新可用的变量拓展。
:::

#### `/papi register`

::: info
**描述：**

从指定文件中读取并注册变量。  
在手动下载变量拓展且不想重启服务器时很有用。  
文件需存放于 `/plugins/PlacholderAPI/expansions` 文件夹中。

**参数：**

* `<文件名称>` - 注册的文件名称（包括其后缀名）。

**示例：**

``` txt
/papi register MyExpansion.jar
```
:::

#### `/papi unregister`

::: info 
**描述：**

注销指定的变量拓展。

**参数：**

* `<文件名称>` - 待注销的变量拓展文件名称。

**示例：**

``` txt
/papi unregister MyExpansion.jar
```
:::

### 其他命令

这里是本插件中不属于任何分类的命令。

#### `/papi dump`

::: info
**描述：**

生成本插件的部分信息，如插件版本、服务器版本和安装的变量拓展，并将其上传至 https://paste.helpch.at/ 用于反馈漏洞。
:::

#### `/papi help`

::: info
**描述：**

显示本插件的所有命令。
:::

#### `/papi reload`

::: info

**描述：**

重载配置。  
从 eCloud [下载变量拓展](#papi-ecloud-download)之后，你需要使用这个命令，否则它们不会正确注册。
:::

#### `/papi version`

::: info

**描述：**

显示本插件当前版本与作者信息。

:::