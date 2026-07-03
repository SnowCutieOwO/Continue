import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: {
    icon: {
      light: 'mdi:copyright',
      dark: 'mdi:copyright',
      color: { light: '#999', dark: '#ccc' }
    },
    name: 'Continue Project',
    link: 'https://github.com/SnowCutieOwO/Continue',
    rel: 'noopener noreferrer',
    text: '保留所有权利。',
  },
  group: [
    {
      title: '使用工具',
      links: [
        {
          name: 'cwim',
          link: 'https://github.com/spencerwooo/cwim',
          rel: 'noopener noreferrer'
        },
        {
          name: 'VitePress',
          link: 'https://github.com/vuejs/vitepress',
          rel: 'noopener noreferrer'
        },
        {
          name: 'Docsify（旧框架）',
          link: 'https://github.com/docsifyjs/docsify',
          rel: 'noopener noreferrer'
        },
        {
          name: 'Docsify-Template',
          link: 'https://github.com/SnowCutieOwO/Docsify-Template',
          rel: 'noopener noreferrer'
        }
      ]
    },
    {
      title: '其他线路',
      links: [
        {
          name: 'mcbbs.co',
          link: 'https://doc.mcbbs.co/snowcutieowo/'
        },
        {
          name: 'Cloudflare Pages',
          link: 'https://continue-project.pages.dev/'
        }
      ]
    },
    {
      title: '友情链接',
      links: [
        {
          name: 'CSKB - 日冕知识库',
          link: 'https://kb.corona.studio/zhCN/',
          rel: 'noopener noreferrer'
        },
        {
          name: 'HiMCBBS',
          link: 'https://www.himcbbs.com/',
          rel: 'noopener noreferrer'
        },
        {
          name: 'MCNAV',
          link: 'https://mcnav.cn/',
          rel: 'noopener noreferrer'
        },
        {
          name: 'PuddingKC\'s Blog',
          link: 'https://www.puddingkc.com/',
          rel: 'noopener noreferrer'
        }
      ]
    },
    {
      title: '联系我们',
      links: [
        {
          name: 'QQ 群',
          link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Usutd8XHrHGQsLyhU4DukXvqueRiQEFZ&authKey=C2IT%2BGq7NxpVKPaYvoZYc%2Fu5WmnSsFSEAVOjbJRX6lF32bkFjgg4%2BY0yGdZyKNNs&noverify=0&group_code=707028557'
        }
      ]
    }
  ],
}