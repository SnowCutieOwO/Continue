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
        hm.src = "https://hm.baidu.com/hm.js?0dc05fd6e64cff9d5680877b4e642a6a";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
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
          { text: 'CSKB - 日冕知识库', link: '/other-sites/cskb' },
          { text: 'HiMCBBS', link: '/other-sites/himcbbs' }
        ]
      },
      {
        text: '📘 维基列表',
        items: [
          { text: 'ajLeaderboards', link: '/ajLeaderboards/index' },
          { text: 'AuraSkills', link: '/AuraSkills/index' },
          { text: 'AureliumSkills（旧）', link: '/AureliumSkills/index' },
          { text: 'Codex', link: '/Codex/index' },
          { text: 'CommandTimer', link: '/CommandTimer/index' },
          { text: 'CoreProtect', link: '/CoreProtect/index' },
          { text: 'DecentHolograms', link: 'DecentHolograms/index' },
          { text: 'ExcellentCrates', link: '/ExcellentCrates/index' },
          { text: 'ExcellentEnchants', link: '/ExcellentEnchants/index' },
          { text: 'FallbackServer', link: '/FallbackServer/index' },
          { text: 'FastAsyncWorldEdit', link: '/FastAsyncWorldEdit/index' },
          { text: 'HuskHomes', link: '/HuskHomes/index' },
          { text: 'HuskSync', link: '/HuskSync/index' },
          { text: 'LibreLogin', link: '/LibreLogin/index' },
          { text: 'LuckPerms', link: '/LuckPerms/index' },
          { text: 'Oraxen', link: '/Oraxen/index' },
          { text: 'PlaceholderAPI', link: '/PlaceholderAPI/index' },
          { text: 'PlayerPoints', link: '/PlayerPoints/index' },
          { text: 'Shopkeepers', link: '/Shopkeepers/index' },
          { text: 'spark', link: '/spark/index' },
          { text: 'SuperiorSkyblock2', link: '/SuperiorSkyblock2/index' },
          { text: 'UltimateShop', link: '/UltimateShop/index' },
          { text: 'WorldEdit', link: '/WorldEdit/index' },
          { text: 'WorldGuard', link: '/WorldGuard/index' },
        ]
      }
    ],

    sidebar: {
      // 首页之外的维基注释，下文根据插件名称单独列出注释
      // 写这段内容是为了防蠢备忘
      '/': [
        {
          text: '维基列表',
          items: [
            { text: 'ajLeaderboards', link: '/ajLeaderboards/index' },
            { text: 'AuraSkills', link: '/AuraSkills/index' },
            { text: 'AureliumSkills（旧）', link: '/AureliumSkills/index' },
            { text: 'Codex', link: '/Codex/index' },
            { text: 'CommandTimer', link: '/CommandTimer/index' },
            { text: 'CoreProtect', link: '/CoreProtect/index' },
            { text: 'DecentHolograms', link: 'DecentHolograms/index' },
            { text: 'ExcellentCrates', link: '/ExcellentCrates/index' },
            { text: 'ExcellentEnchants', link: '/ExcellentEnchants/index' },
            { text: 'FallbackServer', link: '/FallbackServer/index' },
            { text: 'FastAsyncWorldEdit', link: '/FastAsyncWorldEdit/index' },
            { text: 'HuskHomes', link: '/HuskHomes/index' },
            { text: 'HuskSync', link: '/HuskSync/index' },
            { text: 'LibreLogin', link: '/LibreLogin/index' },
            { text: 'LuckPerms', link: '/LuckPerms/index' },
            { text: 'Oraxen', link: '/Oraxen/index' },
            { text: 'PlaceholderAPI', link: '/PlaceholderAPI/index' },
            { text: 'PlayerPoints', link: '/PlayerPoints/index' },
            { text: 'Shopkeepers', link: '/Shopkeepers/index' },
            { text: 'spark', link: '/spark/index' },
            { text: 'SuperiorSkyblock2', link: '/SuperiorSkyblock2/index' },
            { text: 'UltimateShop', link: '/UltimateShop/index' },
            { text: 'WorldEdit', link: '/WorldEdit/index' },
            { text: 'WorldGuard', link: '/WorldGuard/index' },
          ]
        }
      ],
      '/other-sites/': [
        { text: '返回首页', link: '/index' },
        {
          text: '友链页面', items: [
            { text: '布丁的个人博客', link: '/other-sites/puddingkc-s-blog' },
            { text: 'CSKB - 日冕知识库', link: '/other-sites/cskb' },
            { text: 'HiMCBBS', link: '/other-sites/himcbbs' },
          ]
        },
      ],
      '/common/': [
        { text: '返回首页', link: '/index' },
        { text: '通例', link: '/common/index' },
        { text: '支持 Folia 的插件列表', link: '/common/folia-plugins' },
        { text: '翻译插件目录', link: '/common/translation-index' },
        {
          text: '🌟 个人向教程', link: '/common/personal-guides', collapsed: true, items: [
            { text: '安装教程', link: '/common/personal-guides.installtion' },
            { text: '实用链接', link: '/common/personal-guides.useful-links' },
            { text: '分世界显示玩家的 TAB', link: '/common/personal-guides.tab-based-world-seperation' },
            { text: '在火狐及分支上使用 Motrix 接管下载', link: '/common/personal-guides.motrix-setup-firefox' },
            { text: 'FCL 服务器手机端制作简述（电脑）', link: '/common/personal-guides.fcl-pc-setup' },
            { text: 'FCL 服务器手机端制作简述（手机）', link: '/common/personal-guides.fcl-moble-setup' },
          ]
        }
      ],
      '/AureliumSkills/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/AureliumSkills/index' },
        {
          text: 'AureliumSkills 维基',
          items: [
            { text: '欢迎', link: '/AureliumSkills/welcome' },
            {
              text: '配置',
              collapsed: true,
              items: [
                {
                  text: '主配置',
                  link: '/AureliumSkills/configuration.main-config',
                  items: [
                    { text: 'MySQL', link: '/AureliumSkills/configuration.main-config.mysql' },
                  ]
                },
              ]
            },
            { text: '消息文本', link: '/AureliumSkills/configuration.messages' },
            { text: '奖励配置', link: '/AureliumSkills/configuration.rewards' },
            { text: '战利品配置', link: '/AureliumSkills/configuration.loot' },
            { text: '经验来源', link: '/AureliumSkills/configuration.sources' },
            { text: '技能设置', link: '/AureliumSkills/configuration.abilities' },
            {
              text: '菜单',
              link: '/AureliumSkills/configuration.menu',
              items: [
                { text: '菜单格式变动', link: '/AureliumSkills/configuration.menu.menu-format-changes' },
              ]
            },
            { text: '经验条件', link: '/AureliumSkills/configuration.xp-requirements' },
            {
              text: '游戏体验',
              collapsed: true,
              items: [
                {
                  text: '属性',
                  link: '/AureliumSkills/gameplay.stats',
                  items: [
                    { text: '属性修饰语', link: '/AureliumSkills/gameplay.stats.stat-modifier' },
                    { text: '生命值相关', link: '/AureliumSkills/gameplay.stats.health' },
                  ]
                },
              ]
            },
            { text: '魔法技能', link: '/AureliumSkills/gameplay.stats' },
            { text: '经验翻倍', link: '/AureliumSkills/gameplay.multipliers' },
            { text: '条件', link: '/AureliumSkills/gameplay.requirements' },
            {
              text: '用法',
              collapsed: true,
              items: [
                { text: '命令列表', link: '/AureliumSkills/usage.commands' },
                { text: '权限列表', link: '/AureliumSkills/usage.perimissions' },
                { text: '变量集群', link: '/AureliumSkills/usage.placeholders' },
              ]
            },
            {
              text: '其他',
              collapsed: true,
              items: [
                { text: '常见问题', link: '/AureliumSkills/other.faq' },
                { text: '冲突内容', link: '/AureliumSkills/other.incompabilities' },
              ]
            }
          ]
        },
      ],
      '/AuraSkills/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/AuraSkills/index' },
        {
          text: 'AuraSkills 维基', items: [
            { text: 'AuraSkills', link: '/AuraSkills/auraskills' },
            {
              text: '主配置', collapsed: true, link: '/AuraSkills/main-config', items: [
                { text: 'SQL', link: '/AuraSkills/main-config.sql' }
              ]
            },
            {
              text: '技能', collapsed: true, link: '/AuraSkills/skills', items: [
                { text: '经验条件', link: '/AuraSkills/skills.xp-requirements' },
                { text: '经验倍率', link: '/AuraSkills/skills.xp-multipliers' },
                { text: '物品条件', link: '/AuraSkills/skills.item-requirements' },
              ]
            },
            {
              text: '属性', collapsed: true, link: '/AuraSkills/stats', items: [
                { text: '属性修饰符', link: '/AuraSkills/stats.stat-modifiers' }
              ]
            },
            { text: '能力', link: '/AuraSkills/abilities' },
            { text: '魔法能力', link: '/AuraSkills/mana-abilities' },
            { text: '经验来源', link: '/AuraSkills/sources' },
            { text: '奖励', link: '/AuraSkills/rewards' },
            { text: '战利品', link: '/AuraSkills/loot' },
            { text: '菜单', link: '/AuraSkills/menus' },
            { text: '消息', link: '/AuraSkills/messages' },
            { text: '命令', link: '/AuraSkills/commands' },
            { text: '权限', link: '/AuraSkills/permissions' },
            { text: '变量', link: '/AuraSkills/placeholders' },
            { text: '兼容插件', link: '/AuraSkills/compatible-plugins' },
            { text: '迁移', link: '/AuraSkills/migration' },
            { text: 'API', link: '/AuraSkills/api' },
            { text: '常见问题', link: '/AuraSkills/faq' },
            { text: '服务器要求', link: '/AuraSkills/server-requirements' },
            { text: '不兼容内容', link: '/AuraSkills/incompatibilities' },
            {
              text: '更新日志', items: [
                { text: '2.0', link: '/AuraSkills/release-notes.2-0' },
                { text: '2.1', link: '/AuraSkills/release-notes.2-1' },
                { text: '2.2', link: '/AuraSkills/release-notes.2-2' },
                { text: '2.3', link: '/AuraSkills/release-notes.2-3' }
              ]
            }
          ]
        },
      ],
      '/ajLeaderboards/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/ajLeaderboards/index' },
        {
          text: 'ajLeaderboards 中文维基',
          items: [
            { text: '概览', link: '/ajLeaderboards/overview' },
            {
              text: '安装',
              collapsed: true,
              items: [
                { text: '安装', link: '/ajLeaderboards/setup.setup' },
                { text: '变量参考', link: '/ajLeaderboards/setup.good-boards' },
                { text: '变量', link: '/ajLeaderboards/setup.placeholders' },
                { text: '权限', link: '/ajLeaderboards/setup.permissions' },
                { text: '消息变量', link: '/ajLeaderboards/setup.message-placeholders' },
                { text: 'LuckPerms 情境（Context）', link: '/ajLeaderboards/setup.luckperms-contexts' },
                { text: '额外内容', link: '/ajLeaderboards/setup.extras' },
              ]
            },
            {
              text: '配置',
              collapsed: true,
              items: [
                { text: '主配置', link: '/ajLeaderboards/configs.main-config' },
                { text: '缓存', link: '/ajLeaderboards/configs.cache-storage' }
              ]
            },
            { text: '切换存储方法', link: '/ajLeaderboards/moving-storage-methods' },
            { text: '常见问题', link: '/ajLeaderboards/faq' },
            { text: '少见问题', link: '/ajLeaderboards/less-faq' },
            { text: '名词解释', link: '/ajLeaderboards/glossary' }
          ]
        },
      ],
      '/Codex/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/Codex/index' },
        {
          text: 'Codex 维基',
          items: [
            { text: '首页', link: '/Codex/codex-wiki' },
            { text: '如何开始', link: '/Codex/how-to-start' },
            { text: '分类教程', link: '/Codex/discoveries-categories-tutorial' },
            { text: '物品教程', link: '/Codex/items-tutorial' },
            { text: 'config.yml 教程', link: '/Codex/config-yml-tutorial' },
            { text: 'inventory.yml 教程', link: '/Codex/inventory-yml-tutorial' },
            { text: '动作', link: '/Codex/actions' },
            { text: '命令与权限', link: '/Codex/commands-and-permissions' },
            { text: 'PlaceholderAPI 变量', link: '/Codex/placeholderapi-variables' },
            { text: '自定义日志条目教程', link: '/Codex/customized-discoveries-tutorial' },
            {
              text: '默认文件', collapsed: true, items: [
                { text: 'messages.yml', link: '/Codex/default-files.messages-yml' },
                { text: 'inventory.yml', link: '/Codex/default-files.inventory-yml' }
              ]
            }
          ]
        },
      ],
      '/CommandTimer/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/CommandTimer/index' },
        {
          text: 'CommandTimer 维基',
          items: [
            { text: '初次使用', link: '/CommandTimer/getting-started' },
            {
              text: '配置详解',
              collapsed: true,
              link: '/CommandTimer/configuration',
              items: [
                { text: '命令', link: '/CommandTimer/configuration.commands' },
                { text: '计划表', link: '/CommandTimer/configuration.schedules' },
                { text: '条件', link: '/CommandTimer/configuration.conditions' },
                { text: '其他', link: '/CommandTimer/configuration.others' },
              ]
            },
            { text: '拓展模块', link: '/CommandTimer/extensions' },
            { text: '事件', link: '/CommandTimer/events' },
            { text: '变量', link: '/CommandTimer/placeholders' },
            { text: 'JSON 格式', link: '/CommandTimer/json-schema' },
            { text: '开发者相关', link: '/CommandTimer/configuration.schedules' },
            { text: '常见问题', link: '/CommandTimer/faq' },
            { text: '术语', link: '/CommandTimer/jargon' },
            { text: '杂项', link: '/CommandTimer/miscellaneous' },
          ]
        },
      ],
      '/CoreProtect/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/CoreProtect/index' },
        {
          text: 'CoreProtect 维基', items: [
            { text: '欢迎', link: '/CoreProtect/welcome' },
            { text: '命令', link: '/CoreProtect/commands' },
            { text: '配置', link: '/CoreProtect/configuration' },
            { text: '语言', link: '/CoreProtect/languages' },
            { text: '权限', link: '/CoreProtect/permissions' },
            { text: '工具与集成', link: '/CoreProtect/tools-intergrations' },
            {
              text: 'API', collapsed: true, items: [
                { text: 'CoreProtect API', link: '/CoreProtect/api.coreprotect-api' },
                { text: '网络通信 API', link: '/CoreProtect/api.networking-api' },
                {
                  text: '版本', collapsed: true, items: [
                    { text: 'API v10', link: '/CoreProtect/version.api-version-10' },
                    { text: 'API v7', link: '/CoreProtect/version.api-version-7' },
                    { text: 'API v8', link: '/CoreProtect/version.api-version-8' },
                    { text: 'API v9', link: '/CoreProtect/version.api-version-9' },
                  ]
                },

              ]
            },

          ]
        },
      ],
      '/DecentHolograms/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/DecentHolograms/index' },
        {
          text: 'DecentHolograms 维基', items: [
            { text: '欢迎', link: '/DecentHolograms/welcome' },
            {
              text: '通用', collapsed: true, items: [
                { text: '安装', link: '/DecentHolograms/general.setup' },
                { text: '兼容性', link: '/DecentHolograms/general.compatibility' },
                { text: '格式与颜色', collapsed: true, link: '/DecentHolograms/general.formats-colors', items: [{ text: '颜色', link: '/DecentHolograms/general.formats-and-colors.colors' }] },
                {
                  text: '命令', collapsed: true, link: '/DecentHolograms/general.commands', items: [
                    { text: '通用', link: '/DecentHolograms/general.commands.general' },
                    { text: '特性', link: '/DecentHolograms/general.commands.features' },
                    { text: '悬浮字', link: '/DecentHolograms/general.commands.hologram' },
                    { text: '悬浮字行', link: '/DecentHolograms/general.commands.hologram-line' },
                    { text: '悬浮字页', link: '/DecentHolograms/general.commands.hologram-pages' }
                  ]
                },
                {
                  text: '配置', collapsed: true, link: '/DecentHolograms/general.configuration', items: [
                    { text: '主配置', link: '/DecentHolograms/general.configuration.config' },
                    { text: '动画配置', link: '/DecentHolograms/general.configuration.animation' },
                    { text: '特色配置', link: '/DecentHolograms/general.commands.features' },
                    { text: '悬浮字配置', link: '/DecentHolograms/general.configuration.hologram' },
                    { text: '语言配置', link: '/DecentHolograms/general.configuration.lang' },
                  ]
                },

                {
                  text: '示例悬浮字', collapsed: true, link: '/DecentHolograms/general.example-holograms', items: [
                    { text: '示例 - 演示', link: '/DecentHolograms/general.example-holograms.example-demo' },
                    { text: '示例 - 实体', link: '/DecentHolograms/general.example-holograms.example-entity' },
                    { text: '示例 - 带偏置的配方', link: '/DecentHolograms/general.example-holograms.example-recipe-with-offsets' },
                    { text: '示例 - 树', link: '/DecentHolograms/general.example-holograms.example-tree' },
                    { text: '示例 - 动作', link: '/DecentHolograms/general.example-holograms.example-actions' },
                  ]
                },

                { text: '动画', link: '/DecentHolograms/general.animations' },
                { text: '动作', link: '/DecentHolograms/general.actions' },
                { text: '标志', link: '/DecentHolograms/general.flags' },
              ]
            },
            {
              text: 'API', collapsed: true, items: [
                { text: '开始', link: '/DecentHolograms/api.get-started' },
                {
                  text: '基本用法', collapsed: true, link: '/DecentHolograms/api.basic-usage', items: [
                    { text: 'DHAPI', link: '/DecentHolograms/api.basic-usage.dhapi' },
                    { text: '常见问题', link: '/DecentHolograms/api.basic-usage.faq' },
                  ]
                },
                { text: '事件', link: '/DecentHolograms/api.events' },
              ]
            },
            { text: 'Spigot', link: 'http://decentholograms.eu/' },
            { text: 'Discord', link: 'https://discord.decentsoftware.eu/' },
          ]
        },
      ],
      '/ExcellentCrates/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/ExcellentCrates/index' },
        {
          text: 'ExcellentCrates 维基', items: [
            { text: '🏠 欢迎', link: '/ExcellentCrates/welcome' },
            { text: '🖥️ 命令', link: '/ExcellentCrates/commands' },
            { text: '⛔ 权限', link: '/ExcellentCrates/permissions' },
            {
              text: '🔌 集成', collapsed: true, items: [
                { text: '自定义物品', link: '/ExcellentCrates/intergrations.custom-items' },
                { text: '悬浮字', link: '/ExcellentCrates/intergrations.holograms' },
                { text: 'PlaceholderAPI', link: '/ExcellentCrates/intergrations.placeholderapi' }
              ]
            },
            { text: '⚠️ 常见插件问题', link: '/ExcellentCrates/common-issues' },
            { text: '❓ 常见功能问题', link: '/ExcellentCrates/common-questions' },
            { text: '🔧 编辑器界面', link: '/ExcellentCrates/editor-gui' },
            {
              text: '⚙️ 配置文件', collapsed: true, items: [
                { text: '跨服', link: '/ExcellentCrates/configuration.cross-server' },
                { text: '兑换', link: '/ExcellentCrates/configuration.exchange' }
              ]
            },
            {
              text: '🧊 宝箱', collapsed: true, items: [
                { text: '➕ 设置宝箱', link: '/ExcellentCrates/crates.setup-crates' },
                { text: '💎 外观', link: '/ExcellentCrates/crates.appearance' },
                { text: '🖼️ 预览', link: '/ExcellentCrates/crates.previews' },
                { text: '👁️ 开箱动画', link: '/ExcellentCrates/crates.openings' },
                { text: '🧱 放置', link: '/ExcellentCrates/crates.placement' },
                { text: '🛑 开箱权限', link: '/ExcellentCrates/crates.open-permission' },
                { text: '💲 开箱收费', link: '/ExcellentCrates/crates.open-cost' },
                { text: '⌛ 开箱冷却', link: '/ExcellentCrates/crates.open-cooldown' },
                { text: '🔑 钥匙需求', link: '/ExcellentCrates/crates.key-requirements' },
                { text: '🪧 累抽奖励', link: '/ExcellentCrates/crates.milestones' },
              ]
            },
            {
              text: '🔑 钥匙', collapsed: true, items: [
                { text: '➕ 设置钥匙', link: '/ExcellentCrates/keys.setup-keys' },
                { text: '*️⃣ 虚拟钥匙', link: '/ExcellentCrates/keys.virtual-keys' }
              ]
            },
            { text: '🔤 变量', link: '/ExcellentCrates/placeholders' },
            { text: '🔧 开发者 API', link: '/ExcellentCrates/developer-api' }
          ]
        }
      ],
      '/ExcellentEnchants/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/ExcellentEnchants/index' },
        {
          text: 'ExcellentEnchants 维基', items: [
            { text: '从 v4 升级', link: '/ExcellentEnchants/upgrading-from-v4' },
            { text: '欢迎', link: '/ExcellentEnchants/welcome' },
            { text: '命令', link: '/ExcellentEnchants/commands' },
            { text: '权限', link: '/ExcellentEnchants/permissions' },
            {
              text: '集成', collapsed: true, items: [
                { text: 'PlaceholderAPI 支持', link: '/ExcellentEnchants/intergrations.placeholderapi' }
              ]
            },
            { text: '常见插件问题', link: '/ExcellentEnchants/common-issues' },
            { text: '常见问题', link: '/ExcellentEnchants/common-questions' },
            {
              text: '功能', collapsed: true, items: [
                { text: '兼容性', link: '/ExcellentEnchants/features.compatibility' },
                { text: '分布', link: '/ExcellentEnchants/features.distribution' },
                { text: '附魔列表', link: '/ExcellentEnchants/features.enchantments' },
                { text: '附魔描述', link: '/ExcellentEnchants/features.description' },
                { text: '禁用附魔', link: '/ExcellentEnchants/features.disabling' },
                { text: '物品集', link: '/ExcellentEnchants/features.item-sets' },
                { text: '充能', link: '/ExcellentEnchants/features.charges' },
              ]
            },
            { text: '修饰符', link: '/ExcellentEnchants/modifiers' },
            { text: '内部变量', link: '/ExcellentEnchants/placeholders' },
            { text: '开发者 API', link: '/ExcellentEnchants/developer-api' }
          ]
        },
      ],
      '/FallbackServer/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/FallbackServer/index' },
        {
          text: 'FallbackServer 维基', items: [
            { text: '👋 欢迎来到 FallbackServer 维基', link: '/FallbackServer/welcome-to-fallbackserver-wiki' },
            {
              text: '概览', collapsed: true, items: [
                { text: '🌐 初次使用', link: '/FallbackServer/overview.first-startup-guide' },
                { text: '📔 插件功能', link: '/FallbackServer/overview.features' },
                { text: '💥 已知问题', link: '/FallbackServer/overview.known-errors-issues' },
                { text: '🧬 版本类型', link: '/FallbackServer/overview.version-type' },
              ]
            },
            {
              text: '文件', collapsed: true, items: [
                { text: '📑 配置', link: '/FallbackServer/files.configuration' },
                { text: '📖 消息文本', link: '/FallbackServer/files.messages' },
              ]
            },

            {
              text: '用法', collapsed: true, items: [
                { text: '💻 命令', link: '/FallbackServer/usage.commands' },
              ]
            },

            {
              text: '其他', collapsed: true, items: [
                { text: '🚁 支持', link: '/FallbackServer/other.support' },
                { text: '📸 视频（暂不开放）' }
              ]
            },
          ]
        },
      ],
      '/FastAsyncWorldEdit/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/FastAsyncWorldEdit/index' },
        {
          text: 'FastAsyncWorldEdit 维基', items: [
            { text: '介绍页', link: '/FastAsyncWorldEdit/readme' },
            {
              text: '开始', items: [
                { text: '安装', link: '/FastAsyncWorldEdit/getting-started.installation' }
              ]
            },
            {
              text: '插件功能', items: [
                { text: '命令概览', link: '/FastAsyncWorldEdit/features.command-overview' },
                { text: '工具物品', link: '/FastAsyncWorldEdit/features.tool-item' }
              ]
            },
            {
              text: '实用命令', items: [
                { text: '笔刷', link: '/FastAsyncWorldEdit/command-utilties.brushes' },
                { text: '蒙版', link: '/FastAsyncWorldEdit/command-utilties.masks' },
                { text: '图案', link: '/FastAsyncWorldEdit/command-utilties.patterns' },
                { text: '变形', link: '/FastAsyncWorldEdit/command-utilties.transforms' }
              ]
            },
            {
              text: 'API', items: [
                { text: 'API 用法', link: '/FastAsyncWorldEdit/api.api-usage' }
              ]
            },
            {
              text: '自定义', items: [
                { text: '配置', link: '/FastAsyncWorldEdit/customization.configuration' },
                { text: '权限', link: '/FastAsyncWorldEdit/customization.permissions' }
              ]
            }
          ]
        },
      ],
      '/HuskHomes/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/HuskHomes/index' },
        {
          text: 'HuskHomes 维基', items: [
            { text: '首页', link: '/HuskHomes/home' },
            {
              text: '安装', items: [
                {
                  text: '📚 安装教程', link: '/HuskHomes/setup.setup', collapsed: true, items: [
                    { text: '📩 导入数据', link: '/HuskHomes/setup.setup.importing-data' }
                  ]
                },
                {
                  text: '📄 配置文件', link: '/HuskHomes/setup.config', collapsed: true, items: [
                    { text: '📁 数据库', link: '/HuskHomes/setup.config.database' },
                    { text: '⛅ Redis', link: '/HuskHomes/setup.config.redis' },
                    { text: '📝 语言贡献', link: '/HuskHomes/setup.config.locales' },
                  ]
                },
                { text: '⚠️ 兼容性', link: '/HuskHomes/setup.compatibility' },
                {
                  text: '❓ 常见问题', link: '/HuskHomes/setup.faqs', collapsed: true, items: [
                    { text: '⚙️ 问题排查', link: '/HuskHomes/setup.faqs.troubleshooting' },
                  ]
                }
              ]
            },
            {
              text: '功能', items: [
                {
                  text: '🖥️ 命令列表', link: '/HuskHomes/features.commands', collapsed: true, items: [
                    { text: '📜 冲突命令', link: '/HuskHomes/features.commands.command-conflicts' },
                    { text: '⏰ 冷却', link: '/HuskHomes/features.commands.command-cooldowns' },
                    { text: '◀️ /back 命令', link: '/HuskHomes/features.commands.back-command' },
                    { text: '⚠️ 严格 /tpahere', link: '/HuskHomes/features.commands.strict-tpahere' },
                  ]
                },
                {
                  text: '⛔ 访问控制', link: '/HuskHomes/features.managing-access', collapsed: true, items: [
                    { text: '🚫 地标限制', link: '/HuskHomes/features.managing-access.restricted-warps' },
                  ]
                },
                {
                  text: '🌎 全局主城', link: '/HuskHomes/features.global-spawn', collapsed: true, items: [
                    { text: '🛏️ 全局重生', link: '/HuskHomes/features.global-spawn.global-respawning' },
                  ]
                },
              ]
            },
            {
              text: '联动', items: [
                { text: '🏷️ PlaceholderAPI 联动', link: '/HuskHomes/hooks.placeholderapi-hook' },
                { text: '💵 Vault 经济', link: '/HuskHomes/hooks.vault-economy' },
                { text: '🟩 Plan 统计', link: '/HuskHomes/hooks.player-analytics' },
                { text: '🍀 LuckPerms', link: '/HuskHomes/hooks.luckperms' },
                { text: '🗺️ Dynmap, BlueMap, Pl3xMap', link: '/HuskHomes/hooks.dynmap-bluemap-pl3xmap' },
              ]
            },
            {
              text: '开发者', collapsed: true, items: [
                {
                  text: '📦 API', link: '/HuskHomes/developers.api', collapsed: true, items: [
                    { text: '💡 API 示例', link: '/HuskHomes/developers.api.api-examples' },
                    { text: '⚡ API 事件', link: '/HuskHomes/developers.api.api-events' },
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
      '/HuskSync/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/HuskSync/index' },
        {
          text: 'HuskSync 维基', items: [
            { text: '首页', link: '/HuskSync/home' },
            {
              text: '安装', items: [
                {
                  text: '📚 安装教程', link: '/HuskSync/setup.setup', collapsed: true, items: [
                    { text: '✨ MPDB 迁移', link: '/HuskSync/setup.setup.mpdb-migration' },
                    { text: '↗️ 旧版迁移', link: '/HuskSync/setup.setup.legacy-migration' },
                  ]
                },
                {
                  text: '📄 配置文件', link: '/HuskSync/setup.config', collapsed: true, items: [
                    { text: '💾 数据库', link: '/HuskSync/setup.config.database' },
                    { text: '✨ Redis', link: '/HuskSync/setup.config.redis' },
                    { text: '🎏 语言贡献', link: '/HuskSync/setup.config.locales' },
                  ]
                },
                { text: '⚠️ 兼容相关', link: '/HuskSync/setup.compatbility' },
                {
                  text: '❓ 常见问题', link: '/HuskSync/setup.faqs', collapsed: true, items: [
                    { text: '🔗 问题排查', link: '/HuskSync/setup.faqs.troubleshooting' },
                  ]
                },
              ]
            },
            {
              text: '功能', items: [
                { text: '🖥️ 命令列表', link: '/HuskSync/features.commands' },
                {
                  text: '✅ 同步功能', link: '/HuskSync/features.sync-features', collapsed: true, items: [
                    { text: '⚙️ 同步模式', link: '/HuskSync/features.sync-features.sync-features.sync-modes' },
                    { text: '↪️ 数据切换', link: '/HuskSync/features.sync-features.sync-features.data-rotation' },
                  ]
                },
                { text: '🟩 Plan 统计联动', link: '/HuskSync/features.player-analytics-hook' },
              ]
            },
            {
              text: '教程', collapsed: true, items: [
                { text: '☂️ 用户数据缓存', link: '/HuskSync/guides.dumping-userdata' },
                { text: '⚔️ 背包保存', link: '/HuskSync/guides.keep-inventory' },
                { text: '📋 事件优先级', link: '/HuskSync/guides.event-priorties' },
              ]
            },
            {
              text: '开发者', collapsed: true, items: [
                {
                  text: '📦 API v3', link: '/HuskSync/developers.api-v3', collapsed: true, items: [
                    { text: '📝 数据快照 API', link: '/HuskSync/developers.api-v3.data-snapshot-api' },
                    { text: '📝 自定义数据 API', link: '/HuskSync/developers.api-v3.custom-data-api' },
                    { text: '❗ API 事件', link: '/HuskSync/developers.api-v3.api-events' },
                  ]
                },
                { text: '🕸️ API v2<i>（旧版）</i>', link: '/HuskSync/developers.api-v2-legacy-legacy' },
                { text: '💻 源码', link: '/HuskSync/https://github.com/WiIIiam278/HuskSync' },
              ]
            },
            {
              text: '链接', collapsed: true, items: [
                { text: '🚰 Spigot', link: '/HuskSync/https://www.spigotmc.org/resources/husksync.97144/' },
                { text: '🛒 Polymart', link: '/HuskSync/https://polymart.org/resource/husksync.1634' },
                { text: '🛒 BuiltByBit', link: '/HuskSync/https://craftaro.com/marketplace/product/husksync.758' },
                { text: '📊 bStats', link: 'https://bstats.org/plugin/bukkit/HuskSync%20-%20Bukkit/13140' }
              ]
            },
          ]
        },
      ],
      '/LibreLogin/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/LibreLogin/index' },
        {
          text: 'LibreLogin 维基', items: [
            { text: '插件功能', link: '/LibreLogin/features' },
            { text: '插件命令', link: '/LibreLogin/commands' },
            {
              text: '教程', collapsed: true, items: [
                { text: '安装', link: '/LibreLogin/guides.installtion' },
                { text: '数据库迁移', link: '/LibreLogin/guides.database-migration' },
                { text: 'UUID 创建器', link: '/LibreLogin/guides.uuid-creators' },
                { text: '配置服务器', link: '/LibreLogin/guides.configuring-servers' },
              ]
            },
            { text: '顾虑', link: '/LibreLogin/considerations' },
            {
              text: 'API', collapsed: true, items: [
                { text: '基础 API 信息', link: '/LibreLogin/api.basic-api-information' },
                { text: 'API 事件', link: '/LibreLogin/api.api-events' },
              ]
            },
            {
              text: '实用链接', collapsed: true, items: [
                { text: '配置文件', link: '/LibreLogin/useful-stuff.config' },
                { text: '消息文件', link: '/LibreLogin/useful-stuff.messages' },
              ]
            },
          ]
        },

      ],
      '/LuckPerms/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/LuckPerms/index' },
        {
          text: 'LuckPerms 维基', items: [
            { text: '主页', link: '/LuckPerms/home' },
            { text: '安装（单服）', link: '/LuckPerms/install-on-a-single-server' },
            { text: '安装（群组服）', link: '/LuckPerms/install-on-multiple-servers.md' },
            { text: '开始', link: '/LuckPerms/getting-started' },
            { text: '存储', link: '/LuckPerms/storage' },
            { text: '配置文件', link: '/LuckPerms/configuration' },
            { text: '常见问题', link: '/LuckPerms/faq' },
            {
              text: '命令用法', link: '/LuckPerms/command-usage', collapsed: true, items: [
                { text: '通用', link: '/LuckPerms/command-usage.general' },
                { text: '玩家', link: '/LuckPerms/command-usage.user' },
                { text: '权限组', link: '/LuckPerms/command-usage.group' },
                { text: '权限', link: '/LuckPerms/command-usage.permission' },
                { text: '继承', link: '/LuckPerms/command-usage.parent' },
                { text: '元数据', link: '/LuckPerms/command-usage.meta' },
                { text: '路线', link: '/LuckPerms/command-usage.track' },
                { text: '记录', link: '/LuckPerms/command-usage.log' },
                { text: '权限参考', link: '/LuckPerms/command-usage.permissions-reference' },
              ]
            },
            {
              text: '功能', collapsed: true, items: [
                { text: '网页编辑器', link: '/LuckPerms/features.web-editor' },
                { text: '情境', link: '/LuckPerms/features.context' },
                { text: '权重', link: '/LuckPerms/features.weight' },
                { text: '前缀、后缀与元数据', link: '/LuckPerms/features.prefix-suffix-meta' },
                { text: '权限检查系统', link: '/LuckPerms/features.verbose' },
                { text: '路线', link: '/LuckPerms/features.tracks' },
                { text: '默认组', link: '/LuckPerms/features.default-groups' },
              ]
            },

            {
              text: '教程', collapsed: true, items: [
                { text: '在服务器间<b>同步数据</b>', link: '/LuckPerms/how-to.sync-data-between-servers' },
                { text: '修复<b>存储错误</b>', link: '/LuckPerms/how-to.fix-storage-errors' },
                { text: '从其他插件<b>迁移</b>', link: '/LuckPerms/how-to.migrate-from-other-plugins' },
                { text: '更改<b>存储方式</b>', link: '/LuckPerms/how-to.switch-storage-types' },
                { text: '执行<b>零散编辑</b>', link: '/LuckPerms/how-to.perform-bulk-edits' },
                { text: '<b>叠加前缀</b>', link: '/LuckPerms/how-to.stack-prefixes' },
                { text: '安装<b>拓展</b>', link: '/LuckPerms/how-to.install-extensions' },
                { text: '设置<b>基于参数的命令权限</b>', link: '/LuckPerms/how-to.setup-argument-based-command-permissions' },]
            },

            {
              text: '开发者', collapsed: true, items: [
                { text: 'API 概述', link: '/LuckPerms/developers.api-introduction' },
                { text: 'API 用法', link: '/LuckPerms/developers.api-usage' },
                { text: '独立 APP&REST API', link: '/LuckPerms/developers.standalone-app-rest-api' },
                { text: '贡献', link: '/LuckPerms/developers.contributing' },
              ]
            },

            {
              text: '参考', collapsed: true, items: [
                { text: '从 v4 升级至 v5', link: '/LuckPerms/reference.upgrading-from-v4-to-v5' },
                { text: '从 GM 或 PEX 迁移', link: '/LuckPerms/reference.migrating-from-gm-or-pex' },
                { text: '权限计算的运作方式', link: '/LuckPerms/reference.how-permission-calculation-works' },
                { text: '网页编辑器的技术细节', link: '/LuckPerms/reference.web-editor-technical-details' },
                { text: '自托管网页界面', link: '/LuckPerms/reference.self-hosting-the-web-interfaces' },
              ]
            },
            {
              text: '项目信息', collapsed: true, items: [
                { text: '为何选择 LuckPerms？', link: '/LuckPerms/project-info.why-luckperms' },
                { text: '鸣谢', link: '/LuckPerms/project-info.credits' },
                { text: '本地化与翻译', link: '/LuckPerms/project-info.locale-and-translations' },
                { text: '变量', link: '/LuckPerms/project-info.placeholders' },
                { text: '外部连接', link: '/LuckPerms/project-info.external-connections' },
              ]
            },
          ]
        },
      ],
      '/Oraxen/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/Oraxen/index' },
        {
          text: 'Oraxen 维基', items: [
            { text: '初次使用', link: '/Oraxen/getting-started' },
            { text: '常见问题', link: '/Oraxen/frequently-asked-questions' },
            {
              text: '用法', collapsed: true, items: [
                { text: '命令', link: '/Oraxen/usage.commands' },
                { text: '默认物品', link: '/Oraxen/usage.default-items' },
                { text: '配方', link: '/Oraxen/usage.recipes' },
              ]
            },

            {
              text: '配置', collapsed: true, items: [
                { text: '基础学习', link: '/Oraxen/configuration.unserstanding-the-basics' },
                { text: '插件设置', link: '/Oraxen/configuration.plugin-settings' },
                { text: '（初学者）物品', link: '/Oraxen/configuration.items-beginners' },
                {
                  text: '（进阶）物品', link: '/Oraxen/configuration.items-advanced', collapsed: true, items: [
                    { text: '可染色物品', link: '/Oraxen/configuration.items-advanced.dyeable-items' },
                  ]
                },
                { text: '自定义盔甲', link: '/Oraxen/configuration.custom-armors' },
                { text: '自定义 HUD', link: '/Oraxen/configuration.custom-hud' },
                { text: '手势动作', link: '/Oraxen/configuration.gestures' },
                { text: '物品外观', link: '/Oraxen/configuration.item-appearance' },
                {
                  text: '自定义字符', link: '/Oraxen/configuration.glyphs', collapsed: true, items: [
                    { text: '自定义界面', link: '/Oraxen/configuration.glyphs.custom-gui' },
                  ]
                },
              ]
            },
            {
              text: '机制', collapsed: true, items: [
                { text: '介绍', link: '/Oraxen/mechanics.introduction' },
                {
                  text: '所有机制', link: '/Oraxen/mechanics.all-mechanics', collapsed: true, items: [
                    { text: '自定义机制', link: '/Oraxen/mechanics.all-mechanics.custom-mechanics' },
                    { text: '点击动作（clickAction）机制', link: '/Oraxen/mechanics.all-mechanics.clickaction-mechanic' },
                  ]
                },

                {
                  text: '家具机制', link: '/Oraxen/mechanics.furniture-mechanic', collapsed: true, items: [
                    { text: '家具位置', link: '/Oraxen/mechanics.furniture-mechanic.furniture-position' },
                    { text: '展示实体家具', link: '/Oraxen/mechanics.furniture-mechanic.display-entity-furniture' },
                    { text: '耕作机制', link: '/Oraxen/mechanics.furniture-mechanic.farming-mechanic' },
                  ]
                },

                {
                  text: '音符盒机制', link: '/Oraxen/mechanics.noteblock-mechanic', collapsed: true, items: [
                    { text: '去皮木头机制', link: '/Oraxen/mechanics.noteblock-mechanic.stripped-log-mechanic' },
                    { text: '方向机制', link: '/Oraxen/mechanics.noteblock-mechanic.directional-mechanic' },
                    { text: '耕地机制', link: '/Oraxen/mechanics.noteblock-mechanic.farmblock-mechanic' },
                  ]
                },

                {
                  text: '绊线方块机制', link: '/Oraxen/mechanics.stringblock-mechanic', collapsed: true, items: [
                    { text: '树苗机制', link: '/Oraxen/mechanics.stringblock-mechanic.sapling-mechanic' },
                  ]
                },
              ]
            },


            {
              text: '➕ 附属', collapsed: true, items: [
                { text: 'CustomBlockExpansion', link: '/Oraxen/addons.customblockexpansion' },
              ]
            },

            {
              text: '兼容性', collapsed: true, items: [
                { text: 'BossShopPro - 商店', link: '/Oraxen/compatibility.bossshoppro-shop' },
                { text: 'CrateReloaded - 抽奖箱', link: '/Oraxen/compatbility.cratereloaded-crates' },
                { text: 'ModelEngine - 自定义生物', link: '/Oraxen/compatibility.modelengine-custom-mobs' },
                { text: 'MythicMobs - 自定义生物', link: '/Oraxen/compatibility.mythicmobs-custom-mobs' },
                { text: 'TrMenu - 自定义界面', link: '/Oraxen/compatibility.trmenu-custom-inventories' },
                { text: 'MMOItems', link: '/Oraxen/compatibility.mmoitems' },
                { text: 'MythicCrucible', link: '/Oraxen/compatibility.mythiccrucible' },
                { text: 'HappyHUD', link: '/Oraxen/compatibility.happyhud' },
                {
                  text: '世界生成器', link: '/Oraxen/compatibility.world-generators', collapsed: true, items: [
                    { text: 'Iris', link: '/Oraxen/compatibility.world-generators.iris-world-generator' },
                    { text: 'EpicWorldGenerator', link: '/Oraxen/compatibility.world-generators.epicworldgenerator' },
                    { text: 'Custom Ore Generator', link: '/Oraxen/compatibility.world-generators.custom-ore-generator' },
                    { text: 'RealisticWorldGenerator', link: '/Oraxen/compatibility.world-generators.realisticworldgenerator' },
                  ]
                },
              ]
            },

            {
              text: '创作者相关', collapsed: true, items: [
                { text: '创作者指导', link: '/Oraxen/vendors.vendor-guidelines' },
              ]
            },

            {
              text: '开发者相关', collapsed: true, items: [
                { text: '编写自定义机制', link: '/Oraxen/developers.create-your-own-mechanic' },
                { text: '与其他插件兼容', link: '/Oraxen/developers.add-compability-with-a-plugin' },
                { text: '自定义托管服务', link: '/Oraxen/developers.custom-hosting-service' },
                { text: 'API', link: '/Oraxen/developers.api' },
              ]
            },

          ]
        },

      ],
      '/PlaceholderAPI/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/PlaceholderAPI/index' },
        {
          text: 'PlaceholderAPI 维基', items: [
            { text: '欢迎', link: '/PlaceholderAPI/welcome' },
            {
              text: '用户教程', collapsed: true, link: '/PlaceholderAPI/user-guides', items: [
                { text: '命令', link: '/PlaceholderAPI/user-guides.commands' },
                { text: '使用变量', link: '/PlaceholderAPI/user-guides.using-placeholders' },
                { text: '变量列表', link: '/PlaceholderAPI/user-guides.placeholder-list' },
                { text: '使用 PlaceholderAPI 的插件', link: '/PlaceholderAPI/user-guides.plugins-using-placeholderapi' }
              ]
            },
            {
              text: '开发者教程', collapsed: true, link: '/PlaceholderAPI/dev-guides', items: [
                { text: '使用 PlaceholderAPI', link: '/PlaceholderAPI/dev-guides.using-placeholderapi' },
                { text: '创建变量拓展', link: '/PlaceholderAPI/dev-guides.creating-a-placeholderexpansion' },
                { text: 'eCloud', link: '/PlaceholderAPI/dev-guides.ecloud' }
              ]
            },
            { text: '常见问题', link: '/PlaceholderAPI/common-issues' },
            { text: '常被问到的问题', link: '/PlaceholderAPI/faq' },
          ]
        },
      ],
      '/PlayerPoints/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/PlayerPoints/index' },
        {
          text: 'PlayerPoints 维基', items: [
            { text: '介绍', link: '/PlayerPoints/introduction' },
            { text: 'PlaceholderAPI 支持', link: '/PlayerPoints/placeholderapi-support' },
            { text: '命令与权限', link: '/PlayerPoints/commands-permissions' },
            {
              text: 'API 用法', collapsed: true, items: [
                { text: '开始使用', link: '/PlayerPoints/api-usage.getting-started' }
              ]
            },
          ]
        },
      ],
      '/Shopkeepers/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/Shopkeepers/index' },
        {
          text: 'Shopkeepers 维基', items: [
            { text: '首页', link: '/Shopkeepers/home' },
            {
              text: '安装与更新', collapsed: true, link: '/Shopkeepers/installtion-updating', items: [
                { text: '配置', link: '/Shopkeepers/installtion-updating.configuration' },
                { text: '语言文件', link: '/Shopkeepers/installtion-updating.language-files' },
                { text: '权限', link: '/Shopkeepers/installtion-updating.permissions' },
                { text: '统计数据', link: '/Shopkeepers/installtion-updating.plugin-statistics' },
              ]
            },
            {
              text: '创建商店', collapsed: true, link: '/Shopkeepers/creating-shops', items: [
                { text: '编辑商店', link: '/Shopkeepers/creating-shops.editing-shops' },
                { text: '设置管理员商店', link: '/Shopkeepers/creating-shops.admin-shop-setup' },
                { text: '设置玩家商店', link: '/Shopkeepers/creating-shops.setup-player-shop' },
                { text: '变量物品', link: '/Shopkeepers/creating-shops.placeholder-items' },
                { text: 'Citizens 村民商店', link: '/Shopkeepers/creating-shops.citizens-shopkeepers' },
              ]
            },
            { text: '命令列表', link: '/Shopkeepers/commands' },
            {
              text: '其他功能', collapsed: true, items: [
                { text: '交易记录', link: '/Shopkeepers/other-features.trade-notifications' },
                { text: '交易提醒', link: '/Shopkeepers/other-features.trade-notifications' },
                { text: '购买时执行命令', link: '/Shopkeepers/other-features.selling-commands' },
                { text: '普通村民编辑', link: '/Shopkeepers/other-features.editor-for-regular-villagers' },
                { text: '附属插件', link: '/Shopkeepers/other-features.third-party-add-on-plugins' },
              ]
            },
            {
              text: '更多信息', collapsed: true, items: [
                { text: '创建经济', link: '/Shopkeepers/more-information.creating-an-economy' },
                { text: '物品序列化', link: '/Shopkeepers/more-information.item-serialization' },
                { text: '已知漏洞', link: '/Shopkeepers/more-information.known-issues' },
                { text: '常见问题', link: '/Shopkeepers/more-information.frequently-asked-questions' },
              ]
            }
          ]
        },
      ],
      '/spark/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/spark/index' },
        {
          text: 'spark 维基', items: [
            {
              text: 'spark', collapsed: true, items: [
                { text: '主页', link: '/spark/spark.home' },
                { text: '安装', link: '/spark/spark.installation' },
                { text: '命令用法', link: '/spark/spark.command-usage' },
                { text: '正确使用报告浏览器', link: '/spark/spark.using-the-viewer' },
                { text: '开发者 API', link: '/spark/spark.developer-api' },
                { text: '配置文件', link: '/spark/spark.configuration' },
                { text: '独立代理', link: '/spark/spark.standalone-agent' }
              ]
            },

            {
              text: 'spark 教程', collapsed: true, items: [
                { text: '排查卡顿问题', link: '/spark/spark-guides.finding-the-cause-of-lag-spikes' },
                { text: '刻循环', link: '/spark/spark-guides.the-tick-loop' },
                { text: 'TPS 与 MSPT', link: '/spark/spark-guides.tps-and-mspt' },
              ]
            },

            {
              text: 'spark 其他内容', collapsed: true, items: [
                { text: '优势何在？', link: '/spark/spark-misc.spark-vs.-others' },
                { text: '使用 async-profiler 引擎', link: '/spark/spark-misc.using-async-profiler-engine' },
                { text: '关于 spark 的统计信息', link: '/spark/spark-misc.about-spark-metrics' },
                { text: 'spark 的原数据', link: '/spark/spark-misc.raw-spark-data' },
                { text: '变量', link: '/spark/spark-misc.placeholders' },
                { text: '信息点', link: '/spark/spark-misc.info-points' },
                { text: '鸣谢', link: '/spark/spark-misc.credits' },
              ]
            },

          ]
        },


      ],
      '/SuperiorSkyblock2/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/SuperiorSkyblock2/index' },
        {
          text: 'SuperiorSkyblock2 维基', items: [
            {
              text: '概览', link: '/SuperiorSkyblock2/overview', collapsed: false, items: [
                {
                  text: '命令与权限', collapsed: true, items: [
                    { text: '玩家命令', link: '/SuperiorSkyblock2/overview.commands-and-permissions.player-commands' },
                    { text: '管理员命令', link: '/SuperiorSkyblock2/overview.commands-and-permissions.admin-commands' },
                    { text: '权限', link: '/SuperiorSkyblock2/overview.commands-and-permissions.permissions' }
                  ]
                },
                {
                  text: '变量', link: '/SuperiorSkyblock2/overview.placeholders', collapsed: true, items: [
                    { text: '全局变量', link: '/SuperiorSkyblock2/overview.placeholders.global-placeholders' },
                    { text: '岛屿变量', link: '/SuperiorSkyblock2/overview.placeholders.island-placeholders' },
                    { text: '玩家变量', link: '/SuperiorSkyblock2/overview.placeholders.player-placeholders' },
                    { text: '聊天变量', link: '/SuperiorSkyblock2/overview.placeholders.chat-placeholders' },
                  ]
                },
                { text: '配置文件', link: '/SuperiorSkyblock2/overview.configuration-files' },
                { text: '消息文件', link: '/SuperiorSkyblock2/overview.messages' },
                { text: '岛屿标志', link: '/SuperiorSkyblock2/overview.island-flags' },
                { text: '岛屿权限', link: '/SuperiorSkyblock2/overview.island-privileges' },
                { text: '结构', link: '/SuperiorSkyblock2/overview.schematics' },
                {
                  text: '岛屿升级', link: '/SuperiorSkyblock2/overview.upgrades', collapsed: true, items: [
                    { text: '岛屿翻倍卡', link: '/SuperiorSkyblock2/overview.upgrades.island-multipliers' }
                  ]
                },
                {
                  text: '菜单', link: '/SuperiorSkyblock2/overview.menus', collapsed: true, items: [
                    { text: '银行日志菜单', link: '/SuperiorSkyblock2/overview.menus.bank-logs-menu' },
                    { text: '群系菜单', link: '/SuperiorSkyblock2/overview.menus.biomes-menu' }
                  ]
                },
                {
                  text: '任务', link: '/SuperiorSkyblock2/overview.missions', collapsed: true, items: [
                    { text: '方块任务', link: '/SuperiorSkyblock2/overview.missions.blocksmissions' },
                    { text: '酿造任务', link: '/SuperiorSkyblock2/overview.missions.brewingmissions' },
                    { text: '合成任务', link: '/SuperiorSkyblock2/overview.missions.craftingmissions' },
                    { text: '附魔任务', link: '/SuperiorSkyblock2/overview.missions.enchantingmissions' },
                    { text: '耕作任务', link: '/SuperiorSkyblock2/overview.missions.farmingmissions' },
                    { text: '钓鱼任务', link: '/SuperiorSkyblock2/overview.missions.fishingmissions' },
                    { text: '岛屿任务', link: '/SuperiorSkyblock2/overview.missions.islandmissions' },
                    { text: '物品任务', link: '/SuperiorSkyblock2/overview.missions.itemsmissions' },
                    { text: '击杀任务', link: '/SuperiorSkyblock2/overview.missions.killsmissions' },
                    { text: '统计数据任务', link: '/SuperiorSkyblock2/overview.missions.statisticsmissions' },
                  ]
                },
                { text: 'JavaScript 引擎', link: '/SuperiorSkyblock2/overview.javascript-engine' },
                { text: '自定义方块', link: '/SuperiorSkyblock2/overview.custom-blocks' },
                {
                  text: 'API', link: '/SuperiorSkyblock2/overview.api', collapsed: true, items: [
                    { text: '注册命令', link: '/SuperiorSkyblock2/overview.api.register-your-own-command' },
                    { text: '注册方块键', link: '/SuperiorSkyblock2/overview.api.register-your-own-block-keys' }
                  ]
                },
                {
                  text: '附属', link: '/SuperiorSkyblock2/overview.addons', collapsed: true, items: [
                    { text: 'SSBOneBlock', link: '/SuperiorSkyblock2/overview.addons.ssboneblock' },
                    { text: 'SSBProxyBridge', link: '/SuperiorSkyblock2/overview.addons.ssbproxybridge' },
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
      '/UltimateShop/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/UltimateShop/index' },
        {
          text: 'UltimateShop 中文维基', items: [
            { text: '🎉 欢迎', link: '/UltimateShop/welcome' },
            {
              text: '📦 信息', collapsed: true, items: [
                { text: '✅ 插件需求', link: '/UltimateShop/info.requirements' },
                { text: '⚙️ 安装', link: '/UltimateShop/info.install' },
                { text: '🔗 兼容性', link: '/UltimateShop/info.compatibility' },
                { text: '🛠️ 配置文件', link: '/UltimateShop/info.configuration-files' },
                { text: '⌨️ 命令', link: '/UltimateShop/info.commands' },
                { text: '📊 数据', link: '/UltimateShop/info.data' },
                { text: '🚀 性能', link: '/UltimateShop/info.performance' },
                { text: '❓ 常见问题', link: '/UltimateShop/info.faq' },
                { text: '🆚 比较', link: '/UltimateShop/info.compare' }
              ]
            },
            {
              text: '📚 快速上手', collapsed: true, items: [
                { text: '⚡ 第一课', link: '/UltimateShop/quick-understand.course-1' },
                { text: '⚡ 第二课', link: '/UltimateShop/quick-understand.course-2' }
              ]
            },
            {
              text: '📋 格式', collapsed: true, items: [
                { text: '🛒 物品格式™ 的信息', link: '/UltimateShop/format.info-of-itemformat' },
                {
                  text: '📝 物品格式™', link: '/UltimateShop/format.itemformat', collapsed: true, items: [
                    { text: '物品组件格式', link: '/UltimateShop/format.itemformat.component-format' }
                  ]
                },
                { text: '💹 经济格式™', link: '/UltimateShop/format.economyformat' },
                { text: '🖼️ 展示物品格式', link: '/UltimateShop/format.display-item-format' },
                { text: '🎬 动作格式', link: '/UltimateShop/format.action-format' },
                { text: '⚖️ 条件格式', link: '/UltimateShop/format.condition-format' },
                { text: '➗ 数学运算格式', link: '/UltimateShop/format.math-calculate-format' },
              ]
            },
            {
              text: '🔌 菜单', collapsed: true, items: [
                { text: '🔲 全局菜单', link: '/UltimateShop/menus.general-menus' },
                { text: '🔽 增量购买菜单', link: '/UltimateShop/menus.buy-more-menus' },
                { text: '🛏️ 基岩版菜单 - 仅付费版', link: '/UltimateShop/menus.bedrock-menus-premium' },
                { text: '🥉 额外物品描述', link: '/UltimateShop/menus.display-item-add-lore' },
              ]
            },
            {
              text: '🛍️ 商店', collapsed: true, items: [
                { text: '📂 商店', link: '/UltimateShop/shops.shops' },
                { text: '🛒 物品', link: '/UltimateShop/shops.products' },
                { text: '💰 物品配置：单条目', link: '/UltimateShop/shops.products-config-single-thing' },
                { text: '♻️ 物品配置：交易次数重置', link: '/UltimateShop/shops.product-config-buy-sell-times-reset' },
                { text: '📚 普通示例', link: '/UltimateShop/shops.common-examples' },
                { text: '🌱 示例：真实库存', link: '/UltimateShop/shops.example-stock-like-in-life' },
                { text: '📅 示例：每日商店', link: '/UltimateShop/shops.example-daily-shops' },
                { text: '🏆 示例：每日奖励', link: '/UltimateShop/shops.example-daily-rewards' },
              ]
            },
            {
              text: '📍 变量', collapsed: true, items: [
                { text: '🔧 内置变量', link: '/UltimateShop/placeholders.built-in-placeholder' },
                { text: '🔀 随机变量 - 仅付费版', link: '/UltimateShop/placeholders.random-placeholder-premium' },
                { text: '⛓️ 条件变量 - 仅付费版', link: '/UltimateShop/placeholders.conditional-placeholder-premium' },
                { text: '🔖 示例：折扣', link: '/UltimateShop/placeholders.example-discount' },
              ]
            },
            {
              text: '💰 动态定价', collapsed: true, items: [
                { text: '🔄 动态定价', link: '/UltimateShop/dynamic-prices.dynamic-price' },
                { text: '🔴 动态定价状态 - 仅付费版', link: '/UltimateShop/dynamic-prices.dynamic-price-status-premium' },
              ]
            },
            {
              text: '✨ 特色功能', collapsed: true, items: [
                { text: '🎨 颜色代码', link: '/UltimateShop/features.color-code' },
                { text: '💴 简单定价', link: '/UltimateShop/features.easy-prices' },
                { text: '🪄 出售魔杖 - 仅付费版', link: '/UltimateShop/features.sell-stick-premium' },
                { text: '💾 保存物品（物品管理器）', link: '/UltimateShop/features.saved-item-itemmanager' },
                { text: '🌍 本地化物品名称 - 仅付费版', link: '/UltimateShop/features.localized-item-name' },
                { text: '🌐 多服同步 - 仅付费版', link: '/UltimateShop/features.multi-server-sync-premium' },
                { text: '🔢 数字格式', link: '/UltimateShop/features.number-format' },
                { text: '✏️ 游戏内编辑器 - 仅付费版', link: '/UltimateShop/features.in-game-editor-premium' },
                { text: '🎮 自定义点击事件 - 仅付费版', link: '/UltimateShop/features.custom-click-event-premium' },
                { text: '🔍 自定义物品匹配方法', link: '/UltimateShop/features.custom-item-match-method' },
                { text: '🔑 物品给予方法', link: '/UltimateShop/features.give-item-method' },
                { text: '💳 日志记录 - 仅付费版', link: '/UltimateShop/features.log-transaction-premium' },
              ]
            },
            {
              text: '💻 开发相关', collapsed: true, items: [
                { text: '开发教程', link: '/UltimateShop/develop.develop-guide' },
                { text: '与 UltimateShop 挂钩', link: '/UltimateShop/develop.hook-into-ultimateshop' },
                { text: '无法实现的事', link: '/UltimateShop/develop.cant-do-things' },
              ]
            },
          ]
        },
      ],
      '/WorldEdit/': [
        { text: '返回首页', link: '/index' },
        { text: '更新日志', link: '/WorldEdit/changelogs' },
        { text: '前言', link: '/WorldEdit/index' },
        {
          text: 'WorldEdit 中文维基',
          items: [
            {
              text: '目录', link: '/WorldEdit/table-of-contents', items: [
                { text: '安装', link: '/WorldEdit/installtion' },
                { text: '快速开始', link: '/WorldEdit/quick-start' },
                { text: '配置文件', link: '/WorldEdit/configuration' },
                { text: '权限', link: '/WorldEdit/permissions' },
                { text: '命令', link: '/WorldEdit/commands' },
                {
                  text: '用法',
                  link: '/WorldEdit/usage.main',
                  collapsed: true,
                  items: [
                    {
                      text: '通用',
                      link: '/WorldEdit/usage.general.main',
                      collapsed: true,
                      items: [
                        { text: '历史', link: '/WorldEdit/usage.general.history' },
                        { text: '会话', link: '/WorldEdit/usage.general.sessions' },
                        { text: '图案', link: '/WorldEdit/usage.general.patterns' },
                        { text: '蒙版', link: '/WorldEdit/usage.general.masks' },
                      ]
                    },
                    { text: '导航', link: '/WorldEdit/usage.navigation' },
                    {
                      text: '区域',
                      link: '/WorldEdit/usage.regions.main',
                      collapsed: true,
                      items: [
                        { text: '选区', link: '/WorldEdit/usage.regions.selection' },
                        { text: '区域操作', link: '/WorldEdit/usage.regions.region-operations' },
                      ]
                    },
                    { text: '剪贴板', link: '/WorldEdit/usage.clipboard' },
                    { text: '生成', link: '/WorldEdit/usage.generation' },
                    { text: '绑定工具', link: '/WorldEdit/usage.tools' },
                    { text: '笔刷', link: '/WorldEdit/usage.brushes' },
                    { text: '实用工具', link: '/WorldEdit/usage.utilities' },
                    { text: '快照', link: '/WorldEdit/usage.snapshots' },
                    {
                      text: '其他',
                      link: '/WorldEdit/usage.other.main',
                      collapsed: true,
                      items: [
                        { text: '表达式', link: '/WorldEdit/usage.other.expression-syntax' },
                        { text: '快速脚本', link: '/WorldEdit/usage.other.craftscripts' },
                      ]
                    },
                  ]
                },
                {
                  text: '开发者 API',
                  link: '/WorldEdit/developer-api.main',
                  collapsed: true,
                  items: [
                    {
                      text: 'API 概念',
                      link: '/WorldEdit/developer-api.api-concepts.main',
                      collapsed: true,
                      items: [
                        { text: '操作方', link: '/WorldEdit/developer-api.api-concepts.actors' },
                        { text: '本地会话', link: '/WorldEdit/developer-api.api-concepts.local-sessions' },
                        { text: '方块', link: '/WorldEdit/developer-api.api-concepts.blocks' },
                        { text: '图案与蒙版', link: '/WorldEdit/developer-api.api-concepts.patterns-and-masks' },
                        { text: '区段', link: '/WorldEdit/developer-api.api-concepts.extents' },
                        { text: '区域', link: '/WorldEdit/developer-api.api-concepts.regions' },
                        { text: '注册项', link: '/WorldEdit/developer-api.api-concepts.registries' },
                        { text: '会话编辑', link: '/WorldEdit/developer-api.api-concepts.edit-sessions' },
                        { text: '适配器', link: '/WorldEdit/developer-api.api-concepts.adapters' },
                      ]
                    },
                    {
                      text: 'API 示例',
                      link: '/WorldEdit/developer-api.api-examples.main',
                      collapsed: true,
                      items: [
                        { text: '剪贴板示例', link: '/WorldEdit/developer-api.api-examples.clipboard-examples' },
                        { text: '结构示例', link: '/WorldEdit/developer-api.api-examples.schematic-examples' },
                        { text: 'LocalSession 示例', link: '/WorldEdit/developer-api.api-examples.localsession-examples' },
                      ]
                    },
                    { text: '内部 API', link: '/WorldEdit/developer-api.internal-apis' },
                  ]
                },
                { text: '常见问题', link: '/WorldEdit/common-questions' },
                { text: '获取帮助', link: '/WorldEdit/getting-help' },
                { text: '源码', link: '/WorldEdit/source-code' },
              ]
            },
          ]
        }
      ],
      '/WorldGuard/': [
        { text: '返回首页', link: '/index' },
        { text: '前言', link: '/WorldGuard/index' },
        {
          text: 'WorldGuard 维基', items: [
            {
              text: '目录', link: '/WorldGuard/table-of-contents', items: [
                { text: '安装', link: '/WorldGuard/installation' },
                {
                  text: '配置', link: '/WorldGuard/configuration.main', collapsed: true, items: [
                    { text: '域名秘钥', link: '/WorldGuard/configuration.host-keys' },
                  ]
                },
                {
                  text: '权限列表', link: '/WorldGuard/permissions', collapsed: true, items: [
                    { text: '建筑权限', link: '/WorldGuard/permissions.build-permissions' },
                  ]
                },
                { text: '命令列表', link: '/WorldGuard/commands' },
                { text: '黑名单', link: '/WorldGuard/blacklist' },
                {
                  text: '区域', link: '/WorldGuard/regions.main', collapsed: true, items: [
                    { text: '快速开始', link: '/WorldGuard/regions.quick-start' },
                    { text: '区域魔杖', link: '/WorldGuard/regions.region-wand' },
                    { text: '区域标志', link: '/WorldGuard/regions.region-flags' },
                    { text: '优先级与继承', link: '/WorldGuard/regions.priority-and-inheritance' },
                    { text: '全局区域', link: '/WorldGuard/regions.global-region' },
                    { text: '区域命令', link: '/WorldGuard/regions.region-commands' },
                    { text: '区域认领', link: '/WorldGuard/regions.claiming' },
                    { text: '存储方式', link: '/WorldGuard/regions.storage-drivers' },
                    { text: '保护什么？', link: '/WorldGuard/regions.whats-protected' },
                    { text: '常见场景', link: '/WorldGuard/regions.common-scenarios' },
                  ]
                },
                { text: '箱子保护', link: '/WorldGuard/chest-protection' },
                {
                  text: 'WorldGuard API', link: '/WorldGuard/worldguard-api.main', collapsed: true, items: [
                    { text: '作为依赖', link: '/WorldGuard/worldguard-api.as-a-dependency' },
                    {
                      text: '区域开发相关', link: '/WorldGuard/worldguard-api.working-with-regions.main', collapsed: true, items: [
                        { text: '区域管理模块', link: '/WorldGuard/worldguard-api.working-with-regions.managers' },
                        { text: '区域对象', link: '/WorldGuard/worldguard-api.working-with-regions.regions' },
                        { text: '自定义标志与选区处理模块', link: '/WorldGuard/worldguard-api.working-with-regions.custom-flags-and-session-handlers' },
                        { text: '区域查询', link: '/WorldGuard/worldguard-api.working-with-regions.querying-protection' },
                        { text: '标志计算', link: '/WorldGuard/worldguard-api.working-with-regions.flag-calculation' },
                        { text: '保护查询', link: '/WorldGuard/worldguard-api.working-with-regions.querying-protection' },
                        { text: '区域事件', link: '/WorldGuard/worldguard-api.working-with-regions.region-events' },
                      ]
                    },
                    { text: '引自 Bukkit 的对象', link: '/WorldGuard/worldguard-api.from-bukkit-objects' },
                    { text: '内部 API', link: '/WorldGuard/worldguard-api.internal-apis' },
                  ]
                },

                {
                  text: '高级话题', link: '/WorldGuard/advanced-topics.main', collapsed: true, items: [
                    { text: '事件记录', link: '/WorldGuard/advanced-topics.evet-logging' },
                  ]
                },
                { text: '常见问题', link: '/WorldGuard/common-questions' },
                { text: '获取帮助', link: '/WorldGuard/getting-help' },
                { text: '插件源码', link: '/WorldGuard/source-code' },
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
