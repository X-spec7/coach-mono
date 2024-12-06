import axios from 'axios';

const loginUrl = 'http://5.9.85.28:8080/api/authentication/login/'
const registerUrl = 'http://5.9.85.28:8080/api/authentication/register/'

interface LoginDTO {
  email: string
  password: string
}

interface RegisterDTO {
  email: string
  firstName: string
  lastName: string
  password: string
  userType: string
}

export const login = async (payload: LoginDTO) => {

  try {
    const response = await axios.post(loginUrl, payload)
    console.log('login response data: ', response.data)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
    throw error
  }
}

export const register = async (data: RegisterDTO) => {
  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
    user_type: data.userType
  }

  try {
    const response = await axios.post(registerUrl, payload)
    console.log('register response data: ', response.data)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
    throw error
  }
}
