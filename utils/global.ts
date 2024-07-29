import type { application } from '~/server'

/**
 * Declare a global type for the server application. This allows the type of the server `Application` to be
 * shared across all modules and composables without explicitly importing it. This is useful for type inference
 * when using the `useClient` and `useRequest` composables.
 */
declare module '#imports' {
  interface Server {
    application: typeof application
  }
}
