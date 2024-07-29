<template>
  <div class="flex lt-md:flex-col-reverse font-sans md:h-screen">

    <!-- Left -->
    <aside class="md:w-120 md:h-screen">
      <div class="relative flex flex-col justify-between h-full bg-primary-600 text-white p-12 bg-bottom bg-no-repeat">

        <!-- Background -->
        <div
          class="absolute left-0 top-0 w-full h-full bg-cover bg-no-repeat bg-bottom"
          :style="{ backgroundImage: `url(/img/bg-auth.svg)` }"
        />

        <!-- Title -->
        <div class="space-y-8 z-10">
          <BaseButton to="/" class="text-7xl font-bold">
            CaaSsys
          </BaseButton>
          <h3 class="text-3xl max-w-xs">
            Laissez nous vous trouvez le temps qu'il vous manque
          </h3>
        </div>

        <!-- Redirect -->
        <div class="z-10 p-8 rounded-xl max-w-xs space-y-4 bg-primary-600 self-end">
          <p class="text-base leading-tight">
            Une demande, un besoin ou une question ? N'hésitez pas à nous contacter.
          </p>
          <Button
            outlined
            variant="primary"
            icon-prepend="i-carbon:user-follow"
            icon-append="i-carbon:arrow-right"
            label="Faire appel à CaaSsys"
            class="cta-light-primary-200"
          />
        </div>
      </div>
    </aside>

    <!-- Content -->
    <div class="flex flex-col flex-grow items-center min-h-screen overflow-y-auto">
      <div class="lg:max-w-xl py-24 px-4">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
