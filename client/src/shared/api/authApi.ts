import axios from 'axios'
import ApiGeneral from './generalApi'
import { URLS } from '/shared/config/server/server'

interface Auth {
  username: string
  message: string
  token: string
}

class AuthApi extends ApiGeneral {
  async login (username: string, password: string) {
    try {
      const response = await axios.get<Auth>(URLS.auth, { params: { username, password } })
      return {
        username: response.data.username,
        token: response.data.token,
        message: response.data.message,
        error: false
      }
    } catch (e) {
      if (e.name === 'AxiosError') {
        return {
          error: true,
          message: e.response.data.message
        }
      }
    }
  }

  async registration (username: string, password: string) {
    let resp
    try {
      resp = await axios.post<Auth>(URLS.auth, { username, password })
    } catch (e) {
      return {
        error: true,
        message: e.response.data.message
      }
    }

    return {
      error: false,
      message: resp.data.message,
      username: resp.data.username,
      token: resp.data.token
    }
  }
}

export default new AuthApi()
