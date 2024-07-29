<script setup lang="ts">
import type { InputFiles } from '@unshared/vue'

const props = defineProps<{
  label?: string
  clearable?: boolean
  multiple?: boolean
  disabled?: boolean
  accept?: string
  modelValue?: InputFiles
}>()

const model = useVModel(props, 'modelValue', undefined, { passive: true })

function handleClear(index: number) {
  console.log('Clearing image at index', index)
}
</script>

<template>
  <BaseInputFile
    :multiple="multiple"
    :accept="accept"
    v-model="model"
    v-slot="{ thumbnails, openDialog }">
    <div
      v-bind="$attrs"
      :class="{ 'opacity-50 pointer-events-none': disabled }"
      class="
          relative group w-full p-4
          input-primary-600 cursor-pointer
          transition-all duration-200 ease-in-out
        ">

      <!-- Dashed square -->
      <div
        v-if="thumbnails.length === 0"
        @click="() => openDialog()"
        class="
          flex flex-col items-center justify-center h-full
          border-dashed border-2 border-primary-600/40 rounded-lg
          group-hover:opacity-100 opacity-60 transition-opacity
        ">
        <slot>
          <BaseIcon icon="i-carbon:upload" class="text-primary-600 text-5xl p-4" />
          <div class="text-lg font-bold text-center">{{ label }}</div>
        </slot>
      </div>

      <!-- Thumbnails -->
      <div v-else class="relative flex items-stretch flex-wrap gap-4 h-full">
        <div
          v-for="(thumbnail, index) in thumbnails"
          :key="thumbnail"
          class="min-w-1/3 grow rounded-lg bg-cover bg-center"
          :style="{ backgroundImage: `url(${thumbnail})` }">

          <!-- Clear button -->
          <Button
            v-if="clearable"
            @click.prevent="() => handleClear(index)"
            icon="i-carbon:close"
            class="
            absolute top-2 right-2 z-10 backdrop-blur-lg
            cta-light-danger-600 text-xl !p-2
            group-hover:opacity-100 opacity-0 z-10
          "
          />
        </div>
      </div>
    </div>
  </BaseInputFile>
</template>
