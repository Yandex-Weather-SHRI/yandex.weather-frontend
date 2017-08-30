import { createReducer } from 'redux-act'

import { feedGetRequest, feedGetSuccess } from './actions'


const feedDefaultState = {
  fetching: false,
  list: [],
}

export const feedReducer = createReducer({
  [feedGetRequest](state) {
    return {
      ...state,
      fetching: true,
    }
  },

  [feedGetSuccess](state, list) {
    return {
      list,
      fetching: false,
    }
  },
}, feedDefaultState)
