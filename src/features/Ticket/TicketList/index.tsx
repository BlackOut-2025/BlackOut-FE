import * as s from './style.css'

import TicketCard from '@/features/Ticket/Card'

const TicketList = () => {
  return (
    <div className={s.TicketListWrapper}>
      <TicketCard
        title="장범준 콘서트"
        available={true}
        startDate={new Date(2025, 1, 11)}
        endDate={new Date(2025, 1, 12)}
        location="센터필드"
      />
      <TicketCard
        title="하승준 콘서트"
        available={false}
        startDate={new Date(2025, 5, 1)}
        endDate={new Date(2025, 8, 1)}
        location="화정체육관"
      />
      <TicketCard
        title="하승준 콘서트"
        available={false}
        startDate={new Date(2025, 5, 1)}
        endDate={new Date(2025, 8, 1)}
        location="화정체육관"
      />
    </div>
  )
}

export default TicketList
