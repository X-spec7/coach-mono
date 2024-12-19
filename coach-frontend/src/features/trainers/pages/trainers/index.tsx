'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

import { Header, Footer } from '@/shared/Layouts'
import ContentHeader from './content-header'
import { Pagination, Loader } from '@/shared/components'
import { Trainer } from '@/shared/types'
import trainersService from '../../service/trainers.service'
import TrainerCard from './TrainerCard'

const TrainersPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCounts, setTotalCounts] = useState<number>(0)
  const [countPerPage, setCountPerPage] = useState<number>(15)

  const [isLoading, setIsLoading] = useState(false)
  const [trainers, setTrainers] = useState<Trainer[]>([])

  const getTrainers = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await trainersService.getTrainers({
        pageNum: currentPage,
        pageSize: countPerPage,
      })
      setTrainers(response.trainers)
      setTotalCounts(response.total)
    } catch (error) {
      console.log('error in getting trainers: ', error)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, countPerPage])

  useEffect(() => {
    getTrainers()
  }, [currentPage, countPerPage, getTrainers])

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (isLoading) {
    return <Loader />
  }

  if (trainers.length === 0) {
    return (
      <div></div>
    )
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      <Header
        title='Trainers'
        description='Meet Your Fitness Experts'
      />

      {/* <!-- CONTENT AREA --> */}
      <div className='flex flex-col p-4 gap-4 bg-white rounded-4xl'>
        <ContentHeader />

        {/* <!-- MAIN CONTENT --> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 justify-content-between justify-items-center align-items-center w-full min-h-150'>
          {
            trainers.map((trainer, index) => (
              // TODO: update url param in future
              <Link href={`/trainers/detail/1`} key={index}>
                <TrainerCard key={index} trainer={trainer} />
              </Link>
            ))
          }
        </div>

        <Pagination
          currentPage={currentPage}
          totalCounts={totalCounts}
          countPerPage={countPerPage}
          onPageChange={onPageChange}
        />
      </div>

      <Footer />
    </div>
  )
}

export default TrainersPage
