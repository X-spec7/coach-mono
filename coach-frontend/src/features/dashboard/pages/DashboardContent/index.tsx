import React from 'react'
import Link from 'next/link'

import ClassCard from './ClassCard'
import ProgressPanel from './ProgressPanel'
import MealPlan from './MealPlan'
import { classDummyData } from '@/dev/dummy-data'

const dashboardClassDummyData = classDummyData.length > 3 ? classDummyData.slice(0, 2) : classDummyData

const DashboardContent = () => {

  return (
    <div className='flex gap-4 h-full mt-4'>
      <div className='flex flex-col flex-1 h-full'>

        {/* <-- Calorie Heart Rate Steps Chart Part --> */}
        <div className='flex justify-between items-center gap-4 w-full'>
          <div className='flex flex-1 justify-center items-center h-56 border-red-30 border rounded-4xl bg-white text-2xl text-black font-semibold'>Calories Chart</div>
          <div className='flex flex-1 justify-center items-center h-56 border-red-30 border rounded-4xl bg-white text-2xl text-black font-semibold'>Heart Rate Chart</div>
          <div className='flex flex-1 justify-center items-center h-56 border-red-30 border rounded-4xl bg-white text-2xl text-black font-semibold'>Steps Chart</div>
        </div>

        {/* <-- Activity Chart Part --> */}
        <div className='flex justify-center items-center h-70 rounded-4xl bg-white mt-4 border-red-30 border'>
          <p className='text-2xl text-black font-semibold'>Activity Chart</p>
        </div>

        {/* <-- My Classes Part --> */}
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center py-[6px]'>
            <h3 className='text-base text-black font-medium'> My Classes</h3>
            <Link href="#" className='text-gray-30 text-xs'>
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

      <div className='flex flex-col gap-4 w-65 h-full'>
        <ProgressPanel />
        <MealPlan />
      </div>
    </div>
  )
}

export default DashboardContent
