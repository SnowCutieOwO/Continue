# 🛠️ 配置文件

插件会生成下列配置文件，其中某些只在你首次使用了对应功能后生成。

* `datas`：存储插件数据文件的地方。<font color="red">该文件只在不使用数据库时生成。请勿手动修改其中的任何内容。</font>
* `items`：存储插件物品文件的地方。<font color="red">该文件只会在使用 /shop saveitem 命令保存物品后出现。请勿手动修改其中的任何内容。</font>
* `languages`：存储语言文件的地方。你可以通过 `config.yml` 中的 `config-files.language` 项修改插件使用的语言。你也可以在插件文件夹中修改语言文件的显示内容。有关基于玩家客户端选择自动修改显示语言，或者展示 BossBar、标题、ActionBar 或声音等内容的部分，请[见此](../features/advanced-language-management.md)。
* `menus`：用于存储菜单配置文件的地方。

::: info
许多用户似乎对一件事感到困惑：通过 `/shop` 命令打开的是菜单，而非商店。如果你想要设置商店菜单槽位的物品，你需要在菜单的配置文件找到并修改。
:::

* `shops`：存储菜单配置文件的位置。
* `random_placeholders`：存储随机变量配置文件的位置。
* `config.yml`：存储插件主设置的位置。
* `generated-item-format.yml`：使用 `/shop generateitemformat` 命令后，我们会将你手持的物品转化为（本插件特有的）**物品格式**并将判断后的内容存储在此文件中。
* `XX_xx.json`：通过本地化物品名称功能自动生成的本地化文件。文件的名称取决于你为此功能设置的本地语言而变化。其通常以 `.json` 结尾。
* `XX.txt` 文件：通过交易日志功能生成的交易记录文件。其命名方式可在 `config.yml` 文件下的 `log-transaction.file` 部分修改。

## config.yml 内容

