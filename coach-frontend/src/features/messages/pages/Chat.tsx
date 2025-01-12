'use client'

import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

import ChatItem from './ChatItem'
import MessageTypeBox from './MessageTypeBox'

import { messageService, zoomService } from '../service'
import { AuthorizeMeetingRequestDTO, IMessage } from '../types'
import { EllipsisMenu } from '@/shared/components'
import { PhoneSvg, VideoCameraSvg, SidebarSimpleSvg } from '@/shared/components/Svg'
import { selectUser } from '@/features/user/slice/userSlice'

import { ZoomMtg } from "@zoom/meetingsdk"

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

import * as dotenv from 'dotenv'

dotenv.config()

const backendHostUrl = process.env.NEXT_PUBLIC_BACKEND_HOST_URL
const defaultAvatarUrl = '/images/avatar/default.png'

interface IChat {
  isShow: boolean
  currentChatUserId?: string
}

const Chat: React.FC<IChat> = ({ isShow, currentChatUserId }) => {
  const chatRef = useRef<HTMLDivElement | null>(null)

  const user = useSelector(selectUser)

  const [showScrollDown, setShowScrollDown] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [otherPersonName, setOtherPersonName] = useState('')
  const [otherPersonAvatarUrl, setOtherPersonAvatarUrl] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])


  const offsetRef = useRef(0)
  const previousScrollHeightRef = useRef(0)
  const isLoadingMoreRef = useRef(false)
  const limit = 10

  const getInitialData = async () => {
    if (!currentChatUserId) return

    offsetRef.current = 0

    const response = await messageService.getMessagesByUserId({
      otherPersonId: currentChatUserId,
      offset: offsetRef.current,
      limit,
    })

    setOtherPersonName(response.otherPersonFullname)
    setOtherPersonAvatarUrl(response.otherPersonAvatarUrl)
    setMessages(response.messages)
    setHasMore(response.messages.length !== response.totalMessageCount)
  }

  const getMoreData = async () => {
    if (!currentChatUserId || isLoadingMoreRef.current) return

    isLoadingMoreRef.current = true
    offsetRef.current = messages.length

    const response = await messageService.getMessagesByUserId({
      otherPersonId: currentChatUserId,
      offset: offsetRef.current,
      limit,
    })

    setMessages((prev) => [...response.messages, ...prev])
    setHasMore((messages.length + response.messages.length) < response.totalMessageCount)
    isLoadingMoreRef.current = false
  }

  useEffect(() => {
    const container = chatRef.current
    if (!container) return

    getInitialData()
    previousScrollHeightRef.current = container.scrollHeight
  }, [currentChatUserId])

  const handleScroll = async () => {
    const container = chatRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    setShowScrollDown(scrollTop < scrollHeight - clientHeight - 100)

    if (scrollTop === 0 && hasMore && !isLoadingMoreRef.current) {
      previousScrollHeightRef.current = scrollHeight
      await getMoreData()
    }
  }

  useEffect(() => {
    const container = chatRef.current
    if (!container) return

    if (messages.length > 0 && hasMore) {
      container.scrollTop = container.scrollHeight - previousScrollHeightRef.current
    } else if (messages.length <= 10) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    const container = chatRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [messages, hasMore])

  if (!currentChatUserId) {
    return (
      <div className='tw-relative tw-flex tw-flex-[2] tw-flex-col tw-justify-center tw-items-center tw-h-full tw-bg-gray-bg-subtle tw-rounded-20'>
        <h2 className='tw-text-5xl tw-font-semibold tw-text-black tw-mb-6 tw-z-10'><span className='tw-text-gray-30'>Hello, </span>COA-CH!</h2>
        <p className='tw-text-gray-30 tw-text-2xl tw-mb-14 tw-z-10'>Start chatting now with your connections and enjoy seamless conversations.</p>
        <button className='tw-px-6 tw-py-2 tw-bg-green tw-text-black tw-rounded-full tw-hover:tw-bg-green-400 tw-transition tw-z-10'>
          Find someone to chat with
        </button>
      </div>
    )
  }

  const onPhoneClick = async () => {
    const createZoomRes = await zoomService.createInstantMeeting({recipientId: currentChatUserId})
    const meetingNumber = createZoomRes.data.id
    const password = createZoomRes.data.encrypted_password

    const authorizeMeetingRequestDTO: AuthorizeMeetingRequestDTO = {
      meetingNumber: meetingNumber,
      role: 1,
    }
    const authMeetingRes = await zoomService.authorizeMeeting(authorizeMeetingRequestDTO)
    const signature = authMeetingRes.signature as string
    const sdkKey = authMeetingRes.sdkKey as string
    startMeeting(signature, meetingNumber, sdkKey, password)
  }

  const leaveUrl = `http://localhost:3000/messages?currentChatUserId=${currentChatUserId}`

  function startMeeting(
    signature: string,
    meetingNumber: string,
    sdkKey: string,
    password: string,
  ) {
    document.getElementById("zmmtg-root")!.style.display = "tw-block";

    console.log("signature", signature)

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: (success: unknown) => {
        console.log(success);
        // can this be async?
        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: password,
          userName: user.firstName,
          userEmail: user.email,
          tk: "",
          zak: "",
          success: (success: unknown) => {
            console.log(success);
          },
          error: (error: unknown) => {
            console.log(error);
          },
        });
      },
      error: (error: unknown) => {
        console.log(error);
      },
    });
  }

  return (
    <div className='tw-relative tw-flex tw-flex-col tw-flex-[2] tw-h-full tw-p-4 tw-bg-gray-bg-subtle tw-rounded-20'>
      {/* CONTENT HEADER */}
      <div className='tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-flex tw-justify-between tw-items-center tw-h-19.5 tw-px-4 tw-bg-white tw-border-stroke tw-border-t tw-border-x tw-rounded-t-20 tw-z-10'>
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-3.5'>
          <div className='tw-relative tw-w-11.5 tw-h-11.5 tw-rounded-full'>
            {
              otherPersonAvatarUrl !== '' ? (
                <Image
                  src={backendHostUrl + otherPersonAvatarUrl}
                  alt={`${otherPersonName} avatar`}
                  width={46}
                  height={46}
                  className='tw-w-full tw-h-full tw-rounded-full'
                />
              ) : (
                <Image
                  src={defaultAvatarUrl}
                  alt={`${otherPersonName} avatar`}
                  width={46}
                  height={46}
                  className='tw-w-full tw-h-full tw-rounded-full'
                />
              )
            }
          </div>
          <div className='tw-flex tw-flex-col tw-items-start'>
            <p className='tw-text-black tw-font-medium'>{otherPersonName}</p>
            <p className='tw-text-gray-20 tw-text-sm'>last seen recently</p>
          </div>
        </div>
        <div className='tw-flex tw-justify-end tw-items-center tw-gap-2.5'>
          <SvgWrapper onClick={onPhoneClick}>
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

      {/* MESSAGE CONTENT */}
      <div className='tw-relative tw-flex tw-flex-col tw-w-full tw-h-full tw-px-4 tw-pt-19.5'>
        <div ref={chatRef} className='tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-pb-4 tw-overflow-y-auto no-scrollbar'>
          {isLoadingMoreRef.current && (
            <div className="tw-text-gray-20 tw-text-xs tw-text-center">Loading more...</div>
          )}
          {messages.map((message, index) => (
            <ChatItem key={index} message={message} />
          ))}
        </div>
        <div className='tw-flex tw-w-full'>
          <MessageTypeBox />
        </div>
      </div>

      <div id="zoom-container">
        <div id="zmmtg-root" />
      </div>
    </div>
  )
}

interface ISvgWrapperProps {
  children: React.ReactNode
  onClick?: () => void
}

const SvgWrapper: React.FC<ISvgWrapperProps> = ({ children, onClick }) => {
  return (
    <div
      className='tw-flex tw-justify-center tw-items-center tw-w-9 tw-h-9 tw-bg-gray-bg-subtle tw-rounded-full tw-cursor-pointer'
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Chat
