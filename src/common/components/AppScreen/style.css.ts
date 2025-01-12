import { style } from '@vanilla-extract/css'

import { f } from '@/styles/functions'
import { vars } from '@/theme'

export const RightWrapper = style([f.hFull, f.flex, f.alignCenter, { paddingRight: '0.5rem' }])

export const Wrapper = style([f.wFull, f.hFull, { backgroundColor: vars.colors.BG[0] }])

export const ScreenErrorWrapper = style([f.wFull, f.hFull, f.flex, f.justifyCenter, f.alignCenter])

export const ScreenLoaderWrapper = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  {
    height: '100vh',
  },
])

export const ScreenLoaderInner = style([
  {
    paddingBottom: '7.5rem',
  },
])

export const Spinner = style([
  f.flex,
  f.alignCenter,
  {
    position: 'relative',
    width: '2rem',
    height: '2rem',
  },
])

export const SpinnerTrack = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: `3px solid ${vars.colors.gray[1]}`,
    borderRadius: '50%',
  },
])

export const SpinnerIndicator = style([
  f.pAbsolute,
  f.wFull,
  f.hFull,
  {
    border: `3px solid transparent`,
    borderTopColor: vars.colors.gray[5],
    borderRadius: '50%',
  },
])
