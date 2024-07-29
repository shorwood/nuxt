import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  ssr: true,
  compatibilityDate: '2024-07-09',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  app: {
    rootId: 'app',
    rootTag: 'div',
    buildAssetsDir: '/static/',
    baseURL: '/',
  },

  serverHandlers: [{
    route: '/api/**',
    method: 'all',
    handler: '~/server/index.ts',
  }],

  modules: [
    'nuxt-security',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@unshared/vue',
  ],

  /**
   * The `nuxt-security` module provides a set of security headers and features to protect
   * the application from common web vulnerabilities and attacks.
   *
   * @see https://nuxt-security.vercel.app/
   */
  security: {
    enabled: true,
    nonce: true,
    rateLimiter: {
      headers: true,
      interval: 60 * 1000,
      tokensPerInterval: 1000,
    },
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'script-src': [
          '\'nonce-{{nonce}}\'',
          '\'strict-dynamic\'',
        ],
      },
    },
  },

  /**
   * UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible.
   * The core is un-opinionated and all the CSS utilities are provided via presets.
   *
   * @see https://unocss.dev/guide/
   */
  unocss: {
    preflight: true,
    configFile: './uno.config.ts',
  },

  /**
   * Configure Nuxt component auto-registration. Any components in the directories
   * configured here can be used throughout your pages, layouts (and other components)
   * without needing to explicitly import them.
   *
   * @see https://nuxt.com/docs/guide/directory-structure/components
   */
  components: {
    dirs: [{
      path: '~/components',
      pattern: '**/*.vue',
      pathPrefix: false,
    }],
  },

  /**
   * Enables the experimental <NuxtClientFallback> component for rendering content on
   * the client if there's an error in SSR.
   *
   * @see https://nuxt.com/docs/guide/going-further/experimental-features#clientfallback
   * @see https://nuxt.com/docs/guide/going-further/experimental-features#payloadExtraction
   */
  experimental: {
    clientFallback: true,
  },

  /**
   * Additional router options passed to vue-router. On top of the options for vue-router,
   * Nuxt offers additional options to customize the router.
   *
   * @see https://router.vuejs.org/api/interfaces/RouterOptions.html
   */
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active',
      scrollBehaviorType: 'smooth',
      strict: true,
    },
  },

  /**
   * Enable `experimentalDecorator` when bundling the server code with Vite. It
   * allows use to use decorators when declaring the TypeORM entities.
   *
   * @see https://typeorm.io/#typescript-configuration
   */
  nitro: {
    experimental: {
      websocket: true,
    },
    esbuild: {
      options: {
        target: 'esnext',
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
  },

  vite: {
    server: {
      hmr: {
        port: Number.parseInt(process.env.PORT ?? '3000') + 1,
      },
    },
  },
})
