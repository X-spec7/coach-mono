'use client'

import { SearchField } from '@/shared/components'
import { BasicDropdownButton } from '@/shared/components/Button'
import { PlusSvg, FadersHorizontalSvg } from '@/shared/components/Svg'

const classCategories = [
  'All Class Categories',
  'Fitness Class',
  'Strength Class',
  'Flexibility Class',
  'Mindfullness Class'
]

const handleAddTrainerButtonClick = () => {
  // 
}

const AddTrainerButton = () => {
  return (
    <button
      className='tw-flex tw-justify-center tw-items-center tw-gap-0.5 tw-py-1.5 tw-px-2.5 tw-bg-green tw-rounded-20'
      onClick={handleAddTrainerButtonClick}
    >
      <PlusSvg width='14' height='18' color='#4D5260' />
      <p className='tw-text-gray-30 tw-text-xxs tw-font-medium'>Add Trainer</p>
    </button>
  )
}

const FadeButton = () => {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-w-7.5 tw-h-7.5 tw-rounded-20 tw-bg-gray-bg'>
      <FadersHorizontalSvg width='18' height='18' color='#212738' />
    </div>
  )
}

const ContentHeader = ({ searchPlaceHolder } : { searchPlaceHolder: string}) => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-h-7.5'>
      <div className='tw-flex tw-justify-start tw-items-center tw-gap-3'>
        <SearchField
          width='w-56'
          height='tw-h-7.5'
          placeholder={searchPlaceHolder || 'Search for trainer'}
        />
        <BasicDropdownButton options = {classCategories} />
      </div>

      <div className='tw-flex tw-justify-end tw-items-center tw-gap-3'>
        <FadeButton />
        <AddTrainerButton />
      </div>
    </div>
  )
}

export default ContentHeader
