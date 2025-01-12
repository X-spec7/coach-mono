import { EllipsisMenu } from './Menu'

interface TitleWithEllipsisProps {
  title: string
  menus?: string[]
  onClick?: (menu: string) => void
}

const TitleWithEllipsis: React.FC<TitleWithEllipsisProps> = ({ title, menus, onClick }) => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-w-full'>
      <h3 className='tw-text-black tw-font-medium'>{title}</h3>
      <EllipsisMenu menus={menus ?? []} onClick={onClick} />
    </div>
  )
}

export default TitleWithEllipsis
