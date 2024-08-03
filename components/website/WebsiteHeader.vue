<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex flex-col justify-start w-full">

    <!-- Title -->
    <h1 class="text-5xl md:text-7xl max-w-4xl font-bold">
      <slot>
        {{ title }}
      </slot>
    </h1>

    <!-- Separator -->
    <div class="h-2 w-20 bg-primary-600 rounded-full my-4" />
  </div>
</template>
