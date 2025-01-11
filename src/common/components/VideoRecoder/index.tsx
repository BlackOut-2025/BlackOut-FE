import axios from 'axios'
import { useCallback, useEffect, useRef } from 'react'

import * as s from './style.css'

const videoChunksToBase64 = async (videoChunks: Blob[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // 1. Blob 배열 병합
      const mergedBlob = new Blob(videoChunks, { type: 'video/mp4' })

      // 2. FileReader로 Base64 변환
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result.toString())
        } else {
          reject(new Error('Failed to convert video to Base64'))
        }
      }

      reader.onerror = error => {
        reject(error)
      }

      reader.readAsDataURL(mergedBlob)
    } catch (error) {
      reject(error)
    }
  })
}

interface Props {
  sessionId: string
}
const VideoRecorder = ({ sessionId }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const sendVidio = async (videoChunks: Blob[]) => {
    const base64data = await videoChunksToBase64(videoChunks)

    const response = await axios.post(import.meta.env.VITE_API_LAMBDA_URL, {
      SessionId: sessionId,
      VideoWidth: `${videoRef.current?.videoWidth}`,
      VideoHeight: `${videoRef.current?.videoHeight}`,
      Chunk: base64data,
    })

    console.log(response.data)
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

  return <video className={s.VideoBoxStyle} ref={videoRef} autoPlay />
}

export default VideoRecorder
