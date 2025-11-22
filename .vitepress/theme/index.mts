// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Tab, Tabs } from 'vue3-tabs-component'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
import { h } from 'vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import errorLayout from './error.vue'
import '../theme/theme.css'
import '../theme/scrollBar.css'
import '@theojs/lumen/pic'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tab', Tab);
    app.component('Tabs', Tabs);
    app.use(NolebaseGitChangelogPlugin);
    const iconifyScript = document.createElement('script');
    iconifyScript.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
    document.head.appendChild(iconifyScript);
  },
  Layout
} satisfies Theme