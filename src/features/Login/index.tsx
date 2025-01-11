import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness'
import { Loader } from '@mantine/core'
import { Suspense } from 'react'

import * as s from './style.css'

import VideoRecorder from '@/common/components/VideoRecoder'
import { useGetSession } from '@/domain/Login/api/useGetSession'

const Login = () => {
  const { data: sessionId } = useGetSession()

  const handleAnalysisComplete = async () => {
    console.log('얼굴 인식 완료!', sessionId)
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className={s.Container}>
        <VideoRecorder sessionId={sessionId} />
      </div>
      {/* <FaceLivenessDetector
          sessionId={sessionId}
          region="us-east-1"
          onAnalysisComplete={handleAnalysisComplete}
          onError={error => {
            console.error(error)
          }}
          disableStartScreen
        /> */}
    </Suspense>
  )
}

export default Login
