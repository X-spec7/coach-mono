'use client'

import React from 'react'
import ReactApexChart from 'react-apexcharts'

import { ClassCategory } from '@/shared/types'

import { radialApexChartOptions } from './chart'

const totalProgress = 75

interface TrainingProgressComponentProps {
  category: ClassCategory
  sessionName: string
  totalSessionCount: number
  completedSessionCount: number
  progress: number
}

const getColorByCategory = (category: ClassCategory): string => {
  switch (category) {
    case 'Strength':
      return 'tw-bg-yellow'
    case 'Cardio':
      return 'tw-bg-blue'
    case 'Core':
      return 'tw-bg-red'
    case 'Flexibility':
      return 'tw-bg-green'
    default:
      return 'tw-bg-blue'
  }
}

const trainingProgressDummyData: TrainingProgressComponentProps[] = [
  {
    category: 'Cardio',
    sessionName: 'HIIT Session',
    totalSessionCount: 6,
    completedSessionCount: 5,
    progress: 85,
  },
  {
    category: 'Strength',
    sessionName: 'full-body strength circuit',
    totalSessionCount: 5,
    completedSessionCount: 4,
    progress: 75,
  },
  {
    category: 'Flexibility',
    sessionName: 'Yoga Sessions',
    totalSessionCount: 4,
    completedSessionCount: 3,
    progress: 65,
  }
]

const TrainingProgressComponent: React.FC<TrainingProgressComponentProps> = ({category, sessionName, totalSessionCount, completedSessionCount, progress}) => {

  const color = getColorByCategory(category)

  return (
    <div className='tw-w-full'>
      <div className='tw-flex tw-justify-between tw-items-start'>
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-2'>
          <span className={`tw-w-3 tw-h-3 tw-rounded-full ${color}`}></span>
          <div className='tw-flex tw-flex-col tw-justify-start tw-items-start tw-gap-[6px]'>
            <h3>{category} Training</h3>
          </div>
        </div>

        <p className='tw-text-black tw-font-medium'>{progress}%</p>
      </div>

      <p className='tw-text-gray-20 tw-text-xs tw-mt-[6px]'>
        {completedSessionCount}/{totalSessionCount} sets of {sessionName}
      </p>
    </div>
  )
}

const ProgressPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-flex-1 tw-items-center tw-h-[520px] tw-bg-white tw-rounded-20 tw-px-4 tw-pt-4 tw-pb-5'>
      <div className='tw-flex tw-justify-between tw-w-full tw-items-center tw-mb-4'>
        <h3 className='tw-text-black tw-text-base tw-font-medium'>Progress</h3>
        {/* TODO: should be replaced with dropdown button */}
        <div className='tw-flex tw-justify-center tw-items-center tw-w-22 tw-h-8 tw-rounded-20 tw-bg-green tw-text-center tw-text-gray-30 tw-font-medium tw-text-xxs'>This Week</div>
      </div>

      <div className='tw-h-12 tw-w-full'>
        <p className='tw-text-2xl tw-text-black tw-font-medium'>{totalProgress}%</p>
        <p className='tw-text-xxs tw-text-gray-20'>Goal Completion</p>
      </div>

      <ReactApexChart
        options={radialApexChartOptions}
        series={[trainingProgressDummyData[0].progress, trainingProgressDummyData[1].progress, trainingProgressDummyData[2].progress]}
        type="radialBar"
        width={192}
        height={192}
      />
      
      {/* <div className='tw-flex tw-items-center tw-text-center tw-w-48 tw-h-48 tw-rounded-full tw-border-red-30 tw-border tw-mb-[6px]'>Progress Circle Component</div> */}

      <div className='tw-flex tw-flex-col tw-items-center tw-gap-4 tw-w-full'>
        {
          trainingProgressDummyData.map((progressData, index) => (
            <TrainingProgressComponent
              key={index}
              category={progressData.category}
              sessionName={progressData.sessionName}
              totalSessionCount={progressData.totalSessionCount}
              completedSessionCount={progressData.completedSessionCount}
              progress={progressData.progress}
            />
          ))
        }
      </div>

    </div>
  )
}

export default ProgressPanel
