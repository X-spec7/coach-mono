import WorkoutActivityPanel from './workout-acitivity'
import CaloriesStatistics from './calories-statistics'
import WorkoutGoalsPanel from './workout-goals'
import GoalsListPanel from './goals-list'
import HealthScorePanel from './health-score'
import WeightDataPanel from './weight-data'

const StatisticsContent = () => {
  return (
    <div className='tw-grid tw-grid-cols-2 tw-gap-4 tw-w-full'>
      <div className='tw-grid tw-grid-cols-1 tw-xl:tw-grid-cols-2 tw-gap-4 tw-h-full'>
        <div className='tw-flex tw-flex-col tw-gap-4'>
          <HealthScorePanel percent={70} tag='Very Healthy' />
          <WeightDataPanel />
        </div>

        <div className='tw-flex tw-flex-col tw-gap-5 tw-justify-start tw-items-center'>
          <WorkoutGoalsPanel />
          <GoalsListPanel />
        </div>
      </div>

      <div className='tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-h-full'>
        <WorkoutActivityPanel />
        <CaloriesStatistics />
      </div>
    </div>
  )
}

export default StatisticsContent
