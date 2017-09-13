import R from 'ramda'
import { createReducer } from 'redux-act'

import * as actions from './actions'


const feedDefaultState = {
  fetching: false,
  list: [],
}

export const feedReducer = createReducer({
  [actions.feedGetRequest](state) {
    return R.assoc('fetching', true)(state)
  },

  [actions.feedGetSuccess](state, list) {
    return R.compose(
      R.assoc('fetching', false),
      R.assoc('list', list)
    )(state)
  },

  [actions.removeFeedItem](state, id) {
    const list = state.list.filter(item => item.id !== id)
    return R.assoc('list', list)(state)
  },

  [actions.subscribeToCategoryRequest](state, category) {
    const list = state.list.map(item => item.category === category ? { ...item, type: 'alert' } : item)
    return R.assoc('list', list)(state)
  },

  [actions.unsubscribeFromCategoryRequest](state, category) {
    const list = state.list.filter(item => item.category !== category)
    return R.assoc('list', list)(state)
  },
}, feedDefaultState)
