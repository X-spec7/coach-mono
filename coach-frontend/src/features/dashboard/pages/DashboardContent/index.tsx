import React from 'react'
import Link from 'next/link'

import ClassCard from './ClassCard'
import ProgressPanel from './ProgressPanel'
import MealPlan from './MealPlan'
import { ActivityPanel, FootStepsPanel, HeartRatePanel, CaloriesPanel } from './chart-panel'
import { classDummyData } from '@/dev/dummy-data'

const dashboardClassDummyData = classDummyData.length > 3 ? classDummyData.slice(0, 2) : classDummyData

const DashboardContent = () => {

  return (
    <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-h-full tw-mt-4'>

      <div className='tw-flex tw-flex-col tw-flex-1 tw-h-full'>
        {/* <-- Calorie Heart Rate Steps Chart Part --> */}
        <div className='tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 tw-sm:tw-grid-cols-3 tw-justify-between tw-items-center tw-gap-4 tw-w-full'>
          <div className='tw-flex tw-justify-center tw-items-center tw-h-56 tw-rounded-4xl tw-bg-white'>
            <CaloriesPanel />
          </div>

          <div className='tw-flex tw-justify-center tw-items-center tw-h-56 tw-rounded-4xl tw-bg-white'>
            <HeartRatePanel />
          </div>

          <div className='tw-flex tw-justify-center tw-items-center tw-h-56 tw-rounded-4xl tw-bg-white'>
            <FootStepsPanel />
          </div>
        </div>

        {/* <-- Activity Chart Part --> */}
        <div className='tw-flex tw-justify-center tw-items-center tw-h-70 tw-rounded-4xl tw-bg-yellow-50 xs:tw-bg-red-10 tw-sm:tw-bg-gray-bg md:tw-bg-white tw-mt-4'>
          <ActivityPanel />
        </div>

        {/* <-- My Classes Part --> */}
        <div className='tw-flex tw-flex-col tw-gap-4'>
          <div className='tw-flex tw-justify-between tw-items-center tw-py-[6px]'>
            <h3 className='tw-text-base tw-text-black tw-font-medium'> My Classes</h3>
            <Link href="#" className='tw-text-gray-30 tw-text-xs'>
              See All
            </Link>
          </div>
          {
            dashboardClassDummyData.map((classData, index) => (
              <ClassCard
                key={index}
                category={classData.category}
                title={classData.title}
                tutor={classData.tutor}
                videoNumber={classData.videoNumber}
                sessionRange={classData.sessionRange}
                level={classData.level}
              />
            ))
          }
        </div>
      </div>

      <div className='tw-flex tw-flex-col xs:tw-flex-row md:tw-flex-col tw-max-md:tw-justify-center tw-max-md:tw-gap-4 tw-max-md:tw-w-full tw-gap-4 tw-w-65 tw-h-full'>
        <ProgressPanel />
        <MealPlan />
      </div>
    </div>
  )
}

export default DashboardContent
