'use client'

import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '@/redux/store'

import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.min.css'

import '../shared/css/style.css'
import '../shared/css/satoshi.css'


import Loader from '@/shared/components/Loader'
import { LayoutProps } from '@/shared/types/common'

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const store = createStore()

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
            : <Provider store={store}>{children}</Provider>
          }
        </>
      </body>
    </html>
  )
}

export default RootLayout
