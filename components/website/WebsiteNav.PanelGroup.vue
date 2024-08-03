<script setup lang="ts">
import type { NavGroup } from '~/utils/types'
defineProps<NavGroup>()
</script>

<template>
  <div class="min-w-64 w-full px-8 first:pl-0 last:pr-0">

    <!-- Title -->
    <div v-if="title || description" class="space-y-4 mb-4">
      <BaseIcon v-if="icon" :icon="icon" class="w-8 h-8" />
      <h3 v-if="title" class="text-xl font-medium whitespace-pre text-primary-600" v-text="title" />
      <p v-if="description" class="text-sm opacity-60" v-text="description" />
    </div>

    <!-- Items -->
    <div class="space-y-1">
      <WebsiteNavPanelItem
        v-for="link in items"
        :key="link.label"
        :label="link.label"
        :text="link.text"
        :imageUrl="link.imageUrl"
        :to="link.to"
      />
    </div>
  </div>
</template>
