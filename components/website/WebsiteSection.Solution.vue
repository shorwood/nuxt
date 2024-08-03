<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { SectionProps } from '~/utils/types'

defineProps<{
  icon?: string
  heading?: string
  title?: string
  text?: string
  linkTo?: RouteLocationRaw
  linkLabel?: string
  vertical?: boolean
  items?: Array<{ title: string; text: string }>
} & SectionProps>()
</script>

<template>
  <WebsiteSection contained padded :dark :variant :gradient>
    <div class="flex flex-col items-start space-y-16 py-12 md:py-24">

      <!-- Heading -->
      <div class="space-y-8">
        <Badge
          v-if="icon"
          :icon="icon"
          :label="heading"
          :variant="variant ?? 'primary'"
          outlined
        />

        <!-- Title -->
        <h2 v-if="$slots.title || title" class="text-4xl font-bold max-w-3xl">
          <slot name="title">{{ title }}</slot>
        </h2>

        <!-- Text -->
        <p v-if="$slots.text || text" class="text-lg max-w-3xl">
          <slot name="text">{{ text }}</slot>
        </p>

        <!-- CTA -->
        <div v-if="linkTo" class="flex space-x-8">
          <ButtonLink
            :to="linkTo"
            :label="linkLabel"
            variant="primary"
            icon-append="i-carbon:chevron-right"
          />
        </div>
      </div>

      <!-- Items -->
      <div
        class="grid grid-cols-1 gap-16 md:gap-8 mt-8"
        :class="{ 'md:grid-cols-2': !vertical }">
        <slot>
          <WebsiteSectionSolutionItem
            v-for="item in items"
            :key="item.title"
            :title="item.title"
            :text="item.text"
          />
        </slot>
      </div>
    </div>
  </WebsiteSection>
</template>
