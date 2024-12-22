import React from 'react'
import { IContactUser } from '../types'

interface IChat {
  isShow: boolean
  currentChatUser?: IContactUser
}

const Chat: React.FC<IChat> = ({ isShow, currentChatUser }) => {
  return (
    <div className='flex flex-col flex-[2]'>
      
    </div>
  )
}

export default Chat
