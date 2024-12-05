import React from 'react'

import { Tick, AddButton } from '@/components/shared'
import { Schedule } from '@/types/schedule'
import { scheduleDummyData } from '@/dummy-data'
import { formatTimeTo12Hour } from '@/utils'
import KebabMenu from '@/components/shared/Menu/KebabMenu'

const scheduleOverviewDummyData = scheduleDummyData.length > 3 ? scheduleDummyData.slice(0, 2) : scheduleDummyData

interface ScheduleOverviewProps extends Omit<Schedule, 'tutorName' | 'day'>{}

const ScheduleOverview:React.FC<ScheduleOverviewProps> = ({title, description, time, completed}) => {
  console.log('time: ', time)
  console.log('now: ', Date.now())

  const timeIn12HourFormat = formatTimeTo12Hour(time)

  return (
    <div className='flex justify-between items-center pl-1'>
      <Tick ticked={completed}/>
      <div className='flex flex-col justify-center w-54'>
        <p className='text-gray-20 text-xxs'>{timeIn12HourFormat}</p>
        <h4 className='text-black font-medium'>{title}</h4>
        <p className='text-gray-20 text-xs max-w-54 break-words'>{description}</p>
      </div>
      <KebabMenu />
    </div>
  )
}

const MySchedule = () => {
  return (
    <div className='px-1.5'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-black font-medium'>My Schedule</h3>
          <p className='text-[#868F9B] text-xs font-medium'>Thursday, 13 Aug 28</p>
        </div>
        <AddButton />
      </div>

      <div className='flex flex-col gap-5 mt-7'>
        {
          scheduleOverviewDummyData.map((scheduleData, index) => (
            <ScheduleOverview
              key={index}
              title={scheduleData.title}
              time={scheduleData.time}
              description={scheduleData.description}
              completed={scheduleData.completed}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MySchedule
