<script setup lang="ts">
import type { NavItem } from '~/utils/types'
import { NuxtLink } from '#components'

const props = defineProps<NavItem>()

// --- Initialize composables.
const slots = useSlots()
const route = useRoute()

// --- Initialize refs.
const menuOpen = ref(true)
const menu = ref<HTMLDivElement>()
const button = ref<HTMLDivElement>()
const hasMenu = computed(() => !!slots.default || !!props.links || !!props.groups)

// --- Declare toggle method.
function toggleMenu(value?: boolean) {
  if (!hasMenu.value) return
  menuOpen.value = value ?? !menuOpen.value
}

const classesButton = computed(() => {
  const { size = 'medium' } = props
  return {
    'h-12 md:h-16': size === 'small',
    'h-16 md:h-20': size === 'medium',
    'h-24 md:h-32': size === 'large',
  }
})

const classesPanel = computed(() => {
  const { align = 'center' } = props
  return {
    'justify-start': align === 'left',
    'justify-center': align === 'center',
    'justify-end': align === 'right',
  }
})

// --- Register closing triggers
watch(() => route, () => toggleMenu(false))
onClickOutside(menu, () => toggleMenu(false), { ignore: [button] })
</script>

<template>
  <div
    class="relative px-4 first:pl-0 last:pr-0 group"
    @mouseenter="() => toggleMenu(true)"
    @mouseleave="() => toggleMenu(false)">

    <!-- Navigation item button -->
    <BaseButton
      :to="to"
      :as="to ? NuxtLink : 'div'"
      ref="button"
      class="inline-flex items-center cursor-pointer z-10 text-black group-hover:text-primary-600 "
      :class="classesButton">

      <!-- Icon -->
      <BaseIcon
        v-if="icon"
        :icon="icon"
        class="mr-2"
      />

      <!-- Text -->
      <span
        class="whitespace-pre text-lg font-normal"
        v-text="label"
      />

      <!-- Icon -->
      <BaseIcon
        v-if="hasMenu"
        icon="i-carbon:chevron-down"
        class="ml-2 "
        :class="menuOpen ? 'rotate-180' : undefined"
      />
    </BaseButton>

    <!-- Menu Panel -->
    <div ref="menu" v-if="hasMenu" v-show="menuOpen" class="absolute -left-8 top-100% pointer-events-none" :class="classesPanel">
      <div class="w-full max-w-7xl mx-auto pointer-events-auto cursor-unset">
        <slot>
          <WebsiteNavPanel v-bind="$props"/>
        </slot>
      </div>
    </div>
  </div>
</template>
