import { useCallback, useEffect, useRef, useState } from 'react'

import * as s from './style.css'

import PersonMask from '@/common/assets/Person.png'
import { usePostLambda } from '@/common/components/VideoRecoder/apis/usePostLambda'
import { videoChunksToBase64 } from '@/common/components/VideoRecoder/utils'

interface Props {
  sessionId: string
}
const VideoRecorder = ({ sessionId }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const { mutate: postVideo } = usePostLambda()
  const [canClose, setCanClose] = useState(false)

  const sendVidio = async (videoChunks: Blob[]) => {
    const base64data = await videoChunksToBase64(videoChunks)
    postVideo(
      { video: videoRef.current!, base64data, sessionId },
      {
        onSuccess: data => {
          console.log(data)
          setCanClose(true)
        },
      },
    )
  }

  const getMediaPermission = useCallback(async () => {
    try {
      // const audioConstraints = { audio: true }
      const videoConstraints = {
        audio: false,
        video: true,
      }

      // const audioStream = await navigator.mediaDevices.getUserMedia(audioConstraints)
      const videoStream = await navigator.mediaDevices.getUserMedia(videoConstraints)

      if (videoRef.current) {
        videoRef.current.srcObject = videoStream
      }

      const combinedStream = new MediaStream([...videoStream.getVideoTracks()])

      const recorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm',
      })

      const videoChunks: Blob[] = []

      recorder.ondataavailable = e => {
        if (typeof e.data === 'undefined') return
        if (e.data.size === 0) return
        videoChunks.push(e.data)
      }

      recorder.start()
      setTimeout(() => {
        recorder.stop()
        recorder.onstop = () => {
          sendVidio(videoChunks)
        }
      }, 3000)
    } catch (err) {
      // console.log(err)
    }
  }, [])

  useEffect(() => {
    getMediaPermission()
  }, [])

  return (
    <>
      {!canClose && (
        <div className={s.VideoWrapper}>
          <img src={PersonMask} className={s.Mask} />
          <video className={s.VideoStyle} ref={videoRef} autoPlay />
        </div>
      )}
    </>
  )
}

export default VideoRecorder
