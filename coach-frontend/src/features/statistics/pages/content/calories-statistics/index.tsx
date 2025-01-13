import { TitleWithEllipsis } from '@/shared/components'
import { CaloriesCardColorSet } from './CaloriesCardColorSet'
import { ColorSet } from '@/features/statistics/types'
import CaloriesChart from './CaloriesChart'

type NutritionTitle = 'Calories' | 'Protein' | 'Carbs' | 'Fats'

interface Nutrition {
  title: NutritionTitle
  total: number
  value: number
}

const nutritionDummyData: Nutrition[] = [
  {
    title: 'Calories',
    total: 2500,
    value: 1750
  },
  {
    title: 'Protein',
    total: 32,
    value: 25
  },
  {
    title: 'Carbs',
    total: 120,
    value: 67
  },
  {
    title: 'Fats',
    total: 48,
    value: 42
  }
]

const getColorSetByTitle = (title: NutritionTitle): ColorSet => {
  switch (title) {
    case 'Calories':
      return CaloriesCardColorSet.calories
    case 'Protein':
      return CaloriesCardColorSet.protein
    case 'Carbs':
      return CaloriesCardColorSet.carbs
    case 'Fats':
      return CaloriesCardColorSet.fats
  }
}

const NutritionCard: React.FC<Nutrition> = ({ title, total, value }) => {

  const colorSet = getColorSetByTitle(title)

  const progressPercentage = Math.min((value / total) * 100, 100)

  return (
    <div className={`tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full tw-gap-2 tw-xl:tw-gap-3 tw-px-3 tw-py-3 tw-xl:tw-py-6 tw-rounded-2xl ${colorSet.bgColor}`}>
      <h4 className='tw-text-black tw-text-sm tw-font-medium'>{title}</h4>

      {/* Progress Bar */}
      <div className={`tw-w-full tw-h-2 tw-rounded-md tw-overflow-hidden ${colorSet.progressBgColor}`}>
        <div
          className={`tw-h-full tw-rounded-md ${colorSet.progressColor}`}
          style={{
            width: `${progressPercentage}%`,
          }}
        />
      </div>

      <div className=''>
        <span className='tw-text-gray-30 tw-text-sm tw-font-medium'>{total.toLocaleString()}</span>
        <span className='tw-text-gray-20 tw-text-xxs'> / {value.toLocaleString()} cal</span>
      </div>
    </div>
  )
}

const CaloriesStatistics = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-items-center'>
      <TitleWithEllipsis title='Calories Statistics' />

      <div className='tw-flex tw-justify-start tw-items-center tw-w-full tw-text-gray-20 tw-text-xxs'>
        <div className='tw-bg-blue tw-w-2.5 tw-h-2.5 tw-rounded-sm mr-1.5' />
        <p>Active Calories</p>
        <div className='tw-bg-gray-20 tw-w-2.5 tw-h-2.5 tw-rounded-sm ml-4 mr-1.5' />
        <p>Resting Calories</p>
      </div>

      <div className='tw-w-full tw-h-70 tw-border-stroke tw-border'>
        <CaloriesChart />
      </div>

      <div className='tw-grid tw-grid-cols-2 tw-xl:tw-grid-cols-4 tw-gap-4 tw-w-full'>
        {
          nutritionDummyData.map((nutrition, index) => {
            return (
              <NutritionCard key={index} title={nutrition.title} total={nutrition.total} value={nutrition.value} />
            )
          })
        }
      </div>
    </div>
  )
}

export default CaloriesStatistics
