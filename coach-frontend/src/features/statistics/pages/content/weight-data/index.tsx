import { TitleWithEllipsis } from '@/shared/components'
import WeightDataAreaChart from './WeightDataAreaChart'

const WeightDataPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-justify-start tw-gap-4 tw-items-center tw-border-stroke tw-border tw-rounded-20 tw-p-4 tw-xl:tw-py-8'>
      <TitleWithEllipsis title='Weight Data' />

      {/* <!-- DETAIL --> */}
      <div className='tw-flex tw-justify-between tw-items-end tw-w-full tw-text-xs tw-text-gray-20 tw-font-medium'>
        <p>Current Weight</p>
        <div>
          <span className='tw-text-black tw-text-2xl tw-font-medium tw-mr-1'>72</span>
          <span>kg</span>
        </div>
      </div>
      <div className='tw-flex tw-justify-between tw-items-end tw-w-full tw-text-xs tw-text-gray-20 tw-font-medium'>
        <p>Weight Goal</p>
        <div>
          <span className='tw-text-black tw-text-2xl tw-font-medium tw-mr-1'>65</span>
          <span>kg</span>
        </div>
      </div>
      <div className='tw-flex tw-justify-between tw-items-end tw-w-full tw-text-xs tw-text-gray-20 tw-font-medium'>
        <p>Progress</p>
        <div>
          <span className='tw-text-black tw-text-2xl tw-font-medium tw-mr-1'>18</span>
          <span>%</span>
        </div>
      </div>

      {/* <!-- CHART GRAPH --> */}
      <div className='tw-flex tw-justify-center tw-items-center tw-w-65 tw-h-65 tw-xl:tw-w-full tw-xl:tw-h-80'>
        <WeightDataAreaChart />
      </div>
    </div>
  )
}

export default WeightDataPanel
