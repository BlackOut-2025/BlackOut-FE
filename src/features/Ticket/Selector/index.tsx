import { Button } from '@mantine/core'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'

import * as s from './style.css'

import LayoutIcon from '@/common/assets/LayoutIcon'

const Selector = () => {
  return (
    <div className={s.SelectorContainer}>
      <Button variant="outline" color="gray" radius="xl" size="xs">
        <IconAdjustmentsHorizontal />
        <span>6개월</span>
      </Button>
      <div>
        <LayoutIcon />
      </div>
    </div>
  )
}

export default Selector
