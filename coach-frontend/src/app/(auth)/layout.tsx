import React from 'react'

import { LayoutProps } from '@/types/common'

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      {/* Background image with a blur layer */}
      <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: 'url("images/")' }} />
      
      {/* Content container */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default Layout
