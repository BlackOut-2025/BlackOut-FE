import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

const getSession = async () => {
  const response = await axios.get(import.meta.env.VITE_API_SESSION_URL)
  return response.data
}

export const useGetSession = () => {
  return useSuspenseQuery({
    queryKey: ['session'],
    queryFn: getSession,
    select: data => data.SessionId,
  })
}
