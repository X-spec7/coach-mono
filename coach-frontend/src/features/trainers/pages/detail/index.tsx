import { Trainer } from '@/shared/types'
import TrainerProfile from './profile'
import TrainingActivity from './TrainingActivity'
import TrainerSchedule from './TrainerSchedule'
import Reviews from './Reviews'

interface TrainerDetailPageProps {
  trainer: Trainer
}

const TrainerDetailPage: React.FC<TrainerDetailPageProps> = async ({ trainer }) => {

  if (trainer === undefined) {
    return (
      <div>No Trainer Found</div>
    )
  }

  return (
    <div className='tw-flex tw-justify-center tw-gap-4'>
      <TrainerProfile trainer={trainer}/>

      <div className='tw-flex tw-flex-[3] tw-flex-col tw-gap-4'>
        <TrainingActivity />
        <TrainerSchedule />
        <Reviews reviews={trainer.reviews} />
      </div>
    </div>
  )
}

export default TrainerDetailPage
