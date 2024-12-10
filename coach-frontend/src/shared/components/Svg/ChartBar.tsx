import React from 'react'

import { SvgProps } from '@/shared/types/common'

const ChartBarSvg: React.FC<SvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.6875 6.375C1.6875 6.16789 1.85539 6 2.0625 6H4.6875C4.89461 6 5.0625 6.16789 5.0625 6.375C5.0625 6.58211 4.89461 6.75 4.6875 6.75H2.4375V9.75C2.4375 9.95711 2.26961 10.125 2.0625 10.125C1.85539 10.125 1.6875 9.95711 1.6875 9.75V6.375Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.9375 9.75C0.9375 9.54289 1.10539 9.375 1.3125 9.375H10.6875C10.8946 9.375 11.0625 9.54289 11.0625 9.75C11.0625 9.95711 10.8946 10.125 10.6875 10.125H1.3125C1.10539 10.125 0.9375 9.95711 0.9375 9.75Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.3125 4.125C4.3125 3.91789 4.48039 3.75 4.6875 3.75H7.3125C7.51961 3.75 7.6875 3.91789 7.6875 4.125C7.6875 4.33211 7.51961 4.5 7.3125 4.5H5.0625V9.75C5.0625 9.95711 4.89461 10.125 4.6875 10.125C4.48039 10.125 4.3125 9.95711 4.3125 9.75V4.125Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.9375 1.875C6.9375 1.66789 7.10539 1.5 7.3125 1.5H9.9375C10.1446 1.5 10.3125 1.66789 10.3125 1.875V9.75C10.3125 9.95711 10.1446 10.125 9.9375 10.125H7.3125C7.10539 10.125 6.9375 9.95711 6.9375 9.75V1.875ZM7.6875 2.25V9.375H9.5625V2.25H7.6875Z"
        fill={color}
      />
    </svg>
  )
}

export default ChartBarSvg
