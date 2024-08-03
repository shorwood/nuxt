<script setup lang="ts">
import type { SectionProps } from '../../utils/types'

const props = defineProps<{
  icon?: string
  title?: string
  text?: string
  subtext?: string
  headline?: string
  imageUrl?: string
  imageContain?: boolean

  // --- Styling.
  size?: 'lg' | 'md' | 'sm'
  reverse?: boolean

  // --- Display.
  hideIcon?: boolean
  hideImage?: boolean
  hideTitle?: boolean
  hideText?: boolean
  hideSubtext?: boolean
  hideHeadline?: boolean
  hideContent?: boolean
} & SectionProps>()

const classes = computed(() => {
  const { reverse = false, size = 'md' } = props
  return {
    'flex items-center gap-12': true,
    'py-8': size === 'sm',
    'py-12': size === 'md',
    'py-24': size === 'lg',
    'flex-col sm:flex-row-reverse': reverse,
    'flex-col sm:flex-row': !reverse,
  }
})

const classesTitle = computed(() => {
  const { size = 'md' } = props
  return {
    'text-3xl md:text-4xl font-medium max-w-lg': size === 'sm',
    'text-4xl md:text-5xl font-medium max-w-lg': size === 'md',
    'text-6xl md:text-7xl font-medium max-w-xl': size === 'lg',
  }
})

const classesText = computed(() => {
  const { size = 'md' } = props
  return {
    'text-lg md:text-xl max-w-lg': size === 'sm',
    'text-xl md:text-2xl max-w-xl': size === 'md',
    'text-2xl md:text-3xl max-w-2xl': size === 'lg',
  }
})
</script>

<template>
  <WebsiteSection
    :class="classes"
    :dark
    :contained
    :padded
    :gradient
    :variant>

    <!-- Left -->
    <div
      class="
      flex flex-col space-y-8 grow
      text-center md:text-left py-24
      items-center md:items-start
    ">

      <!-- Title, Headline, and Subtitle -->
      <div class="flex flex-col items-center md:items-start space-y-8">
        <BaseIcon
          as="i"
          v-if="icon && !hideIcon"
          :icon="icon"
          class="md:w-16 md:h-16 w-12 h-12"
        />
        <h3 v-if="!hideHeadline && ($slots.headline || headline)" class="text-2xl font-bold">
          <slot name="headline">{{ headline }}</slot>
        </h3>
        <h1 v-if="!hideTitle && ($slots.title || title)" :class="classesTitle">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="!hideText && ($slots.text || text)" :class="classesText">
          <slot name="text">{{ text }}</slot>
        </p>
      </div>

      <!-- CTA -->
      <div v-if="!hideContent && $slots.default" class="flex items-center flex-wrap space-x-8">
        <slot />
      </div>

      <!-- Subtext -->
      <p v-if="!hideSubtext && ($slots.subtext || subtext)" class="text-sm">
        <slot name="subtext">{{ subtext }}</slot>
      </p>
    </div>

    <!-- Right -->
    <div
      v-if="$slots.right || imageUrl"
      class="lt-lg:hidden flex items-center justify-center md:basis-1/2 md:shrink">
      <slot name="right">
        <div
          :class="{ 'bg-contain bg-center': imageContain }"
          class="w-full h-md rounded bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${imageUrl})` }"
        />
      </slot>
    </div>
  </WebsiteSection>
</template>
