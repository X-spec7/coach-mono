'use client'

import { SendButton } from '@/shared/components/Button'
import { EmotiSmileSvg, PaperClipSvg } from '@/shared/components/Svg'
import { useEffect, useRef, useState } from 'react'

const MessageTypeBox = () => {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    adjustHeight()
  }, [message])

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`
    }
  }

  const onClick = () => {
    if (message.trim() === '') {
      alert('Please enter a message before sending.')
      return
    }

    console.log('Message sent:', message)
    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div className='tw-flex tw-justify-between tw-items-end tw-w-full tw-p-2.5 tw-bg-white tw-rounded-20'>
      <div className='tw-flex tw-flex-1 tw-justify-start tw-items-end tw-gap-2 tw-bg-[#FFFFFF] tw-p-4'>
        <EmotiSmileSvg
          width='24'
          height='24'
          color='#4D5260'
        />
        <textarea
          ref={textareaRef}
          className='tw-flex-1 tw-resize-none tw-border-none tw-outline-none tw-rounded-lg tw-px-3 tw-text-sm tw-focus:tw-outline-none tw-focus:tw-border-transparent tw-overflow-hidden'
          rows={1}
          placeholder='Type a message...'
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <PaperClipSvg
          width='18'
          height='18'
          color='#4D5260'
        />
      </div>

      <div className='tw-mb-2'>
        <SendButton
          title='Send'
          width='w-24'
          height='tw-h-9.5'
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default MessageTypeBox
