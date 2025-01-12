import React from 'react'

interface AddButtonProps {
  title?: string
  onClick?: () => {}
}

const AddButton: React.FC<AddButtonProps> = ({title, onClick}) => {
  return (
    <button
      className={`tw-flex tw-justify-center tw-items-center tw-bg-green tw-text-gray-30 tw-text-xxs
        ${title ? 'tw-px-2.5 tw-py-1.5 tw-rounded-20' : 'tw-p-1.5 tw-rounded-full'}
      `}
      onClick={onClick}
    >
      {/* Plus SVG */}
      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18" stroke="#212738" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 12H18" stroke="#212738" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {
        title && <h4>{title}</h4>
      }
    </button>
  )
}

export default AddButton
