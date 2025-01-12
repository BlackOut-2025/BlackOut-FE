import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'

export const Wrapper = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.pRelative,
  { height: '10.81rem' },
  {
    borderRadius: '0rem 0rem 1.875rem 1.875rem',
    backdropFilter: 'blur(10px)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
])

export const Image = style([{ width: '6.25rem', height: '8.3125rem', flexShrink: 0, borderRadius: '0.625rem' }])
