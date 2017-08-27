import { createAction } from 'redux-act'


export const setTokenPure = createAction('user.setTokenPure')

// todo move api to class and extra thunk argument

export function requestLogin(nextRoute) {
  const PASSPORT_URL = 'https://oauth.yandex.ru/authorize'
    + '?response_type=token'
    + '&client_id=6ba9f5cc976344da85e5865f3bbd397f' // todo process.ENV?
    + `&state=${nextRoute}`

  window.open(PASSPORT_URL, '_blank')
}

const O_AUTH_TOKEN_KEY = 'ouath_token'

export function setToken(token) {
  return (dispatch) => {
    window.localStorage.setItem(O_AUTH_TOKEN_KEY, token)
    dispatch(setTokenPure(token))
  }
}

// todo
export function initToken() {
  return (dispatch) => {
    const token = window.localStorage.getItem(O_AUTH_TOKEN_KEY)
    if (token) {
      dispatch(setTokenPure(token))
    }
  }
}

export function getUserInfo() {
  return (dispatch, getState) => {
    const { user: { oAuthToken: token } } = getState()
    if (!token) {
      throw new Error(`Attempted to get user data with falsy token=${token} in app state.`)
    }

    // todo передавать в заголовке
    return fetch(`https://login.yandex.ru/info?oauth_token=${token}`)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
      })
  }
}
