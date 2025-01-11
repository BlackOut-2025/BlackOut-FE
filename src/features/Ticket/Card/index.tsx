import * as s from './style.css'

import TicketBG from '@/common/assets/TicketBG.png'

interface Props {
  title: string
  location: string
  available: boolean

  startDate: Date
  endDate: Date
}
const TicketCard = ({}: Props) => {
  return <div className={s.CardContainer} style={{ backgroundImage: `url(${TicketBG})` }}></div>
}
export default TicketCard
