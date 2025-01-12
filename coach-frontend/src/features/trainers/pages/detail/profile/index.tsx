import Image from 'next/image'

import { Trainer } from '@/shared/types'
import { TitleWithEllipsis } from '@/shared/components'

import Overview from './Overview'
import Classes from './Classes'
import Contact from './Contact'
import Certification from './Certification'

interface TrainerProfileProps {
  trainer: Trainer
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {

  const profileContent = (
    <div className='tw-flex tw-flex-col tw-justify-start tw-items-center'>
      <TitleWithEllipsis title='Profile' />

      <div className='w-30 tw-h-30 tw-mt-5.5 tw-rounded-5xl'>
        <Image
          src={trainer.avatarUrl ?? ''}
          width={120}
          height={120}
          alt={`${trainer.name} avatar`}
          className='tw-rounded-5xl'
        />
      </div>

      <p className='tw-text-black tw-font-medium tw-text-2xl'>{trainer.name}</p>

      {/* TODO: replace with real availibility */}
      <p className='tw-text-sm tw-text-gray-30'>Available</p>
    </div>
  )

  return (
    <div className='tw-flex tw-flex-1 tw-flex-col tw-p-4 tw-gap-7 tw-bg-white tw-rounded-4xl '>
      {profileContent}

      <Overview experience={trainer.experience} members={trainer.members} rating={trainer.rating} />
      <Classes classes={trainer.classes} />
      <Contact contact={trainer.contact} />
      <Certification certifications={trainer.certification} />

    </div>
  )
}

export default TrainerProfile
