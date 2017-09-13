import R from 'ramda'
import { createReducer } from 'redux-act'

import { feedGetRequest, feedGetSuccess, removeFeedItem, addSuggestionFeedCardRequest } from './actions'


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

  [removeFeedItem](state, id) {
    const list = state.list.filter(item => item.id !== id)
    return R.assoc('list', list)(state)
  },

  [addSuggestionFeedCardRequest](state, id) {
    const list = state.list.map(item => item.id === id ? { ...item, type: 'alert' } : item)
    return R.assoc('list', list)(state)
  },
}, feedDefaultState)
