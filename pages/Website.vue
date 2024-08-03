<script setup lang="ts">
import * as COLORS from '~/utils/colors'

definePageMeta({
  name: 'WebsiteHome',
  path: '/',
})

const heroColors = [
  COLORS.primary[500],
  COLORS.secondary[500],
  COLORS.accent[500],
]
</script>

<template>
  <main>

    <!-- Landing Hero -->
    <WebsiteThree :colors="heroColors" class-container="gradient-mask-b-60/100 op-80">
      <WebsiteSectionHero
        class="pt-0 min-h-screen"
        class-container="z-10"
        size="lg"
        dark
        padded
        contained>

        <template #headline>
          <span class="text-shadow-[0_0_3rem_#0ffff]">
            Simply put.
          </span>
        </template>

        <template #title>
          <div class="font-medium text-shadow-[0_0_2rem_#0000f,0_0_2rem_#0000f] mb-4">
            Open-Source <strong class="font-bold">AI&nbsp;Integration</strong> Platform.
          </div>
        </template>

        <!--
          <template #text>
          <span class="text-shadow-[0_0_3rem_#fff8,0_0_6rem_#fff8]">
          Level up your workflows with the only <strong>open-source</strong> generative AI integration ecosystem that helps you build, deploy,
          and manage AI integrations at scale.
          </span>
          </template>
        -->

        <Button
          to="/auth/signin"
          label="Get Started"
          size="2xl"
          outlined
          icon-append="i-carbon:chevron-right"
          icon-expand
        />

        <!--
          <Button
          to="/solutions"
          label="Use Cases"
          class="backdrop-blur-xl"
          size="xl"
          outlined
          icon-prepend="i-carbon:idea"
          icon-append="i-carbon:chevron-right"
          icon-expand
          />
        -->
      </WebsiteSectionHero>

      <!-- Keypoints -->
      <WebsiteSection
        padded
        contained
        class-container="z-10"
        class="grid lg:grid-cols-3 items-stretch children:h-full gap-24">
        <WebsiteCard
          variant="accent"
          gradient
          linkTo="/about"
          linkLabel="Learn More"
          image-size="contain"
          image-url="https://www.gitpod.io/images/ecosystem/ci-pipelines-ready.webp"
          title="Open-Source & Community-Driven."
          text="Leverage the power of open-source and it's rich ecosystem of integrations to build, deploy, and manage AI models at scale."
        />
        <WebsiteCard
          class="scale-110"
          variant="primary"
          gradient
          outlined
          linkTo="/about"
          linkLabel="Learn More"
          image-size="contain"
          image-url="https://www.gitpod.io/images/solutions/contractors/run-workspace.webp"
          title="Observability & Security at scale."
          text="Gain full observability and security over your AI models and data, at scale, with a single platform."
        />
        <WebsiteCard
          variant="secondary"
          gradient
          linkTo="/about"
          linkLabel="Learn More"
          image-size="contain"
          image-url="https://www.gitpod.io/images/ecosystem/installing-deps.webp"
          title="Agnostic to your stack and infrastructure."
          text="Seamlessly integrate generative AI into your existing stack, regardless of the tools and technologies you use. Weather you're on-premise or in the cloud."
        />
      </WebsiteSection>
    </WebsiteThree

    <!-- Discover -->
    <WebsiteSectionHero
      class="mt-24"
      reverse
      padded
      contained
      image-url="https://about.gitlab.com/_nuxt/image/e9ae1a.svg"
      image-contain>

      <template #title>
        Build and deploy complex chain of thoughts with ease.
      </template>

      <template #text>
        Automate the workflows that matter most to your organization, leaving your team to focus on what they do best.
      </template>

      <Button
        to="/auth/signin"
        label="Discover the Platform"
        rainbow
        icon-append="i-carbon:chevron-right"
        icon-expand
      />

      <Button
        to="/solutions"
        label="What's Maestrau?"
        outlined
        icon-prepend="i-carbon:platforms"
        icon-append="i-carbon:chevron-right"
        icon-expand
      />
    </WebsiteSectionHero>
    <!-- Integrations -->
    <!--
      <WebsiteSectionCompanies
      class="mt-48"
      :companies="[
      { name: 'IBM', imageUrl: 'https://api.iconify.design/logos:ibm.svg' },
      { name: 'Amazon', imageUrl: 'https://api.iconify.design/logos:aws.svg' },
      { name: 'IFTTT', imageUrl: 'https://api.iconify.design/logos:ifttt.svg' },
      { name: 'Last.fm', imageUrl: 'https://api.iconify.design/logos:lastfm.svg' },
      { name: 'OpenAI', imageUrl: 'https://api.iconify.design/logos:openai.svg' },
      ]"
      />
    -->
    <WebsiteDivider contained />
    <WebsiteSectionSolution
      icon="i-carbon:code"
      heading="Open-Source Ecosystem"
      title="Access the full power of a diverse ecosystem of open-source integrations and templates.">

      <WebsiteSectionSolutionItem title="Community-driven integrations">
        Weather you're on well-known platforms or using a brand new tools, a rich community-driven
        integrations help you stay ahead of the curve and up-to-date with the latest tools and technologies.
      </WebsiteSectionSolutionItem>

      <WebsiteSectionSolutionItem title="Curated workflows and templates">
        Valuable pre-built workflows and templates help you get started quickly and easily, whatever your
        use case or industry, that can be customized and extended to fit your needs.
      </WebsiteSectionSolutionItem>
    </WebsiteSectionSolution>
    <!-- Features -->
    <WebsiteSection
      dark
      contained
      variant="primary"
      padded
      class="grid grid-cols-3 gap-8 !pt-0 mt-24 children:-mt-24">

      <!-- Tests -->
      <WebsiteCard
        icon="i-carbon:tools"
        badge="Tests"
        headline="Gain confidence over your AI automation."
        linkTo="/about"
        linkLabel="Learn More"
        dark
        variant="primary">
        <template #text>
          Ensure every step of your AI automation can be tested and validated, with a single
          platform that gives you full control and observability over your AI models.
        </template>
      </WebsiteCard>

      <!-- Observability -->
      <WebsiteCard
        icon="i-carbon:analytics"
        badge="Observability"
        headline="Monitor and track your workflows in real-time."
        linkTo="/about"
        linkLabel="Learn More"
        dark
        gradient
        variant="primary">
        <template #text>
          Monitor and track the performance of your AI models in real-time, with a single platform that
          gives you full observability over your AI models and data.
        </template>
      </WebsiteCard>

      <!-- Security -->
      <WebsiteCard
        icon="i-carbon:security"
        badge="Security"
        headline="Protect your contextual data from unauthorized access."
        linkTo="/about"
        linkLabel="Learn More"
        dark
        variant="primary">
        <template #text>
          Generative AI brings new security challenges. Protect your contextual data from unauthorized access
          with deep integration with the infrastructure and tools you already use.
        </template>
      </WebsiteCard>
    </WebsiteSection>
    <WebsiteSectionSolution
      dark
      contained
      variant="primary"
      padded
      icon="i-carbon:analytics"
      heading="Software Supply Chain Security"
      title=" Access the full breadth of security scanning in a single platform ">

      <WebsiteSectionSolutionItem title=" Dynamic SBOM management ">
        Automatically create a standard software bill of materials (SBOM) with each container or dependency scan, or import an SBOM from your preferred tool — and easily combine multiple CycloneDX SBOMs into one.
      </WebsiteSectionSolutionItem>

      <WebsiteSectionSolutionItem title=" Continuous vulnerability scanning">
        Protect your organization against zero-day attacks by continuously scanning your applications for known open source vulnerabilities, regardless of when your code was last updated.
      </WebsiteSectionSolutionItem>
    </WebsiteSectionSolution>
  </main>
</template>
