import { TitleWithEllipsis } from '@/shared/components'
import { ICertification } from '@/shared/types/trainer.type'
import { FileTextSvg } from '@/shared/components/Svg'

interface ICertificationProps {
  certifications?: ICertification[]
}

const CertificationCard = ({ certificationTitle, year }: { certificationTitle: string; year: number }) => {
  return (
    <div className='tw-flex tw-justify-start tw-items-center tw-gap-2 tw-p-3 tw-rounded-20 tw-border-stroke tw-border'>
      <div className='tw-flex tw-justify-center tw-items-center tw-w-9 tw-h-9 tw-bg-yellow tw-rounded-2xl'>
        <FileTextSvg width='18' height='18' color='#4D5260' />
      </div>

      <div className='tw-flex tw-flex-col tw-items-start tw-gap-1'>
        <p className='tw-text-black tw-text-xs tw-font-medium'>{certificationTitle}</p>
        <p className='tw-text-gray-20 tw-text-xxs'>{year}</p>
      </div>
    </div>
  )
}

const Certification: React.FC<ICertificationProps> = ({ certifications }) => {
  return (
    <div className='tw-flex tw-flex-col tw-w-full tw-gap-3.5'>
      <TitleWithEllipsis title='Certifications' />

      {
        certifications?.map((certification, index) => (
          <CertificationCard key={index} certificationTitle={certification.title} year={certification.year} />
        ))
      }
    </div>
  )
}

export default Certification
