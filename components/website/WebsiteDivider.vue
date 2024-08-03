<script setup lang="ts">
defineProps<{ contained?: boolean }>()
</script>

<template>
  <div
    class="h-0.5 bg-primary-50 w-full"
    :class="{ 'max-w-7xl mx-auto': contained }"
  />
</template>
