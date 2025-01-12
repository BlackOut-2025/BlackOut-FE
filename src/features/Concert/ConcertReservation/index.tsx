import { Button } from '@mantine/core'
import { useFlow } from '@stackflow/react/future'

import * as s from './style.css'

import { vars } from '@/theme'

const ConcertReservationButton = () => {
  const { push, pop } = useFlow()
  return (
    <div className={s.Wrapper}>
      <Button
        fullWidth
        bg={vars.colors.gray[8]}
        size="lg"
        fw={600}
        radius="xl"
        onClick={() => {
          push('MyTicketPage', {})
          pop()
        }}
      >
        예매하기
      </Button>
    </div>
  )
}

export default ConcertReservationButton
