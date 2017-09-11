import { createAction } from 'redux-act'

import { request } from 'utils/fetchHelper'
import { hintUtil } from '../../utils/hintUtil'


export const feedGetRequest = createAction('feed.get.request')
export const feedGetSuccess = createAction('feed.get.success')
export const feedGetFailure = createAction('feed.get.failure')
export const removeFeedItem = createAction('feed.removeItem')

export function getFeed() {
  return async (dispatch, getState) => {
    const { user: { settings: { schema }, login } } = getState()
    dispatch(feedGetRequest())

    try {
      const list = await request.get(`/v1/alerts?login=${login}`)
      dispatch(feedGetSuccess(list, schema))
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

