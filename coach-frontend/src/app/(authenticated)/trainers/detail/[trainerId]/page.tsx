import { getTrainerById } from '@/dev/api'
import TrainerDetailPage from '@/features/trainers/pages/detail'

interface Params {
  params: {
    trainerId: string
  }
}

export async function generateMetadata({params: { trainerId }}: Params) {
  const trainer = await getTrainerById({id: trainerId})
  
  return {
    title: trainer ? `${trainer.name}'s Profile` : 'Trainer Profile',
    description: `Details about ${trainer?.name || 'this trainer'}.`,
  }
}

const TrainerDetail = async ({params: { trainerId }}: Params) => {

  console.log('trainer id: ', trainerId)
  const trainer = await getTrainerById({id: trainerId})

  if (trainer === null) {
    return <div>Loading...</div>
  }
  
  return (
    <TrainerDetailPage trainer={trainer} />
  )
}

export default TrainerDetail
