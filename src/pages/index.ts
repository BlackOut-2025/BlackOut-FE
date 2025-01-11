import ConcertDetailPage from '@/pages/Concert/[concertId]/Detail'
import HomePage from '@/pages/Home'
import MyTicketPage from '@/pages/MyTicket/[userId]/Detail'
import MyTicketDetailPage from '@/pages/MyTicket/[userId]/Ticket/[ticketId]/Detail'

export const pages = {
  HomePage: HomePage,
  ConcertDetailPage: ConcertDetailPage,
  MyTicketPage: MyTicketPage,
  MyTicketDetailPage: MyTicketDetailPage,
}
