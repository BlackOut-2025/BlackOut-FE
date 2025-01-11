import { ActivityComponentType, useActivityParams } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: Pick<PATH_PARAMS, 'userId'>
  }
}
const MyTicketPage: ActivityComponentType<'MyTicketPage'> = () => {
  const { userId } = useActivityParams<'MyTicketPage'>()
  return (
    <BaseAppScreen>
      <div>MyTicketPage: {userId}</div>
    </BaseAppScreen>
  )
}

export default MyTicketPage
