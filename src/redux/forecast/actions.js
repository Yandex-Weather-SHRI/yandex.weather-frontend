import { createAction } from 'redux-act'
import { request } from 'utils/fetchHelper'


export const weatherGetRequest = createAction('weather.get.request')
export const weatherGetSuccess = createAction('weather.get.success')

export function fetchWeather() {
  return async (dispatch, getState) => {
    const { forecast: { fetched } } = getState()

    if (!fetched) {
      try {
        const response = await request.get('/v1/forecast')
        dispatch(weatherGetSuccess(response))
      }
      catch (error) {
        // TODO
        throw error
      }
    }
  }
}
