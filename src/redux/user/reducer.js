import R from 'ramda'
import { createReducer } from 'redux-act'

import * as actions from './actions'


const defaultUsersState = {
  fetching: true,
  oAuthToken: null,
  avatarUrl: '',
  login: '',
  settings: {
    schema: {},
    categories: [],
  },
}

const mergePayload = (state, payload) => ({ ...state, ...payload })

export const userReducer = createReducer({
  [actions.setTokenPure]: (state, payload) => ({ ...state, oAuthToken: payload }),
  [actions.setUserInfo]: mergePayload,

  [actions.getCategoriesSettingsRequest](state) {
    return R.assoc('fetching', true)(state)
  },

  [actions.getSettingsSchemaSuccess](state, schema) {
    return R.assocPath(['settings', 'schema'], schema)(state)
  },

  [actions.getCategoriesSettingsSuccess](state, categories) {
    return R.compose(
      R.assoc('fetching', false),
      R.assocPath(['settings', 'categories'], categories)
    )(state)
  },
}, defaultUsersState)
