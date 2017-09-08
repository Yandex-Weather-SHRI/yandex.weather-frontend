function getNameOfSomeNextDay(n) {
  const days = ['ПН', 'ВТ', ' СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const dayNumber = new Date().getDay() - 1
  return days[(dayNumber + n) % 7]
}

export function getNameOfNextDay() {
  return getNameOfSomeNextDay(1)
}
