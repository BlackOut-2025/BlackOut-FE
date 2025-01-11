import { createTheme, MantineColorsTuple } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

const BG: MantineColorsTuple = [
  '#f5f5f5',
  '#e7e7e7',
  '#cdcdcd',
  '#b2b2b2',
  '#9a9a9a',
  '#8b8b8b',
  '#848484',
  '#717171',
  '#656565',
  '#575757',
]
export const theme = createTheme({
  colors: {
    BG,
  },
})
export const vars = themeToVars(theme)
