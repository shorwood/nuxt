<script setup lang="ts">
definePageMeta({
  name: 'WebsitePricing',
  path: '/pricing',
})
</script>

<template>
  <WebsiteSection as="main">

    <!-- Pricing Hero -->
    <WebsiteSectionHero
      contained
      gradient
      variant="primary"
      headline="Pricing."
      title="Start free and upgrade as you grow."
      text="Choose the plan that works best for you. All plans include 50$ of free credit and a 30-day free trial.">
      <Button
        to="/auth/signin"
        label="Get Started"
        size="2xl"
        outlined
        class=""
        icon-append="i-carbon:chevron-right"
        icon-expand
      />
    </WebsiteSectionHero>

    <!-- Pricing Plans -->
    <WebsiteSection
      class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-24"
      contained
      padded>
      <WebsiteCardPricing
        icon="i-carbon:favorite"
        price="0,00"
        price-unit="$"
        outlined
        name="Free"
        headline="For individuals and small teams."
        linkTo="/auth/signin"
        linkLabel="Get Started"
        feature-title="Includes —"
        :features="[
          'Unlimited workflows / agents',
          'Access to all integrations and plugins',
          'Access to all AI models and services',
          '10GB of Retrieval Storage',
          'Community support and resources',
        ]">
        <template #text>
          Everything you need to automate everything you do. Nothing is billed and
          you're free to use the platform as much as you want.
        </template>
        <template #priceText>free,<br>and forever</template>
      </WebsiteCardPricing>

      <WebsiteCardPricing
        icon="i-carbon:ibm-cloud-security-compliance-center"
        variant="primary"
        name="Professional"
        headline="For growing teams and small businesses."
        price="12,00"
        price-unit="$"
        linkTo="/auth/signin"
        link-label="Start Free Trial"
        feature-title="Includes Free Plan +"
        :features="[
          'Native integrations with IAM providers',
          'Unlimited API calls and data processing',
          'Advanced analytics and reporting',
          'Security alerts and notifications',
          'Team collaboration and sharing',
          '1TB of Retrieval Storage',
        ]">
        <template #priceText>per seat/month<br>billed annually</template>
        <template #text>
          Scales with your needs and includes <b>advanced security and monitoring</b>
          features to ensure your workflows are secure and compliant.
        </template>
      </WebsiteCardPricing>

      <WebsiteCardPricing
        icon="i-carbon:enterprise"
        gradient
        variant="secondary"
        name="Enterprise"
        headline="For large teams and enterprises."
        linkTo="/contact"
        linkLabel="Contact Sales"
        feature-title="Includes Professional Plan +"
        :features="[
          'Dedicated account manager and support',
          'SLAs and uptime guarantees',
          'Custom branding and white-labeling',
          'Custom integrations and plugins',
          'Unlimited Retrieval Storage',
          'Custom AI models and services',
          'Data residency and compliance',
          'On-premise deployment',
          '24/7 support and monitoring',
        ]">
        <template #text>
          Designed for large teams and enterprises and ensures <b>mission-critical workflows</b>
          are secure, compliant and always available.
        </template>
      </WebsiteCardPricing>

    </WebsiteSection>
  </WebsiteSection>
</template>
