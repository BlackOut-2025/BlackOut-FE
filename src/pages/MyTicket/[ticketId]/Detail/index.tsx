import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import TicketDetails from '@/features/Ticket/Details'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    MyTicketDetailPage: Pick<PATH_PARAMS, 'ticketId'>
  }
}

const MyTicketDetailPage: ActivityComponentType<'MyTicketDetailPage'> = () => {
  const { ticketId } = useActivityParams<'MyTicketDetailPage'>()
  return (
    <BaseAppScreen showBackButton appBar={{ title: '티켓 정보' }}>
      <TicketDetails />
    </BaseAppScreen>
  )
}

export default MyTicketDetailPage
