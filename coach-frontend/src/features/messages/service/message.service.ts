import { getMessagesByUserId } from '@/dev/api'
import { GetMessagesByUserIdRequestDTO, GetMessagesByUserIdResponseDTO } from '../types'

class MessageService {
  async getMessagesByUserId(
    payload: GetMessagesByUserIdRequestDTO
  ): Promise<GetMessagesByUserIdResponseDTO> {
    const response = await getMessagesByUserId(payload)
    return response
  }
}

const messageService = new MessageService()

export default messageService
