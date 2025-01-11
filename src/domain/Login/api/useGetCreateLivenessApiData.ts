import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

const getCreateLivenessApiData = async () => {
  const response = await axios.get('https://lyasl34b72xxy6o7emztkz6dbe0qffce.lambda-url.us-east-1.on.aws/')
  return response.data
}

export const useGetCreateLivenessApiData = () => {
  return useSuspenseQuery({
    queryKey: ['createLivenessApiData'],
    queryFn: getCreateLivenessApiData,
  })
}
