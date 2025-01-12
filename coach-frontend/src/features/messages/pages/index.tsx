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
    <div className='tw-flex tw-h-230 tw-p-4 tw-gap-4 tw-bg-white tw-rounded-4xl'>
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
