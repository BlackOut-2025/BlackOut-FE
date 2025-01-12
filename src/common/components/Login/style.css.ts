import { style } from '@vanilla-extract/css'

export const Container = style({
  position: 'fixed',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
})
