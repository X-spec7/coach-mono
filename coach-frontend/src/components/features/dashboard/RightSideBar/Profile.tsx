import React from 'react'
import Image from 'next/image'

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
    <div className='flex flex-col justify-center items-center gap-1'>
      <span className='text-gray-20 text-xxs'>{label}</span>
      <span className='text-black font-medium'>{value} {unit}</span>
    </div>
  )
}

const profileAvatarUrl = '/images/user/user-01.png'

const Profile: React.FC<ProfileProps> = ({fullname, level, number, weight, height, age}) => {
  return (
    <div className='flex flex-col justify-start gap-5 pb-2 px-1.5'>
      {/* <!-- Title --> */}
      <div className='flex justify-between items-center'>
        <h3 className='text-black font-medium'>My Profile</h3>
        {/* TODO: should replace with ellipsis menu */}
        <span>...</span>
      </div>

      {/* <!-- Profile Overview --> */}
      <div className='flex justify-center items-center gap-4'>
        <Image
          width={48}
          height={48}
          src={profileAvatarUrl}
          alt={`${fullname} avatar`}
        />

        <div>
          <h4 className='text-lg text-black font-medium'>{fullname}</h4>
          {/* TODO: add svg images here */}
          <div className='flex justify-start items-center gap-1 text-gray-20 text-xs'>
            <p>{level}</p>
            <span className='w-1 h-1 rounded-full bg-gray-20'></span>
            <p>{number.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* <!-- Profile Detail --> */}
      <div className='flex justify-between items-center px-6 py-3 rounded-20 bg-blue-subtle'>
        <ProfileDetail label='Weight' value={weight} />
        <ProfileDetail label='Height' value={height} />
        <ProfileDetail label='Age' value={age} />
      </div>
    </div>
  )
}

export default Profile
