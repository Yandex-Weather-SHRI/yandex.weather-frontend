import { createAction } from 'redux-act'

import { updateOneUserSetting } from 'redux/user/actions'
import { getAvailableFilters } from 'redux/filters/actions'
import { request } from 'utils/fetchHelper'
import { hintUtil } from 'utils/hintUtil'


export const feedGetRequest = createAction('feed.get.request')
export const feedGetSuccess = createAction('feed.get.success')
export const feedGetFailure = createAction('feed.get.failure')
export const removeFeedItem = createAction('feed.removeItem')
export const subscribeToCategoryRequest = createAction('feed.category.subscribe')
export const unsubscribeFromCategoryRequest = createAction('feed.category.unsubscribe')

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

export function subscribeToCategory(category) {
  return async (dispatch) => {
    await dispatch(updateOneUserSetting(category, true))
    dispatch(subscribeToCategoryRequest(category))
    dispatch(getAvailableFilters())
  }
}

export function unsubscribeFromCategory(category) {
  return async (dispatch) => {
    await dispatch(updateOneUserSetting(category, false))
    dispatch(unsubscribeFromCategoryRequest(category))
    dispatch(getAvailableFilters())
  }
}
