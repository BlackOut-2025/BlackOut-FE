import { Badge, Text } from '@mantine/core'

import * as s from './style.css'

const ConcertInfo = () => {
  return (
    <>
      <div className={s.Wrapper}>
        <div className={s.Description}>
          <Badge color="gray.9">
            <Text size="xs">단독판매</Text>
          </Badge>
          <Text size="lg" fw={700}>
            2025 검정치마 단독공연 “SONGs to being tou home”
          </Text>
          <div className={s.Box}>
            <div className={s.Place}>
              <Text size="md" fw={600}>
                장소
              </Text>
              <Text size="md" fw={400} c="gray.6">
                서울 올림픽공원 체육관
              </Text>
            </div>
            <div className={s.Place}>
              <Text size="md" fw={600}>
                기간
              </Text>
              <Text size="md" fw={400} c="gray.6">
                2025.01.11 ~ 2025.01.12
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={s.Divider}>
        <div className={s.DividerLine} />
      </div>
      <div className={s.Wrapper} style={{ gap: '2.5rem' }}>
        <div className={s.GuideWrapper}>
          <Text size="md" fw={600}>
            예매 일정
          </Text>
          <div className={s.GuideList}>
            <Text size="md" fw={400} c="gray.6">
              추첨 참여 2025.01.09 - 2025.01.16
            </Text>
            <Text size="md" fw={400} c="gray.6">
              당첨 발표 2025.01.18 오후 6시
            </Text>
          </div>
        </div>
        <div className={s.GuideWrapper}>
          <Text size="md" fw={600}>
            유의사항
          </Text>
          <div className={s.GuideList}>
            <Text size="md" fw={400} c="gray.6">
              본 NFT 티켓은 추첨제로, 당첨자와 예비자는 추첨제 신청에 참여한 회원에 한하여 공연장 객석 정원에 맞게 랜덤
              선별됩니다. <br />
              예매 매수 제한은 회차별 1인 1매입니다. 1차 당첨자의 좌석 확인 및 결제까지 마무리된 후에는 미결제석 인원에
              맞춰 예비자 중 2차 인원이 선발됩니다. <br /> 예매 후 티켓 취소 시 다음 예비자가 자동으로 당첨됩니다.
            </Text>
          </div>
        </div>
        <div className={s.GuideWrapper} style={{ marginBottom: '2.5rem' }}>
          <Text size="md" fw={600}>
            공연 관람 희망일 선택
          </Text>
          <div className={s.GuideList}>
            <Text size="md" fw={400} c="gray.6">
              본 NFT 티켓은 추첨제로, 당첨자와 예비자는 추첨제 신청에 참여한 회원에 한하여 공연장 객석 정원에 맞게 랜덤
              선별됩니다.
              <br />
              예매 매수 제한은 회차별 1인 1매입니다.
              <br />
              1차 당첨자의 좌석 확인 및 결제까지 마무리된 후에는 미결제석 인원에 맞춰 예비자 중 2차 인원이 선발됩니다.{' '}
              <br /> 예매 후 티켓 취소 시 다음 예비자가 자동으로 당첨됩니다.
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConcertInfo
