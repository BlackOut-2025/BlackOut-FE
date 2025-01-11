import { useSuspenseQuery } from '@tanstack/react-query'

import { contract } from '@/common/clients/contract'

const getMyTickets = async () => {
  const response = contract.getMyTickets()
  return response
}

export const useGetMyTickets = () => {
  return useSuspenseQuery({
    queryKey: ['my-tickets'],
    queryFn: getMyTickets,
  })
}
