import React from 'react'
import { TitleWithEllipsis } from '@/shared/components'
import { GoalDetail } from '@/features/statistics/types'

const goalDetailDummyData: GoalDetail[] = [
  {
    title: 'Complete 5K Runs',
    tag: 'Running',
    desc: '25 km (5 runs of 5 km each)',
    percent: 60,
    total: 25,
    value: 15,
    unit: 'km'
  },
  {
    title: 'Weekly Yoga Practice',
    tag: 'Yoga',
    desc: '4 sessions per week',
    percent: 75,
    total: 4,
    value: 3,
    unit: 'sessions'
  },
  {
    title: 'Daily Step Count',
    tag: 'Walking',
    desc: '70,000 steps/week',
    percent: 85,
    total: 70000,
    value: 59500,
    unit: 'steps'
  }
]

const GoalDetailCard: React.FC<GoalDetail> = ({ title, tag, desc, percent, total, value, unit }) => {
  return (
    <div className='tw-flex tw-flex-col tw-justify-start tw-items-center tw-w-full tw-border-stroke tw-border tw-rounded-20 tw-p-4'>
      <h3 className='tw-text-black tw-text-sm tw-font-medium tw-w-full'>
        {title}
      </h3>

      <div className='tw-mt-3 tw-w-full'>
        <span className='tw-px-1.5 tw-py-0.5 tw-text-gray-30 tw-text-xxs tw-bg-gray-bg tw-rounded-md'>{tag}</span>
        <span className='tw-ml-1.5 tw-text-gray-20 tw-text-xxs'>{desc}</span>
      </div>

      <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-mt-5'>
        <p className='tw-text-black tw-text-xs tw-font-medium'>{percent}%</p>
        <p className='tw-text-gray-20 tw-text-xxs'>
          {value}/{total} {unit}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="tw-flex tw-gap-2 tw-w-full tw-h-2 tw-rounded-full tw-mt-3 tw-overflow-hidden">
        <div
          className="tw-flex tw-h-full tw-bg-green tw-rounded-full tw-transition-all tw-duration-300"
          style={{ width: `${percent}%` }}
        />
        <div className='tw-flex-1 tw-bg-gray-bg tw-h-gull' />
      </div>
    </div>
  )
}

const GoalsListPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-start tw-w-full'>
      <TitleWithEllipsis title='Goals List' />
      {
        goalDetailDummyData.map((goalDetail, index) => (
          <GoalDetailCard
            key={index}
            title={goalDetail.title}
            tag={goalDetail.tag}
            desc={goalDetail.desc}
            percent={goalDetail.percent}
            value={goalDetail.value}
            total={goalDetail.total}
            unit={goalDetail.unit}
          />
        ))
      }
    </div>
  )
}

export default GoalsListPanel
