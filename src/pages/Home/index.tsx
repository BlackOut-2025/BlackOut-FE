import { ActivityComponentType } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'

declare module '@stackflow/config' {
  interface Register {
    HomePage: {}
  }
}
const HomePage: ActivityComponentType<'HomePage'> = () => {
  return (
    <BaseAppScreen>
      <div>HomePage</div>
    </BaseAppScreen>
  )
}

export default HomePage
