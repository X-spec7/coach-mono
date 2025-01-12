import HeartRateChart from '../chart/HeartRateChart'
import { HeartBeatSvg } from '@/shared/components/Svg'

const bpmRateToday = 110
const bpmRateYesterday = 108

const HeartRatePanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-5.5 tw-w-full tw-p-4 tw-xl:tw-p-6'>
      <div className='tw-flex tw-items-center tw-gap-2'>
        <HeartBeatSvg width='16' height='16' color='#4D5260' />
        <h3 className='tw-text-gray-30 tw-text-sm tw-font-medium'>Heart Rate</h3>
      </div>

      {/* TODO: replace with heart beat graph */}
      <div className='tw-flex tw-justify-center tw-items-center tw-w-full tw-h-22.5 tw-px-4 tw-rounded-20'>
        <HeartRateChart />
      </div>

      <div className='tw-flex tw-flex-col tw-gap-1'>
        <div className='tw-flex tw-items-end tw-justify-start tw-gap-0.5 tw-text-gray-30'>
          <p className='tw-text-xl tw-font-bold'>{bpmRateToday}</p>
          <p className='tw-text-sm tw-font-medium'>bpm</p>
        </div>

        <div className='tw-flex tw-justify-start tw-items-center tw-gap-1.5 tw-text-gray-20 tw-text-xxs2'>
          <label>Yesterday:</label>
          <p className='tw-font-medium'>{bpmRateYesterday} bpm</p>
        </div>
      </div>
    </div>
  )
}

export default HeartRatePanel
