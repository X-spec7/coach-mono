import React from 'react'

import { FootPrintSvg } from '@/shared/components/Svg'
import { FootstepChart } from '../chart'

const todayFootprintCount = 1050;
const yesterdayFootprintCount = 978;

const FootStepsPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-p-4 tw-xl:tw-p-6'>
      <div className='tw-flex tw-justify-start tw-items-center tw-gap-2'>
        <FootPrintSvg width='16' height='16' color='#212738' />
        <h3 className='tw-text-gray-30 tw-text-sm tw-font-medium'>Steps</h3>
      </div>

      <FootstepChart />

      <div className='tw-flex tw-items-end tw-justify-start tw-gap-0.5 tw-mb-2'>
        <p className='tw-text-gray-30 tw-text-xl tw-font-bold'>{todayFootprintCount.toLocaleString()}</p>
        <p className='tw-text-gray-30 tw-text-sm tw-font-medium'>steps</p>
      </div>

      <div className='tw-flex tw-justify-start tw-items-center tw-gap-1.5 tw-text-gray-20 tw-text-xxs2'>
        <label>Yesterday:</label>
        <p className='tw-font-medium'>{yesterdayFootprintCount.toLocaleString()} steps</p>
      </div>
    </div>
  )
}

export default FootStepsPanel
