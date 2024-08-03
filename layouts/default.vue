<script setup lang="ts">
const navItemsStart: NavItem[] = [
  {
    to: '/solutions',
    label: 'Solutions',
    groups: [
      {
        icon: 'i-carbon:tools',
        title: 'Platform & Technology',
        description: 'At the core of our solutions reside an ambitious vision of AI. Let us show you how.',
        items: [
          { label: 'GenAI Orchestrator', to: '/technologies/generative-ai' },
          { label: 'Computer Vision', to: '/technologies/computer-vision' },
          { label: 'Reasoning Optimisation', to: '/technologies/reasoning-optimisation' },
          { label: 'Extraction & Analysis', to: '/technologies/extraction-analysis' },
          { label: 'Native Data Managment', to: '/technologies/native-iam' },
          { label: 'Self-Hosted & On-Premise', to: '/technologies/self-hosted' },
          { label: 'Open-source', to: '/technologies/open-source' },
          { label: 'Cloud & SaaS', to: '/technologies/cloud' },
        ],
      },
      {
        icon: 'i-carbon:magic-wand',
        title: 'Use Cases',
        description: 'Generative AI is more than just a one-trick pony. Discover the many ways it can help.',
        items: [
          { label: 'Product Design', to: '/use-cases/product-design' },
          { label: 'Content Creation', to: '/use-cases/content-creation' },
          { label: 'Data Analysis', to: '/use-cases/data-analysis' },
          { label: 'Automation', to: '/use-cases/automation' },
          { label: 'Research & Development', to: '/use-cases/research-development' },
          { label: 'Prototyping', to: '/use-cases/prototyping' },
          { label: 'Lead Qualification', to: '/use-cases/lead-qualification' },
          { label: 'Customer Support', to: '/use-cases/customer-support' },
        ],
      },
      {
        icon: 'i-carbon:building',
        title: 'Industries',
        description: 'Generative AI is a versatile tool that can be applied to many industries. Find yours.',
        items: [
          { label: 'Non-profit', to: '/non-profit' },
          { label: 'Education', to: '/education' },
          { label: 'Retail', to: '/retail' },
          { label: 'Manufacturing', to: '/manufacturing' },
          { label: 'Media & Entertainment', to: '/media-entertainment' },
          { label: 'Telecommunications', to: '/telecommunications' },
          { label: 'Healthcare', to: '/healthcare' },
          { label: 'Finance', to: '/finance' },
        ],
      },
    ],
  },
  {
    to: '/learn',
    label: 'Learn',
    groups: [
      {
        icon: 'i-carbon:book',
        title: 'Documentation',
        description: 'Get started with our platform and learn how to use it to its full potential.',
        items: [
          { label: 'Getting Started', to: '/docs/getting-started' },
          { label: 'API Reference', to: '/docs/api-reference' },
          { label: 'Tutorials', to: '/docs/tutorials' },
          { label: 'FAQ', to: '/docs/faq' },
          { label: 'Support', to: '/docs/support' },
        ],
      },
      {
        icon: 'i-carbon:video',
        title: 'Videos',
        description: 'Watch our video tutorials and learn how to use our platform like a pro.',
        items: [
          { label: 'Introduction', to: '/videos/introduction' },
          { label: 'Advanced features', to: '/videos/advanced-features' },
          { label: 'Best practices', to: '/videos/best-practices' },
          { label: 'Use cases', to: '/videos/use-cases' },
          { label: 'Customer stories', to: '/videos/customer-stories' },
        ],
      },
      {
        icon: 'i-carbon:chat',
        title: 'Community',
        description: 'Join our community and get help from other users, share your projects, and more.',
        items: [
          { label: 'Forum', to: '/community/forum' },
          { label: 'Blog', to: '/community/blog' },
          { label: 'GitHub', to: '/community/github' },
          { label: 'Discord', to: '/community/discord' },
          { label: 'Twitter', to: '/community/twitter' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    to: '/about',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
      { label: 'Partners', to: '/partners' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Self-Hosted',
    to: '/self-hosted',
  },
  {
    label: 'Documentation',
    to: '/docs',
  },
]

const navItemsEnd: NavItem[] = [
  {
    label: 'Sign in',
    to: '/auth/signin',
  },
]
</script>

<template>
  <div class="bg-black p-4 md:p-8 h-screen overflow-hidden">
    <div
      class="
      relative bg-white rounded-3xl h-full
      overflow-y-auto overflow-x-hidden
      scrollbar-none
    ">

      <!-- Top bar -->
      <div class="sticky top-0 z-100">
        <WebsiteTop />
        <WebsiteNav
          name="Maestrau"
          padded
          image-url="https://logosbrands.com/file/bdk-kulturorganisation.svg"
          :items-start="navItemsStart"
          :items-end="navItemsEnd">

          <template #end>
            <Button label="Get Started" rainbow to="/login" icon-append="i-carbon:chevron-right" />
          </template>
        </WebsiteNav>
      </div>

      <!-- Content -->
      <main class="overflow-hidden grow">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <WebsiteFooter />
    </div>
  </div>
</template>
