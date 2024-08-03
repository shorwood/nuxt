<script setup lang="ts">
const props = defineProps<{
  src?: string
  alt?: string
  aspect?: 'landscape' | 'portrait' | 'square'
  size?: 'contain' | 'cover'

  // --- Styling.
  rounded?: boolean
  pattern?: boolean
  outlined?: boolean
  offseted?: boolean
  variant?: 'accent' | 'danger' | 'light' | 'primary' | 'secondary' | 'success' | 'warning'
}>()

const classes = computed(() => {
  const {
    aspect = 'landscape',
    rounded = false,
    pattern = false,
    outlined = false,
    offseted = false,
    variant = 'light',
    size = 'cover',
  } = props

  const baseClasses = {
    'w-full': true,
    'rounded': !rounded,
    'rounded-lg': rounded,
    'border-2': outlined,
    'aspect-16/9': aspect === 'landscape',
    'aspect-9/16': aspect === 'portrait',
    'aspect-square': aspect === 'square',
    'bg-center bg-no-repeat bg-cover': !offseted && size === 'cover',
    'bg-center bg-no-repeat bg-contain': !offseted && size === 'contain',
  }

  const outlinedClasses = {
    'ring-2': true,
    'ring-primary-600': variant === 'primary',
    'ring-secondary-600': variant === 'secondary',
    'ring-success-600': variant === 'success',
    'ring-danger-600': variant === 'danger',
    'ring-warning-600': variant === 'warning',
    'ring-accent-600': variant === 'accent',
    'ring-light-900': variant === 'light',
  }

  const patternClasses = {
    'bg-primary-50': variant === 'primary' && pattern,
    'bg-secondary-50': variant === 'secondary' && pattern,
    'bg-success-50': variant === 'success' && pattern,
    'bg-danger-50': variant === 'danger' && pattern,
    'bg-warning-50': variant === 'warning' && pattern,
    'bg-accent-50': variant === 'accent' && pattern,
    'bg-light-50': variant === 'light' && pattern,
  }

  return {
    ...baseClasses,
    ...outlined ? outlinedClasses : {},
  }
})
</script>

<template>
  <div
    aria-hidden="true"
    aria-roledescription="image"
    :aria-label="alt"
    :style="{ backgroundImage: `url(${props.src})` }"
    :class="classes"
  />
</template>
