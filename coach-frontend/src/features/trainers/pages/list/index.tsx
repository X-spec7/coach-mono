import { Suspense } from 'react'

import { Pagination, Loader } from '@/shared/components'
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

  const response = await trainersService.getTotalTrainersCount({ query })
  // TODO: handle response error case

  return (
      <div className='tw-flex tw-flex-col tw-p-4 tw-gap-4 tw-bg-white tw-rounded-4xl'>
        <ContentHeader searchPlaceHolder={query} />

        {/* <!-- MAIN CONTENT --> */}
        <Suspense fallback={<Loader />}>
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
