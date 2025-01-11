import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'
import { style } from '@vanilla-extract/css'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { useGetConcertDetail } from '@/domain/Concert/apis/useGetConcertDetail'
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
    <BaseAppScreen>
      <img src={concertData.imgUrl} alt={`${concertData.title} 포스터`} style={{ width: 335 }} />
    </BaseAppScreen>
  )
}

export default ConcertDetailPage
