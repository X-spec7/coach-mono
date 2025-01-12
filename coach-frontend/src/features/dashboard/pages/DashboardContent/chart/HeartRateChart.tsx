import Image from 'next/image'

const tempHeartRateChartImage = '/images/heart-rate.png'

const HeartRateChart = () => {
  return (
    <div className='tw-relative tw-w-full tw-h-full'>
      <Image
        src={tempHeartRateChartImage}
        alt="heart rate chart"
        fill
        className="object-stretch"
      />
    </div>
  )
}

export default HeartRateChart
