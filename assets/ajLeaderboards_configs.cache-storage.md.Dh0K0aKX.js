import{_ as t,C as a,c as l,o as h,an as p,G as i}from"./chunks/framework.CUFjuIqA.js";const u=JSON.parse('{"title":"缓存存储配置","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/ajLeaderboards"},{"title":"缓存存储配置","link":"/ajLeaderboards/configs.cache-storage"}]},"headers":[],"relativePath":"ajLeaderboards/configs.cache-storage.md","filePath":"ajLeaderboards/configs.cache-storage.md"}'),k={name:"ajLeaderboards/configs.cache-storage.md"};function r(o,s,d,c,g,E){const n=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return h(),l("div",null,[s[0]||(s[0]=p(`<h1 id="缓存存储配置" tabindex="-1">缓存存储配置 <a class="header-anchor" href="#缓存存储配置" aria-label="Permalink to &quot;缓存存储配置&quot;">​</a></h1><p>此为默认的缓存配置。你可以用它来设置本插件缓存的存储方式。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In this file, you can control where the cache is stored.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The method to use. h2 or mysql</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you select mysql, you will need to configure the settings below</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  Default: h2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">h2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You only need to touch these settings if you are using mysql</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">127.0.0.1:3306</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mc</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Currently only used with mysql</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">characterEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf8&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Note that if you change this after already saving data in the db, ajleaderboards will not be able to see it.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In this case, you should either stick with the default or go through and rename the tables to use the new prefix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table_prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ajlb_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># These settings are for mysql only</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you dont know what these are for, I reccomend leaving them as default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">minConnections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxConnections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allowPublicKeyRetrieval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">useSSL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Dont touch me</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">config-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span></code></pre></div>`,3)),i(n),i(e)])}const A=t(k,[["render",r]]);export{u as __pageData,A as default};
