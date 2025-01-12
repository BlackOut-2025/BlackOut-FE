import { useSuspenseQuery } from '@tanstack/react-query'

// import { contract } from '@/common/clients/contract'
import { ConcertInterface } from '@/common/types/concert'

export interface GetConcertDetailRequest {
  concertId: string
}

// interface GetMyTicketsResponse {
//   data: ConcertInterface
// }

const getConcertDetail: (props: GetConcertDetailRequest) => Promise<ConcertInterface> = async () => {
  // const response = (await contract.getConcertDetail(concertId)) as GetMyTicketsResponse
  // return response.data
  return {
    title: '2025 검정치마 단독공연  "SONGS TO BRING YOU HOME"',
    imgUrl: 'https://tkfile.yes24.com/upload2/PerfBlog/202311/20231115/20231115-47823.jpg',
    note: [
      '본 NFT 티켓은 추첨제로, 당첨자와 예비자는 추첨제 신청에 참여한 회원에 한하여 공연장 객석 정원에 맞게 랜덤 선별됩니다.',
      '예매 매수 제한은 회차별 1인 1매입니다.',
      '1차 당첨자의 좌석 확인 및 결제까지 마무리된 후에는 미결제석 인원에 맞춰 예비자 중 2차 인원이 선발됩니다.',
      '예매 후 티켓 취소 시 다음 예비자가 자동으로 당첨됩니다.',
    ],
    location: '올림픽공원 올림픽홀',
    performanceSchedule: {
      startDate: new Date('2025-02-07'),
      endDate: new Date('2025-02-09'),
    },
    announcementSchedule: new Date('2025-01-18'),
    reservationSchedule: { startDate: new Date('2025-01-09'), endDate: new Date('2025-01-16') },
    type: 'draw',
  }
}

export const useGetConcertDetail = ({ concertId }: GetConcertDetailRequest) => {
  return useSuspenseQuery({
    queryKey: ['concert-detail', concertId],
    queryFn: () => getConcertDetail({ concertId }),
  })
}
