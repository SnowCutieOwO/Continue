import{_ as i,c as a,o as n,b0 as e}from"./chunks/framework.w6NQj85O.js";const g=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"Shopkeepers/installtion-updating.configuration.md","filePath":"Shopkeepers/installtion-updating.configuration.md"}'),l={name:"Shopkeepers/installtion-updating.configuration.md"};function t(p,s,h,k,r,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>默认配置足以让你开箱即用。如果你需要调整，配置中的注释应该会帮到你。</p><p>部分情况下，例如插件更新配置时可能缺少注释。你可以在本页面找到<strong>默认配置</strong>（章节末尾），标准格式写就且无任何缺失。另外，你还可以在<a href="https://github.com/Shopkeepers/Shopkeepers/blob/master/modules/main/src/main/resources/config.yml" target="_blank" rel="noreferrer">这里</a>找到最新的配置文件。</p><h2 id="物品数据" tabindex="-1">物品数据 <a class="header-anchor" href="#物品数据" aria-label="Permalink to &quot;物品数据&quot;">​</a></h2><p>该部分描述了物品在配置文件中的定义方式。</p><p>这部分配置使用的物品格式来源于 <a href="https://github.com/Shopkeepers/Shopkeepers-Wiki/wiki/Item-Serialization" target="_blank" rel="noreferrer">Bukkit 的物品序列化</a>（Bukkit/Spigot 插件用于从配置文件读写物品数据的 YAML 文件格式，例如本插件的 <code>save.yml</code>）。</p><p>若想要配置更易于读懂和编辑，你需要调整一些内容：</p><ul><li><p>物品的元数据（Bukkit 物品序列化数据中位于 <code>meta</code> 部分的内容）与它的类型设置处于同级/同一部分下。这些内容包括：</p><ul><li>物品的显示名称、描述、携带附魔等。</li></ul></li><li><p>任何你不使用或插件能够代为生成并存储的（普通）数据均可省略。例如：</p><ul><li>物品的数量（<code>amount</code>）；</li><li>物品的版本（<code>v</code>）；</li><li>数据类型 ID：<code>==: org.bukkit.inventory.ItemStack</code> 和 <code>==: ItemMeta</code> 需要注意的是，对于其他更深且带有这些相似特征的数据不可以被省略（如 <code>==: org.bukkit.attribute.AttributeModifier</code> 为属性修饰符，而 <code>==: Pattern</code> 则为旗帜图案，等等）；</li><li>物品的元数据 ID（<code>meta-type</code> ID）；</li></ul></li><li><p>物品名称与描述支持以 <code>&amp;</code>（而非原版的 <code>§</code>）开头的彩色字符。例如，<code>&amp;a</code> 表示淡绿色。见<a href="https://zh.minecraft.wiki/w/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81" target="_blank" rel="noreferrer">维基“格式化代码”</a>章节了解 Minecraft 现版本中可以使用的所有样式与颜色。</p><p>但是，Minecraft 曾经多次将旧版本的这种格式转化为新的 json 表达式。这可能导致在某个版本中创建的物品不能在另一个版本中使用。因此，除了使用旧版的颜色代码，我们建议使用新版的 json 格式来定义文本样式。见<a href="https://zh.minecraft.wiki/w/%E6%96%87%E6%9C%AC%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">维基“文本组件”</a>章节了解更多。</p><p>示例：旧格式为 <code>display-name: &#39;&amp;aShopkeeper&#39;</code>，而新格式则为 <code>display-name: &#39;{&quot;text&quot;:&quot;Shopkeeper&quot;,&quot;italic&quot;:false,&quot;color&quot;:&quot;green&quot;}&#39;</code></p></li><li><p>若要指定不带特殊数据的物品，你可以使用更简洁的表达方式。例如：</p></li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span></code></pre></div><p>而不是</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span></code></pre></div><p>需要注意的是，YAML 格式<strong>对缩进敏感</strong>。如果你的配置文件出现了问题，请确保你使用的是<strong>空格而不是（按 TAB 键出现的）制表符空格</strong>，之后再寻求一些 YAML 格式检查网站的帮助，例如 <a href="https://yamlchecker.com/" target="_blank" rel="noreferrer">YAMLChecker</a>。</p><p>另外也请确保你没有写错配置的键名。</p><h3 id="常见拼写错误" tabindex="-1">常见拼写错误 <a class="header-anchor" href="#常见拼写错误" aria-label="Permalink to &quot;常见拼写错误&quot;">​</a></h3><ul><li><code>enchantments</code>，而非正确的 <code>enchants</code></li><li><code>display name</code>，而非正确的 <code>display-name</code></li><li><code>damage</code>，而非正确的 <code>Damage</code></li></ul><h2 id="示例配置文件" tabindex="-1">示例配置文件 <a class="header-anchor" href="#示例配置文件" aria-label="Permalink to &quot;示例配置文件&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">currency-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EMERALD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;text&quot;:&quot;珍奇宝石&quot;,&quot;italic&quot;:false,&quot;color&quot;:&quot;green&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;text&quot;:&quot;看起来很珍贵.&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;text&quot;:&quot;也许能卖个好价钱.&quot;}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enchants</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    DURABILITY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ItemFlags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HIDE_ENCHANTS</span></span></code></pre></div><h2 id="shopkeepers-yaml-命令" tabindex="-1"><code>/shopkeepers yaml</code> 命令 <a class="header-anchor" href="#shopkeepers-yaml-命令" aria-label="Permalink to &quot;\`/shopkeepers yaml\` 命令&quot;">​</a></h2><p><code>/shopkeepers yaml</code> <a href="./commands">命令</a>可以用于输出手中物品的 Bukkit 序列化的 YAML 格式数据，以及配置文件中使用的物品数据。输出也会记录在控制台中，方便复制，因为在游戏中这些内容通常都过长而难以浏览。</p><h2 id="物品匹配" tabindex="-1">物品匹配 <a class="header-anchor" href="#物品匹配" aria-label="Permalink to &quot;物品匹配&quot;">​</a></h2><p>在检查游戏内物品是否与配置文件中要求的物品相符时，我们只会检查它包含的指定数据。这意味着检查的物品<strong>不会</strong>完全相同，而是物品<strong>能否包含额外数据</strong>而仍然符合要求。例如，在指定如下数据时：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;text&quot;:&quot;Shopkeeper&quot;,&quot;italic&quot;:false,&quot;color&quot;:&quot;green&quot;}&#39;</span></span></code></pre></div><p>任何以 <code>{&quot;text&quot;:&quot;Shopkeeper&quot;,&quot;italic&quot;:false,&quot;color&quot;:&quot;green&quot;}</code> 为名称的物品都可以用于创建商店，即便实际使用的物品包含额外的数据，例如自定义名称或附魔。</p><p>另外也需注意指定列表的数据（如物品描述）必须完全匹配（不能包含额外描述），而诸如附魔内容则允许拥有配置文本不要求的附魔。</p><p>其他方面的限制（因实现的应用较为简单），例如不支持要求物品<strong>不包含</strong>某个数据。例如，不能指定物品不包含特殊显示名称，或者不包含任何描述或附魔。下述两种配置都会允许玩家通过村民刷怪蛋而无视物品上的名称。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span></code></pre></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span></code></pre></div><p>需要注意的是，对于 <code>shop-creation-item</code>，默认情况下我们使用的匹配方法略有差异。原因请见下文。</p><h2 id="商店创建物品" tabindex="-1">商店创建物品 <a class="header-anchor" href="#商店创建物品" aria-label="Permalink to &quot;商店创建物品&quot;">​</a></h2><p><code>shop-creation-item</code> 用于创建<a href="./creating-shops.setup-player-shop">玩家商店</a>。默认情况下，我们不实际使用物品的匹配机制来检查物品是否满足要求，而是通过判断物品是否包含 <code>shopkeepers:shop_creation_item</code> 自定义标签来决定是否能够创建商店。这允许管理员修改创建商店的物品，而不会使先前留在玩家手中的失效。</p><p>这个行为通过下文的配置控制，你可以在默认配置中的注释中找到有关描述。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add-shop-creation-item-tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">identify-shop-creation-item-by-tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="默认配置" tabindex="-1">默认配置 <a class="header-anchor" href="#默认配置" aria-label="Permalink to &quot;默认配置&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shopkeepers Config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Wiki: https://github.com/Shopkeepers/Shopkeepers-Wiki/wiki/Configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The wiki also explains how item data gets specified inside the config.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Determines the required config migrations. Do not edit manually!</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">config-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The initial debugging state of the plugin.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Additional debugging options.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;log-all-events&#39;: Logs all events.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;print-listeners&#39;: Prints the registered listeners for the first call of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    each event.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;shopkeeper-activation&#39;: Enables debugging output related to shopkeeper</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    activation.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;regular-tick-activities&#39;: Enables debug output for regular shopkeeper</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    activities and behaviors that would otherwise cause debug spam when being</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    enabled by default. This includes for example the activity of teleporting</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    shopkeepers back into place, updating their location when they are mobile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    and moved around, or behaviors such as the playing of sound effects.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;visualize-shopkeeper-ticks&#39;: Visualizes the ticking activities of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    shopkeepers in-game.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;commands&#39;: Enables additional commands related debugging output.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;owner-name-updates&#39;: Logs information when updating stored shop owner</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    names.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;item-migrations&#39;: Logs whenever a shopkeeper performs item migrations</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    (e.g. for trade offers).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;item-updates&#39;: Logs whenever items are updated via the UpdateItemEvent.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;item-conversions&#39;: Logs whenever we explicitly convert items to Spigot&#39;s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    data format. Note that this does not log when items get implicitly</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    converted, which may happen under various circumstances.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;empty-trades&#39;: Logs detailed item information for the selected trade and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    the items in the input slots whenever a player clicks an empty trading</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    result slot.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;text-components&#39;: Logs additional debug output whenever component-based</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    text is sent.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">debug-options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to report anonymous usage statistics to https://bStats.org</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># All reported information can be found here:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://bstats.org/plugin/bukkit/Shopkeepers</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Messages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Find community translations at https://github.com/Shopkeepers/Language-Files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Wiki: https://github.com/Shopkeepers/Shopkeepers-Wiki/wiki/Language-Files</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">en-default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shopkeeper Data</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to immediately save all shopkeeper data whenever a shopkeeper is</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># edited. If disabled, the shopkeeper data is saved in 5 minute intervals and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># when the plugin is shut down.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you have a large server with many players and/or many shopkeepers, it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># might be a good idea to disable this for performance reasons.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">save-instantly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Enables the automatic conversion of items inside the inventories of players</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and shop containers whenever a player opens a shopkeeper UI (e.g. trading,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># editor, hiring, etc.) The items are converted to conform to Spigot&#39;s internal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># data format.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This setting helps with issues related to items that have been created on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># previous Spigot versions or via some Minecraft mechanism (e.g. give command,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># loot tables, etc.) no longer getting accepted when trading with shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In order for the items to get reliably accepted during trades, their data has</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to match the internal format that Spigot uses when a plugin would create the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># same items via the Spigot API. Spigot occasionally makes changes to this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># internal data format. Any previously created items, or newly created items</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># that don&#39;t conform to this new format, may cause trading and item stacking</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># issues then.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This setting is intended to help with the portion of the issue affecting</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shopkeeper trades. This setting will not reliably help you prevent item</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># stacking related issues!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Enabling this setting comes with a performance impact! Try to avoid using</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># this option and search for alternative solutions instead (e.g. stick to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Spigot&#39;s data format when creating items via Minecraft mechanisms). Try to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># only keep this setting enabled for as long as required (e.g. until you assume</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># that most of your players&#39; legacy items got converted by now).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">convert-player-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If &#39;convert-player-items&#39; is enabled, this setting toggles whether the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;convert-player-items-exceptions&#39; setting acts as black- or whitelist.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, all items inside the checked inventories will be converted except</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># those that match the items specified by &#39;convert-player-items-exceptions&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If disabled, only items that match the items specified by</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;convert-player-items-exceptions&#39; get converted.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">convert-all-player-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Black- or whitelist of items affected by the &#39;convert-player-items&#39; setting.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">convert-player-items-exceptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Plugin Compatibility</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># During start-up, the plugin performs some basic checks to verify that certain</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># aspects of the server implementation work as expected. For example, one of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the tested aspects is that the comparison of item stacks works correctly,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># which is quite essential for an item-based trading plugin such as</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shopkeepers. If any of these tests fail, the plugin disables itself to avoid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># problems that can otherwise arise later.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># However, even if one of this tests fails, the plugin might still be usable to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># some degree. For example, an issue with the item stack comparisons might only</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># affect specific kinds of item stacks.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you want to take the risk and try running the plugin anyway, even though a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># potential problem has been detected, you can enable this setting. However, do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># not expect any support when you subsequently encounter problems while this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># setting is enabled, or has been enabled in the past.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ignore-failed-server-assumption-tests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, Shopkeepers tries to bypass other plugins that deny mob spawning</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (e.g. land protection plugins).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bypass-spawn-blocking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, Shopkeepers takes into account whether other plugins deny</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># interaction with the shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">check-shop-interaction-result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, players will only be able to place shopkeepers where they have</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># permission from WorldGuard to build or where the &#39;allow-shop&#39; flag is set.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-world-guard-restrictions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled (additionally to the enable-world-guard-restrictions setting),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># players will only be able to place shopkeepers in regions where the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;allow-shop&#39; flag is set, but nowhere else. However, players will still</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># require container access to set up shops. And in case they can&#39;t place</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># containers in the affected region, shop containers need to be pre-setup by</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># someone else and the require-container-recently-placed setting needs to be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># disabled.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">require-world-guard-allow-shop-flag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to register the allow-shop flag with WorldGuard (if no other plugin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># has registered it yet). Usually there should be no need to disable this.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Changing this setting has no effect until the next server restart or full</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># server reload!</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">register-world-guard-allow-shop-flag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, players will only be able to place shopkeepers in places that</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># have been designated as commercial areas by Towny.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-towny-restrictions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled, players are only able to place shopkeepers in places where no</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># other plugin denies them to interact with blocks.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">check-spawn-location-interaction-result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In order to guard against unnoticed changes to a player&#39;s currently open</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># inventory, the Shopkeepers plugin verifies that the open inventory still</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># matches the expected type of inventory before it handles inventory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># interactions. This setting disables this verification.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># It is usually recommended keeping this verification enabled. However, when</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the Shopkeepers plugin is used on certain types of modded servers (such as</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># variants of Cauldron and its successors), a known issue is that these types</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of servers sometimes report that the currently open inventory is of a type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># different to what it actually is. The result of this verification is then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># that for example the trading inventory is closed when a player tries to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trade.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Even though modded servers are not officially supported and may break the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># plugin in various other unexpected ways, disabling the inventory verification</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># via this setting may help resolve this particular known incompatibility.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-inventory-verification</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shop Creation and Removal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item that is used to create player shops.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use the &#39;/shopkeeper give&#39; command to give yourself this item in-game.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER_SPAWN_EGG</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;text&quot;:&quot;Shopkeeper&quot;,&quot;italic&quot;:false,&quot;color&quot;:&quot;green&quot;}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to add a custom NBT tag to newly created shop creation items, e.g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># when created via the &#39;/shopkeeper give&#39; command.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Tag: &#39;PublicBukkitValues: {&quot;shopkeepers:shop_creation_item&quot;: 1b}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In combination with &#39;identify-shop-creation-item-by-tag&#39;, this provides</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># several benefits, such as being able to change the &#39;shop-creation-item&#39; in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the future without breaking any existing shop creation items in the world</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (e.g. in chests, player inventories, trades, third-party plugin data, etc.).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># By default, this and &#39;identify-shop-creation-item-by-tag&#39; are enabled for new</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># configurations, but disabled for backwards compatibility reasons for servers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># that migrated from a config-version of 5 or lower.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add-shop-creation-item-tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to identify the shop creation item by the custom NBT tag added via</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;add-shop-creation-item-tag&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is a separate setting in order to help server owners with the migration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># process: Server owners can enable &#39;add-shop-creation-item-tag&#39; very early to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># already add the tag to all newly created shop creation items, but separately</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># enable &#39;identify-shop-creation-item-by-tag&#39; later, once they expect or</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># verified that the old shop creation item is no longer in use.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Unfortunately, the Shopkeepers plugin provides no built-in solution to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># automatically migrate all occurrences of the old shop creation item in the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># world or plugin data.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">identify-shop-creation-item-by-tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent normal usage of the shop creation item. Players with the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># bypass permission (usually admins) can bypass this.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prevent-shop-creation-item-regular-usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># By default, the shop type is selected by right-clicking while holding the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shop creation item in hand, and the shop object type is selected by sneaking</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and right-clicking. If this setting is enabled, these controls are inverted.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">invert-shop-type-and-object-type-selection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether deleting (or destroying) a player shopkeeper returns (drops) the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shop creation item.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deleting-player-shop-returns-creation-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow creating player shops with the /shopkeeper command.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">create-player-shop-with-command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether the selected container must have been recently placed by the player</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># who is attempting to create the shopkeeper.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">require-container-recently-placed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The maximum distance a player shopkeeper can be placed from its backing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># container. This cannot be set to a value greater than 50.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-container-distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The default maximum number of shops a player can have. Set to -1 to disable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># this limit.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-shops-per-player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A list of permission nodes that can be used to set the maximum number of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shops a specific player or group of players can have. Use the permission node</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pattern &#39;shopkeeper.maxshops.&lt;count&gt;&#39; to use this feature. The permission</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># node &#39;shopkeeper.maxshops.unlimited&#39; indicates no limit. These permission</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nodes can only be used to increase the default limit, not decrease it.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-shops-perm-options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5,15,25</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to protect player shop containers from being accessed or broken. It</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># is usually recommended keeping this enabled.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">protect-containers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent item movements from and to protected shop containers (via</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># hoppers, droppers, etc.). If you disable this, you and your players will have</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to somehow else protect their shop container from unauthorized players who may</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># maliciously insert or extract items. This can be rather tricky even for land</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># protection plugins, because items can also be extracted via hopper minecarts.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your land protection plugin would need to prevent other players from placing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or pushing those minecarts into a protected region.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Item movement will always be allowed if the container protection is disabled.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prevent-item-movement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to delete player shopkeepers when their container is broken.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">delete-shopkeeper-on-break-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If enabled (set to a value greater than 0), Shopkeepers will check for and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># remove the shops of inactive players once every plugin start. This setting</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># determines how many days ago a player&#39;s last login has to be in order for the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># player to be considered inactive.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">player-shopkeeper-inactive-days</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shop (Object) Types</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A list of mob types that can be used for shopkeepers. Adding new mob types to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the defaults here is unsupported, as some mob types might not properly work</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and can cause all kinds of issues.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enabled-living-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VILLAGER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALLAY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ARMADILLO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AXOLOTL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BEE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BLAZE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BOGGED</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BREEZE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CAMEL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CAT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CAVE_SPIDER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CHICKEN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">COW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CREEPER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DOLPHIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DONKEY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DROWNED</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ENDERMAN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EVOKER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FOX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FROG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GHAST</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GIANT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GLOW_SQUID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GOAT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HOGLIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HORSE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HUSK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ILLUSIONER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_GOLEM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LLAMA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MAGMA_CUBE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MOOSHROOM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MULE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OCELOT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PANDA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PARROT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PHANTOM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PIG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PIGLIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PIGLIN_BRUTE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PILLAGER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POLAR_BEAR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PUFFERFISH</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RABBIT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RAVAGER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SALMON</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SHEEP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SHULKER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SILVERFISH</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SKELETON</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SKELETON_HORSE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SLIME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SNIFFER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SNOW_GOLEM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SPIDER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SQUID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">STRAY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">STRIDER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TADPOLE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TRADER_LLAMA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TROPICAL_FISH</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TURTLE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VEX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VINDICATOR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WANDERING_TRADER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WARDEN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WITCH</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WITHER_SKELETON</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WOLF</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOGLIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOMBIE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOMBIE_HORSE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOMBIE_VILLAGER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOMBIFIED_PIGLIN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether shopkeeper mobs shall not be affected by gravity.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-gravity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The range in chunks around players in which shopkeeper mobs will be affected</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># by gravity. Setting this too high may have a negative impact on performance.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># And setting it below the server&#39;s entity tracking range will result in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># players being able to see mobs floating in mid-air until they get close</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># enough. A value of 0 will limit the gravity to mobs within chunks that</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># contain a player. This has no effect if gravity is disabled.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gravity-chunk-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The number of Minecraft ticks between behavior updates of shopkeeper mobs.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This controls the rate at which we update the gravity and AI of shopkeeper</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mobs. Values above 1 indicate a reduced tick rate and result in a less</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># smooth, less reactive, and possibly slower behavior in comparison to the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># behavior of mobs in vanilla Minecraft.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In order to compensate for a reduced tick rate some activities may be scaled</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># accordingly. This ensures, for example, that mobs still rotate their head at</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the same speed towards nearby players, or that mobs still fall at the same</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># speed when being affected by gravity.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Consequently, a reduced tick rate is less performance-intensive in total, but</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># may on the other hand be slightly more performance-intensive per individual</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># behavior update.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Values above 3 are clearly noticeable and offer little additional benefit.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mob-behavior-tick-period</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether shulker shopkeepers shall peek when a player is nearby.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shulker-peek-if-player-nearby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A value between 0.0 and 1.0 that defines how much the shulker opens when it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># peeks.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shulker-peek-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether mob shopkeepers make sounds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">silence-living-shop-entities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to show nameplates of mob shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">show-nameplates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to always show nameplates. If disabled, nameplates will only be shown</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># when looking directly at the shopkeeper.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">always-show-nameplates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow the creation of Citizens NPC shopkeepers. Requires the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># plugin Citizens.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-citizen-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The entity type of newly created Citizens NPC shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default-citizen-npc-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;PLAYER&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to set the Citizens NPC owner of player-owned NPC shopkeepers. If</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># disabled, the Shopkeepers plugin will automatically remove the Citizens NPC</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># owners of player shopkeepers again.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># By enabling this setting, and configuring the Citizens command permissions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># for your players accordingly, you can allow shop owners to use the commands</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of the Citizens plugin to edit the Citizens NPCs of their NPC shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">set-citizen-npc-owner-of-player-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to make shopkeeper Citizens NPCs pushable by fluids (true), unpushable by fluids (false),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or not modify their current behavior (&quot;undefined&quot;).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">citizen-npc-fluid-pushable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to cancel interactions with Citizen shopkeeper NPCs.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The default behavior is to cancel all interactions with shopkeeper shop objects (mobs, signs,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># citizen NPCs, etc.) in order to prevent any usual interaction behaviors to take place (e.g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># villagers opening their vanilla trading interface instead of the shopkeeper trading interface).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># However, Citizen NPCs can be configured to trigger certain actions when they are interacted with,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># such as executing attached commands. By disabling this setting, the usual NPC actions are still</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># triggered in addition to the shopkeeper specific behavior of opening the trading or editor UI.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># However, be aware that this can result in additional unintentional behaviors to be triggered as</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># well. For example, when interacting with a villager NPC, by default the Citizens plugin prevents</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the villager&#39;s normal trading interface to open, but other vanilla actions such as incrementing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the player&#39;s &#39;talked-to-villager&#39; statistic may still take place. So if you disable this setting,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># you will have to make sure that the resulting interaction behavior is what you intend it to be.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cancel-citizen-npc-interactions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to immediately save all Citizens NPCs whenever the Shopkeepers plugin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># modifies a Citizens NPC. If disabled, the Citizens plugin handles the saving</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of the Citizens NPCs as usual: They are saved when the Citizens plugin shuts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># down, periodically as configured in the Citizens config, and when manually</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># triggered via command by a player.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">save-citizen-npcs-instantly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether shopkeeper snapshots shall save and restore Citizens NPC data.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Warning: When you disable this setting, the Shopkeepers plugin automatically</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deletes all NPC data that was previously saved by shopkeeper snapshots.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">snapshots-save-citizen-npc-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to automatically delete all invalid Citizen shopkeepers during plugin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># startup. This includes for example Citizen shopkeepers that are attached to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the same Citizen NPC as another shopkeeper, or any shopkeepers for which the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># corresponding Citizen NPC is missing (this can for example occur if the NPC</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># has been deleted while the Shopkeepers plugin was disabled).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In previous versions, this has been the default behavior. However, because it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># is risky to automatically delete shopkeepers, especially since the detection</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of invalid shopkeepers can potentially go wrong, this functionality is now</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># offered via this setting and disabled by default. In either case, the plugin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># will log warnings whenever it detects invalid Citizen shopkeepers.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Alternatively, the command &#39;/shopkeepers cleanupCitizenShopkeepers&#39; can also</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># be used to manually delete these invalid shopkeepers when they are detected.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">delete-invalid-citizen-shopkeepers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow the creation of sign shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-sign-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow the creation of sign posts (instead of only wall signs).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-sign-post-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow the creation of hanging sign shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-hanging-sign-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Naming</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A regular expression used to validate shopkeeper names. For detailed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># information on regular expressions the following documentations are helpful:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * https://docs.oracle.com/javase/9/docs/api/java/util/regex/Pattern.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * http://www.regular-expressions.info/tutorial.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Here are a few examples:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;[A-Za-z0-9 ]{3,25}&quot;: The default. Allows the letters A to Z, in both upper</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and lower case, and the digits 0 to 9. The name has to consist of at least 3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># characters and can be maximal 25 characters long.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;[A-Za-z0-9&amp;§# ]{3,25}&quot;: Same as the default, but allows using color codes.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;[\\\\p{L}0-9 ]{3,25}&quot;: Same as the default, but allows any letters to be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># used, regardless of the language. If you encounter errors when the config is</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># loaded, make sure that your config file is encoded as UTF-8.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;.*&quot;: Matches everything.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * Adding &quot;(?i)&quot; at the front enables case insensitive matching.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;(?=X)&quot;: The name has to match &quot;X&quot; (X can be another embedded expression),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># but the name is not consumed and has to also match the following expressions.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;(?!.*X).*&quot;: The name is not allowed to contain anything that matches &quot;X&quot;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * &quot;(?i)(?=[a-z0-9 ]{3,25})(?!.*bitch|dick|ass).*&quot;: Filters bad words.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name-regex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[A-Za-z0-9 ]{3,25}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether player shops get named via item. This will hide the naming option</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># from the editor menu.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">naming-of-player-shops-via-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether shop owners are allowed to rename their Citizens NPC shopkeepers. By</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default, those shopkeepers will be named after the player who owns the shop.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-renaming-of-player-npc-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Editor Menu</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Placeholder items to use inside the editors for empty trades, and for empty</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># slots of partially set up trades. The display name and lore of these items</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (unless they are set to AIR by default) are specified inside the language</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># file.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In combination with their display name and lore, these items must not match</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># any items that players are able to set up trades with.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selling-empty-trade-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selling-empty-trade-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selling-empty-trade-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selling-empty-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selling-empty-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buying-empty-trade-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buying-empty-trade-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buying-empty-trade-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AIR</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buying-empty-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buying-empty-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AIR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-trade-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-trade-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-trade-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trading-empty-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">book-empty-trade-result-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">book-empty-trade-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">book-empty-trade-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRAY_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">book-empty-item1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">book-empty-item2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The number of pages that can be filled with trades. The maximum is 10.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-trades-pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The items used for the buttons and icons in the trades page row.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The display name and lore of these items get set via the corresponding</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># messages and can therefore not be defined here.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">previous-page-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WRITABLE_BOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">next-page-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WRITABLE_BOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">current-page-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WRITABLE_BOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-setup-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item that players can rename and then use as a substitute for items they</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># don&#39;t have yet when they set up their trade offers or mob equipment.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set this to AIR to disable the use of placeholder items.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">placeholder-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item used for the set-name button, and the naming item (if enabled).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NAME_TAG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to enable the equipment editor for all mobs and all equipment slots.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># By default, the equipment can only be edited for mobs and slots that are known, at least for</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># certain items, to visually affect the mob. Enabling this setting can for example be useful for</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># testing purposes, e.g. when new mobs are added to the game, or when existing mobs start to support</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># additional equipment slots.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Certain shop objects, such as for example horses (armor) or llamas (carpet), provide dedicated</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># editor buttons to edit certain equipment. This setting also enables the equipment editor for these</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mobs and slots. Any non-empty equipment specified via the equipment editor overrides the equipment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of these dedicated editor buttons.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-all-equipment-editor-slots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to allow shop owners to move their shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-moving-of-player-shops</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item used for the move button.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">move-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ENDER_PEARL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether the editor menu of player shops contains an option to open the shop&#39;s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># container.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enable-container-option-on-player-shop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item used for the &#39;open container&#39; editor button.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">container-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CHEST</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item used for the trade notifications editor button in player shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-notifications-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BELL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item used for the delete button.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">delete-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BONE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Non-Shopkeeper Villagers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent trading with non-shopkeeper villagers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-other-villagers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to block regular non-shopkeeper villagers from spawning. Villagers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># spawned by plugins, spawn eggs, mob spawners or by curing zombie villagers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># are however not affected by this.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">block-villager-spawns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent curing of zombie villagers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-zombie-villager-curing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether non-shopkeeper villagers can be hired.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hire-other-villagers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent trading with non-shopkeeper wandering traders.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-wandering-traders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to block non-shopkeeper wandering traders and trader llamas from</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># spawning. Wandering traders and trader llamas spawned by plugins, spawn eggs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or mob spawners are however not affected by this.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">block-wandering-trader-spawns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether non-shopkeeper wandering traders can be hired.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hire-wandering-traders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether regular villagers can be edited by sneaking and right-clicking.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">edit-regular-villagers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether regular wandering traders can be edited by sneaking and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># right-clicking.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">edit-regular-wandering-traders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Hiring</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The item to use for the hire button in player shopkeepers that are for sale,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and for the hire-cost when hiring non-shopkeeper villagers.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hire-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EMERALD</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The amount of hire-cost items it costs to hire a non-shopkeeper villager.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hire-other-villagers-costs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether hiring a player shopkeeper also requires the permission to create</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># player shopkeepers of that type.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hire-require-creation-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Trading</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to prevent players from trading with their own shopkeepers. Keeping</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># this enabled is recommended.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prevent-trading-with-own-shop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># With this enabled player shopkeepers don&#39;t trade while their owner is online.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This might be useful for role-playing servers that want to force players to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trade with each other directly while they are online.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prevent-trading-while-owner-is-online</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In some situations, Minecraft allows the trading of items even if they do not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># fully match (e.g. villagers accept items with additional metadata). With this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># setting enabled, the Shopkeepers plugin will always check that the traded</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># items fully match before allowing the trade to take place.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-strict-item-comparison</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to increment Minecraft&#39;s talked-to-villager and traded-with-villager</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># statistics whenever a player opens the trading menu and trades with a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shopkeeper.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">increment-villager-statistics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to mimic Minecraft&#39;s normal villager trading sounds whenever a player</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trades with a villager shopkeeper. This only applies to villager shopkeepers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and ignores the &#39;silence-living-shop-entities&#39; setting.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">simulate-villager-trading-sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to simulate villager ambient sounds for villager shopkeepers. This</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ignores the &#39;silence-living-shop-entities&#39; setting.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">simulate-villager-ambient-sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to mimic Minecraft&#39;s normal wandering trader trading sounds whenever</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a player trades with a wandering trader shopkeeper. This only applies to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># wandering trader shopkeepers and ignores the &#39;silence-living-shop-entities&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># setting.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">simulate-wandering-trader-trading-sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to simulate wandering trader ambient sounds for wandering trader</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shopkeepers. This ignores the &#39;silence-living-shop-entities&#39; setting.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">simulate-wandering-trader-ambient-sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to play the simulated trading sounds of villager and wandering trader</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shopkeepers only to the trading player, instead of broadcasting them to all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nearby players as it is the case in vanilla Minecraft. This does not affect</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the simulated ambient sounds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">simulate-trading-sounds-only-for-the-trading-player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This sound effect is played to players when they trigger a successful trade.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-succeeded-sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;minecraft:ui.button.click&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This sound effect is played to players when their trade attempt fails for any</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reason.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-failed-sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;minecraft:block.barrel.close&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The percentage of items (0-100) that are removed from the items that shop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># owners receive in trades in their shops.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Be careful: Depending on the configuration, shop owners may end up not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># receiving any items!</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tax-rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to round up instead of down when calculating the tax of a player shop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># transaction.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tax-round-up</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Trade Notifications</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to inform players with the required trade notification permission</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (&#39;shopkeeper.trade-notifications.admin&#39; for admin shop trade notifications</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and &#39;shopkeeper.trade-notifications.player&#39; for player shop trade</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># notifications) about trades that take place. If a player would also receive a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trade notification because trade notifications for shop owners are enabled,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># they will only receive the shop owner specific trade notification.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notify-players-about-trades</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This sound effect is played when a player receives a trade notification. Set</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># this to an empty String to disable the sound effect.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-notification-sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to inform shop owners about trades that take place in their shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notify-shop-owners-about-trades</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This sound effect is played when a shop owner receives a trade notification.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set this to an empty String to disable the sound effect.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shop-owner-trade-notification-sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;minecraft:entity.experience_orb.pickup&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.25</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Trade Log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The storage type to use for the trade log.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;DISABLED&#39;: Disables the logging of trades.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;SQLITE&#39;: Logs all trades to an SQLite database inside the plugin folder.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;CSV&#39;: Logs all trades to daily CSV files inside the plugin folder.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-log-storage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DISABLED&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Players can trigger many equal trades in quick succession. For example, when</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># players trade by shift clicking the result slot, they can trigger up to 64</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># individual trades at once with a single click. And even when not shift</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clicking, they can quickly trigger a considerable number of trades.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In order to represent the logged trades more compactly, we merge successive</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trades that happen over a certain period of time if they involve the same</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># player, the same shopkeeper, and the same items. This setting specifies the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># maximum duration in ticks during which successive equal trades are merged.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Setting this to a value of 0 disables the merging of trades. Setting this to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a value of 1 will only merge trades that are triggered by the same inventory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># action (e.g. by the same shift click).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># It is recommended to not set this value to something longer than a few</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># seconds: The longer the chosen duration, the greater the difference between</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the logged timestamps and shopkeeper states may be to the actual timestamps</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and shopkeeper states at which the merged trades took place.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-log-merge-duration-ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The merging of trades is aborted prematurely if the time gap to the previous</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># trade is longer than this duration in ticks. This setting can be used in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># combination with a larger value for &#39;trade-log-merge-duration-ticks&#39; to limit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the maximum waiting time for a subsequent trade.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Setting this to a value of 0, or a value greater than or equal to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;trade-log-merge-duration-ticks&#39; will cause this setting to have no effect.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Setting this to something too low for trades to realistically be manually</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># triggered (such as only a few ticks) will make the chosen</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;trade-log-merge-duration-ticks&#39; effectively pointless. For performance</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reasons, the actual duration may dynamically vary by several ticks.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trade-log-next-merge-timeout-ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Whether to also log the metadata of items. This includes, for example, their</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># display name, lore, enchantments, etc. This data will be logged in Spigot&#39;s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># YAML format. Enabling this setting can, however, noticeably increase the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># storage space requirements.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log-item-metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Currencies</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The currency item that is used in player shops.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">currency-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EMERALD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A second, higher-value currency item that is used in the second trading slot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># of player shops. Set this to &#39;AIR&#39; to disable the second currency.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">high-currency-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EMERALD_BLOCK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The value of the second currency, based on the first currency.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">high-currency-value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The second currency will only be used if an item&#39;s cost is greater than this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># value.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">high-currency-min-cost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span></code></pre></div>`,34)]))}const c=i(l,[["render",t]]);export{g as __pageData,c as default};
