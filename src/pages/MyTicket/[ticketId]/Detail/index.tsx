import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    MyTicketDetailPage: Pick<PATH_PARAMS, 'ticketId'>
  }
}

const MyTicketDetailPage: ActivityComponentType<'MyTicketDetailPage'> = () => {
  const { ticketId } = useActivityParams<'MyTicketDetailPage'>()
  return (
    <BaseAppScreen>
      <div>TicketDetailPage: {ticketId}</div>
    </BaseAppScreen>
  )
}

export default MyTicketDetailPage
