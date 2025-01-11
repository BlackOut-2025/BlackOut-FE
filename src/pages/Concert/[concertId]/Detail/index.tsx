import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    ConcertDetailPage: Pick<PATH_PARAMS, 'concertId'>
  }
}
const ConcertDetailPage: ActivityComponentType<'ConcertDetailPage'> = () => {
  const { concertId } = useActivityParams<'ConcertDetailPage'>()
  return (
    <BaseAppScreen>
      <div>ConcertDetailPage: {concertId}</div>
    </BaseAppScreen>
  )
}

export default ConcertDetailPage
