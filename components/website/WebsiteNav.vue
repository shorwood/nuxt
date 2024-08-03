<script setup lang="ts">
import type { SectionProps } from '~/utils/types'

const props = defineProps<{
  name: string
  imageUrl?: string
  size?: 'large' | 'medium' | 'small'

  // --- Menu.
  items?: NavItem[]
  itemsStart?: NavItem[]
  itemsCenter?: NavItem[]
  itemsEnd?: NavItem[]
} & SectionProps>()

const classes = computed(() => {
  const { size = 'medium' } = props
  return {
    'bg-white dark:bg-dark-900': true,
    'grid grid-cols-3 items-center': true,
    'space-x-12 relative p-0': true,
    'h-12 md:h-16': size === 'small',
    'h-16 md:h-20': size === 'medium',
    'h-24 md:h-32': size === 'large',
  }
})

const classesIcon = computed(() => {
  const { size = 'medium' } = props
  return {
    'w-10 h-10 md:w-10 md:h-10': size === 'small',
    'w-16 h-16 md:w-12 md:h-12': size === 'medium',
    'w-24 h-24 md:w-20 md:h-20': size === 'large',
  }
})
</script>

<template>
  <WebsiteSection
    :contained
    :padded
    :variant
    :class="classes">

    <!-- Title -->
    <div class="flex items-center h-full space-x-8">
      <NuxtLink
        v-if="name || imageUrl"
        :to="{ name: 'WebsiteHome' }"
        class="cursor-pointer hover:opacity-80 transition-opacity text-primary-600">

        <!-- If image, display image -->
        <div
          v-if="imageUrl"
          :style="{ backgroundImage: `url(${imageUrl})` }"
          :class="classesIcon"
          class="bg-contain bg-center bg-no-repeat"
          alt="Logo"
        />

        <!-- If no image, display name -->
        <p
          v-else
          class="text-5xl md:text-2xl font-bold"
          v-text="name"
        />
      </NuxtLink>

      <!-- Menu - Left -->
      <div v-if="$slots.start || itemsStart" class="flex items-center justify-start">
        <slot name="start"/>
        <WebsiteNavItem v-for="(item, index) in itemsStart" :key="index" v-bind="item" :size />
      </div>
    </div>

    <!-- Menu - center -->
    <div v-if="$slots.center || itemsCenter" class="flex items-center justify-center col-start-2">
      <slot name="center"/>
      <WebsiteNavItem v-for="(item, index) in itemsCenter" :key="index" v-bind="item" :size />
    </div>

    <!-- Menu - Right -->
    <div v-if="$slots.end || itemsEnd" class="flex items-center justify-end col-start-3">
      <WebsiteNavItem v-for="(item, index) in itemsEnd" :key="index" v-bind="item" :size />
      <slot name="end"/>
    </div>

  </WebsiteSection>
</template>
