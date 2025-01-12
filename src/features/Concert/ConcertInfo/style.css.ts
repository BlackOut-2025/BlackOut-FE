import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'
import { vars } from '@/theme'

export const Wrapper = style([f.flex, f.directionColumn, { padding: '0 1.88rem' }])

export const Description = style([f.flex, f.directionColumn, f.alignStart, { gap: '0.875rem' }])

export const Place = style([f.flex, f.alignCenter, f.wFull, { gap: '0.5rem' }])

export const Box = style([f.flex, f.directionColumn, f.wFull, f.alignStart, { gap: '0.25rem' }])

export const Divider = style([
  f.flex,
  f.wFull,
  f.justifyCenter,
  f.alignCenter,
  { height: '1.76rem', padding: '0 1.25rem' },
])

export const DividerLine = style([f.wFull, { height: '1px', background: vars.colors.gray[2] }])

export const GuideWrapper = style([f.flex, f.wFull, f.directionColumn, f.alignStart, { gap: '0.625rem' }])

export const GuideList = style([f.flex, f.wFull, f.directionColumn, f.alignStart, { gap: '0.25rem' }])
