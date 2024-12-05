import React from 'react'

import { LayoutProps } from '@/types/common'

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      {children}
    </div>
  )
}

export default Layout
