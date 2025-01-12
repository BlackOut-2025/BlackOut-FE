import { style } from '@vanilla-extract/css'

import { vars } from '@/theme'

export const CardContainer = style({
  width: '100%',
  margin: 14,
  marginBottom: 20,
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

export const TextSmall = style({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.4,
})
