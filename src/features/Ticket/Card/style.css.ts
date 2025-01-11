import { style } from '@vanilla-extract/css'

import { vars } from '@/theme'

export const CardContainer = style({
  width: 315,
  height: 330,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  margin: 14,
  marginBottom: 20,

  display: 'flex',
  flexDirection: 'column',
  color: vars.colors.BG[0],
})
export const UpperSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
})

export const CardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})
