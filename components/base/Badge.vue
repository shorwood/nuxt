<script setup lang="ts">
const props = defineProps<{
  icon?: string
  iconAppend?: string
  iconPrepend?: string
  label?: string
  filled?: boolean
  outlined?: boolean
  square?: boolean
  variant?: Variant
  size?: 'lg' | 'md' | 'sm' | 'xl'
}>()

const classes = computed(() => {
  const {
    square,
    filled,
    outlined,
    size = 'md',
    variant = 'light',
  } = props

  const classesBase = {
    'rounded-full': !square,
    'space-x-2 text-sm px-2 py-1': size === 'sm',
    'space-x-3 text-base px-3 py-1': size === 'md',
    'space-x-4 text-lg px-4 py-1': size === 'lg',
    'space-x-4 text-xl px-4 py-2': size === 'xl',
  }

  const classesLight = {
    'text-primary-600 bg-primary-50': variant === 'primary',
    'text-secondary-600 bg-secondary-50': variant === 'secondary',
    'text-success-600 bg-success-50': variant === 'success',
    'text-danger-600 bg-danger-50': variant === 'danger',
    'text-warning-600 bg-warning-50': variant === 'warning',
    'text-accent-600 bg-accent-50': variant === 'accent',
    'text-black bg-light': variant === 'light',
  }

  const classesOutlined = {
    'border-2': true,
    'border-primary-600 text-primary-600': variant === 'primary',
    'border-secondary-600 text-secondary-600': variant === 'secondary',
    'border-success-600 text-success-600': variant === 'success',
    'border-danger-600 text-danger-600': variant === 'danger',
    'border-warning-600 text-warning-600': variant === 'warning',
    'border-accent-600 text-accent-600': variant === 'accent',
    'border-black text-black': variant === 'light',
  }

  const classesOutlinedDark = {
    'dark:border-primary-600 dark:text-primary-600': variant === 'primary',
    'dark:border-secondary-600 dark:text-secondary-600': variant === 'secondary',
    'dark:border-success-600 dark:text-success-600': variant === 'success',
    'dark:border-danger-600 dark:text-danger-600': variant === 'danger',
    'dark:border-warning-600 dark:text-warning-600': variant === 'warning',
    'dark:border-accent-600 dark:text-accent-600': variant === 'accent',
    'dark:border-white dark:text-white': variant === 'light',
  }

  const classesFilled = {
    'text-white': true,
    'bg-primary-600': variant === 'primary',
    'bg-secondary-600': variant === 'secondary',
    'bg-success-600': variant === 'success',
    'bg-danger-600': variant === 'danger',
    'bg-warning-600': variant === 'warning',
    'bg-accent-600': variant === 'accent',
    'bg-light-600': variant === 'light',
  }

  if (filled) return { ...classesBase, ...classesFilled }
  if (outlined) return { ...classesBase, ...classesOutlined, ...classesOutlinedDark }
  return { ...classesBase, ...classesLight }
})

const iconClasses = computed(() => {
  const { size = 'md' } = props
  return {
    'w-4 h-4': size === 'sm',
    'w-5 h-5': size === 'md',
    'w-6 h-6': size === 'lg',
    'w-7 h-7': size === 'xl',
  }
})
</script>

<template>
  <BaseBadge
    class="inline-flex items-center block px-2 py-1 font-medium"
    :class="classes">

    <!-- Icon -->
    <BaseIcon
      as="i"
      v-if="iconPrepend || icon"
      :icon="iconPrepend || icon"
      :class="iconClasses"
      load
    />

    <!-- Content -->
    <slot>
      <span v-if="label" v-text="label" />
    </slot>

    <!-- Icon -->
    <BaseIcon
      as="i"
      v-if="iconAppend"
      :icon="iconAppend"
      :class="iconClasses"
      load
    />
  </BaseBadge>
</template>
