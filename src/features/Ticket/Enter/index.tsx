import { Button } from '@mantine/core'
import { useFlow } from '@stackflow/react/future'

import * as s from './style.css'

import { vars } from '@/theme'

const EnterButton = () => {
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
        입장하기
      </Button>
    </div>
  )
}

export default EnterButton
