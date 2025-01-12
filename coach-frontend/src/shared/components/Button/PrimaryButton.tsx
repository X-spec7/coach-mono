import { PrimaryButtonProps } from '@/shared/types/common.type'

const PrimaryButton: React.FC<PrimaryButtonProps> = ({width, height, title, onClick}) => {
  return (
    <button
      className={`tw-bg-green tw-text-gray-30 ${width} ${height}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default PrimaryButton
