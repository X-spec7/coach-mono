import { EllipsisMenu } from "./Menu"

interface TitleWithEllipsisProps {
  title: string

}

const TitleWithEllipsis: React.FC<TitleWithEllipsisProps> = ({ title }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <h3 className='text-black font-medium'>{title}</h3>
      <EllipsisMenu />
    </div>
  )
}

export default TitleWithEllipsis
