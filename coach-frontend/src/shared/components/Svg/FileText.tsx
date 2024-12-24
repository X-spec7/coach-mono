import { ISvgProps } from '@/shared/types/common.type'

const FileText: React.FC<ISvgProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M3.142 2.017C3.35298 1.80603 3.63913 1.6875 3.9375 1.6875H10.6875C10.8367 1.6875 10.9798 1.74676 11.0852 1.85225L15.0227 5.78975C15.1282 5.89524 15.1875 6.03832 15.1875 6.1875V15.1875C15.1875 15.4859 15.069 15.772 14.858 15.983C14.647 16.194 14.3609 16.3125 14.0625 16.3125H3.9375C3.63913 16.3125 3.35298 16.194 3.142 15.983C2.93103 15.772 2.8125 15.4859 2.8125 15.1875V2.8125C2.8125 2.51413 2.93103 2.22798 3.142 2.017ZM10.4545 2.8125L3.9375 2.8125L3.9375 15.1875H14.0625V6.4205L10.4545 2.8125Z' fill={color}/>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M10.6875 1.6875C10.9982 1.6875 11.25 1.93934 11.25 2.25V5.625H14.625C14.9357 5.625 15.1875 5.87684 15.1875 6.1875C15.1875 6.49816 14.9357 6.75 14.625 6.75H10.6875C10.3768 6.75 10.125 6.49816 10.125 6.1875V2.25C10.125 1.93934 10.3768 1.6875 10.6875 1.6875Z' fill={color}/>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M6.1875 9.5625C6.1875 9.25184 6.43934 9 6.75 9H11.25C11.5607 9 11.8125 9.25184 11.8125 9.5625C11.8125 9.87316 11.5607 10.125 11.25 10.125H6.75C6.43934 10.125 6.1875 9.87316 6.1875 9.5625Z' fill={color}/>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M6.1875 11.8125C6.1875 11.5018 6.43934 11.25 6.75 11.25H11.25C11.5607 11.25 11.8125 11.5018 11.8125 11.8125C11.8125 12.1232 11.5607 12.375 11.25 12.375H6.75C6.43934 12.375 6.1875 12.1232 6.1875 11.8125Z' fill={color}/>
    </svg>

  )
}

export default FileText
