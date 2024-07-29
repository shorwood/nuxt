<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <p>
    {{ name }} © {{ new Date().getFullYear() }}. Tous droits réservés.
  </p>
</template>
