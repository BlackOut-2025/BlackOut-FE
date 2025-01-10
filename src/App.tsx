import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle'
import { theme } from './theme'
import { Welcome } from './Welcome/Welcome'

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
        <Welcome />
        <ColorSchemeToggle />
      </MantineProvider>
    </QueryClientProvider>
  )
}
