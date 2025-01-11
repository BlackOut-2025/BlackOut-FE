import { defineConfig } from '@stackflow/config'

import { pageRoutes } from '@/pages/router'

export const stackflowConfig = defineConfig({
  activities: pageRoutes,
  transitionDuration: 270,
})
