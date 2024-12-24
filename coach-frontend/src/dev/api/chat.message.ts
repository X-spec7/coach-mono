import { messagesDummyData } from '../dummy-data'
import { mockApi } from './api'
import { GetMessagesByUserIdRequestDTO } from '@/features/messages/types'

export const getMessagesByUserIdDummyData = {
  userId: '123',
  otherPersonId: '1',
  otherPersonFullname: 'Jack Doeson',
  otherPersonAvatarUrl: '/media/avatar_images/7_avatar.webp',
  totalMessageCount: messagesDummyData.length,
  messages: messagesDummyData,
}

export const getMessages = (payload: GetMessagesByUserIdRequestDTO) => {
  if (payload.otherPersonId === getMessagesByUserIdDummyData.otherPersonId) {
    return getMessagesByUserIdDummyData
  } else {
    return {
      userId: '123',
      otherPersonId: payload.otherPersonId,
      otherPersonFullname: 'Rose',
      otherPersonAvatarUrl: '/media/avatar_images/7_avatar.webp',
      totalMessageCount: 0,
      messages: [],
    }
  }
}

export const getMessagesByUserId = async (payload: GetMessagesByUserIdRequestDTO) => {
  return mockApi(getMessages(payload))
}
