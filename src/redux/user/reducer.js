import { createReducer } from 'redux-act'

import * as actions from './actions'


export const defaultCategories = [
  {
    name: 'allergy',
    enabled: false,
  },
  {
    name: 'heart',
    enabled: false,
  },
  {
    name: 'joint',
    enabled: false,
  },
  {
    name: 'asthma',
    enabled: false,
  },
  {
    name: 'skin',
    enabled: false,
  },
]

const defaultUsersState = {
  oAuthToken: null,
  avatarUrl: '',
  login: '',
  settings: {
    categories: defaultCategories,
  },
}

const mergePayload = (state, payload) => ({ ...state, ...payload })

export const userReducer = createReducer({
  [actions.setTokenPure]: (state, payload) => ({ ...state, oAuthToken: payload }),
  [actions.setUserInfo]: mergePayload,
  [actions.setUserSettings]: mergePayload,
}, defaultUsersState)
