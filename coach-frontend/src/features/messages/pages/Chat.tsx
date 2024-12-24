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

const defaultAvatarUrl = ''

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
  },[currentChatUserId])

  return (
    <div className='relative flex flex-col flex-[2] h-full p-4 bg-gray-bg-subtle rounded-20 border-stroke border-2'>

      {/* <!--- CONTENT HEADER ---> */}
      <div className='absolute flex justify-between items-center h-19.5 bg-white rounded-t-20'>
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
            <PhoneSvg width='36' height='36' color='#4D5260' />
          </SvgWrapper>
          <SvgWrapper>
            <VideoCameraSvg width='36' height='36' color='#4D5260' />
          </SvgWrapper>
          <SvgWrapper>
            <SidebarSimpleSvg width='36' height='36' color='#4D5260' />
          </SvgWrapper>

          <EllipsisMenu menus={[]} />
        </div>
      </div>

      {/* <!--- MESSAGE CONTENT ---> */}
      <div className='relative flex flex-col gap-4 w-full h-full pb-4 px-4 pt-19.5 overflow-y-auto no-scrollbar'>
        {loadingMore && (
          <div className='text-gray-20 text-xs'>Loading more...</div>
        )}

        {messages.map((message, index) => {
          return (
            <ChatItem key={index} message={message} />
          )
        })}

        <div className='w-full mt-4'>
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
