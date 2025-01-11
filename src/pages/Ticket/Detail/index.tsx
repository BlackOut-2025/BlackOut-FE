import { Button } from '@mantine/core'
import { ActivityComponentType, useFlow } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'

declare module '@stackflow/config' {
  interface Register {
    TicketDetailPage: {}
  }
}

const TicketDetailPage: ActivityComponentType<'TicketDetailPage'> = () => {
  const { push } = useFlow()
  return (
    <BaseAppScreen showBorder appBar={{ title: '티켓 상세' }}>
      <div>TicketDetailPage</div>
      <Button onClick={() => push('ProfileDetailPage', { userId: '123' }, { animate: false })}>
        ProfileDetailPage
      </Button>
    </BaseAppScreen>
  )
}

export default TicketDetailPage
