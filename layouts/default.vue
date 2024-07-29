<template>
  <div class="flex flex-col min-h-screen">

    <!-- Banner -->
    <!-- <AppBanner /> -->

    <!-- Navigation -->
    <WebsiteNav
      name="ACME"
      class="sticky top-0 z-100">

      <template #center>
        <WebsiteNavItem label="Features"><WebsiteNavPanelExpertises /></WebsiteNavItem>
        <WebsiteNavItem label="Company"><WebsiteNavPanelContact /></WebsiteNavItem>
        <WebsiteNavItem label="Support"><WebsiteNavPanelAbout /></WebsiteNavItem>
      </template>

      <template #right>
        <WebsiteNavItem label="Login" to="/login" />
        <WebsiteNavItem label="Sign up" to="/signup" />
      </template>
    </WebsiteNav>

    <!-- Content -->
    <main class="overflow-hidden grow">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <WebsiteFooter />
  </div>
</template>
