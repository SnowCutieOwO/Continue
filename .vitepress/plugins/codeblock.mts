/*

  该部分脚本来源于 https://github.com/unovue/shadcn-vue/blob/dev/apps/www/.vitepress/theme/plugins/codeblock.ts，经过小幅度样式修改。

*/
import type { MarkdownRenderer } from 'vitepress'

export default function (md: MarkdownRenderer) {
  const fence = md.renderer.rules.fence!
  if (!fence)
    return

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const title = token.info.match(/title="([^"]+)"/)?.[1] ?? null

    if (token && token.info === 'bash') {
      const npmCommand = token.content
      const props = { pnpm: '', npm: '', yarn: '', bun: '' }

      if (npmCommand.startsWith('npm install')) {
        props.npm = npmCommand
        props.yarn = npmCommand.replace('npm install', 'yarn add')
        props.pnpm = npmCommand.replace('npm install', 'pnpm add')
        props.bun = npmCommand.replace('npm install', 'bun add')
      }
      else if (npmCommand.startsWith('npx create-')) {
        props.npm = npmCommand
        props.yarn = npmCommand.replace('npx create-', 'yarn create')
        props.pnpm = npmCommand.replace('npx create-', 'pnpm create')
        props.bun = npmCommand.replace('npx', 'bunx --bun')
      }
      else if (npmCommand.startsWith('npm create')) {
        props.npm = npmCommand
        props.yarn = npmCommand.replace('npm create', 'yarn create')
        props.pnpm = npmCommand.replace('npm create', 'pnpm create')
        props.bun = npmCommand.replace('npm create', 'bun create')
      }
      else if (npmCommand.startsWith('npx')) {
        props.npm = npmCommand
        props.yarn = npmCommand
        props.pnpm = npmCommand.replace('npx', 'pnpm dlx')
        props.bun = npmCommand.replace('npx', 'bunx --bun')
      }
      else if (npmCommand.startsWith('npm run')) {
        props.npm = npmCommand
        props.yarn = npmCommand.replace('npm run', 'yarn')
        props.pnpm = npmCommand.replace('npm run', 'pnpm')
        props.bun = npmCommand.replace('npm run', 'bun')
      }

      if (props.npm) {
        return (`<CodeBlockCommand v-bind='${JSON.stringify({ tabs: props })}' />`)
      }
    }
    
    // this part is slightly modified for customization
    // made by DeepSeek :3
    if (token.tag === 'code' && title) {
      // 先获取原始渲染结果
      const original = fence(...args)
      
      // 创建标题元素
      const titleDiv = `<div data-code-block-title 
        style="position: absolute; top: 2px; left: 8px; z-index: 2; 
              font-size: 12px; font-weight: 500; 
              user-select: none; color: var(--vp-code-lang-color);">
        ${title}
      </div>`
      
      // 在原始渲染结果内部插入标题
      // 假设原始结构为: <pre><code>...</code></pre>
      // 我们将在 <pre> 标签内、<code> 标签前插入标题
      return original.replace(
        /(<div class="language-[^"]+">)/,
        `$1${titleDiv}`
      )
    }

    // If not a code block, return the default rendering
    return fence(...args)
  }
}