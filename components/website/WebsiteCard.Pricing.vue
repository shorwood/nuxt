<script setup lang="ts">
import type { Variant } from '~/utils/types'

defineProps<{
  icon?: string
  name?: string
  headline?: string
  text?: string
  price?: number | string
  priceUnit?: string
  priceText?: string

  // --- Link.
  linkTo?: string
  linkLabel?: string

  // --- Features.
  featureTitle?: string
  features?: string[]

  // --- Styling.
  dark?: boolean
  rounded?: boolean
  centered?: boolean
  outlined?: boolean
  gradient?: boolean
  variant?: Variant
}>()
</script>

<template>
  <div>
    <WebsiteCard v-bind="{ dark, rounded, centered, outlined, gradient, variant }">

      <!-- Icon -->
      <BaseIcon v-if="icon" :icon="icon" class="w-12 h-12" />

      <!-- Title -->
      <div>
        <h3 v-if="$slots.name || name" class="text-4xl font-bold">
          <slot name="name">{{ name }}</slot>
        </h3>
        <h4 v-if="$slots.headline || headline" class="text-lg font-medium">
          <slot name="headline">{{ headline }}</slot>
        </h4>
        <p v-if="$slots.text || text" class="text-base font-normal !mt-8 opacity-60">
          <slot name="text">{{ text }}</slot>
        </p>
      </div>

      <!-- Pricing -->
      <p v-if="$slots.price || price" class="flex items-center space-x-2 !mt-12">
        <span v-if="$slots.priceUnit || priceUnit" class="text-3xl font-medium self-start">
          <slot name="priceUnit">{{ priceUnit }}</slot>
        </span>
        <span v-if="$slots.price || price" class="text-6xl font-medium">
          <slot name="price">{{ price }}</slot>
        </span>
        <span v-if="$slots.priceText || priceText" class="text-base font-normal self-end">
          <slot name="priceText">{{ priceText }}</slot>
        </span>
      </p>

      <!-- Link -->
      <div v-if="linkTo" class="!mt-12">
        <Button
          :link="outlined"
          :filled="!outlined"
          size="md"
          :to="linkTo"
          :label="linkLabel"
          :variant="variant"
          icon-append="i-carbon:chevron-right"
          icon-expand
        />
      </div>
    </WebsiteCard>

    <!-- Features -->
    <div class="mt-12">

      <!-- Title -->
      <h5 v-if="featureTitle" class="text-lg font-bold">
        <slot name="featureTitle">{{ featureTitle }}</slot>
      </h5>

      <!-- Features -->
      <div class="space-y-2 mt-4">
        <p v-for="feature in features" :key="feature" class="flex items-center space-x-2">
          <BaseIcon icon="i-carbon:checkmark" class="w-6 h-6 text-primary-600" />
          <span class="text-lg font-normal ">{{ feature }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
