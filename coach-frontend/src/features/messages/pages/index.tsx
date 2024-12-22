'use client'

import { useState } from 'react'
import Chat from './Chat'
import Users from './Users'
import { IContactUser } from '../types'

const MessagesPage = () => {
  const [display, setDisplay] = useState<'Users' | 'Chat'>('Chat')
  const [currentChatUser, setCurrentChatUser] = useState<IContactUser>()

  return (
    <div className='flex h-230 p-4 gap-4 bg-white rounded-4xl'>
      <Users
        isShow={display === 'Users'}
        setCurrentChatUser={setCurrentChatUser}
        currentChatUser={currentChatUser}
      />
      <Chat isShow={display === 'Chat'} currentChatUser={currentChatUser} />
    </div>
  )
}

export default MessagesPage
