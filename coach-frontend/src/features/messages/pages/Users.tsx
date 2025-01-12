'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { SearchField } from '@/shared/components'
import { IContactUser } from '../types'
import { contactService } from '../service'
import { get12HourTimeFromDateObject, getDateFromDateObject } from '@/shared/utils'
import * as dotenv from 'dotenv'

dotenv.config()

const backendHostUrl = process.env.NEXT_PUBLIC_BACKEND_HOST_URL

interface IUsers {
  isShow: boolean
  currentChatUserId?: string
}

const Users: React.FC<IUsers> = ({ isShow, currentChatUserId }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const query: string | null = searchParams.get('query')

  const [contactUsers, setContactUsers] = useState<IContactUser[]>([])
  const [nameSearchResultUsers, setNameSearchResultUsers] = useState<IContactUser[]>([])
  const [chatSearchResultUsers, setChatSearchResultUsers] = useState()

  const onClick = (userId: string) => {
    console.log('setting chat user: ', userId)
    const params = new URLSearchParams(searchParams)

    if(userId) {
      params.set('currentChatUserId', userId)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    const getContacts = async () => {
      const response = await contactService.getContacts()
      setContactUsers(response)
    }

    getContacts()
  }, [])

  const groupUsersByDate = (users: IContactUser[]) => {
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const formatDate = (date: Date) => date.toISOString().split('T')[0]

    const todayKey = formatDate(today)
    const yesterdayKey = formatDate(yesterday)

    const todayUsers: IContactUser[] = []
    const yesterdayUsers: IContactUser[] = []
    const restUsers: IContactUser[] = []

    users.forEach((user) => {
      if (user.lastMessage) {
        const sentDateKey = formatDate(new Date(user.lastMessage.sentDate))
        if (sentDateKey === todayKey) {
          todayUsers.push(user)
        } else if (sentDateKey === yesterdayKey) {
          yesterdayUsers.push(user)
        } else {
          restUsers.push(user)
        }
      } else {
        restUsers.push(user)
      }
    })

    return { todayUsers, yesterdayUsers, restUsers }
  }

  const { todayUsers, yesterdayUsers, restUsers } = groupUsersByDate(contactUsers)

  return (
    <div className='tw-flex tw-flex-col tw-gap-4'>
      <SearchField
        width='tw-w-full'
        height='tw-h-14'
        placeholder={query ?? 'Search name, chat, etc'}
      />

      <div className='tw-flex tw-flex-col tw-gap-4 tw-overflow-y-auto no-scrollbar'>
        {todayUsers.length > 0 && (
          <div className='tw-flex tw-flex-col tw-gap-4'>
            <h3 className='tw-text-black tw-text-sm tw-font-medium'>Today</h3>
            <div className='tw-flex tw-flex-col tw-rounded-20 tw-border-stroke tw-border'>
              {todayUsers.map((user, index) => (
                <div key={index} className='tw-w-full'>
                  <UserItem
                    key={index}
                    user={user}
                    isSelected={user.id === currentChatUserId}
                    isTodayOrYesterday
                    onClick={() => onClick(user.id)}
                  />
                  {index < todayUsers.length -1 && (
                    <div className='tw-w-full tw-h-[1px] tw-bg-stroke' />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {yesterdayUsers.length > 0 && (
          <div className='tw-flex tw-flex-col tw-gap-4'>
            <h3 className='tw-text-black tw-text-sm tw-font-medium'>Yesterday</h3>
            <div className='tw-flex tw-flex-col tw-rounded-20 tw-border-stroke tw-border'>
              {yesterdayUsers.map((user, index) => (
                <div key={index} className='tw-w-full'>
                  <UserItem
                    key={index}
                    user={user}
                    isSelected={user.id === currentChatUserId}
                    isTodayOrYesterday
                    onClick={() => onClick(user.id)}
                  />
                  {index < yesterdayUsers.length -1 && (
                    <div className='tw-w-full tw-h-[1px] tw-bg-stroke' />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {restUsers.length > 0 && (
          <div className='tw-flex tw-flex-col tw-gap-4'>
            <h3 className='tw-text-black tw-text-sm tw-font-medium'>The Past</h3>
            <div className='tw-flex tw-flex-col tw-rounded-20 tw-border-stroke tw-border'>
              {restUsers.map((user, index) => (
                <div key={index} className='tw-w-full'>
                  <UserItem
                    key={index}
                    user={user}
                    isSelected={user.id === currentChatUserId}
                    onClick={() => onClick(user.id)}
                  />
                  {index < restUsers.length -1 && (
                    <div className='tw-w-full tw-h-[1px] tw-bg-stroke' />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users

interface IUserItemProps {
  user: IContactUser
  isSelected: boolean
  isTodayOrYesterday?: boolean
  onClick: () => void
}

const UserItem: React.FC<IUserItemProps> = ({
  user,
  isSelected,
  isTodayOrYesterday,
  onClick
}) => {
  const containerStyle = `tw-flex tw-items-center tw-p-4 tw-gap-4 tw-h-18.5 tw-rounded-20
    ${isSelected ? 'tw-bg-gray-subtle' : 'tw-bg-white'}
    `

  // !type assertion
  const dateObj = new Date(user.lastMessage?.sentDate!)

  let time: string = get12HourTimeFromDateObject(dateObj)
  let date: string = getDateFromDateObject(dateObj)

  return (
    <div className={containerStyle} onClick={onClick}>
      <div className='tw-flex tw-w-10 tw-h-10 tw-rounded-full'>
        {user.avatarUrl ? (
          <Image
            src={backendHostUrl + user.avatarUrl}
            width={40}
            height={40}
            alt=''
            className='tw-rounded-full'
          />
        ) : (
          <Image
            src='/images/user/user-01.png'
            width={40}
            height={40}
            alt=''
            className='tw-rounded-full'
          />
        )}
      </div>

      <div className='tw-flex tw-flex-1 tw-flex-col'>
        <div className='tw-flex tw-justify-between tw-items-center'>
          {/* Name and Label */}
          <div className='tw-flex tw-justify-start tw-items-center tw-gap-0.5'>
            <p className='tw-text-black tw-font-medium'>{user.fullName}</p>
            {user.userType === 'Trainer' && (
              <div className='tw-flex tw-justify-center tw-items-center tw-bg-blue w-12 tw-h-5 tw-text-black tw-text-xxs'>Trainer</div>
            )}
          </div>

          {/* Time */}
          {isTodayOrYesterday ? (
            <p className={`tw-text-xxs ${isSelected ? 'tw-text-gray-20' : 'tw-text-black'}`}>{time}</p>
          ) : (
            <p className='tw-text-gray-20 tw-text-xxs'>{date}</p>
          )}
        </div>

        {/* Chat content and unread message */}
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-4'>
          <article className='tw-flex-1 tw-text-xxs tw-text-gray-30 tw-text-medium'>{user.lastMessage?.content}</article>
          {user.unreadCount > 0 && (
            <div className='tw-flex tw-justify-center tw-items-center w-5 tw-h-5 tw-rounded-full tw-bg-yellow tw-text-black tw-text-xxs tw-font-medium'>
              {user.unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
