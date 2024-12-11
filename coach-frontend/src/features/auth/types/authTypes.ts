export interface LoginPayloadDTO {
  email: string
  password: string
}

export interface RegisterPayloadDTO {
  email: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
  userType: string
}

export interface User {
  firstName: string
  lastName: string
  userType: string
  email: string
  // Add more
}
