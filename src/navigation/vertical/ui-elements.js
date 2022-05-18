// ** Icons Import
import {BarChart, User, Twitter} from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <BarChart size={12} />,
    navLink: '/dashboard'
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <User size={12} />,
    navLink: '/profile'
  },
  {
      id: 'tweets',
      title: 'Tweets',
      icon: <Twitter size={12} />,
      navLink: '/tweets'
  }
]
