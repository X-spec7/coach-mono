import { ISvgProps } from '@/shared/types/common.type'

const SidebarSimple: React.FC<ISvgProps> = ({width, height, color}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3.125 3.125H16.875C17.2065 3.125 17.5245 3.2567 17.7589 3.49112C17.9933 3.72554 18.125 4.04348 18.125 4.375V15.625C18.125 15.9565 17.9933 16.2745 17.7589 16.5089C17.5245 16.7433 17.2065 16.875 16.875 16.875H3.125C2.79348 16.875 2.47554 16.7433 2.24112 16.5089C2.0067 16.2745 1.875 15.9565 1.875 15.625V4.375C1.875 4.04348 2.0067 3.72554 2.24112 3.49112C2.47554 3.2567 2.79348 3.125 3.125 3.125ZM16.875 4.375H13.75V15.625H16.875V4.375ZM3.125 15.625H12.5V4.375H3.125V15.625Z' fill={color}/>
    </svg>
  )
}

export default SidebarSimple
