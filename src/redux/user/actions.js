import { createAction } from 'redux-act'

import { request } from 'utils/fetchHelper'
import { CLIENT_ID } from 'constants/passport'


const O_AUTH_TOKEN_KEY = 'oauth_token'

export const setTokenPure = createAction('user.setTokenPure')
export const setUserInfo = createAction('user.setUserInfo')

export const getCategoriesSettingsRequest = createAction('get.categories.settings.request')
export const getCategoriesSettingsSuccess = createAction('get.categories.settings.success')

// todo move api to class and extra thunk argument
export function requestLogin(nextState) {
  const PASSPORT_URL = encodeURI('https://oauth.yandex.ru/authorize'
    + '?response_type=token'
    + `&client_id=${CLIENT_ID}`
    + `&state=${JSON.stringify(nextState)}`)

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

export function createOrUpdateUserWithCategorySettings(categories) {
  return async (dispatch, getState) => {
    const { user: { login } } = getState()
    if (!login) {
      throw new Error(`Attempted to update user setting with falsy token=${login} in app state.`)
    }
    try {
      const responseCategories = await request.post('/v1/settings/categories', { items: categories, login })
      dispatch(getCategoriesSettingsSuccess(responseCategories))
    }
    catch (err) {
      // todo
    }
  }
}

export function getCategoriesSettings() {
  return async (dispatch, getState) => {
    const { user: { login, settings } } = getState()

    if (!settings.categories.length) {
      dispatch(getCategoriesSettingsRequest())

      if (!login) {
        throw new Error(`Attempted to update user setting with falsy token=${login} in app state.`)
      }
      try {
        const categories = await request.get(`/v1/settings/categories?login=${login}`)
        dispatch(getCategoriesSettingsSuccess(categories))
        return Promise.resolve()
      }
      catch (e) {
        // todo
        return Promise.reject()
      }
    }

    return Promise.resolve()
  }
}

export function updateOneUserSetting(name, enabled) {
  return (dispatch, getState) => {
    const { user: { settings: { categories } } } = getState()
    const updatedCategories = categories.map(item => item.name === name ? { ...item, enabled } : item)
    return dispatch(createOrUpdateUserWithCategorySettings(updatedCategories))
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
