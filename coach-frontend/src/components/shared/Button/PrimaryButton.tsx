import React from 'react'

interface PrimaryButtonProps {
  width?: string
  height?: string
  title: string
  onClick?: () => {}
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({width, height, title, onClick}) => {
  return (
    <button
      className={`bg-green text-gray-30 ${width} ${height}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default PrimaryButton
