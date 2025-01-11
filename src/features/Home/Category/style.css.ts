import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'

export const Wrapper = style([
  f.flex,
  f.wFull,
  { paddingLeft: '1.88rem', paddingTop: '1.88rem', paddingBottom: '1.25rem', overflow: 'hidden' },
])

export const CategoryWrapper = style([
  f.flex,
  f.hideScrollBar,
  { height: '1.9375rem', gap: '0.4375rem', flexShrink: 0, flexWrap: 'nowrap', overflowX: 'scroll' },
])
