interface BasicProgressBarProps {
  bgColor: string
  progressColor: string
  radius: string
  height: string
  progress: number
}

const BasicProgressBar: React.FC<BasicProgressBarProps> = ({
  bgColor,
  progressColor,
  radius,
  height,
  progress,
}) => {
  return (
    <div className={`${bgColor} ${height} ${radius} tw-w-full`}>
      <div
        className={`${progressColor} ${radius} tw-h-full`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}

export default BasicProgressBar
