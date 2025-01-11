import { Button, Text } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconBell } from '@tabler/icons-react'

import * as s from './style.css'

import LayoutIcon from '@/common/assets/LayoutIcon'
import { vars } from '@/theme'

const Header = () => {
  return (
    <div className={s.Container}>
      <div className={s.TitleWrapper}>
        <Text size="xl" fw={700} c="dark">
          마이티켓
        </Text>
        <IconBell size={24} color={vars.colors.dark[0]} />
      </div>
      <div className={s.SelectorContainer}>
        <Button variant="outline" color="gray" radius="xl" size="xs">
          <IconAdjustmentsHorizontal />
          <span>6개월</span>
        </Button>
        <div>
          <LayoutIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
