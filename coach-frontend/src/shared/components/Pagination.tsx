import { CaretRightSvg, CaretLeftSvg } from './Svg'

interface PaginationProps {
  currentPage: number
  totalCounts: number
  countPerPage: number
  onPageChange: (page: number) => void
}

const arrowDisableColor = '#BCBEC3'
const arrowAbleColor = '#212738'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCounts,
  countPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCounts / countPerPage)

  const getPaginationRange = () => {
    const range = []
    for (let i = 1; i <= totalPages; i++) {
      range.push(i)
    }
    return range
  }

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const paginationRange = getPaginationRange()

  const showingStart = (currentPage - 1) * countPerPage + 1
  const showingEnd = totalCounts !== 0 ? Math.min(currentPage * countPerPage, totalCounts) : 0

  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full mt-4 space-y-2 md:space-y-0'>
      {/* Showing Text */}
      <span className='text-gray-20 text-xs'>
        Showing <span className='text-gray-30 p-2 bg-gray-bg rounded-20'>{showingStart} - {showingEnd}</span> out of {totalCounts}
      </span>

      {/* Pagination Controls */}
      <nav className='flex items-center justify-center space-x-2'>
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-gray-bg ${
            currentPage === 1
              ? 'cursor-not-allowed'
              : ''
          }`}
        >
          <CaretLeftSvg width='14' height='14' color={currentPage === 1 ? arrowDisableColor : arrowAbleColor}/>
        </button>

        {/* Page Numbers */}
        {paginationRange.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`flex justify-center items-center w-10 h-10 rounded-full bg-gray-bg ${
              page === currentPage
                ? 'bg-green text-gray-30'
                : 'bg-gray-bg text-gray-30 hover:text-black'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-gray-bg ${
            currentPage === totalPages
              ? 'cursor-not-allowed'
              : ''
          }`}
        >
          <CaretRightSvg width='14' height='14' color={currentPage === totalPages ? arrowDisableColor : arrowAbleColor}/>
        </button>
      </nav>
    </div>
  )
}

export default Pagination
