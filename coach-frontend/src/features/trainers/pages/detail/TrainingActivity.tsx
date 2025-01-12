import SplineChart from './SplineChart'
import { CalendarSvg, CaretRightSvg } from '@/shared/components/Svg'

const TrainingActivity = () => {
  return (
    <div className='tw-flex tw-flex-col tw-p-4 tw-gap-4 tw-h-90 tw-bg-white tw-rounded-4xl'>
      <div className='tw-flex tw-justify-between tw-items-center'>
        <h3 className='tw-text-black tw-font-medium'>Training Activity</h3>
        <button className='tw-flex tw-justify-between tw-items-center tw-w-38 tw-h-8 tw-py-2.5 tw-px-1.5 tw-rounded-20 tw-bg-green'>
          <CalendarSvg width='16' height='16' color='#4D5260' />
          <p className='tw-text-gray-30 tw-text-xxs tw-font-medium'>1 - 8 August 2028</p>
          <CaretRightSvg width='18' height='18' color='#4D5260' />
        </button>
      </div>

      <SplineChart />
    </div>
  )
}

export default TrainingActivity
