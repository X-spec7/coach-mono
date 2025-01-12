interface IOverview {
  experience?: number
  members?: number
  rating?: number
}

// TODO: undefined data case
const Overview: React.FC<IOverview> = ({ experience, members, rating }) => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-bg-blue tw-rounded-20 tw-px-4 tw-py-3.5'>
      {/* EXPERIENCE */}
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
        <p className='tw-text-black tw-text-lg tw-font-bold'>{experience} <span className='tw-text-xs tw-text-black tw-font-medium'>yrs</span></p>
        <p className='tw-text-gray-30 tw-text-xs'>Experience</p>
      </div>

      {/* MEMBERS */}
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
        <p className='tw-text-black tw-text-lg tw-font-bold'>
          {
            members && (
              members < 100
              ? members
              : `${Math.floor(members / 50) * 50}+`
            )
          }
        </p>
        <p className='tw-text-gray-30 tw-text-xs'>Members</p>
      </div>

      {/* RAITING */}
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
        <p className='tw-text-black tw-text-lg tw-font-bold'>
          {rating}
          <span className='tw-text-xs tw-text-black tw-font-medium'>/5.0</span>
        </p>
        <p className='tw-text-gray-30 tw-text-xs'>Rating</p>
      </div>
    </div>
  )
}

export default Overview
