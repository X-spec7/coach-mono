import { Header, Footer } from '@/shared/Layouts'
import ContentHeader from './content-header'
import StatisticsContent from './content'

const StatisticsPage = () => {
  
  return (
    <div className='flex flex-col gap-4 p-4'>
      <Header
        title='Statistics'
        description='Track Your Progress and Achievements'
      />
      
      {/* <!-- CONTENT AREA --> */}
      <div className='flex flex-col gap-4 p-4 rounded-4xl bg-white'>
        <ContentHeader workoutTime={{hour: 12, minute: 35}} totalWorkouts={14} />
        <StatisticsContent />
      </div>

      <Footer />
    </div>
  )
}

export default StatisticsPage
