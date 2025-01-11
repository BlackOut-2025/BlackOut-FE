import { style } from '@vanilla-extract/css'

export const VideoWrapper = style({
  width: 300,
  height: 300,
  overflow: 'hidden',
})

export const VideoStyle = style({
  height: 300,
  transform: 'rotateY(180deg)',
})
