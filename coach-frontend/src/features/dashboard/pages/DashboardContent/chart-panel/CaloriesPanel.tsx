import { FireSvg } from '@/shared/components/Svg'

import CaloriesChart from '../chart/CaloriesChart'

const calorie = 110
const remainingCalorie = 108

const CaloriesPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-5.5 tw-w-full tw-p-4 tw-xl:tw-p-6'>
      <div className='tw-flex tw-items-center tw-gap-2'>
        <FireSvg width='16' height='16' color='#4D5260' />
        <h3 className='tw-text-gray-30 tw-text-sm tw-font-medium'>Calories</h3>
      </div>

      {/* TODO: replace with heart beat graph */}

      <div className='tw-flex tw-justify-center tw-items-center tw-w-full tw-h-22.5 tw-rounded-20'>
        <CaloriesChart degree={1} progressDegree={65} />
      </div>

      <div className='tw-flex tw-flex-col tw-gap-1'>
        <div className='tw-flex tw-items-end tw-justify-start tw-gap-0.5 tw-text-gray-30'>
          <p className='tw-text-xl tw-font-bold'>{calorie}</p>
          <p className='tw-text-sm tw-font-medium'>kcal</p>
        </div>

        <div className='tw-flex tw-justify-start tw-items-center tw-gap-1.5 tw-text-gray-20 tw-text-xxs2'>
          <label>Yesterday:</label>
          <p className='tw-font-medium'>{remainingCalorie} kcal</p>
        </div>
      </div>
    </div>
  )
}

export default CaloriesPanel
