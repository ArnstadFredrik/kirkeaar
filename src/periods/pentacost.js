import { getPinse } from '../constants/pinse.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'

const pentacost = startYear => {
  const pinse = getPinse(startYear)
  const computus = getComputus(startYear)
  const pentacostNames = [
    [
      'Kristi Himmelfartsdag',
      computus.plus({ days: 40 }).startOf('day'),
      'white',
    ],
    [
      'Søndag før Pinse',
      pinse.minus({ week: 1 }),
      'white',
    ],
    [
      'Pinseaften',
      pinse.minus({ day: 1 }),
      'red',
    ],
    [
      'Pinsedag',
      pinse,
      'red',
    ],
    [
      '2. Pinsedag',
      pinse.plus({ day: 1 }),
      'red',
    ],
  ]

  const payload = []

  for (let day of pentacostNames) {
    payload.push(makePayload(day[0], day[1], day[2]))
  }
  return payload
}

export { pentacost }
