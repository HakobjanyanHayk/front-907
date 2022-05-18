import { lazy } from 'react'

const UiElementRoutes = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/ui-elements/dashboard')),
      meta: {
          authRoute: true
      }
  },
  {
    path: '/tweets',
    component: lazy(() => import('../../views/ui-elements/tweets')),
      meta: {
          authRoute: true
      }
  },
  {
    path: '/profile',
    component: lazy(() => import('../../views/ui-elements/profile')),
      meta: {
          authRoute: true
      }
  }
]

export default UiElementRoutes
