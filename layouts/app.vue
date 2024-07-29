<script setup lang="ts">
const dark = useDark({ selector: '#app' })
</script>

<template>
  <div
    id="app"
    :class="{ '!bg-primary-900 !text-primary-50 dark': dark }"
    class="flex h-screen overflow-hidden font-sans bg-primary-100 text-primary-900">

    <!-- Navigation -->
    <AppNav class="w-1/4 min-w-48 max-w-80 h-full"/>

    <!-- Content -->
    <main class="flex-grow overflow-y-auto space-y-8 pt-8 px-8 pb-32 gradient-mask-b-95/105">
      <AppHeader class="max-w-7xl mx-auto opacity-50 grayscale-50"/>
      <NuxtPage class="max-w-7xl mx-auto"/>
    </main>
  </div>
</template>
