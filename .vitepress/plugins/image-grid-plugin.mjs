import container from 'markdown-it-container'

export function imageGridPlugin(md) {
  // 1. 注册 ::: image-grid 容器
  md.use(container, 'image-grid', {
    validate: (params) => params.trim().startsWith('image-grid'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        return '<div class="image-grid">\n'
      }
      return '</div>\n'
    }
  })

  // 2. 容器解析完成后，把容器内的 hr token 替换为自定义换行 token
  md.core.ruler.push('image_grid_break', (state) => {
    let inGrid = false
    for (const token of state.tokens) {
      if (token.type === 'container_image-grid_open') {
        inGrid = true
      } else if (token.type === 'container_image-grid_close') {
        inGrid = false
      } else if (inGrid && token.type === 'hr') {
        token.type = 'image_grid_break'
        token.tag = ''
        token.nesting = 0
        token.content = ''
      }
    }
  })

  // 3. 渲染自定义换行 token
  md.renderer.rules.image_grid_break = () => '<div class="image-grid-break"></div>\n'
}