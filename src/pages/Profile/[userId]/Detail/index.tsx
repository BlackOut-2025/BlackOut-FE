import { useActivityParams } from '@stackflow/react'
import { ActivityComponentType } from '@stackflow/react/future'

import { BaseAppScreen } from '@/common/components/AppScreen/BaseAppScreen'
import { PATH_PARAMS } from '@/pages/types'

declare module '@stackflow/config' {
  interface Register {
    ProfileDetailPage: Pick<PATH_PARAMS, 'userId'>
  }
}

const ProfileDetailPage: ActivityComponentType<'ProfileDetailPage'> = () => {
  const userId = useActivityParams<'ProfileDetailPage'>()
  return (
    <BaseAppScreen showBorder appBar={{ title: '프로필 상세' }}>
      <div>ProfileDetailPage: {userId}</div>
    </BaseAppScreen>
  )
}

export default ProfileDetailPage
