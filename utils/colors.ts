import { createColorPalette } from '@unshared/color/createColorPalette'

export const primary = createColorPalette('#2A9F4B', { stepUp: 12, stepDown: 7, hueShift: -60 })
export const secondary = createColorPalette('#3B82F6', { stepUp: 8, stepDown: 11, hueShift: -10 })
export const accent = createColorPalette('#ede7b1', { stepUp: 3, stepDown: 13, hueShift: 50 })
export const danger = createColorPalette('#df3434', { stepUp: 9, stepDown: 8, hueShift: 20 })
export const warning = createColorPalette('#f59e0b', { stepUp: 8, stepDown: 5, hueShift: 20 })
export const success = createColorPalette('#2e8b57', { stepUp: 8, stepDown: 5, hueShift: 20 })
