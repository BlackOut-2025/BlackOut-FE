import { ActivityComponentType } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: {}
  }
}
const MyTicketPage: ActivityComponentType<'MyTicketPage'> = () => {
  return (
    <BaseAppScreen>
      <div>MyTicketPage</div>
    </BaseAppScreen>
  )
}

export default MyTicketPage
