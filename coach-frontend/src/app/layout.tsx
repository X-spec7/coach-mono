'use client'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.min.css'
import '@/css/satoshi.css'
import '@/css/style.css'
import React, { useEffect, useState } from 'react'
import Loader from '@/components/shared/Loader'
import { LayoutProps } from '@/types/common'

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <>
          {
            loading 
            ? <Loader />
            : <>{children}</>
          }
        </>
      </body>
    </html>
  )
}

export default RootLayout