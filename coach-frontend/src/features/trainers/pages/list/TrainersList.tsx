import Link from 'next/link'

import trainersService from '../../service/trainers.service'
import TrainerCard from './TrainerCard'

interface ITrainersListProps {
  query: string
  expertise: string
  currentPage: number
}

const TrainersList: React.FC<ITrainersListProps> = async ({ query, currentPage, expertise }) => {
  const response = await trainersService.getTrainers({
    pageSize: 15,
    pageNum: currentPage,
    query: query,
    expertise: expertise
  })
  const trainers = response.trainers

  return (
    <div className='tw-grid tw-grid-cols-1 tw-sm:tw-grid-cols-2 tw-md:tw-grid-cols-3 tw-xl:tw-grid-cols-4 tw-2xl:tw-grid-cols-5 tw-gap-y-4 tw-justify-content-between tw-justify-items-center tw-align-items-center tw-w-full tw-min-h-150'>
      {
        trainers.map((trainer, index) => (
          // TODO: update url param in future
          <Link href={`/trainers/detail/1`} key={index}>
            <TrainerCard key={index} trainer={trainer} />
          </Link>
        ))
      }
    </div>
  )
}

export default TrainersList
