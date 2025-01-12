
export const Tick: React.FC<{ticked: boolean}> = ({ ticked }) => {

  return (
    <div className={`tw-flex tw-justify-center tw-items-center w-6 tw-h-6 tw-rounded-lg
      ${ticked ? 'tw-bg-blue' : 'tw-bg-gray-bg tw-border-stroke tw-border-2'}
    `}>
      {
        ticked &&
        <svg fill='#000000' height='8px' width='12px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'  
          viewBox='0 0 512 512' enable-background='new 0 0 512 512'>
          <polygon points='437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94' stroke='#212738' strokeWidth={3}/>
        </svg>
      }
    </div>
  )
}
