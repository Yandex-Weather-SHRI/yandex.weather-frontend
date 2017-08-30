import { createAction } from 'redux-act'

import { request } from 'utils/fetchHelper'


export const feedGetRequest = createAction('feed.get.request')
export const feedGetSuccess = createAction('feed.get.success')
export const feedGetFailure = createAction('feed.get.failure')

export function getFeed() {
  return async (dispatch, getState) => {
    dispatch(feedGetRequest())

    try {
      const state = getState()
      const list = await request.get(`/v1/alerts?login=${state.user.login}`)
      dispatch(feedGetSuccess(list))
    }
    catch (error) {
      dispatch(feedGetFailure(error))
    }
  }
}
