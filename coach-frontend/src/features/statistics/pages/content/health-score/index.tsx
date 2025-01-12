import { TitleWithEllipsis } from '@/shared/components'
import { HeartBeatSvg } from '@/shared/components/Svg'
import { BasicProgressBar } from '@/shared/components'

interface HealthScorePanelProps {
  percent: number
  tag: string
}

const HealthScorePanel: React.FC<HealthScorePanelProps> = ({ percent, tag }) => {
  const wholeSegments = Math.floor(percent / 20)

  const remainder = percent - 20 * wholeSegments

  const remainderPercent = remainder * 100 / 20

  return (
    <div className='tw-flex tw-flex-col tw-justify-start tw-items-start tw-p-4 tw-xl:tw-py-8 tw-bg-blue tw-rounded-20'>
      <div className='tw-flex tw-items-center tw-gap-3 tw-w-full'>
        <HeartBeatSvg width='20' height='20' color='#4D5260' />
        <TitleWithEllipsis title='Health Score' />
      </div>

      <div className='tw-flex tw-justify-start tw-items-center tw-gap-3 tw-mt-8 tw-mb-2'>
        <p className='tw-text-2xl tw-font-medium tw-text-black'>
          {percent} %
        </p>
        <span className='tw-text-gray-30 tw-text-xs tw-font-medium tw-bg-blue-subtle tw-rounded-lg tw-px-2.5 tw-py-1'>{tag}</span>
      </div>

      {/* <!-- PROGRESS BAR --> */}
      <div className='tw-flex tw-justify-between tw-items-center tw-gap-2 tw-w-full'>
        {Array.from({ length: 5 }, (_, i) => {
          const percent = i < wholeSegments ? 100 : (i - 1) < wholeSegments ? remainderPercent : 0

          return (
            <BasicProgressBar
              key={i}
              bgColor='tw-bg-blue-subtle'
              progressColor='tw-bg-blue-dark'
              height='tw-h-2'
              progress={percent}
              radius='tw-rounded-md'
            />
          )
        })}
      </div>

      <p className='tw-text-gray-30 tw-text-xs tw-mt-2'>Keep up your good work, Kalendra!</p>
    </div>
  )
}

export default HealthScorePanel
