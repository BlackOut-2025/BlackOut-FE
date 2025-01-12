import { Image, Text } from '@mantine/core'

import * as s from './style.css'

import BlackSkirts from '@/common/assets/BlackSkirts.png'
import { useFlow } from '@stackflow/react/future'

const TicketItem = () => {
  const { push } = useFlow()
  return (
    <div className={s.TicketItemWrapper} onClick={() => push('ConcertDetailPage', { concertId: '1234' })}>
      <Image src={BlackSkirts} className={s.Image} />
      <div className={s.Content}>
        <div className={s.Text}>
          <Text size="sm" fw={600}>
            2025 검정치마 단독공연 “SONGs to being tou home”
          </Text>
          <Text size="xs" c="gray.6">
            올림픽공원 올림픽홀
          </Text>
        </div>
        <div className={s.Date}>
          <Text size="xs" c="gray.6">
            2025.02.28 - 2025.03.02
          </Text>
        </div>
      </div>
    </div>
  )
}

export default TicketItem
