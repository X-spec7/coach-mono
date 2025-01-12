'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { setSidebarOpen, selectIsSidebarOpen } from '@/redux/globalAppSlice'
import { useSelector, useDispatch } from 'react-redux'

import SidebarItem from '@/shared/Layouts/Sidebar/SidebarItem'
import { ClickOutside } from '@/shared/components'
import useLocalStorage from '@/shared/hooks/useLocalStorage'

import { LogoutSvg } from './Svg'

const menuGroups = [
  {
    name: 'MENU',
    menuItems: [
      {
        label: 'Dashboard',
        route: '/dashboard',
      },
      {
        label: 'Statistics',
        route: '/statistics',
      },
      {
        label: 'Exercises',
        route: '/exercises',
      },
      {
        label: 'Schedule',
        route: '/schedule',
      },
      {
        label: 'Classes',
        route: '/classes',
      },
      {
        label: 'Trainers',
        route: '/trainers',
      },
      {
        label: 'Messages',
        route: '/messages',
      },
      {
        label: 'Meal Plan',
        route: '/meal-plan',
      },
    ],
  },
]

const Sidebar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  const handleToggleSidebar = () => {
    dispatch(setSidebarOpen(false))
  }
  
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'dashboard')

  const onLogout = () => {
    localStorage.removeItem("access_token")
    router.push('/signin')
  }

  return (
    <ClickOutside onClick={() => handleToggleSidebar()}>
      <aside
        className={`
          tw-max-lg:fixed tw-max-lg:tw-top-0 tw-max-lg:tw-left-0 tw-max-lg:tw-z-99999
          tw-flex tw-flex-col tw-justify-between
          tw-h-[calc(100%-32px)] tw-box-border tw-my-4 tw-ml-4 tw-px-4 tw-py-8 tw-w-55 tw-lg:translate-x-0
          tw-bg-white tw-rounded-4xl tw-max-lg:tw-border-stroke tw-max-lg:tw-border-2
          tw-duration-200 tw-ease-linear ${ isSidebarOpen ? "tw--translate-x-2" : "tw--translate-x-60"}`}
      >
        <div>
          {/* <!-- SIDEBAR HEADER --> */}
          <div className='tw-flex tw-items-center tw-gap-2 tw-pl-3'>
            <div className='tw-bg-red-30 tw-w-7 tw-h-7 tw-rounded-full'></div>
            <Link href='/dashboard'>
              <h2 className='tw-text-black tw-text-2xl tw-font-semibold'>
                COA-CH
              </h2>
            </Link>

            <button
              onClick={() => handleToggleSidebar()}
              aria-controls='sidebar'
              className='tw-block tw-lg:tw-hidden'
            >
              <svg
                className='tw-fill-current'
                width='20'
                height='18'
                viewBox='0 0 20 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z'
                  fill=''
                />
              </svg>
            </button>
          </div>

          {/* <!-- SIDEBAR MENU --> */}
          <div className='no-scrollbar tw-flex tw-flex-col tw-overflow-y-auto tw-duration-300 tw-ease-linear'>
            {/* <!-- Sidebar Menu --> */}
            <nav className='tw-mt-5 tw-lg:tw-mt-6'>
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <ul className='tw-mb-8 tw-flex tw-flex-col tw-gap-2'>
                    {group.menuItems.map((menuItem, menuIndex) => (
                      <SidebarItem
                        key={menuIndex}
                        item={menuItem}
                        pageName={pageName}
                        setPageName={setPageName}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            {/* <!-- Sidebar Menu --> */}
          </div>
        </div>
        
        <div>
          <div className='tw-lg:tw-flex tw-lg:tw-flex-col tw-gap-4 tw-p-4 tw-bg-blue tw-rounded-20 tw-hidden'>
            <div className='tw-h-8'>
              <div className='tw-bg-red-30 tw-w-8 tw-h-8 tw-rounded-full'></div>
            </div>

            <p className='tw-text-black tw-text-2xl tw-font-medium'>
              Track.<br />Analyze.<br />Succeed.
            </p>

            <p>Monitor progress, set goals, and achieve results faster!</p>

            <div className='tw-flex tw-justify-center tw-items-center tw-py-3 tw-bg-green tw-rounded-20 tw-text-black tw-text-xs tw-font-medium'>AI integrated</div>
          </div>

          <button
            className='tw-flex tw-items-center tw-gap-3 tw-pl-4 tw-py-2.5 tw-mt-6 tw-transition-colors tw-duration-200'
            onClick={onLogout}
          >
            <LogoutSvg />
            <p className='tw-text-gray-20 tw-hover:tw-text-black tw-text-sm tw-font-medium'>Logout</p>
          </button>
        </div>
      </aside>
    </ClickOutside>
  )
}

export default Sidebar
