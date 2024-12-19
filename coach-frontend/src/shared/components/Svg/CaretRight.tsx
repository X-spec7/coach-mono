import { ISvgProps } from '@/shared/types/common.type'

const CaretRight: React.FC<ISvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.91475 13.8977C6.69508 13.6781 6.69508 13.3219 6.91475 13.1023L11.017 9L6.91475 4.89775C6.69508 4.67808 6.69508 4.32192 6.91475 4.10225C7.13442 3.88258 7.49058 3.88258 7.71025 4.10225L12.2102 8.60225C12.4299 8.82192 12.4299 9.17808 12.2102 9.39775L7.71025 13.8977C7.49058 14.1174 7.13442 14.1174 6.91475 13.8977Z'
        fill={color}
      />
    </svg>
  )
}

export default CaretRight
