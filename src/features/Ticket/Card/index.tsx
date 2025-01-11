import * as s from './style.css'

import TicketBG from '@/common/assets/TicketBG.png'

interface Props {
  title: string
  location: string
  available: boolean

  startDate: Date
  endDate: Date
}
const TicketCard = ({ title, location, available, startDate, endDate }: Props) => {
  return (
    <div className={s.CardContainer} style={{ backgroundImage: `url(${TicketBG})` }}>
      <div className={s.UpperSection}>
        <div className={s.CardHeader}></div>
        <div>
          {startDate.getFullYear()}.{startDate.getMonth() + 1}.{startDate.getDate()} - {endDate.getFullYear()}.
          {endDate.getMonth() + 1}.{endDate.getDate()}
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default TicketCard
