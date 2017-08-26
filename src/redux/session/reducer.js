import { createReducer } from 'redux-act'

import { loginRequest, loginSuccess } from './actions'


const sessionState = {
  user: null,
}

export const sessionReducer = createReducer({
  [loginRequest](state, payload) {
    return state
  },

  [loginSuccess](state, payload) {
    return state
  },
}, sessionState)
