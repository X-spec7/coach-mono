import Image from 'next/image'

import { StarSvg } from '@/shared/components/Svg'
import { IReview } from '@/shared/types/trainer.type'

interface IReviewsProps {
  reviews?: IReview[]
}

const ReviewCard = ({review}: {review: IReview}) => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-w-full tw-p-4 tw-bg-white tw-rounded-20'>
      <div className='tw-flex tw-justify-start tw-items-center tw-gap-4'>
        <div className='tw-relative tw-w-9 tw-h-9'>
          <Image
            src={review.avatarUrl}
            width={36}
            height={36}
            alt={`${review.name} avatar`}
          />
        </div>

        <div className='tw-flex tw-flex-col tw-justify-start tw-items-start'>
          <p className='tw-text-black tw-text-sm tw-font-medium'>{review.name}</p>
          <div className='tw-flex tw-justify-start tw-items-center tw-gap-1'>
            <StarSvg width='14' height='14' color='#FFF080' />
            <p className='tw-text-gray-30 tw-text-xs'>{review.rating}/5</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className='tw-w-full tw-h-0.5 tw-bg-stroke' />

      <article className='tw-text-gray-30 tw-text-sm break-words'>{review.review}</article>
    </div>
  )
}

const Reviews: React.FC<IReviewsProps> = ({ reviews }) => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4'>
      <h3 className='tw-text-black tw-font-medium'>Reviews</h3>
      <div className='tw-grid tw-grid-cols-3 tw-gap-6'>
        {
          reviews?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        }
      </div>
    </div>
  )
}

export default Reviews
