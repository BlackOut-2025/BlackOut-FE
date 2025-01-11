import { style } from '@vanilla-extract/css'

export const TicketListWrapper = style({
  padding: '0 1.875rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 14,
  overflowY: 'scroll',
  gap: 20,
})