推荐你在 Github 的代码仓库上浏览它，因为本维基的 `config.yml` 有可能不是**最新**的。你可以[点此](https://github.com/PQguanfang/UltimateShop/blob/master/src/main/resources/config.yml)跳转至 **Github** 的对应文件。

*译者注：鉴于随时更新可能存在不便，本维基只对存在于此的这份配置文件进行翻译。*

``` yaml
# UltimateShop 插件作者 @PQguanfang
#
# 本插件的维基: ultimateshop.superiormc.cn

# 部分选项可能需要重启服务器才可以生效。

debug: false

config-files:
  language: en_US
  # 仅付费版本。
  per-player-language: true
  force-parse-mini-message: true
  # 仅付费版本。
  minecraft-locate-file:
    # 启用后插件会尝试在填入物品本地化名称时载入 Minecraft 的本地化语言文件。
    # 因文件过大，开服时需要下载，可能会导致卡顿。
    enabled: false
    generate-new-one: false
    file: 'zh_cn.json'

cache:
  # 如果遇到多服同步问题，请尝试增加这个设置的值。
  load-delay: 7

sell:
  # 可填入的值: Bukkit 或 ItemFormat.
  # 每一个物品都可通过 match-item 部分来设置自定义出售机制, 更多信息请浏览维基.
  sell-method: Bukkit
  # 该部分设置只支持 ItemFormat 出售方法.
  ignore-item-format-key:
    - 'lore'
    - 'damage'
    - 'tool.damage-per-block'
  sell-all:
    ignore-items:
      # 格式: 商店 ID;;物品 ID
      - 'hideshop;;A'
    hide-message: true
  sell-stick:
    # 此处最小值为 5, 小于 5 的值会被插件无视并重置为 5.
    # 单位为刻。
    cooldown: 5
    hide-message: true
    display-calculate-multiplier: true
    # 可填入的值: LEFT, RIGHT and LEFT;;RIGHT
    # 请勿修改, 否则后果自负。
    click-type: RIGHT
  max-amount: 128

give-item:
  # 可填入的值: BUKKIT, SMART
  # SMART 会增加服务器的性能消耗, 但可以按原版堆叠数量给予玩家物品, 还能检查背包是否已满.
  give-method: SMART
  # 仅支持 SMART 给予方法.
  check-full: true

menu:
  # 如果运行规模较大的服务器时，使用此项可避免玩家频繁点击或重复开启本插件的商店导致的卡顿。
  # 单位为刻。
  cooldown:
    click: -1
    reopen: -1
  ignore-click-outside: false
  # 仅付费版本，启用后可自动更新界面标题中的动态值。
  title-update:
    # 需要安装 PacketEvents 和 MythicChanger。
    enabled: false
    # 菜单界面是否每秒刷新一次。
    # 会刷新在菜单标题中的变量。
    circle-update: false
    # 界面标题是否在每次点击时刷新。
    # 会刷新在菜单标题中的变量。
    click-update: true
    resend-items-pack: false
  menu-update:
    # 商店菜单是否每秒自动刷新一次。
    # 这可以刷新物品描述中的变量。
    click-update: false
  sell-all:
    size: 54
    title: '{lang}'
    black-slots: []
    dynamic-title:
      enabled: false
      titles:
        - "§aUltimateShop §7| §f一键出售界面"
        - "§bUltimateShop §7| §f一键出售界面"
        - "§dUltimateShop §7| §f一键出售界面"
      interval: 15
  # 仅付费版本
  bedrock:
    enabled: true
    # 可填入的值: FLOODGATE, UUID
    check-method: FLOODGATE
    # 若启用, 玩家成功购买物品后我们会试图重新打开商店界面.
    not-auto-close: true
    # 留空表示禁用此项.
    price-extra-line:
      default: '{lang}'
      only-buy: '{lang}'
      only-sell: '{lang}'
    buy-or-sell:
      title: '{lang}'
      buttons:
        amount:
          name: '{lang}'
          tip: '{lang}'
    info:
      title: '{lang}'
      buttons:
        buy: '{lang}'
        sell: '{lang}'
        buy-more: '{lang}'
        sell-all: '{lang}'
        # 若不需要可自行删除.
        back: '{lang}'
  buy-more-menu:
    not-open-when-invalid: true
    display-item-max-stack: true
    default:
      menu: buy-more
      max-amount: 64
    only-buy:
      menu: buy-more-buy
      max-amount: 64
    only-sell:
      menu: buy-more-sell
      max-amount: 64
  auto-open:
    enabled: true
    menu: main
  # 可填入的值: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.html
  # 支持以 ;; 分隔填入多种类型.
  click-event:
    buy: 'SHIFT_LEFT'
    sell: 'RIGHT'
    buy-or-sell: 'LEFT'
    # 若需禁用 select-amount 功能，请将其设置为 NEVER.
    select-amount: 'SHIFT_RIGHT;;SWAP_OFFHAND'
    sell-all: 'DROP'
    # buy-one-stack: 'SWAP_OFFHAND'
  # 商店菜单的自定义点击操作。
  # 仅付费版本。
  click-event-actions:
    buy-one-stack:
      display-name: '购买一组'
      buy-only: true
      1:
        type: buy
        shop: '{shop}'
        item: '{item}'
        amount: 64
    sell-one-stack:
      display-name: '出售一组'
      sell-only: true
      1:
        type: sell
        shop: '{shop}'
        item: '{item}'
        amount: 64

secret-shop-items:
  require-display-in-menu: true
  require-meet-menu-open-conditions: true

use-times:
  default-reset-mode: 'NEVER'
  default-reset-time: '00:00:00'
  # 仅对 CUSTOM 类型重置模式有效.
  default-reset-time-format: 'yyyy-MM-dd HH:mm:ss'
  default-reset-value: 0
  # 设置为 -1 表示禁用。
  default-max-value: -1
  # 若设置为 true，商品的默认购买/出售次数会设置为商品配置或上述默认值设置的内容。
  set-reset-value-by-default: true
  # 若设置为 true，商品在商品配置或上述默认值中设置的最大值只会在统计变量中生效。
  max-value-for-total-only: true
  auto-reset-mode: true

math:
  enabled: true
  scale: 2

# 仅付费版本。
log-transaction:
  # 这会消耗额外性能。
  enabled: false
  # 若留空，则只在控制台输出日志。
  file: 'log.txt'
  format: '{time} | {player} | {shop} | {buy-or-sell} | {item-name} x{amount} | {price}'
  time-format: "yyyy-MM-dd HH:mm:ss"

display-item:
  # 仅支持 Paper 1.17.1+ 版本。
  auto-translate-item-name: true
  # 若设置为 true，如果商品的默认数量为 10，且一次购买一组的话，购买数量变量会显示 640 个。
  calculate-amount: true
  auto-set-first-product: true
  # @+小写字符 表示条件描述，请勿将其移除
  # 不带有条件的描述会一直显示
  add-lore: '{lang}'

placeholder:
  auto-settings:
    # 若启用, 插件会在所有价格变量后加入条件变量.
    # 避免重复计算.
    add-contditional-in-all-price-amount:
      enabled: false
      buy-placeholder: buy
      sell-placeholder: sell
      black-dynamic-price: true
      black-shops:
        - 'example'
    # 若启用, 插件会尝试在动态定价后加上表示比较价格的符号.
    # 需要注意的是在动态定价选项中, 首个价格必定是出售基价.
    # 按维基操作的情况下不会出现任何问题.
    add-status-in-dynamic-price-placeholder:
      enabled: true
    # 启用后, 插件将会尝试将价格变量选项中的 {amount} 替换为你在此处设置的值.
    change-amount-in-all-price-placeholder:
      enabled: false
      replace-value: '%formatter_number_format_{amount}%'
  # 仅付费版本
  compare:
    up: '{lang}'
    down: '{lang}'
    same: '{lang}'
  cron:
    format: "{lang}"
  data:
    # 如果服务器从不使用动态定价等类似功能, 则你可以将其设置为 false.
    # 可略微提升服务器性能.
    can-used-in-amount: true
  refresh:
    format: "{lang}"
    never: "{lang}"
  # 仅付费版
  next:
    with-day-format: "{lang}"
    without-day-format: "{lang}"
    never: "{lang}"
  price:
    split-symbol-any: '{lang}'
    split-symbol-all: '{lang}'
    replace-new-line-symbol: '{lang}'
    unknown: "{lang}"
    unknown-price-type: "{lang}"
    empty: "{lang}"
  click:
    # 若启用, {buy-click} 与 {sell-stick} 将会根据物品状态显示不同的内容.
    # 该功能可能会在规模较大或商店内容较多的服务器上导致卡顿.
    enabled: false
    buy: '{lang}'
    sell: '{lang}'
    buy-with-no-sell: '{lang}'
    sell-with-no-buy: '{lang}'
    buy-max-limit-player: '{lang}'
    buy-max-limit-server: '{lang}'
    sell-max-limit-player: '{lang}'
    sell-max-limit-server: '{lang}'
    buy-price-not-enough: '{lang}'
    sell-price-not-enough: '{lang}'
    error: '{lang}'
    buy-condition-not-meet: '{lang}'
    sell-condition-not-meet: '{lang}'
  # 仅付费版本。
  sell-stick:
    infinite: "{lang}"

database:
  enabled: false
  # 旧版选项，请勿启用。
  auto-update-server-data: false
  jdbc-url: "jdbc:mysql://localhost:3306/ultimateshop?useSSL=false&autoReconnect=true"
  properties:
    user: root
    password: 123456

# 仅付费版本。
bungeecord-sync:
  enabled: false

prices:
  example:
    economy-plugin: Vault
    amount: 200
    placeholder: '{amount} 硬币'
  mmoitems-example:
    hook-plugin: MMOItems
    hook-item: AXE;;TEST_AXE
    amount: 1
    placeholder: '{amount} 神秘斧'

conditions:
  products-key: 'products-conditions'
  buy-prices-key: 'buy-prices-conditions'
  sell-prices-key: 'sell-prices-conditions'
  display-item-key: 'display-item-conditions'

time-offset:
  enabled: false
  offset-hours: 0
  offset-minutes: 0
  offset-seconds: 0

auto-save:
  enabled: true
  hide-message: false
  period-tick: 6000
```
