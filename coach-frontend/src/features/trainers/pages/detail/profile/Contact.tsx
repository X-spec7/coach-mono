import { EnvelopOpenSvg, PhoneSvg, HouseSvg } from '@/shared/components/Svg'
import { TitleWithEllipsis } from '@/shared/components'
import { ILayoutProps } from '@/shared/types/common.type'

interface IContact {
  email?: string
  phone?: string
  address?: string
}

const ContactDetailBox: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='tw-flex tw-justify-start tw-items-start tw-gap-3.5'>
      {children}
    </div>
  )
}

const ContactSvgBox: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-w-9.5 tw-h-9.5 tw-rounded-2xl tw-bg-green'>
      {children}
    </div>
  )
}

interface IContactDetailText {
  title: string
  content?: string
}

const ContactDetailText: React.FC<IContactDetailText> = ({ title, content }) => {
  return (
    <div className='tw-flex-1'>
      <p className='tw-text-gray-20 tw-text-xs'>{title}</p>
      <p className='tw-text-black tw-text-sm tw-break-words'>{content}</p> 
    </div>
  )
}

const Contact: React.FC<{contact?: IContact}> = ({ contact }) => {
  return (
    <div className='tw-flex tw-flex-col tw-w-full tw-gap-3.5'>
      <TitleWithEllipsis title='Contact' />

      {/* EMAIL */}
      <ContactDetailBox>
        <ContactSvgBox>
          <EnvelopOpenSvg width='18' height='18' color='#4D5260' />
        </ContactSvgBox>

        <ContactDetailText title='Email' content={contact?.email} />
      </ContactDetailBox>

      {/* PHONE */}
      <ContactDetailBox>
        <ContactSvgBox>
          <EnvelopOpenSvg width='18' height='18' color='#4D5260' />
        </ContactSvgBox>

        <ContactDetailText title='Phone' content={contact?.phone} />
      </ContactDetailBox>

      {/* ADDRESS */}
      <ContactDetailBox>
        <ContactSvgBox>
          <EnvelopOpenSvg width='18' height='18' color='#4D5260' />
        </ContactSvgBox>

        <ContactDetailText title='Address' content={contact?.address} />
      </ContactDetailBox>
    </div>
  )
}

export default Contact
