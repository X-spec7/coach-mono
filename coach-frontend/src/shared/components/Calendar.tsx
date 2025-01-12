'use client'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { CaretLeftSvg, CaretRightSvg } from '@/shared/components/Svg'
import { capitalizeFirstLetter } from '@/shared/utils'
import { useState } from 'react'

function Calendar() {
  const today = startOfToday()
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'))
  let firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date())

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  })

  const getPrevMonth = () => {
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 })
    setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'))
  }

  const getNextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 })
    setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'))
  }

  return (
    <div className='tw-w-full tw-flex tw-items-center tw-justify-center tw-bg-white'>
      <div className='tw-w-full'>
        <div className='tw-flex tw-items-center tw-justify-between tw-mb-4 tw-px-1'>
          <p className='tw-font-medium tw-text-black'>
            {format(firstDayOfMonth, 'MMMM yyyy')}
          </p>
          <div className='tw-flex tw-items-center tw-justify-end tw-gap-2'>
            <button
              className='tw-flex tw-justify-center tw-items-center tw-w-7.5 tw-h-7.5 tw-bg-gray-bg tw-rounded-full'
              onClick={() => getPrevMonth()}
            >
              <CaretLeftSvg width='18' height='18' color='#212738' />
            </button>
            <button
              className='tw-flex tw-justify-center tw-items-center tw-w-7.5 tw-h-7.5 tw-bg-gray-bg tw-rounded-full'
              onClick={() => getNextMonth()}
            >
              <CaretRightSvg width='18' height='18' color='#212738' />
            </button>
          </div>
        </div>

        <div className='tw-grid tw-grid-cols-7 tw-place-items-center'>
          {days.map((day, idx) => {
            return (
              <div key={idx} className='tw-text-gray-20 tw-font-medium tw-h-10'>
                {capitalizeFirstLetter(day)}
              </div>
            )
          })}
        </div>
        <div className='tw-grid tw-grid-cols-7 tw-place-items-center'>
          {daysInMonth.map((day, idx) => {
            return (
              <div key={idx} className='tw-flex tw-justify-center tw-items-center tw-w-11 tw-h-10'>
                <p
                  className={`tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-font-semibold tw-h-8.5 tw-w-8.5 tw-rounded-full ${
                    isSameMonth(day, firstDayOfMonth) ? 'tw-text-gray-30' : 'tw-text-gray-10'
                  } ${!isToday(day) && 'tw-hover:tw-bg-blue'} ${
                    isToday(day) && 'tw-bg-yellow tw-text-black'
                  }`}
                >
                  {format(day, 'd')}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar
