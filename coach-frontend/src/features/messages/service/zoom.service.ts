
import authorizedHttpServer from '@/shared/services/authorizedHttp'
import { CreateInstantMeetingRequestDTO, AuthorizeMeetingRequestDTO } from '../types'

class ZoomService {
  async createInstantMeeting(payload: CreateInstantMeetingRequestDTO) {
    return authorizedHttpServer
      .post('/zoom/create/instant/', {recipient_id: payload.recipientId})
      .then((response) => {
        return response.data
      })
  }

  async authorizeMeeting(payload: AuthorizeMeetingRequestDTO) {
    return authorizedHttpServer
      .post('/zoom/auth/', {
        meeting_number: payload.meetingNumber,
        role: payload.role
      })
      .then((response) => {
        return response.data
      })
  }
}

const zoomService = new ZoomService()

export default zoomService
