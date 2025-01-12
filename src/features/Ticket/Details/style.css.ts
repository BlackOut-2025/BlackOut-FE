import { style } from '@vanilla-extract/css'

export const Wrapper = style({ margin: '0 30px', padding: '10px 0', display: 'flex', flexDirection: 'column', gap: 20 })
export const ImgStyle = style({ width: '100%' })

export const ConcertDetailStyle = style({
  margin: '10px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

export const TitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
})

export const TitleStyle = style({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.4,
})

export const DescriptionStyle = style({
  fontSize: 12,
  fontWeight: 400,
})
