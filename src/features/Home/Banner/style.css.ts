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

export const CarouselWrapper = style([f.flex, f.wFull, f.directionColumn, f.alignCenter, { gap: '0.625rem' }])

export const CarouselSlide = style([
  f.flex,
  f.wFull,
  f.alignCenter,
  f.justifyCenter,
  { gap: '1.25rem', height: '11.875rem' },
])

export const CarouselSlideItem = style([
  f.flex,
  f.wFull,
  f.alignCenter,
  {
    width: '6.625rem',
    height: '8.875rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flex: '0 0 auto',
    marginLeft: '1.25rem',
  },
])

export const ContentWrapper = style([
  f.flex,
  f.wFull,
  f.directionColumn,
  f.alignStart,
  { padding: '0 1.25rem', gap: '1.25rem', marginTop: '0.88rem' },
])

export const ControlButton = style([
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.30)',
  },
])
export const Content = style([f.flex, f.wFull, f.alignStart, { gap: '0.75rem' }])

export const Description = style([
  f.flex,
  f.wFull,
  f.alignCenter,
  f.directionColumn,
  { gap: '0.25rem', maxWidth: '15rem' },
])
