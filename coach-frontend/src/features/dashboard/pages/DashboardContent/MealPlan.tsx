import React from 'react'
import Image from 'next/image'

import { Meal, MealTime } from '@/shared/types'
import { mealDummyData } from '@/dev/dummy-data'

interface MealPlanCardProps extends Omit<Meal, 'nutrition' | 'healthScore'>{}

const getImageUrlByMealTitle = (mealName: string): string => {
  switch (mealName) {
    case 'Power Protein':
      return '/images/meal/power_protein.png'
    case 'Vegan Energy Boost':
      return '/images/meal/vegan_energy_boost.png'
    case 'Lean & Green':
      return '/images/meal/lean_green.png'
    default:
      return '/images/meal/power_protein.png'
  }
}

const getBgColorByMealTime = (mealTime: MealTime): string => {
  switch (mealTime) {
    case 'Breakfast':
      return 'tw-bg-blue'
    case 'Lunch':
      return 'tw-bg-yellow'
    case 'Dinner':
      return 'tw-bg-green'
    default:
      return 'tw-bg-blue'
  }
}

const MealPlanCard: React.FC<MealPlanCardProps> = ({mealTime, mealTitle, difficulty, calory, description}) => {
  const bgColor = getBgColorByMealTime(mealTime)
  const mealImageUrl = getImageUrlByMealTitle(mealTitle)

  return (
    <div className={`tw-flex tw-flex-col tw-p-4 ${bgColor} tw-rounded-20`}>
      <div className='tw-flex tw-justify-start tw-items-center tw-gap-3 tw-mb-4'>
        <Image
          width={84}
          height={84}
          src={mealImageUrl}
          alt={mealTitle}
          className='tw-rounded-xl'
        />

        <div className='tw-flex tw-flex-col tw-gap-[6px] tw-text-gray-30'>
          <div>
            <span className='tw-py-[2px] tw-px-[6px] tw-bg-white tw-rounded-md tw-text-xxs2'>
              {mealTime}
            </span>
          </div>
          <h3 className='tw-text-black tw-font-medium tw-text-xs'>{mealTitle}</h3>
          <p className='tw-text-xxs'>Medium</p>
          <p className='tw-text-xxs'>{calory.toLocaleString()} Cal</p>
        </div>
      </div>

      <div className='tw-w-full tw-h-[2px] tw-bg-white tw-mr-3 tw-mb-3'></div>

      <p className='tw-text-xxs tw-text-gray-30 tw-break-words'>{description}</p>
    </div>
  )
}

const mealPlanDummyData = mealDummyData.length > 3 ? mealDummyData.slice(0, 2) : mealDummyData

const MealPlan = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-min-w-60'>
      <div className='tw-flex tw-justify-between tw-items-center'>
        <h3 className='tw-text-black tw-font-medium'>Meal Plan</h3>
        <p className='tw-text-black'>...</p>
      </div>

      {
        mealPlanDummyData.map((mealData, index) => (
          <MealPlanCard
            key={index}
            mealTime={mealData.mealTime}
            mealTitle={mealData.mealTitle}
            difficulty={mealData.difficulty}
            calory={mealData.calory}
            description={mealData.description}
          />
        ))
      }
    </div>
  )
}

export default MealPlan
