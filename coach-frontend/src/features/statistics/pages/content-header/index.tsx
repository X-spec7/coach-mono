import { SearchField } from '@/shared/components'
import { TimePeriodSelectButton } from '@/shared/components/Button'
import React from 'react'

const timePeriods = ['This Week', 'Today', 'This Month']

interface WorkoutTime {
  hour: number
  minute: number
}

interface ContentHeaderProps {
  workoutTime: WorkoutTime
  totalWorkouts: number
}

const ContentHeader: React.FC<ContentHeaderProps> = ({workoutTime, totalWorkouts}) => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-h-9.5'>
      <div className='tw-flex tw-justify-start tw-items-center tw-text-gray-20 tw-rounded-20'>
        <p className='tw-text-xxs leading-4'>Workout<br />Time</p>

        <div className='tw-bg-gray-bg ml-5 mr-16 tw-px-4 tw-py-1 tw-rounded-20'>
          <div className=' tw-flex tw-justify-start tw-gap-2 tw-items-end'>
            <p className='tw-text-black tw-text-xl tw-font-medium'>{workoutTime.hour}</p>
            <p className='tw-text-xs tw-pb-1'>Hours</p>
            <p className='tw-text-black tw-text-xl tw-font-medium'>{workoutTime.minute}</p>
            <p className='tw-text-xs tw-pb-1'>Minutes</p>
          </div>
        </div>

        <p className='tw-text-xxs leading-4'>Total <br /> Workout</p>

        <div className='tw-bg-gray-bg ml-3 tw-px-4 tw-py-1 tw-rounded-20'>
          <div className='tw-flex tw-justify-start tw-gap-2 tw-items-end'>
            <p className='tw-text-black tw-text-xl tw-font-medium'>{totalWorkouts}</p>
            <p className='tw-text-xs tw-pb-1'>Exercises</p>
          </div>
        </div>

      </div>

      <div className='tw-flex tw-justify-end tw-gap-2 tw-items-center'>
        <SearchField width="tw-w-67" height="tw-h-9" placeholder="Search anything" />
        <TimePeriodSelectButton options={timePeriods} />
      </div>
    </div>
  )
}

export default ContentHeader
