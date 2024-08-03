<script setup lang="ts">
import type { ContentCategoryObject, ContentWebsiteObject } from '@hsjm/server'

const alerts = useAlerts()

const { data: website } = await useRequest('GET /api/website', {
  onError: alerts.error,
  default: () => ({}) as ContentWebsiteObject,
})

const { data: categories } = await useRequest('GET /api/categories', {
  key: 'categories-footer',
  onError: alerts.error,
  default: () => [] as ContentCategoryObject[],
  data: { withPages: true },
})

function getSocialIcon(type: string) {
  if (type === 'facebook') return 'i-carbon:logo-facebook'
  if (type === 'twitter') return 'i-carbon:logo-twitter'
  if (type === 'linkedin') return 'i-carbon:logo-linkedin'
  if (type === 'instagram') return 'i-carbon:logo-instagram'
  if (type === 'youtube') return 'i-carbon:logo-youtube'
  return 'i-carbon:information'
}
</script>

<template>
  <WebsiteSection
    as="footer"
    contained
    padded
    dark
    gradient
    variant="primary"
    class="
      relative text-white pt-12 md:pt-24 pb-100
    ">

    <!-- Content -->
    <nav as="nav" class="grid grid-cols-4 gap-8 mx-auto items-start justify-center">
      <div class="col-span-full md:col-span-2 text-center md:text-left">
        <h3 class="text-3xl font-bold" v-text="'Téléphone, mail, lettre...'" />
        <p class="text-xl" v-text="'Nous sommes à votre écoute'" />
      </div>

      <!-- Separator -->
      <hr class="text-primary-50 opacity-50 col-span-full md:hidden">

      <!-- Navigation -->
      <WebsiteFooterCategory
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />

      <!-- Seprator -->
      <hr class="bg-primary-50 opacity-50 col-span-full">

      <!-- Copyrights -->
      <WebsiteFooterLegal :name="website.name" />

      <!-- Legal & Social -->
      <ul
        class="
        flex flex-row flex-wrap
        items-center justify-end
        lt-md:justify-center
        space-x-4 w-full">

        <!-- Social -->
        <div class="flex justify-end space-x-4 w-full">
          <Button
            v-for="item in website.contactSocials"
            :key="item.url"
            :to="item.url"
            class="hover:text-primary-400"
            :icon="getSocialIcon(item.type)"
          />
        </div>
      </ul>
    </nav>

    <!-- Bottom image. -->
    <div
      class="absolute bottom-0 z-10 w-full h-100 bg-bottom bg-repeat-x"
      :style="{ backgroundImage: 'url(/img/bg-footer.svg)' }"
    />
  </WebsiteSection>
</template>
