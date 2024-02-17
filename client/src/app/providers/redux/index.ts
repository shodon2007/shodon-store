import store, { type AppDispatch, type RootState } from './ui/redux'
import { login, logout } from './ui/userSlice'

export {
  store,
  type RootState,
  type AppDispatch,
  login,
  logout
}
