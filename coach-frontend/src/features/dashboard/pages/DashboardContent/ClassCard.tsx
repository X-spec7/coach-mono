import { Class, ClassLevel } from "@/shared/types"

import { HeartBeatSvg } from "@/shared/components/Svg"
import KebabMenu from "@/shared/components/Menu/KebabMenu"
import { UserCircleSvg } from "@/shared/components/Svg"

interface ClassCardProps extends Omit<Class, 'durationPerSession' | 'price'>{}

const getColorByLevel = (level?: ClassLevel): string => {
  switch (level) {
    case 'Beginner':
      return 'tw-bg-blue'
    case 'Intermediate':
      return 'tw-bg-yellow'
    case 'Advanced':
      return 'tw-bg-green'
    case 'All Levels':
      return 'tw-bg-gray'
    default:
      return 'tw-bg-gray'
  }
}

const ClassCard: React.FC<ClassCardProps> = ({ category, title, tutor, videoNumber, sessionRange, level }) => {
  const color = getColorByLevel(level)
  
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-p-4 tw-bg-white tw-rounded-20'>
      <div className='tw-flex tw-items-center tw-justify-start tw-gap-3 tw-w-52'>
        <div className='tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10 tw-bg-blue tw-rounded-full'>
          <HeartBeatSvg width="26" height="29" color="#4D5260"/>
        </div>
        <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-1'>
          <span className='tw-px-[6px] tw-pb-[2px] tw-pt-[3px] tw-bg-blue-subtle tw-text-xxs2'>
            {category} Training
          </span>
          <h3 className='tw-text-black tw-text-xs tw-font-bold'>
            {title}
          </h3>
          <div className='tw-flex tw-justify-start tw-gap-1 tw-items-center tw-text-gray-20 tw-text-[11px]'>
            <UserCircleSvg width="14" height="14" color="#878A94"/>
            {tutor}
          </div>
        </div>
      </div>

      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-1'>
        <p className='tw-text-black tw-font-medium tw-text-xxs'>{videoNumber} videos</p>
        <p className='tw-text-gray-20 tw-text-xxs'>
          {sessionRange?.minimumDuration}-{sessionRange?.maximumDuration} m/session
        </p>
      </div>

      <div className='tw-w-21'>
        <span className={`tw-px-2 tw-py-1 tw-rounded-lg tw-text-black tw-text-xxs ${color}`}>{level}</span>
      </div>

      <KebabMenu />

    </div>
  )
}

export default ClassCard
