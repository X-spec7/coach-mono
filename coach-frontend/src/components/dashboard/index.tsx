'use client'

import React, { useState } from 'react'
import { Header } from '../Layouts'

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
        <div className='h-full'></div>
      </div>
      <div className='w-85 bg-white rounded-4xl'>

      </div>
    </div>
  )
}

export default Dashboard
