'use client'

import { selectUser } from '@/features/user/slice/userSlice'

import { Header, Footer } from '../../../shared/Layouts'
import RightSideBar from './RightSideBar'
import DashboardContent from './DashboardContent'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector(selectUser)
  
  return (
    <div className="tw-flex tw-justify-between tw-gap-4 tw-p-4 tw-h-full">
      <div className='tw-flex tw-flex-col tw-flex-1'>
        <Header
          isDashboard
          title={`Hello, ${user.firstName} ${user.lastName}!  👋`}
          description='Welcome and Let’s do some workout today!'
        />

        <DashboardContent />
        
        <Footer />
      </div>
      <div className='tw-max-2xl:tw-hidden'>
        <RightSideBar />
      </div>
    </div>
  )
}

export default Dashboard
