import React from 'react'
import Link from 'next/link'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-mt-4'>
      <div className='tw-flex tw-items-center tw-text-sm'>
        <h2 className='tw-text-gray-20 tw-font-medium mr-6'>Copyright © 2024 Coa-ch</h2>
        <div className='tw-flex tw-justify-start tw-items-center tw-gap-4 tw-text-gray-10'>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Term and conditions</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>

      <Socials />

    </div>
  )
}

export default Footer
