import axios from 'axios'

export default class JwtService {
    isAlreadyFetchingAccessToken = false

    // ** For Refreshing Token
    subscribers = []

    constructor(jwtOverrideConfig) {
        this.jwtConfig = { ...jwtOverrideConfig }

        // ** Request Interceptor
        axios.interceptors.request.use(
            config => {
                // ** Get token from localStorage
                const accessToken = this.getToken()

                // ** If token is present add it to request's Authorization Header
                if (accessToken) {
                    // ** eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `Bearer ${accessToken}`
                }
                return config
            },
            error => Promise.reject(error)
        )

        // ** Add request/response interceptor
        axios.interceptors.response.use(
            response => response,
            error => {
                // ** const { config, response: { status } } = error
                const { config, response } = error

                // ** if (status === 401) {
                if (response && response.status === 401) {
                    return Promise.reject(error)
                }
            }
        )
    }

  getToken() {
    return localStorage.getItem('accessToken')
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

  setToken(value) {
    localStorage.setItem('accessToken', value)
  }

  setRefreshToken(value) {
    localStorage.setItem('refreshToken', value)
  }

  login(...args) {
    return axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', ...args)
  }

  register(...args) {
    return axios.post(process.env.REACT_APP_API_URL + '/api/auth/register', ...args)
  }
}
