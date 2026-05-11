// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Tab, Tabs } from 'vue3-tabs-component'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '../theme/theme.css'
import '../theme/scrollBar.css'
import '@theojs/lumen/pic'
import Layout from './Layout.vue'
// 26.05.10 新增：LinkCards 链接卡片拓展
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'
// 26.05.11 新增：LiteTree 渲染组件
import { LiteTree } from '@lite-tree/vue'

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
    /*
      @lite-tree/vue 树结构拓展组件
      具体用法详见：
      https://zhangfisher.github.io/lite-tree/examples.html
    */
    app.component('LiteTree', LiteTree)
  },
  Layout
} satisfies Theme