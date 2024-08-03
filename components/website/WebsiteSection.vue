<script setup lang="ts">
const props = defineProps<{
  dark?: boolean
  padded?: boolean
  pattern?: boolean
  gradient?: boolean
  contained?: boolean
  variant?: 'accent' | 'danger' | 'light' | 'primary' | 'secondary' | 'success' | 'warning'

  // --- Pass-through.
  as?: keyof HTMLElementTagNameMap
  classContainer?: unknown
}>()

defineOptions({
  inheritAttrs: false,
})

const classes = computed(() => {
  const {
    variant,
    pattern = false,
    gradient = false,
  } = props

  const baseClasses = {
    'w-full': true,
  }

  const lightClasses = {
    'dark:text-white text-black': true,
    'dark:bg-primary-900 bg-primary-50': variant === 'primary',
    'dark:bg-secondary-900 bg-secondary-50': variant === 'secondary',
    'dark:bg-success-900 bg-success-50': variant === 'success',
    'dark:bg-danger-900 bg-danger-50': variant === 'danger',
    'dark:bg-warning-900 bg-warning-50': variant === 'warning',
    'dark:bg-accent-900 bg-accent-50': variant === 'accent',
    'dark:bg-dark-900 bg-light-600': variant === 'light',
  }

  const gradientClasses = {
    'bg-gradient-to-br bg-[size:120%]': true,
    'from-primary-100 via-primary-50 to-accent-100': variant === 'primary',
    'from-secondary-100 via-secondary-50 to-accent-100': variant === 'secondary',
    'from-success-100 via-success-50 to-accent-100': variant === 'success',
    'from-danger-100 via-danger-50 to-accent-100': variant === 'danger',
    'from-warning-100 via-warning-50 to-accent-100': variant === 'warning',
    'from-accent-100 via-accent-50 to-primary-50': variant === 'accent',
    'from-light-100 via-light-400 to-light-900': variant === 'light',
  }

  const gradientClassesDark = {
    'dark:text-white': true,
    'dark:from-primary-700 dark:via-primary-600 dark:to-accent-600': variant === 'primary',
    'dark:from-secondary-700 dark:via-secondary-600 dark:to-accent-600': variant === 'secondary',
    'dark:from-success-700 dark:via-success-600 dark:to-accent-600': variant === 'success',
    'dark:from-danger-700 dark:via-danger-600 dark:to-accent-600': variant === 'danger',
    'dark:from-warning-700 dark:via-warning-600 dark:to-accent-600': variant === 'warning',
    'dark:from-accent-700 dark:via-accent-600 dark:to-primary-600': variant === 'accent',
    'dark:from-dark-700 dark:via-dark-600 dark:to-accent-600': variant === 'light',
  }

  const patternClasses = {
    'bg-graphpaper-primary-50': variant === 'primary',
    'bg-graphpaper-secondary-50': variant === 'secondary',
    'bg-graphpaper-success-50': variant === 'success',
    'bg-graphpaper-danger-50': variant === 'danger',
    'bg-graphpaper-warning-50': variant === 'warning',
    'bg-graphpaper-accent-50': variant === 'accent',
    'bg-graphpaper-dark-50': variant === 'light',
  }

  if (gradient) return { ...baseClasses, ...gradientClasses, ...gradientClassesDark }
  if (pattern) return { ...baseClasses, ...patternClasses }
  return { ...baseClasses, ...lightClasses }
})

const classContent = computed(() => ({
  'px-8': props.padded,
  'max-w-contained mx-auto': props.contained,
}))
</script>

<template>
  <div class="relative w-full" :class="[{ dark }, classContainer]">
    <component :is="as ?? 'div'" :class="classes" class="w-full">
      <div :class="classContent" v-bind="$attrs">
        <slot />
      </div>
    </component>
  </div>
</template>
