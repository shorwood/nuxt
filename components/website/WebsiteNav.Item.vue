<script setup lang="ts">
import { NuxtLink } from '#components'

defineProps<{
  to?: string
  icon?: string
  label?: string
}>()

// --- Initialize composables.
const slots = useSlots()
const route = useRoute()

// --- Initialize refs.
const menuOpen = ref(false)
const menu = ref<HTMLDivElement>()
const button = ref<HTMLDivElement>()
const hasMenu = computed(() => !!slots.default)

// --- Declare toggle method.
function toggleMenu(value?: boolean) {
  if (!hasMenu.value) return
  menuOpen.value = value ?? !menuOpen.value
}

// --- Register closing triggers
watch(() => route, () => toggleMenu(false))
onClickOutside(menu, () => toggleMenu(false), { ignore: [button] })
</script>

<template>
  <BaseButton
    :to="to"
    :as="to ? NuxtLink : 'div'"
    :label="label"
    class="group"
    @mouseenter="() => toggleMenu(true)"
    @mouseleave="() => toggleMenu(false)">

    <!-- Navigation item button -->
    <div ref="button" class="inline-flex items-center text-lg font-bold py-5 relative cursor-pointer z-10">

      <!-- Icon -->
      <BaseIcon
        v-if="icon"
        :icon="icon"
        class="mr-2"
      />

      <!-- Text -->
      <span>{{ label }}</span>

      <!-- Icon -->
      <BaseIcon
        v-if="hasMenu"
        icon="i-carbon:chevron-down"
        class="ml-2 transition-transform duration-100"
        :class="menuOpen ? 'rotate-180' : undefined"
      />
    </div>

    <!-- Navigation item menu -->
    <Transition
      leave-to-class="opacity-0 scale-90 -translate-y-10 pointer-events-none"
      enter-from-class="opacity-0 scale-90 -translate-y-10"
      enter-active-class="transition-all duration-200"
      leave-active-class="transition-all duration-200">
      <div
        v-show="menuOpen && hasMenu"
        class="pt-28 absolute !m-0 right-0 top-0 cursor-unset transform">
        <!-- Content -->
        <div
          ref="menu"
          class="
            overflow-hidden rounded-xl shadow-2xl shadow-gray-500/50
            bg-primary-50 text-black border border-light-500
            text-left text-base font-normal pointer-events-auto
          ">
          <slot />
        </div>
      </div>
    </Transition>
  </BaseButton>
</template>
