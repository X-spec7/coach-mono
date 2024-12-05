import { parseISO, format } from 'date-fns';

// time format
export function formatTimeTo12Hour(date: string): string {
  // const objectDate = format(parseISO(date), 'yyyy-MM-dd HH:mm:ss')
  // const objectDate = parseISO(date)
  const dateObj = new Date(date)
  let hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()

  console.log('dateObj: ', dateObj)
  console.log('hours: ', hours)
  console.log('minutes: ', minutes)

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  const formattedTime = `${hours} : ${minutes < 10 ? '0' + minutes : minutes} ${ampm}`
  return formattedTime
}
