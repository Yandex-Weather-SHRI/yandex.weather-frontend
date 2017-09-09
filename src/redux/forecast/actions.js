import { createAction } from 'redux-act'


export const weatherGetRequest = createAction('weather.get.request')
export const weatherGetSuccess = createAction('weather.get.success')

export function fetchWeather() {
  return async (dispatch, getState) => {
    const { forecast: { fetched } } = getState()

    if (!fetched) {
      try {
        const response = await fetch('https://weather-forecast-api.herokuapp.com/v1/forecast')
        const json = await response.json()
        dispatch(weatherGetSuccess(json))
      }
      catch (error) {
        // TODO
      }
    }
  }
}
