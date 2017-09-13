import { createAction } from 'redux-act'

import { updateOneUserSetting } from 'redux/user/actions'
import { request } from 'utils/fetchHelper'
import { hintUtil } from 'utils/hintUtil'


export const feedGetRequest = createAction('feed.get.request')
export const feedGetSuccess = createAction('feed.get.success')
export const feedGetFailure = createAction('feed.get.failure')
export const removeFeedItem = createAction('feed.removeItem')
export const addSuggestionFeedCardRequest = createAction('sugestion.feed.card.add')

export function getFeed() {
  return async (dispatch, getState) => {
    const { user: { login } } = getState()
    dispatch(feedGetRequest())

    try {
      const list = await request.get(`/v1/alerts?login=${login}`)
      dispatch(feedGetSuccess(list))
    }
    catch (error) {
      dispatch(feedGetFailure(error))
    }
  }
}

export function closeHint(hintId) {
  return async (dispatch) => {
    hintUtil.markSeen(hintId)
    dispatch(removeFeedItem(hintId))
  }
}

export function addSuggestionFeedCard(id, category) {
  return (dispatch) => {
    dispatch(addSuggestionFeedCardRequest(id))
    dispatch(updateOneUserSetting(category, true))
  }
}
