
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@/features/auth/authSlice/authSlice'

const rootReducer = combineSlices(authSlice)

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat()
    },
  })
}

export type AppStore = ReturnType<typeof createStore>

export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action<string>
>
