import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultUsersState = {
  oAuthToken: null,
}

export const userReducer = createReducer({
  [actions.setTokenPure]: (state, payload) => ({ ...state, oAuthToken: payload }),
}, defaultUsersState)
