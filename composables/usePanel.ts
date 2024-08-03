export interface PanelItem {
  value: { id: string } & Record<string, unknown>
  component: Component
}

/**
 * The `usePanel` composable provides a way to manage dynamic panels in the application
 * with a stack of items. It allows you to open and close panels with a given ID or
 * panel item. Each panel item is associated with a component to render in the panel.
 *
 * @example
 * // Import the component that will be rendered in the panel.
 * import SettingsPanel from '~/components/panels/SettingsPanel.vue'
 *
 * // Get the panel composable.
 * const panel = usePanel()
 *
 * // Open a panel with the given ID
 * panel.open({ id: 'settings' }, SettingsPanel)
 *
 * // List all panel items
 * panel.items // [{ value: { id: 'settings' }, component: SettingsPanel }]
 *
 * // Get the currently selected panel item
 * panel.selected // { value: { id: 'settings' }, component: SettingsPanel }
 */
export const usePanel = createSharedComposable(() => {
  const isOpen = ref(false)
  const items = reactive<PanelItem[]>([])
  const selectedId = ref<string | undefined>()

  return {
    isOpen,
    items,
    selectedId,

    /** The currently selected panel item. */
    selected: computed(() => items.find(item => item.value.id === selectedId.value)),

    /**
     * Open a panel with the given ID or panel item. If the panel is already open
     * or if no `panel` argument is provided, the panel will be opened without
     * changing the selected ID.
     *
     * @param value The ID of the panel to open.
     * @param component The component to open in the panel.
     * @returns The selected ID of the panel.
     */
    open: (value?: { id: string } & Record<string, unknown>, component?: Component) => {
      isOpen.value = true
      if (!value) return

      // --- If the ID is already open, set it as the current ID
      const isInItems = items.find(item => item.value.id === value.id)
      if (isInItems) return selectedId.value = value.id

      // --- If panel is not in items, add it to the items
      if (!component) throw new Error('Component is required to open a new panel')
      items.push({ value, component: markRaw(component) })
      return selectedId.value = value.id
    },

    /**
     * Close the panel with the given ID. If no ID is provided, close the panel
     * without changing the selected ID.
     *
     * @param id The ID of the panel to close.
     * @returns The selected ID of the panel.
     */
    close: (id?: string) => {
      if (!id) return isOpen.value = false
      const index = items.findIndex(item => item.value.id === id)
      if (index !== -1) items.splice(index, 1)
      if (selectedId.value === id) selectedId.value = items[0]?.value.id
      if (items.length === 0) isOpen.value = false
    },
  }
})
