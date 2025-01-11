import '@mantine/core/styles.css'
import { ThemeProvider } from '@aws-amplify/ui-react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Amplify } from 'aws-amplify'

import { theme } from './theme'

import '@aws-amplify/ui-react/styles.css'

// import awsConfig from '@/aws-exports'
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

// Amplify.configure(awsConfig)

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <ThemeProvider>
          <Stackflow initialContext={{ theme: 'cupertino' }} />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}
