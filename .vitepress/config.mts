import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import taskLists from 'markdown-it-task-checkbox'
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'
import mathjax3 from 'markdown-it-mathjax3'
import { generateBreadcrumbsData } from '@nolebase/vitepress-plugin-breadcrumbs/vitepress'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import markdownItVideo from "@vrcd-community/markdown-it-video";
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import CodeBlockPlugin from '../.vitepress/plugins/codeblock.mjs';
import { figure } from '@mdit/plugin-figure';
import { attrs } from "@mdit/plugin-attrs";
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs/',
  lang: 'zh-Hans',
  title: "Continue Project",
  description: "插件维基译文仓库",
  cleanUrls: true,
  head: [
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ea20ee5ef417f995dc9f67e185482c76";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    [
      'script',
      { defer: '', async: '', src: 'https://cn.vercount.one/js' },
      ``
    ],
    [
      'script',
      { src: 'https://code.iconify.design/3/3.1.0/iconify.min.js' },
      ``
    ]
  ],
  srcExclude: [
    '**/wiki/Dynmap/**',
  ],
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
      md.use(footnote);
      md.use(taskLists);
      md.use(mathjax3);
      tabsPlugin(md);
      md.use(markdownItVideo, {
        youtube: { width: '100%', height: '387px' },
        bilibili: { width: '100%', height: '387px' }
      });
      md.use(groupIconMdPlugin);
      md.use(CodeBlockPlugin);
      md.use(figure);
      md.use(attrs);
      md.use(MermaidMarkdown);
    },
    math: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
        whitespace: 'preserve'
      },
    },
  },
  transformPageData(pageData, ctx) {
    generateBreadcrumbsData(pageData, ctx)
  },
  vite: {
    optimizeDeps: {
      exclude: [
        'nolebase@vitepress-plugin-breadcrumbs/client'
      ],
      include: [
        'mermaid'
      ]
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-breadcrumbs',
        '@nolebase/vitepress-plugin',
        'markdown-it-footnote',
        'markdown-it-mathjax3',
        'markdown-it-checkbox',
        '@red-asuka/vitepress-plugin-tabs',
        'mermaid'
      ]
    },
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/SnowCutieOwO/Continue',
        mapAuthors: [
          {
            name: 'SnowCutieOwO',
            username: 'SnowCutieOwO',
            mapByEmailAliases: ['2210609731@qq.com']
          },
          {
            name: 'hanchen',
            username: '1hanchen1',
            mapByEmailAliases: ['1364281481@qq.com']
          },
          {
            name: 'PQguanfang',
            username: 'PQguanfang',
            mapByEmailAliases: ['pqguanfang@foxmail.com']
          },
          {
            name: 'Ziphyrien',
            username: '海屿有燕',
            mapByEmailAliases: ['111620796+Ziphyrien@users.noreply.github.com']
          }
        ],
      }) as any,
      GitChangelogMarkdownSection(),
      groupIconVitePlugin(),
      MermaidPlugin()
    ],
  },
  themeConfig: {
    outline: [2, 3],
    outlineTitle: '目录',
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 移动端 - 外观
    darkModeSwitchLabel: '外观',
    // 移动端 - 返回顶部
    returnToTopLabel: '回到顶部',
    // 移动端 - 菜单
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🔙 返回首页', link: '/' },
      {
        text: '🔖 友链页面', items: [
          { text: 'CSKB - 日冕知识库', link: 'other-sites/cskb' },
          { text: 'HiMCBBS', link: 'other-sites/himcbbs' }
        ]
      },
      {
        text: '📘 维基列表',
        items: [
          { text: 'ajLeaderboards', link: 'wiki/ajLeaderboards/index' },
          { text: 'AuraSkills', link: 'wiki/AuraSkills/index' },
          { text: 'AureliumSkills（旧）', link: 'wiki/AureliumSkills/index' },
          { text: 'Codex', link: 'wiki/Codex/index' },
          { text: 'CommandTimer', link: 'wiki/CommandTimer/index' },
          { text: 'CoreProtect', link: 'wiki/CoreProtect/index' },
          { text: 'DecentHolograms', link: 'wiki/DecentHolograms/index' },
          { text: 'ExcellentCrates', link: 'wiki/ExcellentCrates/index' },
          { text: 'ExcellentEnchants', link: 'wiki/ExcellentEnchants/index' },
          { text: 'FallbackServer', link: 'wiki/FallbackServer/index' },
          { text: 'FastAsyncWorldEdit', link: 'wiki/FastAsyncWorldEdit/index' },
          { text: 'HuskHomes', link: 'wiki/HuskHomes/index' },
          { text: 'HuskSync', link: 'wiki/HuskSync/index' },
          { text: 'LibreLogin', link: 'wiki/LibreLogin/index' },
          { text: 'LuckPerms', link: 'wiki/LuckPerms/index' },
          { text: 'Oraxen', link: 'wiki/Oraxen/index' },
          { text: 'PlaceholderAPI', link: 'wiki/PlaceholderAPI/index' },
          { text: 'PlayerPoints', link: 'wiki/PlayerPoints/index' },
          { text: 'Shopkeepers', link: 'wiki/Shopkeepers/index' },
          { text: 'spark', link: 'wiki/spark/index' },
          { text: 'SuperiorSkyblock2', link: 'wiki/SuperiorSkyblock2/index' },
          { text: 'Terra', link: 'wiki/Terra/index' },
          { text: 'TownyAdvanced', link: 'wiki/TownyAdvanced/index' },
          { text: 'UltimateShop', link: 'wiki/UltimateShop/index' },
          { text: 'WorldEdit', link: 'wiki/WorldEdit/index' },
          { text: 'WorldGuard', link: 'wiki/WorldGuard/index' },
        ]
      }
    ],

    sidebar: {
      // 首页之外的维基注释，下文根据插件名称单独列出注释
      // 写这段内容是为了防蠢备忘
      'wiki/': [
        {
          text: '维基列表',
          items: [
            { text: 'ajLeaderboards', link: 'wiki/ajLeaderboards/index' },
            { text: 'AuraSkills', link: 'wiki/AuraSkills/index' },
            { text: 'AureliumSkills（旧）', link: 'wiki/AureliumSkills/index' },
            { text: 'Codex', link: 'wiki/Codex/index' },
            { text: 'CommandTimer', link: 'wiki/CommandTimer/index' },
            { text: 'CoreProtect', link: 'wiki/CoreProtect/index' },
            { text: 'DecentHolograms', link: 'DecentHolograms/index' },
            { text: 'ExcellentCrates', link: 'wiki/ExcellentCrates/index' },
            { text: 'ExcellentEnchants', link: 'wiki/ExcellentEnchants/index' },
            { text: 'FallbackServer', link: 'wiki/FallbackServer/index' },
            { text: 'FastAsyncWorldEdit', link: 'wiki/FastAsyncWorldEdit/index' },
            { text: 'HuskHomes', link: 'wiki/HuskHomes/index' },
            { text: 'HuskSync', link: 'wiki/HuskSync/index' },
            { text: 'LibreLogin', link: 'wiki/LibreLogin/index' },
            { text: 'LuckPerms', link: 'wiki/LuckPerms/index' },
            { text: 'Oraxen', link: 'wiki/Oraxen/index' },
            { text: 'PlaceholderAPI', link: 'wiki/PlaceholderAPI/index' },
            { text: 'PlayerPoints', link: 'wiki/PlayerPoints/index' },
            { text: 'Shopkeepers', link: 'wiki/Shopkeepers/index' },
            { text: 'spark', link: 'wiki/spark/index' },
            { text: 'SuperiorSkyblock2', link: 'wiki/SuperiorSkyblock2/index' },
            { text: 'UltimateShop', link: 'wiki/UltimateShop/index' },
            { text: 'WorldEdit', link: 'wiki/WorldEdit/index' },
            { text: 'WorldGuard', link: 'wiki/WorldGuard/index' },
          ]
        }
      ],
      'wiki/other-sites/': [
        { text: '返回首页', link: 'index' },
        {
          text: '友链页面', items: [
            { text: '布丁的个人博客', link: 'wiki/other-sites/puddingkc-s-blog' },
            { text: 'CSKB - 日冕知识库', link: 'wiki/other-sites/cskb' },
            { text: 'HiMCBBS', link: 'wiki/other-sites/himcbbs' },
          ]
        },
      ],
      'common/': [
        { text: '返回首页', link: '/index' },
        { text: '通例', link: 'common/index' },
        { text: '支持 Folia 的插件列表', link: 'common/folia-plugins' },
        { text: '翻译插件目录', link: 'common/translation-index' },
        { text: '实用链接', link: 'common/personal-guides/useful-links' },
      ],
      'guide/': [
        { text: '返回首页', link: '/index' },
        {
          text: '🌟 开服杂谈', link: 'guide/self-help/index', collapsed: false, items: [
            {
              text: '不求人篇', collapsed: true, items: [
                {
                  text: '手机端制作教程', link: 'guide/self-help/fcl-setup/index', collapsed: true, items: [
                    { text: '电脑制作手机端', link: 'guide/self-help/fcl-setup/fcl-pc-setup' },
                    { text: '手机制作手机端', link: 'guide/self-help/fcl-setup/fcl-mobile-setup' },
                  ]
                },
                { text: '利用 Maven/Gradle 构建插件', link: 'guide/self-help/build-jars-with-gradle-or-maven' },
                { text: '利用 Recaf 内核汉化', link: 'guide/self-help/localize-jars-with-recaf' },
                { text: '插件安全性鉴别（即将推出）' },
                { text: 'JEnv 多版本管理（即将推出）' },
                { text: 'Node.js 多版本管理安装', link: 'guide/self-help/fnm-installtion' },
              ]
            },
            {
              text: '自求福篇', collapsed: true, items: [
                { text: '开始之前：你要开什么？', link: 'guide/logical-questions/before-start-what-server-you-want' },
                { text: '开始之前：插件怎么选？', link: 'guide/logical-questions/choose-plugins-wisely' },
              ]
            },
            {
              text: '进阶学篇', collapsed: true, items: [
                {
                  text: 'TrMenu 菜单实战', link: 'guide/advanced/trmenu-examples/index', collapsed: true, items: [
                    { text: 'VIP 升级路线', link: 'guide/advanced/trmenu-examples/vip-menu' },
                    { text: '战令菜单', link: 'guide/advanced/trmenu-examples/battlepass' },
                    { text: '撬锁小游戏', link: 'guide/advanced/trmenu-examples/lockpicking-minigame' },
                  ]
                },
                { text: '分世界显示玩家的 TAB', link: 'guide/advanced/tab-based-world-seperation' },
                { text: 'WorldEdit 制作简单地形', link: 'guide/advanced/how-to-make-easy-landscape-using-we' },
                { text: 'LuckPerms 月卡权限与时间段权限', link: 'guide/advanced/luckperms-temp-permissions-example' },
              ]
            }
          ]
        },
      ],
      'wiki/AureliumSkills/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/AureliumSkills/index' },
        {
          text: 'AureliumSkills 维基',
          items: [
            { text: '欢迎', link: 'wiki/AureliumSkills/welcome' },
            {
              text: '配置',
              collapsed: true,
              items: [
                {
                  text: '主配置',
                  link: 'wiki/AureliumSkills/configuration/main-config/index',
                  items: [
                    { text: 'MySQL', link: 'wiki/AureliumSkills/configuration/main-config/mysql' },
                  ]
                },
              ]
            },
            { text: '消息文本', link: 'wiki/AureliumSkills/configuration/messages' },
            { text: '奖励配置', link: 'wiki/AureliumSkills/configuration/rewards' },
            { text: '战利品配置', link: 'wiki/AureliumSkills/configuration/loot' },
            { text: '经验来源', link: 'wiki/AureliumSkills/configuration/sources' },
            { text: '技能设置', link: 'wiki/AureliumSkills/configuration/abilities' },
            {
              text: '菜单',
              link: 'wiki/AureliumSkills/configuration/menu',
              items: [
                { text: '菜单格式变动', link: 'wiki/AureliumSkills/configuration/menu/menu-format-changes' },
              ]
            },
            { text: '经验条件', link: 'wiki/AureliumSkills/configuration/xp-requirements' },
            {
              text: '游戏体验',
              collapsed: true,
              items: [
                {
                  text: '属性',
                  link: 'wiki/AureliumSkills/gameplay/stats',
                  items: [
                    { text: '属性修饰语', link: 'wiki/AureliumSkills/gameplay/stats/stat-modifier' },
                    { text: '生命值相关', link: 'wiki/AureliumSkills/gameplay/stats/health' },
                  ]
                },
              ]
            },
            { text: '魔法技能', link: 'wiki/AureliumSkills/gameplay/stats' },
            { text: '经验翻倍', link: 'wiki/AureliumSkills/gameplay/multipliers' },
            { text: '条件', link: 'wiki/AureliumSkills/gameplay/requirements' },
            {
              text: '用法',
              collapsed: true,
              items: [
                { text: '命令列表', link: 'wiki/AureliumSkills/usage/commands' },
                { text: '权限列表', link: 'wiki/AureliumSkills/usage/permissions' },
                { text: '变量集群', link: 'wiki/AureliumSkills/usage/placeholders' },
              ]
            },
            {
              text: '其他',
              collapsed: true,
              items: [
                { text: '常见问题', link: 'wiki/AureliumSkills/other/faq' },
                { text: '冲突内容', link: 'wiki/AureliumSkills/other/incompabilities' },
              ]
            }
          ]
        },
      ],
      'wiki/AuraSkills/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/AuraSkills/index' },
        {
          text: 'AuraSkills 维基', items: [
            { text: 'AuraSkills', link: 'wiki/AuraSkills/auraskills' },
            {
              text: '主配置', collapsed: true, link: 'wiki/AuraSkills/main-config', items: [
                { text: 'SQL', link: 'wiki/AuraSkills/main-config/sql' }
              ]
            },
            {
              text: '技能', collapsed: true, link: 'wiki/AuraSkills/skills', items: [
                { text: '经验条件', link: 'wiki/AuraSkills/skills/xp-requirements' },
                { text: '经验倍率', link: 'wiki/AuraSkills/skills/xp-multipliers' },
                { text: '物品条件', link: 'wiki/AuraSkills/skills/item-requirements' },
              ]
            },
            {
              text: '属性', collapsed: true, link: 'wiki/AuraSkills/stats', items: [
                { text: '属性修饰符', link: 'wiki/AuraSkills/stats/stat-modifiers' }
              ]
            },
            { text: '能力', link: 'wiki/AuraSkills/abilities' },
            { text: '魔法能力', link: 'wiki/AuraSkills/mana-abilities' },
            { text: '经验来源', link: 'wiki/AuraSkills/sources' },
            { text: '奖励', link: 'wiki/AuraSkills/rewards' },
            { text: '战利品', link: 'wiki/AuraSkills/loot' },
            { text: '菜单', link: 'wiki/AuraSkills/menus' },
            { text: '消息', link: 'wiki/AuraSkills/messages' },
            { text: '命令', link: 'wiki/AuraSkills/commands' },
            { text: '权限', link: 'wiki/AuraSkills/permissions' },
            { text: '变量', link: 'wiki/AuraSkills/placeholders' },
            { text: '兼容插件', link: 'wiki/AuraSkills/compatible-plugins' },
            { text: '迁移', link: 'wiki/AuraSkills/migration' },
            { text: 'API', link: 'wiki/AuraSkills/api' },
            { text: '常见问题', link: 'wiki/AuraSkills/faq' },
            { text: '服务器要求', link: 'wiki/AuraSkills/server-requirements' },
            { text: '不兼容内容', link: 'wiki/AuraSkills/incompatibilities' },
            {
              text: '更新日志', items: [
                { text: '2.0', link: 'wiki/AuraSkills/release-notes/2-0' },
                { text: '2.1', link: 'wiki/AuraSkills/release-notes/2-1' },
                { text: '2.2', link: 'wiki/AuraSkills/release-notes/2-2' },
                { text: '2.3', link: 'wiki/AuraSkills/release-notes/2-3' }
              ]
            }
          ]
        },
      ],
      'wiki/ajLeaderboards/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/ajLeaderboards/index' },
        {
          text: 'ajLeaderboards 中文维基',
          items: [
            { text: '概览', link: 'wiki/ajLeaderboards/overview' },
            {
              text: '安装',
              collapsed: true,
              items: [
                { text: '安装', link: 'wiki/ajLeaderboards/setup/setup' },
                { text: '变量参考', link: 'wiki/ajLeaderboards/setup/good-boards' },
                { text: '变量', link: 'wiki/ajLeaderboards/setup/placeholders' },
                { text: '权限', link: 'wiki/ajLeaderboards/setup/permissions' },
                { text: '消息变量', link: 'wiki/ajLeaderboards/setup/message-placeholders' },
                { text: 'LuckPerms 情境（Context）', link: 'wiki/ajLeaderboards/setup/luckperms-contexts' },
                { text: '额外内容', link: 'wiki/ajLeaderboards/setup/extras' },
              ]
            },
            {
              text: '配置',
              collapsed: true,
              items: [
                { text: '主配置', link: 'wiki/ajLeaderboards/configs/main-config' },
                { text: '缓存', link: 'wiki/ajLeaderboards/configs/cache-storage' }
              ]
            },
            { text: '切换存储方法', link: 'wiki/ajLeaderboards/moving-storage-methods' },
            { text: '常见问题', link: 'wiki/ajLeaderboards/faq' },
            { text: '少见问题', link: 'wiki/ajLeaderboards/less-faq' },
            { text: '名词解释', link: 'wiki/ajLeaderboards/glossary' }
          ]
        },
      ],
      'wiki/Codex/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/Codex/index' },
        {
          text: 'Codex 维基',
          items: [
            { text: '首页', link: 'wiki/Codex/codex-wiki' },
            { text: '如何开始', link: 'wiki/Codex/how-to-start' },
            { text: '分类教程', link: 'wiki/Codex/discoveries-categories-tutorial' },
            { text: '物品教程', link: 'wiki/Codex/items-tutorial' },
            { text: 'config.yml 教程', link: 'wiki/Codex/config-yml-tutorial' },
            { text: 'inventory.yml 教程', link: 'wiki/Codex/inventory-yml-tutorial' },
            { text: '动作', link: 'wiki/Codex/actions' },
            { text: '命令与权限', link: 'wiki/Codex/commands-and-permissions' },
            { text: 'PlaceholderAPI 变量', link: 'wiki/Codex/placeholderapi-variables' },
            { text: '自定义日志条目教程', link: 'wiki/Codex/customized-discoveries-tutorial' },
            {
              text: '默认文件', collapsed: true, items: [
                { text: 'messages.yml', link: 'wiki/Codex/default-files/messages-yml' },
                { text: 'inventory.yml', link: 'wiki/Codex/default-files/inventory-yml' }
              ]
            }
          ]
        },
      ],
      'wiki/CommandTimer/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/CommandTimer/index' },
        {
          text: 'CommandTimer 维基',
          items: [
            { text: '初次使用', link: 'wiki/CommandTimer/getting-started' },
            {
              text: '配置详解',
              collapsed: true,
              link: 'wiki/CommandTimer/configuration',
              items: [
                { text: '命令', link: 'wiki/CommandTimer/configuration/commands' },
                { text: '计划表', link: 'wiki/CommandTimer/configuration/schedules' },
                { text: '条件', link: 'wiki/CommandTimer/configuration/conditions' },
                { text: '其他', link: 'wiki/CommandTimer/configuration/others' },
              ]
            },
            { text: '拓展模块', link: 'wiki/CommandTimer/extensions' },
            { text: '事件', link: 'wiki/CommandTimer/events' },
            { text: '变量', link: 'wiki/CommandTimer/placeholders' },
            { text: 'JSON 格式', link: 'wiki/CommandTimer/json-schema' },
            { text: '开发者相关', link: 'wiki/CommandTimer/configuration/schedules' },
            { text: '常见问题', link: 'wiki/CommandTimer/faq' },
            { text: '术语', link: 'wiki/CommandTimer/jargon' },
            { text: '杂项', link: 'wiki/CommandTimer/miscellaneous' },
          ]
        },
      ],
      'wiki/CoreProtect/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/CoreProtect/index' },
        {
          text: 'CoreProtect 维基', items: [
            { text: '欢迎', link: 'wiki/CoreProtect/welcome' },
            { text: '命令', link: 'wiki/CoreProtect/commands' },
            { text: '配置', link: 'wiki/CoreProtect/configuration' },
            { text: '语言', link: 'wiki/CoreProtect/languages' },
            { text: '权限', link: 'wiki/CoreProtect/permissions' },
            { text: '工具与集成', link: 'wiki/CoreProtect/tools-intergrations' },
            {
              text: 'API', collapsed: true, items: [
                { text: 'CoreProtect API', link: 'wiki/CoreProtect/api/coreprotect-api' },
                { text: '网络通信 API', link: 'wiki/CoreProtect/api/networking-api' },
                {
                  text: '版本', collapsed: true, items: [
                    { text: 'API v10', link: 'wiki/CoreProtect/api/version/api-version-10' },
                    { text: 'API v7', link: 'wiki/CoreProtect/api/version/api-version-7' },
                    { text: 'API v8', link: 'wiki/CoreProtect/api/version/api-version-8' },
                    { text: 'API v9', link: 'wiki/CoreProtect/api/version/api-version-9' },
                  ]
                },

              ]
            },

          ]
        },
      ],
      'wiki/DecentHolograms/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/DecentHolograms/index' },
        {
          text: 'DecentHolograms 维基', items: [
            { text: '欢迎', link: 'wiki/DecentHolograms/welcome' },
            {
              text: '通用', collapsed: true, items: [
                { text: '安装', link: 'wiki/DecentHolograms/general/setup' },
                { text: '兼容性', link: 'wiki/DecentHolograms/general/compatibility' },
                { text: '格式与颜色', collapsed: true, link: 'wiki/DecentHolograms/general/formats-colors', items: [{ text: '颜色', link: 'wiki/DecentHolograms/general/formats-colors/colors' }] },
                {
                  text: '命令', collapsed: true, link: 'wiki/DecentHolograms/general/commands', items: [
                    { text: '通用', link: 'wiki/DecentHolograms/general/commands/general' },
                    { text: '特性', link: 'wiki/DecentHolograms/general/commands/features' },
                    { text: '悬浮字', link: 'wiki/DecentHolograms/general/commands/hologram' },
                    { text: '悬浮字行', link: 'wiki/DecentHolograms/general/commands/hologram-line' },
                    { text: '悬浮字页', link: 'wiki/DecentHolograms/general/commands/hologram-pages' }
                  ]
                },
                {
                  text: '配置', collapsed: true, link: 'wiki/DecentHolograms/general/configuration', items: [
                    { text: '主配置', link: 'wiki/DecentHolograms/general/configuration/config' },
                    { text: '动画配置', link: 'wiki/DecentHolograms/general/configuration/animation' },
                    { text: '特色配置', link: 'wiki/DecentHolograms/general/commands/features' },
                    { text: '悬浮字配置', link: 'wiki/DecentHolograms/general/configuration/hologram' },
                    { text: '语言配置', link: 'wiki/DecentHolograms/general/configuration/lang' },
                  ]
                },

                {
                  text: '示例悬浮字', collapsed: true, link: 'wiki/DecentHolograms/general/example-holograms', items: [
                    { text: '示例 - 演示', link: 'wiki/DecentHolograms/general/example-holograms/example-demo' },
                    { text: '示例 - 实体', link: 'wiki/DecentHolograms/general/example-holograms/example-entity' },
                    { text: '示例 - 带偏置的配方', link: 'wiki/DecentHolograms/general/example-holograms/example-recipe-with-offsets' },
                    { text: '示例 - 树', link: 'wiki/DecentHolograms/general/example-holograms/example-tree' },
                    { text: '示例 - 动作', link: 'wiki/DecentHolograms/general/example-holograms/example-actions' },
                  ]
                },

                { text: '动画', link: 'wiki/DecentHolograms/general/animations' },
                { text: '动作', link: 'wiki/DecentHolograms/general/actions' },
                { text: '标志', link: 'wiki/DecentHolograms/general/flags' },
              ]
            },
            {
              text: 'API', collapsed: true, items: [
                { text: '开始', link: 'wiki/DecentHolograms/api/get-started' },
                {
                  text: '基本用法', collapsed: true, link: 'wiki/DecentHolograms/api/basic-usage', items: [
                    { text: 'DHAPI', link: 'wiki/DecentHolograms/api/basic-usage/dhapi' },
                    { text: '常见问题', link: 'wiki/DecentHolograms/api/basic-usage/faq' },
                  ]
                },
                { text: '事件', link: 'wiki/DecentHolograms/api/events' },
              ]
            },
            { text: 'Spigot', link: 'http://decentholograms.eu/' },
            { text: 'Discord', link: 'https://discord.decentsoftware.eu/' },
          ]
        },
      ],
      'wiki/ExcellentCrates/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/ExcellentCrates/index' },
        {
          text: 'ExcellentCrates 维基', items: [
            { text: '🏠 欢迎', link: 'wiki/ExcellentCrates/welcome' },
            { text: '🖥️ 命令', link: 'wiki/ExcellentCrates/commands' },
            { text: '⛔ 权限', link: 'wiki/ExcellentCrates/permissions' },
            {
              text: '🔌 集成', collapsed: true, items: [
                { text: '自定义物品', link: 'wiki/ExcellentCrates/intergrations/custom-items' },
                { text: '悬浮字', link: 'wiki/ExcellentCrates/intergrations/holograms' },
                { text: 'PlaceholderAPI', link: 'wiki/ExcellentCrates/intergrations/placeholderapi' }
              ]
            },
            { text: '⚠️ 常见插件问题', link: 'wiki/ExcellentCrates/common-issues' },
            { text: '❓ 常见功能问题', link: 'wiki/ExcellentCrates/common-questions' },
            { text: '🔧 编辑器界面', link: 'wiki/ExcellentCrates/editor-gui' },
            {
              text: '⚙️ 配置文件', collapsed: true, items: [
                { text: '跨服', link: 'wiki/ExcellentCrates/configuration/cross-server' },
                { text: '兑换', link: 'wiki/ExcellentCrates/configuration/exchange' }
              ]
            },
            {
              text: '🧊 宝箱', collapsed: true, items: [
                { text: '➕ 设置宝箱', link: 'wiki/ExcellentCrates/crates/setup-crates' },
                { text: '💎 外观', link: 'wiki/ExcellentCrates/crates/appearance' },
                { text: '🖼️ 预览', link: 'wiki/ExcellentCrates/crates/previews' },
                { text: '👁️ 开箱动画', link: 'wiki/ExcellentCrates/crates/openings' },
                { text: '🧱 放置', link: 'wiki/ExcellentCrates/crates/placement' },
                { text: '🛑 开箱权限', link: 'wiki/ExcellentCrates/crates/open-permission' },
                { text: '💲 开箱收费', link: 'wiki/ExcellentCrates/crates/open-cost' },
                { text: '⌛ 开箱冷却', link: 'wiki/ExcellentCrates/crates/open-cooldown' },
                { text: '🔑 钥匙需求', link: 'wiki/ExcellentCrates/crates/key-requirements' },
                { text: '🪧 累抽奖励', link: 'wiki/ExcellentCrates/crates/milestones' },
              ]
            },
            {
              text: '🔑 钥匙', collapsed: true, items: [
                { text: '➕ 设置钥匙', link: 'wiki/ExcellentCrates/keys/setup-keys' },
                { text: '*️⃣ 虚拟钥匙', link: 'wiki/ExcellentCrates/keys/virtual-keys' }
              ]
            },
            { text: '🔤 变量', link: 'wiki/ExcellentCrates/placeholders' },
            { text: '🔧 开发者 API', link: 'wiki/ExcellentCrates/developer-api' }
          ]
        }
      ],
      'wiki/ExcellentEnchants/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/ExcellentEnchants/index' },
        {
          text: 'ExcellentEnchants 维基', items: [
            { text: '从 v4 升级', link: 'wiki/ExcellentEnchants/upgrading-from-v4' },
            { text: '欢迎', link: 'wiki/ExcellentEnchants/welcome' },
            { text: '命令', link: 'wiki/ExcellentEnchants/commands' },
            { text: '权限', link: 'wiki/ExcellentEnchants/permissions' },
            {
              text: '集成', collapsed: true, items: [
                { text: 'PlaceholderAPI 支持', link: 'wiki/ExcellentEnchants/intergrations/placeholderapi' }
              ]
            },
            { text: '常见插件问题', link: 'wiki/ExcellentEnchants/common-issues' },
            { text: '常见问题', link: 'wiki/ExcellentEnchants/common-questions' },
            {
              text: '功能', collapsed: true, items: [
                { text: '兼容性', link: 'wiki/ExcellentEnchants/features/compatibility' },
                { text: '分布', link: 'wiki/ExcellentEnchants/features/distribution' },
                { text: '附魔列表', link: 'wiki/ExcellentEnchants/features/enchantments' },
                { text: '附魔描述', link: 'wiki/ExcellentEnchants/features/description' },
                { text: '禁用附魔', link: 'wiki/ExcellentEnchants/features/disabling' },
                { text: '物品集', link: 'wiki/ExcellentEnchants/features/item-sets' },
                { text: '充能', link: 'wiki/ExcellentEnchants/features/charges' },
              ]
            },
            { text: '修饰符', link: 'wiki/ExcellentEnchants/modifiers' },
            { text: '内部变量', link: 'wiki/ExcellentEnchants/placeholders' },
            { text: '开发者 API', link: 'wiki/ExcellentEnchants/developer-api' }
          ]
        },
      ],
      'wiki/FallbackServer/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/FallbackServer/index' },
        {
          text: 'FallbackServer 维基', items: [
            { text: '👋 欢迎来到 FallbackServer 维基', link: 'wiki/FallbackServer/welcome-to-fallbackserver-wiki' },
            {
              text: '概览', collapsed: true, items: [
                { text: '🌐 初次使用', link: 'wiki/FallbackServer/overview/first-startup-guide' },
                { text: '📔 插件功能', link: 'wiki/FallbackServer/overview/features' },
                { text: '💥 已知问题', link: 'wiki/FallbackServer/overview/known-errors-issues' },
                { text: '🧬 版本类型', link: 'wiki/FallbackServer/overview/version-type' },
              ]
            },
            {
              text: '文件', collapsed: true, items: [
                { text: '📑 配置', link: 'wiki/FallbackServer/files/configuration' },
                { text: '📖 消息文本', link: 'wiki/FallbackServer/files/messages' },
              ]
            },

            {
              text: '用法', collapsed: true, items: [
                { text: '💻 命令', link: 'wiki/FallbackServer/usage/commands' },
              ]
            },

            {
              text: '其他', collapsed: true, items: [
                { text: '🚁 支持', link: 'wiki/FallbackServer/other/support' },
                { text: '📸 视频（暂不开放）' }
              ]
            },
          ]
        },
      ],
      'wiki/FastAsyncWorldEdit/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/FastAsyncWorldEdit/index' },
        {
          text: 'FastAsyncWorldEdit 维基', items: [
            { text: '介绍页', link: 'wiki/FastAsyncWorldEdit/readme' },
            {
              text: '开始', collapsed: true, items: [
                { text: '安装', link: 'wiki/FastAsyncWorldEdit/getting-started/installation' }
              ]
            },
            {
              text: '插件功能', collapsed: true, items: [
                { text: '命令概览', link: 'wiki/FastAsyncWorldEdit/features/command-overview' },
                { text: '工具物品', link: 'wiki/FastAsyncWorldEdit/features/tool-item' }
              ]
            },
            {
              text: '实用命令', collapsed: true, items: [
                { text: '笔刷', link: 'wiki/FastAsyncWorldEdit/command-utilties/brushes' },
                { text: '蒙版', link: 'wiki/FastAsyncWorldEdit/command-utilties/masks' },
                { text: '图案', link: 'wiki/FastAsyncWorldEdit/command-utilties/patterns' },
                { text: '变形', link: 'wiki/FastAsyncWorldEdit/command-utilties/transforms' }
              ]
            },
            {
              text: 'API', collapsed: true, items: [
                { text: 'API 用法', link: 'wiki/FastAsyncWorldEdit/api/api-usage' }
              ]
            },
            {
              text: '自定义', collapsed: true, items: [
                { text: '配置', link: 'wiki/FastAsyncWorldEdit/customization/configuration' },
                { text: '权限', link: 'wiki/FastAsyncWorldEdit/customization/permissions' }
              ]
            }
          ]
        },
      ],
      'wiki/HuskHomes/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/HuskHomes/index' },
        {
          text: 'HuskHomes 维基', items: [
            { text: '首页', link: 'wiki/HuskHomes/home' },
            {
              text: '安装', items: [
                {
                  text: '📚 安装教程', link: 'wiki/HuskHomes/setup/setup', collapsed: true, items: [
                    { text: '📩 导入数据', link: 'wiki/HuskHomes/setup/setup/importing-data' }
                  ]
                },
                {
                  text: '📄 配置文件', link: 'wiki/HuskHomes/setup/config', collapsed: true, items: [
                    { text: '📁 数据库', link: 'wiki/HuskHomes/setup/config/database' },
                    { text: '⛅ Redis', link: 'wiki/HuskHomes/setup/config/redis' },
                    { text: '📝 语言贡献', link: 'wiki/HuskHomes/setup/config/locales' },
                  ]
                },
                { text: '⚠️ 兼容性', link: 'wiki/HuskHomes/setup/compatibility' },
                {
                  text: '❓ 常见问题', link: 'wiki/HuskHomes/setup/faqs', collapsed: true, items: [
                    { text: '⚙️ 问题排查', link: 'wiki/HuskHomes/setup/faqs/troubleshooting' },
                  ]
                }
              ]
            },
            {
              text: '功能', items: [
                {
                  text: '🖥️ 命令列表', link: 'wiki/HuskHomes/features/commands', collapsed: true, items: [
                    { text: '📜 冲突命令', link: 'wiki/HuskHomes/features/commands/command-conflicts' },
                    { text: '⏰ 冷却', link: 'wiki/HuskHomes/features/commands/command-cooldowns' },
                    { text: '◀️ /back 命令', link: 'wiki/HuskHomes/features/commands/back-command' },
                    { text: '⚠️ 严格 /tpahere', link: 'wiki/HuskHomes/features/commands/strict-tpahere' },
                  ]
                },
                {
                  text: '⛔ 访问控制', link: 'wiki/HuskHomes/features/managing-access', collapsed: true, items: [
                    { text: '🚫 地标限制', link: 'wiki/HuskHomes/features/managing-access/restricted-warps' },
                  ]
                },
                {
                  text: '🌎 全局主城', link: 'wiki/HuskHomes/features/global-spawn', collapsed: true, items: [
                    { text: '🛏️ 全局重生', link: 'wiki/HuskHomes/features/global-spawn/global-respawning' },
                  ]
                },
              ]
            },
            {
              text: '联动', items: [
                { text: '🏷️ PlaceholderAPI 联动', link: 'wiki/HuskHomes/hooks/placeholderapi-hook' },
                { text: '💵 Vault 经济', link: 'wiki/HuskHomes/hooks/vault-economy' },
                { text: '🟩 Plan 统计', link: 'wiki/HuskHomes/hooks/player-analytics' },
                { text: '🍀 LuckPerms', link: 'wiki/HuskHomes/hooks/luckperms' },
                { text: '🗺️ Dynmap, BlueMap, Pl3xMap', link: 'wiki/HuskHomes/hooks/dynmap-bluemap-pl3xmap' },
              ]
            },
            {
              text: '开发者', collapsed: true, items: [
                {
                  text: '📦 API', link: 'wiki/HuskHomes/developers/api', collapsed: true, items: [
                    { text: '💡 API 示例', link: 'wiki/HuskHomes/developers/api/api-examples' },
                    { text: '⚡ API 事件', link: 'wiki/HuskHomes/developers/api/api-events' },
                    { text: '💻 源码', link: 'https://github.com/WiIIiam278/HuskHomes' },
                  ]
                },
              ]
            },
            {
              text: '链接', collapsed: true, items: [
                { text: '🚰 Spigot', link: 'https://www.spigotmc.org/resources/huskhomes.83767/' },
                { text: '🔧 Modrinth', link: 'https://modrinth.com/plugin/huskhomes' },
                { text: '🛒 Polymart', link: 'https://polymart.org/resource/huskhomes.284/' },
                { text: '🛫 Hangar', link: 'https://hangar.papermc.io/William278/HuskHomes' },
                { text: '🔥 CurseForge', link: 'https://www.curseforge.com/minecraft/mc-mods/huskhomes/' },
                { text: '📊 bStats', link: 'https://bstats.org/plugin/bukkit/HuskHomes/8430' }
              ]
            },
          ]
        },
      ],
      'wiki/HuskSync/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/HuskSync/index' },
        {
          text: 'HuskSync 维基', items: [
            { text: '首页', link: 'wiki/HuskSync/home' },
            {
              text: '安装', items: [
                {
                  text: '📚 安装教程', link: 'wiki/HuskSync/setup/setup', collapsed: true, items: [
                    { text: '✨ MPDB 迁移', link: 'wiki/HuskSync/setup/setup/mpdb-migration' },
                    { text: '↗️ 旧版迁移', link: 'wiki/HuskSync/setup/setup/legacy-migration' },
                  ]
                },
                {
                  text: '📄 配置文件', link: 'wiki/HuskSync/setup/config', collapsed: true, items: [
                    { text: '💾 数据库', link: 'wiki/HuskSync/setup/config/database' },
                    { text: '✨ Redis', link: 'wiki/HuskSync/setup/config/redis' },
                    { text: '🎏 语言贡献', link: 'wiki/HuskSync/setup/config/locales' },
                  ]
                },
                { text: '⚠️ 兼容相关', link: 'wiki/HuskSync/setup/compatbility' },
                {
                  text: '❓ 常见问题', link: 'wiki/HuskSync/setup/faqs', collapsed: true, items: [
                    { text: '🔗 问题排查', link: 'wiki/HuskSync/setup/faqs/troubleshooting' },
                  ]
                },
              ]
            },
            {
              text: '功能', items: [
                { text: '🖥️ 命令列表', link: 'wiki/HuskSync/features/commands' },
                {
                  text: '✅ 同步功能', link: 'wiki/HuskSync/features/sync-features', collapsed: true, items: [
                    { text: '⚙️ 同步模式', link: 'wiki/HuskSync/features/sync-features/sync-modes' },
                    { text: '↪️ 数据切换', link: 'wiki/HuskSync/features/sync-features/data-rotation' },
                  ]
                },
                { text: '🟩 Plan 统计联动', link: 'wiki/HuskSync/features/player-analytics-hook' },
              ]
            },
            {
              text: '教程', collapsed: true, items: [
                { text: '☂️ 用户数据缓存', link: 'wiki/HuskSync/guides/dumping-userdata' },
                { text: '⚔️ 背包保存', link: 'wiki/HuskSync/guides/keep-inventory' },
                { text: '📋 事件优先级', link: 'wiki/HuskSync/guides/event-priorties' },
              ]
            },
            {
              text: '开发者', collapsed: true, items: [
                {
                  text: '📦 API v3', link: 'wiki/HuskSync/developers/api-v3', collapsed: true, items: [
                    { text: '📝 数据快照 API', link: 'wiki/HuskSync/developers/api-v3/data-snapshot-api' },
                    { text: '📝 自定义数据 API', link: 'wiki/HuskSync/developers/api-v3/custom-data-api' },
                    { text: '❗ API 事件', link: 'wiki/HuskSync/developers/api-v3/api-events' },
                  ]
                },
                { text: '🕸️ API v2<i>（旧版）</i>', link: 'wiki/HuskSync/developers/api-v2-legacys' },
                { text: '💻 源码', link: 'https://github.com/WiIIiam278/HuskSync' },
              ]
            },
            {
              text: '链接', collapsed: true, items: [
                { text: '🚰 Spigot', link: 'https://www.spigotmc.org/resources/husksync.97144/' },
                { text: '🛒 Polymart', link: 'https://polymart.org/resource/husksync.1634' },
                { text: '🛒 BuiltByBit', link: 'https://craftaro.com/marketplace/product/husksync.758' },
                { text: '📊 bStats', link: 'https://bstats.org/plugin/bukkit/HuskSync%20-%20Bukkit/13140' }
              ]
            },
          ]
        },
      ],
      'wiki/LibreLogin/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/LibreLogin/index' },
        {
          text: 'LibreLogin 维基', items: [
            { text: '插件功能', link: 'wiki/LibreLogin/features' },
            { text: '插件命令', link: 'wiki/LibreLogin/commands' },
            {
              text: '教程', collapsed: true, items: [
                { text: '安装', link: 'wiki/LibreLogin/guides/installtion' },
                { text: '数据库迁移', link: 'wiki/LibreLogin/guides/database-migration' },
                { text: 'UUID 创建器', link: 'wiki/LibreLogin/guides/uuid-creators' },
                { text: '配置服务器', link: 'wiki/LibreLogin/guides/configuring-servers' },
              ]
            },
            { text: '顾虑', link: 'wiki/LibreLogin/considerations' },
            {
              text: 'API', collapsed: true, items: [
                { text: '基础 API 信息', link: 'wiki/LibreLogin/api/basic-api-information' },
                { text: 'API 事件', link: 'wiki/LibreLogin/api/api-events' },
              ]
            },
            {
              text: '实用链接', collapsed: true, items: [
                { text: '配置文件', link: 'wiki/LibreLogin/useful-stuff/config' },
                { text: '消息文件', link: 'wiki/LibreLogin/useful-stuff/messages' },
              ]
            },
          ]
        },

      ],
      'wiki/LuckPerms/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/LuckPerms/index' },
        {
          text: 'LuckPerms 维基', items: [
            { text: '主页', link: 'wiki/LuckPerms/home' },
            { text: '安装（单服）', link: 'wiki/LuckPerms/install-on-a-single-server' },
            { text: '安装（群组服）', link: 'wiki/LuckPerms/install-on-multiple-servers.md' },
            { text: '开始', link: 'wiki/LuckPerms/getting-started' },
            { text: '存储', link: 'wiki/LuckPerms/storage' },
            { text: '配置文件', link: 'wiki/LuckPerms/configuration' },
            { text: '常见问题', link: 'wiki/LuckPerms/faq' },
            { text: 'Hytale', link: 'wiki/LuckPerms/hytale' },
            {
              text: '命令用法', link: 'wiki/LuckPerms/command-usage', collapsed: true, items: [
                { text: '通用', link: 'wiki/LuckPerms/command-usage/general' },
                { text: '玩家', link: 'wiki/LuckPerms/command-usage/user' },
                { text: '权限组', link: 'wiki/LuckPerms/command-usage/group' },
                { text: '权限', link: 'wiki/LuckPerms/command-usage/permission' },
                { text: '继承', link: 'wiki/LuckPerms/command-usage/parent' },
                { text: '元数据', link: 'wiki/LuckPerms/command-usage/meta' },
                { text: '路线', link: 'wiki/LuckPerms/command-usage/track' },
                { text: '记录', link: 'wiki/LuckPerms/command-usage/log' },
                { text: '权限参考', link: 'wiki/LuckPerms/command-usage/permissions-reference' },
              ]
            },
            {
              text: '功能', collapsed: true, items: [
                { text: '网页编辑器', link: 'wiki/LuckPerms/features/web-editor' },
                { text: '情境', link: 'wiki/LuckPerms/features/context' },
                { text: '权重', link: 'wiki/LuckPerms/features/weight' },
                { text: '前缀、后缀与元数据', link: 'wiki/LuckPerms/features/prefix-suffix-meta' },
                { text: '权限检查系统', link: 'wiki/LuckPerms/features/verbose' },
                { text: '路线', link: 'wiki/LuckPerms/features/tracks' },
                { text: '默认组', link: 'wiki/LuckPerms/features/default-groups' },
              ]
            },

            {
              text: '教程', collapsed: true, items: [
                { text: '在服务器间<b>同步数据</b>', link: 'wiki/LuckPerms/how-to/sync-data-between-servers' },
                { text: '修复<b>存储错误</b>', link: 'wiki/LuckPerms/how-to/fix-storage-errors' },
                { text: '从其他插件<b>迁移</b>', link: 'wiki/LuckPerms/how-to/migrate-from-other-plugins' },
                { text: '更改<b>存储方式</b>', link: 'wiki/LuckPerms/how-to/switch-storage-types' },
                { text: '执行<b>零散编辑</b>', link: 'wiki/LuckPerms/how-to/perform-bulk-edits' },
                { text: '<b>叠加前缀</b>', link: 'wiki/LuckPerms/how-to/stack-prefixes' },
                { text: '安装<b>拓展</b>', link: 'wiki/LuckPerms/how-to/install-extensions' },
                { text: '设置<b>基于参数的命令权限</b>', link: 'wiki/LuckPerms/how-to/setup-argument-based-command-permissions' },]
            },

            {
              text: '开发者', collapsed: true, items: [
                { text: 'API 概述', link: 'wiki/LuckPerms/developers/api-introduction' },
                { text: 'API 用法', link: 'wiki/LuckPerms/developers/api-usage' },
                { text: '独立 APP&REST API', link: 'wiki/LuckPerms/developers/standalone-app-rest-api' },
                { text: '贡献', link: 'wiki/LuckPerms/developers/contributing' },
              ]
            },

            {
              text: '参考', collapsed: true, items: [
                { text: '从 v4 升级至 v5', link: 'wiki/LuckPerms/reference/upgrading-from-v4-to-v5' },
                { text: '从 GM 或 PEX 迁移', link: 'wiki/LuckPerms/reference/migrating-from-gm-or-pex' },
                { text: '权限计算的运作方式', link: 'wiki/LuckPerms/reference/how-permission-calculation-works' },
                { text: '网页编辑器的技术细节', link: 'wiki/LuckPerms/reference/web-editor-technical-details' },
                { text: '自托管网页界面', link: 'wiki/LuckPerms/reference/self-hosting-the-web-interfaces' },
              ]
            },
            {
              text: '项目信息', collapsed: true, items: [
                { text: '为何选择 LuckPerms？', link: 'wiki/LuckPerms/project-info/why-luckperms' },
                { text: '鸣谢', link: 'wiki/LuckPerms/project-info/credits' },
                { text: '本地化与翻译', link: 'wiki/LuckPerms/project-info/locale-and-translations' },
                { text: '变量', link: 'wiki/LuckPerms/project-info/placeholders' },
                { text: '外部连接', link: 'wiki/LuckPerms/project-info/external-connections' },
              ]
            },
          ]
        },
      ],
      'wiki/Oraxen/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/Oraxen/index' },
        {
          text: 'Oraxen 维基', items: [
            { text: '初次使用', link: 'wiki/Oraxen/getting-started' },
            { text: '常见问题', link: 'wiki/Oraxen/frequently-asked-questions' },
            {
              text: '用法', collapsed: true, items: [
                { text: '命令', link: 'wiki/Oraxen/usage/commands' },
                { text: '默认物品', link: 'wiki/Oraxen/usage/default-items' },
                { text: '配方', link: 'wiki/Oraxen/usage/recipes' },
              ]
            },

            {
              text: '配置', collapsed: true, items: [
                { text: '基础学习', link: 'wiki/Oraxen/configuration/unserstanding-the-basics' },
                { text: '插件设置', link: 'wiki/Oraxen/configuration/plugin-settings' },
                { text: '（初学者）物品', link: 'wiki/Oraxen/configuration/items-beginners' },
                {
                  text: '（进阶）物品', link: 'wiki/Oraxen/configuration/items-advanced', collapsed: true, items: [
                    { text: '可染色物品', link: 'wiki/Oraxen/configuration/items-advanced/dyeable-items' },
                  ]
                },
                { text: '自定义盔甲', link: 'wiki/Oraxen/configuration/custom-armors' },
                { text: '自定义 HUD', link: 'wiki/Oraxen/configuration/custom-hud' },
                { text: '手势动作', link: 'wiki/Oraxen/configuration/gestures' },
                { text: '物品外观', link: 'wiki/Oraxen/configuration/item-appearance' },
                {
                  text: '自定义字符', link: 'wiki/Oraxen/configuration/glyphs', collapsed: true, items: [
                    { text: '自定义界面', link: 'wiki/Oraxen/configuration/glyphs/custom-gui' },
                  ]
                },
              ]
            },
            {
              text: '机制', collapsed: true, items: [
                { text: '介绍', link: 'wiki/Oraxen/mechanics/introduction' },
                {
                  text: '所有机制', link: 'wiki/Oraxen/mechanics/all-mechanics', collapsed: true, items: [
                    { text: '自定义机制', link: 'wiki/Oraxen/mechanics/all-mechanics/custom-mechanics' },
                    { text: '点击动作（clickAction）机制', link: 'wiki/Oraxen/mechanics/all-mechanics/clickaction-mechanic' },
                  ]
                },

                {
                  text: '家具机制', link: 'wiki/Oraxen/mechanics/furniture-mechanic', collapsed: true, items: [
                    { text: '家具位置', link: 'wiki/Oraxen/mechanics/furniture-mechanic/furniture-position' },
                    { text: '展示实体家具', link: 'wiki/Oraxen/mechanics/furniture-mechanic/display-entity-furniture' },
                    { text: '耕作机制', link: 'wiki/Oraxen/mechanics/furniture-mechanic/farming-mechanic' },
                  ]
                },

                {
                  text: '音符盒机制', link: 'wiki/Oraxen/mechanics/noteblock-mechanic', collapsed: true, items: [
                    { text: '去皮木头机制', link: 'wiki/Oraxen/mechanics/noteblock-mechanic/stripped-log-mechanic' },
                    { text: '方向机制', link: 'wiki/Oraxen/mechanics/noteblock-mechanic/directional-mechanic' },
                    { text: '耕地机制', link: 'wiki/Oraxen/mechanics/noteblock-mechanic/farmblock-mechanic' },
                  ]
                },

                {
                  text: '绊线方块机制', link: 'wiki/Oraxen/mechanics/stringblock-mechanic', collapsed: true, items: [
                    { text: '树苗机制', link: 'wiki/Oraxen/mechanics/stringblock-mechanic/sapling-mechanic' },
                  ]
                },
              ]
            },


            {
              text: '➕ 附属', collapsed: true, items: [
                { text: 'CustomBlockExpansion', link: 'wiki/Oraxen/addons/customblockexpansion' },
              ]
            },

            {
              text: '兼容性', collapsed: true, items: [
                { text: 'BossShopPro - 商店', link: 'wiki/Oraxen/compatibility/bossshoppro-shop' },
                { text: 'CrateReloaded - 抽奖箱', link: 'wiki/Oraxen/compatbility.cratereloaded-crates' },
                { text: 'ModelEngine - 自定义生物', link: 'wiki/Oraxen/compatibility/modelengine-custom-mobs' },
                { text: 'MythicMobs - 自定义生物', link: 'wiki/Oraxen/compatibility/mythicmobs-custom-mobs' },
                { text: 'TrMenu - 自定义界面', link: 'wiki/Oraxen/compatibility/trmenu-custom-inventories' },
                { text: 'MMOItems', link: 'wiki/Oraxen/compatibility/mmoitems' },
                { text: 'MythicCrucible', link: 'wiki/Oraxen/compatibility/mythiccrucible' },
                { text: 'HappyHUD', link: 'wiki/Oraxen/compatibility/happyhud' },
                {
                  text: '世界生成器', link: 'wiki/Oraxen/compatibility/world-generators', collapsed: true, items: [
                    { text: 'Iris', link: 'wiki/Oraxen/compatibility/world-generators/iris-world-generator' },
                    { text: 'EpicWorldGenerator', link: 'wiki/Oraxen/compatibility/world-generators/epicworldgenerator' },
                    { text: 'Custom Ore Generator', link: 'wiki/Oraxen/compatibility/world-generators/custom-ore-generator' },
                    { text: 'RealisticWorldGenerator', link: 'wiki/Oraxen/compatibility/world-generators/realisticworldgenerator' },
                  ]
                },
              ]
            },

            {
              text: '创作者相关', collapsed: true, items: [
                { text: '创作者指导', link: 'wiki/Oraxen/vendors/vendor-guidelines' },
              ]
            },

            {
              text: '开发者相关', collapsed: true, items: [
                { text: '编写自定义机制', link: 'wiki/Oraxen/developers/create-your-own-mechanic' },
                { text: '与其他插件兼容', link: 'wiki/Oraxen/developers/add-compability-with-a-plugin' },
                { text: '自定义托管服务', link: 'wiki/Oraxen/developers/custom-hosting-service' },
                { text: 'API', link: 'wiki/Oraxen/developers/api' },
              ]
            },

          ]
        },

      ],
      'wiki/PlaceholderAPI/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/PlaceholderAPI/index' },
        {
          text: 'PlaceholderAPI 维基', items: [
            { text: '欢迎', link: 'wiki/PlaceholderAPI/welcome' },
            {
              text: '用户教程', collapsed: true, link: 'wiki/PlaceholderAPI/user-guides', items: [
                { text: '命令', link: 'wiki/PlaceholderAPI/user-guides/commands' },
                { text: '使用变量', link: 'wiki/PlaceholderAPI/user-guides/using-placeholders' },
                { text: '变量列表', link: 'wiki/PlaceholderAPI/user-guides/placeholder-list/index', collapsed: true, items: [
                  { text: 'Minecraft', link: 'wiki/PlaceholderAPI/user-guides/placeholder-list/minecraft' },
                  { text: 'Hytale', link: 'wiki/PlaceholderAPI/user-guides/placeholder-list/hytale' },
                ] },
                { text: '使用 PlaceholderAPI 的插件', link: 'wiki/PlaceholderAPI/user-guides/plugins-using-placeholderapi/index', collapsed: true, items: [
                  { text: 'Minecraft', link: 'wiki/PlaceholderAPI/user-guides/plugins-using-placeholderapi/minecraft' },
                  { text: 'Hytale', link: 'wiki/PlaceholderAPI/user-guides/plugins-using-placeholderapi/hytale' },
                ] }
              ]
            },
            {
              text: '开发者教程', collapsed: true, link: 'wiki/PlaceholderAPI/dev-guides', items: [
                { text: '使用 PlaceholderAPI', link: 'wiki/PlaceholderAPI/dev-guides/using-placeholderapi' },
                { text: '创建变量拓展', link: 'wiki/PlaceholderAPI/dev-guides/creating-a-placeholderexpansion' },
                { text: 'eCloud', link: 'wiki/PlaceholderAPI/dev-guides/ecloud' }
              ]
            },
            { text: '常见问题', link: 'wiki/PlaceholderAPI/common-issues/index', collapsed: true, items: [
              { text: 'eCloud 连接被阻止', link: 'wiki/PlaceholderAPI/common-issues/ecloud-connection-blocked' }
            ] },
            { text: '常被问到的问题', link: 'wiki/PlaceholderAPI/faq' },
          ]
        },
      ],
      'wiki/PlayerPoints/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/PlayerPoints/index' },
        {
          text: 'PlayerPoints 维基', items: [
            { text: '介绍', link: 'wiki/PlayerPoints/introduction' },
            { text: 'PlaceholderAPI 支持', link: 'wiki/PlayerPoints/placeholderapi-support' },
            { text: '命令与权限', link: 'wiki/PlayerPoints/commands-permissions' },
            {
              text: 'API 用法', collapsed: true, items: [
                { text: '开始使用', link: 'wiki/PlayerPoints/api-usage/getting-started' }
              ]
            },
          ]
        },
      ],
      'wiki/Shopkeepers/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/Shopkeepers/index' },
        {
          text: 'Shopkeepers 维基', items: [
            { text: '首页', link: 'wiki/Shopkeepers/home' },
            {
              text: '安装与更新', collapsed: true, link: 'wiki/Shopkeepers/installtion-updating', items: [
                { text: '配置', link: 'wiki/Shopkeepers/installtion-updating/configuration' },
                { text: '语言文件', link: 'wiki/Shopkeepers/installtion-updating/language-files' },
                { text: '权限', link: 'wiki/Shopkeepers/installtion-updating/permissions' },
                { text: '统计数据', link: 'wiki/Shopkeepers/installtion-updating/plugin-statistics' },
              ]
            },
            {
              text: '创建商店', collapsed: true, link: 'wiki/Shopkeepers/creating-shops', items: [
                { text: '编辑商店', link: 'wiki/Shopkeepers/creating-shops/editing-shops' },
                { text: '设置管理员商店', link: 'wiki/Shopkeepers/creating-shops/admin-shop-setup' },
                { text: '设置玩家商店', link: 'wiki/Shopkeepers/creating-shops/setup-player-shop' },
                { text: '变量物品', link: 'wiki/Shopkeepers/creating-shops/placeholder-items' },
                { text: 'Citizens 村民商店', link: 'wiki/Shopkeepers/creating-shops/citizens-shopkeepers' },
              ]
            },
            { text: '命令列表', link: 'wiki/Shopkeepers/commands' },
            {
              text: '其他功能', collapsed: true, items: [
                { text: '交易记录', link: 'wiki/Shopkeepers/other-features/trade-notifications' },
                { text: '交易提醒', link: 'wiki/Shopkeepers/other-features/trade-notifications' },
                { text: '购买时执行命令', link: 'wiki/Shopkeepers/other-features/selling-commands' },
                { text: '普通村民编辑', link: 'wiki/Shopkeepers/other-features/editor-for-regular-villagers' },
                { text: '附属插件', link: 'wiki/Shopkeepers/other-features/third-party-add-on-plugins' },
              ]
            },
            {
              text: '更多信息', collapsed: true, items: [
                { text: '创建经济', link: 'wiki/Shopkeepers/more-information/creating-an-economy' },
                { text: '物品序列化', link: 'wiki/Shopkeepers/more-information/item-serialization' },
                { text: '已知漏洞', link: 'wiki/Shopkeepers/more-information/known-issues' },
                { text: '常见问题', link: 'wiki/Shopkeepers/more-information/frequently-asked-questions' },
              ]
            }
          ]
        },
      ],
      'wiki/spark/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/spark/index' },
        {
          text: 'spark 维基', items: [
            {
              text: 'spark', collapsed: true, items: [
                { text: '主页', link: 'wiki/spark/spark/home' },
                { text: '安装', link: 'wiki/spark/spark/installation' },
                { text: '命令用法', link: 'wiki/spark/spark/command-usage' },
                { text: '正确使用报告浏览器', link: 'wiki/spark/spark/using-the-viewer' },
                { text: '开发者 API', link: 'wiki/spark/spark/developer-api' },
                { text: '配置文件', link: 'wiki/spark/spark/configuration' },
                { text: '独立代理', link: 'wiki/spark/spark/standalone-agent' }
              ]
            },

            {
              text: 'spark 教程', collapsed: true, items: [
                { text: '排查卡顿问题', link: 'wiki/spark/spark-guides/finding-the-cause-of-lag-spikes' },
                { text: '刻循环', link: 'wiki/spark/spark-guides/the-tick-loop' },
                { text: 'TPS 与 MSPT', link: 'wiki/spark/spark-guides/tps-and-mspt' },
              ]
            },

            {
              text: 'spark 其他内容', collapsed: true, items: [
                { text: '优势何在？', link: 'wiki/spark/spark-misc/spark-vs-others' },
                { text: '使用 async-profiler 引擎', link: 'wiki/spark/spark-misc/using-async-profiler-engine' },
                { text: '关于 spark 的统计信息', link: 'wiki/spark/spark-misc/about-spark-metrics' },
                { text: 'spark 的原数据', link: 'wiki/spark/spark-misc/raw-spark-data' },
                { text: '变量', link: 'wiki/spark/spark-misc/placeholders' },
                { text: '信息点', link: 'wiki/spark/spark-misc/info-points' },
                { text: '鸣谢', link: 'wiki/spark/spark-misc/credits' },
              ]
            },

          ]
        },


      ],
      'wiki/SuperiorSkyblock2/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/SuperiorSkyblock2/index' },
        {
          text: 'SuperiorSkyblock2 维基', items: [
            {
              text: '概览', link: 'wiki/SuperiorSkyblock2/overview', collapsed: false, items: [
                {
                  text: '命令与权限', collapsed: true, items: [
                    { text: '玩家命令', link: 'wiki/SuperiorSkyblock2/overview/commands-and-permissions/player-commands' },
                    { text: '管理员命令', link: 'wiki/SuperiorSkyblock2/overview/commands-and-permissions/admin-commands' },
                    { text: '权限', link: 'wiki/SuperiorSkyblock2/overview/commands-and-permissions/permissions' }
                  ]
                },
                {
                  text: '变量', link: 'wiki/SuperiorSkyblock2/overview/placeholders', collapsed: true, items: [
                    { text: '全局变量', link: 'wiki/SuperiorSkyblock2/overview/placeholders/global-placeholders' },
                    { text: '岛屿变量', link: 'wiki/SuperiorSkyblock2/overview/placeholders/island-placeholders' },
                    { text: '玩家变量', link: 'wiki/SuperiorSkyblock2/overview/placeholders/player-placeholders' },
                    { text: '聊天变量', link: 'wiki/SuperiorSkyblock2/overview/placeholders/chat-placeholders' },
                  ]
                },
                { text: '配置文件', link: 'wiki/SuperiorSkyblock2/overview/configuration-files' },
                { text: '消息文件', link: 'wiki/SuperiorSkyblock2/overview/messages' },
                { text: '岛屿标志', link: 'wiki/SuperiorSkyblock2/overview/island-flags' },
                { text: '岛屿权限', link: 'wiki/SuperiorSkyblock2/overview/island-privileges' },
                { text: '结构', link: 'wiki/SuperiorSkyblock2/overview/schematics' },
                {
                  text: '岛屿升级', link: 'wiki/SuperiorSkyblock2/overview/upgrades', collapsed: true, items: [
                    { text: '岛屿翻倍卡', link: 'wiki/SuperiorSkyblock2/overview/upgrades/island-multipliers' }
                  ]
                },
                {
                  text: '菜单', link: 'wiki/SuperiorSkyblock2/overview/menus', collapsed: true, items: [
                    { text: '银行日志菜单', link: 'wiki/SuperiorSkyblock2/overview/menus/bank-logs-menu' },
                    { text: '群系菜单', link: 'wiki/SuperiorSkyblock2/overview/menus/biomes-menu' }
                  ]
                },
                {
                  text: '任务', link: 'wiki/SuperiorSkyblock2/overview/missions', collapsed: true, items: [
                    { text: '方块任务', link: 'wiki/SuperiorSkyblock2/overview/missions/blocksmissions' },
                    { text: '酿造任务', link: 'wiki/SuperiorSkyblock2/overview/missions/brewingmissions' },
                    { text: '合成任务', link: 'wiki/SuperiorSkyblock2/overview/missions/craftingmissions' },
                    { text: '附魔任务', link: 'wiki/SuperiorSkyblock2/overview/missions/enchantingmissions' },
                    { text: '耕作任务', link: 'wiki/SuperiorSkyblock2/overview/missions/farmingmissions' },
                    { text: '钓鱼任务', link: 'wiki/SuperiorSkyblock2/overview/missions/fishingmissions' },
                    { text: '岛屿任务', link: 'wiki/SuperiorSkyblock2/overview/missions/islandmissions' },
                    { text: '物品任务', link: 'wiki/SuperiorSkyblock2/overview/missions/itemsmissions' },
                    { text: '击杀任务', link: 'wiki/SuperiorSkyblock2/overview/missions/killsmissions' },
                    { text: '统计数据任务', link: 'wiki/SuperiorSkyblock2/overview/missions/statisticsmissions' },
                  ]
                },
                { text: 'JavaScript 引擎', link: 'wiki/SuperiorSkyblock2/overview/javascript-engine' },
                { text: '自定义方块', link: 'wiki/SuperiorSkyblock2/overview/custom-blocks' },
                {
                  text: 'API', link: 'wiki/SuperiorSkyblock2/overview/api', collapsed: true, items: [
                    { text: '注册命令', link: 'wiki/SuperiorSkyblock2/overview/api/register-your-own-command' },
                    { text: '注册方块键', link: 'wiki/SuperiorSkyblock2/overview/api/register-your-own-block-keys' }
                  ]
                },
                {
                  text: '附属', link: 'wiki/SuperiorSkyblock2/overview/addons', collapsed: true, items: [
                    { text: 'SSBOneBlock', link: 'wiki/SuperiorSkyblock2/overview/addons/ssboneblock' },
                    { text: 'SSBProxyBridge', link: 'wiki/SuperiorSkyblock2/overview/addons/ssbproxybridge' },
                  ]
                },
                { text: '插件源码', link: 'https://github.com/BG-Software-LLC/SuperiorSkyblock2' },
                { text: '漏洞跟踪', link: 'https://github.com/BG-Software-LLC/SuperiorSkyblock2/issues' },
                { text: '插件下载', link: 'https://bg-software.com/superiorSkyblock/' },
              ]
            }
          ]
        }
      ],
      'wiki/Terra/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/Terra/index' },
        {
          text: 'Terra 中文维基', items: [
            {
              text: '开始', link: 'wiki/Terra/getting-started', collapsed: true, items: [
                { text: 'Fabric 平台安装', link: 'wiki/Terra/getting-started/fabric-installation' },
                { text: 'Forge 平台安装', link: 'wiki/Terra/getting-started/forge-installation' },
                { text: 'Quilt 平台安装', link: 'wiki/Terra/getting-started/quilt-installation' },
                { text: 'Fabric、Forge 和 Quilt 客户端世界创建', link: 'wiki/Terra/getting-started/fabric-forge-and-quilt-client-world-creation' },
                { text: 'Fabric、Forge 和 Quilt 服务端世界创建', link: 'wiki/Terra/getting-started/fabric-forge-and-quilt-server-world-creation' },
                {
                  text: 'Bukkit 平台安装', link: 'wiki/Terra/getting-started/bukkit-installation', collapsed: true, items: [
                    { text: 'Bukkit 世界创建', link: 'wiki/Terra/getting-started/bukkit-installation/bukkit-world-creation' },
                    { text: '世界管理插件创建', link: 'wiki/Terra/getting-started/bukkit-installation/worldmanager-world-creation' }
                  ]
                },
                { text: '版本列表', link: 'wiki/Terra/getting-started/versions' }
              ]
            },
            { text: '联系与支持', link: 'wiki/Terra/contact-and-support' },
            {
              text: '配置包', link: 'wiki/Terra/config-packs', collapsed: true, items: [
                { text: '社区地形包', link: 'wiki/Terra/config-packs/community-packs' },
                { text: '安装地形包', link: 'wiki/Terra/config-packs/pack-installation' },
                {
                  text: '配置开发', link: 'wiki/Terra/config-packs/config-development', collapsed: true, items: [
                    { text: '配置开发简介', link: 'wiki/Terra/config-packs/config-development/config-development-introduction' },
                    { text: '配置文件', link: 'wiki/Terra/config-packs/config-development/config-files' },
                    { text: '在配置中设置数据', link: 'wiki/Terra/config-packs/config-development/defining-data-in-configs' },
                    { text: '配置系统', link: 'wiki/Terra/config-packs/config-development/the-config-system' },
                    { text: '元配置', link: 'wiki/Terra/config-packs/config-development/meta-configuration' },
                    {
                      text: '从零编写地形包', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch', collapsed: true, items: [
                        { text: '从零编写地形包', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-a-pack-from-scratch' },
                        { text: '从零编写调色板', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-a-palette-from-scratch' },
                        { text: '从零编写地形生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-terrain-from-scratch' },
                        { text: '从零编写地物生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-a-feature-from-scratch' },
                        { text: '从零编写地物结构生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-a-feature-with-a-structure-from-scratch' },
                        { text: '从零编写群系提供器', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-a-biome-provider-from-scratch' },
                        { text: '从零编写海洋生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-oceans-from-scratch' },
                        { text: '从零编写洞穴生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-carving-from-scratch' },
                        { text: '从零编写矿物生成', link: 'wiki/Terra/config-packs/config-development/creating-a-pack-from-scratch/creating-ores-from-scratch' },
                      ]
                    },
                    { text: '编辑现有地形包', link: 'wiki/Terra/config-packs/config-development/modifying-an-existing-pack' },
                    { text: '地形表达式列表', link: 'wiki/Terra/config-packs/config-development/list-of-terrain-expressions' },
                    { text: '多层地形', link: 'wiki/Terra/config-packs/config-development/multi-layered-terrain' },
                    {
                      text: '噪声', link: 'wiki/Terra/config-packs/config-development/noise', collapsed: true, items: [
                        { text: '配置噪声采样器', link: 'wiki/Terra/config-packs/config-development/noise/configuring-noise-samplers' },
                        { text: '噪声地物散布原理', link: 'wiki/Terra/config-packs/config-development/noise/how-noise-distributes-things' },
                        { text: '噪声采样器的工作原理', link: 'wiki/Terra/config-packs/config-development/noise/how-noise-samplers-work' }
                      ]
                    },
                    { text: '图片配置', link: 'wiki/Terra/config-packs/config-development/image-configuration' }
                  ]
                },
                {
                  text: '配置文档', link: 'wiki/Terra/config-packs/config-documentation', collapsed: true, items: [
                    {
                      text: '配置文件', link: 'wiki/Terra/config-packs/config-documentation/config-files', collapsed: true, items: [
                        { text: 'BIOME', link: 'wiki/Terra/config-packs/config-documentation/config-files/biome' },
                        { text: 'FEAUTRE', link: 'wiki/Terra/config-packs/config-documentation/config-files/feature' },
                        { text: 'ORE', link: 'wiki/Terra/config-packs/config-documentation/config-files/ore' },
                        { text: 'PALETTE', link: 'wiki/Terra/config-packs/config-documentation/config-files/palette' },
                        { text: 'SCATTERED_ORE', link: 'wiki/Terra/config-packs/config-documentation/config-files/scattered-ore' },
                        { text: 'pack.yml', link: 'wiki/Terra/config-packs/config-documentation/config-files/pack-yml' },
                      ]
                    },
                    {
                      text: '配置对象', link: 'wiki/Terra/config-packs/config-documentation/config-objects', collapsed: true, items: [
                        { text: '浮点数', link: 'wiki/Terra/config-packs/config-documentation/config-objects/float' },
                        { text: '整数', link: 'wiki/Terra/config-packs/config-documentation/config-objects/intenger' },
                        { text: '噪声采样器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/noisesampler' },
                        { text: '字符串', link: 'wiki/Terra/config-packs/config-documentation/config-objects/string' },
                        { text: '列表', link: 'wiki/Terra/config-packs/config-documentation/config-objects/list' },
                        { text: '映射表', link: 'wiki/Terra/config-packs/config-documentation/config-objects/map' },
                        { text: '布尔值', link: 'wiki/Terra/config-packs/config-documentation/config-objects/boolean' },
                        { text: '范围', link: 'wiki/Terra/config-packs/config-documentation/config-objects/range' },
                        { text: '权重列表', link: 'wiki/Terra/config-packs/config-documentation/config-objects/weightedlist' },
                        { text: '方块', link: 'wiki/Terra/config-packs/config-documentation/config-objects/block' },
                        { text: '标签', link: 'wiki/Terra/config-packs/config-documentation/config-objects/tag' },
                        { text: '流水线群系', link: 'wiki/Terra/config-packs/config-documentation/config-objects/pipelinebiome' },
                        { text: '颜色采样器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/colorsampler' },
                        { text: '样式', link: 'wiki/Terra/config-packs/config-documentation/config-objects/pattern' },
                        { text: '集合', link: 'wiki/Terra/config-packs/config-documentation/config-objects/set' },
                        { text: '分布器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/distributor' },
                        { text: '定位器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/locator' },
                        { text: '图像', link: 'wiki/Terra/config-packs/config-documentation/config-objects/image' },
                        { text: '表达式', link: 'wiki/Terra/config-packs/config-documentation/config-objects/expression' },
                        { text: '群系', link: 'wiki/Terra/config-packs/config-documentation/config-objects/biome' },
                        { text: '维度适用采样器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/dimensionapplicablesampler' },
                        { text: '数学函数', link: 'wiki/Terra/config-packs/config-documentation/config-objects/mathfunction' },
                        { text: '挤出可替换群系', link: 'wiki/Terra/config-packs/config-documentation/config-objects/extrusionreplaceablebiome' },
                        { text: '群系颜色映射表', link: 'wiki/Terra/config-packs/config-documentation/config-objects/biomecolormapping' },
                        { text: '颜色字符串', link: 'wiki/Terra/config-packs/config-documentation/config-objects/colorstring' },
                        { text: '群系提供器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/biomeprovider' },
                        { text: '调色板', link: 'wiki/Terra/config-packs/config-documentation/config-objects/palette' },
                        { text: '倾斜层', link: 'wiki/Terra/config-packs/config-documentation/config-objects/slantlayer' },
                        { text: '点位', link: 'wiki/Terra/config-packs/config-documentation/config-objects/point' },
                        { text: '挤压', link: 'wiki/Terra/config-packs/config-documentation/config-objects/extrusion' },
                        { text: '群系颜色转化器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/biomecolorconverter' },
                        { text: '调色板层', link: 'wiki/Terra/config-packs/config-documentation/config-objects/palettelayer' },
                        { text: '地物', link: 'wiki/Terra/config-packs/config-documentation/config-objects/feature' },
                        { text: '结构', link: 'wiki/Terra/config-packs/config-documentation/config-objects/structure' },
                        { text: '生成阶段', link: 'wiki/Terra/config-packs/config-documentation/config-objects/generationstage' },
                        { text: '平台群系', link: 'wiki/Terra/config-packs/config-documentation/config-objects/platformbiome' },
                        { text: '区块生成器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/chunkgenerator' },
                        { text: '流水线群系颜色转化器', link: 'wiki/Terra/config-packs/config-documentation/config-objects/pipelinebiomecolorconverter' },
                        { text: '源', link: 'wiki/Terra/config-packs/config-documentation/config-objects/source' },
                        { text: '阶段', link: 'wiki/Terra/config-packs/config-documentation/config-objects/stage' },
                        { text: '立体样条点', link: 'wiki/Terra/config-packs/config-documentation/config-objects/cubicsplinepoint' },
                        { text: '数字预测', link: 'wiki/Terra/config-packs/config-documentation/config-objects/numberpredicate' },
                      ]
                    },
                    {
                      text: 'TerraScript', link: 'wiki/Terra/config-packs/config-documentation/terra-script', collapsed: true, items: [
                        { text: 'TerraScript 功能', link: 'wiki/Terra/config-packs/config-documentation/terra-script/what-terrascript-can-do' },
                        { text: 'TerraScript 格式', link: 'wiki/Terra/config-packs/config-documentation/terra-script/terrascript-syntax' },
                        { text: 'TerraScript 函数', link: 'wiki/Terra/config-packs/config-documentation/terra-script/terrascript-functions' },
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Terra API', link: 'wiki/Terra/terra-api', collapsed: true, items: [
                {
                  text: 'Terra API 介绍', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api', collapsed: true, items: [
                    { text: 'Terra 依赖载入', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/terra-addon-loading' },
                    { text: '搭建开发环境', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/setting-up-a-development-environment' },
                    { text: '创建简单附属', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/create-a-simple-addon' },
                    { text: '监听事件', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/listening-for-an-event' },
                    { text: '添加结构', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/adding-a-structure' },
                    { text: '注册配置类型', link: 'wiki/Terra/terra-api/introduction-to-the-terra-api/registering-a-config-type' },

                  ]
                },
                {
                  text: 'API 概念', link: 'wiki/Terra/terra-api/api-concepts', collapsed: true, items: [
                    { text: '验证拓展', link: 'wiki/Terra/terra-api/api-concepts/manifest-addons' },
                    { text: '依赖注入', link: 'wiki/Terra/terra-api/api-concepts/dependency-injection' },
                    { text: 'SLF4J 记录', link: 'wiki/Terra/terra-api/api-concepts/logging-with-slf4j' },
                    { text: '事件', link: 'wiki/Terra/terra-api/api-concepts/events' },
                    { text: '类型键', link: 'wiki/Terra/terra-api/api-concepts/type-keys' },
                    { text: '注册条目', link: 'wiki/Terra/terra-api/api-concepts/registries' },
                    { text: '架构', link: 'wiki/Terra/terra-api/api-concepts/tectonic' },
                    { text: '云注册命令', link: 'wiki/Terra/terra-api/api-concepts/registering-commands-with-cloud' },
                  ]
                }
              ]
            }
          ]
        }
      ],
      'wiki/TownyAdvanced/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/TownyAdvanced/index' },
        {
          text: 'TownyAdvanced 中文维基', items: [
            {
              text: 'Towny Advanced', collapsed: true, items: [
                { text: '首页', link: 'wiki/TownyAdvanced/towny-advanced/home' },
                { text: '常见问题', link: 'wiki/TownyAdvanced/towny-advanced/faq' },
                { text: '运作方式', link: 'wiki/TownyAdvanced/towny-advanced/how-towny-works' },
                { text: 'Towny API', link: 'wiki/TownyAdvanced/towny-advanced/townyapi' },
                { text: 'Discord', link: 'https://discord.gg/gnpVs5m' }
              ]
            },
            {
              text: '设置教程', collapsed: true, items: [
                { text: '安装', link: 'wiki/TownyAdvanced/setup/installation' },
                { text: '更新 Towny', link: 'wiki/TownyAdvanced/setup/updating-towny' }
              ]
            },
            {
              text: '支持', collapsed: true, items: [
                { text: '问题排查', link: 'wiki/TownyAdvanced/support/troubleshooting' },
                {
                  text: 'Github 工单', link: 'https://github.com/TownyAdvanced/Towny/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen', collapsed: true, items: [
                    { text: '报告漏洞', link: 'https://github.com/TownyAdvanced/Towny/issues/new?assignees=&labels=&template=bug_report.md&title=' },
                    { text: '新功能建议', link: 'https://github.com/TownyAdvanced/Towny/issues/new?assignees=&labels=&template=feature_request.md&title=Suggestion%3A+' },
                    { text: '其他问题', link: 'https://github.com/TownyAdvanced/Towny/discussions/new?category=Q-A' }
                  ]
                },
                {
                  text: '支持 LlmDl', link: 'https://github.com/sponsors/LlmDl', collapsed: true, items: [
                    { text: '捐赠者插件', link: 'https://github.com/LlmDl/SponsorPlugins/blob/main/README.md' }
                  ]
                }
              ]
            },
            {
              text: '更新日志', collapsed: true, items: [
                { text: 'Towny 更新日志', link: 'https://github.com/TownyAdvanced/Towny/blob/master/Towny/src/main/resources/ChangeLog.txt' },
                { text: 'TownyChat 更新日志', link: 'https://github.com/TownyAdvanced/TownyChat/blob/master/resources/changelog.txt' }
              ]
            },
            {
              text: '参考', link: 'wiki/TownyAdvanced/reference/index', collapsed: true, items: [
                { text: '命令', link: 'wiki/TownyAdvanced/reference/commands' },
                { text: '权限节点', link: 'wiki/TownyAdvanced/reference/permission-nodes' },
                { text: '（PlaceholderAPI）变量', link: 'wiki/TownyAdvanced/reference/placeholders-papi' },
                {
                  text: '配置文件', link: 'wiki/TownyAdvanced/reference/configs/index', collapsed: true, items: [
                    { text: 'Config.yml', link: 'wiki/TownyAdvanced/reference/configs/config-yml' },
                    { text: 'Database.yml', link: 'wiki/TownyAdvanced/reference/configs/database-yml' },
                    { text: 'Townyperms.yml', link: 'wiki/TownyAdvanced/reference/configs/townyperms-yml' },
                    { text: 'ChatConfig.yml', link: 'wiki/TownyAdvanced/reference/configs/chatconfig-yml' },
                    { text: 'Channels.yml', link: 'wiki/TownyAdvanced/reference/configs/channels-yml' }
                  ]
                }
              ]
            },
            {
              text: '杂项', collapsed: true, items: [
                { text: '使用了 Towny API 的插件', link: 'wiki/TownyAdvanced/misc/plugins-using-towny-api' },
                { text: 'Siege War 维基', link: 'https://github.com/TownyAdvanced/SiegeWar/wiki' }
              ]
            }
          ]
        }
      ],
      'wiki/UltimateShop/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/UltimateShop/index' },
        {
          text: 'UltimateShop 中文维基', items: [
            { text: '🎉 欢迎', link: 'wiki/UltimateShop/welcome' },
            { text: '💬 配置包', link: 'wiki/UltimateShop/config-pack' },
            {
              text: '📦 信息', collapsed: true, items: [
                { text: '✅ 插件需求', link: 'wiki/UltimateShop/info/requirements' },
                { text: '⚙️ 安装', link: 'wiki/UltimateShop/info/install' },
                { text: '🔗 兼容性', link: 'wiki/UltimateShop/info/compatibility' },
                { text: '🛠️ 配置文件', link: 'wiki/UltimateShop/info/configuration-files' },
                { text: '⌨️ 命令与权限', link: 'wiki/UltimateShop/info/commands-and-permissions' },
                { text: '📊 数据', link: 'wiki/UltimateShop/info/data' },
                { text: '🚀 性能', link: 'wiki/UltimateShop/info/performance' },
                { text: '❓ 常见问题', link: 'wiki/UltimateShop/info/faq' },
                { text: '🆚 比较', link: 'wiki/UltimateShop/info/compare' }
              ]
            },
            {
              text: '📋 格式', collapsed: true, items: [
                { text: '📊 理解 YAML/维基', link: 'wiki/UltimateShop/format/understanding-yaml-this-wiki' },
                { text: '🛒 物品格式™ 的信息', link: 'wiki/UltimateShop/format/info-of-itemformat' },
                {
                  text: '📝 物品格式™', link: 'wiki/UltimateShop/format/itemformat', collapsed: true, items: [
                    { text: '物品组件格式', link: 'wiki/UltimateShop/format/itemformat/component-format' }
                  ]
                },
                { text: '🌉 ItemBridge', link: 'wiki/UltimateShop/format/itembridge' },
                { text: '💹 经济格式™', link: 'wiki/UltimateShop/format/economyformat' },
                { text: '🖼️ 展示物品格式', link: 'wiki/UltimateShop/format/display-item-format' },
                { text: '🎬 动作格式', link: 'wiki/UltimateShop/format/action-format' },
                { text: '⚖️ 条件格式', link: 'wiki/UltimateShop/format/condition-format' },
                { text: '➗ 数学运算格式', link: 'wiki/UltimateShop/format/math-calculate-format' },
              ]
            },
            {
              text: '🔌 菜单', collapsed: true, items: [
                { text: '🔲 全局菜单', link: 'wiki/UltimateShop/menus/general-menus' },
                { text: '🔽 增量购买菜单', link: 'wiki/UltimateShop/menus/buy-more-menus' },
                { text: '🔍 搜索菜单 - 仅付费版', link: 'wiki/UltimateShop/menus/search-menus-premium' },
                { text: '❤️ 收藏夹 - 仅付费版', link: 'wiki/UltimateShop/menus/favourite-menu-premium' },
                { text: '🛒 全部出售菜单', link: 'wiki/UltimateShop/menus/sell-all-menu' },
                { text: '🔀 条件显示 - 仅付费版', link: 'wiki/UltimateShop/menus/conditional-display' },
                { text: '🛏️ 基岩版菜单 - 仅付费版', link: 'wiki/UltimateShop/menus/bedrock-menus-premium' },
                { text: '🥉 物品描述追加', link: 'wiki/UltimateShop/menus/display-item-add-lore/index' },
              ]
            },
            {
              text: '🛍️ 商店', collapsed: true, items: [
                { text: '📂 商店', link: 'wiki/UltimateShop/shops/index' },
                { text: '🛒 物品', link: 'wiki/UltimateShop/shops/products' },
                { text: '💰 物品配置：单条目', link: 'wiki/UltimateShop/shops/products-config-single-thing/index' },
                { text: '♻️ 物品配置：交易次数重置', link: 'wiki/UltimateShop/shops/product-config-buy-sell-times-reset' },
                { text: '🔗 共享商品数据 - 仅付费版', link: 'wiki/UltimateShop/shops/shared-product-data-premium' },
                { text: '💰 出售倍率 - 仅付费版', link: 'wiki/UltimateShop/shops/sell-multiplier-premium' },
                { text: '📚 普通示例', link: 'wiki/UltimateShop/shops/common-examples' },
                { text: '⚡ 示例：普通用法', link: 'wiki/UltimateShop/shops/example-common-usage' },
                { text: '🌱 示例：真实库存', link: 'wiki/UltimateShop/shops/example-stock-like-in-life' },
                { text: '📅 示例：每日商店/轮换商店', link: 'wiki/UltimateShop/shops/example-daily-shop-rotating-shop' },
                { text: '🏆 示例：每日奖励', link: 'wiki/UltimateShop/shops/example-daily-rewards' },
              ]
            },
            {
              text: '📍 变量', collapsed: true, items: [
                { text: '🔧 内置变量', link: 'wiki/UltimateShop/placeholders/built-in-placeholder' },
                { text: '🎲 随机变量 - 仅付费版', link: 'wiki/UltimateShop/placeholders/random-placeholder-premium' },
                { text: '⛓️ 条件变量 - 仅付费版', link: 'wiki/UltimateShop/placeholders/conditional-placeholder-premium' },
                { text: '🗯️ 自定义变量 - 仅付费版', link: 'wiki/UltimateShop/placeholders/custom-placeholder-premium' },
                { text: '🔖 示例：折扣', link: 'wiki/UltimateShop/placeholders/example-discount' },
              ]
            },
            {
              text: '💰 动态定价', collapsed: true, items: [
                { text: '🔄 动态定价', link: 'wiki/UltimateShop/dynamic-prices/dynamic-price' },
                { text: '🔴 动态定价状态 - 仅付费版', link: 'wiki/UltimateShop/dynamic-prices/dynamic-price-status-premium' },
              ]
            },
            {
              text: '✨ 特色功能', collapsed: true, items: [
                { text: '🌏 高级语言管理', link: 'wiki/UltimateShop/features/advanced-language-management' },
                { text: '🎨 颜色代码', link: 'wiki/UltimateShop/features/color-code' },
                { text: '💴 简单定价', link: 'wiki/UltimateShop/features/easy-prices' },
                { text: '🪄 出售魔杖 - 仅付费版', link: 'wiki/UltimateShop/features/sell-stick-premium' },
                { text: '🎁 出售魔箱 - 仅付费版', link: 'wiki/UltimateShop/features/sell-chest-premium' },
                { text: '💾 保存物品（物品管理器）', link: 'wiki/UltimateShop/features/saved-item-itemmanager' },
                { text: '🌍 本地化物品名称 - 仅付费版', link: 'wiki/UltimateShop/features/localized-item-name' },
                { text: '🌐 多服同步 - 仅付费版', link: 'wiki/UltimateShop/features/multi-server-sync-premium' },
                { text: '🔢 数字格式', link: 'wiki/UltimateShop/features/number-format' },
                { text: '✏️ 游戏内编辑器 - 仅付费版', link: 'wiki/UltimateShop/features/in-game-editor-premium' },
                { text: '🎮 自定义点击事件 - 仅付费版', link: 'wiki/UltimateShop/features/custom-click-event-premium' },
                { text: '🔍 自定义物品匹配方法', link: 'wiki/UltimateShop/features/custom-item-match-method' },
                { text: '🔑 物品给予方法', link: 'wiki/UltimateShop/features/give-item-method' },
                { text: '💳 日志记录 - 仅付费版', link: 'wiki/UltimateShop/features/log-transaction-premium' },
                { text: '🌈 收益限制', link: 'wiki/UltimateShop/features/earn-limit' }
              ]
            },
            {
              text: '💻 开发相关', collapsed: true, items: [
                { text: '开发教程', link: 'wiki/UltimateShop/develop/develop-guide' },
                // { text: '开发教程（旧）', link: ''},
                // { text: '事件', link: 'wiki/UltimateShop/develop/events' }
                // { text: '与 UltimateShop 挂钩', link: 'wiki/UltimateShop/develop/hook-into-ultimateshop' },
              ]
            },
          ]
        },
      ],
      'wiki/WorldEdit/': [
        { text: '返回首页', link: 'index' },
        { text: '更新日志', link: 'wiki/WorldEdit/changelogs' },
        { text: '前言', link: 'wiki/WorldEdit/index' },
        {
          text: 'WorldEdit 中文维基',
          items: [
            {
              text: '目录', link: 'wiki/WorldEdit/table-of-contents', items: [
                { text: '安装', link: 'wiki/WorldEdit/installtion' },
                { text: '快速开始', link: 'wiki/WorldEdit/quick-start' },
                { text: '配置文件', link: 'wiki/WorldEdit/configuration' },
                { text: '权限', link: 'wiki/WorldEdit/permissions' },
                { text: '命令', link: 'wiki/WorldEdit/commands' },
                {
                  text: '用法',
                  link: 'wiki/WorldEdit/usage',
                  collapsed: true,
                  items: [
                    {
                      text: '通用',
                      link: 'wiki/WorldEdit/usage/general',
                      collapsed: true,
                      items: [
                        { text: '历史', link: 'wiki/WorldEdit/usage/general/history' },
                        { text: '会话', link: 'wiki/WorldEdit/usage/general/sessions' },
                        { text: '图案', link: 'wiki/WorldEdit/usage/general/patterns' },
                        { text: '蒙版', link: 'wiki/WorldEdit/usage/general/masks' },
                      ]
                    },
                    { text: '导航', link: 'wiki/WorldEdit/usage/navigation' },
                    {
                      text: '区域',
                      link: 'wiki/WorldEdit/usage/regions',
                      collapsed: true,
                      items: [
                        { text: '选区', link: 'wiki/WorldEdit/usage/regions/selection' },
                        { text: '区域操作', link: 'wiki/WorldEdit/usage/regions/region-operations' },
                      ]
                    },
                    { text: '剪贴板', link: 'wiki/WorldEdit/usage/clipboard' },
                    { text: '生成', link: 'wiki/WorldEdit/usage/generation' },
                    { text: '绑定工具', link: 'wiki/WorldEdit/usage/tools' },
                    { text: '笔刷', link: 'wiki/WorldEdit/usage/brushes' },
                    { text: '实用工具', link: 'wiki/WorldEdit/usage/utilities' },
                    { text: '快照', link: 'wiki/WorldEdit/usage/snapshots' },
                    {
                      text: '其他',
                      link: 'wiki/WorldEdit/usage/other',
                      collapsed: true,
                      items: [
                        { text: '表达式', link: 'wiki/WorldEdit/usage/other/expression-syntax' },
                        { text: '快速脚本', link: 'wiki/WorldEdit/usage/other/craftscripts' },
                      ]
                    },
                  ]
                },
                {
                  text: '开发者 API',
                  link: 'wiki/WorldEdit/developer-api',
                  collapsed: true,
                  items: [
                    {
                      text: 'API 概念',
                      link: 'wiki/WorldEdit/developer-api/api-concepts',
                      collapsed: true,
                      items: [
                        { text: '操作方', link: 'wiki/WorldEdit/developer-api/api-concepts/actors' },
                        { text: '本地会话', link: 'wiki/WorldEdit/developer-api/api-concepts/local-sessions' },
                        { text: '方块', link: 'wiki/WorldEdit/developer-api/api-concepts/blocks' },
                        { text: '图案与蒙版', link: 'wiki/WorldEdit/developer-api/api-concepts/patterns-and-masks' },
                        { text: '区段', link: 'wiki/WorldEdit/developer-api/api-concepts/extents' },
                        { text: '区域', link: 'wiki/WorldEdit/developer-api/api-concepts/regions' },
                        { text: '注册项', link: 'wiki/WorldEdit/developer-api/api-concepts/registries' },
                        { text: '会话编辑', link: 'wiki/WorldEdit/developer-api/api-concepts/edit-sessions' },
                        { text: '适配器', link: 'wiki/WorldEdit/developer-api/api-concepts/adapters' },
                      ]
                    },
                    {
                      text: 'API 示例',
                      link: 'wiki/WorldEdit/developer-api/api-examples',
                      collapsed: true,
                      items: [
                        { text: '剪贴板示例', link: 'wiki/WorldEdit/developer-api/api-examples/clipboard-examples' },
                        { text: '结构示例', link: 'wiki/WorldEdit/developer-api/api-examples/schematic-examples' },
                        { text: 'LocalSession 示例', link: 'wiki/WorldEdit/developer-api/api-examples/localsession-examples' },
                      ]
                    },
                    { text: '内部 API', link: 'wiki/WorldEdit/developer-api/internal-apis' },
                  ]
                },
                { text: '常见问题', link: 'wiki/WorldEdit/common-questions' },
                { text: '获取帮助', link: 'wiki/WorldEdit/getting-help' },
                { text: '源码', link: 'wiki/WorldEdit/source-code' },
              ]
            },
          ]
        }
      ],
      'wiki/WorldGuard/': [
        { text: '返回首页', link: 'index' },
        { text: '前言', link: 'wiki/WorldGuard/index' },
        {
          text: 'WorldGuard 维基', items: [
            {
              text: '目录', link: 'wiki/WorldGuard/table-of-contents', items: [
                { text: '安装', link: 'wiki/WorldGuard/installation' },
                {
                  text: '配置', link: 'wiki/WorldGuard/configuration', collapsed: true, items: [
                    { text: '域名秘钥', link: 'wiki/WorldGuard/configuration/host-keys' },
                  ]
                },
                {
                  text: '权限列表', link: 'wiki/WorldGuard/permissions', collapsed: true, items: [
                    { text: '建筑权限', link: 'wiki/WorldGuard/permissions/build-permissions' },
                  ]
                },
                { text: '命令列表', link: 'wiki/WorldGuard/commands' },
                { text: '黑名单', link: 'wiki/WorldGuard/blacklist' },
                {
                  text: '区域', link: 'wiki/WorldGuard/regions', collapsed: true, items: [
                    { text: '快速开始', link: 'wiki/WorldGuard/regions/quick-start' },
                    { text: '区域魔杖', link: 'wiki/WorldGuard/regions/region-wand' },
                    { text: '区域标志', link: 'wiki/WorldGuard/regions/region-flags' },
                    { text: '优先级与继承', link: 'wiki/WorldGuard/regions/priority-and-inheritance' },
                    { text: '全局区域', link: 'wiki/WorldGuard/regions/global-region' },
                    { text: '区域命令', link: 'wiki/WorldGuard/regions/region-commands' },
                    { text: '区域认领', link: 'wiki/WorldGuard/regions/claiming' },
                    { text: '存储方式', link: 'wiki/WorldGuard/regions/storage-drivers' },
                    { text: '保护什么？', link: 'wiki/WorldGuard/regions/whats-protected' },
                    { text: '常见场景', link: 'wiki/WorldGuard/regions/common-scenarios' },
                  ]
                },
                { text: '箱子保护', link: 'wiki/WorldGuard/chest-protection' },
                {
                  text: 'WorldGuard API', link: 'wiki/WorldGuard/worldguard-api', collapsed: true, items: [
                    { text: '作为依赖', link: 'wiki/WorldGuard/worldguard-api/as-a-dependency' },
                    {
                      text: '区域开发相关', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/index', collapsed: true, items: [
                        { text: '区域管理模块', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/managers' },
                        { text: '区域对象', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/regions' },
                        { text: '自定义标志与选区处理模块', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/custom-flags-and-session-handlers' },
                        { text: '区域查询', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/querying-protection' },
                        { text: '标志计算', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/flag-calculation' },
                        { text: '保护查询', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/querying-protection' },
                        { text: '区域事件', link: 'wiki/WorldGuard/worldguard-api/working-with-regions/region-events' },
                      ]
                    },
                    { text: '引自 Bukkit 的对象', link: 'wiki/WorldGuard/worldguard-api/from-bukkit-objects' },
                    { text: '内部 API', link: 'wiki/WorldGuard/worldguard-api/internal-apis' },
                  ]
                },

                {
                  text: '高级话题', link: 'wiki/WorldGuard/advanced-topics/index', collapsed: true, items: [
                    { text: '事件记录', link: 'wiki/WorldGuard/advanced-topics/evet-logging' },
                  ]
                },
                { text: '常见问题', link: 'wiki/WorldGuard/common-questions' },
                { text: '获取帮助', link: 'wiki/WorldGuard/getting-help' },
                { text: '插件源码', link: 'wiki/WorldGuard/source-code' },
              ]
            },

          ]
        },


      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SnowCutieOwO/Continue' },
      { icon: 'afdian', link: 'https://afdian.com/@SnowCutieOwO' }
    ],
    logo: 'favicon.svg'
  }
})
