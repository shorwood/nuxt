<script setup lang="ts">
const props = defineProps<{ background?: boolean }>()

const classes = computed(() => ({
  'bg-clip-text bg-gradient-to-r bg-[size:120%] from-secondary-500 via-primary-300 to-accent-500 font-black text-transparent': !props.background,
  'bg-gradient-to-br from-secondary-500 via-primary-500 to-accent-500 text-white': props.background,
}))
</script>

<template>
  <span :class="classes">
    <slot/>
  </span>
</template>
