import { TitleWithEllipsis } from '@/shared/components'

interface WorkoutActivity {
  xaxis: string
  label: string
  percent: number
}

const workoutActivityDummy = [
  {
    xaxis: 'Sun',
    label: '2 Hours 15 Min',
    percent: 56.5
  },
  {
    xaxis: 'Mon',
    label: '2 Hours',
    percent: 50
  },
  {
    xaxis: 'Tue',
    label: '2 Hours 30 Min',
    percent: 62.5
  },
  {
    xaxis: 'Wed',
    label: '3 Hours',
    percent: 75
  },
  {
    xaxis: 'Thu',
    label: '2 Hours 40 Min',
    percent: 65
  },
  {
    xaxis: 'Fri',
    label: '2 Hours',
    percent: 50
  },
  {
    xaxis: 'Sat',
    label: '2 Hours 35 Min',
    percent: 63
  },
]

const VerticalProgressBar: React.FC<WorkoutActivity> = ({ xaxis, label, percent }) => {
  return (
    <div className='tw-flex tw-w-20 tw-flex-col tw-justify-between tw-gap-2 tw-items-center tw-h-full'>
      <div className='tw-flex tw-w-full tw-flex-col tw-justify-end tw-gap-2 tw-items-center tw-flex-1 tw-bg-gray-bg-subtle tw-rounded-20 tw-p-1.5'>
        <p className='tw-text-gray-20 tw-text-xxs2 tw-font-medium break-words tw-text-center'>{label}</p>
        <div
          className="tw-bg-blue tw-rounded-20 tw-w-full"
          style={{ height: `${percent}%` }}
        />
      </div>
      <p className='tw-text-gray-20 tw-text-xxs2 tw-font-medium'>{xaxis}</p>
    </div>
  )
}

const WorkoutActivityPanel = () => {
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-gap-4 tw-w-full tw-p-4 tw-border-stroke tw-border tw-rounded-20'>
      <TitleWithEllipsis title='Workout Activity' />

      <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-h-90'>
        {
          workoutActivityDummy.map((workout, index) => {
            return (
              <VerticalProgressBar
                key={index}
                xaxis={workout.xaxis}
                label={workout.label}
                percent={workout.percent}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default WorkoutActivityPanel
