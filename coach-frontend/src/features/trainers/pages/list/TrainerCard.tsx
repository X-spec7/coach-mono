import { Trainer } from '@/shared/types'
import Image from 'next/image'
import { MonitorSvg } from '@/shared/components/Svg'

const defaultBannerImageUrl = ''

interface TrainerCardInterface {
  trainer: Trainer
}

const TrainerCard: React.FC<TrainerCardInterface> = ({ trainer }) => {
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-justify-between w-60 tw-h-75 tw-py-8 tw-border-stroke tw-border tw-rounded-20'>
      <div className='w-29 tw-h-29 tw-rounded-20'>
        <Image
          src={trainer.bannerUrl ?? defaultBannerImageUrl}
          width={114}
          height={114}
          // add trainer id or name to alt
          alt='trainer banner'
          className='tw-rounded-20'
        />
      </div>

      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3'>
        <p className='tw-text-lg tw-text-black tw-font-medium'>{trainer.name}</p>

        <div className='tw-flex tw-justify-center tw-items-center tw-gap-1.5'>
          <MonitorSvg width='16' height='16' color='#878A94' />
          <p className='tw-text-xs tw-text-gray-20'>{trainer.classes?.[0].title || 'No Title'}</p>
        </div>

        <span className='tw-text-gray-20 tw-text-xxs tw-py-1.5 tw-px-2.5 tw-bg-gray-bg tw-rounded-20'>
          {trainer.classes?.[0].category || 'No Category'}
        </span>
      </div>
    </div>
  )
}

export default TrainerCard
