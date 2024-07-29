<script setup lang="ts">
defineProps<{ as?: keyof HTMLElementTagNameMap }>()
</script>

<template>
  <component :is="as ?? 'div'" class="w-full max-w-[1440px] mx-auto px-8">
    <slot />
  </component>
</template>
