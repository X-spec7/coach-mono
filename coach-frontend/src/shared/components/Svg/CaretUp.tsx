import React from 'react'

import { SvgProps } from '@/shared/types/common'

const CaretUpSvg: React.FC<SvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.19064 8.62186C3.3615 8.79271 3.6385 8.79271 3.80936 8.62186L7 5.43122L10.1906 8.62186C10.3615 8.79271 10.6385 8.79271 10.8094 8.62186C10.9802 8.451 10.9802 8.174 10.8094 8.00314L7.30936 4.50314C7.1385 4.33229 6.8615 4.33229 6.69064 4.50314L3.19064 8.00314C3.01979 8.174 3.01979 8.451 3.19064 8.62186Z"
        fill={color}
      />
    </svg>
  )
}

export default CaretUpSvg
