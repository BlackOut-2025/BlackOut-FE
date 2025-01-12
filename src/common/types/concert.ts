export interface ConcertInterface {
  imgUrl: string // 공연 사진 (포스터) url
  title: string // 공연 이름
  type: 'draw' | 'fcfs' // 추첨 or first-come-first-serve
  location: string // 공연 장소
  performanceSchedule: {
    // 공연 일정
    startDate: Date
    endDate: Date
  }
  reservationSchedule: {
    // 추첨 참여 일정 or 예매 일정
    startDate: Date
    endDate: Date
  }
  announcementSchedule: Date // 추첨 발표 일자
  note: string[] // 유의사항
}
