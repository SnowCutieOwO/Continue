# 🛠️ 配置文件

插件会生成下列配置文件，其中某些只在你首次使用了对应功能后生成。

* `datas`：存储插件数据文件的地方。<font color="red">该文件只在不使用数据库时生成。请勿手动修改其中的任何内容。</font>
* `items`：存储插件物品文件的地方。<font color="red">该文件只会在使用 /shop saveitem 命令保存物品后出现。请勿手动修改其中的任何内容。</font>
* `languages`：存储语言文件的地方。你可以通过 `config.yml` 中的 `config-files.language` 项修改插件使用的语言。你也可以在插件文件夹中修改语言文件的显示内容。目前暂不支持基于玩家客户端语言自动修改显示语言。另外你也只能对所有玩家使用同一种语言。
* `menus`：用于存储菜单配置文件的地方。

::: info
许多用户似乎对一件事感到困惑：通过 `/shop` 命令打开的是菜单，而非商店。如果你想要设置商店菜单槽位的物品，你需要在配置文件中修改。
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
  # 仅付费版本，启用后可自动更新界面标题中的动态值。
  title-update:
    enabled: false
    resend-items-pack: false
  ignore-click-outside: false
  shop:
    # 商店菜单是否每隔 1 秒自动刷新一次。
    # 这可以刷新物品描述中的变量。
    # 但在玩家数量多且开启商店界面数量较多时可能会导致卡顿。
    update: false
    # Whether shop menu will refresh every click in it.
    # 这可以刷新物品描述中的变量。
    # 但在玩家数量多且开启商店界面数量较多时可能会导致卡顿。
    click-update: false
  sell-all:
    size: 54
    title: '&f全部出售 &7- 按 ESC 键确认!'
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
      default: '&6购买: {buy-price} &6| 出售: {sell-price}'
      only-buy: '&6购买: {buy-price}'
      only-sell: '&6出售: {sell-price}'
    buy-or-sell:
      title: '选择数量: {item-name}'
      buttons:
        amount:
          name: '自定义'
          tip: '点击输入自定义数量, 输入 \'all\' 表示全部出售!'
    info:
      title: '物品信息: {item-name} x{amount}'
      buttons:
        buy: '购买'
        sell: '出售'
        buy-more: '选择数量'
        sell-all: '全部出售'
        # 若不需要可自行删除.
        back: '&c返回'
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
  add-lore:
    - '@n '
    - '@a&e买价: {buy-price}'
    - '@b&e卖价: {sell-price}'
    - '@c&#FF7777玩家购买余量: {buy-times-player}/{buy-limit-player}'
    - '@d&#FF7777全服购买余量: {buy-times-server}/{buy-limit-server}'
    - '@e&#FF7777玩家出售限量: {sell-times-player}/{sell-limit-player}'
    - '@f&#FF7777全服出售限量: {sell-times-server}/{sell-limit-server}'
    - '@g '
    - '@g&#ff3300c不能再买更多了!'
    - '@g&8补货时间: {buy-refresh-player}'
    - '@i '
    - '@i&#ff3300已售罄!'
    - '@i&8补货时间: {buy-refresh-server}'
    - '@h '
    - '@h&#ff3300不能再卖更多了!'
    - '@h&8补货时间: {sell-refresh-player}'
    - '@j'
    - '@j&#ff3300不能再向服务器出售了!'
    - '@j&8补货时间: {sell-refresh-server}'
    - '@n '
    - '@a@u@y{buy-click}'
    - '@b@v@y{sell-click}'
    - '@k@q@y&#FFFACDShift + 鼠标右键选择数量！'
    - '@m@y&#FFFACD键盘 Q 键选择全部！'
    - '(@n)&c&l:( 不能这么做'
    - '(@a)@u@p&c物品无法购买'
    - '(@b)@v@p&c物品无法出售'

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
    up: '↑'
    down: '↓'
    same: '-'
  # 仅付费版本
  status:
    # 若启用, 状态变量将只在商店界面中显示。
    # 对全部出售及出售模组等. 因其只会出售一种物品而无效
    # 且无法知晓实际价格的盈亏.
    can-used-everywhere: false
  math:
    scale: 0
  cron:
    format: "yyyy-MM-dd HH:mm:ss"
  data:
    # 如果服务器从不使用动态定价等类似功能, 则你可以将其设置为 false.
    # 可略微提升服务器性能.
    can-used-in-amount: true
  refresh:
    format: "yyyy-MM-dd HH:mm:ss"
    never: "永不"
  # 仅付费版
  next:
    with-day-format: "{d}d {h}h {m}m {s}s"
    without-day-format: "{h}h {m}m {s}s"
    never: "等待下次刷新"
  price:
    split-symbol-any: ', '
    split-symbol-all: ', '
    replace-new-line-symbol: ', '
    unknown: "未知"
    unknown-price-type: "未知货币类型"
    empty: "未设置价格!"
  click:
    # 若启用, {buy-click} 与 {sell-stick} 将会根据物品状态显示不同的内容.
    # 该功能可能会在规模较大或商店内容较多的服务器上导致卡顿.
    enabled: false
    buy: '&#FFFACD左键点击购买!'
    sell: '&#FFFACD右键点击出售!'
    buy-with-no-sell: '&#FFFACD点击购买!'
    sell-with-no-buy: '&#FFFACD点击出售!'
    buy-max-limit-player: '&#ff3300你不能再买更多了!'
    buy-max-limit-server: '&#ff3300已售罄!'
    sell-max-limit-player: '&#ff3300不能再出售更多了!'
    sell-max-limit-server: '&#ff3300该物品不可出手!'
    buy-price-not-enough: '&#ff3300你没有足够的钱!'
    sell-price-not-enough: '&#ff3300你没有足够的物品!'
    error: '&#ff3300错误!'
    buy-condition-not-meet: '&#ff3300未达到购买条件!'
    sell-condition-not-meet: '&#ff3300未达到出售条件!'
  # 仅付费版本。
  sell-stick:
    infinite: "&c无限"

database:
  enabled: false
  jdbc-url: "jdbc:mysql://localhost:3306/ultimateshop?useSSL=false&autoReconnect=true"
  jdbc-class: "com.mysql.cj.jdbc.Driver"
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
