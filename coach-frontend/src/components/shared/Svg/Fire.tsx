import React from 'react'

import { SvgProps } from '@/types/common'

const FireSvg: React.FC<SvgProps> = ({width, height}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4931 9.58377C11.3635 10.308 11.0151 10.975 10.4948 11.4952C9.9745 12.0154 9.30734 12.3636 8.58313 12.4931C8.55563 12.4976 8.52784 12.4998 8.5 12.5C8.37458 12.5 8.25375 12.4528 8.16148 12.3679C8.06921 12.2829 8.01223 12.1664 8.00185 12.0414C7.99146 11.9164 8.02843 11.7921 8.10542 11.6931C8.18242 11.5941 8.2938 11.5276 8.4175 11.5069C9.45312 11.3325 10.3319 10.4538 10.5075 9.41627C10.5297 9.28549 10.603 9.16888 10.7112 9.09211C10.8193 9.01534 10.9536 8.98468 11.0844 9.0069C11.2152 9.02911 11.3318 9.10236 11.4085 9.21055C11.4853 9.31873 11.516 9.45299 11.4937 9.58377H11.4931ZM13.5 9.00002C13.5 10.4587 12.9205 11.8577 11.8891 12.8891C10.8576 13.9206 9.45869 14.5 8 14.5C6.54131 14.5 5.14236 13.9206 4.11091 12.8891C3.07946 11.8577 2.5 10.4587 2.5 9.00002C2.5 7.25502 3.1875 5.47065 4.54125 3.6969C4.5841 3.64073 4.63837 3.59428 4.70047 3.56062C4.76258 3.52695 4.83112 3.50682 4.90157 3.50157C4.97201 3.49631 5.04278 3.50605 5.10919 3.53013C5.17561 3.55421 5.23616 3.59209 5.28687 3.64127L6.79437 5.1044L8.16938 1.32877C8.19685 1.25347 8.24202 1.18587 8.30108 1.13168C8.36015 1.07749 8.43138 1.0383 8.50877 1.01741C8.58615 0.996513 8.66743 0.994531 8.74574 1.01163C8.82406 1.02873 8.89711 1.0644 8.95875 1.11565C10.3256 2.25002 13.5 5.2844 13.5 9.00002ZM12.5 9.00002C12.5 6.1194 10.2631 3.63002 8.86187 2.3544L7.47 6.17127C7.44143 6.24966 7.3937 6.31966 7.33116 6.37489C7.26861 6.43011 7.19324 6.46881 7.11191 6.48745C7.03059 6.50609 6.94589 6.50408 6.86553 6.4816C6.78518 6.45913 6.71173 6.4169 6.65188 6.35877L5.00375 4.76002C4.00562 6.20065 3.5 7.62502 3.5 9.00002C3.5 10.1935 3.97411 11.3381 4.81802 12.182C5.66193 13.0259 6.80653 13.5 8 13.5C9.19347 13.5 10.3381 13.0259 11.182 12.182C12.0259 11.3381 12.5 10.1935 12.5 9.00002Z" fill="#878A94"/>
    </svg>
  )
}

export default FireSvg
