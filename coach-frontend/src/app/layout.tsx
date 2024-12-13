'use client'

import { Provider } from 'react-redux'
import { createStore } from '@/redux/store'

import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.min.css'

import '../shared/css/style.css'
import '../shared/css/satoshi.css'

import { LayoutProps } from '@/shared/types/common'

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const store = createStore()

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <>
          <Provider store={store}>{children}</Provider>
        </>
      </body>
    </html>
  )
}

export default RootLayout
