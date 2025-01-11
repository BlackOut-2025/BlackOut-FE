import { pages } from '.'

export type ActivityNames = keyof typeof pages

type Routes = Record<ActivityNames, { path: string }>

export const routes: Routes = {
  HomePage: {
    path: '/',
  },
  ConcertDetailPage: {
    path: '/concert/:concertId/detail',
  },
  MyTicketPage: {
    path: '/my-ticket/detail',
  },
  MyTicketDetailPage: {
    path: '/my-ticket/:ticketId/detail',
  },
}

export const pageRoutes = Object.keys(routes).map(activityName => ({
  name: activityName,
  ...routes[activityName as ActivityNames],
}))
