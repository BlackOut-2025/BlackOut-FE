import { style } from '@vanilla-extract/css'

export const VideoWrapper = style({
  width: 300,
  height: 300,
  overflow: 'hidden',
  position: 'relative',
})

export const VideoStyle = style({
  height: 300,
  transform: 'rotateY(180deg)',
})

export const Mask = style({
  position: 'absolute',
  zIndex: 1,
  bottom: 0,
  width: '100%',
  opacity: 0.3,
})
