export function getNumberWithSign(number) {
  const realNumber = parseInt(number, 10)
  if (isNaN(realNumber)) return ''
  if (realNumber === 0) return '0'
  return realNumber > 0 ? `+${realNumber}` : realNumber.toString()
}
