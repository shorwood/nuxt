<script setup lang="ts">
defineProps<{
  name: string
  imageUrl?: string
}>()
</script>

<template>
  <NuxtClientFallback>
    <div
      class="
      grid grid-cols-3 items-center
      space-x-12 relative py-2 px-6
      bg-primary-50 border-primary-500
      dark:bg-primary-900 dark:border-primary-600
    ">

      <!-- Title -->
      <div class="flex items-center space-x-12">
        <NuxtLink
          :to="{ name: 'WebsiteHome' }"
          class="cursor-pointer hover:opacity-80 transition-opacity text-primary-600">

          <!-- If image, display image -->
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Logo"
            class="w-16 h-16 md:w-20 md:h-20"
          />

          <!-- If no image, display name -->
          <p
            v-else
            class="text-5xl md:text-2xl font-bold"
            v-text="name"
          />
        </NuxtLink>

        <!-- Menu - Left -->
        <div v-if="$slots.left" class="flex items-center justify-start space-x-12">
          <slot name="left"/>
        </div>
      </div>

      <!-- Menu - center -->
      <div v-if="$slots.center" class="flex items-center justify-center space-x-12">
        <slot name="center"/>
      </div>

      <!-- Menu - Right -->
      <div v-if="$slots.right" class="flex items-center justify-end space-x-12">
        <slot name="right"/>
      </div>
    </div>
  </NuxtClientFallback>
</template>
