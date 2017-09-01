export function getNameOfNextDay(n) {
  const days = ['ПН', 'ВТ', ' СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const dayNumber = new Date().getDay() - 1
  return days[(dayNumber + n) % 7]
}
