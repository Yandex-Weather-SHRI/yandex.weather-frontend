export const localStorageUtil = {
  getItem(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    }
    catch (err) {
      return null
    }
  },

  setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  removeItem(key) {
    window.localStorage.removeItem(key)
  },
}

export const ONBOARDING_SETTINGS_KEY = 'ONBOARDING_SETTINGS_KEY'
