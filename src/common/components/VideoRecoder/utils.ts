export const videoChunksToBase64 = async (videoChunks: Blob[]): Promise<string> => {
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
