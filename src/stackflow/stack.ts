import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { stackflow } from '@stackflow/react/future'

import { stackflowConfig } from './config'

import { pages } from '@/pages'

const initStackflow = () => {
  return stackflow({
    config: stackflowConfig,
    components: pages,
    plugins: [
      basicRendererPlugin(),
      basicUIPlugin(({ initialContext }) => ({
        theme: initialContext.theme,
        rootClassName: 'root',
        minSafeAreaInsetTop: initialContext.minSafeAreaInsetTop,
      })),
      historySyncPlugin({
        config: stackflowConfig,
        fallbackActivity: () => 'NotFoundActivity',
      }),
    ],
  })
}

export const { Stack: Stackflow } = initStackflow()
export type TypeActivities = typeof pages
