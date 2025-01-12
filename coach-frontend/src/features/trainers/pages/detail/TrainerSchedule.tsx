import { Calendar } from '@/shared/components'
import { TimePeriodSelectButton } from '@/shared/components/Button'
import { TwoPeopleSvg, ClockSvg } from '@/shared/components/Svg'

interface ITrainerSchedule {
  date: string
  time: string
  title: string
  duration: number
  participants: number
}

interface ITrainerScheduleItemProps {
  trainerSchedule: ITrainerSchedule
}

const TrainerScheduleItem: React.FC<ITrainerScheduleItemProps> = ({ trainerSchedule }) => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-p-2'>
      <div className='tw-flex tw-justify-start tw-items-center tw-gap-4'>
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-1'>
          <p className='tw-text-gray-20 tw-text-xxs'>{trainerSchedule.date}</p>
          <p className='tw-text-black tw-text-xs tw-font-medium'>{trainerSchedule.time}</p>
        </div>

        <div className='tw-w-0.5 tw-bg-stroke tw-h-full' />
        <p className='tw-text-black tw-font-medium'>{trainerSchedule.title}</p>
      </div>

      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-1'>
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-1'>
          <ClockSvg width='12' height='12' color='#878A94' />
          <p className='tw-text-gray-20 tw-text-xxs'>{trainerSchedule.duration} min</p>
        </div>
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-1'>
          <TwoPeopleSvg width='12' height='12' color='#878A94' />
          <p className='tw-text-gray-20 tw-text-xxs'>{trainerSchedule.participants} participants</p>
        </div>
      </div>
    </div>
  )
}

const trainerScheduleDummyData: ITrainerSchedule[] = [
  {
    date: 'Sun, 2 Aug',
    time: '9:00 AM',
    title: 'Core Stability',
    duration: 45,
    participants: 10,
  },
  {
    date: 'Mon, 3 Aug',
    time: '7:00 AM',
    title: 'Strength & Conditioning',
    duration: 60,
    participants: 15,
  },
  {
    date: 'Wed, 5 Aug',
    time: '6:00 PM',
    title: 'Functional Strength Training',
    duration: 60,
    participants: 12,
  },
  {
    date: 'Fri, 7 Aug',
    time: '8:00 AM',
    title: 'Full-Body Strength',
    duration: 60,
    participants: 18,
  },
  {
    date: 'Sat, 8 Aug',
    time: '10:00 AM',
    title: 'Advanced Strength Training',
    duration: 75,
    participants: 20,
  },
]

const TrainerSchedule = () => {
  return (
    <div className='tw-flex tw-justify-start tw-items-start tw-p-4 tw-gap-4 tw-bg-white tw-rounded-4xl tw-max-h-90'>
      <div className='w-100 tw-h-100 tw-pt-4'>
        <Calendar />
      </div>

      <div className='tw-flex tw-flex-1 tw-flex-col tw-gap-2 tw-h-full tw-overflow-y-auto no-scrollbar'>
        <div className='tw-flex tw-justify-between tw-items-center'>
          <h3 className='tw-text-black tw-font-medium'>The Trainer Schedule</h3>
          <TimePeriodSelectButton options={['This Week', 'Today', 'This Month']} />
        </div>

        {
          trainerScheduleDummyData.map((trainerSchedule, index) => (
            <div key={index} className='tw-w-full'>
              <TrainerScheduleItem trainerSchedule={trainerSchedule} />

              {index < trainerScheduleDummyData.length - 1 && (
                <div className='tw-w-full tw-h-px tw-bg-gray-200 tw-my-1' />
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TrainerSchedule
