import { Loader } from '@mantine/core'
import { ActivityComponentType } from '@stackflow/react/future'
import { Suspense } from 'react'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import Header from '@/features/Ticket/Header'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: {}
  }
}
const MyTicketPage: ActivityComponentType<'MyTicketPage'> = () => {
  return (
    <BaseAppScreen>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
    </BaseAppScreen>
  )
}

export default MyTicketPage
