import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'
import { vars } from '@/theme'

export const Wrapper = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.pRelative,
  { height: '28.125rem' },
  {
    borderRadius: '0rem 0rem 1.875rem 1.875rem',
    backdropFilter: 'blur(10px)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
])

export const TitleWrapper = style([
  f.flex,
  f.wFull,
  f.justifyBetween,
  { padding: '0 1.875rem', color: vars.colors.BG[0] },
])
export const Content = style([f.flex, f.wFull, f.directionColumn, f.alignStart, { padding: '0 1.25rem' }])
