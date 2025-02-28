import{_ as a,c as n,o as p,b0 as e}from"./chunks/framework.w6NQj85O.js";const b=JSON.parse('{"title":"数据库迁移","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/guides.database-migration.md","filePath":"LibreLogin/guides.database-migration.md"}'),i={name:"LibreLogin/guides.database-migration.md"};function t(l,s,c,r,o,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="数据库迁移" tabindex="-1">数据库迁移 <a class="header-anchor" href="#数据库迁移" aria-label="Permalink to &quot;数据库迁移&quot;">​</a></h1><h2 id="支持迁移的插件" tabindex="-1">支持迁移的插件 <a class="header-anchor" href="#支持迁移的插件" aria-label="Permalink to &quot;支持迁移的插件&quot;">​</a></h2><p><em>若你的插件尚未支持，请先注册一些随机的用户，密码统一为“testpassword”，然后将对应玩家的 MySQL 数据库通过站内私信或 Discord 发给我。</em></p><p><input type="checkbox" disabled="true" checked> JPremium SHA256<br><input type="checkbox" disabled="true" checked> AuthMe BCrypt<br><input type="checkbox" disabled="true" checked> AuthMe SHA256<br><input type="checkbox" disabled="true" checked> Aegis BCrypt<br><input type="checkbox" disabled="true" checked> DynamicBungeeAuth SHA512<br><input type="checkbox" disabled="true" checked> JPremium BCrypt<br><input type="checkbox" disabled="true"> 在这里填上你的插件名称</p><h2 id="迁移" tabindex="-1">迁移 <a class="header-anchor" href="#迁移" aria-label="Permalink to &quot;迁移&quot;">​</a></h2><p>此为数据库迁移的简短解释。</p><p>在 <code>config.conf</code> 中找到下面的配置并填写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 该部分用于配置其他插件迁移来的数据库设置。</span></span>
<span class="line"><span># 请见维基获得更多信息：https://github.com/kyngs/LibreLogin/wiki/Database-Migration</span></span>
<span class="line"><span>migration {</span></span>
<span class="line"><span>    old-database {</span></span>
<span class="line"><span>        mysql {</span></span>
<span class="line"><span>            # 数据库的名称。</span></span>
<span class="line"><span>            database=librelogin</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            host=localhost</span></span>
<span class="line"><span>            # 数据库连接的最大持续时间。如果不知道该设置的作用，请勿乱动。</span></span>
<span class="line"><span>            max-life-time=600000</span></span>
<span class="line"><span>            # 数据库的密码。</span></span>
<span class="line"><span>            password=&quot;&quot;</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            port=3306</span></span>
<span class="line"><span>            # 旧数据库表名。</span></span>
<span class="line"><span>            table=user-data</span></span>
<span class="line"><span>            # 数据库的用户名称。</span></span>
<span class="line"><span>            user=root</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlite {</span></span>
<span class="line"><span>            # SQLite 数据库文件的路径. 填入插件所在文件夹的相对路径</span></span>
<span class="line"><span>            path=&quot;user-data.db&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 下次重启时迁移数据库。</span></span>
<span class="line"><span>    on-next-startup=false</span></span>
<span class="line"><span>    # 迁移类型。可填入的类型：</span></span>
<span class="line"><span>    # jpremium-mysql - 可用于转化 MySQL JPremium SHA256 与 BCrypt</span></span>
<span class="line"><span>    # authme-mysql - 可用于转化 MySQL AuthMe BCrypt 与 SHA256</span></span>
<span class="line"><span>    # authme-sqlite - 可用于转化 SQLite AuthMe BCrypt 与 SHA256</span></span>
<span class="line"><span>    # aegis-mysql - 可用于转化 MySQL Aegis BCrypt</span></span>
<span class="line"><span>    # dba-mysql - 可用于转化 MySQL DynamicBungeeAuth，其使用了 SHA-512</span></span>
<span class="line"><span>    # librelogin-mysql - 可用于转化 MySQL LibreLogin，迁移至不同数据库时很有用</span></span>
<span class="line"><span>    # librelogin-sqlite - 可用于转化 SQLite LibreLogin，迁移至不同数据库时很有用</span></span>
<span class="line"><span>    type=authme-sqlite</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>完成设置之后重启群组端，控制台就会出现有关的状态信息。</p><p>在迁移完成之后，关闭群组端，并将配置文件中 <code>on-next-startup</code> 选项改为 false。</p><p>现在，所有数据应已迁移完毕，若出现任何问题，请在 Github 提交议题。</p>`,11)]))}const h=a(i,[["render",t]]);export{b as __pageData,h as default};
