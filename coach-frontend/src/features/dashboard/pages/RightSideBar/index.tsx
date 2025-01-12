import Profile from './Profile'
import MySchedule from './MySchedule'
import RecentActivity from './RecentActivity'
import { Calendar } from '@/shared/components'

const profileDummyData = {
  fullname: 'Mario Rossi',
  level: 'Advanced',
  number: 14750,
  weight: 75,
  height: 175,
  age: 29,
}

const RightSideBar = () => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-5 tw-px-3.5 tw-pt-4 tw-pb-4.5 tw-w-85 tw-bg-white tw-rounded-4xl'>
      <Profile
        fullname={profileDummyData.fullname}
        level={profileDummyData.level}
        number={profileDummyData.number}
        weight={profileDummyData.weight}
        height={profileDummyData.height}
        age={profileDummyData.age}
      />
      <Calendar />
      <MySchedule />
      <RecentActivity />
    </div>
  )
}

export default RightSideBar
