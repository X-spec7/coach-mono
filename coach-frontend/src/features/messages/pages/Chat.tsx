'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import ChatItem from './ChatItem'
import MessageTypeBox from './MessageTypeBox'

import { messageService } from '../service'
import { IMessage } from '../types'
import { ILayoutProps } from '@/shared/types/common.type'
import { EllipsisMenu } from '@/shared/components'
import { PhoneSvg, VideoCameraSvg, SidebarSimpleSvg } from '@/shared/components/Svg'

import * as dotenv from 'dotenv'

dotenv.config()

const backendHostUrl = process.env.NEXT_PUBLIC_BACKEND_HOST_URL

const defaultAvatarUrl = '/images/avatar/default.png'

interface IChat {
  isShow: boolean
  currentChatUserId?: string
}

const Chat: React.FC<IChat> = ({ isShow, currentChatUserId }) => {
  const chatRef = useRef(null)
  
  const [loadingMore, setLoadingMore] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  
  const [otherPersonName, setOtherPersonName] = useState('')
  const [otherPersonAvatarUrl, setOtherPersonAvatarUrl] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    console.log('the other person id: ', currentChatUserId)

    const getData = async () => {
      if (!currentChatUserId) {
        return
      }

      const response = await messageService.getMessagesByUserId({otherPersonId: currentChatUserId})
      setOtherPersonName(response.otherPersonFullname)
      setOtherPersonAvatarUrl(response.otherPersonAvatarUrl)
      setMessages(response.messages)
    }

    getData()
  }, [currentChatUserId])

  return (
    <div className='relative flex flex-col flex-[2] h-full p-4 bg-gray-bg-subtle rounded-20'>

      {/* <!--- CONTENT HEADER ---> */}
      <div className='absolute top-0 left-0 right-0 flex justify-between items-center h-19.5 px-4 bg-white border-stroke border-t border-x rounded-t-20 z-10'>
        <div className='flex justify-start items-center gap-3.5'>
          <div className='relative w-11.5 h-11.5 rounded-full'>
            {otherPersonAvatarUrl !== '' ? (
              <Image
                src={backendHostUrl + otherPersonAvatarUrl}
                alt={`${otherPersonName} avatar`}
                width={46}
                height={46}
                className='w-full h-full rounded-full'
              />
            ) : (
              <Image
                src={defaultAvatarUrl}
                alt={`${otherPersonName} avatar`}
                width={46}
                height={46}
                className='w-full h-full rounded-full'
              />
            )}
          </div>

          <div className='flex flex-col items-start'>
            <p className='text-black font-medium'>{otherPersonName}</p>
            <p className='text-gray-20 text-sm'>last seen recently</p>
          </div>
        </div>

        <div className='flex justify-end items-center gap-2.5'>
          <SvgWrapper>
            <PhoneSvg width='20' height='20' color='#4D5260' />
          </SvgWrapper>
          <SvgWrapper>
            <VideoCameraSvg width='20' height='20' color='#4D5260' />
          </SvgWrapper>
          <SvgWrapper>
            <SidebarSimpleSvg width='20' height='20' color='#4D5260' />
          </SvgWrapper>

          <EllipsisMenu menus={[]} />
        </div>
      </div>

      {/* <!--- MESSAGE CONTENT ---> */}
      <div className='relative flex flex-col w-full h-full px-4 pt-19.5'>
        <div className='flex flex-1 flex-col gap-4 pb-4 overflow-y-auto no-scrollbar'>
          {loadingMore && (
            <div className='text-gray-20 text-xs'>Loading more...</div>
          )}

          {messages.map((message, index) => {
            return (
              <ChatItem key={index} message={message} />
            )
          })}
        </div>

        <div className='flex w-full'>
          <MessageTypeBox />
        </div>
      </div>
    </div>
  )
}

const SvgWrapper: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='flex justify-center items-center w-9 h-9 bg-gray-bg-subtle rounded-full'>
      {children}
    </div>
  )
}

export default Chat
