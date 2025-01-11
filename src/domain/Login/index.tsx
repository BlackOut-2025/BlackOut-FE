import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness'
import { Loader } from '@mantine/core'
import { Suspense } from 'react'

import { useGetCreateLivenessApiData } from '@/domain/Login/api/useGetCreateLivenessApiData'

const Login = () => {
  const { data: createLivenessApiData } = useGetCreateLivenessApiData()

  const handleAnalysisComplete = async () => {
    console.log('얼굴 인식 완료!', createLivenessApiData.sessionId)
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <FaceLivenessDetector
          sessionId={createLivenessApiData.sessionId}
          region="us-east-1"
          onAnalysisComplete={handleAnalysisComplete}
          onError={error => {
            console.error(error)
          }}
          disableStartScreen
        />
      </Suspense>
    </div>
  )
}

export default Login
