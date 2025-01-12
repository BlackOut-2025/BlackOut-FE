import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface PostLambdaRequest {
  sessionId: string
  video: HTMLVideoElement
  base64data: string
}
const postLambda = async ({ sessionId, video, base64data }: PostLambdaRequest) => {
  // const response = await axios.post(import.meta.env.VITE_API_LAMBDA_URL, {
  //   SessionId: sessionId,
  //   VideoWidth: `${video.videoWidth}`,
  //   VideoHeight: `${video.videoHeight}`,
  //   Chunk: base64data,
  // })
  // return response.data
  return true
}

export const usePostLambda = () => {
  return useMutation({
    mutationFn: postLambda,
  })
}
