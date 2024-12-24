'use client'

import { SendButton } from '@/shared/components/Button'
import { EmotiSmileSvg, PaperClipSvg } from '@/shared/components/Svg'
import { useState } from 'react'

const MessageTypeBox = () => {
  const [message, setMessage] = useState('')

  const onClick = () => {
    if (message.trim() === '') {
      alert('Please enter a message before sending.')
      return
    }

    // Logic to handle message send (e.g., API call or socket emit)
    console.log('Message sent:', message)
    setMessage('') // Clear the input field after sending
  }

  return (
    <div className='flex justify-between items-center w-full p-2.5 bg-white rounded-20'>
      <div className='flex flex-1 justify-start items-center gap-2 bg-[#FFFFFF] p-4'>
        <EmotiSmileSvg
          width='18'
          height='18'
          color='#4D5260'
        />
        <input
          type='text'
          className='flex-1 max-h-20 border-none outline-none text-sm text-gray-30 bg-transparent'
          placeholder='Type your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <PaperClipSvg
          width='18'
          height='18'
          color='#4D5260'
        />
      </div>

      <SendButton
        title='Send'
        width='w-24'
        height='h-9.5'
        onClick={onClick}
      />
    </div>
  )
}

export default MessageTypeBox
