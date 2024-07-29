<script setup lang="ts">
const props = defineProps<{
  value: number
  message: string
}>()

const progress = computed(() => (props.value * 100).toFixed(0))
</script>

<template>
  <div class="flex-1 w-full space-y-2 transition-opacity duration-300 delay-200">

    <!-- Message -->
    <div class="flex justify-between items-center">
      <p class="text-xs">
        {{ message }}
      </p>
      <p class="text-xs">
        {{ progress }}%
      </p>
    </div>

    <!-- Progress bar -->
    <div class="flex-1 h-1 bg-app-500 rounded-md w-full">
      <div
        class="h-full bg-gradient-to-r from-accent-600 to-secondary-700 transition-all duration-10 rounded-md"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>
