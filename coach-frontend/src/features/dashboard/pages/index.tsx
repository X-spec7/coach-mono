'use client'

import React, { useState } from 'react'
import { Header, Footer } from '../../../shared/Layouts'
import RightSideBar from './RightSideBar'
import DashboardContent from './DashboardContent'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex justify-between gap-4 p-4 h-full">
      <div className='flex flex-col flex-1'>
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isDashboard
          title='Hello, Mario Rossi!  👋'
          description='Welcome and Let’s do some workout today!'
        />
        <DashboardContent />
        <Footer />
      </div>
      <RightSideBar />
    </div>
  )
}

export default Dashboard
