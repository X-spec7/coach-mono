'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Chat from './Chat'
import Users from './Users'

const MessagesPage = () => {
  const searchParams = useSearchParams()
  const currentChatUserId = searchParams.get('currentChatUserId') || undefined

  const [display, setDisplay] = useState<'Users' | 'Chat'>('Chat')

  return (
    <div className='flex h-230 p-4 gap-4 bg-white rounded-4xl'>
      <Users
        isShow={display === 'Users'}
        currentChatUserId={currentChatUserId}
      />
      <Chat
        isShow={display === 'Chat'}
        currentChatUserId={currentChatUserId}
      />
    </div>
  )
}

export default MessagesPage
