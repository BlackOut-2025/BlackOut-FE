import { ActivityComponentType } from '@stackflow/react/future'

import Selector from '@/features/Ticket/Selector'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: {}
  }
}
const MyTicketPage: ActivityComponentType<'MyTicketPage'> = () => {
  return (
    <div>
      <Selector />
    </div>
  )
}

export default MyTicketPage
