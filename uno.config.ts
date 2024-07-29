import { defineConfig, presetUno } from 'unocss'
import { presetUnshared } from '@unshared/unocss-preset'
import { presetIcons } from '@unocss/preset-icons'
import * as COLORS from './utils/colors'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ cdn: 'https://esm.sh/' }),
    presetUnshared(),
  ],

  theme: {
    colors: COLORS,
    breakpoints: {
      sm: '786px',
      md: '1280px',
      lg: '1440px',
    },
    rounded: {
      default: '0.25rem',
      full: '9999px',
    },
    fontFamily: {
      sans: 'IBM Plex Sans, sans-serif',
      mono: 'IBM Plex Mono, monospace',
      serif: 'IBM Plex Serif, serif',
    },
  },
})
