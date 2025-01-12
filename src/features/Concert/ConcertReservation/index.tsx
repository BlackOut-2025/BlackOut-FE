import { Button } from '@mantine/core'

import * as s from './style.css'

import { vars } from '@/theme'

const ConcertReservationButton = () => {
  return (
    <div className={s.Wrapper}>
      <Button fullWidth bg={vars.colors.gray[8]} size="lg" fw={600} radius="xl">
        예매하기
      </Button>
    </div>
  )
}

export default ConcertReservationButton
