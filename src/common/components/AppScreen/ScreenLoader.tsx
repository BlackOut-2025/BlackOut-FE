import * as s from './style.css'

import { LoadingSpinner } from '@/common/components/AppScreen/Spinner'

const ScreenLoader = () => {
  return (
    <div className={s.ScreenLoaderWrapper}>
      <div className={s.ScreenLoaderInner}>
        <LoadingSpinner />
      </div>
    </div>
  )
}

export default ScreenLoader
