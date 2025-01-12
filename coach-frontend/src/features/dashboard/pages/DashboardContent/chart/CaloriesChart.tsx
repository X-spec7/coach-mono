import Image from 'next/image'
import SemiCircleProgressBar from "react-progressbar-semicircle";

const imageSrc = '/images/needle.png'

interface CaloriesChartProps {
  degree: number
  progressDegree: number
}

const CaloriesChart: React.FC<CaloriesChartProps> = ({ degree, progressDegree }) => {
  return (
    <div className="tw-relative tw-w-full tw-h-full tw-rounded-lg tw-overflow-hidden">

      {/* Progress bar */}
      <div className='tw-flex tw-justify-center tw-items-end tw-w-full tw-h-full'>
        <SemiCircleProgressBar
          percentage={progressDegree}
          strokeWidth={16}
          stroke='#CEE9FF'
          background='#F4F5F5'
        />
      </div>

      {/* Rotating bar */}
      <div
        className="tw-absolute tw-bottom-0 tw-w-10 tw-left-1/2 tw-transform"
        style={{
          transform: `translateX(-50%) rotate(${-100 + progressDegree/100 * 180}deg)`,
        }}
      >
        <div className="tw-absolute tw-bottom-2 tw-left-2 tw-w-3 tw-h-3 tw-bg-white tw-rounded-full tw-border tw-border-gray-300" />

        <Image
          width={40}
          height={104}
          alt='caories chart needle'
          src={imageSrc}
        />
      </div>
    </div>
  )
}

export default CaloriesChart
