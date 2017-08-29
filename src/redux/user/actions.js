import { createAction } from 'redux-act'
import { request } from 'utils/fetchHelper'
import { API_URL } from 'constants/api'
import { defaultCategories } from './reducer'


const O_AUTH_TOKEN_KEY = 'oauth_token'

export const setTokenPure = createAction('user.setTokenPure')
export const setUserInfo = createAction('user.setUserInfo')
export const setUserSettings = createAction('user.setUserSettings')

// todo move api to class and extra thunk argument
export function requestLogin(nextState) {
  const PASSPORT_URL = encodeURI('https://oauth.yandex.ru/authorize'
    + '?response_type=token'
    + '&client_id=6ba9f5cc976344da85e5865f3bbd397f' // todo process.ENV?
    + `&state=${nextState}`)

  window.location.href = PASSPORT_URL
}

export function requestLogout() {
  window.localStorage.removeItem(O_AUTH_TOKEN_KEY)
  window.location.reload()
}

export function setToken(token) {
  return (dispatch) => {
    window.localStorage.setItem(O_AUTH_TOKEN_KEY, token)
    dispatch(setTokenPure(token))
  }
}

export function fetchAndSetUserInfo() {
  return (dispatch, getState) => {
    const { user: { oAuthToken: token } } = getState()
    if (!token) {
      throw new Error(`Attempted to get user data with falsy token=${token} in app state.`)
    }

    return fetch(`https://login.yandex.ru/info?oauth_token=${token}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(setUserInfo({
          avatarUrl: `https://avatars.yandex.net/get-yapic/${json.default_avatar_id}/islands-small`,
          login: json.login,
        }))
      })
  }
}

const mockCategories = defaultCategories.map(cat => ({ ...cat, enabled: true }))

export function createOrUpdateUserWithCategorySettings(categories = mockCategories) {
  return async (dispatch, getState) => {
    const { user: { login } } = getState()
    if (!login) {
      throw new Error(`Attempted to update user setting with falsy token=${login} in app state.`)
    }

    try {
      const responseCategories = await request.post(
        `${API_URL}/settings/categories`,
        { items: categories, login }
      )
      dispatch(setUserSettings({
        settings: responseCategories,
      }))
    }
    catch (e) {
      // todo
    }
  }
}

export function getCategoriesSettings() {
  return async (dispatch, getState) => {
    const { user: { login } } = getState()
    if (!login) {
      throw new Error(`Attempted to update user setting with falsy token=${login} in app state.`)
    }
    try {
      const responseCategories = await request.get(
        `${API_URL}/settings/categories`,
        { login }
      )
      dispatch(setUserSettings({
        settings: responseCategories,
      }))
      return Promise.resolve()
    }
    catch (e) {
      // todo
      return Promise.reject()
    }
  }
}


export function checkAuth() {
  return (dispatch) => {
    const token = window.localStorage.getItem(O_AUTH_TOKEN_KEY)
    if (token) {
      dispatch(setTokenPure(token))
      return dispatch(fetchAndSetUserInfo())
    }
    return Promise.resolve()
  }
}
