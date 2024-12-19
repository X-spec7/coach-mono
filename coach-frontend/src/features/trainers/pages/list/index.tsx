import { Suspense } from 'react'

import { Pagination } from '@/shared/components'
import ContentHeader from './content-header'
import TrainersList from './TrainersList'
import { trainersService } from '../../service'

const countPerPage = 15

interface ITrainersPageProps {
  query: string
  currentPage: number
  expertise: string
}

const TrainersPage: React.FC<ITrainersPageProps> = async ({ query, expertise, currentPage}) => {

  const response = await trainersService.getTotalTrainersCount({query})
  // TODO: handle response error case

  return (
      <div className='flex flex-col p-4 gap-4 bg-white rounded-4xl'>
        <ContentHeader searchPlaceHolder={query} />

        {/* <!-- MAIN CONTENT --> */}
        <Suspense fallback={<div>Loading ...</div>}>
          <TrainersList
            query={query}
            expertise={expertise}
            currentPage={currentPage}
          />
        </Suspense>

        <Pagination
          countPerPage={countPerPage}
          totalCounts={response.totalCount}
        />
      </div>
  )
}

export default TrainersPage
