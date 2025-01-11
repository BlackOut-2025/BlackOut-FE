import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'
import { vars } from '@/theme'

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 23,
  padding: '0 1.875rem',
  paddingBottom: 16,
  width: '100vw',
  background: vars.colors.white,
})

export const TitleWrapper = style([f.flex, f.wFull, f.justifyBetween, { color: vars.colors.BG[0] }])

export const SelectorContainer = style([
  f.flex,
  f.wFull,
  f.justifyBetween,
  { color: vars.colors.BG[0], alignItems: 'center' },
])

export const CategoryWrapper = style([
  f.flex,
  f.hideScrollBar,
  { height: '1.9375rem', gap: '0.4375rem', flexShrink: 0, flexWrap: 'nowrap', overflowX: 'scroll' },
])

export const Wrapper = style([f.flex, { flexDirection: 'column', gap: 12 }])
