import R from 'ramda'
import { createReducer } from 'redux-act'

import { feedGetRequest, feedGetSuccess } from './actions'


const feedDefaultState = {
  fetching: false,
  list: [],
}

export const feedReducer = createReducer({
  [feedGetRequest](state) {
    return R.assoc('fetching', true)(state)
  },

  [feedGetSuccess](state, list) {
    return R.compose(
      R.assoc('fetching', false),
      R.assoc('list', list)
    )(state)
  },
}, feedDefaultState)
