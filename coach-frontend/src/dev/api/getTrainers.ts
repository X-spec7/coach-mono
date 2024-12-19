import { GetTrainersPayloadDTO, GetTrainersResponseDTO } from '@/features/trainers/types/trainer.type'
import { trainersDummyData } from '../dummy-data/trainers'

export const getTrainers = ({ pageSize, pageNum }: GetTrainersPayloadDTO): Promise<GetTrainersResponseDTO> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (pageNum - 1) * pageSize
      const end = start + pageSize

      const paginatedData = trainersDummyData.slice(start, end)
      const total = trainersDummyData.length

      resolve({
        trainers: paginatedData,
        total,
        pageNum,
        pageSize,
      })
    }, 1000)
  })
}
