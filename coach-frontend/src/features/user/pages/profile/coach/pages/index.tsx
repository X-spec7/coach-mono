'use client'

import { Header, Footer } from '@/shared/Layouts'
import CoachProfileContent from './content/CoachProfileContent'
import { useSelector } from 'react-redux'
import { selectUser } from '@/features/user/slice/userSlice'

const CoachProfilePage = () => {

  const user = useSelector(selectUser)
  
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-gap-4 tw-w-full tw-h-full tw-p-4'>
      <Header
        title={`Hello, ${user.firstName} ${user.lastName}!  👋`}
        description='Let’s complete your wonderful today!'
      />

      <CoachProfileContent />

      <Footer />
    </div>
  )
}

export default CoachProfilePage
