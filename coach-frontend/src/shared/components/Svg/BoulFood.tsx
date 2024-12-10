import React from 'react'

import { SvgProps } from '@/shared/types/common'

const BoulFoodSvg: React.FC<SvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 8.125H16.8461C16.6891 6.41787 15.8999 4.831 14.6334 3.67564C13.3668 2.52028 11.7143 1.87978 10 1.87978C8.28566 1.87978 6.63318 2.52028 5.36665 3.67564C4.10012 4.831 3.31095 6.41787 3.15391 8.125H2.5C2.33424 8.125 2.17527 8.19085 2.05806 8.30806C1.94085 8.42527 1.875 8.58424 1.875 8.75C1.87775 10.2363 2.28679 11.6937 3.0579 12.9643C3.82901 14.235 4.93283 15.2707 6.25 15.9594V16.25C6.25 16.5815 6.3817 16.8995 6.61612 17.1339C6.85054 17.3683 7.16848 17.5 7.5 17.5H12.5C12.8315 17.5 13.1495 17.3683 13.3839 17.1339C13.6183 16.8995 13.75 16.5815 13.75 16.25V15.9594C15.0672 15.2707 16.171 14.235 16.9421 12.9643C17.7132 11.6937 18.1223 10.2363 18.125 8.75C18.125 8.58424 18.0592 8.42527 17.9419 8.30806C17.8247 8.19085 17.6658 8.125 17.5 8.125ZM15.5891 8.125H11.5719C12.3296 6.98819 13.476 6.16681 14.7961 5.81484C15.2277 6.51692 15.4985 7.30585 15.5891 8.125ZM13.5531 4.39297C13.6964 4.51016 13.8336 4.63385 13.9648 4.76406C12.3011 5.34934 10.9262 6.55219 10.125 8.12344H7.82031C8.21094 7.02846 8.93011 6.08079 9.87956 5.40988C10.829 4.73897 11.9624 4.37755 13.125 4.375C13.268 4.375 13.4109 4.38203 13.5531 4.39297ZM10 3.125C10.5015 3.12533 11.0008 3.19286 11.4844 3.32578C10.3066 3.61795 9.22663 4.21542 8.35334 5.05798C7.48005 5.90055 6.8443 6.95843 6.51016 8.125H4.41094C4.56597 6.75067 5.22135 5.48146 6.25212 4.55933C7.28288 3.6372 8.61696 3.12664 10 3.125ZM12.8641 15C12.755 15.0501 12.6627 15.1305 12.5982 15.2316C12.5336 15.3328 12.4995 15.4503 12.5 15.5703V16.25H7.5V15.5703C7.50046 15.4503 7.46637 15.3328 7.40182 15.2316C7.33726 15.1305 7.24496 15.0501 7.13594 15C6.03681 14.4942 5.09006 13.7082 4.39071 12.7209C3.69136 11.7336 3.26401 10.5797 3.15156 9.375H16.8461C16.7339 10.5794 16.3069 11.7332 15.6079 12.7205C14.909 13.7078 13.9628 14.4939 12.8641 15Z"
        fill={color}
      />
    </svg>
  )
}

export default BoulFoodSvg