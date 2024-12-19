import { Trainer } from "@/shared/types"

export interface GetTrainersPayloadDTO {
  pageSize: number
  pageNum: number
}

export interface GetTrainersResponseDTO {
  trainers: Trainer[]
  total: number
  pageNum: number
  pageSize: number
}
