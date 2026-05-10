<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { BProgress } from '@bprogress/core'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
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
      <NolebaseBreadcrumbs />
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