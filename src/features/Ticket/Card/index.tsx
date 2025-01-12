import { useFlow } from '@stackflow/react/future'

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
  const { push } = useFlow()

  const onClick = () => {
    push('MyTicketDetailPage', { ticketId: 'title' })
  }

  return <img className={s.CardContainer} onClick={onClick} src={TicketBG} />
}
export default TicketCard
