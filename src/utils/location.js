export function getHashParam(paramName) {
  const regexp = new RegExp(`${paramName}=([^&|#]+)`)
  return regexp.exec(document.location.hash)[1]
}
