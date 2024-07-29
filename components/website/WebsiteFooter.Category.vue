<script setup lang="ts">
import type { ContentCategoryObject, ContentPageObject } from '@hsjm/server'

const props = defineProps<{
  category: ContentCategoryObject
}>()

function getPageTo(page: ContentPageObject) {
  const categoryTags = props.category?.tags?.map(tag => tag.slug)
  if (categoryTags?.includes('expertise')) return { name: 'WebsiteExpertise', params: { slug: page.slug, category: props.category.slug } }
  if (categoryTags?.includes('about')) return { name: 'WebsiteAbout', params: { slug: page.slug } }
}
</script>

<template>
  <nav class="space-y-4 col-span-full text-center md:text-left sm:col-span-2 md:col-span-1">

    <!-- Title -->
    <h3 class="text-2xl font-bold" v-text="category.name" />

    <!-- Nav links -->
    <ul class="md:space-y-2">
      <li v-for="page in category.pages" :key="page.id">
        <BaseButton
          v-bind="page"
          :label="page.name"
          :to="getPageTo(page)"
          class="text-lg hover:text-primary-400 current:font-bold"
        />
      </li>
    </ul>
  </nav>
</template>
