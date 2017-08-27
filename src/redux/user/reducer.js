import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultUsersState = {
  oAuthToken: null,
  avatarUrl: '',
  login: '',
}

const mergePayload = (state, payload) => ({ ...state, ...payload })

export const userReducer = createReducer({
  [actions.setTokenPure]: (state, payload) => ({ ...state, oAuthToken: payload }),
  [actions.setUserInfo]: mergePayload,
}, defaultUsersState)
