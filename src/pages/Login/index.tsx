import { ActivityComponentType } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import Login from '@/features/Login'

declare module '@stackflow/config' {
  interface Register {
    MyTicketPage: {}
  }
}
const LoginPage: ActivityComponentType<'MyTicketPage'> = () => {
  return (
    <BaseAppScreen>
      <Login />
    </BaseAppScreen>
  )
}

export default LoginPage
