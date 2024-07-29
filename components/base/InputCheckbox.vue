<script setup lang="ts">
const props = defineProps<{
  id?: string
  hint?: string
  label?: string
  value?: string
  modelValue?: boolean | string | string[]
  type?: 'checkbox' | 'radio' | 'switch'
  compact?: boolean
}>()

const model = useVModel(props, 'modelValue')
</script>

<template>
  <BaseInputToggle
    as="div"
    :id="id"
    v-slot="{ isActive }"
    v-model="model"
    :type="type ?? 'checkbox'"
    :value="value"
    :class="{
      'input-primary-600 w-full p-6': compact !== true,
    }"
    class="
      flex items-center space-x-6 cursor-pointer
    ">

    <!-- Circle when active -->
    <div
      class="
        flex items-center justify-center shrink-0
        transition-all duration-200 ease-in-out
        text-primary-50 ring-1 ring-primary-600/20
      "
      :class="{
        'w-8 h-8': compact !== true,
        'w-4 h-4': compact === true,
        'bg-primary-600/60': isActive === true,
        'rounded-full': type === 'radio',
        'rounded-md': type === 'checkbox',
      }">
      <BaseIcon icon="i-carbon:checkmark" v-if="isActive === true" />
      <BaseIcon icon="i-carbon:close" v-if="isActive === 'mixed'" />
    </div>

    <!-- Label -->
    <div v-if="!compact" class="flex flex-col space-y-1">
      <label
        :for="id"
        v-if="label"
        class="text-lg select-none font-bold transition-opacity duration-200 ease-in-out"
        :class="{
          'opacity-80': isActive === true,
          'opacity-60': isActive === false,
        }">
        {{ label }}
      </label>

      <!-- Hint -->
      <div
        v-if="hint"
        class="text-sm select-none transition-opacity duration-200 ease-in-out"
        :class="{
          'opacity-60': isActive === true,
          'opacity-40': isActive === false,
        }">
        {{ hint }}
      </div>
    </div>
  </BaseInputToggle>
</template>
