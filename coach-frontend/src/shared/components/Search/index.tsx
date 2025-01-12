'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

interface SearchFieldProps {
  width: string
  height: string
  placeholder: string
}

const SearchField: React.FC<SearchFieldProps> = ({ width, height, placeholder }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    
    params.delete('page')
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  
  return (
    <div className={`tw-relative ${width} ${height} tw-bg-gray-bg tw-rounded-4xl`}>
      <button className='tw-absolute tw-left-3 tw-top-1/2 tw--translate-y-1/2'>
        <svg
          className='fill-body tw-hover:fill-primary'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z'
            fill=''
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z'
            fill=''
          />
        </svg>
      </button>

      <input
        type='text'
        placeholder={placeholder}
        className='tw-w-full tw-h-full tw-bg-transparent tw-pl-9 tw-font-regular tw-text-black placeholder:tw-text-gray-20 placeholder:tw-text-sm tw-focus:tw-outline-none'
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchField
