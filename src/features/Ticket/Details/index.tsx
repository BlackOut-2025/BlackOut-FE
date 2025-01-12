import { Badge, Text } from '@mantine/core'

import * as s from './style.css'

import TicketDetailImg from '@/common/assets/TicketDetailImg.png'
import { vars } from '@/theme'

const TicketDetails = () => {
  return (
    <div className={s.Wrapper}>
      <img src={TicketDetailImg} alt="ticket poster" className={s.ImgStyle} />
      <div className={s.ConcertDetailStyle}>
        <div className={s.TitleContainer}>
          <Badge color={vars.colors.green[1]} style={{ color: vars.colors.green[9] }}>
            사용가능
          </Badge>
          <div>
            <Text className={s.TitleStyle}>2025 검정치마 단독공연 "SONGS TO BRING YOU HOME"</Text>
            <Text className={s.DescriptionStyle}>올림픽공원 올림픽홀</Text>
          </div>
        </div>
        <Text className={s.TitleStyle}>2025.02.07 - 2025.02.09</Text>
      </div>
    </div>
  )
}

export default TicketDetails
