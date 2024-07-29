<template>
  <div class="relative p-4">
    <div
      class="
      bg-graphpaper-primary-600/20 absolute inset-0 z-10 rounded-lg
      backdrop-grayscale-50 border border-primary-600/30
      flex items-center justify-center w-full
    ">
      <slot>

        <BaseIcon icon="i-carbon:traffic-cone" class="text-primary-600/50 text-5xl mr-8" />
        <div>
          <h1 class="text-2xl font-bold">En construction...</h1>
          <p class="text-lg">Cette partie est encore à développer.</p>
        </div>
      </slot>
    </div>
  </div>
</template>
