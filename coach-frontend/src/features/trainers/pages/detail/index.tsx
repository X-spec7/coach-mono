import { Trainer } from '@/shared/types'
import TrainerProfile from './profile'
import TrainingActivity from './TrainingActivity'
import TrainerSchedule from './TrainerSchedule'
import Reviews from './Reviews'

interface TrainerDetailPageProps {
  trainer: Trainer
}

const TrainerDetailPage: React.FC<TrainerDetailPageProps> = ({ trainer }) => {
  return (
    <div className='flex justify-center gap-4'>
      <TrainerProfile trainer={trainer}/>

      <div className='flex flex-[3] flex-col gap-4'>
        <TrainingActivity />
        <TrainerSchedule />
        <Reviews reviews={trainer.reviews} />
      </div>
    </div>
  )
}

export default TrainerDetailPage
