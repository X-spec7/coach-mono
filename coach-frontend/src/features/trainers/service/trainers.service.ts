import { getTrainers } from '@/dev/api/getTrainers'
import { GetTrainersPayloadDTO, GetTrainersResponseDTO } from '../types/trainer.type'

class TrainersService {
  async getTrainers(payload: GetTrainersPayloadDTO): Promise<GetTrainersResponseDTO> {
    const response = await getTrainers(payload)
    return response
  }
}

const trainersService = new TrainersService()

export default trainersService
