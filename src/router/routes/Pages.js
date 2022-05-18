import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
    {
        path: '/login',
        component: lazy(() => import('../../views/pages/authentication/Login')),
        layout: 'BlankLayout'
    },
    {
        path: '/register',
        component: lazy(() => import('../../views/pages/authentication/Register')),
        layout: 'BlankLayout'
    },
    {
        path: '/misc/not-authorized',
        component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
        layout: 'BlankLayout',
        meta: {
            publicRoute: true
        }
    }
]

export default PagesRoutes
