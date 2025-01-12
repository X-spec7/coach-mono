import React from 'react'

import { Tick, AddButton } from '@/shared/components'
import { Schedule } from '@/shared/types/schedule.type'
import { scheduleDummyData } from '@/dev/dummy-data'
import { formatTimeTo12Hour } from '@/shared/utils'
import KebabMenu from '@/shared/components/Menu/KebabMenu'

const scheduleOverviewDummyData = scheduleDummyData.length > 3 ? scheduleDummyData.slice(0, 2) : scheduleDummyData

interface ScheduleOverviewProps extends Omit<Schedule, 'tutorName' | 'day'>{}

const ScheduleOverview:React.FC<ScheduleOverviewProps> = ({title, description, time, completed}) => {

  const timeIn12HourFormat = formatTimeTo12Hour(time)

  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-pl-1'>
      <Tick ticked={completed}/>
      <div className='tw-flex tw-flex-col tw-justify-center tw-w-54'>
        <p className='tw-text-gray-20 tw-text-xxs'>{timeIn12HourFormat}</p>
        <h4 className='tw-text-black tw-font-medium'>{title}</h4>
        <p className='tw-text-gray-20 tw-text-xs tw-max-w-54 tw-tw-break-words'>{description}</p>
      </div>
      <KebabMenu />
    </div>
  )
}

const MySchedule = () => {
  return (
    <div className='tw-px-1.5'>
      <div className='tw-flex tw-justify-between tw-items-center'>
        <div>
          <h3 className='tw-text-black tw-font-medium'>My Schedule</h3>
          <p className='tw-text-[#868F9B] tw-text-xs tw-font-medium'>Thursday, 13 Aug 28</p>
        </div>
        <AddButton />
      </div>

      <div className='tw-flex tw-flex-col tw-gap-5 tw-mt-7'>
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
