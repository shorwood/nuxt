<script setup lang="ts">
import type { BaseDialogSlots } from '@unshared/vue'

defineProps<{
  closable?: boolean
  title?: string
  text?: string
}>()

defineSlots<BaseDialogSlots>()
</script>

<template>
  <BaseDialog
    class="
      fixed w-full h-full bg-transparent font-normal cursor-default
      flex items-center justify-center pointer-events-none
      backdrop:bg-black/20 backdrop:backdrop-blur-sm
    ">

    <!-- Dialog -->
    <template #dialog="slots">
      <div
        v-if="slots.isOpen"
        class="
          rounded-lg w-full
          max-w-6xl
          inset-0 top-0 left-1/2 z-50 transform
          bg-primary-50 text-primary-900
          dark:bg-primary-900 dark:text-primary-50
          pointer-events-auto
        ">
        <DashboardSection :title="title" :text="text" class="w-full">

          <!-- Close button top/left -->
          <template #actions>
            <Button
              icon="i-carbon:close"
              class="cta-light-primary-600 !p-2"
              @mousedown="() => slots.close()"
            />
          </template>

          <!-- Dialog content -->
          <slot name="dialog" v-bind="slots" />
        </DashboardSection>

      </div>
    </template>

    <!-- Trigger -->
    <template #default="slots">
      <slot name="default" v-bind="slots" />
    </template>
  </BaseDialog>
</template>
