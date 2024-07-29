<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'accent' | 'danger' | 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'lg' | 'md' | 'sm'
}>()
</script>

<template>
  <BaseBadge
    class="text-white px-2 py-1"
    :class="{
      'bg-primary-600': variant === 'primary',
      'bg-secondary-600': variant === 'secondary',
      'bg-success-600': variant === 'success',
      'bg-danger-600': variant === 'danger',
      'bg-warning-600': variant === 'warning',
      'bg-accent-600': variant === 'accent',
      'text-lg': size === 'lg',
      'text-sm': size === 'sm',
      'text-md': size === 'md',
    }">
    {{ label }}
  </BaseBadge>
</template>
