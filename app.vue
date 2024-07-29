<script setup lang="ts">
import type { ContentWebsiteObject } from '@unserved/module-content'

// --- Provide data to the child components.
const router = useRouter()
const route = computed(() => router.currentRoute.value)
const meta = computed(() => route.value.meta as { title: string })

// --- Fetch website data.
const { data: website } = await useRequest('GET /api/website', {
  default: () => ({}) as ContentWebsiteObject,
})

// --- Head.
useHead({
  title: meta.value.title,
  titleTemplate: `${website.value.name} - %s`,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: website.value.iconUrl },
    { rel: 'apple-touch-icon', href: website.value.iconUrl },
  ],
})

// --- SEO.
useSeoMeta({
  charset: 'utf8',
  title: meta.value.title,
  ogUrl: website.value.url,
  ogTitle: meta.value.title,
  ogSiteName: website.value.name,
  ogDescription: website.value.description,
  viewport: 'width=device-width, initial-scale=1.0',
  description: website.value.description,
  themeColor: primary['600'],
  applicationName: website.value.name,
})
</script>

<template>
  <Suspense>
    <div id="app" class="font-sans">
      <!-- <AppAlerts /> -->
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Suspense>
</template>
