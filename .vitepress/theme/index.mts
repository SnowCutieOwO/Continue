// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
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
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tab', Tab);
    app.component('Tabs', Tabs);
    app.use(NolebaseGitChangelogPlugin);
    /* 
      @theojs/lumen 链接盒子拓展组件
      具体用法详见：
      https://lumen.theojs.cn/guide/linkcard
    */
    app.component('Pill', Pill) 
    app.component('Links', Links) 
    app.component('Card', Card) 
    app.component('BoxCube', BoxCube) 
  },
  Layout
} satisfies Theme