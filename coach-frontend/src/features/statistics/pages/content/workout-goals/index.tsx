import { HeartBeatSvg } from '@/shared/components/Svg'
import { TitleWithEllipsis } from '@/shared/components'

import RadialProgressBar from './RadialProgress'

const WorkoutGoalsPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-gap-5 tw-px-4 tw-py-5 tw-xl:tw-py-7 tw-bg-yellow tw-rounded-20'>
      <div className='tw-flex tw-items-center tw-gap-3 tw-w-full'>
        <HeartBeatSvg width='20' height='20' color='#4D5260' />
        <TitleWithEllipsis title='Workout Goals' />
      </div>

      {/* Radial Progress Bar */}
      <div className='tw-relative tw-w-48 tw-h-48 tw-xl:w-72 tw-xl:tw-h-72'>
        <RadialProgressBar />
        <div className='tw-absolute tw-left-1/2 tw-top-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-z-99'>
          <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2'>
            <p className='tw-text-black tw-font-bold tw-text-3xl'>75 %</p>
            <p className='tw-text-gray-30 tw-text-xs'>14/20 Completed</p>
          </div>
        </div>
      </div>

      <p className='tw-flex tw-justify-center tw-items-center break-words tw-text-gray-30 tw-text-xs'>Almost there! Keep pushing to reach your goal!</p>
    </div>
  )
}

export default WorkoutGoalsPanel
