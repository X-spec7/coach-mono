import { ArrowLeftSvg } from '../Svg'

interface BackButtonProps {
  buttonTitle: string
  handleBack: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ buttonTitle, handleBack }) => {

  const handleBackClick = () => {
    handleBack()
  }

  return (
    <button
      onClick={handleBackClick}
      className='tw-flex tw-justify-start tw-items-center tw-gap-2 tw-text-xs tw-text-gray-20 tw-cursor-pointer'
    >
      <ArrowLeftSvg width='16' height='16' color='#878A94' />
      <p>{buttonTitle}</p>
    </button>
  )
}

export default BackButton
