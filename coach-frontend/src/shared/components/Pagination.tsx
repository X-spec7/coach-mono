'use client'

import Link from 'next/link'
import { CaretRightSvg, CaretLeftSvg } from './Svg'
import { usePathname, useSearchParams } from 'next/navigation'

interface PaginationProps {
  countPerPage: number
  totalCounts: number
}

const arrowDisableColor = '#BCBEC3'
const arrowAbleColor = '#212738'

const Pagination: React.FC<PaginationProps> = ({
  countPerPage,
  totalCounts
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const totalPages = Math.ceil(totalCounts / countPerPage)

  const getPaginationRange = () => {
    const range = []
    for (let i = 1; i <= totalPages; i++) {
      range.push(i)
    }
    return range
  }

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const paginationRange = getPaginationRange()

  const showingStart = (currentPage - 1) * countPerPage + 1
  const showingEnd = totalCounts !== 0 ? Math.min(currentPage * countPerPage, totalCounts) : 0

  return (
    <div className='tw-flex tw-flex-col tw-md:tw-flex-row tw-items-center tw-justify-between tw-w-full tw-mt-4 space-y-2 tw-md:space-y-0'>
      {/* Showing Text */}
      <span className='tw-text-gray-20 tw-text-xs'>
        Showing <span className='tw-text-gray-30 tw-p-2 tw-bg-gray-bg tw-rounded-20'>{showingStart} - {showingEnd}</span> out of {totalCounts}
      </span>

      {/* Pagination Controls */}
      <nav className='tw-flex tw-items-center tw-justify-center space-x-2'>
        {/* Previous Button */}
        <PaginationArrow
          direction='left'
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        {/* Page Numbers */}
        {paginationRange.map((page) => (
          <PaginationNumber
            key={page}
            page={page}
            isActive={currentPage === page}
            href={createPageURL(page)}
          />
        ))}

        {/* Next Button */}
        <PaginationArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </nav>
    </div>
  )
}

const PaginationNumber = ({
  page,
  href,
  isActive,
}: {
  page: number | string
  href: string
  isActive: boolean
}) => {
  const className = `tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10 tw-rounded-full tw-text-gray-30 ${
    isActive
      ? 'tw-bg-green'
      : 'tw-bg-gray-bg tw-hover:tw-text-black'
  }`

  return isActive ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}

const PaginationArrow = ({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) => {
  const className = `tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-gray-bg ${
    isDisabled
      ? 'cursor-not-allowed pointer-events-none'
      : ''
  }`
  const icon =
    direction === 'left' ? (
      <CaretLeftSvg width='14' height='14' color={isDisabled ? arrowDisableColor : arrowAbleColor}/>
    ) : (
      <CaretRightSvg width='14' height='14' color={isDisabled ? arrowDisableColor : arrowAbleColor}/>
    )

    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link className={className} href={href}>
        {icon}
      </Link>
    )
}

export default Pagination
