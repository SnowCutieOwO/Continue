import{_ as n,c as a,o as p,b0 as e}from"./chunks/framework.w6NQj85O.js";const d=JSON.parse('{"title":"配置服务器","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/guides.configuring-servers.md","filePath":"LibreLogin/guides.configuring-servers.md"}'),i={name:"LibreLogin/guides.configuring-servers.md"};function o(t,s,l,r,c,b){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="配置服务器" tabindex="-1">配置服务器 <a class="header-anchor" href="#配置服务器" aria-label="Permalink to &quot;配置服务器&quot;">​</a></h1><p>自 LibreLogin <strong>v0.12.0</strong> 以来，插件便允许配置强制端口。在你首次打开配置文件时，这部分配置会看起来像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。</span></span>
<span class="line"><span># 配置允许设置强制端口。在 &quot;root&quot; 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.</span></span>
<span class="line"><span># 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts</span></span>
<span class="line"><span>lobby {</span></span>
<span class="line"><span>    root=[</span></span>
<span class="line"><span>        lobby1,</span></span>
<span class="line"><span>        lobby0</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="简单配置" tabindex="-1">简单配置 <a class="header-anchor" href="#简单配置" aria-label="Permalink to &quot;简单配置&quot;">​</a></h2><p>大多数人不想要使用强制端口，所以只需将所有服务器放入“<strong>root</strong>”部分下即可。默认配置中可见参考。</p><h2 id="强制端口搭建" tabindex="-1">强制端口搭建 <a class="header-anchor" href="#强制端口搭建" aria-label="Permalink to &quot;强制端口搭建&quot;">​</a></h2><p>这不能简单讲明白，详细请看下文的示例。</p><p>示例中的情境表示，从“bedwars.myserver.com”进入的玩家会被传送至 <strong>bedwars-hub-0</strong> 或 <strong>bedwars-hub-1</strong>。其他玩家则会被传送至 <strong>lobby0</strong> 或 <strong>lobby1</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。</span></span>
<span class="line"><span># 配置允许设置强制端口。在 &quot;root&quot; 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.</span></span>
<span class="line"><span># 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts</span></span>
<span class="line"><span>lobby {</span></span>
<span class="line"><span>    root=[</span></span>
<span class="line"><span>        lobby1,</span></span>
<span class="line"><span>        lobby0</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    bedwars§myserver§com=[</span></span>
<span class="line"><span>        bedwars-hub-0,</span></span>
<span class="line"><span>        bedwars-hub-1</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)]))}const u=n(i,[["render",o]]);export{d as __pageData,u as default};
