import React from 'react'

import { ILayoutProps } from '@/shared/types/common.type'

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen'>
      {/* Background image with a blur layer */}
      <div className="tw-absolute inset-0 tw-bg-cover tw-bg-center blur-md" style={{ backgroundImage: 'url("images/background/2.jpg")' }} />
      
      {/* Content container */}
      <div className="tw-relative tw-z-10 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
        {children}
      </div>
    </div>
  )
}

export default Layout
