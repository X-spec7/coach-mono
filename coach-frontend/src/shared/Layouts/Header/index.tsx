'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import DropdownUser from './DropdownUser'
import DropdownNotification from './DropdownNotification'
import { SearchField } from '@/shared/components'
import { BackButton } from '@/shared/components/Button'
import { toggleSidebar, selectIsSidebarOpen } from '@/redux/globalAppSlice'

interface HeaderProps {
  isDashboard?: boolean
  isDetailPage?: boolean
  title: string
  description: string
}

const Header = (props: HeaderProps) => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  const dispatch = useDispatch()
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])
  
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <header className='tw-flex tw-w-full'>
      <div className='tw-flex tw-flex-grow tw-items-center tw-justify-between'>
        <div className='tw-flex tw-items-center tw-gap-2 tw-sm:tw-gap-4 tw-lg:tw-hidden'>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls='sidebar'
            onClick={(e) => {
              e.stopPropagation()
              handleToggleSidebar()
            }}
            className='tw-z-999 tw-block tw-rounded-sm tw-border tw-border-stroke tw-bg-white tw-p-1.5 tw-shadow-sm'
          >
            <span className='tw-relative tw-block tw-h-5.5 tw-w-5.5 tw-cursor-pointer'>
              <span className='tw-du-block tw-absolute tw-right-0 tw-h-full tw-w-full'>
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-[0] tw-duration-200 tw-ease-in-out ${
                    !isSidebarOpen && '!tw-w-full tw-delay-300'
                  }`}
                ></span>
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-150 tw-duration-200 tw-ease-in-out ${
                    !isSidebarOpen && 'tw-delay-400 !tw-w-full'
                  }`}
                ></span>
                <span
                  className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-200 tw-duration-200 tw-ease-in-out ${
                    !isSidebarOpen && '!tw-w-full tw-delay-500'
                  }`}
                ></span>
              </span>
              <span className='tw-absolute tw-right-0 tw-h-full tw-w-full tw-rotate-45'>
                <span
                  className={`tw-absolute tw-left-2.5 tw-top-0 tw-block tw-h-full tw-w-0.5 tw-rounded-sm tw-bg-black tw-delay-300 tw-duration-200 tw-ease-in-out ${
                    !isSidebarOpen && '!tw-h-0 !tw-delay-[0]'
                  }`}
                ></span>
                <span
                  className={`tw-delay-400 tw-absolute tw-left-0 tw-top-2.5 tw-block tw-h-0.5 tw-w-full tw-rounded-sm tw-bg-black tw-duration-200 tw-ease-in-out ${
                    !isSidebarOpen && '!tw-h-0 !tw-delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          {/* LOGO */}
          <Link className='tw-block tw-flex-shrink-0 tw-lg:tw-hidden' href='/dashboard'>
            <div className='tw-bg-red-30 tw-w-7 tw-h-7 tw-rounded-full'></div>
          </Link>
        </div>

        <div className='tw-flex tw-flex-col tw-justify-between tw-items-start tw-max-md:tw-hidden'>
          {
            props.isDetailPage && (
              <BackButton buttonTitle={props.description} handleBack={handleBack} />
            )
          }
          <h3 className='tw-text-black tw-text-2xl'>{props.title}</h3>
          {
            !props.isDetailPage && (
              <p className='tw-text-gray-20 tw-text-xs'>{props.description}</p>
            )
          }
        </div>

        <div className='tw-flex tw-flex-center tw-gap-2 tw-p-2 tw-bg-white tw-rounded-4xl'>
          {
            props.isDashboard && (
              <div className='tw-max-md:tw-hidden'>
                <SearchField width='tw-w-67' height='tw-h-9' placeholder='Search anything'/>
              </div>
            )
          }
          <DropdownNotification />
          {
            !props.isDashboard && (
              <DropdownUser />
            )
          }
          {
            props.isDashboard && (
              <div className='md:tw-hidden'>
                <DropdownUser />
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header
