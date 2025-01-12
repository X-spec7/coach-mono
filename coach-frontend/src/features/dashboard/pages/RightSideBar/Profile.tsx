'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { TitleWithEllipsis } from '@/shared/components'
import { selectUser } from '@/features/user/slice/userSlice'
import { useSelector } from 'react-redux'
import * as dotenv from 'dotenv'

dotenv.config()

const backendHostUrl = process.env.NEXT_PUBLIC_BACKEND_HOST_URL

interface ProfileProps {
  fullname: string
  level: string
  // TODO: should figure out what this number means, and give reasonable name
  number: number
  weight: number
  height: number
  age: number
}

interface ProfileDetailProps {
  label: Label;
  value: number;
}

type Label = 'Weight' | 'Height' | 'Age'

const getUnitByLabel = (label: Label): string => {
  switch (label) {
    case 'Weight':
      return 'kg'
    case 'Height':
      return 'cm'
    case 'Age':
      return 'yrs'
  }
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => {

  const unit = getUnitByLabel(label)

  return (
    <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-1'>
      <span className='tw-text-gray-20 tw-text-xxs'>{label}</span>
      <span className='tw-text-black tw-font-medium'>{value} {unit}</span>
    </div>
  )
}

const profileAvatarUrl = '/images/user/user-01.png'

const Profile: React.FC<ProfileProps> = ({ fullname, level, number, weight, height, age }) => {
  const router = useRouter()

  const user = useSelector(selectUser)

  const onLogout = () => {
    localStorage.removeItem("access_token")
    router.push('/signin')
  }

  const [isUserLoaded, setIsUserLoaded] = useState(() => !!(user && user.firstName !== ''))

  useEffect(() => {
    setIsUserLoaded(!!(user && user.firstName !== ''))
  }, [user])

  const onClickEllipsis = (menu: string) => {
    const routerName = menu.toLowerCase()
    router.push(`/${routerName}`)
  }

  return (
    <div className='tw-flex tw-flex-col tw-justify-start tw-gap-5 tw-pb-2 tw-px-1.5'>
      <TitleWithEllipsis
        title='My Profile'
        menus={['Profile']}
        onClick={onClickEllipsis}
      />

      {/* <!-- Profile Overview --> */}
      <div className='tw-flex tw-justify-center tw-items-center tw-gap-4'>
        {!isUserLoaded ? (
          <div className='tw-h-9 tw-w-9 tw-bg-gray-300 tw-animate-pulse tw-rounded-full'></div>
        ) : (user.profilePicture ? (
          <Image
            width={36}
            height={36}
            src={backendHostUrl + user.profilePicture}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            alt='User'
            className='tw-rounded-full'
          />
        ) : (
          <Image
            width={36}
            height={36}
            src={profileAvatarUrl}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            alt='User'
          />
        ))}

        <div>
          <h4 className='tw-text-lg tw-text-black tw-font-medium'>{user.firstName} {user.lastName}</h4>
          {/* TODO: add svg images here */}
          <div className='tw-flex tw-justify-start tw-items-center tw-gap-1 tw-text-gray-20 tw-text-xs'>
            <p>{level}</p>
            <span className='tw-w-1 tw-h-1 tw-rounded-full tw-bg-gray-20'></span>
            <p>{number.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* <!-- Profile Detail --> */}
      <div className='tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-3 tw-rounded-20 tw-bg-blue-subtle'>
        <ProfileDetail label='Weight' value={weight} />
        <ProfileDetail label='Height' value={height} />
        <ProfileDetail label='Age' value={age} />
      </div>
    </div>
  )
}

export default Profile
