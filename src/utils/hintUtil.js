import { localStorageUtil } from './localStorageUtil'


export const hintUtil = {
  markSeen(hintId) {
    const key = this.getStorageKey(hintId)
    localStorageUtil.setItem(key, true)
  },

  isSeen(hintId) {
    const key = this.getStorageKey(hintId)
    return localStorageUtil.getItem(key)
  },

  getStorageKey(hintId) {
    return `${hintId}_hint_seen`
  },
}
