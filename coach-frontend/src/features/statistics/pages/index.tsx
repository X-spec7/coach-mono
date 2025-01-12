import ContentHeader from './content-header'
import StatisticsContent from './content'

const StatisticsPage = () => {
  
  return (
      <div className='tw-flex tw-flex-col tw-gap-4 tw-p-4 tw-rounded-4xl tw-bg-white'>
        <ContentHeader workoutTime={{hour: 12, minute: 35}} totalWorkouts={14} />
        <StatisticsContent />
      </div>
  )
}

export default StatisticsPage
