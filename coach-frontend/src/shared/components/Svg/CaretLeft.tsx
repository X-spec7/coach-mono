import { SvgProps } from '@/shared/types/common'

const CaretLeft: React.FC<SvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.0852 13.8977C11.3049 13.6781 11.3049 13.3219 11.0852 13.1023L6.983 9L11.0852 4.89775C11.3049 4.67808 11.3049 4.32192 11.0852 4.10225C10.8656 3.88258 10.5094 3.88258 10.2898 4.10225L5.78975 8.60225C5.57008 8.82192 5.57008 9.17808 5.78975 9.39775L10.2898 13.8977C10.5094 14.1174 10.8656 14.1174 11.0852 13.8977Z'
        fill={color}
      />
    </svg>
  )
}

export default CaretLeft
