import { DoubleChecksSvg } from '@/shared/components/Svg'
import { IMessage } from '../types'

interface IChatItemProps {
  message: IMessage
}

const ChatItem: React.FC<IChatItemProps> = ({ message }) => {
  
  const sentChatItem = (
    <div className='flex flex-col items-end justify-start gap-0.5 w-full'>
      <article className='max-w-120 px-3 py-2.5 bg-blue rounded-b-20 rounded-tl-20 text-black text-sm'>{message.content}</article>
      <div className='flex justify-end items-center gap-0.5'>
        <p className='text-gray-20 text-xxs'>2: 50 PM</p>
        {message.isRead && (
          <DoubleChecksSvg width='16' height='16' color='#878A94' />
        )}
      </div>
    </div>
  )

  const receivedChatItem = (
    <div className='flex items-start justify-start gap-3 w-full'>
      <div className='w-9 h-9 rounded-full bg-green' />
      <div className='flex flex-1 flex-col justify-start items-start'>
        <article className='max-w-120 px-3 py-2.5 bg-white rounded-b-20 rounded-tr-20 text-black text-sm'>{message.content}</article>
        <p className='flex justify-end items-center gap-0.5 text-gray-20 text-xxs'>2: 50 PM</p>
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
