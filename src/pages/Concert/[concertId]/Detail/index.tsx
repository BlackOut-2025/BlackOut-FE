import { Button } from '@mantine/core'
import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { useGetConcertDetail } from '@/domain/Concert/apis/useGetConcertDetail'
import ConcertBanner from '@/features/Concert/ConcertBanner'
import ConcertInfo from '@/features/Concert/ConcertInfo'
import ConcertReservationButton from '@/features/Concert/ConcertReservation'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    ConcertDetailPage: Pick<PATH_PARAMS, 'concertId'>
  }
}
const ConcertDetailPage: ActivityComponentType<'ConcertDetailPage'> = () => {
  const { concertId } = useActivityParams<'ConcertDetailPage'>()
  const { data: concertData } = useGetConcertDetail({ concertId })

  return (
    <BaseAppScreen showBackButton showCloseButton appBar={{ title: '티켓 예매' }}>
      <ConcertBanner {...concertData} />
      <ConcertInfo />
      <ConcertReservationButton />
    </BaseAppScreen>
  )
}

export default ConcertDetailPage
