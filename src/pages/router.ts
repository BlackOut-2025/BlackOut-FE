import { pages } from '.'

export type ActivityNames = keyof typeof pages

type Routes = Record<ActivityNames, { path: string }>

export const routes: Routes = {
  TicketDetailPage: {
    path: '/ticket/detail',
  },
  ProfileDetailPage: {
    path: '/profile/:userId/detail',
  },
}

export const pageRoutes = Object.keys(routes).map(activityName => ({
  name: activityName,
  ...routes[activityName as ActivityNames],
}))
