import * as s from './style.css'

import TicketItem from '@/features/Home/TicketList/TicketItem'

const HomeTicketList = () => {
  return (
    <div className={s.Wrapper}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </div>
  )
}

export default HomeTicketList
