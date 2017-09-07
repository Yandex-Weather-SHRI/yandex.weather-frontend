import { APP_NAME } from 'constants/app'


export function getFullDocumentTitle(title) {
  if (title) {
    return `${APP_NAME} | ${title}`
  }
  return APP_NAME
}
