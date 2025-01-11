import * as s from './style.css'

import TicketCard from '@/features/Ticket/Card'

const TicketList = () => {
  return (
    <div className={s.TicketListWrapper}>
      <TicketCard />
    </div>
  )
}

export default TicketList
