import { Button, Text } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconBell } from '@tabler/icons-react'
import { createPortal } from 'react-dom'

import * as s from './style.css'

import LayoutIcon from '@/common/assets/LayoutIcon'
import { vars } from '@/theme'

const Header = () => {
  return createPortal(
    <div className={s.Container}>
      <div className={s.TitleWrapper}>
        <Text size="xl" fw={700} c="dark">
          마이티켓
        </Text>
        <IconBell size={24} color={vars.colors.dark[0]} />
      </div>
      <div className={s.Wrapper}>
        <div className={s.CategoryWrapper}>
          <Button size="xs" radius="xl" color="dark.7">
            전체
          </Button>
          <Button size="xs" radius="xl" color="gray.2">
            사용가능
          </Button>
          <Button size="xs" radius="xl" color="gray.2">
            사용완료
          </Button>
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
    </div>,
    document.body,
  )
}

export default Header
