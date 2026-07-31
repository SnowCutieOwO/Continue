<template>
  <div class="page-header">
    <h1 v-if="title" :id="slugify(title)" class="page-header-title">
      {{ title }}
      <a class="header-anchor" :href="`#${slugify(title)}`" aria-label="Permalink to this headline"></a>
    </h1>
    <p
      v-if="subtitle"
      class="page-header-subtitle"
      v-html="renderedSubtitle"
    ></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})

// 创建一个轻量级的 markdown-it 实例，只解析内联格式（不包含块级元素）
const md = new MarkdownIt({
  html: false,        // 禁用原始 HTML，防止 XSS
  breaks: false,
  linkify: false
})

const renderedSubtitle = computed(() => {
  if (!props.subtitle) return ''
  // 使用 renderInline 只渲染内联 Markdown，避免生成 <p> 标签
  return md.renderInline(props.subtitle)
})

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
</script>

<style scoped>
.page-header-title {
  margin-bottom: 0.1rem;
}

.page-header-subtitle {
  font-size: var(--vp-font-size-base, 1rem);
  color: var(--vp-c-text-2);
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>