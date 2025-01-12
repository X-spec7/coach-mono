'use client'

import React, { useState } from 'react'
import { CaretDownSvg, CaretUpSvg } from '../../Svg'

interface BasicDropdownProps {
  options: string[]
}

const BasicDropdown: React.FC<BasicDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className='tw-relative tw-inline-block'>
      <button
        className='tw-flex tw-justify-center tw-gap-2 tw-items-center tw-w-full tw-px-3 tw-py-2 tw-bg-gray-bg tw-rounded-20 tw-focus:tw-outline-none'
        onClick={toggleDropdown}
      >
        <span className='tw-text-xs tw-text-gray-30 tw-font-medium'>{selectedOption}</span>
        {
          isOpen ?
            <CaretUpSvg width='14' height='18' color='#4D5260' />
          : <CaretDownSvg width='14' height='18' color='#4D5260' />
        }
      </button>
      {isOpen && (
        <ul className='tw-absolute tw-z-10 tw-w-full tw-mt-2 tw-bg-gray-bg tw-border tw-border-gray-300 rounded shadow'>
          {options.map((option, index) => (
            <li
              key={index}
              className='tw-px-3 tw-py-2 tw-text-xs tw-text-gray-30 tw-font-medium tw-hover:tw-bg-gray-200 tw-cursor-pointer'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BasicDropdown
