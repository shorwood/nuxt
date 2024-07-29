<script setup lang="ts" generic="T, V = T">
import type { MaybeArray } from '@unshared/types'
import { omit } from '@unshared/collection/omit'

const props = defineProps<{
  hint?: string
  label?: string

  icon?: string
  iconAppend?: string
  iconPrepend?: string
  iconClass?: string
  clearable?: boolean
  placeholder?: string
  maxValues?: number

  search?: string
  modelValue?: MaybeArray<V>
  multiple?: boolean
  allowCustomValue?: boolean
  classInput?: string
  options: T[]
  optionValue?: (option: T) => V
  optionLabel?: (option: T) => string
  optionText?: (option: T) => string
  optionIcon?: (option: T) => string
}>()

const maxValues = computed(() => props.maxValues ?? 3)
const model = useVModel(props, 'modelValue', undefined, { passive: true })
const search = useVModel(props, 'search', undefined, { passive: true }) as Ref<string>
</script>

<template>
  <InputGroup v-bind="props">
    <BaseInputList
      v-bind="omit($attrs, 'class')"
      v-model="model"
      v-model:search="search"
      :multiple="multiple"
      :placeholder="placeholder"
      :allow-custom-value="allowCustomValue"
      :options="options"
      :option-value="optionValue as any"
      :option-label="optionLabel"
      :label="label"
      :class="[classInput, {
        'pl-12': iconPrepend || icon,
        'pr-12': iconAppend,
      }]"
      class="input-primary-600 relative flex flex-nowrap"
      class-search="bg-transparent outline-none w-full">

      <!-- Values -->
      <template #values="{ values }">
        <div class="flex flex-nowrap items-center space-x-2">
          <div
            v-for="(value, index) in values.slice(0, maxValues)"
            :key="index"
            class="
            flex flex-nowrap items-center space-x-2 px-2
            bg-primary-600/10 rounded-md
            transition-all whitespace-nowrap
            last:mr-2
          ">
            <span v-text="value.text" />
            <BaseIcon
              v-if="clearable"
              icon="i-carbon:close"
              class="text-primary-600 cursor-pointer"
              @click="() => value.off()"
            />
          </div>

          <div
            v-if="values.length > maxValues"
            class="
            flex items-center justify-center
            bg-primary-600/10 rounded-md
            transition-all px-4
            last:mr-2
          ">
            <span>+{{ values.length - maxValues }}</span>
          </div>
        </div>
      </template>

      <!-- Options -->
      <template #options="{ options, isOpen }">
        <Transition
          enter-active-class="transition ease-out duration-100 transform"
          leave-active-class="transition ease-in duration-100 transform"
          enter-from-class="opacity-0 -translate-y-4"
          leave-to-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0">
          <div
            v-if="isOpen"
            class="
              absolute top-full left-0 w-full max-h-64 z-10
              bg-primary-50 dark:bg-primary-900
              border border-primary-600/10 dark:border-primary-600/20
              rounded-md
            ">
            <div
              v-for="(option, index) in options"
              :key="index"
              @click="() => option.toggle()"
              class="
                flex items-center h-12
                p-2 space-x-2 cursor-pointer
                hover:bg-primary-600/10
                transition-all
              "
              :class="{
                'bg-primary-600/10': option.isSelected(),
                'hover:bg-primary-600/10': option.isSelected(),
              }">
              <BaseIcon
                icon="i-carbon:checkmark"
                class="text-primary-600"
                :class="{
                  'opacity-0': !option.isSelected(),
                  'opacity-100': option.isSelected(),
                }"
              />
              <span v-text="option.text" />
            </div>
          </div>
        </Transition>
      </template>
    </BaseInputList>
  </InputGroup>
</template>
