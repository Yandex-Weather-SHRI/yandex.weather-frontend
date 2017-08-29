import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultUsersState = {
  oAuthToken: null,
  avatarUrl: '',
  login: '',
  settings: {
    categories: actions.defaultCategories,
  },
}

const mergePayload = (state, payload) => ({ ...state, ...payload })

export const userReducer = createReducer({
  [actions.setTokenPure]: (state, payload) => ({ ...state, oAuthToken: payload }),
  [actions.setUserInfo]: mergePayload,
  [actions.setUserSettings]: mergePayload,
}, defaultUsersState)
