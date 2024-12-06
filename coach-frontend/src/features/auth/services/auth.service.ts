import { toSnakeCase } from '@/shared/utils/format'
import httpPublic from '@/shared/services/httpPublic'

import tokenService from './token.service'
import { LoginPayloadDTO, RegisterPayloadDTO } from '../types/authTypes'

class AuthService {
  async register(payload: RegisterPayloadDTO) {
    return httpPublic
      .post('/authentication/register/', toSnakeCase(payload))
      .then((response) => {
        return response.data
      })
  }
  
  async login(payload: LoginPayloadDTO) {
    return httpPublic
      .post('/authentication/login/', payload)
      .then((response) => {
        if (response.data.result.token) {
          tokenService.setLocalAccessToken(response.data.result.token)
        }
        return response.data
      })
  }

  logout() {
    tokenService.removeLocalAccessToken()
  }
}

const authService = new AuthService()

export default authService
