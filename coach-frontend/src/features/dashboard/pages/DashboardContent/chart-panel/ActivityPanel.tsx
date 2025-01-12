import React from 'react'

import { ActivityColumnChart } from '../chart'

const ActivityPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-w-full tw-p-4 tw-pt-8'>
      <div className='tw-flex tw-justify-start tw-items-center'>
        <h3 className='tw-text-black tw-font-medium tw-text-base tw-px-4'>Activity</h3>
        {/* <div className='tw-flex tw-justify-center tw-items-center tw-w-38 tw-h-7.5 tw-bg-gray-bg tw-rounded-xl'>Date Picker</div> */}
      </div>

      <ActivityColumnChart />
    </div>
  )
}

export default ActivityPanel
