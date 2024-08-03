<script setup lang="ts">
defineProps<{
  title?: string
  text?: string
}>()
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center space-x-4">

      <!-- Icon -->
      <BaseIcon
        icon="i-carbon:checkmark"
        class="w-8 h-8 text-primary-600"
      />

      <!-- Title -->
      <h3 v-if="$slots.title || title" class="text-2xl font-medium">
        <slot name="title">{{ title }}</slot>
      </h3>
    </div>

    <!-- Text -->
    <p v-if="$slots.default || text" class="text-lg opacity-60">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>
