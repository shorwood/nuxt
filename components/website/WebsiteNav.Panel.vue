<script setup lang="ts">
import type { NavItem } from '~/utils/types'

defineProps<NavItem>()
</script>

<template>
  <div class="flex w-full items-center bg-white border border-primary-100 shadow-dark/10 shadow-2xl">

    <!-- Left -->
    <div class="w-full">
      <slot name="left">

        <div v-if="groups?.length" class="flex divide-x divide-primary-100 p-8">
          <WebsiteNavPanel v-for="group in groups" :key="group.title" v-bind="group" />
        </div>

        <div v-if="links?.length" class="space-y-2 p-8">
          <WebsiteNavPanelItem v-for="link in links" :key="link.label" v-bind="link" />
        </div>
      </slot>
    </div>

    <!-- Right -->
    <!--
      <div class="flex flex-col p-8 space-y-8 bg-primary-50 border border-primary-100">

      <div class="space-y-4">
      <h3 class="text-3xl font-bold">Mais bien plus encore ...</h3>
      <p>Découvrez toutes nos expertises et nos services. Nous sommes à votre disposition pour vous accompagner dans vos projets.</p>
      </div>

      <Button
      to="/expertises"
      class="!mt-auto"
      link
      varian="primary"
      label="Voir toutes nos expertises"
      icon-append="i-carbon:arrow-right"
      />
      </div>
    -->
  </div>
</template>
