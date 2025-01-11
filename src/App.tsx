import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme } from './theme'

import { Stackflow } from '@/stackflow/stack'

import '@stackflow/plugin-basic-ui/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      staleTime: 1000 * 10, // 10 seconds
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Stackflow initialContext={{ theme: 'cupertino' }} />
      </MantineProvider>
    </QueryClientProvider>
  )
}
