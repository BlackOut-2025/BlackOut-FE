import { Image, Text } from '@mantine/core'

import * as s from './style.css'

import { useFlow } from '@stackflow/react/future'

const TicketItem = ({ image, title }: { image: string; title: string }) => {
  const { push } = useFlow()
  return (
    <div className={s.TicketItemWrapper} onClick={() => push('ConcertDetailPage', { concertId: '1234' })}>
      <Image src={image} className={s.Image} />
      <div className={s.Content}>
        <div className={s.Text}>
          <Text size="sm" fw={600}>
            {title}
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
