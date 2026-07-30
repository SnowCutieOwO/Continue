<template>
  <div id="breadcrumb">
    <span v-for="item in items" class="bc-items" :id="item.first ? 'bc-project' : undefined">{{
      item.name
    }}</span>
  </div>
</template>

<script setup lang="ts">
import pangu from 'pangu'
import { useData } from 'vitepress'
import { ref, watchEffect } from 'vue'

const { page } = useData()

type Breadcrumb = {
  name: string
  first: boolean
}

const items = ref<Breadcrumb[]>([])
watchEffect(() => {
  const pathSegs = page.value.filePath.split('/')
  const shownSegs = pathSegs.at(-1) === 'index.md' ? pathSegs.slice(0, -2) : pathSegs.slice(0, -1)
  // 面包屑只显示到当前页面的上一级，不包含页面标题
  // 如果是首页，则一并去除当前目录名

  items.value = shownSegs.map((item, index) => ({
    name: pangu.spacingText(item.replaceAll('-', ' ')),
    first: !index,
  }))
})
</script>

<style>
#breadcrumb {
  margin-bottom: 15px;
  font-size: 15px;
  color: var(--vp-c-text-2);
}
.bc-items::after {
  content: '/';
  margin: 0 8px;
  vertical-align: top;
  font-weight: bold;
  font-size: 10px;
  color: var(--vp-c-text-3);
}
</style>