import { createAction } from 'redux-act'

import { request } from 'utils/fetchHelper'
import { CLIENT_ID } from 'constants/passport'


const O_AUTH_TOKEN_KEY = 'oauth_token'

export const setTokenPure = createAction('user.setTokenPure')
export const setUserInfo = createAction('user.setUserInfo')

export const getCategoriesSettingsRequest = createAction('settings.categories.get.request')
export const getCategoriesSettingsSuccess = createAction('settings.categories.get.success')
export const getSettingsSchemaRequest = createAction('settings.schema.get.request')
export const getSettingsSchemaSuccess = createAction('settings.schema.get.success')

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

export function createOrUpdateUserWithCategorySettings(categories) {
  return async (dispatch, getState) => {
    const { user: { login } } = getState()
    try {
      const responseCategories = await request.post('/v1/settings/categories', { items: categories, login })
      dispatch(getCategoriesSettingsSuccess(responseCategories))
    }
    catch (err) {
      // todo
    }
  }
}

export function setToken(token) {
  return (dispatch) => {
    window.localStorage.setItem(O_AUTH_TOKEN_KEY, token)
    dispatch(setTokenPure(token))
  }
}

export function fetchAndSetUserInfo() {
  return async (dispatch, getState) => {
    const { user: { oAuthToken: token } } = getState()

    try {
      const response = await fetch(`https://login.yandex.ru/info?oauth_token=${token}`)

      if (response.ok) {
        const { default_avatar_id, login } = await response.json()
        /* eslint-disable camelcase */
        dispatch(setUserInfo({
          login,
          avatarUrl: `https://avatars.yandex.net/get-yapic/${default_avatar_id}/islands-small`,
        }))
      }
      else {
        throw new Error(response.statusText)
      }
    }
    catch (error) {
      localStorage.removeItem(O_AUTH_TOKEN_KEY)
    }
  }
}

export function getCategoriesSettings() {
  return async (dispatch, getState) => {
    const { user: { login, settings } } = getState()

    if (!settings.categories.length || !Object.keys(settings.schema).length) {
      dispatch(getSettingsSchemaRequest())
      dispatch(getCategoriesSettingsRequest())

      try {
        const [schema, categories] = await Promise.all([
          request.get('/v1/settings/schema'),
          request.get(`/v1/settings/categories?login=${login}`),
        ])
        dispatch(getSettingsSchemaSuccess(schema))
        dispatch(getCategoriesSettingsSuccess(categories))
      }
      catch (e) {
        // todo
      }
    }
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
