import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'
import { vars } from '@/theme'

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 23,
})

export const TitleWrapper = style([
  f.flex,
  f.wFull,
  f.justifyBetween,
  { padding: '0 1.875rem', color: vars.colors.BG[0] },
])

export const SelectorContainer = style([
  f.flex,
  f.wFull,
  f.justifyBetween,
  { padding: '0 1.875rem', color: vars.colors.BG[0], alignItems: 'center' },
])
