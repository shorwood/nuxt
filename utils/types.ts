import type { RouteLocationRaw } from 'vue-router'
import type * as COLORS from './colors'

export type Size = 'large' | 'medium' | 'small'
export type Variant = keyof typeof COLORS
export type Alignment = 'center' | 'left' | 'right'

export interface SectionProps {
  dark?: boolean
  gradient?: boolean
  variant?: Variant
  padded?: boolean
  contained?: boolean
}

export interface NavGroupItem {
  icon?: string
  imageUrl?: string
  to?: RouteLocationRaw
  label?: string
  text?: string
}

export interface NavGroup {
  imageUrl?: string
  icon?: string
  title?: string
  description?: string
  items?: NavGroupItem[]
}

export interface NavItem {
  icon?: string
  to?: RouteLocationRaw
  label?: string
  text?: string
  links?: NavGroupItem[]
  groups?: NavGroup[]
  variant?: Variant
  size?: Size
  align?: Alignment
}
