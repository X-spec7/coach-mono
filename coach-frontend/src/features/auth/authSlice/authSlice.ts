
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { createAppSlice } from '@/redux/createAppSlice'
import { AxiosError } from 'axios'

import authService from '../services/auth.service'
import { LoginPayloadDTO, RegisterPayloadDTO, User } from '../types/authTypes'
import tokenService from '../services/token.service'

export interface AuthSliceState {
  isAuthenticated: boolean
  user: User
}

const initialUser: User = {
  firstName: '',
  lastName: '',
  userType: '',
  email: ''
}
const accessToken = tokenService.getLocalAccessToken()

const initialState: AuthSliceState = {
  isAuthenticated: accessToken ? true : false,
  user: initialUser,
}

export const registerAsync = createAsyncThunk<AuthSliceState, RegisterPayloadDTO>(
  'auth/register',
  async (registerPayload: RegisterPayloadDTO, thunkApi) => {
    try {
      const response = await authService.register(registerPayload)
      if (response.status === 200) {
        return response
      }
    } catch (_error) {
      const error = _error as Error | AxiosError;
      console.log(error)
      thunkApi.rejectWithValue(error.message)
    }
  }
)

export const loginAsync = createAsyncThunk<AuthSliceState, LoginPayloadDTO>(
  'auth/login',
  async (loginPayload: LoginPayloadDTO, thunkApi) => {
    try {
      const response = await authService.login(loginPayload)
      if (response.status === 200) {
        return response
      }
    } catch (_error) {
      const error = _error as Error | AxiosError;
      console.log(error)
      thunkApi.rejectWithValue(error.message)
    }
  }
)

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }),
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true
        state.user = payload.user
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isAuthenticated = false
      })
  },
  selectors: {
    selectIsAuthenticated: (auth) => auth.isAuthenticated,
    selectUser: (auth) => auth.user,
  }
})
