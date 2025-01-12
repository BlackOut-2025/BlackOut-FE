import { Loader } from '@mantine/core'
import { ActivityComponentType } from '@stackflow/react/future'
import { Suspense } from 'react'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import HomeBanner from '@/features/Home/Banner'
import HomeCategory from '@/features/Home/Category'
import HomeTicketList from '@/features/Home/TicketList'

declare module '@stackflow/config' {
  interface Register {
    HomePage: {}
  }
}
const HomePage: ActivityComponentType<'HomePage'> = () => {
  return (
    <BaseAppScreen>
      <Suspense fallback={<Loader />}>
        <Login />
        <HomeBanner />
        <HomeCategory />
        <HomeTicketList />
      </Suspense>
    </BaseAppScreen>
  )
}

export default HomePage
