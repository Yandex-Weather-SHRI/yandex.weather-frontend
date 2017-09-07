export function getHashParam(paramName) {
  const regexp = new RegExp(`${paramName}=([^&|#]+)`)
  const result = regexp.exec(document.location.hash)
  return result ? result[1] : null
}
