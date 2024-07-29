<script setup lang="ts">
const props = defineProps<{
  hint?: string
  label?: string
  icon?: string
  iconAppend?: string
  iconPrepend?: string
  iconClass?: string

  modelValue?: string
  classInput?: string
  parse?: (value: string) => string
}>()

const model = useVModel(props, 'modelValue')
</script>

<template>
  <InputGroup v-bind="props">
    <BaseInputText
      v-bind="$attrs"
      v-model="model"
      :label="label"
      :parse="parse"
      :class="[classInput, {
        'pl-12': iconPrepend || icon,
        'pr-12': iconAppend,
      }]"
      class-disabled="
        bg-gray text-gray
      "
      class-error="
        !bg-danger-500 text-white
      "
      class="input-primary-600"
    />
  </InputGroup>
</template>
