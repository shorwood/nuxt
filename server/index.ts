import { Application } from '@unserved/server'
import { ModuleUser } from '@unserved/module-user'
import { ModuleStorageLocal } from '@unserved/module-storage-local'
import { ModuleIcon } from '@unserved/module-icon'
import { ModuleHealth } from '@unserved/module-health'
import { ModuleContent } from '@unserved/module-content'

// --- Expose the application for type inference.
export const application = await Application.initialize([
  ModuleUser,
  ModuleHealth,
  ModuleContent,
  ModuleIcon,
  ModuleStorageLocal,
], {
  dataSource: {
    type: 'sqlite',
    database: ':memory:',
  },
})

// --- Pass the application handler to the Nitro server.
export default application.createApp().handler
