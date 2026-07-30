<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
// 26.07.31 新增：轻量化面包屑
import Breadcrumb from "./breadcrumb.vue"
import { BProgress } from '@bprogress/core'
import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NotFound from './error.vue'

import '@bprogress/core/css'

import { Footer } from '@theojs/lumen'
import { Footer_Data } from './footer.mts'

const { Layout } = DefaultTheme

const router = useRouter()

BProgress.configure({
  showSpinner: false,
  easing: 'ease'
})

router.onBeforeRouteChange = () => {
  BProgress.start()
}

router.onAfterRouteChange = () => {
  BProgress.done()
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb />
    </template>
    <template #not-found>
      <NotFound />
    </template>
    <template #layout-bottom>  
      <Footer :Footer_Data="Footer_Data" />  
    </template>
  </Layout>
</template>

<style>
:root {
  --bprogress-color: var(--vp-c-brand);
}
</style>