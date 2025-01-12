import { Class } from '@/shared/types'
import { TitleWithEllipsis } from '@/shared/components'
import { MonitorSvg } from '@/shared/components/Svg'

interface IClassesProps {
  classes?: Class[]
}

// TODO: handle no classes case
const Classes: React.FC<IClassesProps> = ({ classes }) => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-3.5'>
      <TitleWithEllipsis title='Class' />

      {
        classes?.map((classItem, index) => (
          <div key={index} className='tw-flex tw-justify-start tw-items-center tw-gap-3.5'>
            <div className='tw-flex tw-justify-center tw-items-center w-8 tw-h-8 tw-bg-blue tw-rounded-full'>
              <MonitorSvg width='18' height='18' color='#4D5260' />
            </div>
            <div>
              <p className='tw-text-black tw-text-sm tw-font-medium'>{classItem.title}</p>
              <p className='tw-text-gray-20 tw-text-xs tw-mt-1'>{classItem.category}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Classes
