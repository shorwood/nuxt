<script setup lang="ts">
import type { NavGroupItem } from '~/utils/types'
defineProps<NavGroupItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-center space-x-4 hover:text-primary-600">

    <!-- Icon -->
    <BaseIcon
      v-if="icon"
      :icon="icon"
      class="w-8 h-8 text-primary-600"
    />

    <!-- Title & text -->
    <div class="text-left">
      <h3 class="text-base whitespace-pre">{{ label }}</h3>
      <p v-if="text" class="text-base opacity-60 line-clamp-2 mb-4">{{ text }}</p>
    </div>
  </NuxtLink>
</template>
