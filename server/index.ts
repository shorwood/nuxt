/* eslint-disable perfectionist/sort-imports */
import { Application } from '@unserved/server'
import { ModuleUser } from '@unserved/module-user'
import { ModuleStorageLocal } from '@unserved/module-storage-local'
import { ModuleLocale } from '@unserved/module-locale'
import { ModuleIcon } from '@unserved/module-icon'
import { ModuleHealth } from '@unserved/module-health'
import { ModuleContent } from '@unserved/module-content'

// --- Ensure hot reload works with the following import.
import '../node_modules/@unserved/module-locale/dist/index.js'

// --- Expose the application for type inference.
export const application = await Application.initialize(
  [
    ModuleUser,
    ModuleHealth,
    ModuleContent,
    ModuleIcon,
    ModuleLocale,
    ModuleStorageLocal,
  ],
  {
    dataSource: {
      type: 'sqlite',
      database: ':memory:',
    },
  },
)

// --- Pass the application handler to the Nitro server.
export default application.createApp().handler
