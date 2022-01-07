import { getComputus } from './computus.js'

const getPinse = startYear => {
  const dateComputus = getComputus(startYear)
  const pinse = dateComputus.plus({ days: 49 }).startOf('day')
  // console.log('getPinse:  ', pinse)
  return pinse
}

export { getPinse }
