import { type Theme, parseColor } from 'unocss/preset-mini'
import { defineConfig, presetIcons, presetWebFonts, presetWind } from 'unocss'
import { presetUnshared } from '@unshared/unocss-preset'
import { colorHexToRgb } from '@unshared/color'
import * as COLORS from './utils/colors'

export default defineConfig({
  presets: [

    /**
     * The defult UnoCSS preset, provide Tailwind-like utilities with some additional features.
     *
     * @see https://unocss.dev/presets/uno
     */
    presetWind({
      dark: 'class',
    }),

    /**
     * Use any icon with Pure CSS for UnoCSS.
     *
     * @see — https://unocss.dev/presets/icons
     */
    presetIcons({
      cdn: 'https://esm.sh/',
    }),

    /**
     * Preset for using web fonts by provide just the names.
     *
     * @see https://unocss.dev/presets/web-fonts
     */
    presetWebFonts({
      fonts: {
        sans: [{ name: 'IBM Plex Sans', weights: [400, 500, 700, 900] }],
        mono: [{ name: 'IBM Plex Mono', weights: [400, 500, 700, 900] }],
        serif: [{ name: 'IBM Plex Serif', weights: [400, 500, 700, 900] }],
      },
    }),

    presetUnshared(),
  ],

  theme: {
    colors: COLORS,
    screens: {
      xs: '320px',
      sm: '786px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    fontFamily: {
      sans: 'IBM Plex Sans, sans-serif',
      mono: 'IBM Plex Mono, monospace',
      serif: 'IBM Plex Serif, serif',
    },
    borderRadius: {
      DEFAULT: '0.15rem',
      full: '9999px',
    },
    maxWidth: {
      contained: '1440px',
    },
  },

  rules: [
    [
      /^scrollbar-thumb-(?<color>.+)$/,
      ({ groups }, { theme }) => {
        if (!groups) return
        const { color } = groups

        const parsedColor = parseColor(color, theme as Theme, 'backgroundColor')
        if (!parsedColor?.color) return
        const { r, g, b } = colorHexToRgb(parsedColor.color)

        return {
          '--un-scrollbar-thumb-opacity': parsedColor.opacity ? Number(parsedColor.opacity) / 100 : 1,
          '--un-scrollbar-thumb': `rgba(${r}, ${g}, ${b} / var(--un-scrollbar-thumb-opacity))`,
          'scrollbar-color': 'var(--un-scrollbar-thumb) var(--un-scrollbar-bg)',
        }
      },
      {
        autocomplete: ['scrollbar-thumb-$colors'],
      },
    ],

    [
      /^scrollbar-bg-(?<color>.+)$/,
      ({ groups }, { theme }) => {
        if (!groups) return
        const { color } = groups

        const parsedColor = parseColor(color, theme as Theme, 'backgroundColor')
        if (!parsedColor?.color) return
        const { r, g, b } = colorHexToRgb(parsedColor.color)

        return {
          '--un-scrollbar-bg-opacity': parsedColor.opacity ? Number(parsedColor.opacity) / 100 : 1,
          '--un-scrollbar-bg': `rgba(${r}, ${g}, ${b} / var(--un-scrollbar-bg-opacity))`,
          'scrollbar-color': 'var(--un-scrollbar-thumb) var(--un-scrollbar-bg)',
        }
      },
      {
        autocomplete: ['scrollbar-bg-$colors'],
      },
    ],

    [
      /^scrollbar-(?<width>thin|auto|none)$/,
      ({ groups }) => {
        if (!groups) return
        return { 'scrollbar-width': groups.width }
      },
      {
        autocomplete: [
          'scrollbar-thin',
          'scrollbar-auto',
          'scrollbar-none',
        ],
      },
    ],
  ],
})
