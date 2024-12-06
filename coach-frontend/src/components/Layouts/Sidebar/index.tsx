'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SidebarItem from '@/components/Layouts/Sidebar/SidebarItem'
import { ClickOutside } from '@/components/shared'
import useLocalStorage from '@/hooks/useLocalStorage'

import { LogoutSvg } from './Svg'
import { BarbellSvg, BoulFoodSvg, CalendarSvg, ChartBarSvg, ChatTeardropDotsSvg, IdentificationBadgeSvg, MonitorSvg, SquaresFourSvg } from '@/components/shared/Svg'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const onLogout = () => {
  // handle logout
}

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

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'dashboard')

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`flex flex-col justify-between w-55 h-[calc(100%-32px)] box-border my-4 ml-4 px-4 py-8 bg-white rounded-4xl overflow-y-hidden duration-300 ease-linear lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* <!-- SIDEBAR HEADER --> */}
          <div className='flex items-center gap-2 pl-3'>
            <div className='bg-red-30 w-7 h-7 rounded-full'></div>
            <Link href='/'>
              <h2 className='text-black text-2xl font-semibold'>
                COA-CH
              </h2>
            </Link>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls='sidebar'
              className='block lg:hidden'
            >
              <svg
                className='fill-current'
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
          <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
            {/* <!-- Sidebar Menu --> */}
            <nav className='mt-5 lg:mt-6'>
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <ul className='mb-8 flex flex-col gap-2'>
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
          <div className='flex flex-col gap-4 p-4 bg-blue rounded-20'>
            <div className='h-8'>
              <div className='bg-red-30 w-8 h-8 rounded-full'></div>
            </div>

            <p className='text-black text-2xl font-medium'>
              Track.<br />Analyze.<br />Succeed.
            </p>

            <p>Monitor progress, set goals, and achieve results faster!</p>

            <div className='flex justify-center items-center py-3 bg-green rounded-20 text-black text-xs font-medium'>AI integrated</div>
          </div>

          <button
            className='flex items-center gap-3 pl-4 py-2.5 mt-6 transition-colors duration-200'
            onClick={onLogout}
          >
            <LogoutSvg />
            <p className='text-gray-20 hover:text-black text-sm font-medium'>Logout</p>
          </button>
        </div>
      </aside>
    </ClickOutside>
  )
}

export default Sidebar
