import readingsList from './readingsList.js'

const formatReadings = readings => {
  const payload = {}
  for (let readingType in readings) {
    const text = readings[readingType]
    if (readingType === 'F') {
      payload[readingType] = text[0]
    } else if (readings[readingType].length === 1) {
        payload[readingType] = {
            E: text[0]
        }
    } else {
      payload[readingType] = {
        L1: text[0],
        L2: text[1],
        E: text[2],
      }
    }
  }

  return payload
}
const getReadings = ({ day, number, startYear }) => {
  if (!day) return Error('No day')
  const readingListNames = [
    'I',
    'II',
    'III',
  ]
  const diff = Math.abs((startYear - 2019) % 3)
  const allReadings = formatReadings(readingsList[day])
  let currentReadingName

  if ('A' in allReadings) {
    currentReadingName = 'A'
  } else {
    currentReadingName = readingListNames[diff]
  }

  let currentReadings = { name: currentReadingName }

  if ('F' in allReadings) {
    currentReadings.text = {
      ...allReadings[currentReadingName],
      F: allReadings.F,
    }
  } else {
      currentReadings.text = {
          ...allReadings[currentReadingName],
      }
  }

  // currentReadings[currentReadingName] = allReadings[currentReadingName]

  let payload = {
    allReadings: allReadings,
    currentReadings,
  }
  return payload
}

export { getReadings }
