import Image from 'next/image'

import { StarSvg } from '@/shared/components/Svg'
import { IReview } from '@/shared/types/trainer.type'

interface IReviewsProps {
  reviews?: IReview[]
}

const ReviewCard = ({review}: {review: IReview}) => {
  return (
    <div className='flex flex-col gap-4 w-full p-4 bg-white rounded-20'>
      <div className='flex justify-start items-center gap-4'>
        <div className='relative w-9 h-9'>
          <Image
            src={review.avatarUrl}
            width={36}
            height={36}
            alt={`${review.name} avatar`}
          />
        </div>

        <div className='flex flex-col justify-start items-start'>
          <p className='text-black text-sm font-medium'>{review.name}</p>
          <div className='flex justify-start items-center gap-1'>
            <StarSvg width='14' height='14' color='#FFF080' />
            <p className='text-gray-30 text-xs'>{review.rating}/5</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className='w-full h-0.5 bg-stroke' />

      <article className='text-gray-30 text-sm break-words'>{review.review}</article>
    </div>
  )
}

const Reviews: React.FC<IReviewsProps> = ({ reviews }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-black font-medium'>Reviews</h3>
      <div className='grid grid-cols-3 gap-6'>
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
