import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'

export const Wrapper = style([f.flex, f.wFull, f.directionColumn, { padding: '0 1.25rem', gap: '0.625rem' }])

export const TicketItemWrapper = style([
  f.flex,
  f.wFull,
  f.alignCenter,
  {
    padding: '0.625rem',
    gap: '0.625rem',
    borderRadius: '20px',
    background: 'radial-gradient(181.82% 184.71% at 50% 50%, #FFF 0%, #606264 100%)',
  },
])

export const Image = style([{ width: '4.375rem', height: '5.4375rem', borderRadius: '10px' }])

export const Content = style([f.flex, f.directionColumn, f.alignStart, { gap: '0.5625rem' }])

export const Text = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.25rem' }])

export const Date = style([f.flex, f.justifyEnd, f.wFull])
