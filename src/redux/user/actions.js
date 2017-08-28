import { createAction } from 'redux-act'


const O_AUTH_TOKEN_KEY = 'oauth_token'

export const setTokenPure = createAction('user.setTokenPure')
export const setUserInfo = createAction('user.setUserInfo')

// todo move api to class and extra thunk argument
export function requestLogin(nextRoute) {
  const PASSPORT_URL = encodeURI('https://oauth.yandex.ru/authorize'
    + '?response_type=token'
    + '&client_id=6ba9f5cc976344da85e5865f3bbd397f' // todo process.ENV?
    + `&state=${nextRoute}`)

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
