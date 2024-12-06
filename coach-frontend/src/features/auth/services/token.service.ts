class TokenService {
  getLocalAccessToken() {
    const token = localStorage.getItem('access_token')
    return token
  }
  setLocalAccessToken(token: string) {
    localStorage.setItem('access_token', token)
  }
  removeLocalAccessToken() {
    localStorage.removeItem('access_token')
  }
}

const tokenService = new TokenService()

export default tokenService
