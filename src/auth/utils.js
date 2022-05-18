export const isUserLoggedIn = () => {
  return localStorage.getItem('userData') && localStorage.getItem('token')
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

export const getHomeRouteForLoggedInUser = () => '/'
