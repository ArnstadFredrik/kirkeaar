import { advent } from './advent.js'
import { christmas } from './christmas.js'
import { epiphany } from './epiphany.js'
import { lent } from './lent.js'
import { easter } from './easter.js'
import { pentacost } from './pentacost.js'
import { trinity } from './trinity.js'
import { commemorativeDays } from './commemorative.js'
import { calculateStartYear } from '../utils/calculateStartYear.js'
import makePayload from '../utils/makePayload.js'

const churchYear = ({ date, year, commemorative = false }) => {
  // Constants
  // console.info({ date, year })
  let startYear

  if (year) {
    startYear = Number(year)
    console.info('Generating based on year')
  } else {
    startYear = calculateStartYear(date)
    console.info('Generating based on date')
  }
  // console.log(bug)

  // Period functions
  const adventDays = advent(startYear)
  const christmasDays = christmas(startYear)
  const epiphanyDays = epiphany(startYear)
  const lentDays = lent(startYear)
  const easterDays = easter(startYear)
  const pentacostDays = pentacost(startYear)
  const trinityDays = trinity(startYear)

  const payload = [
    ...adventDays,
    ...christmasDays,
    ...epiphanyDays,
    ...lentDays,
    ...easterDays,
    ...pentacostDays,
    ...trinityDays,
  ]
  if (commemorative === true) {
    const days = commemorativeDays(startYear)
    for (let day of days) {
      payload.push(
        makePayload({
          startYear,
          name: day[0],
          dateTime: day[1],
          period: 'commemorative',
        })
      )
    }
  }
  // console.log({ churchYear: payload })
  return payload
}

export default churchYear
