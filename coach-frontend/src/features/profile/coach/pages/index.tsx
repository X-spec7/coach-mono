'use client'

import { useState } from 'react'

import { Header, Footer } from '@/shared/Layouts'
import CoachProfileContent from './content/CoachProfileContent'

const CoachProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex flex-col items-center gap-4 w-full h-full p-4'>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        title='Hello, Mario Rossi!  👋'
        description='Let’s complete your wonderful today!'
      />

      <CoachProfileContent />

      <Footer />
    </div>
  )
}

export default CoachProfilePage
