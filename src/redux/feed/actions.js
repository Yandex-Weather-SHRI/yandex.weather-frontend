import { createAction } from 'redux-act'

import { request } from 'utils/fetchHelper'

import { alertsAdapter } from './adapters'


export const feedGetRequest = createAction('feed.get.request')
export const feedGetSuccess = createAction('feed.get.success')
export const feedGetFailure = createAction('feed.get.failure')

export function getFeed() {
  return async (dispatch, getState) => {
    const { user } = getState()
    dispatch(feedGetRequest())

    try {
      const list = await request.get(`/v1/alerts?login=${user.login}`)
      dispatch(feedGetSuccess(alertsAdapter(list)))
    }
    catch (error) {
      dispatch(feedGetFailure(error))
    }
  }
}
