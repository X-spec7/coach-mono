import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { createAppSlice } from '@/redux/createAppSlice'
import { AxiosError } from 'axios'

import { GetTrainersPayloadDTO, GetTrainersResponseDTO } from '../types/trainer.type'
import { trainersService } from '../service'
import { Trainer } from '@/shared/types'

export interface TrainersSliceState {
  isLoading: boolean
  trainers: Trainer[]
  total: number
  pageNum: number
  pageSize: number
}

const initialState: TrainersSliceState = {
  isLoading: false,
  trainers: [],
  total: 0,
  pageNum: 1,
  pageSize: 0,
}

// export const getTrainersAsync = createAsyncThunk<GetTrainersResponseDTO, GetTrainersPayloadDTO>(
//   'trainers/get',
//   async (payload: GetTrainersPayloadDTO, thunkApi) => {
//     try {
//       const response = await trainersService.getTrainers(payload)
//       // TODO: check response status in real api
//       return response
//     } catch (_error) {
//       const error = _error as Error | AxiosError
//       console.log(error)
//       thunkApi.rejectWithValue(error.message)
//     }
//   }
// )
