import { SendButtonSvg } from '../Svg'
import { PrimaryButtonProps } from '@/shared/types/common.type'

const SendButton: React.FC<PrimaryButtonProps> = ({width, height, title, onClick}) => {
  return (
    <button
      className={`tw-flex tw-justify-center tw-items-center tw-rounded-20 tw-gap-2 tw-bg-green tw-text-gray-30 tw-font-medium ${width} ${height}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <SendButtonSvg width='16' height='20' color='#4D5260' />
    </button>
  )
}

export default SendButton
