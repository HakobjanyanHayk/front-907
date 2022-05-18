// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

const initialUser = () => {
  const item = window.localStorage.getItem('userData')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {}
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser()
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload
      localStorage.setItem('userData', JSON.stringify(action.payload.data))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
    },
    handleLogout: state => {
      state.userData = {}
      localStorage.removeItem('userData')
      localStorage.removeItem('token')
    }
  }
})

export const { handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer
