<script setup lang="ts" generic="T">
defineProps<{
  hint?: string
  label?: string
  required?: boolean
  icon?: string
  iconAppend?: string
  iconPrepend?: string
  iconClass?: string
  classGroup?: string
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="w-full" :class="$attrs.class">
    <label
      v-if="label"
      class="text-base font-bold block mb-1"
      v-text="required ? `${label} *` : label"
    />

    <div class="relative group" :class="classGroup">
      <slot />

      <!-- Icon -->
      <BaseIcon
        as="div"
        v-if="iconPrepend || icon"
        :icon="iconPrepend! || icon!"
        :class="iconClass"
        class="
          absolute top-0 left-0 flex items-center justify-center text-base
          h-full px-3 mx-3 pointer-events-none transition-all duration-300
          text-primary-900 dark:text-primary-600
          opacity-50 group-hover:opacity-100
        "
      />

      <!-- Icon -->
      <BaseIcon
        v-if="iconAppend"
        :icon="iconAppend"
        :class="iconClass"
        class="
          absolute top-0 right-0 flex items-center justify-center text-base
          h-full px-3 mx-3 pointer-events-none transition-all duration-300
          text-primary-900 dark:text-primary-600
          opacity-60 group-hover:opacity-100
        "
      />
    </div>

    <!-- Hint -->
    <p class="text-xs opacity-50 mt-1" v-if="hint">
      {{ hint }}
    </p>
  </div>
</template>
