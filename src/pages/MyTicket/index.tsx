import { ActivityComponentType } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import Selector from '@/features/Ticket/Selector'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: {}
  }
}
const MyTicketPage: ActivityComponentType<'MyTicketPage'> = () => {
  return (
    <BaseAppScreen>
      <Selector />
    </BaseAppScreen>
  )
}

export default MyTicketPage
