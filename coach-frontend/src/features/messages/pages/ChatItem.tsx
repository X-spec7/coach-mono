import { DoubleChecksSvg } from '@/shared/components/Svg'
import { IMessage } from '../types'

interface IChatItemProps {
  message: IMessage
}

const ChatItem: React.FC<IChatItemProps> = ({ message }) => {
  
  const sentChatItem = (
    <div className='tw-flex tw-flex-col tw-items-end tw-justify-start tw-gap-0.5 tw-w-full'>
      <article className='tw-max-w-120 tw-px-3 tw-py-2.5 tw-bg-blue tw-rounded-b-xl tw-rounded-tl-xl tw-text-black tw-text-sm'>{message.content}</article>
      <div className='tw-flex tw-justify-end tw-items-center tw-gap-0.5'>
        <p className='tw-text-gray-20 tw-text-xxs'>2: 50 PM</p>
        {message.isRead && (
          <DoubleChecksSvg width='16' height='16' color='#878A94' />
        )}
      </div>
    </div>
  )

  const receivedChatItem = (
    <div className='tw-flex tw-items-start tw-justify-start tw-gap-3 tw-w-full'>
      <div className='tw-w-9 tw-h-9 tw-rounded-full tw-bg-green' />
      <div className='tw-flex tw-flex-1 tw-flex-col tw-gap-0.5 tw-justify-start tw-items-start'>
        <article className='tw-max-w-120 tw-px-3 tw-py-2.5 tw-bg-white tw-rounded-b-xl tw-rounded-tr-xl tw-text-black tw-text-sm'>{message.content}</article>
        <p className='tw-flex tw-justify-end tw-items-center tw-gap-0.5 tw-pl-2 tw-text-gray-20 tw-text-xxs'>2: 50 PM</p>
      </div>
    </div>
  )

  if (message.isSent) {
    return sentChatItem
  } else {
    return receivedChatItem
  }
}

export default ChatItem
